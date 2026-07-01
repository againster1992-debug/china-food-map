// 美食分类
export type FoodCategory =
  | "主菜"
  | "主食"
  | "小吃"
  | "凉菜"
  | "甜品"
  | "糕点"
  | "面食"
  | "汤羹"
  | "饮品"
  | "腌腊"
  | "调料"
  | "物产"
  | "火锅"
  | "其他";

// 美食类型
export type FoodType = "traditional" | "popular" | "tradition";

// 口味
export type Taste =
  | "咸鲜"
  | "麻辣"
  | "酸甜"
  | "清淡"
  | "香甜"
  | "酸辣"
  | "苦"
  | "复合"
  | "鲜辣"
  | "香辣"
  | "咸甜"
  | "甜"
  | "酸"
  | "鲜香"
  | "原味"
  | "辣";

// 菜系（不限于八大菜系，根据公认分类）
export type Cuisine =
  // 八大菜系
  | "鲁菜"
  | "川菜"
  | "粤菜"
  | "苏菜"
  | "浙菜"
  | "闽菜"
  | "湘菜"
  | "徽菜"
  // 地方菜系
  | "京菜"
  | "津菜"
  | "冀菜"
  | "晋菜"
  | "蒙餐"
  | "东北菜"
  | "本帮菜"
  | "赣菜"
  | "豫菜"
  | "鄂菜"
  | "桂菜"
  | "琼菜"
  | "滇菜"
  | "黔菜"
  | "藏餐"
  | "西北菜"
  | "新疆菜"
  | "清真菜"
  | "客家菜"
  | "潮菜"
  | "台湾菜"
  | "澳门土生菜"
  | "国民美食"
  | "其他";

// 省份
export type Province =
  | "全国"
  | "北京"
  | "天津"
  | "河北"
  | "山西"
  | "内蒙古"
  | "辽宁"
  | "吉林"
  | "黑龙江"
  | "上海"
  | "江苏"
  | "浙江"
  | "安徽"
  | "福建"
  | "江西"
  | "山东"
  | "河南"
  | "湖北"
  | "湖南"
  | "广东"
  | "广西"
  | "海南"
  | "重庆"
  | "四川"
  | "贵州"
  | "云南"
  | "西藏"
  | "陕西"
  | "甘肃"
  | "青海"
  | "宁夏"
  | "新疆"
  | "香港"
  | "澳门"
  | "台湾";

// 美食知名度分类
export type Fame = "名菜" | "热门" | "地方名吃" | "普通";

export interface Food {
  id: string;
  name: string;
  alias?: string[];        // 别名
  image: string;
  category: FoodCategory;
  taste: Taste;
  type: FoodType;
  cuisine: Cuisine;
  province: Province;
  city?: string;           // 地级市/同级行政区
  origin: string;
  description: string;
  ingredients: string[];   // 主要食材
  cookingMethod: string[]; // 做法标签（炒、炖、蒸、炸、烤、卤、腌等）
  tags: string[];          // 综合标签（食材+调味+做法+特色）
  fame?: Fame;             // 知名度：名菜/热门/地方名吃/普通
  popularRegions?: string[]; // 同样流行的其他地区
  lat: number;
  lng: number;
  popularity?: number;
  note?: string;           // 备注/警示信息（如保护动物提示）
}

// 筛选状态
export interface FilterState {
  type: FoodType | "all";
  cuisines: Cuisine[];
  categories: FoodCategory[];
  tastes: Taste[];
  provinces: Province[];
  ingredients: string[];   // 食材筛选
  cookingMethods: string[]; // 做法筛选
  fame: Fame[];            // 知名度：名菜/热门/地方名吃/普通
  keyword: string;
}

export const FAME_TYPES: Fame[] = ["名菜", "热门", "地方名吃", "普通"];

// 根据 popularity 和 type 推断 fame（用于没有显式设置 fame 的旧数据）
export function inferFame(food: Food): Fame {
  if (food.fame) return food.fame;
  const pop = food.popularity || 5;
  if (pop >= 9) return food.type === "popular" ? "热门" : "名菜";
  if (pop >= 7 && food.type === "popular") return "热门";
  if (pop >= 7) return "名菜";
  if (pop >= 5) return "地方名吃";
  return "普通";
}

export const CUISINES: Cuisine[] = [
  // 八大菜系
  "鲁菜",
  "川菜",
  "粤菜",
  "苏菜",
  "浙菜",
  "闽菜",
  "湘菜",
  "徽菜",
  // 地方菜系
  "京菜",
  "津菜",
  "冀菜",
  "晋菜",
  "蒙餐",
  "东北菜",
  "本帮菜",
  "赣菜",
  "豫菜",
  "鄂菜",
  "桂菜",
  "琼菜",
  "滇菜",
  "黔菜",
  "藏餐",
  "西北菜",
  "新疆菜",
  "清真菜",
  "客家菜",
  "潮菜",
  "台湾菜",
  "澳门土生菜",
  "国民美食",
  "其他",
];

export const CATEGORIES: FoodCategory[] = [
  "主菜",
  "主食",
  "小吃",
  "凉菜",
  "甜品",
  "糕点",
  "面食",
  "汤羹",
  "饮品",
  "腌腊",
  "调料",
  "物产",
  "其他",
];

export const TASTES: Taste[] = [
  "咸鲜",
  "麻辣",
  "酸甜",
  "清淡",
  "香甜",
  "酸辣",
  "苦",
  "复合",
  "鲜辣",
  "香辣",
  "咸甜",
  "甜",
  "酸",
  "鲜香",
  "原味",
];

// 四大菜系
export const FOUR_CUISINES: Cuisine[] = ["鲁菜", "川菜", "粤菜", "苏菜"];

// 八大菜系
export const EIGHT_CUISINES: Cuisine[] = [
  "鲁菜",
  "川菜",
  "粤菜",
  "苏菜",
  "浙菜",
  "闽菜",
  "湘菜",
  "徽菜",
];

// 菜系发源省份映射
export const CUISINE_PROVINCES: Record<Cuisine, Province[]> = {
  鲁菜: ["山东"],
  川菜: ["四川", "重庆"],
  粤菜: ["广东", "香港", "澳门"],
  苏菜: ["江苏"],
  浙菜: ["浙江"],
  闽菜: ["福建"],
  湘菜: ["湖南"],
  徽菜: ["安徽"],
  京菜: ["北京"],
  津菜: ["天津"],
  冀菜: ["河北"],
  晋菜: ["山西"],
  蒙餐: ["内蒙古", "青海"],
  东北菜: ["辽宁", "吉林", "黑龙江"],
  本帮菜: ["上海"],
  赣菜: ["江西"],
  豫菜: ["河南"],
  鄂菜: ["湖北"],
  桂菜: ["广西"],
  琼菜: ["海南"],
  滇菜: ["云南"],
  黔菜: ["贵州"],
  藏餐: ["西藏", "青海", "四川", "云南"],
  西北菜: ["陕西", "甘肃", "青海", "宁夏"],
  新疆菜: ["新疆"],
  清真菜: [],
  客家菜: [],
  潮菜: ["广东"],
  台湾菜: ["台湾"],
  澳门土生菜: ["澳门"],
  国民美食: ["全国"],
  其他: [],
};
