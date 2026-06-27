import type { Food } from "@/types/food";

/**
 * 计算两个美食名称的相似度（0-20）
 * 用于在各类相似维度中体现「名字」的优先级
 */
function nameSimilarity(a: Food, b: Food): number {
  if (a.name === b.name) return 20;
  const aNames = [a.name, ...(a.alias ?? [])];
  const bNames = [b.name, ...(b.alias ?? [])];
  // 如果任一名字包含另一名字（如「酸辣粉」与「重庆酸辣粉」），给较高分
  if (aNames.some((na) => bNames.some((nb) => na.includes(nb) || nb.includes(na)))) {
    return 15;
  }
  //  otherwise 按共有汉字比例打分
  const charsA = new Set(a.name);
  const charsB = new Set(b.name);
  let shared = 0;
  for (const c of charsA) {
    if (charsB.has(c)) shared++;
  }
  const minLen = Math.min(charsA.size, charsB.size);
  if (minLen === 0) return 0;
  return Math.round((shared / minLen) * 10);
}

/**
 * 计算两道美食的相似度分数
 * 综合相似主要考虑：名字、食材、做法、地域、口味、分类等
 */
export function calculateSimilarity(a: Food, b: Food): number {
  let score = 0;

  // 1. 名字相似度（综合相似的首要因素，0-20分）
  score += nameSimilarity(a, b);

  // 2. 食材重合度（0-30分）
  const aIng = new Set(a.ingredients);
  const bIng = new Set(b.ingredients);
  let ingOverlap = 0;
  for (const i of aIng) {
    if (bIng.has(i)) ingOverlap++;
  }
  const ingUnion = new Set([...a.ingredients, ...b.ingredients]).size;
  if (ingUnion > 0) {
    score += (ingOverlap / ingUnion) * 30;
  }

  // 2. 做法重合度（0-25分）
  const aMethod = new Set(a.cookingMethod);
  const bMethod = new Set(b.cookingMethod);
  let methodOverlap = 0;
  for (const m of aMethod) {
    if (bMethod.has(m)) methodOverlap++;
  }
  const methodUnion = new Set([...a.cookingMethod, ...b.cookingMethod]).size;
  if (methodUnion > 0) {
    score += (methodOverlap / methodUnion) * 25;
  }

  // 3. 口味相同/相近（0-20分）
  if (a.taste === b.taste) {
    score += 20;
  } else if (areSimilarTastes(a.taste, b.taste)) {
    score += 10;
  }

  // 4. 地域关系（0-15分）
  if (a.province === b.province) {
    score += 15; // 同省
  } else if (a.cuisine === b.cuisine && a.cuisine !== "其他") {
    score += 12; // 同菜系
  } else if (isNeighborProvince(a.province, b.province)) {
    score += 8; // 相邻省份
  } else if (isSameRegion(a.province, b.province)) {
    score += 5; // 同大区
  }

  // 5. 标签重合度（0-5分）
  const aTags = new Set(a.tags);
  const bTags = new Set(b.tags);
  let tagOverlap = 0;
  for (const t of aTags) {
    if (bTags.has(t)) tagOverlap++;
  }
  const tagUnion = new Set([...a.tags, ...b.tags]).size;
  if (tagUnion > 0) {
    score += (tagOverlap / tagUnion) * 5;
  }

  // 6. 分类相同（0-5分）
  if (a.category === b.category) {
    score += 5;
  }

  // 7. 类型相同（传统/流行，0-5分）
  if (a.type === b.type) {
    score += 5;
  }

  return score;
}

/**
 * 获取相似美食列表
 */
export function getSimilarFoods(food: Food, allFoods: Food[], limit = 6): Food[] {
  const scored = allFoods
    .filter((f) => f.id !== food.id)
    .map((f) => ({ food: f, score: calculateSimilarity(food, f) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.food);
}

/**
 * 按维度获取相似美食
 * 返回按综合、地域、食材、做法分类的相似美食
 */
export interface SimilarFoodsByCategory {
  comprehensive: Food[]; // 综合相似（结合地域、食材、口味、做法）
  region: Food[];      // 地域相似（同省或相邻省份）
  ingredients: Food[]; // 食材相似
  cookingMethod: Food[]; // 做法相似
}

export function getSimilarFoodsByCategory(
  food: Food,
  allFoods: Food[],
  limit = 8,
): SimilarFoodsByCategory {
  const others = allFoods.filter((f) => f.id !== food.id);

  // 0. 综合相似：使用 calculateSimilarity 综合打分
  const comprehensiveScored = others
    .map((f) => ({ food: f, score: calculateSimilarity(food, f) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  // 1. 地域相近：地域 > 食材 > 名字 > 做法
  const regionScored = others
    .map((f) => {
      let score = 0;
      if (f.province === food.province) score = 100;
      else if (isNeighborProvince(food.province, f.province)) score = 60;
      else if (isSameRegion(food.province, f.province)) score = 30;
      else if (f.cuisine === food.cuisine && food.cuisine !== "其他") score = 20;
      const sharedIng = f.ingredients.filter((i) => food.ingredients.includes(i)).length;
      const sharedMethod = f.cookingMethod.filter((m) => food.cookingMethod.includes(m)).length;
      score += sharedIng * 5 + nameSimilarity(food, f) + sharedMethod * 2;
      return { food: f, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  // 2. 食材相近：食材 > 名字 > 做法 > 地域
  const ingredientsScored = others
    .map((f) => {
      const sharedIng = f.ingredients.filter((i) => food.ingredients.includes(i)).length;
      const sharedMethod = f.cookingMethod.filter((m) => food.cookingMethod.includes(m)).length;
      let score = sharedIng * 10 + nameSimilarity(food, f) * 3 + sharedMethod * 3;
      if (f.taste === food.taste) score += 5;
      if (f.province === food.province) score += 5;
      else if (f.cuisine === food.cuisine && food.cuisine !== "其他") score += 3;
      return { food: f, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  // 3. 做法相近：做法 > 名字 > 食材 > 地域
  const methodScored = others
    .map((f) => {
      const sharedMethod = f.cookingMethod.filter((m) => food.cookingMethod.includes(m)).length;
      const sharedIng = f.ingredients.filter((i) => food.ingredients.includes(i)).length;
      let score = sharedMethod * 10 + nameSimilarity(food, f) * 3 + sharedIng * 4;
      if (f.province === food.province) score += 3;
      else if (f.cuisine === food.cuisine && food.cuisine !== "其他") score += 2;
      return { food: f, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return {
    comprehensive: comprehensiveScored.map((i) => i.food),
    region: regionScored.map((i) => i.food),
    ingredients: ingredientsScored.map((i) => i.food),
    cookingMethod: methodScored.map((i) => i.food),
  };
}

// 口味相近关系
const SIMILAR_TASTES: Record<string, string[]> = {
  麻辣: ["香辣", "酸辣"],
  香辣: ["麻辣", "酸辣"],
  酸辣: ["麻辣", "香辣"],
  咸鲜: ["复合"],
  复合: ["咸鲜"],
  清淡: ["香甜"],
  香甜: ["清淡", "酸甜"],
  酸甜: ["香甜"],
  苦香: ["咸鲜", "复合"],
};

function areSimilarTastes(a: string, b: string): boolean {
  return SIMILAR_TASTES[a]?.includes(b) ?? false;
}

// 大区划分
const REGIONS: Record<string, string[]> = {
  华北: ["北京", "天津", "河北", "山西", "内蒙古"],
  东北: ["辽宁", "吉林", "黑龙江"],
  华东: ["上海", "江苏", "浙江", "安徽", "福建", "江西", "山东"],
  华中: ["河南", "湖北", "湖南"],
  华南: ["广东", "广西", "海南"],
  西南: ["重庆", "四川", "贵州", "云南", "西藏"],
  西北: ["陕西", "甘肃", "青海", "宁夏", "新疆"],
  港澳台: ["香港", "澳门", "台湾"],
};

function getRegion(province: string): string | null {
  for (const [region, provinces] of Object.entries(REGIONS)) {
    if (provinces.includes(province)) return region;
  }
  return null;
}

function isSameRegion(a: string, b: string): boolean {
  return getRegion(a) === getRegion(b) && getRegion(a) !== null;
}

// 相邻省份关系（简化版）
const NEIGHBORS: Record<string, string[]> = {
  北京: ["天津", "河北"],
  天津: ["北京", "河北"],
  河北: ["北京", "天津", "山西", "内蒙古", "辽宁", "山东", "河南"],
  山西: ["河北", "内蒙古", "陕西", "河南"],
  内蒙古: ["河北", "山西", "陕西", "宁夏", "甘肃", "黑龙江", "吉林", "辽宁"],
  辽宁: ["河北", "内蒙古", "吉林"],
  吉林: ["辽宁", "内蒙古", "黑龙江"],
  黑龙江: ["内蒙古", "吉林"],
  上海: ["江苏", "浙江"],
  江苏: ["上海", "浙江", "安徽", "山东"],
  浙江: ["上海", "江苏", "安徽", "江西", "福建"],
  安徽: ["江苏", "浙江", "江西", "湖北", "河南", "山东"],
  福建: ["浙江", "江西", "广东", "台湾"],
  江西: ["浙江", "安徽", "福建", "广东", "湖南", "湖北"],
  山东: ["河北", "河南", "安徽", "江苏"],
  河南: ["河北", "山西", "陕西", "湖北", "安徽", "山东"],
  湖北: ["河南", "安徽", "江西", "湖南", "重庆", "陕西"],
  湖南: ["湖北", "江西", "广东", "广西", "贵州", "重庆"],
  广东: ["福建", "江西", "湖南", "广西", "海南", "香港", "澳门"],
  广西: ["广东", "湖南", "贵州", "云南", "海南"],
  海南: ["广东", "广西"],
  重庆: ["四川", "贵州", "湖南", "湖北", "陕西"],
  四川: ["重庆", "贵州", "云南", "西藏", "青海", "甘肃", "陕西"],
  贵州: ["四川", "重庆", "湖南", "广西", "云南"],
  云南: ["四川", "贵州", "广西", "西藏"],
  西藏: ["新疆", "青海", "四川", "云南"],
  陕西: ["内蒙古", "山西", "河南", "湖北", "重庆", "四川", "甘肃", "宁夏"],
  甘肃: ["内蒙古", "宁夏", "陕西", "四川", "青海", "新疆"],
  青海: ["甘肃", "四川", "西藏", "新疆"],
  宁夏: ["内蒙古", "陕西", "甘肃"],
  新疆: ["西藏", "青海", "甘肃"],
  香港: ["广东", "澳门"],
  澳门: ["广东", "香港"],
  台湾: ["福建"],
};

function isNeighborProvince(a: string, b: string): boolean {
  return NEIGHBORS[a]?.includes(b) ?? false;
}
