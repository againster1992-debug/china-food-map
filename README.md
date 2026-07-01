# 中国美食地图

基于交互式地图的中国美食文化可视化平台,收录 3500+ 种美食与饮食传统,覆盖全国 34 个省级行政区。

## 特点

- **海量数据**:3500+ 条美食数据,涵盖八大菜系及地方菜系、民族特色、饮食传统、地方特产等
- **地图可视化**:基于 Leaflet 的交互式地图,按地理坐标标注美食分布,支持缩放聚合
- **金字塔热度分层**:1-10 级热度评分,分布呈金字塔结构(底大顶小),高热度稀缺、低热度宽厚
- **多维筛选**:按省份、菜系、口味、品类、烹饪方式、热度等多维度过滤
- **Top10 排名算法**:综合热度、知名度(fame)、烹饪方式多样性的加权排名
- **真实图片**:所有美食配图均为真实摄影(非 AI 生成)
- **详情面板**:展示食材、烹饪方式、口味标签、起源、别名等完整信息
- **响应式设计**:Tailwind CSS + 思源字体(Noto Sans/Serif SC)统一排版

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 6 |
| 地图 | Leaflet + react-leaflet |
| 样式 | Tailwind CSS 3 |
| 状态 | Zustand |
| 图标 | lucide-react |
| 字体 | Noto Sans SC + Noto Serif SC |

## 用法

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 类型检查
npm run check

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

开发服务器启动后访问 `http://localhost:5173/china-food-map/`。

## 热度金字塔算法

所有美食的热度(popularity)按金字塔分布重新分配,保证层次与区分度:

| 热度 | 占比 | 含义 |
|------|------|------|
| 10 | 0.7% | 国民级网红/全网爆火 |
| 9 | 5.3% | 全国知名 |
| 8 | 7.0% | 大区知名 |
| 7 | 9.0% | 省内顶流 |
| 6 | 10.0% | 省内知名 |
| 5 | 11.0% | 地方知名 |
| 4 | 12.0% | 地方普通 |
| 3 | 13.0% | 较冷门 |
| 2 | 15.0% | 很冷门 |
| 1 | 17.0% | 极冷门/物产调料 |

算法基于当前热度 + 知名度(fame)排序后按累积百分位映射,保证相对合理性。详见 `scripts/redistribute-popularity.cjs`。

## 项目结构

```
src/
├── components/          # UI 组件(FoodMap, DetailPanel, FilterPanel 等)
├── pages/               # 页面(Home)
├── store/               # Zustand 状态管理
├── types/               # TypeScript 类型定义
└── data/                # 美食数据(87 个 foods-*.ts 文件)
    ├── foods.ts         # 聚合入口,导出 FOODS 数组
    ├── MANIFEST.md      # 数据文件清单与规范
    └── foods-*.ts       # 按地域/主题/批次分类的数据文件
scripts/
├── analyze-popularity.cjs       # 热度分布分析工具
└── redistribute-popularity.cjs  # 金字塔热度重分配工具
```

## 数据字段

每条美食数据包含:名称、别名、图片、品类、口味、类型(传统/流行/饮食传统)、菜系、省份、城市、起源、描述、食材、烹饪方式、标签、知名度(fame)、热度(popularity)、经纬度等。

详见 `src/types/food.ts` 与 `src/data/MANIFEST.md`。
