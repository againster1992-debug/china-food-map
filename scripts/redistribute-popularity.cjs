// 金字塔热度重分配算法
// 将popularity分布从"钟形"调整为"金字塔"(底大顶小,每级递减)
// 用法: node scripts/redistribute-popularity.cjs
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.resolve(__dirname, "..", "src", "data");

// 金字塔目标累积百分比(每级的上限百分位)
// pop=1: 0-17%, pop=2: 17-32%, pop=3: 32-45%, pop=4: 45-57%
// pop=5: 57-68%, pop=6: 68-78%, pop=7: 78-87%, pop=8: 87-94%
// pop=9: 94-99.3%, pop=10: 99.3-100%
const PYRAMID = [
  { pop: 1, maxPct: 0.17 },
  { pop: 2, maxPct: 0.32 },
  { pop: 3, maxPct: 0.45 },
  { pop: 4, maxPct: 0.57 },
  { pop: 5, maxPct: 0.68 },
  { pop: 6, maxPct: 0.78 },
  { pop: 7, maxPct: 0.87 },
  { pop: 8, maxPct: 0.94 },
  { pop: 9, maxPct: 0.993 },
  { pop: 10, maxPct: 1.0 },
];

// fame权重(用于次级排序,保证同popularity下名菜排更高)
const FAME_WEIGHT = { "普通": 1, "地方名吃": 2, "热门": 3, "名菜": 4 };

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// 1. 读取所有 foods-*.ts 文件
const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.startsWith("foods-") && f.endsWith(".ts"));

const allFoods = [];

for (const file of files) {
  const text = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
  const chunks = text.split(/\{\s*id:\s*"/);
  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    const endIdx = chunk.indexOf("},");
    const block = endIdx >= 0 ? chunk.slice(0, endIdx) : chunk;
    const idMatch = block.match(/^([^"]+)"/);
    const id = idMatch ? idMatch[1] : `unknown-${file}-${i}`;
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : "?";
    const provMatch = block.match(/province:\s*"([^"]+)"/);
    const province = provMatch ? provMatch[1] : "?";
    const cuisineMatch = block.match(/cuisine:\s*"([^"]+)"/);
    const cuisine = cuisineMatch ? cuisineMatch[1] : "?";
    const catMatch = block.match(/category:\s*"([^"]+)"/);
    const category = catMatch ? catMatch[1] : "?";
    const fameMatch = block.match(/fame:\s*"([^"]+)"/);
    const fame = fameMatch ? fameMatch[1] : null;
    const popMatch = block.match(/popularity:\s*(\d+)/);
    const popularity = popMatch ? parseInt(popMatch[1], 10) : null;
    allFoods.push({ id, name, province, cuisine, category, fame, popularity, file });
  }
}

const total = allFoods.length;
console.log(`总美食数: ${total}`);

// 2. 计算排序键并稳定排序
// 主键: popularity 升序; 次键: fame权重升序(普通在前,名菜在后)
const sorted = [...allFoods].sort((a, b) => {
  const pa = a.popularity ?? 0;
  const pb = b.popularity ?? 0;
  if (pa !== pb) return pa - pb;
  const fa = FAME_WEIGHT[a.fame] ?? 0;
  const fb = FAME_WEIGHT[b.fame] ?? 0;
  return fa - fb;
});

// 3. 按百分位分配新popularity
const updates = new Map(); // id -> {oldPop, newPop, oldFame, newFame, file}
const newDist = {};
for (let i = 0; i < total; i++) {
  const pct = (i + 1) / total; // 0~1
  let newPop = 1;
  for (const tier of PYRAMID) {
    if (pct <= tier.maxPct) {
      newPop = tier.pop;
      break;
    }
  }
  const f = sorted[i];
  const oldPop = f.popularity;
  const oldFame = f.fame;

  // 计算新fame(保持一致性)
  let newFame = oldFame;
  if (newPop >= 10) {
    newFame = "名菜";
  } else if (newPop >= 7) {
    // 7-9: 应为 名菜/热门
    if (oldFame === "名菜") newFame = "名菜";
    else newFame = "热门";
  } else if (newPop >= 4) {
    // 4-6: 应为 地方名吃/普通
    if (oldFame === "名菜" || oldFame === "热门") newFame = "地方名吃";
    else newFame = oldFame || "地方名吃";
  } else {
    // 1-3: 应为 普通/地方名吃
    if (oldFame === "名菜" || oldFame === "热门") newFame = "地方名吃";
    else newFame = oldFame || "普通";
  }

  updates.set(f.id, {
    oldPop,
    newPop,
    oldFame,
    newFame,
    file: f.file,
    name: f.name,
    province: f.province,
  });
  newDist[newPop] = (newDist[newPop] || 0) + 1;
}

// 4. 输出新分布
console.log("\n=== 金字塔分布结果 ===");
for (let p = 1; p <= 10; p++) {
  const count = newDist[p] || 0;
  const pct = ((count / total) * 100).toFixed(1);
  const bar = "█".repeat(Math.round(count / 20));
  console.log(`  pop=${String(p).padStart(2)}: ${String(count).padStart(4)} (${pct.padStart(4)}%) ${bar}`);
}

// 5. 统计变更数
let popChanged = 0, fameChanged = 0;
for (const [, u] of updates) {
  if (u.oldPop !== u.newPop) popChanged++;
  if (u.oldFame !== u.newFame) fameChanged++;
}
console.log(`\npopularity变更: ${popChanged} 条`);
console.log(`fame变更: ${fameChanged} 条`);

// 6. 按文件分组写回
const byFile = new Map();
for (const [id, u] of updates) {
  if (!byFile.has(u.file)) byFile.set(u.file, new Map());
  byFile.get(u.file).set(id, u);
}

let filesWritten = 0;
for (const [file, fileUpdates] of byFile) {
  const filePath = path.join(DATA_DIR, file);
  let text = fs.readFileSync(filePath, "utf8");

  // 找到所有 id 位置
  const idRegexGlobal = /id:\s*"([^"]+)"/g;
  const idPositions = [];
  let m;
  while ((m = idRegexGlobal.exec(text)) !== null) {
    idPositions.push({ id: m[1], start: m.index });
  }

  // 从后往前处理,避免位置偏移
  for (let i = idPositions.length - 1; i >= 0; i--) {
    const { id, start } = idPositions[i];
    const u = fileUpdates.get(id);
    if (!u) continue;

    const blockStart = start;
    const blockEnd = i + 1 < idPositions.length ? idPositions[i + 1].start : text.length;
    const block = text.slice(blockStart, blockEnd);
    let newBlock = block;

    if (u.oldPop !== u.newPop) {
      newBlock = newBlock.replace(/(popularity:\s*)\d+/, `$1${u.newPop}`);
    }
    if (u.oldFame !== u.newFame) {
      if (u.oldFame) {
        // 替换已有fame
        newBlock = newBlock.replace(/(fame:\s*)"[^"]+"/, `$1"${u.newFame}"`);
      } else {
        // 无fame字段,在popularity前插入
        newBlock = newBlock.replace(
          /(popularity:\s*\d+)/,
          `fame: "${u.newFame}",\n    $1`
        );
      }
    }

    if (newBlock !== block) {
      text = text.slice(0, blockStart) + newBlock + text.slice(blockEnd);
    }
  }

  fs.writeFileSync(filePath, text, "utf8");
  filesWritten++;
}

console.log(`\n已写入 ${filesWritten} 个文件`);

// 7. 输出各层级示例(便于检查)
console.log("\n=== 各层级示例(前5条) ===");
const byPop = {};
for (const [id, u] of updates) {
  if (!byPop[u.newPop]) byPop[u.newPop] = [];
  byPop[u.newPop].push({ id, ...u });
}
for (let p = 1; p <= 10; p++) {
  const items = byPop[p] || [];
  console.log(`\n  [pop=${p}] 示例:`);
  items.slice(0, 5).forEach((it) =>
    console.log(`    ${it.name.padEnd(16)} ${it.province.padEnd(6)} (原pop=${it.oldPop}, fame=${it.oldFame}→${it.newFame})`)
  );
}
