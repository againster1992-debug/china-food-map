import { create } from "zustand";
import type { Food, FoodType, Cuisine, FoodCategory, Taste, Province, Fame } from "@/types/food";
import { inferFame } from "@/types/food";
import { FOODS } from "@/data/foods";
import type { SpecialFoodEnclave } from "@/data/specialFoodEnclaves";

// ===== 模块级常量（避免每次调用重建）=====

// fame 权重：提供层次和区分度，但不压过热度主导
// 热度差2分(100)必定压过fame差(80)，热度差1分(50)可被fame差逆转 → 名菜/热门优先
const FAME_WEIGHT: Record<string, number> = { 名菜: 100, 热门: 80, 地方名吃: 50, 普通: 20 };
// 热度系数：每1点热度=50分，使热度成为主导因素，确保 pop>=8 基本能进 top10
const POPULARITY_WEIGHT = 50;
// top10 多样性约束：避免过于相似的类型扎堆
const MAX_PER_METHOD = 3;   // 每种特色做法（干锅/涮/卤等）最多出现次数
const MAX_PER_CATEGORY = 4; // 每个品类最多出现次数
const MAX_PER_KEYWORD = 2;  // 同一关键词（干锅/烤冷面/鸡爪/火锅等）最多出现次数

// 名称关键词提取：用于限制过于相似的类型扎堆（如多个干锅菜、多个烤冷面变体）
const NAME_KEYWORDS = [
  "干锅", "烤冷面", "鸡爪", "凤爪", "火锅", "牛肉面", "羊肉粉", "螺蛳粉",
  "烤鱼", "烤鸡", "烤鸭", "烤肉", "烤羊", "卤面", "炒面", "拌面", "汤面",
  "米粉", "米线", "面条", "饺子", "馄饨", "抄手", "包子", "馒头", "烧饼",
  "煎饼", "麻花", "酥饼", "月饼", "汤圆", "奶茶", "酸奶", "豆花", "豆腐",
  "肠粉", "粿条", "烧腊", "卤味", "烧烤", "串串", "冒菜", "麻辣烫",
];

function extractKeyword(name: string): string | null {
  for (const kw of NAME_KEYWORDS) {
    if (name.includes(kw)) return kw;
  }
  return null;
}

const RESTAURANT_NAMES = [
  "全聚德", "便宜坊", "东来顺", "大董", "狗不理", "老正兴",
  "南翔", "楼外楼", "知味观", "奎元馆", "聚春园", "冶春",
  "富春", "止观小馆", "谭家菜", "仿膳", "功德林",
];

const DISTINCTIVE_METHODS = new Set([
  "干锅", "涮", "卤", "焖", "熏", "烤", "爆", "烧", "煎", "炸",
  "炖", "煨", "烩", "扒", "溜", "酿", "糟", "醉", "灼", "焗", "煲",
]);

const GEO_PREFIXES = [
  "北京","上海","广州","深圳","成都","重庆","武汉","长沙","南京","杭州",
  "苏州","西安","兰州","天津","哈尔滨","青岛","大连","沈阳","长春","济南",
  "郑州","太原","石家庄","呼和浩特","银川","西宁","乌鲁木齐","拉萨","昆明",
  "贵阳","南宁","海口","福州","厦门","南昌","合肥","无锡","宁波","温州",
  "泉州","汕头","潮州","顺德","佛山","东莞","珠海","中山","江门","扬州",
  "镇江","常州","徐州","盐城","连云港","淮安","宿迁","泰州","南通","嘉兴",
  "湖州","绍兴","金华","衢州","丽水","台州","舟山","黄山","芜湖","蚌埠",
  "安庆","徽州","宣城","池州","马鞍山","铜陵","滁州","阜阳","宿州","六安",
  "亳州","景德镇","萍乡","新余","赣州","宜春","上饶","吉安","抚州","九江",
  "烟台","威海","潍坊","淄博","临沂","济宁","泰安","日照","莱芜","德州",
  "聊城","滨州","菏泽","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作",
  "濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店",
  "承德","张家口","秦皇岛","唐山","廊坊","保定","沧州","衡水","邢台","邯郸",
  "大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁",
  "包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布",
  "鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭",
  "朝阳","葫芦岛","吉林","四平","辽源","通化","白山","松原","白城","延吉",
  "延边","牡丹江","佳木斯","大庆","鸡西","双鸭山","伊春","七台河","鹤岗",
  "黑河","绥化","大兴安岭","齐齐哈尔","宝鸡","咸阳","渭南","铜川","延安",
  "榆林","汉中","安康","商洛","天水","武威","张掖","酒泉","平凉","庆阳",
  "定西","陇南","嘉峪关","金昌","白银","临夏","甘南","海东","海北","黄南",
  "果洛","玉树","海西","石嘴山","吴忠","固原","中卫","克拉玛依","吐鲁番",
  "哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","克孜勒苏","喀什","和田",
  "伊犁","塔城","阿勒泰","日喀则","昌都","林芝","山南","那曲","阿里",
  "曲靖","玉溪","保山","昭通","丽江","普洱","临沧","楚雄","红河","文山",
  "西双版纳","大理","德宏","怒江","迪庆","六盘水","遵义","安顺","毕节",
  "铜仁","黔西南","黔东南","黔南","柳州","桂林","梧州","北海","防城港",
  "钦州","贵港","玉林","百色","贺州","河池","来宾","崇左","三亚","三沙",
  "儋州","五指山","琼海","文昌","万宁","东方","定安","屯昌","澄迈","临高",
  "白沙","昌江","乐东","陵水","保亭","琼中","香港","澳门","台湾","台北",
  "高雄","台中","台南","基隆","新竹","嘉义","花莲","台东","宜兰","苗栗",
  "彰化","南投","云林","屏东","澎湖","金门","马祖","潼关","平江","义乌",
  "赤峰","门源","祁连","久治","玛沁","甘孜","迪庆","满洲里","火宫殿",
  "宁夏","银川","新疆","西藏","内蒙古","广西","黑龙江","辽宁","吉林",
  "河北","山西","陕西","甘肃","青海","四川","贵州","云南","湖南","湖北",
  "河南","安徽","浙江","江苏","福建","江西","山东","广东","海南",
  "东乡","盐池","同心","海原","泾源","隆德",
];

// 归一化：去除地理前缀、修饰词前缀、后缀括号内容
function normalizeName(n: string): string {
  let r = n;
  r = r.replace(/[（(][^）)]*[）)]/g, "");
  for (const prefix of GEO_PREFIXES) {
    if (r.startsWith(prefix)) {
      r = r.slice(prefix.length);
      break;
    }
  }
  r = r.replace(/^(正宗|传统|改良|老式|经典|原味|招牌|秘制|手工|现做|改良|新派|创新|特色|地道|正宗|老北京|老四川|老成都|老广州|老上海)/, "");
  return r;
}

// ===== 缓存（foods 引用不变时复用结果）=====
let _ingredientsCache: { foods: Food[]; result: string[] } | null = null;
let _cookingMethodsCache: { foods: Food[]; result: string[] } | null = null;
const _topFoodsCache = new Map<string, { foods: Food[]; result: Food[] }>();

interface StoreState {
  // 数据
  foods: Food[];

  // 筛选
  filterType: FoodType | "all";
  filterCuisines: Cuisine[];
  filterCategories: FoodCategory[];
  filterTastes: Taste[];
  filterProvinces: Province[];
  filterIngredients: string[];    // 食材筛选
  filterCookingMethods: string[]; // 做法筛选
  filterFame: Fame[];             // 知名度筛选
  keyword: string;

  // 选中
  selectedFood: Food | null;
  hoveredFoodId: string | null;

  // 面板
  sidebarOpen: boolean;
  detailOpen: boolean;
  filterPanelOpen: boolean;
  provincePanelOpen: boolean;
  selectedProvince: Province | null;
  cuisinePanelOpen: boolean;
  selectedCuisine: Cuisine | null;
  restaurantPanelOpen: boolean;
  restaurantFilter: string; // 餐厅筛选：米其林/黑珍珠/亚洲五十佳/世界五十佳/百年老店/非遗传承
  enclavePanelOpen: boolean;
  selectedEnclave: SpecialFoodEnclave | null;

  // 认证 & 账号 UI
  authModalOpen: boolean;
  authModalMode: "login" | "register";
  accountPanelOpen: boolean;
  accountTab: "profile" | "favorites" | "ratings" | "comments";

  // 地图
  focusTarget: { lat: number; lng: number; zoom?: number; id?: string } | null;
  mapZoom: number; // 当前地图缩放级别

  // 视图模式
  groupBy: "cuisine" | "province";

  // Actions
  setFilterType: (type: FoodType | "all") => void;
  toggleCuisine: (cuisine: Cuisine) => void;
  toggleCategory: (cat: FoodCategory) => void;
  toggleTaste: (taste: Taste) => void;
  toggleProvince: (p: Province) => void;
  toggleIngredient: (ing: string) => void;
  toggleCookingMethod: (method: string) => void;
  toggleFame: (fame: Fame) => void;
  setKeyword: (k: string) => void;
  clearFilters: () => void;

  selectFood: (food: Food | null) => void;
  setHovered: (id: string | null) => void;
  updateFood: (id: string, patch: Partial<Food>) => void;

  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleDetail: () => void;
  setDetailOpen: (open: boolean) => void;
  toggleFilterPanel: () => void;
  setFilterPanelOpen: (open: boolean) => void;
  openProvincePanel: (province: Province) => void;
  closeProvincePanel: () => void;
  openCuisinePanel: (cuisine: Cuisine) => void;
  closeCuisinePanel: () => void;
  openRestaurantPanel: (filter?: string) => void;
  closeRestaurantPanel: () => void;
  setRestaurantFilter: (filter: string) => void;
  openEnclavePanel: (enclave: SpecialFoodEnclave) => void;
  closeEnclavePanel: () => void;

  openAuthModal: (mode?: "login" | "register") => void;
  closeAuthModal: () => void;
  setAuthModalMode: (mode: "login" | "register") => void;
  openAccountPanel: (tab?: "profile" | "favorites" | "ratings" | "comments") => void;
  closeAccountPanel: () => void;
  setAccountTab: (tab: "profile" | "favorites" | "ratings" | "comments") => void;

  focusFood: (food: Food) => void;
  setFocusTarget: (target: { lat: number; lng: number; zoom?: number }) => void;
  clearFocus: () => void;

  setMapZoom: (zoom: number) => void;

  setGroupBy: (g: "cuisine" | "province") => void;

  // 计算属性
  getFilteredFoods: () => Food[];
  // 获取所有可选食材列表
  getAllIngredients: () => string[];
  // 获取所有可选做法列表
  getAllCookingMethods: () => string[];
  // 获取省份十大美食（综合知名度和热度）
  getProvinceTopFoods: (province: Province, limit?: number) => Food[];
}

export const useStore = create<StoreState>((set, get) => ({
  foods: FOODS,

  filterType: "all",
  filterCuisines: [],
  filterCategories: [],
  filterTastes: [],
  filterProvinces: [],
  filterIngredients: [],
  filterCookingMethods: [],
  filterFame: [],
  keyword: "",

  selectedFood: null,
  hoveredFoodId: null,

  sidebarOpen: true,
  detailOpen: false,
  filterPanelOpen: false,
  provincePanelOpen: false,
  selectedProvince: null,
  cuisinePanelOpen: false,
  selectedCuisine: null,
  restaurantPanelOpen: false,
  restaurantFilter: "全部",
  enclavePanelOpen: false,
  selectedEnclave: null,

  authModalOpen: false,
  authModalMode: "login",
  accountPanelOpen: false,
  accountTab: "profile",

  focusTarget: null,
  mapZoom: 4,

  groupBy: "cuisine",

  setFilterType: (type) => set({ filterType: type }),
  toggleCuisine: (cuisine) =>
    set((s) => ({
      filterCuisines: s.filterCuisines.includes(cuisine)
        ? s.filterCuisines.filter((c) => c !== cuisine)
        : [...s.filterCuisines, cuisine],
    })),
  toggleCategory: (cat) =>
    set((s) => ({
      filterCategories: s.filterCategories.includes(cat)
        ? s.filterCategories.filter((c) => c !== cat)
        : [...s.filterCategories, cat],
    })),
  toggleTaste: (taste) =>
    set((s) => ({
      filterTastes: s.filterTastes.includes(taste)
        ? s.filterTastes.filter((t) => t !== taste)
        : [...s.filterTastes, taste],
    })),
  toggleProvince: (p) =>
    set((s) => ({
      filterProvinces: s.filterProvinces.includes(p)
        ? s.filterProvinces.filter((x) => x !== p)
        : [...s.filterProvinces, p],
    })),
  toggleIngredient: (ing) =>
    set((s) => ({
      filterIngredients: s.filterIngredients.includes(ing)
        ? s.filterIngredients.filter((x) => x !== ing)
        : [...s.filterIngredients, ing],
    })),
  toggleCookingMethod: (method) =>
    set((s) => ({
      filterCookingMethods: s.filterCookingMethods.includes(method)
        ? s.filterCookingMethods.filter((x) => x !== method)
        : [...s.filterCookingMethods, method],
    })),
  toggleFame: (fame) =>
    set((s) => ({
      filterFame: s.filterFame.includes(fame)
        ? s.filterFame.filter((x) => x !== fame)
        : [...s.filterFame, fame],
    })),
  setKeyword: (k) => set({ keyword: k }),
  clearFilters: () =>
    set({
      filterType: "all",
      filterCuisines: [],
      filterCategories: [],
      filterTastes: [],
      filterProvinces: [],
      filterIngredients: [],
      filterCookingMethods: [],
      filterFame: [],
      keyword: "",
    }),

  selectFood: (food) =>
    set({ selectedFood: food, detailOpen: food !== null }),
  setHovered: (id) => set({ hoveredFoodId: id }),
  updateFood: (id, patch) =>
    set((s) => {
      const foods = s.foods.map((f) => (f.id === id ? { ...f, ...patch } : f));
      const selectedFood = s.selectedFood?.id === id ? { ...s.selectedFood, ...patch } : s.selectedFood;
      return { foods, selectedFood };
    }),

  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleDetail: () => set((s) => ({ detailOpen: !s.detailOpen })),
  setDetailOpen: (open) => set({ detailOpen: open }),
  toggleFilterPanel: () => set((s) => ({ filterPanelOpen: !s.filterPanelOpen })),
  setFilterPanelOpen: (open) => set({ filterPanelOpen: open }),
  openProvincePanel: (province) => set({ provincePanelOpen: true, selectedProvince: province }),
  closeProvincePanel: () => set({ provincePanelOpen: false, selectedProvince: null }),
  openCuisinePanel: (cuisine) => set({ cuisinePanelOpen: true, selectedCuisine: cuisine }),
  closeCuisinePanel: () => set({ cuisinePanelOpen: false, selectedCuisine: null }),
  openRestaurantPanel: (filter = "全部") => set({ restaurantPanelOpen: true, restaurantFilter: filter }),
  closeRestaurantPanel: () => set({ restaurantPanelOpen: false }),
  setRestaurantFilter: (filter) => set({ restaurantFilter: filter }),
  openEnclavePanel: (enclave) => set({ enclavePanelOpen: true, selectedEnclave: enclave }),
  closeEnclavePanel: () => set({ enclavePanelOpen: false, selectedEnclave: null }),

  openAuthModal: (mode = "login") => set({ authModalOpen: true, authModalMode: mode }),
  closeAuthModal: () => set({ authModalOpen: false }),
  setAuthModalMode: (mode) => set({ authModalMode: mode }),
  openAccountPanel: (tab = "profile") => set({ accountPanelOpen: true, accountTab: tab }),
  closeAccountPanel: () => set({ accountPanelOpen: false }),
  setAccountTab: (tab) => set({ accountTab: tab }),

  focusFood: (food) =>
    set({
      focusTarget: { lat: food.lat, lng: food.lng, zoom: 8, id: food.id },
      selectedFood: food,
      detailOpen: true,
    }),
  setFocusTarget: (target) => set({ focusTarget: target }),
  clearFocus: () => set({ focusTarget: null }),

  setMapZoom: (zoom) => set({ mapZoom: zoom }),

  setGroupBy: (g) => set({ groupBy: g }),

  getFilteredFoods: () => {
    const s = get();
    return s.foods.filter((f) => {
      if (s.filterType !== "all" && f.type !== s.filterType) return false;
      if (s.filterCuisines.length && !s.filterCuisines.includes(f.cuisine)) return false;
      if (s.filterCategories.length && !s.filterCategories.includes(f.category)) return false;
      if (s.filterTastes.length && !s.filterTastes.includes(f.taste)) return false;
      if (s.filterProvinces.length && !s.filterProvinces.includes(f.province)) return false;
      if (s.filterIngredients.length && !s.filterIngredients.some((ing) => f.ingredients.includes(ing))) return false;
      if (s.filterCookingMethods.length && !s.filterCookingMethods.some((m) => f.cookingMethod.includes(m))) return false;
      if (s.filterFame.length && !s.filterFame.includes(inferFame(f))) return false;
      if (s.keyword) {
        const k = s.keyword.toLowerCase();
        if (
          !f.name.toLowerCase().includes(k) &&
          !f.province.toLowerCase().includes(k) &&
          !f.cuisine.toLowerCase().includes(k) &&
          !f.origin.toLowerCase().includes(k) &&
          !f.description.toLowerCase().includes(k)
        )
          return false;
      }
      return true;
    });
  },

  getAllIngredients: () => {
    const s = get();
    if (_ingredientsCache && _ingredientsCache.foods === s.foods) {
      return _ingredientsCache.result;
    }
    const set = new Set<string>();
    s.foods.forEach((f) => f.ingredients.forEach((i) => set.add(i)));
    // 常见食材靠前显示（鸡鸭鱼肉等）
    const PRIORITY = [
      "猪肉", "牛肉", "羊肉", "鸡肉", "鸭肉", "鹅肉", "鱼肉",
      "鸡蛋", "鸭蛋", "虾", "蟹",
      "豆腐", "白菜", "萝卜", "土豆", "番茄", "茄子", "青椒",
      "葱", "姜", "蒜", "辣椒", "花椒", "酱油", "盐", "糖", "醋", "料酒",
      "大米", "面粉", "面条", "糯米", "粉丝",
      "花生", "芝麻", "木耳", "蘑菇", "香菇",
    ];
    const prioritySet = new Set(PRIORITY);
    const priorityList = PRIORITY.filter((i) => set.has(i));
    const restList = Array.from(set)
      .filter((i) => !prioritySet.has(i))
      .sort();
    const result = [...priorityList, ...restList];
    _ingredientsCache = { foods: s.foods, result };
    return result;
  },

  getAllCookingMethods: () => {
    const s = get();
    if (_cookingMethodsCache && _cookingMethodsCache.foods === s.foods) {
      return _cookingMethodsCache.result;
    }
    const set = new Set<string>();
    s.foods.forEach((f) => f.cookingMethod.forEach((m) => set.add(m)));
    const result = Array.from(set).sort();
    _cookingMethodsCache = { foods: s.foods, result };
    return result;
  },

  getProvinceTopFoods: (province, limit = 10) => {
    const s = get();
    // 缓存命中检查
    const cacheKey = `${province}:${limit}`;
    const cached = _topFoodsCache.get(cacheKey);
    if (cached && cached.foods === s.foods) return cached.result;

    const sorted = s.foods
      .filter(
        (f) =>
          f.province === province &&
          f.type !== "tradition" &&
          !(f.tags || []).includes("饮食传统"),
      )
      .map((f) => {
        // 附加分：在热度×50+fame 的主分基础上做微调
        let bonus = 0;
        // 优先本地起源的传统名菜（+15），热门美食次之（+8）
        if (f.type === "traditional") bonus += 15;
        else if (f.type === "popular") bonus += 8;
        // 优先主菜、面食、小吃等大众品类
        if (f.category === "主菜" || f.category === "面食" || f.category === "小吃") bonus += 10;
        if (f.category === "汤羹" || f.category === "主食") bonus += 5;
        // 物产/调料/饮品等非"美食"品类降权，避免占据十大榜单
        if (f.tags.includes("特产食材") || f.tags.includes("调味品") || f.tags.includes("发酵食品")) bonus -= 30;
        // 非菜品品类额外降权：调料/物产/其他品类不适合出现在十大美食榜
        if (f.category === "调料" || f.category === "物产" || f.category === "其他") bonus -= 80;
        // 餐厅专属菜品降权
        if (f.tags.includes("米其林") || f.tags.includes("黑珍珠") || f.tags.includes("老字号")) bonus -= 10;
        // 餐厅代表菜降权（名称包含知名餐厅名称）
        if (RESTAURANT_NAMES.some((name) => f.name.includes(name))) bonus -= 15;
        // 本地普遍性加分：街头小吃、家常菜、传统名菜、特色小吃
        if (
          f.tags.includes("街头小吃") ||
          f.tags.includes("家常菜") ||
          f.tags.includes("传统名菜") ||
          f.tags.includes("特色小吃")
        ) {
          bonus += 8;
        }
        return { food: f, bonus };
      })
      .sort((a, b) => {
        // 综合分：热度×50 + fame权重 + bonus
        // 热度为主导（每1点=50分），fame提供层次（差值20-100）
        // → 热度差2分必定压过fame差，确保 pop>=8 基本能进 top10
        // → 热度差1分可被fame逆转，使名菜/热门在同级热度中优先
        const fa = FAME_WEIGHT[inferFame(a.food)] || 20;
        const fb = FAME_WEIGHT[inferFame(b.food)] || 20;
        const pa = a.food.popularity || 5;
        const pb = b.food.popularity || 5;
        const scoreA = pa * POPULARITY_WEIGHT + fa + a.bonus;
        const scoreB = pb * POPULARITY_WEIGHT + fb + b.bonus;
        if (scoreA !== scoreB) return scoreB - scoreA;
        // 同分时优先热度、再fame、再traditional
        if (pa !== pb) return pb - pa;
        if (fa !== fb) return fb - fa;
        const ta = a.food.type === "traditional" ? 1 : 0;
        const tb = b.food.type === "traditional" ? 1 : 0;
        return tb - ta;
      });

    // 去重：名称相似 + 关键词多样性 + 做法多样性 + 品类多样性
    const deduped: { food: Food; bonus: number }[] = [];
    const selectedCores: string[] = [];
    const methodCount: Record<string, number> = {};
    const categoryCount: Record<string, number> = {};
    const keywordCount: Record<string, number> = {};
    for (const item of sorted) {
      const core = normalizeName(item.food.name);
      // 核心名称去重：归一化后相同或互为子串则跳过
      const isSimilar = selectedCores.some((selected) => {
        return (
          core === selected ||
          core.includes(selected) ||
          selected.includes(core)
        );
      });
      if (isSimilar) continue;
      // 关键词多样性：同一关键词（干锅/烤冷面/鸡爪等）超过上限则跳过
      const kw = extractKeyword(item.food.name);
      if (kw && (keywordCount[kw] || 0) >= MAX_PER_KEYWORD) continue;
      // 做法多样性：特色做法（干锅/涮/卤等）超过上限则跳过
      const distinctive = (item.food.cookingMethod || []).filter((m) => DISTINCTIVE_METHODS.has(m));
      if (distinctive.some((m) => (methodCount[m] || 0) >= MAX_PER_METHOD)) continue;
      // 品类多样性：同一品类超过上限则跳过，避免 top10 类型扎堆
      const cat = item.food.category;
      if ((categoryCount[cat] || 0) >= MAX_PER_CATEGORY) continue;
      deduped.push(item);
      selectedCores.push(core);
      if (kw) keywordCount[kw] = (keywordCount[kw] || 0) + 1;
      for (const m of distinctive) methodCount[m] = (methodCount[m] || 0) + 1;
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    }
    const result = deduped.slice(0, limit).map((item) => item.food);
    _topFoodsCache.set(cacheKey, { foods: s.foods, result });
    return result;
  },
}));

// HMR: 数据文件变更时刷新 store 中的 foods，保留筛选状态，并清空缓存
if (import.meta.hot) {
  import.meta.hot.dispose((data) => {
    data.state = useStore.getState();
  });
  import.meta.hot.accept();
  if (import.meta.hot.data.state) {
    _ingredientsCache = null;
    _cookingMethodsCache = null;
    _topFoodsCache.clear();
    useStore.setState({
      ...import.meta.hot.data.state,
      foods: FOODS,
    });
  }
}
