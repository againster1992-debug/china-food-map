import type { Food } from "@/types/food";
import { FOODS_CORE } from "./foods-core";
import { FOODS_NORTH } from "./foods-north";
import { FOODS_EAST } from "./foods-east";
import { FOODS_CENTRAL_SOUTH } from "./foods-central-south";
import { FOODS_SOUTHWEST_NORTHWEST } from "./foods-southwest-northwest";
import { FOODS_HMT_POPULAR } from "./foods-hmt-popular";
import { FOODS_FAMOUS } from "./foods-famous";
import { FOODS_POPULAR } from "./foods-popular";
import { FOODS_CITIES_EAST } from "./foods-cities-east";
import { FOODS_CITIES_NORTH } from "./foods-cities-north";
import { FOODS_TRADITIONS_SPECIALTIES } from "./foods-traditions-specialties";
import { FOODS_TRADITIONS } from "./foods-traditions";
import { FOODS_CITIES_SOUTH } from "./foods-cities-south";
import { FOODS_MICHELIN } from "./foods-michelin";
import { FOODS_SPECIALTIES } from "./foods-specialties";
import { FOODS_INGREDIENTS } from "./foods-ingredients";
import { FOODS_EXOTIC } from "./foods-exotic";
import { FOODS_PASTRIES } from "./foods-pastries";
import { FOODS_SNACKS } from "./foods-snacks";
import { FOODS_ETHNIC } from "./foods-ethnic";
import { FOODS_HERITAGE } from "./foods-heritage";
import { FOODS_EXTRA } from "./foods-extra";
import { FOODS_WIKI_BATCH } from "./foods-wiki-batch";
import { FOODS_BATCH_NORTH } from "./foods-batch-north";
import { FOODS_BATCH_WEST } from "./foods-batch-west";
import { FOODS_BATCH_EAST } from "./foods-batch-east";
import { FOODS_BATCH_CENTRAL } from "./foods-batch-central";
import { FOODS_BATCH_SOUTH } from "./foods-batch-south";
import { FOODS_BATCH2_YUNNAN } from "./foods-batch2-yunnan";
import { FOODS_BATCH2_JIANGXI } from "./foods-batch2-jiangxi";
import { FOODS_BATCH2_EASTCENTRAL } from "./foods-batch2-eastcentral";
import { FOODS_BATCH2_NORTH } from "./foods-batch2-north";
import { FOODS_BATCH3_TAIWAN } from "./foods-batch3-taiwan";
import { FOODS_BATCH3_CANTONESE } from "./foods-batch3-cantonese";
import { FOODS_BATCH3_JIANGSU } from "./foods-batch3-jiangsu";
import { FOODS_BATCH3_SHANDONG } from "./foods-batch3-shandong";
import { FOODS_BATCH3_SICHUAN } from "./foods-batch3-sichuan";
import { FOODS_BATCH4_NORTHEAST_OTHER } from "./foods-batch4-northeast-other";
import { FOODS_BATCH4_ZHEJIANG_ANHUI_JIANGSU } from "./foods-batch4-zhejiang-anhui-jiangsu";
import { FOODS_BATCH4_CANTONESE_CHAOSHAN_HAKKA } from "./foods-batch4-cantonese-chaoshan-hakka";
import { FOODS_BATCH4_SHANDONG_HENAN_HEBEI } from "./foods-batch4-shandong-henan-hebei";
import { FOODS_BATCH4_SICHUAN_HUNAN } from "./foods-batch4-sichuan-hunan";
import { FOODS_BATCH5_LU_SU } from "./foods-batch5-lu-su";
import { FOODS_BATCH5_CHUAN_YUE } from "./foods-batch5-chuan-yue";
import { FOODS_BATCH5_ZHE_MIN_XIANG_HUI } from "./foods-batch5-zhe-min-xiang-hui";
import { FOODS_BATCH6_CONDIMENTS_INGREDIENTS } from "./foods-batch6-condiments-ingredients";
import { FOODS_BATCH6_POPULAR_DISHES } from "./foods-batch6-popular-dishes";
import { FOODS_BATCH6_TRADITIONAL_SNACKS } from "./foods-batch6-traditional-snacks";
import { FOODS_BATCH7_NATIONAL } from "./foods-batch7-national";
import { FOODS_BATCH8_SUPPLEMENT } from "./foods-batch8-supplement";
import { FOODS_BATCH9_SHAANXI } from "./foods-batch9-shaanxi";
import { FOODS_BATCH9_YUNNAN } from "./foods-batch9-yunnan";
import { FOODS_BATCH9_NORTHEAST } from "./foods-batch9-northeast";
import { FOODS_BATCH9_GUANGXI_HK } from "./foods-batch9-guangxi-hk";
import { FOODS_BATCH9_NORTHWEST_INGREDIENTS } from "./foods-batch9-northwest-ingredients";
import { FOODS_BATCH9_SHANXI } from "./foods-batch9-shanxi";
import { FOODS_BATCH10_TRENDING } from "./foods-batch10-trending";
import { FOODS_BATCH11_TRENDING_SUPPLEMENT } from "./foods-batch11-trending-supplement";
import { FOODS_BATCH12_TRENDING_UPDATE } from "./foods-batch12-trending-update";
import { FOODS_BATCH13_PLATFORM_TRENDS } from "./foods-batch13-platform-trends";
import { FOODS_BATCH14_REGIONAL_TRENDS } from "./foods-batch14-regional-trends";
import { FOODS_BATCH15_REGIONAL_TRENDS } from "./foods-batch15-regional-trends";
import { FOODS_BATCH16_POPULAR } from "./foods-batch16-popular";
import { FOODS_BATCH17_FAMOUS } from "./foods-batch17-famous";
import { FOODS_BATCH18_PROVINCE_TRENDS } from "./foods-batch18-province-trends";
import { FOODS_BATCH19_CUISINE_TRENDS } from "./foods-batch19-cuisine-trends";
import { FOODS_BATCH20_CUISINE_TRENDS } from "./foods-batch20-cuisine-trends";
import { FOODS_BATCH21_CUISINE_TRENDS } from "./foods-batch21-cuisine-trends";
import { FOODS_BATCH22_HOT100 } from "./foods-batch22-hot100";
import { FOODS_BATCH23_FAMOUS100 } from "./foods-batch23-famous100";
import { FOODS_BATCH24_PROVINCE_CUISINE_SUPPLEMENT } from "./foods-batch24-province-cuisine-supplement";
import { FOODS_BATCH25_HOT100 } from "./foods-batch25-hot100";
import { FOODS_BATCH26_FAMOUS100 } from "./foods-batch26-famous100";
import { FOODS_BATCH27_SEARCH_SUPPLEMENT } from "./foods-batch27-search-supplement";
import { FOODS_BATCH28_TRENDING_2026 } from "./foods-batch28-trending-2026";
import { FOODS_BATCH28_HOT100 } from "./foods-batch28-hot100";
import { FOODS_BATCH29_FAMOUS100 } from "./foods-batch29-famous100";
import { FOODS_BATCH29_FOOD_TRADITIONS } from "./foods-batch29-food-traditions";
import { FOODS_NATIONAL } from "./foods-national";
import { FOODS_RESTORED_COMPLIANCE } from "./foods-restored-compliance";

/**
 * 所有美食数据的聚合入口
 *
 * 数据来源组织：
 * - foods-core.ts        早期手写的代表性条目（各省/菜系标志美食）
 * - foods-{north,east,central-south,southwest-northwest}.ts  按地理大区划分的基础数据
 * - foods-{famous,popular,heritage,ethnic,extra,...}.ts       按主题分类的专题数据
 * - foods-cities-{east,north,south}.ts                        按城市维度补充
 * - foods-batch{N}-{topic}.ts                                 历次批量补充（N=2~29）
 * - foods-restored-compliance.ts                              合规恢复条目（历史保留）
 *
 * 详细说明见 src/data/MANIFEST.md
 */
export const FOODS: Food[] = [
  ...FOODS_CORE,
  ...FOODS_NORTH,
  ...FOODS_EAST,
  ...FOODS_CENTRAL_SOUTH,
  ...FOODS_SOUTHWEST_NORTHWEST,
  ...FOODS_HMT_POPULAR,
  ...FOODS_FAMOUS,
  ...FOODS_POPULAR,
  ...FOODS_CITIES_EAST,
  ...FOODS_CITIES_NORTH,
  ...FOODS_TRADITIONS_SPECIALTIES,
  ...FOODS_TRADITIONS,
  ...FOODS_CITIES_SOUTH,
  ...FOODS_MICHELIN,
  ...FOODS_SPECIALTIES,
  ...FOODS_INGREDIENTS,
  ...FOODS_EXOTIC,
  ...FOODS_PASTRIES,
  ...FOODS_SNACKS,
  ...FOODS_ETHNIC,
  ...FOODS_HERITAGE,
  ...FOODS_EXTRA,
  ...FOODS_WIKI_BATCH,
  ...FOODS_BATCH_NORTH,
  ...FOODS_BATCH_WEST,
  ...FOODS_BATCH_EAST,
  ...FOODS_BATCH_CENTRAL,
  ...FOODS_BATCH_SOUTH,
  ...FOODS_BATCH2_YUNNAN,
  ...FOODS_BATCH2_JIANGXI,
  ...FOODS_BATCH2_EASTCENTRAL,
  ...FOODS_BATCH2_NORTH,
  ...FOODS_BATCH3_TAIWAN,
  ...FOODS_BATCH3_CANTONESE,
  ...FOODS_BATCH3_JIANGSU,
  ...FOODS_BATCH3_SHANDONG,
  ...FOODS_BATCH3_SICHUAN,
  ...FOODS_BATCH4_NORTHEAST_OTHER,
  ...FOODS_BATCH4_ZHEJIANG_ANHUI_JIANGSU,
  ...FOODS_BATCH4_CANTONESE_CHAOSHAN_HAKKA,
  ...FOODS_BATCH4_SHANDONG_HENAN_HEBEI,
  ...FOODS_BATCH4_SICHUAN_HUNAN,
  ...FOODS_BATCH5_LU_SU,
  ...FOODS_BATCH5_CHUAN_YUE,
  ...FOODS_BATCH5_ZHE_MIN_XIANG_HUI,
  ...FOODS_BATCH6_CONDIMENTS_INGREDIENTS,
  ...FOODS_BATCH6_POPULAR_DISHES,
  ...FOODS_BATCH6_TRADITIONAL_SNACKS,
  ...FOODS_BATCH7_NATIONAL,
  ...FOODS_BATCH8_SUPPLEMENT,
  ...FOODS_BATCH9_SHAANXI,
  ...FOODS_BATCH9_YUNNAN,
  ...FOODS_BATCH9_NORTHEAST,
  ...FOODS_BATCH9_GUANGXI_HK,
  ...FOODS_BATCH9_NORTHWEST_INGREDIENTS,
  ...FOODS_BATCH9_SHANXI,
  ...FOODS_BATCH10_TRENDING,
  ...FOODS_BATCH11_TRENDING_SUPPLEMENT,
  ...FOODS_BATCH12_TRENDING_UPDATE,
  ...FOODS_BATCH13_PLATFORM_TRENDS,
  ...FOODS_BATCH14_REGIONAL_TRENDS,
  ...FOODS_BATCH15_REGIONAL_TRENDS,
  ...FOODS_BATCH16_POPULAR,
  ...FOODS_BATCH17_FAMOUS,
  ...FOODS_BATCH18_PROVINCE_TRENDS,
  ...FOODS_BATCH19_CUISINE_TRENDS,
  ...FOODS_BATCH20_CUISINE_TRENDS,
  ...FOODS_BATCH21_CUISINE_TRENDS,
  ...FOODS_BATCH22_HOT100,
  ...FOODS_BATCH23_FAMOUS100,
  ...FOODS_BATCH24_PROVINCE_CUISINE_SUPPLEMENT,
  ...FOODS_BATCH25_HOT100,
  ...FOODS_BATCH26_FAMOUS100,
  ...FOODS_BATCH27_SEARCH_SUPPLEMENT,
  ...FOODS_BATCH28_TRENDING_2026,
  ...FOODS_BATCH28_HOT100,
  ...FOODS_BATCH29_FAMOUS100,
  ...FOODS_BATCH29_FOOD_TRADITIONS,
  ...FOODS_NATIONAL,
  ...FOODS_RESTORED_COMPLIANCE,
].filter((f): f is Food => !!f); // 过滤掉注释块导致的 undefined 元素

// 按菜系统计
export const CUISINE_STATS: Record<string, number> = FOODS.reduce((acc, food) => {
  if (!food) return acc;
  acc[food.cuisine] = (acc[food.cuisine] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// 按省份统计
export const PROVINCE_STATS: Record<string, number> = FOODS.reduce((acc, food) => {
  if (!food) return acc;
  acc[food.province] = (acc[food.province] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// 按类型统计
export const TYPE_STATS = {
  traditional: FOODS.filter((f) => f && f.type === "traditional").length,
  popular: FOODS.filter((f) => f && f.type === "popular").length,
};
