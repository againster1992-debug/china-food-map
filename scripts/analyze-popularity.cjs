// 分析当前美食数据的popularity分布
// 用法: node scripts/analyze-popularity.cjs
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.resolve(__dirname, "..", "src", "data");

// 收集所有 foods-*.ts 文件
const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.startsWith("foods-") && f.endsWith(".ts"));

// 正则提取关键字段
const idRe = /id:\s*"([^"]+)"/g;
const nameRe = /name:\s*"([^"]+)"/g;
const cuisineRe = /cuisine:\s*"([^"]+)"/g;
const provinceRe = /province:\s*"([^"]+)"/g;
const categoryRe = /category:\s*"([^"]+)"/g;
const typeRe = /type:\s*"([^"]+)"/g;
const fameRe = /fame:\s*"([^"]+)"/g;
const popRe = /popularity:\s*(\d+(?:\.\d+)?)/g;

const foods = [];

for (const file of files) {
  const text = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
  // 按对象块切分（粗略）: 每个对象以 { id 开始, 以 }, 或 },\n 结尾
  // 用更可靠的方式: 找出所有顶层对象的 { ... } 块
  // 我们采用简单办法: 找到每个 id: "..." 后, 取附近的字段
  // 改用 split: 按 id: " 切
  const chunks = text.split(/\{\s*id:\s*"/);
  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    // 取到下一个 }, 之前
    const endIdx = chunk.indexOf("},");
    const block = endIdx >= 0 ? chunk.slice(0, endIdx) : chunk;
    const idMatch = block.match(/^([^"]+)"/);
    const id = idMatch ? idMatch[1] : `unknown-${file}-${i}`;
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : "?";
    const cuisineMatch = block.match(/cuisine:\s*"([^"]+)"/);
    const cuisine = cuisineMatch ? cuisineMatch[1] : "?";
    const provinceMatch = block.match(/province:\s*"([^"]+)"/);
    const province = provinceMatch ? provinceMatch[1] : "?";
    const categoryMatch = block.match(/category:\s*"([^"]+)"/);
    const category = categoryMatch ? categoryMatch[1] : "?";
    const typeMatch = block.match(/type:\s*"([^"]+)"/);
    const type = typeMatch ? typeMatch[1] : "?";
    const fameMatch = block.match(/fame:\s*"([^"]+)"/);
    const fame = fameMatch ? fameMatch[1] : "?";
    const popMatch = block.match(/popularity:\s*(\d+(?:\.\d+)?)/);
    const popularity = popMatch ? parseInt(popMatch[1], 10) : null;
    foods.push({
      id,
      name,
      cuisine,
      province,
      category,
      type,
      fame,
      popularity,
      file,
    });
  }
}

console.log(`总美食数: ${foods.length}`);

// 1. popularity 分布
const popDist = {};
for (const f of foods) {
  const p = f.popularity === null ? "null" : String(f.popularity);
  popDist[p] = (popDist[p] || 0) + 1;
}
console.log("\n=== Popularity 分布 ===");
Object.keys(popDist)
  .sort((a, b) => {
    if (a === "null") return 1;
    if (b === "null") return -1;
    return parseInt(a) - parseInt(b);
  })
  .forEach((k) => console.log(`  pop=${k}: ${popDist[k]}`));

// 2. 缺失 popularity 的条目
const nullPop = foods.filter((f) => f.popularity === null);
console.log(`\n=== 缺失 popularity 的条目: ${nullPop.length} ===`);
nullPop.slice(0, 30).forEach((f) =>
  console.log(`  [${f.file}] ${f.id} ${f.name} (${f.province}/${f.cuisine})`)
);
if (nullPop.length > 30) console.log(`  ... and ${nullPop.length - 30} more`);

// 3. 按省份统计
const provinceStats = {};
for (const f of foods) {
  if (!provinceStats[f.province]) provinceStats[f.province] = { count: 0, popSum: 0, popDist: {} };
  provinceStats[f.province].count++;
  if (f.popularity !== null) {
    provinceStats[f.province].popSum += f.popularity;
    const k = String(f.popularity);
    provinceStats[f.province].popDist[k] = (provinceStats[f.province].popDist[k] || 0) + 1;
  }
}
console.log("\n=== 按省份统计 (省|总数|平均热度|高热度(>=9)|低热度(<=3)) ===");
const provinceRows = Object.keys(provinceStats)
  .map((p) => {
    const s = provinceStats[p];
    const avg = s.count > 0 ? (s.popSum / s.count).toFixed(2) : "0";
    const high = Object.entries(s.popDist)
      .filter(([k]) => parseInt(k) >= 9)
      .reduce((a, [, v]) => a + v, 0);
    const low = Object.entries(s.popDist)
      .filter(([k]) => parseInt(k) <= 3)
      .reduce((a, [, v]) => a + v, 0);
    return { province: p, count: s.count, avg, high, low };
  })
  .sort((a, b) => b.count - a.count);
provinceRows.forEach((r) =>
  console.log(`  ${r.province.padEnd(8)} | ${String(r.count).padStart(4)} | avg=${r.avg.padStart(5)} | high(>=9)=${r.high} | low(<=3)=${r.low}`)
);

// 4. 按菜系统计
const cuisineStats = {};
for (const f of foods) {
  if (!cuisineStats[f.cuisine]) cuisineStats[f.cuisine] = { count: 0, popSum: 0 };
  cuisineStats[f.cuisine].count++;
  if (f.popularity !== null) cuisineStats[f.cuisine].popSum += f.popularity;
}
console.log("\n=== 按菜系统计 (菜系|总数|平均热度) ===");
Object.keys(cuisineStats)
  .map((c) => ({
    cuisine: c,
    count: cuisineStats[c].count,
    avg: cuisineStats[c].count > 0 ? (cuisineStats[c].popSum / cuisineStats[c].count).toFixed(2) : "0",
  }))
  .sort((a, b) => b.count - a.count)
  .forEach((r) =>
    console.log(`  ${r.cuisine.padEnd(10)} | ${String(r.count).padStart(4)} | avg=${r.avg.padStart(5)}`)
  );

// 5. fame 与 popularity 一致性检查
// 规则: pop>=10 必须 fame="名菜"; pop 7-9 应为 "名菜" 或 "热门"
const inconsistent = [];
for (const f of foods) {
  if (f.popularity === null) continue;
  if (f.fame === "?") continue;
  if (f.popularity >= 10 && f.fame !== "名菜") {
    inconsistent.push({ ...f, issue: `pop=${f.popularity} but fame="${f.fame}" (should be 名菜)` });
  } else if (f.popularity >= 7 && f.popularity <= 9 && f.fame !== "名菜" && f.fame !== "热门") {
    inconsistent.push({ ...f, issue: `pop=${f.popularity} but fame="${f.fame}" (should be 名菜/热门)` });
  }
}
console.log(`\n=== fame-popularity 不一致: ${inconsistent.length} 条 ===`);
inconsistent.slice(0, 50).forEach((f) =>
  console.log(`  [${f.file}] ${f.id} ${f.name} (${f.province}/${f.cuisine}) - ${f.issue}`)
);
if (inconsistent.length > 50) console.log(`  ... and ${inconsistent.length - 50} more`);

// 6. 高热度美食分布 (pop>=10)
const topFoods = foods.filter((f) => f.popularity !== null && f.popularity >= 10);
console.log(`\n=== 高热度美食 (pop>=10): ${topFoods.length} 条 ===`);
const topByProvince = {};
for (const f of topFoods) {
  topByProvince[f.province] = (topByProvince[f.province] || 0) + 1;
}
Object.entries(topByProvince)
  .sort((a, b) => b[1] - a[1])
  .forEach(([p, c]) => console.log(`  ${p}: ${c}`));

// 7. 按文件统计条目数 (用于分配 agent 任务)
console.log("\n=== 按文件统计条目数 (前30大) ===");
const fileStats = {};
for (const f of foods) {
  fileStats[f.file] = (fileStats[f.file] || 0) + 1;
}
Object.entries(fileStats)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30)
  .forEach(([f, c]) => console.log(`  ${f.padEnd(45)} | ${String(c).padStart(4)}`));

// 8. 输出每个省份的高热度(>=9)和低热度(<=3)的具体食物列表,用于代理核对
console.log("\n=== 各省份 pop<=3 的美食 (供代理核对是否应提升) ===");
const lowByProvince = {};
for (const f of foods) {
  if (f.popularity !== null && f.popularity <= 3) {
    if (!lowByProvince[f.province]) lowByProvince[f.province] = [];
    lowByProvince[f.province].push(f);
  }
}
Object.keys(lowByProvince)
  .sort()
  .forEach((p) => {
    console.log(`\n  [${p}] (${lowByProvince[p].length} 条 pop<=3):`);
    lowByProvince[p].forEach((f) =>
      console.log(`    ${f.id.padEnd(30)} ${f.name.padEnd(20)} pop=${f.popularity} [${f.file}]`)
    );
  });
