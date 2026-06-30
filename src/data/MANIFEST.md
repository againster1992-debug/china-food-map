# 美食数据文件清单（MANIFEST）

本目录存放所有美食相关数据。所有数据最终通过 [foods.ts](./foods.ts) 聚合后导出为 `FOODS` 数组。

## 一、聚合入口

| 文件 | 用途 |
|------|------|
| `foods.ts` | **聚合入口**，合并所有数据源，导出 `FOODS`、`CUISINE_STATS`、`PROVINCE_STATS`、`TYPE_STATS` |
| `foods-core.ts` | 早期手写的代表性条目（18 条，各省/菜系标志美食） |

## 二、按地理大区组织的基础数据

| 文件 | 覆盖范围 |
|------|---------|
| `foods-north.ts` | 华北（北京/天津/河北/山西/内蒙古） |
| `foods-east.ts` | 华东（上海/江苏/浙江/安徽/福建/江西/山东） |
| `foods-central-south.ts` | 中南（河南/湖北/湖南/广东/广西/海南） |
| `foods-southwest-northwest.ts` | 西南西北（重庆/四川/贵州/云南/西藏/陕西/甘肃/青海/宁夏/新疆） |
| `foods-cities-east.ts` | 华东城市维度补充 |
| `foods-cities-north.ts` | 华北城市维度补充 |
| `foods-cities-south.ts` | 南方城市维度补充 |
| `foods-cities-central-south.ts` | 中南城市维度补充 |
| `foods-hmt-popular.ts` | 港澳台流行美食 |

## 三、按主题分类的专题数据

| 文件 | 主题 |
|------|------|
| `foods-famous.ts` | 名菜（高知名度传统菜） |
| `foods-popular.ts` | 流行美食（当下热门） |
| `foods-heritage.ts` | 非遗/老字号传承 |
| `foods-ethnic.ts` | 民族特色美食（少数民族传统） |
| `foods-traditions.ts` | 饮食传统（type=tradition） |
| `foods-traditions-specialties.ts` | 传统特产 |
| `foods-specialties.ts` | 地方特产 |
| `foods-ingredients.ts` | 食材/物产 |
| `foods-exotic.ts` | 外来/融合美食 |
| `foods-pastries.ts` | 糕点面食 |
| `foods-snacks.ts` | 小吃 |
| `foods-michelin.ts` | 米其林餐厅代表菜 |
| `foods-extra.ts` | 额外补充 |
| `foods-national.ts` | 国民美食（全国连锁） |
| `foods-wiki-batch.ts` | 维基百科补充批次 |
| `foods-restored-compliance.ts` | 合规恢复条目（含历史保留的野生动物菜品） |

## 四、历次批量补充（batch N，按时间顺序）

> 这些文件是项目迭代过程中分批次补充的数据，命名格式 `foods-batch{N}-{topic}.ts`。

| 批次 | 文件 | 主题 |
|------|------|------|
| 1 | `foods-batch-{north,west,east,central,south}.ts` | 各地理大区首批补充 |
| 2 | `foods-batch2-{yunnan,jiangxi,eastcentral,north}.ts` | 云南/江西/华东中部/华北补充 |
| 3 | `foods-batch3-{taiwan,cantonese,jiangsu,shandong,sichuan}.ts` | 五大菜系专项补充 |
| 4 | `foods-batch4-{northeast-other,zhejiang-anhui-jiangsu,cantonese-chaoshan-hakka,shandong-henan-hebei,sichuan-hunan}.ts` | 多省混合补充 |
| 5 | `foods-batch5-{lu-su,chuan-yue,zhe-min-xiang-hui}.ts` | 菜系配对补充 |
| 6 | `foods-batch6-{condiments-ingredients,popular-dishes,traditional-snacks}.ts` | 调料食材/流行菜/传统小吃 |
| 7 | `foods-batch7-national.ts` | 全国性美食 |
| 8 | `foods-batch8-supplement.ts` | 综合补充 |
| 9 | `foods-batch9-{shaanxi,yunnan,northeast,guangxi-hk,northwest-ingredients,shanxi}.ts` | 省份专项补充 |
| 10-15 | `foods-batch1{0-5}-*.ts` | 热门/区域趋势补充 |
| 16-17 | `foods-batch1{6-7}-{popular,famous}.ts` | 流行/名菜补充 |
| 18-21 | `foods-batch1{8-9,20,21}-*.ts` | 省份/菜系趋势补充 |
| 22-29 | `foods-batch2{2-9}-*.ts` | 热门100/著名100/搜索补充/2026趋势/饮食传统 |

## 五、其他数据

| 文件 | 用途 |
|------|------|
| `restaurants.ts` | 知名餐厅数据（米其林/黑珍珠/百年老店等） |
| `provinceFlavors.ts` | 省份口味色标映射（`FLAVOR_COLORS`） |
| `provinceFoodCulture.ts` | 省份饮食文化介绍 |
| `specialFoodEnclaves.ts` | 特殊饮食聚集区（如回族聚居区、朝鲜族聚居区） |

## 六、数据规范

详见类型定义 [../types/food.ts](../types/food.ts) 与项目根目录的 `project_memory.md`。关键字段：

- `id` - 唯一标识，格式 `{province-pinyin-abbr}-{seq}` 或 `{theme}-{seq}`
- `name` - 通用名称（去除餐厅前缀、省份前缀）
- `alias` - 别名数组
- `cuisine` - 菜系（八大菜系 + 地方菜系，见 `Cuisine` 类型）
- `province` - 省份（34 省市自治区 + 港澳台）
- `city` - 地级市（具体城市名，非省份名）
- `origin` - 发源地（具体到市/县）
- `type` - `traditional`（传统）/ `popular`（流行）/ `tradition`（饮食传统）
- `fame` - 知名度：`名菜`/`热门`/`地方名吃`/`普通`
- `popularity` - 热度 1-10
- `ingredients` - 食材标签（标准化粒度）
- `cookingMethod` - 烹饪方式标签
- `tags` - 综合标签（含口感标签：酥脆/粘糯/嫩滑/焦香/劲道/绵软/爽脆）
