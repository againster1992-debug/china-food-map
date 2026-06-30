# scripts/archive — 历史脚本归档

本目录存放项目数据治理过程中使用过的**一次性脚本**和**中间产物**，仅作留档参考，不再参与构建或运行。

## 归档原因

1. **避免污染根目录**：历次数据修复累计产生 50+ 个 .cjs/.mjs/.js/.ps1 脚本和 .json/.txt 输出，散落在根目录严重影响可读性。
2. **避免误执行**：这些脚本多为针对特定数据状态的修复指令，重新执行可能破坏当前已修正的数据。
3. **保留追溯能力**：所有脚本完整保留，可随时回溯每次修复的具体逻辑。
4. **不参与构建**：已通过 `.gitignore` 忽略本目录下的可执行脚本与输出文件，但 `.md` 文档仍入库。

## 目录结构

```
scripts/archive/
├── README.md                          # 本文件
├── *.cjs / *.mjs / *.js               # Node.js 数据修复脚本（一次性）
├── *.ps1                              # PowerShell 批处理脚本
├── *.json                             # 修复计划/审计结果输出
├── *.txt                              # 审计报告/修复结果文本
└── fix-plans/                         # 2026-06 修复计划批次
    ├── apply-fix-plans.cjs            # 修复计划执行器（注意：曾有正则跨对象匹配 bug，已停用）
    ├── fix-critical-issues.cjs
    ├── list-deleted-foods.cjs         # 列出被删除条目（恢复用）
    ├── recover-corrupted.cjs          # 恢复损坏数据
    └── fix-plan-{region}.json         # 分区域修复计划
```

## 主要脚本分类

### 数据审计
- `audit-data.cjs` / `audit-duplicates.cjs` / `comprehensive-audit.cjs` — 数据完整性与重复项审计
- `compliance-scan.cjs` — 合规扫描（野生动物、网红食品等）
- `count-foods.cjs` / `province-stats.cjs` — 统计条目数量

### 数据修复
- `fix-data.cjs` / `fix1.js` / `fix_data.js` / `fix_north.cjs` — 通用数据修复
- `fix-comma2.cjs` / `fix-tags-comma.cjs` — 修复逗号问题（双逗号、前导逗号）
- `fix-orphaned-lines.cjs` — 修复孤立行
- `fix-pork.js` / `fix-pork.ps1` — 修复猪肉污染问题
- `fix-dup-popular.cjs` — 修复重复 popular 条目
- `fix-popular-regions.cjs` — 修复 popularRegions 字段
- `fix-swn.cjs` — 修复西南西北数据
- `fix-tags-all.ps1` / `fix-tags.ps1` — 修复标签字段
- `apply-precise-fixes.cjs` / `comprehensive-fix.cjs` — 精确修复
- `restore-snake.cjs` — 恢复蛇类条目

### 图片处理
- `analyze-images.cjs` — 图片分析

### 数据解析
- `parse-foods.mjs` / `extract-section.mjs` / `extract2.mjs` — 数据解析与片段提取
- `keys.mjs` — 提取键名
- `audit-lost-changes.cjs` — 审计丢失的修改

### 流行度调整
- `adjust-popularity.cjs` — 调整流行度数值
- `list-missing-city.cjs` — 列出缺失 city 字段的条目

### 其他
- `add-pr.ps1` — 批量添加 PR（PowerShell）
- `check_file.js` — 文件检查工具
- `analyze-national*.mjs` 系列 — 全国数据分析（4个版本）

## 重要警示

⚠️ **不要重新执行本目录下的任何脚本**。这些脚本针对的是历史数据状态，当前数据已修正，重新执行可能造成不可逆破坏。

⚠️ **apply-fix-plans.cjs 曾存在正则跨对象匹配 bug**（详见 project_memory 教训记录），导致条目内容被错误覆盖。如需复用其逻辑，必须先修复正则。

## 当前数据处理规范

如需进行新的数据修复工作，请遵循以下规范（详见 `src/data/MANIFEST.md` 和 `project_memory.md`）：

1. **新增数据**：按主题创建 `foods-batch{N}-{topic}.ts`，在 `foods.ts` 中聚合
2. **修复数据**：直接编辑对应的 .ts 文件，避免使用一次性脚本
3. **如必须使用脚本**：放在 `scripts/` 根目录（非 archive），命名规范见 project_memory
4. **验证**：修复后必须运行 `npx tsc --noEmit` 确保零编译错误
