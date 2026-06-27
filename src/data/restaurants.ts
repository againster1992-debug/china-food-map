// 中国名餐厅数据 - 米其林指南、黑珍珠餐厅指南、亚洲五十佳、世界五十佳、百年老店、非遗传承、知名餐厅

export type RestaurantCategory =
  | "米其林三星"
  | "米其林二星"
  | "米其林一星"
  | "黑珍珠三钻"
  | "黑珍珠二钻"
  | "黑珍珠一钻"
  | "亚洲五十佳"
  | "世界五十佳"
  | "百年老店"
  | "非遗传承"
  | "知名餐厅";

export interface Restaurant {
  id: string;
  name: string; // 餐厅名称
  categories: RestaurantCategory[]; // 获奖/称号分类（可多个）
  cuisine: string; // 菜系
  province: string; // 省份
  city: string; // 城市
  address?: string; // 地址
  lat: number;
  lng: number;
  founded?: string; // 创立年份（百年老店用）
  stars?: number; // 米其林星级 1-3
  diamonds?: number; // 黑珍珠钻级 1-3
  description: string; // 餐厅介绍
  signatureDishes: string[]; // 招牌菜
  heritageItem?: string; // 非遗项目名称（非遗传承用）
  ranking?: number; // 排名（亚洲五十佳/世界五十佳用）
  rankingYear?: number; // 排名年份
}

export const RESTAURANTS: Restaurant[] = [
  // ========== 米其林三星 ==========
  {
    id: "r-001",
    name: "新荣记（北京新源南路店）",
    categories: ["米其林三星", "黑珍珠三钻", "亚洲五十佳", "世界五十佳"],
    cuisine: "浙菜",
    province: "北京",
    city: "北京",
    address: "北京市朝阳区新源南路8号启皓北京东塔1层",
    lat: 39.9042,
    lng: 116.4074,
    stars: 3,
    diamonds: 3,
    description:
      "新荣记源自浙江台州，以东海海鲜闻名，是中国大陆首家米其林三星中餐品牌。坚持「食必求真」的理念，食材每日从台州空运，以家常做法呈现极致鲜味。2021年成为米其林三星餐厅，2023年入选世界五十佳，是中餐在国际舞台的代表作。",
    signatureDishes: ["家烧黄鱼", "沙蒜豆面", "白煮花胶", "东海带鱼"],
    ranking: 61,
    rankingYear: 2023,
  },
  {
    id: "r-002",
    name: "龙景轩",
    categories: ["米其林二星", "黑珍珠二钻", "亚洲五十佳"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港中环金融街8号四季酒店4楼",
    lat: 22.3193,
    lng: 114.1694,
    stars: 2,
    diamonds: 2,
    description:
      "龙景轩位于香港四季酒店，是全球首家获得米其林三星的中餐厅（2009-2022），由名厨陈恩德主理。以传统粤菜为基础，融入创新元素，点心与海鲜尤为出色。2023年起评为米其林二星，2025年黑珍珠二钻，是粤菜的巅峰代表。",
    signatureDishes: ["龙皇披金", "脆皮烧肉", "鲍鱼酥", "龙虾饺"],
  },
  {
    id: "r-003",
    name: "唐阁",
    categories: ["米其林三星"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港尖沙咀北京道8号朗廷酒店6楼",
    lat: 22.3193,
    lng: 114.1694,
    stars: 3,
    description:
      "唐阁位于香港朗廷酒店，是香港顶级粤菜餐厅之一，连续多年获米其林三星评级。以传统粤菜工艺为基础，讲究食材本味与火候掌控，三葱爆龙虾是其招牌名菜。",
    signatureDishes: ["三葱爆龙虾", "蜜汁叉烧", "脆皮乳猪"],
  },
  {
    id: "r-004",
    name: "颐宫",
    categories: ["米其林三星", "黑珍珠一钻"],
    cuisine: "粤菜",
    province: "台湾",
    city: "台北",
    address: "台北市信义区松仁路90号君悦酒店17楼",
    lat: 25.033,
    lng: 121.5654,
    stars: 3,
    diamonds: 1,
    description:
      "颐宫位于台北君悦酒店，是台湾首家米其林三星中餐厅，由名厨林菊美主理。以粤菜为主，融合台湾本地食材，先知鸭与火焰片皮鸭是其招牌。连续多年保持米其林三星评级。",
    signatureDishes: ["先知鸭", "火焰片皮鸭", "龙虾饺"],
  },
  {
    id: "r-005",
    name: "8餐厅",
    categories: ["米其林三星", "黑珍珠一钻"],
    cuisine: "粤菜",
    province: "澳门",
    city: "澳门",
    address: "澳门葡京路2-4号新葡京酒店2楼",
    lat: 22.1987,
    lng: 113.5439,
    stars: 3,
    diamonds: 1,
    description:
      "8餐厅位于澳门新葡京酒店，是澳门顶级粤菜餐厅，连续多年获米其林三星评级。以精致点心与海鲜闻名，蟹肉小笼包与龙虾饺是其招牌。装修金碧辉煌，充满中式美学。",
    signatureDishes: ["蟹肉小笼包", "龙虾饺", "烧鹅"],
  },

  // ========== 米其林二星 ==========
  {
    id: "r-006",
    name: "8 1/2 Otto e Mezzo Bombana（上海）",
    categories: ["米其林二星", "黑珍珠三钻", "亚洲五十佳"],
    cuisine: "其他",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区圆明园路169号协进大楼6-7楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    diamonds: 3,
    description:
      "8 1/2 Otto e Mezzo Bombana上海店源自香港，香港店是亚洲唯一米其林三星意大利餐厅。由「白松露之王」Umberto Bombana主理，以意式手工面与松露料理闻名，是上海顶级西餐代表。",
    signatureDishes: ["黑松露手工面", "白松露意面", "提拉米苏"],
  },
  {
    id: "r-007",
    name: "宝丽轩",
    categories: ["米其林二星"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区河南北路33号上海宝格丽酒店47楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    description:
      "宝丽轩位于上海宝格丽酒店，由香港名厨主理，专注高端粤菜。以烧腊、海鲜与点心闻名，环境奢华，俯瞰苏州河景。连续多年获米其林二星评级。",
    signatureDishes: ["蜜汁叉烧", "脆皮烧肉", "龙虾饺"],
  },
  {
    id: "r-008",
    name: "御宝轩（上海）",
    categories: ["米其林二星"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区北京东路99号益丰外滩源5楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    description:
      "御宝轩源自新加坡，以高端粤菜闻名，主打潮汕菜与广式烧腊。食材考究，鲍参翅肚等高档食材处理精湛，是上海顶级粤菜代表之一。",
    signatureDishes: ["潮汕卤水鹅", "蜜汁叉烧", "鲍汁花胶"],
  },
  {
    id: "r-009",
    name: "喜粤8号",
    categories: ["米其林二星"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区局门路457号八号桥四期",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    description:
      "喜粤8号由香港名厨简捷明主理，是上海性价比极高的米其林二星餐厅。以传统粤菜为主，烧腊与点心尤为出色，以亲民价格提供星级水准的粤菜。",
    signatureDishes: ["蜜汁叉烧", "脆皮烧肉", "虾饺皇"],
  },
  {
    id: "r-010",
    name: "富春山居",
    categories: ["米其林二星"],
    cuisine: "浙菜",
    province: "上海",
    city: "上海",
    address: "上海市浦东新区张杨路500号华润时代广场",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    description:
      "富春山居以新派浙菜闻名，将江南文人雅趣融入菜品。环境古雅，以「富春山居图」为意境，菜品精致，讲究食材本味与意境呈现。",
    signatureDishes: ["龙井虾仁", "西湖醋鱼", "蟹粉豆腐"],
  },
  {
    id: "r-012",
    name: "永利轩",
    categories: ["米其林二星"],
    cuisine: "粤菜",
    province: "澳门",
    city: "澳门",
    address: "澳门仙德丽街永利澳门酒店",
    lat: 22.1987,
    lng: 113.5439,
    stars: 2,
    description:
      "永利轩位于永利澳门酒店，专注高端粤菜。以烧腊、点心与海鲜闻名，蜜汁叉烧是其招牌。环境奢华，是澳门顶级粤菜代表之一。",
    signatureDishes: ["蜜汁叉烧", "脆皮烧肉", "龙虾饺"],
  },

  // ========== 米其林一星 ==========
  {
    id: "r-013",
    name: "大董（北京团结湖店）",
    categories: ["黑珍珠三钻"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市朝阳区团结湖北口3号楼",
    lat: 39.9042,
    lng: 116.4074,
    diamonds: 3,
    description:
      "大董由名厨董振祥创立，以「意境菜」闻名，将中国绘画美学融入菜品。酥不腻烤鸭是其代表作，皮酥肉嫩，入口即化。大董将传统烤鸭提升到艺术境界，是现代中餐的代表。",
    signatureDishes: ["酥不腻烤鸭", "董氏烧海参", "红花汁白菜"],
  },
  {
    id: "r-014",
    name: "大董（上海越洋广场店）",
    categories: ["米其林一星"],
    cuisine: "京菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区南京西路1601号越洋广场5楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    description:
      "大董上海店延续北京大董的意境菜理念，以酥不腻烤鸭闻名。将京菜带到上海，融入海派元素，是上海米其林星级中餐的代表。",
    signatureDishes: ["酥不腻烤鸭", "董氏烧海参", "意境甜品"],
  },
  {
    id: "r-015",
    name: "福和慧",
    categories: ["米其林二星", "黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区愚园路1037号",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    diamonds: 2,
    description:
      "福和慧以「禅意素食」为理念，将中国传统素食与法式烹饪技艺融合。以Omakase形式供应，随季节变化，是上海高端素食的代表。2025年晋升米其林二星。",
    signatureDishes: ["松露竹笙汤", "素食套餐", "时令蔬食"],
  },
  {
    id: "r-016",
    name: "苏浙总会",
    categories: ["知名餐厅"],
    cuisine: "苏菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区南京西路1601号越洋广场",
    lat: 31.2304,
    lng: 121.4737,
    description:
      "苏浙总会由名厨朱寅根主理，专注苏浙风味二十余年，将苏帮菜的「浓油赤酱」与苏菜的「清鲜淡雅」完美融合。是上海顶级苏菜代表，曾连续多年获米其林一星与黑珍珠三钻。",
    signatureDishes: ["清炒河虾仁", "本帮红烧肉", "蟹粉豆腐"],
  },
  {
    id: "r-017",
    name: "利苑酒家（北京）",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区金宝街89号金宝大厦",
    lat: 39.9042,
    lng: 116.4074,
    stars: 1,
    description:
      "利苑酒家是香港老字号粤菜品牌，以传统粤菜与点心闻名。北京店延续香港利苑的严谨工艺，烧腊、海鲜与汤品尤为出色，是北京粤菜的代表。",
    signatureDishes: ["蜜汁叉烧", "脆皮乳猪", "老火汤"],
  },
  {
    id: "r-018",
    name: "利苑酒家（上海）",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区中山东一路18号外滩18号6楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    diamonds: 2,
    description:
      "利苑酒家上海店位于外滩18号，延续香港利苑的传统粤菜工艺。以烧腊、点心与海鲜闻名，是上海粤菜的代表，连续多年获米其林一星与黑珍珠二钻。",
    signatureDishes: ["蜜汁叉烧", "脆皮烧肉", "龙虾饺"],
  },
  {
    id: "r-019",
    name: "江南灶",
    categories: ["知名餐厅"],
    cuisine: "苏菜",
    province: "江苏",
    city: "南京",
    address: "南京市鼓楼区中央路1号南京香格里拉大酒店",
    lat: 32.0603,
    lng: 118.7969,
    description:
      "江南灶由名厨侯新庆主理，以淮扬菜为基础，融入江南风味。是南京首家米其林星级餐厅，以「灶」为名，讲究火候与食材本味。",
    signatureDishes: ["文思豆腐", "蟹粉狮子头", "淮扬软兜"],
  },
  {
    id: "r-020",
    name: "玉芝兰",
    categories: ["米其林一星", "黑珍珠三钻", "亚洲五十佳"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市青羊区长发街24号",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    diamonds: 3,
    description:
      "玉芝兰由川菜大师兰桂均创立，以传统川菜「坐杠」技法闻名。坚持「百菜百味」的理念，开水白菜与坐杠大刀金丝面是其代表作，体现了川菜「清鲜和醇」的一面。",
    signatureDishes: ["开水白菜", "坐杠大刀金丝面", "怪味凉面"],
  },
  {
    id: "r-021",
    name: "许家菜",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市武侯区望江路1号",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    diamonds: 2,
    description:
      "许家菜由名厨许凡主理，专注高端川菜，以「百菜百味」为理念。鸡豆花是其招牌，体现了川菜「吃鸡不见鸡」的功夫菜传统，颠覆了人们对川菜「只有麻辣」的刻板印象。",
    signatureDishes: ["鸡豆花", "泡椒凤爪", "宫保虾球"],
  },
  {
    id: "r-022",
    name: "雍颐庭",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市浦东新区梅花路1108号卓美亚喜玛拉雅酒店",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    diamonds: 2,
    description:
      "雍颐庭位于卓美亚喜玛拉雅酒店，专注精品本帮菜。以「浓油赤酱」的本帮传统为基础，融入现代元素，是上海本帮菜的代表之一。",
    signatureDishes: ["本帮红烧肉", "蟹粉豆腐", "熏鱼"],
  },
  {
    id: "r-023",
    name: "逸龙阁",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区中山东一路32号半岛酒店2楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    description:
      "逸龙阁位于上海半岛酒店，以传统粤菜闻名。环境典雅，俯瞰外滩江景，烧腊、海鲜与点心尤为出色，是上海高端粤菜的代表。",
    signatureDishes: ["蜜汁叉烧", "脆皮乳猪", "龙虾饺"],
  },
  {
    id: "r-024",
    name: "翡翠36",
    categories: ["米其林一星"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市浦东新区张杨路777号浦东香格里拉大酒店36楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    description:
      "翡翠36位于浦东香格里拉大酒店36楼，以新派本帮菜闻名。由法国名厨主理，将法式烹饪技艺与本帮风味融合，环境时尚，俯瞰浦江全景。",
    signatureDishes: ["本帮红烧肉", "蟹粉豆腐", "法式甜品"],
  },
  {
    id: "r-025",
    name: "鹅夫人",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市闵行区莘庄都市路5001号仲盛世界商城",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    diamonds: 2,
    description:
      "鹅夫人以粤式烧鹅闻名，是上海性价比极高的米其林一星餐厅。以亲民价格提供星级水准的粤菜，烧鹅皮脆肉嫩，是招牌名菜。",
    signatureDishes: ["烧鹅", "蜜汁叉烧", "虾饺皇"],
  },
  {
    id: "r-026",
    name: "家全七福",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区南京西路1601号越洋广场5楼",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    description:
      "家全七福源自香港，专注传统粤菜，以鲍参翅肚等高档食材闻名。鲍汁花胶是其招牌，坚持传统粤菜工艺，讲究「慢工出细活」。",
    signatureDishes: ["鲍汁花胶", "蜜汁叉烧", "红烧大鲍翅"],
  },
  {
    id: "r-028",
    name: "京兆尹",
    categories: ["米其林二星", "黑珍珠二钻"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区五道营胡同2号",
    lat: 39.9042,
    lng: 116.4074,
    stars: 2,
    diamonds: 2,
    description:
      "京兆尹坐落于五道营胡同四合院内，环境雅致，是北京顶级素食餐厅。坚持「本源、自然、健康」的素食理念，将传统素菜提升到米其林星级水准。曾获米其林三星，2025年评为米其林二星。",
    signatureDishes: ["松露素鹅", "松茸素水饺", "素食套餐"],
  },
  {
    id: "r-029",
    name: "承味堂",
    categories: ["米其林一星"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市朝阳区建国门外大街1号国贸商城",
    lat: 39.9042,
    lng: 116.4074,
    stars: 1,
    description:
      "承味堂以传统京菜为基础，融入创新元素。环境典雅，以「传承本味」为理念，是北京米其林星级餐厅的代表之一。",
    signatureDishes: ["京味烤鸭", "董氏烧海参", "京味小炒"],
  },
  {
    id: "r-030",
    name: "乡味小厨",
    categories: ["米其林一星"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市朝阳区呼家楼京广中心瑰丽酒店",
    lat: 39.9042,
    lng: 116.4074,
    stars: 1,
    description:
      "乡味小厨位于瑰丽酒店内，专注地道京味家常菜。烤鸭卷是其招牌，将传统烤鸭改为便携卷食形式，是米其林星级餐厅中性价比极高的菜品。",
    signatureDishes: ["烤鸭卷", "京味炸酱面", "京味小炒"],
  },
  {
    id: "r-031",
    name: "湖滨28",
    categories: ["米其林一星", "黑珍珠一钻"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区湖滨路28号凯悦酒店",
    lat: 30.2592,
    lng: 120.1303,
    stars: 1,
    diamonds: 1,
    description:
      "湖滨28位于西湖边，以杭帮菜闻名。蟹酿橙源自南宋《山家清供》，是将蟹肉酿入橙子蒸制的古菜，湖滨28将其复原，是杭帮菜「文人菜」的代表。",
    signatureDishes: ["蟹酿橙", "蟹粉狮子头", "西湖醋鱼"],
  },
  {
    id: "r-032",
    name: "解香楼",
    categories: ["米其林二星", "黑珍珠一钻"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区西溪湿地",
    lat: 30.2592,
    lng: 120.1303,
    stars: 2,
    diamonds: 1,
    description:
      "解香楼位于西溪湿地，以精品杭帮菜闻名。2026年晋升米其林二星，龙井茶香虾是其招牌，将茶文化融入饮食，体现了浙菜「以花入馔」的雅致传统。",
    signatureDishes: ["龙井茶香虾", "金箔扣肉", "桂花糯米藕"],
  },
  {
    id: "r-033",
    name: "紫萱",
    categories: ["米其林一星"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区紫萱路",
    lat: 30.2592,
    lng: 120.1303,
    stars: 1,
    description:
      "紫萱位于西湖边，以精品杭帮菜与创意甜品闻名。桂花糯米藕是其招牌甜品，体现了浙菜「以花入馔」的雅致传统。",
    signatureDishes: ["桂花糯米藕", "西湖醋鱼", "龙井虾仁"],
  },
  {
    id: "r-034",
    name: "龙井草堂",
    categories: ["米其林一星"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区龙井路",
    lat: 30.2592,
    lng: 120.1303,
    stars: 1,
    description:
      "龙井草堂位于龙井茶园旁，以「文人菜」闻名，将茶文化与饮食融合。茶香鸡是其招牌，体现了浙菜将茶文化融入饮食的雅致传统。",
    signatureDishes: ["茶香鸡", "龙井虾仁", "宋嫂鱼羹"],
  },
  {
    id: "r-035",
    name: "白天鹅宾馆玉堂春暖",
    categories: ["米其林一星", "黑珍珠一钻"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区沙面南街1号白天鹅宾馆",
    lat: 23.1291,
    lng: 113.2644,
    stars: 1,
    diamonds: 1,
    description:
      "白天鹅宾馆是中国首家五星级酒店，玉堂春暖是其旗舰中餐厅，俯瞰珠江白鹅潭。葵花鸡以葵花籽喂养，皮黄肉香，是粤菜正宗代表，传承四十余年。",
    signatureDishes: ["葵花鸡", "虾饺皇", "白切鸡"],
  },
  {
    id: "r-036",
    name: "江由辉创意粤菜",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市天河区珠江新城",
    lat: 23.1291,
    lng: 113.2644,
    stars: 1,
    description:
      "江由辉由名厨江由辉主理，以创新粤菜闻名。创新虾饺在传统虾饺基础上改良，加入黑松露，体现了粤菜「敢为人先」的创新精神。",
    signatureDishes: ["创新虾饺", "蜜汁烧排骨", "创意点心"],
  },
  {
    id: "r-037",
    name: "炳胜品味",
    categories: ["米其林一星", "黑珍珠一钻"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市海珠区东晓路33号",
    lat: 23.1291,
    lng: 113.2644,
    stars: 1,
    diamonds: 1,
    description:
      "炳胜品味是广州老字号粤菜品牌，以烧腊闻名，已有近三十年历史。秘制叉烧被誉为「广州叉烧天花板」，是粤菜烧腊的经典代表。",
    signatureDishes: ["秘制叉烧", "秘制烧鹅", "陈皮鸭"],
  },
  {
    id: "r-038",
    name: "炳胜公馆",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市天河区珠江新城",
    lat: 23.1291,
    lng: 113.2644,
    stars: 1,
    description:
      "炳胜公馆是炳胜集团的高端品牌，专注精品粤菜。陈皮鸭选用新会老陈皮与麻鸭同炖，体现了粤菜「药食同源」的传统。",
    signatureDishes: ["陈皮鸭", "秘制叉烧", "鲍汁花胶"],
  },
  {
    id: "r-039",
    name: "马旺子",
    categories: ["米其林一星", "黑珍珠二钻", "百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区东大街紫东楼段35号",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    diamonds: 2,
    founded: "1923",
    description:
      "马旺子是成都百年老字号，始于1923年，以传统川菜闻名。小炒肉是其招牌，看似家常，实则考验火候与刀工，是成都米其林一星餐厅中最接地气的代表。",
    signatureDishes: ["小炒肉", "宫保鸡丁", "夫妻肺片"],
  },
  {
    id: "r-040",
    name: "柴门荟",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市武侯区天府大道",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    diamonds: 2,
    description:
      "柴门荟是柴门餐饮的高端品牌，以创新川菜闻名。盐烤蟹将传统盐焗技法应用于蟹类，是创新川菜的代表，体现了柴门荟对食材与技法的创新运用。",
    signatureDishes: ["盐烤蟹", "创新川菜", "海鲜"],
  },
  {
    id: "r-041",
    name: "松云泽",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    description:
      "松云泽由川菜大师张元富创立，专注传统川菜精品。竹荪肝膏汤是川菜「清汤」技法的巅峰之作，体现了川菜「清鲜和醇」的一面。",
    signatureDishes: ["竹荪肝膏汤", "开水白菜", "怪味凉面"],
  },
  {
    id: "r-042",
    name: "芳香景",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市青羊区",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    description:
      "芳香景由川菜大师主导，专注传统川菜味型。怪味凉面集咸、甜、麻、辣、酸、鲜、香七味于一体，是川菜「怪味」味型的经典代表。",
    signatureDishes: ["怪味凉面", "怪味鸡丁", "传统川菜"],
  },
  {
    id: "r-043",
    name: "银芭",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市天府新区",
    lat: 30.5728,
    lng: 104.0668,
    stars: 1,
    description:
      "银芭由名厨徐孝洪创立，以创新川菜闻名，将传统川菜与西式烹饪技艺融合。坚持「传承不守旧，创新不忘本」的理念，是现代川菜的代表。",
    signatureDishes: ["松露鸡豆花", "创新川菜", "融合菜"],
  },
  {
    id: "r-044",
    name: "Ensue",
    categories: ["米其林一星", "黑珍珠一钻"],
    cuisine: "其他",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区香蜜湖",
    lat: 22.5431,
    lng: 114.0579,
    stars: 1,
    diamonds: 1,
    description:
      "Ensue由美国名厨Christopher Kostow主理，以「农场到餐桌」理念闻名，是中国最具创新力的餐厅之一。将中式食材以法式技法呈现，是深圳米其林星级西餐的代表。",
    signatureDishes: ["发酵面包", "慢烤羊排", "创意套餐"],
  },
  {
    id: "r-045",
    name: "晴溪",
    categories: ["米其林一星"],
    cuisine: "湘菜",
    province: "广东",
    city: "深圳",
    address: "深圳市南山区",
    lat: 22.5431,
    lng: 114.0579,
    stars: 1,
    description:
      "晴溪以精品湘菜闻名，将湖南乡土菜提升到米其林星级水准。小炒黄牛肉是其招牌，牛肉每日从湖南空运，是深圳米其林星级湘菜的代表。",
    signatureDishes: ["小炒黄牛肉", "剁椒鱼头", "湘味小炒"],
  },
  {
    id: "r-046",
    name: "大班楼",
    categories: ["米其林一星", "黑珍珠三钻", "亚洲五十佳", "世界五十佳"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港中环九如坊18号",
    lat: 22.3193,
    lng: 114.1694,
    stars: 1,
    diamonds: 3,
    description:
      "大班楼由名厨叶一南创立，以「古法粤菜」闻名，坚持传统粤菜工艺。鸡油花胶蒸蟹是其招牌，讲究「食材为本」，所有食材当日采购。2025年晋升黑珍珠三钻，2021年曾入选世界五十佳，是香港美食的代表。",
    signatureDishes: ["鸡油花胶蒸蟹", "古法蒸鱼", "脆皮鸡"],
    ranking: 10,
    rankingYear: 2021,
  },
  {
    id: "r-047",
    name: "富声鱼翅海鲜酒家",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港湾仔",
    lat: 22.3193,
    lng: 114.1694,
    stars: 1,
    description:
      "富声是香港老字号海鲜酒家，以鱼翅料理闻名。红烧大鲍翅以老母鸡、火腿、干贝等熬制的高汤慢煨，是粤菜高档食材的代表，传统粤菜的活化石。",
    signatureDishes: ["红烧大鲍翅", "海鲜", "烧腊"],
  },
  {
    id: "r-048",
    name: "阿一鲍鱼",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港铜锣湾",
    lat: 22.3193,
    lng: 114.1694,
    stars: 1,
    description:
      "阿一鲍鱼由「鲍鱼之王」杨贯一创立，以鲍鱼料理闻名于世。禾麻鲍鱼以高汤慢煨数十小时，软糯弹牙，是国宴级菜品，深受国内外政商名流推崇。",
    signatureDishes: ["禾麻鲍鱼", "红烧大鲍翅", "高档粤菜"],
  },
  {
    id: "r-049",
    name: "紫逸轩",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "澳门",
    city: "澳门",
    address: "澳门孙逸仙大马路澳门文华东方酒店",
    lat: 22.1987,
    lng: 113.5439,
    stars: 1,
    description:
      "紫逸轩位于澳门文华东方酒店，专注精品粤菜。花胶炖鸡以炖盅慢火炖制四小时，汤清如水，鲜味醇厚，是粤菜炖汤的代表。",
    signatureDishes: ["花胶炖鸡", "蜜汁叉烧", "粤式炖汤"],
  },

  // ========== 黑珍珠餐厅（其他） ==========
  {
    id: "r-051",
    name: "逸道",
    categories: ["黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区",
    lat: 31.2304,
    lng: 121.4737,
    diamonds: 2,
    description:
      "逸道以精品本帮菜闻名，将传统本帮菜精致化呈现。以茶入菜是其特色，体现了海派饮食文化的精致与传承。",
    signatureDishes: ["本帮红烧肉", "茶香虾", "蟹粉豆腐"],
  },
  {
    id: "r-052",
    name: "子福慧",
    categories: ["黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市静安区",
    lat: 31.2304,
    lng: 121.4737,
    diamonds: 2,
    description:
      "子福慧以创新本帮菜闻名，将传统本帮菜与现代烹饪技艺融合。讲究食材本味与意境呈现，是上海黑珍珠二钻的代表。",
    signatureDishes: ["本帮红烧肉", "蟹粉豆腐", "意境甜品"],
  },
  {
    id: "r-053",
    name: "菁禧荟",
    categories: ["米其林二星", "黑珍珠三钻"],
    cuisine: "潮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区",
    lat: 31.2304,
    lng: 121.4737,
    stars: 2,
    diamonds: 3,
    description:
      "菁禧荟由潮汕名厨杜建青主理，专注高端潮汕菜。2026年晋升米其林二星并升至黑珍珠三钻，卤水老鹅头选用澄海三年老狮头鹅鹅头，是潮汕卤味的巅峰之作，体现了潮菜对食材与卤艺的极致追求。",
    signatureDishes: ["卤水老鹅头", "卤水鹅肝", "潮汕海鲜"],
  },
  {
    id: "r-054",
    name: "福1015",
    categories: ["米其林一星", "黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市长宁区愚园路1015号",
    lat: 31.2304,
    lng: 121.4737,
    stars: 1,
    diamonds: 2,
    description:
      "福1015坐落于愚园路老洋房内，环境复古优雅，专注老上海本帮风味。蟹粉豆腐与葱油拌面是其招牌，体现了海派饮食文化的精致呈现。",
    signatureDishes: ["蟹粉豆腐", "葱油拌面", "本帮熏鱼"],
  },

  // ========== 亚洲五十佳 / 世界五十佳（其他） ==========
  {
    id: "r-055",
    name: "富豪酒家",
    categories: ["知名餐厅"],
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    address: "香港中环士丹利街",
    lat: 22.3193,
    lng: 114.1694,
    description:
      "富豪酒家是香港知名粤菜餐厅，以古法粤菜闻名。坚持传统粤菜工艺，是香港美食的代表之一。",
    signatureDishes: ["古法蒸鱼", "脆皮鸡", "蜜汁叉烧"],
  },
  {
    id: "r-056",
    name: "永利宫",
    categories: ["知名餐厅"],
    cuisine: "粤菜",
    province: "澳门",
    city: "澳门",
    address: "澳门仙德丽街永利皇宫",
    lat: 22.1987,
    lng: 113.5439,
    description:
      "永利宫位于永利皇宫，以高端粤菜闻名。由名厨谭国锋主理，将传统粤菜精致化呈现，是澳门顶级粤菜代表。",
    signatureDishes: ["蜜汁叉烧", "脆皮乳猪", "龙虾饺"],
  },

  // ========== 百年老店 ==========
  {
    id: "r-057",
    name: "全聚德",
    categories: ["非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区前门大街30号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1864",
    heritageItem: "全聚德挂炉烤鸭技艺（国家级非遗）",
    description:
      "全聚德创于1864年（清同治三年），是中华老字号，以挂炉烤鸭闻名于世。挂炉烤鸭技艺为国家级非物质文化遗产，选用北京填鸭，以枣木、梨木烤制，皮脆肉嫩，色泽枣红，是京菜的代表，被誉为「中华第一烤鸭」。",
    signatureDishes: ["挂炉烤鸭", "鸭骨汤", "芥末鸭掌"],
  },
  {
    id: "r-058",
    name: "便宜坊",
    categories: ["百年老店"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区崇文门外大街16号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1416",
    description:
      "便宜坊创于1416年（明永乐十四年），是中国最古老的餐厅之一，以焖炉烤鸭闻名。焖炉烤鸭与挂炉不同，以暗火焖烤，鸭肉更嫩，是京菜烤鸭的两大流派之一。",
    signatureDishes: ["焖炉烤鸭", "脱骨鸭", "鸭油饼"],
  },
  {
    id: "r-059",
    name: "东来顺",
    categories: ["非遗传承"],
    cuisine: "清真菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区王府井大街198号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1903",
    heritageItem: "东来顺涮羊肉制作技艺（国家级非遗）",
    description:
      "东来顺创于1903年（清光绪二十九年），以涮羊肉闻名于世。涮羊肉制作技艺为国家级非物质文化遗产，选用内蒙古锡林郭勒盟黑头白羊，手工切肉薄如纸，是清真菜的代表。",
    signatureDishes: ["涮羊肉", "麻酱烧饼", "羊蝎子"],
  },
  {
    id: "r-060",
    name: "烤肉季",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区前海东沿22号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1848",
    description:
      "烤肉季创于1848年（清道光二十八年），坐落于什刹海畔，以北京烤肉闻名。与烤肉宛并称「南宛北季」，是北京烤肉的代表，选用内蒙古绵羊肉，以铁炙子烤制。",
    signatureDishes: ["烤羊肉", "烤牛肉", "麻酱烧饼"],
  },
  {
    id: "r-061",
    name: "烤肉宛",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区宣武门内大街",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1686",
    description:
      "烤肉宛创于1686年（清康熙二十五年），是北京最古老的烤肉店之一。与烤肉季并称「南宛北季」，以烤牛肉闻名，选用内蒙古牛肉，以铁炙子烤制，是北京烤肉的代表。",
    signatureDishes: ["烤牛肉", "烤羊肉", "麻酱烧饼"],
  },
  {
    id: "r-062",
    name: "都一处",
    categories: ["非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区前门大街38号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1738",
    heritageItem: "都一处烧麦制作技艺（国家级非遗）",
    description:
      "都一处创于1738年（清乾隆三年），相传乾隆皇帝曾微服到此用餐并赐匾。烧麦制作技艺为国家级非物质文化遗产，以三鲜烧麦闻名，皮薄馅大，是京味小吃的代表。",
    signatureDishes: ["三鲜烧麦", "马莲肉", "炸三角"],
  },
  {
    id: "r-063",
    name: "砂锅居",
    categories: ["百年老店"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区西四南大街60号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1741",
    description:
      "砂锅居创于1741年（清乾隆六年），以砂锅白肉闻名。原为定王府祭神后的「神余」分享，后将白肉、下水等以砂锅炖煮，是京菜「烧燎白煮」的代表。",
    signatureDishes: ["砂锅白肉", "砂锅丸子", "砂锅吊子"],
  },
  {
    id: "r-064",
    name: "同和居",
    categories: ["百年老店"],
    cuisine: "鲁菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区地安门西大街51号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1822",
    description:
      "同和居创于1822年（清道光二年），是北京八大居之一，以鲁菜闻名。三不粘是其招牌名菜，不粘盘、不粘筷、不粘牙，是鲁菜「炒」技的巅峰之作。",
    signatureDishes: ["三不粘", "葱烧海参", "糟溜鱼片"],
  },
  {
    id: "r-065",
    name: "鸿宾楼",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区展览馆路11号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1853",
    description:
      "鸿宾楼创于1853年（清咸丰三年），原在天津，后迁北京，是北京最著名的清真餐厅。以全羊席闻名，红烧牛尾是其招牌，是清真菜的代表。",
    signatureDishes: ["红烧牛尾", "芫爆散丹", "全羊席"],
  },
  {
    id: "r-066",
    name: "东兴楼",
    categories: ["百年老店"],
    cuisine: "鲁菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区东直门内大街5号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1902",
    description:
      "东兴楼创于1902年（清光绪二十八年），是北京八大楼之首，以鲁菜闻名。讲究「选料精、制作细」，是北京鲁菜的代表，曾被誉为「八大楼之冠」。",
    signatureDishes: ["葱烧海参", "糟溜鱼片", "烩乌鱼蛋"],
  },
  {
    id: "r-067",
    name: "狗不理",
    categories: ["非遗传承"],
    cuisine: "津菜",
    province: "天津",
    city: "天津",
    address: "天津市和平区山东路77号",
    lat: 39.0842,
    lng: 117.2009,
    founded: "1858",
    heritageItem: "狗不理包子制作技艺（国家级非遗）",
    description:
      "狗不理创于1858年（清咸丰八年），以包子闻名于世。包子制作技艺为国家级非物质文化遗产，选料精细，制作严格，每个包子不少于15个褶，是天津小吃的代表。",
    signatureDishes: ["狗不理包子", "耳朵眼炸糕", "桂发祥麻花"],
  },
  {
    id: "r-068",
    name: "桂发祥",
    categories: [],
    cuisine: "津菜",
    province: "天津",
    city: "天津",
    address: "天津市河西区大沽南路",
    lat: 39.0842,
    lng: 117.2009,
    founded: "1936",
    description:
      "桂发祥创于1936年，以十八街麻花闻名。麻花选料精细，工艺独特，以桂花、闽姜、核桃仁等为馅，是天津三绝之一，深受食客喜爱。",
    signatureDishes: ["十八街麻花", "麻花礼盒"],
  },
  {
    id: "r-069",
    name: "耳朵眼",
    categories: ["百年老店"],
    cuisine: "津菜",
    province: "天津",
    city: "天津",
    address: "天津市红桥区北门外大街",
    lat: 39.0842,
    lng: 117.2009,
    founded: "1891",
    description:
      "耳朵眼创于1891年（清光绪十七年），以炸糕闻名。因店铺紧靠耳朵眼胡同而得名，炸糕外酥里嫩，豆沙馅香甜，是天津三绝之一。",
    signatureDishes: ["耳朵眼炸糕", "粘糕", "元宵"],
  },
  {
    id: "r-070",
    name: "楼外楼",
    categories: ["非遗传承"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区孤山路30号",
    lat: 30.2592,
    lng: 120.1303,
    founded: "1848",
    heritageItem: "楼外楼西湖醋鱼制作技艺",
    description:
      "楼外楼创于1848年（清道光二十八年），坐落于西湖孤山，以杭帮菜闻名。西湖醋鱼是其招牌，选用西湖草鱼，饿养两日去泥腥，是杭帮菜的代表，承载着西湖的文化记忆。",
    signatureDishes: ["西湖醋鱼", "东坡肉", "龙井虾仁", "叫化鸡"],
  },
  {
    id: "r-071",
    name: "知味观",
    categories: ["非遗传承"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区仁和路83号",
    lat: 30.2592,
    lng: 120.1303,
    founded: "1913",
    heritageItem: "知味观杭州小吃制作技艺",
    description:
      "知味观创于1913年，是杭州老字号，以杭帮小吃闻名。「知味停车，闻香下马」是其招牌语，猫耳朵、幸福双是其招牌，是杭州小吃的代表。",
    signatureDishes: ["猫耳朵", "幸福双", "小笼包", "片儿川"],
  },
  {
    id: "r-073",
    name: "松鹤楼",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区太监弄72号",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1757",
    description:
      "松鹤楼创于1757年（清乾隆二十二年），是苏州最古老的餐厅之一，以苏帮菜闻名。松鼠桂鱼是其招牌名菜，形似松鼠，外酥里嫩，酸甜可口，是苏菜的代表。",
    signatureDishes: ["松鼠桂鱼", "响油鳝糊", "樱桃肉"],
  },
  {
    id: "r-074",
    name: "采芝斋",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区观前街91号",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1870",
    description:
      "采芝斋创于1870年（清同治九年），是苏州老字号，以苏式糖果与糕点闻名。粽子糖、贝母糖是其招牌，是苏式糖果的代表，被誉为「中国糖王」。",
    signatureDishes: ["粽子糖", "贝母糖", "苏式糕点"],
  },
  {
    id: "r-075",
    name: "老半斋",
    categories: ["非遗传承"],
    cuisine: "苏菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区福州路600号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1905",
    heritageItem: "老半斋刀鱼汁面",
    description:
      "老半斋创于1905年，是上海百年老字号，以淮扬菜与刀鱼汁面闻名。刀鱼汁面选用长江刀鱼熬汁，是春季时令名品，体现了海派饮食对时令的讲究。",
    signatureDishes: ["刀鱼汁面", "肴肉", "煮干丝"],
  },
  {
    id: "r-076",
    name: "德兴馆",
    categories: ["百年老店"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区中华路1715号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1878",
    description:
      "德兴馆创于1878年（清光绪四年），是上海本帮菜老字号。虾子大乌参是其招牌名菜，海参软糯，虾子鲜香，是本帮菜「浓油赤酱」的代表。",
    signatureDishes: ["虾子大乌参", "红烧回鱼", "本帮红烧肉"],
  },
  {
    id: "r-077",
    name: "老正兴",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区福州路556号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1862",
    description:
      "老正兴创于1862年（清同治元年），是上海最古老的苏帮菜馆之一。以无锡菜为本，融入苏帮风味，油爆虾是其招牌，是苏菜的代表。",
    signatureDishes: ["油爆虾", "草头圈子", "红烧划水"],
  },
  {
    id: "r-078",
    name: "王宝和",
    categories: ["非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区福州路603号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1744",
    heritageItem: "王宝和蟹宴",
    description:
      "王宝和创于1744年（清乾隆九年），是上海最古老的酒家，以黄酒与蟹宴闻名。蟹宴选用阳澄湖大闸蟹，全蟹宴是其招牌，被誉为「蟹大王，酒祖宗」。",
    signatureDishes: ["全蟹宴", "清蒸大闸蟹", "蟹粉豆腐"],
  },
  {
    id: "r-079",
    name: "杏花楼",
    categories: ["百年老店", "非遗传承"],
    cuisine: "粤菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区福州路343号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1851",
    heritageItem: "杏花楼月饼制作技艺",
    description:
      "杏花楼创于1851年（清咸丰元年），是上海老字号，以粤菜与月饼闻名。月饼制作技艺为非物质文化遗产，豆沙莲蓉月饼是其招牌，是上海月饼的代表。",
    signatureDishes: ["豆沙莲蓉月饼", "蜜汁叉烧", "粤式烧腊"],
  },
  {
    id: "r-080",
    name: "沈大成",
    categories: ["百年老店", "非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区南京东路636号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1875",
    heritageItem: "沈大成糕团制作技艺",
    description:
      "沈大成创于1875年（清光绪元年），是上海百年老字号，以糕团闻名。糕团制作技艺为非物质文化遗产，青团、条头糕是其招牌，是上海糕团的代表。",
    signatureDishes: ["青团", "条头糕", "双酿团", "寿桃"],
  },
  {
    id: "r-081",
    name: "沧浪亭",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区中华路146号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1895",
    description:
      "沧浪亭创于1895年，是上海百年老字号，以苏式面点闻名。以苏州沧浪亭为名，三虾面、焖肉面是其招牌，是上海面食的代表。",
    signatureDishes: ["三虾面", "焖肉面", "苏式糕点"],
  },
  {
    id: "r-082",
    name: "陶陶居",
    categories: ["百年老店", "非遗传承"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区第十甫路20号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1880",
    heritageItem: "陶陶居广式点心制作技艺",
    description:
      "陶陶居创于1880年（清光绪六年），是广州最古老的茶楼之一，以广式点心闻名。点心制作技艺为非物质文化遗产，虾饺、叉烧包是其招牌，是广式早茶的代表。",
    signatureDishes: ["虾饺皇", "叉烧包", "陶陶居上月鸡"],
  },
  {
    id: "r-083",
    name: "莲香楼",
    categories: ["百年老店"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区第十甫路67号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1889",
    description:
      "莲香楼创于1889年（清光绪十五年），是广州老字号茶楼，以莲蓉月饼闻名。莲蓉制作技艺精湛，被誉为「莲蓉第一家」，是广式月饼的代表。",
    signatureDishes: ["莲蓉月饼", "虾饺皇", "叉烧包"],
  },
  {
    id: "r-084",
    name: "广州酒家",
    categories: [],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区文昌南路2号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1935",
    description:
      "广州酒家创于1935年，是广州老字号，以粤菜与月饼闻名。文昌鸡是其招牌名菜，被誉为「食在广州第一家」，是粤菜的代表。",
    signatureDishes: ["文昌鸡", "红烧乳鸽", "广式月饼"],
  },
  {
    id: "r-085",
    name: "北园酒家",
    categories: [],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市越秀区小北路202号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1928",
    description:
      "北园酒家创于1928年，是广州老字号，以粤菜闻名。园林式建筑，环境古雅，是广州「园林酒家」的代表，被誉为「广州第一家园林酒家」。",
    signatureDishes: ["北园烧鹅", "虾饺皇", "叉烧"],
  },
  {
    id: "r-086",
    name: "陈麻婆豆腐",
    categories: ["百年老店", "非遗传承"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市青羊区青华路10号",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1862",
    heritageItem: "陈麻婆豆腐制作技艺（省级非遗）",
    description:
      "陈麻婆豆腐创于1862年（清同治元年），以麻婆豆腐闻名于世。麻婆豆腐制作技艺为省级非物质文化遗产，集麻、辣、烫、香、酥、嫩、鲜、活于一体，是川菜的代表。",
    signatureDishes: ["麻婆豆腐", "夫妻肺片", "回锅肉"],
  },
  {
    id: "r-087",
    name: "钟水饺",
    categories: ["百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市武侯区致民路",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1893",
    description:
      "钟水饺创于1893年（清光绪十九年），以红油水饺闻名。水饺皮薄馅嫩，以红油、蒜泥、复制酱油调味，甜咸微辣，是成都小吃的代表。",
    signatureDishes: ["红油水饺", "甜水面", "蛋烘糕"],
  },
  {
    id: "r-088",
    name: "龙抄手",
    categories: [],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区春熙路南段",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1941",
    description:
      "龙抄手创于1941年，以抄手（馄饨）闻名。抄手皮薄如纸，馅嫩鲜香，红油抄手是其招牌，是成都小吃的代表。",
    signatureDishes: ["红油抄手", "原汤抄手", "玻璃抄手"],
  },
  {
    id: "r-089",
    name: "赖汤圆",
    categories: ["百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区总府路",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1894",
    description:
      "赖汤圆创于1894年（清光绪二十年），以黑芝麻汤圆闻名。汤圆皮薄馅多，香甜滑糯，是成都小吃的代表。",
    signatureDishes: ["黑芝麻汤圆", "玫瑰汤圆", "冰橘汤圆"],
  },
  {
    id: "r-090",
    name: "夫妻肺片",
    categories: [],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区总府路",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1930",
    description:
      "夫妻肺片创于1930年代，由郭朝华、张田政夫妇创制，以凉拌牛杂闻名。选用牛肉、牛肚、牛百叶等，以红油、花椒调味，麻辣鲜香，是川菜凉菜的代表。",
    signatureDishes: ["夫妻肺片", "凉拌牛杂", "红油耳片"],
  },
  {
    id: "r-091",
    name: "荣乐园",
    categories: ["百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市青羊区",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1923",
    description:
      "荣乐园创于1923年，是成都老字号，以传统川菜闻名。由川菜大师蓝光鉴创办，是现代川菜的正宗代表，开水白菜、麻婆豆腐是其招牌。",
    signatureDishes: ["开水白菜", "麻婆豆腐", "回锅肉"],
  },
  {
    id: "r-092",
    name: "火宫殿",
    categories: ["百年老店", "非遗传承"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市天心区坡子街127号",
    lat: 28.2282,
    lng: 112.9388,
    founded: "1577",
    heritageItem: "火宫殿臭豆腐制作技艺",
    description:
      "火宫殿创于1577年（明万历五年），是长沙最古老的餐厅，以湘菜与小吃闻名。臭豆腐制作技艺为非物质文化遗产，外焦里嫩，闻臭吃香，是长沙小吃的代表。",
    signatureDishes: ["臭豆腐", "糖油粑粑", "红烧猪脚", "龙脂猪血"],
  },
  {
    id: "r-093",
    name: "杨裕兴",
    categories: ["百年老店"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市芙蓉区解放路",
    lat: 28.2282,
    lng: 112.9388,
    founded: "1894",
    description:
      "杨裕兴创于1894年（清光绪二十年），是长沙老字号，以面条闻名。鸡蛋面是其招牌，面条筋道，汤鲜味美，是长沙面食的代表。",
    signatureDishes: ["鸡蛋面", "杂酱面", "牛肉粉"],
  },
  {
    id: "r-094",
    name: "老孙家",
    categories: ["百年老店", "非遗传承"],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市新城区东关正街78号",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1898",
    heritageItem: "老孙家羊肉泡馍制作技艺",
    description:
      "老孙家创于1898年（清光绪二十四年），是西安老字号，以羊肉泡馍闻名。羊肉泡馍选用优质羊肉，慢炖数小时，馍掰碎后煮制，是西北菜的代表。",
    signatureDishes: ["羊肉泡馍", "腊汁肉夹馍", "烤羊肉"],
  },
  {
    id: "r-095",
    name: "同盛祥",
    categories: ["百年老店", "非遗传承"],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市莲湖区钟鼓楼广场",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1920",
    heritageItem: "同盛祥牛羊肉泡馍制作技艺（国家级非遗）",
    description:
      "同盛祥创于1920年，是西安老字号，以牛羊肉泡馍闻名。牛羊肉泡馍制作技艺为国家级非物质文化遗产，是西北菜的代表，深受国内外食客推崇。",
    signatureDishes: ["牛羊肉泡馍", "腊汁肉夹馍", "烤羊肉"],
  },
  {
    id: "r-096",
    name: "西安饭庄",
    categories: [],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市碑林区东大街298号",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1929",
    description:
      "西安饭庄创于1929年，是西安老字号，以陕菜闻名。葫芦鸡是其招牌名菜，外酥里嫩，是陕菜的代表，被誉为「长安第一味」。",
    signatureDishes: ["葫芦鸡", "温拌腰丝", "羊肉泡馍"],
  },
  {
    id: "r-097",
    name: "樊记腊汁肉",
    categories: ["百年老店"],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市碑林区竹笆市街",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1904",
    description:
      "樊记腊汁肉创于1904年（清光绪三十年），是西安老字号，以腊汁肉夹馍闻名。腊汁肉选用猪肉，以二十余味香料卤制，肉烂汁浓，是西安小吃的代表。",
    signatureDishes: ["腊汁肉夹馍", "腊汁肉", "白吉馍"],
  },
  {
    id: "r-098",
    name: "六味斋",
    categories: ["百年老店"],
    cuisine: "晋菜",
    province: "山西",
    city: "太原",
    address: "太原市杏花岭区桥头街",
    lat: 37.8706,
    lng: 112.5489,
    founded: "1738",
    description:
      "六味斋创于1738年（清乾隆三年），是太原老字号，以酱肉闻名。酱肉选用优质猪肉，以传统工艺酱制，肥而不腻，是晋菜的代表。",
    signatureDishes: ["酱肉", "酱肘花", "香肠"],
  },
  {
    id: "r-099",
    name: "清和元",
    categories: ["百年老店"],
    cuisine: "晋菜",
    province: "山西",
    city: "太原",
    address: "太原市迎泽区桥头街",
    lat: 37.8706,
    lng: 112.5489,
    founded: "1632",
    description:
      "清和元创于1632年（明崇祯五年），是太原老字号，以「头脑」闻名。头脑是太原特有药膳汤品，以羊肉、黄酒、山药等炖制，是晋菜的代表。",
    signatureDishes: ["头脑", "帽盒", "烧麦"],
  },
  {
    id: "r-100",
    name: "老边饺子",
    categories: ["百年老店"],
    cuisine: "东北菜",
    province: "辽宁",
    city: "沈阳",
    address: "沈阳市沈河区中街路208号",
    lat: 41.8057,
    lng: 123.4315,
    founded: "1829",
    description:
      "老边饺子创于1829年（清道光九年），是沈阳老字号，以饺子闻名。饺子馅以煸制工艺制作，皮薄馅大，是东北菜的代表，被誉为「天下第一饺子」。",
    signatureDishes: ["老边饺子", "蒸饺", "煸馅饺子"],
  },
  {
    id: "r-101",
    name: "马家烧麦",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "辽宁",
    city: "沈阳",
    address: "沈阳市沈河区小北门",
    lat: 41.8057,
    lng: 123.4315,
    founded: "1796",
    description:
      "马家烧麦创于1796年（清嘉庆元年），是沈阳老字号清真餐厅，以烧麦闻名。烧麦皮薄馅大，以牛羊肉为馅，是清真菜的代表。",
    signatureDishes: ["牛羊肉烧麦", "羊汤", "回头"],
  },

  // ========== 非遗传承餐厅（其他） ==========
  {
    id: "r-102",
    name: "功德林",
    categories: ["非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区南京西路445号",
    lat: 31.2304,
    lng: 121.4737,
    heritageItem: "功德林素食制作技艺",
    description:
      "功德林创于1922年，是上海老字号素食餐厅，以「素菜荤做」闻名。素食制作技艺为非物质文化遗产，以素托荤，形似味似，是上海素食的代表。",
    signatureDishes: ["素蟹粉", "素红烧肉", "素八宝鸭"],
  },
  {
    id: "r-103",
    name: "绿波廊",
    categories: ["非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区豫园路115号",
    lat: 31.2304,
    lng: 121.4737,
    heritageItem: "绿波廊精制点心制作技艺",
    description:
      "绿波廊位于豫园，以精制点心与本帮菜闻名。点心制作技艺为非物质文化遗产，曾接待多国元首，是上海本帮点心的代表。",
    signatureDishes: ["桂花拉糕", "眉毛酥", "枣泥酥"],
  },
  {
    id: "r-104",
    name: "小绍兴",
    categories: ["非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区云南南路69号",
    lat: 31.2304,
    lng: 121.4737,
    heritageItem: "小绍兴白斩鸡",
    description:
      "小绍兴创于1943年，是上海老字号，以白斩鸡闻名。白斩鸡选用浦东三黄鸡，皮黄肉嫩，蘸特制酱油，是上海白斩鸡的代表。",
    signatureDishes: ["白斩鸡", "鸡粥", "鸡血汤"],
  },
  {
    id: "r-105",
    name: "稻香村",
    categories: ["非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区东四北大街126号",
    lat: 39.9042,
    lng: 116.4074,
    heritageItem: "稻香村京八件制作技艺",
    description:
      "北京稻香村创于1895年（清光绪二十一年），是北京老字号，以京八件等传统糕点闻名。京八件制作技艺为非物质文化遗产，是京式糕点的代表。",
    signatureDishes: ["京八件", "牛舌饼", "枣花酥"],
  },

  // ========== 知名餐厅 ==========
  {
    id: "r-106",
    name: "海底捞",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "四川",
    city: "简阳",
    address: "四川省简阳市",
    lat: 30.3904,
    lng: 104.5459,
    founded: "1994",
    description:
      "海底捞创于1994年，源自四川简阳，以火锅与极致服务闻名。是中国最大的火锅连锁品牌，以「服务至上」为理念，提供美甲、擦鞋等特色服务，是中式餐饮的标杆。",
    signatureDishes: ["番茄锅底", "毛肚", "虾滑", "捞面"],
  },
  {
    id: "r-107",
    name: "西贝莜面村",
    categories: ["知名餐厅"],
    cuisine: "蒙餐",
    province: "内蒙古",
    city: "呼和浩特",
    address: "内蒙古自治区呼和浩特市",
    lat: 40.8426,
    lng: 111.751,
    founded: "1988",
    description:
      "西贝莜面村创于1988年，源自内蒙古，以西北菜与莜面闻名。坚持「闭着眼睛点，道道都好吃」的承诺，是中式连锁餐饮的代表。",
    signatureDishes: ["莜面鱼鱼", "黄馍馍", "羊肉串", "功夫鱼"],
  },
  {
    id: "r-108",
    name: "外婆家",
    categories: ["知名餐厅"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区",
    lat: 30.2592,
    lng: 120.1303,
    founded: "1998",
    description:
      "外婆家创于1998年，源自杭州，以杭帮菜与高性价比闻名。茶香鸡、外婆红烧肉是其招牌，是中式连锁餐饮的代表，深受年轻食客喜爱。",
    signatureDishes: ["茶香鸡", "外婆红烧肉", "麻婆豆腐"],
  },
  {
    id: "r-109",
    name: "绿茶餐厅",
    categories: ["知名餐厅"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市西湖区",
    lat: 30.2592,
    lng: 120.1303,
    founded: "2008",
    description:
      "绿茶餐厅创于2008年，源自杭州，以新派杭帮菜与高性价比闻名。绿茶烤鸡、面包诱惑是其招牌，是中式连锁餐饮的代表，深受年轻食客喜爱。",
    signatureDishes: ["绿茶烤鸡", "面包诱惑", "火焰虾"],
  },
  {
    id: "r-110",
    name: "南京大牌档",
    categories: ["知名餐厅"],
    cuisine: "苏菜",
    province: "江苏",
    city: "南京",
    address: "南京市秦淮区夫子庙",
    lat: 32.0603,
    lng: 118.7969,
    founded: "1994",
    description:
      "南京大牌档创于1994年，源自南京，以金陵小吃与淮扬菜闻名。环境仿古，有评弹表演，是南京美食的代表，深受游客喜爱。",
    signatureDishes: ["盐水鸭", "鸭血粉丝汤", "糖芋苗", "天王烤鸭包"],
  },
  {
    id: "r-111",
    name: "局气",
    categories: ["知名餐厅"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区",
    lat: 39.9042,
    lng: 116.4074,
    founded: "2013",
    description:
      "局气创于2013年，源自北京，以新派京菜与胡同文化闻名。环境复古，融入老北京元素，是北京新派餐厅的代表，深受年轻食客喜爱。",
    signatureDishes: ["局气烤鸭", "蜂窝煤炒饭", "兔爷土豆泥"],
  },
  {
    id: "r-112",
    name: "胡大饭馆",
    categories: ["知名餐厅"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区东直门内大街233号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1999",
    description:
      "胡大饭馆创于1999年，源自北京，以麻辣小龙虾（簋街麻小）闻名。坐落于簋街，是北京夜宵的代表，排队数小时是常态，深受食客追捧。",
    signatureDishes: ["麻辣小龙虾", "蒜蓉小龙虾", "馋嘴蛙"],
  },
  {
    id: "r-113",
    name: "超级文和友",
    categories: ["知名餐厅"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市芙蓉区人民西路",
    lat: 28.2282,
    lng: 112.9388,
    founded: "2015",
    description:
      "超级文和友创于2015年，源自长沙，以怀旧市井文化与湘菜闻名。打造沉浸式市井场景，是长沙美食的代表，深受游客追捧，曾创下排队万桌的记录。",
    signatureDishes: ["口味虾", "臭豆腐", "猪油拌饭"],
  },
  {
    id: "r-114",
    name: "费大厨辣椒炒肉",
    categories: ["知名餐厅"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市芙蓉区",
    lat: 28.2282,
    lng: 112.9388,
    founded: "2017",
    description:
      "费大厨创于2017年，源自长沙，以辣椒炒肉闻名。选用湖南土猪肉与螺丝椒，是湘菜「小炒」的代表，深受食客喜爱，迅速扩张至全国。",
    signatureDishes: ["辣椒炒肉", "香辣鱿鱼", "皮蛋青椒擂茄子"],
  },
  {
    id: "r-115",
    name: "太二酸菜鱼",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "广东",
    city: "广州",
    address: "广州市天河区",
    lat: 23.1291,
    lng: 113.2644,
    founded: "2015",
    description:
      "太二酸菜鱼创于2015年，源自广州，以老坛子酸菜鱼闻名。选用鲈鱼与老坛酸菜，是新派川菜的代表，深受年轻食客喜爱，迅速扩张至全国。",
    signatureDishes: ["老坛子酸菜鱼", "芥末虾仁", "太二冰粉"],
  },
  {
    id: "r-116",
    name: "喜茶",
    categories: ["知名餐厅"],
    cuisine: "其他",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区",
    lat: 22.5431,
    lng: 114.0579,
    founded: "2012",
    description:
      "喜茶创于2012年，源自广东江门，以芝士奶盖茶闻名。是新茶饮的开创者，将传统茶饮与现代元素融合，深受年轻消费者喜爱，迅速扩张至全国。",
    signatureDishes: ["芝士莓莓", "多肉葡萄", "烤黑糖波波牛乳茶"],
  },
  {
    id: "r-117",
    name: "茶颜悦色",
    categories: ["知名餐厅"],
    cuisine: "其他",
    province: "湖南",
    city: "长沙",
    address: "长沙市天心区",
    lat: 28.2282,
    lng: 112.9388,
    founded: "2013",
    description:
      "茶颜悦色创于2013年，源自长沙，以中式茶饮闻名。坚持直营不加盟，以中国风为品牌特色，是长沙的城市名片，深受游客追捧。",
    signatureDishes: ["幽兰拿铁", "声声乌龙", "桂花弄"],
  },
  {
    id: "r-118",
    name: "奈雪的茶",
    categories: ["知名餐厅"],
    cuisine: "其他",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区",
    lat: 22.5431,
    lng: 114.0579,
    founded: "2015",
    description:
      "奈雪的茶创于2015年，源自深圳，以「茶饮+软欧包」双品类模式闻名。是新茶饮的代表品牌，将茶饮与烘焙结合，深受年轻消费者喜爱。",
    signatureDishes: ["霸气芝士草莓", "霸气橙子", "软欧包"],
  },
  {
    id: "r-119",
    name: "霸王茶姬",
    categories: ["知名餐厅"],
    cuisine: "其他",
    province: "云南",
    city: "昆明",
    address: "云南省昆明市",
    lat: 25.0389,
    lng: 102.7183,
    founded: "2017",
    description:
      "霸王茶姬创于2017年，源自云南，以原叶鲜奶茶闻名。以国风为品牌特色，坚持「以茶会友」，是新茶饮的代表品牌，迅速扩张至全国。",
    signatureDishes: ["伯牙绝弦", "寻香山茶", "桂馥兰香"],
  },
  {
    id: "r-120",
    name: "九毛九",
    categories: ["知名餐厅"],
    cuisine: "晋菜",
    province: "广东",
    city: "广州",
    address: "广州市天河区",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1995",
    description:
      "九毛九创于1995年，源自海南，后迁广州，以西北面食与晋菜闻名。是中式连锁餐饮的代表，旗下还拥有太二酸菜鱼等品牌。",
    signatureDishes: ["山西刀削面", "羊肉串", "大盘鸡"],
  },

  // ========== 百年老店与非遗传承（补充） ==========
  {
    id: "r-121",
    name: "柳泉居",
    categories: ["百年老店"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区新街口南大街12号",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1567",
    description:
      "柳泉居创于1567年（明隆庆元年），是北京最早的黄酒饭庄之一，明代即为京城名号。当年院内有古柳一株、泉水一口，故得名「柳泉居」。以黄酒与京味炒菜闻名，豆沙包是其招牌，被誉为「京都第一家」，是北京八大居之一，承载着四百余年的京味饮食记忆。",
    signatureDishes: ["豆沙包", "炒疙瘩", "京酱肉丝", "黄酒"],
  },
  {
    id: "r-122",
    name: "仿膳饭庄",
    categories: ["百年老店", "非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区景山西街北海公园内",
    lat: 39.9252,
    lng: 116.3898,
    founded: "1925",
    heritageItem: "仿膳（清廷御膳）制作技艺（国家级非遗）",
    description:
      "仿膳饭庄创于1925年，坐落于北海公园漪澜堂，由原清宫御膳房厨师赵仁斋等人创办，是中国最早的宫廷菜餐厅。仿膳（清廷御膳）制作技艺为国家级非物质文化遗产，以「满汉全席」与宫廷点心闻名，豌豆黄、芸豆卷、肉末烧饼曾是清宫御膳，是宫廷饮食文化的活化石。",
    signatureDishes: ["豌豆黄", "芸豆卷", "肉末烧饼", "满汉全席"],
  },
  {
    id: "r-123",
    name: "听鹂馆",
    categories: ["百年老店"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市海淀区颐和园内",
    lat: 39.9999,
    lng: 116.2755,
    founded: "1750",
    description:
      "听鹂馆创于1750年（清乾隆十五年），坐落于颐和园万寿山脚下，原为乾隆皇帝为其母祝寿所建，是清代皇家御膳场所。以宫廷菜与寿膳闻名，活鱼宴是其招牌，选用昆明湖鲜鱼，是宫廷饮食与园林文化结合的代表，被誉为「宫廷寿膳第一馆」。",
    signatureDishes: ["活鱼三吃", "寿桃", "宫廷抓炒", "佛手卷"],
  },
  {
    id: "r-124",
    name: "六必居",
    categories: ["百年老店", "非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区前门大街粮食店街3号",
    lat: 39.8995,
    lng: 116.3974,
    founded: "1530",
    heritageItem: "六必居酱菜制作技艺（国家级非遗）",
    description:
      "六必居创于1530年（明嘉靖九年），是北京最古老的老字号之一，相传匾额为明代宰相严嵩所书。酱菜制作技艺为国家级非物质文化遗产，以「黍稻必齐、曲蘖必实、湛之必洁、陶瓷必良、火候必得、水泉必香」六必为训，甜酱八宝瓜、酱甘露是其招牌，是京味酱菜的代表。",
    signatureDishes: ["甜酱八宝瓜", "酱甘露", "酱黄瓜", "甜面酱"],
  },
  {
    id: "r-125",
    name: "王致和",
    categories: ["百年老店", "非遗传承"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市海淀区阜石路",
    lat: 39.9042,
    lng: 116.4074,
    founded: "1669",
    heritageItem: "王致和腐乳酿造技艺（国家级非遗）",
    description:
      "王致和创于1669年（清康熙八年），由安徽举人王致和进京赶考途中意外创制腐乳而来，是中华老字号。腐乳酿造技艺为国家级非物质文化遗产，以「青方」（臭豆腐）与「红方」闻名，曾为宫廷御膳，是京味调味品的代表，承载着三百余年的酿造智慧。",
    signatureDishes: ["臭豆腐", "红腐乳", "青方", "酱豆腐"],
  },
  {
    id: "r-126",
    name: "月盛斋",
    categories: ["百年老店", "非遗传承"],
    cuisine: "清真菜",
    province: "北京",
    city: "北京",
    address: "北京市西城区前门大街1号",
    lat: 39.8995,
    lng: 116.3974,
    founded: "1775",
    heritageItem: "月盛斋酱烧牛羊肉制作技艺（国家级非遗）",
    description:
      "月盛斋创于1775年（清乾隆四十年），由回民马庆瑞创办，是北京最著名的清真老字号。酱烧牛羊肉制作技艺为国家级非物质文化遗产，选用内蒙古优质牛羊肉，以二十四味香料老汤酱制，曾为清宫御膳，是清真菜的代表，被誉为「京味酱肉第一家」。",
    signatureDishes: ["酱牛肉", "酱羊肉", "烧羊肉", "羊肉串"],
  },
  {
    id: "r-127",
    name: "正明斋",
    categories: ["百年老店"],
    cuisine: "京菜",
    province: "北京",
    city: "北京",
    address: "北京市东城区南芦草园1号",
    lat: 39.8995,
    lng: 116.3974,
    founded: "1864",
    description:
      "正明斋创于1864年（清同治三年），是北京老字号糕点铺，以「京八件」闻名于世。京八件是京式糕点的巅峰之作，包含枣花酥、福字饼、禄字饼、寿字饼、喜字饼等八种造型，曾是清宫与王府的必备礼品，是京式糕点的代表，承载着老北京的礼俗文化。",
    signatureDishes: ["京八件", "枣花酥", "萨其马", "自来红"],
  },
  {
    id: "r-128",
    name: "果仁张",
    categories: ["百年老店", "非遗传承"],
    cuisine: "津菜",
    province: "天津",
    city: "天津",
    address: "天津市和平区南市食品街",
    lat: 39.0842,
    lng: 117.2009,
    founded: "1830",
    heritageItem: "果仁张传统制作技艺（国家级非遗）",
    description:
      "果仁张创于1830年（清道光十年），由张明纯创办，是天津老字号。传统制作技艺为国家级非物质文化遗产，选用优质花生、核桃、杏仁等，以独特工艺炸制，琥珀花生、净香花生是其招牌，曾为清宫御膳，是天津小吃的代表，与狗不理、桂发祥、耳朵眼并称「天津四绝」。",
    signatureDishes: ["琥珀花生", "净香花生", "油炸核桃仁", "五香甜果仁"],
  },
  {
    id: "r-129",
    name: "白运章",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "河北",
    city: "保定",
    address: "保定市莲池区西大街",
    lat: 38.8743,
    lng: 115.4646,
    founded: "1919",
    description:
      "白运章创于1919年，由回民白运章创办，是保定老字号清真餐厅，以包子闻名。包子选用优质牛羊肉，半发面皮，馅大汁多，与天津狗不理、开封灌汤包并称「北方三大名包」，是清真菜的代表，承载着保定百年饮食记忆。",
    signatureDishes: ["白运章包子", "酱牛肉", "牛杂汤"],
  },
  {
    id: "r-130",
    name: "马家老鸡铺",
    categories: ["百年老店", "非遗传承"],
    cuisine: "清真菜",
    province: "河北",
    city: "保定",
    address: "保定市莲池区西大街",
    lat: 38.8743,
    lng: 115.4646,
    founded: "1796",
    heritageItem: "保定卤煮鸡制作技艺（省级非遗）",
    description:
      "马家老鸡铺创于1796年（清嘉庆元年），由回民马老耀创办，是保定最古老的老字号之一。卤煮鸡制作技艺为省级非物质文化遗产，选用优质活鸡，以陈年老汤与十八味香料卤煮，色泽红亮，肉烂骨酥，是清真菜的代表，被誉为「保定卤鸡第一家」。",
    signatureDishes: ["卤煮鸡", "卤鸡胗", "卤鸡爪"],
  },
  {
    id: "r-131",
    name: "双合成",
    categories: ["百年老店"],
    cuisine: "晋菜",
    province: "山西",
    city: "太原",
    address: "太原市杏花岭区柳巷",
    lat: 37.8706,
    lng: 112.5489,
    founded: "1838",
    description:
      "双合成创于1838年（清道光十八年），由河北人李大亮创办，是太原老字号糕点铺。以晋式糕点闻名，月饼、蛋糕、夹馅饼是其招牌，尤其以「双合成月饼」最为著名，是晋式糕点的代表，承载着太原百年糕点文化。",
    signatureDishes: ["晋式月饼", "夹馅饼", "槽子糕", "老式蛋糕"],
  },
  {
    id: "r-132",
    name: "李连贵熏肉大饼",
    categories: ["百年老店", "非遗传承"],
    cuisine: "东北菜",
    province: "吉林",
    city: "四平",
    address: "吉林省四平市梨树县",
    lat: 43.1664,
    lng: 124.3506,
    founded: "1908",
    heritageItem: "李连贵熏肉大饼制作技艺（省级非遗）",
    description:
      "李连贵熏肉大饼创于1908年（清光绪三十四年），由李连贵创办，是四平老字号。熏肉大饼制作技艺为省级非物质文化遗产，熏肉选用优质猪肉，以独特工艺熏制；大饼以煮肉老汤和面，层层酥脆，肉香饼香交融，是东北菜的代表，被誉为「关东第一饼」。",
    signatureDishes: ["熏肉大饼", "熏肉", "大饼", "鸡蛋汤"],
  },
  {
    id: "r-133",
    name: "老都一处",
    categories: [],
    cuisine: "东北菜",
    province: "黑龙江",
    city: "哈尔滨",
    address: "哈尔滨市道里区地段街",
    lat: 45.8038,
    lng: 126.5349,
    founded: "1929",
    description:
      "老都一处创于1929年，由河北人创办，是哈尔滨老字号饺子馆。以三鲜水饺闻名，选用海参、干贝、虾仁等海鲜入馅，皮薄馅大，是东北饺子的代表，承载着哈尔滨百年饮食记忆，是「冰城饺子第一家」。",
    signatureDishes: ["三鲜水饺", "熏肉", "酱牛肉"],
  },
  {
    id: "r-134",
    name: "老鼎丰",
    categories: ["百年老店", "非遗传承"],
    cuisine: "东北菜",
    province: "黑龙江",
    city: "哈尔滨",
    address: "哈尔滨市道外区靖宇街",
    lat: 45.8038,
    lng: 126.5349,
    founded: "1911",
    heritageItem: "老鼎丰糕点制作技艺（省级非遗）",
    description:
      "老鼎丰创于1911年（清宣统三年），是哈尔滨最古老的老字号糕点铺，相传店名为乾隆皇帝所赐。糕点制作技艺为省级非物质文化遗产，以月饼、槽子糕、酥饼闻名，川酥月饼是其招牌，是东北糕点的代表，承载着哈尔滨百年糕点文化。",
    signatureDishes: ["川酥月饼", "槽子糕", "酥饼", "萨其马"],
  },
  {
    id: "r-135",
    name: "邵万生",
    categories: ["百年老店", "非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区南京东路414号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1852",
    heritageItem: "邵万生糟醉制作技艺（省级非遗）",
    description:
      "邵万生创于1852年（清咸丰二年），是上海最古老的糟货老字号。糟醉制作技艺为省级非物质文化遗产，以黄酒酒糟腌制海鲜与禽肉，糟鸡、糟鱼、糟蛋是其招牌，是上海糟货的代表，承载着江南糟醉文化的精髓，被誉为「糟货大王」。",
    signatureDishes: ["糟鸡", "糟鱼", "糟蛋", "醉蟹"],
  },
  {
    id: "r-136",
    name: "三阳盛",
    categories: [],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区南京东路",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1928",
    description:
      "三阳盛创于1928年，是上海老字号糕点铺，以宁式糕点闻名。选用优质糯米、芝麻、猪油等，以传统工艺制作，苔菜月饼、麻饼是其招牌，是宁式糕点在上海的代表，承载着宁波糕点文化在上海的传承。",
    signatureDishes: ["苔菜月饼", "麻饼", "豆沙饼", "宁式糕点"],
  },
  {
    id: "r-137",
    name: "黄天源",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区观前街86号",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1822",
    heritageItem: "黄天源苏式糕点制作技艺（省级非遗）",
    description:
      "黄天源创于1822年（清道光二年），是苏州最古老的老字号糕点铺。苏式糕点制作技艺为省级非物质文化遗产，以糯米制品闻名，猪油糕、薄荷糕、定胜糕是其招牌，是苏式糕点的代表，承载着苏州百年糕点文化，被誉为「苏式糕点第一家」。",
    signatureDishes: ["猪油糕", "薄荷糕", "定胜糕", "重阳糕"],
  },
  {
    id: "r-138",
    name: "马祥兴",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "江苏",
    city: "南京",
    address: "南京市鼓楼区云南北路32号",
    lat: 32.0603,
    lng: 118.7969,
    founded: "1850",
    description:
      "马祥兴创于1850年（清道光三十年），由回民马思发创办，是南京最古老的清真老字号。以清真菜与京苏大菜闻名，美人肝、凤尾虾、蛋烧卖、松鼠鱼是其招牌「四大名菜」，是金陵清真菜的代表，承载着南京百年饮食记忆。",
    signatureDishes: ["美人肝", "凤尾虾", "蛋烧卖", "松鼠鱼"],
  },
  {
    id: "r-139",
    name: "耿福兴",
    categories: ["百年老店"],
    cuisine: "徽菜",
    province: "安徽",
    city: "芜湖",
    address: "芜湖市镜湖区凤凰美食街",
    lat: 31.3345,
    lng: 118.4326,
    founded: "1888",
    description:
      "耿福兴创于1888年（清光绪十四年），是芜湖老字号，以徽菜与小笼汤包闻名。小笼汤包皮薄馅大，汤汁丰盈；虾籽面选用长江虾籽，鲜香可口，是徽菜与沿江菜的代表，承载着芜湖百年饮食记忆，被誉为「芜湖小吃第一家」。",
    signatureDishes: ["小笼汤包", "虾籽面", "酥烧饼", "蟹黄汤包"],
  },
  {
    id: "r-140",
    name: "胡玉美",
    categories: ["百年老店", "非遗传承"],
    cuisine: "徽菜",
    province: "安徽",
    city: "安庆",
    address: "安庆市迎江区人民路",
    lat: 30.543,
    lng: 117.0631,
    founded: "1830",
    heritageItem: "胡玉美蚕豆辣酱制作技艺（省级非遗）",
    description:
      "胡玉美创于1830年（清道光十年），由胡兆祥创办，是安庆老字号。蚕豆辣酱制作技艺为省级非物质文化遗产，选用优质蚕豆与辣椒，以传统工艺酿制，色泽红亮，鲜辣可口，曾获巴拿马万国博览会金奖，是徽菜调味品的代表，被誉为「中华辣酱第一家」。",
    signatureDishes: ["蚕豆辣酱", "虾籽酱", "酱油", "腐乳"],
  },
  {
    id: "r-141",
    name: "同利肉燕",
    categories: ["百年老店", "非遗传承"],
    cuisine: "闽菜",
    province: "福建",
    city: "福州",
    address: "福州市鼓楼区澳门路",
    lat: 26.0745,
    lng: 119.2965,
    founded: "1876",
    heritageItem: "同利肉燕制作技艺（省级非遗）",
    description:
      "同利肉燕创于1876年（清光绪二年），是福州老字号。肉燕制作技艺为省级非物质文化遗产，肉燕皮以猪肉捶打而成，薄如白纸，是福州独有的小吃，与馄饨不同，皮亦是肉制，是闽菜小吃的代表，被誉为「福州肉燕第一家」。",
    signatureDishes: ["肉燕", "太平燕", "鱼丸", "肉燕皮"],
  },
  {
    id: "r-142",
    name: "聚春园",
    categories: ["百年老店", "非遗传承"],
    cuisine: "闽菜",
    province: "福建",
    city: "福州",
    address: "福州市鼓楼区东街2号",
    lat: 26.0745,
    lng: 119.2965,
    founded: "1865",
    heritageItem: "佛跳墙制作技艺（国家级非遗）",
    description:
      "聚春园创于1865年（清同治四年），是福州最古老的老字号餐厅。佛跳墙制作技艺为国家级非物质文化遗产，选用海参、鲍鱼、鱼翅、花胶等十八种食材，以酒坛文火煨制，是闽菜的巅峰之作，相传「坛启荤香飘四邻，佛闻弃禅跳墙来」，是闽菜的代表。",
    signatureDishes: ["佛跳墙", "荔枝肉", "醉排骨", "鸡汤汆海蚌"],
  },
  {
    id: "r-143",
    name: "陈添记",
    categories: [],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区宝华路十五甫三巷2号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1930",
    description:
      "陈添记创于1930年代，是广州西关老字号，以鱼皮闻名。鱼皮选用鲩鱼皮，以独特工艺去腥爽脆，拌以花生、香菜、葱姜，是广州小吃的代表，承载着西关百年饮食记忆，是「西关小吃三宝」之一，深受食客追捧。",
    signatureDishes: ["爽鱼皮", "艇仔粥", "豉油皇凤爪"],
  },
  {
    id: "r-144",
    name: "度小月",
    categories: ["百年老店"],
    cuisine: "台湾菜",
    province: "台湾",
    city: "台南",
    address: "台南市中西区中正路16号",
    lat: 22.9908,
    lng: 120.2133,
    founded: "1895",
    description:
      "度小月创于1895年（清光绪二十一年），由漳州渔夫洪芋头创办，是台南老字号。以担仔面闻名，渔汛间歇时以面摊「度小月」，故得名。担仔面以肉臊、虾汤、蒜泥、醋调味，是台菜小吃的代表，承载着台南百年饮食记忆，被誉为「担仔面第一家」。",
    signatureDishes: ["担仔面", "肉臊饭", "虱目鱼粥"],
  },
  {
    id: "r-145",
    name: "仁和饭店",
    categories: ["百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区华兴正街",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1860",
    description:
      "仁和饭店创于1860年代（清咸丰年间），是成都老字号川菜馆，以传统川菜与成都小吃闻名。坐落于华兴街，曾是成都文人雅士聚会之所，锅盔、凉粉、甜水面是其招牌，是成都老味道的代表，承载着成都百年市井饮食记忆。",
    signatureDishes: ["锅盔", "甜水面", "凉粉", "红油抄手"],
  },
  {
    id: "r-146",
    name: "陆稿荐",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区观前街8号",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1663",
    heritageItem: "陆稿荐酱肉制作技艺（省级非遗）",
    description:
      "陆稿荐创于1663年（清康熙二年），是苏州最古老的老字号酱肉铺。酱肉制作技艺为省级非物质文化遗产，相传仙人以草席换肉，故得名「稿荐」。酱肉选用优质猪肉，以陈年老汤与秘制香料酱制，色泽红亮，肥而不腻，是苏式卤菜的代表，被誉为「苏州酱肉第一家」。",
    signatureDishes: ["酱肉", "酱汁肉", "五香排骨", "酱鸭"],
  },
  {
    id: "r-147",
    name: "稻香村（苏州）",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区观前街72号",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1773",
    heritageItem: "苏式糕点制作技艺（省级非遗）",
    description:
      "苏州稻香村创于1773年（清乾隆三十八年），是中国最早的糕点老字号之一，与北京稻香村同源不同宗。苏式糕点制作技艺为省级非物质文化遗产，以「精、细、雅」著称，清水玫瑰月饼、椒盐黑麻月饼是其招牌，是苏式糕点的代表，承载着苏州百年糕点文化。",
    signatureDishes: ["清水玫瑰月饼", "椒盐黑麻月饼", "松子枣泥麻饼", "定胜糕"],
  },
  {
    id: "r-148",
    name: "老通城",
    categories: ["非遗传承"],
    cuisine: "鄂菜",
    province: "湖北",
    city: "武汉",
    address: "武汉市江岸区大智路",
    lat: 30.5928,
    lng: 114.3055,
    founded: "1931",
    heritageItem: "老通城豆皮制作技艺（省级非遗）",
    description:
      "老通城创于1931年，是武汉老字号，以三鲜豆皮闻名。豆皮制作技艺为省级非物质文化遗产，豆皮以绿豆、大米磨浆摊制，内裹糯米、肉丁、香菇、虾仁等馅料，外焦里嫩，是武汉小吃的代表，曾获毛泽东赞誉，被誉为「豆皮大王」。",
    signatureDishes: ["三鲜豆皮", "热干面", "糊米酒"],
  },
  {
    id: "r-149",
    name: "四季美",
    categories: ["百年老店"],
    cuisine: "鄂菜",
    province: "湖北",
    city: "武汉",
    address: "武汉市江汉区中山大道",
    lat: 30.5928,
    lng: 114.3055,
    founded: "1922",
    description:
      "四季美创于1922年，是武汉老字号，以汤包闻名。汤包选用优质面粉与鲜猪肉、蟹黄等馅料，皮薄汤多，是武汉小吃的代表，与老通城豆皮、蔡林记热干面并称「武汉小吃三宝」，承载着武汉百年饮食记忆，被誉为「汤包大王」。",
    signatureDishes: ["鲜肉汤包", "蟹黄汤包", "虾仁汤包"],
  },
  {
    id: "r-150",
    name: "大三元",
    categories: ["百年老店"],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市越秀区长堤大马路",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1919",
    description:
      "大三元创于1919年，是广州老字号酒家，以粤菜与「红烧大群翅」闻名。曾与南园、西园、北园并称「广州四大酒家」，是民国时期广州最负盛名的高档酒家之一，承载着广州百年饮食记忆，是粤菜老字号的代表。",
    signatureDishes: ["红烧大群翅", "太爷鸡", "生炒水鱼", "蟹黄灌汤饺"],
  },

  // ========== 新增：直辖市/省会/计划单列市重点补充 ==========
  {
    id: "r-151",
    name: "珮姐老火锅",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区较场口民生路四贤巷",
    lat: 29.563,
    lng: 106.5516,
    founded: "2013",
    description:
      "珮姐老火锅发源于重庆，以传承重庆老火锅精髓而闻名。坚持手工炒料，牛油醇厚，辣而不燥，是重庆火锅走向全国的标杆品牌之一，深受年轻食客追捧。",
    signatureDishes: ["麻辣牛肉", "贡菜丸子", "珮姐午餐肉", "鲜毛肚"],
  },
  {
    id: "r-152",
    name: "周师兄火锅",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区民生路9号阳光星座",
    lat: 29.5615,
    lng: 106.5531,
    founded: "2017",
    description:
      "周师兄重庆火锅以「大刀腰片」切入市场，将传统火锅食材做到极致。腰片薄如纸片，涮烫几秒即食，搭配秘制干碟，成为重庆火锅的新名片。",
    signatureDishes: ["大刀腰片", "精品鲜毛肚", "现切黄牛肉", "特色小郡肝"],
  },
  {
    id: "r-153",
    name: "杨记隆府",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区临江支路32号",
    lat: 29.5588,
    lng: 106.5702,
    founded: "2015",
    description:
      "杨记隆府以重庆江湖菜闻名，将巴渝民间宴席菜发扬光大。环境还原民国袍哥文化，菜品分量十足、麻辣鲜香，是体验重庆江湖菜的热门之选。",
    signatureDishes: ["民国霸王兔", "辣子鸡", "毛血旺", "老味道茶香鸭"],
  },
  {
    id: "r-154",
    name: "秦云老太婆摊摊面",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区八一路",
    lat: 29.5651,
    lng: 106.5766,
    founded: "2009",
    heritageItem: "重庆小面制作技艺",
    description:
      "秦云老太婆摊摊面以正宗重庆小面起家，2013年《舌尖上的中国2》让其名声大噪。面条劲道，佐料丰富，麻辣鲜香，是重庆小面非遗传承的代表。",
    signatureDishes: ["摊摊面", "豌豆杂酱面", "牛肉面", "肥肠面"],
  },
  {
    id: "r-155",
    name: "中和轩饭庄",
    categories: ["百年老店"],
    cuisine: "清真菜",
    province: "河北",
    city: "石家庄",
    address: "石家庄市新华区中山路180号",
    lat: 38.0428,
    lng: 114.5149,
    founded: "1920",
    description:
      "中和轩饭庄创建于1920年，是石家庄历史最悠久的清真饭店之一。以红烧牛尾、涮羊肉闻名，承载着石家庄几代人的饮食记忆，是燕赵大地清真菜的代表。",
    signatureDishes: ["红烧牛尾", "涮羊肉", "烤羊肉", "芫爆散丹"],
  },
  {
    id: "r-156",
    name: "红星包子",
    categories: ["知名餐厅"],
    cuisine: "冀菜",
    province: "河北",
    city: "石家庄",
    address: "石家庄市长安区中山路",
    lat: 38.0445,
    lng: 114.5182,
    founded: "1968",
    description:
      "红星包子是石家庄家喻户晓的老字号，以包子皮薄馅大、汤汁充盈著称。三鲜包子与包子宴是其招牌，陪伴了几代石家庄人的早餐记忆。",
    signatureDishes: ["三鲜包子", "猪肉大葱包", "包子宴", "红星熏肉"],
  },
  {
    id: "r-157",
    name: "格日勒阿妈奶茶馆",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "蒙餐",
    province: "内蒙古",
    city: "呼和浩特",
    address: "呼和浩特市新城区呼伦贝尔南路",
    lat: 40.8431,
    lng: 111.7568,
    founded: "1990",
    heritageItem: "蒙古族奶茶制作技艺",
    description:
      "格日勒阿妈奶茶馆以传统蒙古族奶茶与奶制品闻名，是呼和浩特蒙餐文化的代表。奶茶以砖茶、鲜奶、炒米熬制，醇香浓郁，搭配手扒肉与奶制品，体验草原风味。",
    signatureDishes: ["锅茶", "手扒肉", "奶酪饼", "烤羊排"],
  },
  {
    id: "r-158",
    name: "春发合饭庄",
    categories: [],
    cuisine: "东北菜",
    province: "吉林",
    city: "长春",
    address: "长春市南关区大马路",
    lat: 43.8862,
    lng: 125.3377,
    founded: "1935",
    description:
      "春发合饭庄创建于1935年，是长春老字号东北菜馆。以香酥鸡、锅包肉、雪衣豆沙闻名，菜品分量足、口味地道，是长春人宴请宾客的传统之选。",
    signatureDishes: ["香酥鸡", "锅包肉", "雪衣豆沙", "溜肉段"],
  },
  {
    id: "r-159",
    name: "真不同酒店",
    categories: ["百年老店", "非遗传承"],
    cuisine: "东北菜",
    province: "吉林",
    city: "长春",
    address: "长春市南关区永春路",
    lat: 43.8912,
    lng: 125.3301,
    founded: "1896",
    heritageItem: "真不同酱菜制作技艺",
    description:
      "真不同酒店始创于1896年，以酱菜、熏酱熟食与东北菜闻名。其酱菜、小肚、金丝卷等是长春传统风味代表，曾获「中华老字号」称号。",
    signatureDishes: ["真不同酱菜", "金丝卷", "小肚", "熏酱拼盘"],
  },
  {
    id: "r-160",
    name: "庐州烤鸭店",
    categories: ["百年老店", "知名餐厅"],
    cuisine: "徽菜",
    province: "安徽",
    city: "合肥",
    address: "合肥市庐阳区宿州路",
    lat: 31.8713,
    lng: 117.2855,
    founded: "1873",
    description:
      "庐州烤鸭店始创于清光绪年间，是合肥历史最悠久的餐饮老字号之一。以庐州烤鸭闻名，鸭皮酥脆、肉质细嫩，佐以薄饼、葱丝与甜面酱，是合肥宴席与市井饮食的共同记忆，也是徽菜中禽肴代表。",
    signatureDishes: ["庐州烤鸭", "鸭油烧饼", "鸭血粉丝"],
  },
  {
    id: "r-161",
    name: "刘鸿盛",
    categories: ["百年老店"],
    cuisine: "徽菜",
    province: "安徽",
    city: "合肥",
    address: "合肥市庐阳区宿州路",
    lat: 31.8713,
    lng: 117.2855,
    founded: "1873",
    description:
      "刘鸿盛始创于1873年，以冬菇鸡饺闻名江淮。饺皮薄韧、鸡汤清鲜，是合肥传统小吃的代表。历经百余年传承，承载着老合肥的早餐记忆与徽菜小吃文化。",
    signatureDishes: ["冬菇鸡饺", "鸡肉馄饨", "小笼包"],
  },
  {
    id: "r-162",
    name: "老三样",
    categories: ["知名餐厅"],
    cuisine: "赣菜",
    province: "江西",
    city: "南昌",
    address: "南昌市西湖区船山路",
    lat: 28.6797,
    lng: 115.881,
    founded: "2015",
    description:
      "老三样是南昌现象级赣菜品牌，以复古市井装修风格与重口味赣菜深受年轻人喜爱。蟹脚捞粉、烧鸡脚等菜品辣鲜浓郁，成为南昌城市美食新名片。",
    signatureDishes: ["蟹脚捞粉", "烧鸡脚", "麻辣藕片", "白糖糕"],
  },
  {
    id: "r-163",
    name: "龙老五汤店",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "赣菜",
    province: "江西",
    city: "南昌",
    address: "南昌市西湖区站前西路",
    lat: 28.6797,
    lng: 115.881,
    founded: "1990",
    heritageItem: "南昌瓦罐汤制作技艺",
    description:
      "龙老五汤店是南昌老字号汤店，以瓦罐汤与拌粉闻名。瓦罐以炭火慢煨，汤清味醇，搭配爽滑米粉，是南昌早餐文化与赣菜小吃的代表。",
    signatureDishes: ["瓦罐汤", "拌粉", "白糖糕"],
  },
  {
    id: "r-164",
    name: "草包包子铺",
    categories: [],
    cuisine: "鲁菜",
    province: "山东",
    city: "济南",
    address: "济南市市中区普利街",
    lat: 36.6512,
    lng: 117.0213,
    founded: "1937",
    description:
      "草包包子铺创于1937年，是济南老字号包子铺。包子皮薄馅大、汤汁充盈，以草包包子与荷香包子闻名，是济南传统名吃与鲁菜面点代表。",
    signatureDishes: ["草包包子", "荷香包子", "八宝粥"],
  },
  {
    id: "r-165",
    name: "燕喜堂饭庄",
    categories: [],
    cuisine: "鲁菜",
    province: "山东",
    city: "济南",
    address: "济南市历下区金菊巷",
    lat: 36.6565,
    lng: 117.0232,
    founded: "1932",
    description:
      "燕喜堂饭庄创于1932年，是济南老字号鲁菜馆。以传统济南菜闻名，糖醋鲤鱼外酥里嫩、九转大肠酸甜苦辣咸五味俱全，是鲁菜正宗代表。",
    signatureDishes: ["糖醋鲤鱼", "九转大肠", "奶汤蒲菜"],
  },
  {
    id: "r-166",
    name: "超意兴",
    categories: ["知名餐厅"],
    cuisine: "鲁菜",
    province: "山东",
    city: "济南",
    address: "济南市市中区经七路",
    lat: 36.6512,
    lng: 117.0213,
    founded: "1993",
    description:
      "超意兴是济南知名快餐连锁品牌，以把子肉快餐闻名。把子肉肥而不腻、酱香浓郁，搭配米饭与浇汁，是济南市民日常饮食的代表。",
    signatureDishes: ["把子肉", "四喜丸子", "浇汁米饭"],
  },
  {
    id: "r-167",
    name: "合记烩面",
    categories: ["非遗传承"],
    cuisine: "豫菜",
    province: "河南",
    city: "郑州",
    address: "郑州市金水区人民路",
    lat: 34.7659,
    lng: 113.6841,
    founded: "1953",
    heritageItem: "河南烩面制作技艺",
    description:
      "合记烩面创于1953年，是郑州老字号，以河南烩面闻名。汤浓面筋、肉烂味鲜，辅以海带、豆腐丝、粉条等，是豫菜面食代表与郑州城市名片。",
    signatureDishes: ["羊肉烩面", "三鲜烩面", "凉拌面筋"],
  },
  {
    id: "r-168",
    name: "萧记三鲜烩面",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "豫菜",
    province: "河南",
    city: "郑州",
    address: "郑州市金水区郑汴路",
    lat: 34.7659,
    lng: 113.6841,
    founded: "1986",
    heritageItem: "萧记三鲜烩面制作技艺",
    description:
      "萧记三鲜烩面是郑州知名烩面品牌，以三鲜烩面闻名。汤头以多种海味与老母鸡熬制，鲜味醇厚，是河南烩面的重要流派。",
    signatureDishes: ["三鲜烩面", "红烧黄河大鲤鱼", "高炉烧饼", "凉拌面筋"],
  },
  {
    id: "r-169",
    name: "舒记粉店",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "桂菜",
    province: "广西",
    city: "南宁",
    address: "南宁市青秀区七星路",
    lat: 22.817,
    lng: 108.3665,
    founded: "1985",
    heritageItem: "南宁老友粉制作技艺",
    description:
      "舒记粉店是南宁老友粉的知名代表，以酸辣鲜香的老友粉闻名。米粉爽滑，配以豆豉、酸笋、辣椒与鲜肉爆炒，是南宁早餐与夜宵文化的重要符号，也是桂菜小吃的经典。",
    signatureDishes: ["老友粉", "猪杂粉", "牛肉粉"],
  },
  {
    id: "r-170",
    name: "甘家界牌柠檬鸭",
    categories: ["知名餐厅"],
    cuisine: "桂菜",
    province: "广西",
    city: "南宁",
    address: "南宁市西乡塘区秀厢大道",
    lat: 22.8445,
    lng: 108.3062,
    founded: "1984",
    description:
      "甘家界牌柠檬鸭是南宁地标性餐饮品牌，以酸辣柠檬鸭闻名。选用本地土鸭与腌制柠檬同炒，酸辣开胃、肉质紧实，是广西桂菜的代表作之一。",
    signatureDishes: ["柠檬鸭", "鸭脚煲", "酸笋炒螺"],
  },
  {
    id: "r-171",
    name: "老凯里酸汤鱼",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "黔菜",
    province: "贵州",
    city: "贵阳",
    address: "贵阳市云岩区北京路",
    lat: 26.647,
    lng: 106.6302,
    founded: "1993",
    heritageItem: "凯里酸汤鱼制作技艺",
    description:
      "老凯里酸汤鱼是贵阳酸汤鱼名店，以苗家红酸汤煮鱼闻名。酸汤以米汤自然发酵，搭配本地野生毛辣果，酸辣醇厚，是黔菜与苗族饮食文化的代表。",
    signatureDishes: ["酸汤鱼", "酸汤牛肉", "苗家腊肉"],
  },
  {
    id: "r-172",
    name: "雷家豆腐圆子",
    categories: ["百年老店", "非遗传承"],
    cuisine: "黔菜",
    province: "贵州",
    city: "贵阳",
    address: "贵阳市南明区中华南路",
    lat: 26.5702,
    lng: 106.7135,
    founded: "1864",
    heritageItem: "雷家豆腐圆子制作技艺",
    description:
      "雷家豆腐圆子始创于清同治年间，是贵阳百年小吃老字号。豆腐圆子外酥里嫩，配以折耳根蘸水，是贵阳街头最具代表性的传统风味。",
    signatureDishes: ["豆腐圆子", "雷家粑粑", "玫瑰糖"],
  },
  {
    id: "r-173",
    name: "沿江海南鸡饭",
    categories: ["非遗传承"],
    cuisine: "琼菜",
    province: "海南",
    city: "海口",
    address: "海口市龙华区大同路",
    lat: 20.044,
    lng: 110.3288,
    founded: "1936",
    heritageItem: "海南鸡饭制作技艺",
    description:
      "沿江海南鸡饭是海口老字号，以正宗海南鸡饭闻名。选用文昌鸡白切，皮黄肉白、鲜嫩多汁，配以鸡油饭与蘸料，是海南饮食文化的名片。",
    signatureDishes: ["海南鸡饭", "文昌鸡", "鸡油饭"],
  },
  {
    id: "r-174",
    name: "琼菜王美食村",
    categories: ["知名餐厅"],
    cuisine: "琼菜",
    province: "海南",
    city: "海口",
    address: "海口市美兰区海府路",
    lat: 20.044,
    lng: 110.3615,
    founded: "1995",
    description:
      "琼菜王是海口知名琼菜餐厅，以传统海南菜与海鲜闻名。菜品讲究原汁原味，椰子鸡、和乐蟹、东山羊等海南四大名菜一应俱全，是体验琼菜的好去处。",
    signatureDishes: ["椰子鸡", "和乐蟹", "东山羊", "文昌鸡"],
  },
  {
    id: "r-175",
    name: "马忠食府",
    categories: ["知名餐厅"],
    cuisine: "西北菜",
    province: "青海",
    city: "西宁",
    address: "西宁市城中区莫家街",
    lat: 36.6171,
    lng: 101.7782,
    founded: "1998",
    description:
      "马忠食府位于西宁莫家街，是青海知名小吃集散地。以酸奶、酿皮、羊肠面、炕锅羊肉等青海特色风味闻名，是游客与本地人品尝高原美食的热门之选。",
    signatureDishes: ["青海酸奶", "酿皮", "羊肠面", "炕锅羊肉"],
  },
  {
    id: "r-176",
    name: "雅君羊羔肉",
    categories: ["知名餐厅"],
    cuisine: "西北菜",
    province: "青海",
    city: "西宁",
    address: "西宁市城西区西关大街",
    lat: 36.6171,
    lng: 101.7782,
    founded: "1990",
    description:
      "雅君羊羔肉是西宁老字号清真餐厅，以手抓羊羔肉与炕锅羊肉闻名。羊肉选自青藏高原绵羊，肉质细嫩、不膻不腻，是青海高原饮食的代表。",
    signatureDishes: ["手抓羊羔肉", "炕锅羊肉", "羊肉面片"],
  },
  {
    id: "r-177",
    name: "老毛手抓",
    categories: ["百年老店", "非遗传承"],
    cuisine: "西北菜",
    province: "宁夏",
    city: "银川",
    address: "银川市兴庆区解放东街",
    lat: 38.4872,
    lng: 106.2309,
    founded: "1888",
    heritageItem: "宁夏手抓羊肉制作技艺",
    description:
      "老毛手抓始创于清光绪年间，是银川百年清真老字号。以宁夏滩羊手抓肉闻名，肉质鲜嫩、肥而不腻，佐以蒜片与椒盐，是回族饮食文化的代表。",
    signatureDishes: ["手抓羊肉", "羊脖肉", "羊肉臊子面"],
  },
  {
    id: "r-178",
    name: "国强手抓",
    categories: ["知名餐厅"],
    cuisine: "西北菜",
    province: "宁夏",
    city: "银川",
    address: "银川市金凤区上海西路",
    lat: 38.4872,
    lng: 106.2309,
    founded: "1982",
    description:
      "国强手抓是银川知名清真餐厅，以宁夏滩羊手抓与回族特色菜闻名。选用盐池滩羊，肉质细嫩无膻，是银川宴请与日常饮食的重要选择。",
    signatureDishes: ["手抓羊肉", "碗蒸羊羔肉", "八宝茶"],
  },
  {
    id: "r-179",
    name: "马子禄牛肉面",
    categories: ["非遗传承"],
    cuisine: "西北菜",
    province: "甘肃",
    city: "兰州",
    address: "兰州市城关区大众巷",
    lat: 36.0611,
    lng: 103.8343,
    founded: "1954",
    heritageItem: "兰州牛肉面制作技艺",
    description:
      "马子禄牛肉面是兰州牛肉面老字号代表，以「一清二白三红四绿五黄」的标准著称。汤清味醇、面条筋道，是兰州城市名片与西北面食文化的象征。",
    signatureDishes: ["牛肉面", "牛腱子肉", "凉拌牛肉"],
  },
  {
    id: "r-180",
    name: "吾穆勒蓬灰牛肉面",
    categories: ["知名餐厅"],
    cuisine: "西北菜",
    province: "甘肃",
    city: "兰州",
    address: "兰州市七里河区碱沟沿",
    lat: 36.0611,
    lng: 103.8343,
    founded: "1995",
    description:
      "吾穆勒蓬灰牛肉面以传统蓬灰水和面闻名，面条更具韧劲。牛肉选材讲究，汤头醇厚，是兰州牛肉面重要流派之一，深受本地食客推崇。",
    signatureDishes: ["蓬灰牛肉面", "酱牛肉", "凉拌小菜"],
  },
  {
    id: "r-181",
    name: "米拉吉",
    categories: ["知名餐厅"],
    cuisine: "新疆菜",
    province: "新疆",
    city: "乌鲁木齐",
    address: "乌鲁木齐市天山区胜利路",
    lat: 43.8256,
    lng: 87.6168,
    founded: "2003",
    description:
      "米拉吉是乌鲁木齐知名维吾尔风情餐厅，以传统新疆菜与民族歌舞表演闻名。烤全羊、手抓饭、馕坑肉等菜品地道正宗，是体验新疆饮食文化的热门餐厅。",
    signatureDishes: ["烤全羊", "手抓饭", "馕坑肉", "酸奶"],
  },
  {
    id: "r-182",
    name: "四十九丸子汤",
    categories: ["知名餐厅"],
    cuisine: "新疆菜",
    province: "新疆",
    city: "乌鲁木齐",
    address: "乌鲁木齐市沙依巴克区黄河路",
    lat: 43.8256,
    lng: 87.6168,
    founded: "1998",
    description:
      "四十九丸子汤是新疆知名餐饮连锁品牌，以牛肉丸子汤与油塔子闻名。丸子汤汤鲜味美、丸子Q弹，搭配回族传统面点油塔子，是新疆人喜爱的快餐。",
    signatureDishes: ["丸子汤", "油塔子", "牛骨头"],
  },
  {
    id: "r-183",
    name: "娜玛瑟德餐厅",
    categories: ["知名餐厅"],
    cuisine: "藏餐",
    province: "西藏",
    city: "拉萨",
    address: "拉萨市城关区宇拓路",
    lat: 29.65,
    lng: 91.1,
    founded: "2005",
    description:
      "娜玛瑟德餐厅是拉萨知名藏餐厅，以传统藏餐与尼泊尔风味闻名。牦牛肉、酥油茶、糌粑、青稞酒等菜品体现高原特色，是游客体验拉萨饮食文化的首选。",
    signatureDishes: ["牦牛肉", "酥油茶", "糌粑", "尼泊尔套餐"],
  },
  {
    id: "r-184",
    name: "老拉萨粥坊",
    categories: ["知名餐厅"],
    cuisine: "藏餐",
    province: "西藏",
    city: "拉萨",
    address: "拉萨市城关区丹杰林路",
    lat: 29.65,
    lng: 91.1,
    founded: "2002",
    description:
      "老拉萨粥坊以融合藏汉风味的粥品与小吃闻名，是拉萨本土人气餐厅。青稞粥、牦牛肉粥等将高原食材与养生粥品结合，深受本地人与游客喜爱。",
    signatureDishes: ["青稞粥", "牦牛肉粥", "藏式包子"],
  },
  {
    id: "r-185",
    name: "安泰楼",
    categories: ["百年老店"],
    cuisine: "闽菜",
    province: "福建",
    city: "福州",
    address: "福州市鼓楼区吉庇路",
    lat: 26.0745,
    lng: 119.2965,
    founded: "1896",
    description:
      "安泰楼创于清光绪年间，是福州百年老字号酒楼。以闽菜与福州小吃闻名，荔枝肉、醉排骨、鱼丸、肉燕等招牌菜承载榕城记忆。",
    signatureDishes: ["荔枝肉", "醉排骨", "鱼丸", "肉燕"],
  },
  {
    id: "r-186",
    name: "永和鱼丸",
    categories: ["非遗传承"],
    cuisine: "闽菜",
    province: "福建",
    city: "福州",
    address: "福州市鼓楼区南后街",
    lat: 26.088,
    lng: 119.3,
    founded: "1934",
    heritageItem: "福州鱼丸制作技艺",
    description:
      "永和鱼丸是福州老字号鱼丸店，以手工包心鱼丸闻名。鱼丸皮薄馅大、汤汁鲜美，是福州三坊七巷的传统名吃，也是闽菜小吃的代表。",
    signatureDishes: ["包心鱼丸", "鳗鱼丸", "鲨鱼丸"],
  },
  {
    id: "r-187",
    name: "黄则和花生汤",
    categories: [],
    cuisine: "闽菜",
    province: "福建",
    city: "厦门",
    address: "厦门市思明区中山路",
    lat: 24.4798,
    lng: 118.0894,
    founded: "1945",
    description:
      "黄则和花生汤是厦门老字号甜品店，以花生汤闻名。花生煮得绵软香甜、入口即化，搭配厦门沙茶面、海蛎煎等小吃，是闽南甜品的代表。",
    signatureDishes: ["花生汤", "海蛎煎", "沙茶面"],
  },
  {
    id: "r-188",
    name: "南普陀素菜馆",
    categories: ["知名餐厅"],
    cuisine: "其他",
    province: "福建",
    city: "厦门",
    address: "厦门市思明区思明南路515号南普陀寺",
    lat: 24.439,
    lng: 118.1,
    founded: "1920",
    description:
      "南普陀素菜馆位于南普陀寺内，是厦门著名素食餐厅。以传统闽南素斋闻名，菜品清淡素雅、造型精巧，体现佛教饮食文化，香泥藏珍、半月沉江是其招牌。",
    signatureDishes: ["香泥藏珍", "半月沉江", "南普陀素饼"],
  },
  {
    id: "r-189",
    name: "好成财牛排馆",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "闽菜",
    province: "福建",
    city: "泉州",
    address: "泉州市鲤城区涂门街",
    lat: 24.906,
    lng: 118.5894,
    founded: "1910",
    heritageItem: "泉州牛排制作技艺",
    description:
      "好成财牛排馆是泉州百年老字号，以泉州牛排闻名。牛排以咖喱与中药材慢炖，肉质酥烂、药香浓郁，搭配咸饭与牛肉羹，是闽南泉州的传统风味。",
    signatureDishes: ["泉州牛排", "牛肉羹", "咸饭"],
  },
  {
    id: "r-190",
    name: "蔡林记",
    categories: ["非遗传承"],
    cuisine: "鄂菜",
    province: "湖北",
    city: "武汉",
    address: "武汉市江汉区中山大道",
    lat: 30.5928,
    lng: 114.3055,
    founded: "1928",
    heritageItem: "蔡林记热干面制作技艺",
    description:
      "蔡林记创于1928年，是武汉热干面的代表老字号。热干面制作技艺为省级非物质文化遗产，面条筋道，芝麻酱香浓，是武汉早餐文化的象征，被誉为「武汉小吃三宝」之一。",
    signatureDishes: ["热干面", "豆皮", "蛋酒"],
  },
  {
    id: "r-191",
    name: "五芳斋",
    categories: ["知名餐厅"],
    cuisine: "鄂菜",
    province: "湖北",
    city: "武汉",
    address: "武汉市江岸区中山大道",
    lat: 30.5928,
    lng: 114.3055,
    founded: "1946",
    description:
      "武汉五芳斋以汤圆与芝麻糕闻名，是武汉传统甜品老字号。汤圆皮薄馅大、香甜滑糯，承载着武汉人的节庆记忆与甜食文化。",
    signatureDishes: ["黑芝麻汤圆", "豆沙汤圆", "芝麻糕"],
  },
  {
    id: "r-192",
    name: "小桃园煨汤",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "鄂菜",
    province: "湖北",
    city: "武汉",
    address: "武汉市江岸区胜利街",
    lat: 30.5928,
    lng: 114.3055,
    founded: "1946",
    heritageItem: "武汉煨汤技艺",
    description:
      "小桃园煨汤是武汉老字号汤馆，以瓦罐煨汤闻名。鸡汤、排骨汤以文火慢煨，汤清味醇，是武汉人日常滋补与待客的佳品，也是鄂菜汤文化的代表。",
    signatureDishes: ["鸡汤", "莲藕排骨汤", "肚片汤"],
  },
  {
    id: "r-193",
    name: "双燕楼",
    categories: ["百年老店"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市天心区坡子街",
    lat: 28.2282,
    lng: 112.9388,
    founded: "1895",
    description:
      "双燕楼创于清光绪年间，是长沙老字号馄饨店。以馄饨皮薄馅嫩、汤鲜味美闻名，是长沙传统小吃与湘菜面点的代表，承载着老长沙的早餐记忆。",
    signatureDishes: ["鲜肉馄饨", "虾仁馄饨", "麻油猪血"],
  },
  {
    id: "r-194",
    name: "甘长顺",
    categories: ["百年老店"],
    cuisine: "湘菜",
    province: "湖南",
    city: "长沙",
    address: "长沙市开福区黄兴北路",
    lat: 28.2282,
    lng: 112.9388,
    founded: "1883",
    description:
      "甘长顺创于清光绪九年，是长沙百年面馆。以鸡蛋面与肉丝面闻名，面条筋道、汤头鲜美，是长沙面食文化的代表，与杨裕兴并称长沙面食老字号。",
    signatureDishes: ["肉丝面", "杂酱面", "牛肉面"],
  },
  {
    id: "r-195",
    name: "福照楼",
    categories: ["知名餐厅"],
    cuisine: "滇菜",
    province: "云南",
    city: "昆明",
    address: "昆明市五华区云瑞东路",
    lat: 25.0389,
    lng: 102.7183,
    founded: "1937",
    description:
      "福照楼是昆明老字号滇菜餐厅，以汽锅鸡闻名。汽锅鸡选用云南建水紫陶汽锅蒸制，汤清味鲜、鸡肉细嫩，是滇菜代表与昆明城市名片。",
    signatureDishes: ["汽锅鸡", "宜良烤鸭", "小炒肉"],
  },
  {
    id: "r-196",
    name: "桥香园过桥米线",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "滇菜",
    province: "云南",
    city: "昆明",
    address: "昆明市五华区人民中路",
    lat: 25.0389,
    lng: 102.7183,
    founded: "1988",
    heritageItem: "过桥米线制作技艺",
    description:
      "桥香园是云南知名过桥米线连锁品牌，以传统过桥米线闻名。汤热料鲜、米线滑爽，是云南米线文化走向全国的代表，门店遍布云南及全国。",
    signatureDishes: ["过桥米线", "小锅米线", "汽锅鸡"],
  },
  {
    id: "r-197",
    name: "建新园",
    categories: ["百年老店", "非遗传承"],
    cuisine: "滇菜",
    province: "云南",
    city: "昆明",
    address: "昆明市五华区宝善街",
    lat: 25.0389,
    lng: 102.7183,
    founded: "1906",
    heritageItem: "昆明过桥米线制作技艺",
    description:
      "建新园创于1906年，是昆明最悠久的过桥米线老字号。以传统过桥米线与滇味小吃闻名，汤头醇厚、配料丰富，是昆明早餐文化与滇菜小吃的代表。",
    signatureDishes: ["过桥米线", "脆旺米线", "卤面"],
  },
  {
    id: "r-198",
    name: "绿柳居",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "南京",
    address: "南京市秦淮区太平南路",
    lat: 32.0603,
    lng: 118.7969,
    founded: "1912",
    heritageItem: "绿柳居素食制作技艺",
    description:
      "绿柳居创于1912年，是南京百年清真素食老字号。以素菜荤做闻名，素烧鹅、素什锦等菜品形神兼备，是金陵素食与苏菜的代表。",
    signatureDishes: ["素烧鹅", "素什锦", "素菜包"],
  },
  {
    id: "r-199",
    name: "刘长兴",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "江苏",
    city: "南京",
    address: "南京市秦淮区逸仙桥",
    lat: 32.0603,
    lng: 118.7969,
    founded: "1901",
    description:
      "刘长兴创于清光绪年间，是南京老字号面馆。以薄皮小笼包与各色面条闻名，小笼包皮薄汁多、面条筋道，是南京传统小吃的代表。",
    signatureDishes: ["薄皮小笼包", "熏鱼面", "大肉面"],
  },
  {
    id: "r-200",
    name: "冶春茶社",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "扬州",
    address: "扬州市邗江区丰乐上街",
    lat: 32.3942,
    lng: 119.421,
    founded: "1877",
    heritageItem: "扬州早茶制作技艺",
    description:
      "冶春茶社源于清代扬州冶春园，是扬州早茶老字号。以蟹黄汤包、大煮干丝、魁龙珠茶闻名，体现了淮扬菜精致与闲雅的早茶文化。",
    signatureDishes: ["蟹黄汤包", "大煮干丝", "魁龙珠茶"],
  },
  {
    id: "r-201",
    name: "富春茶社",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "扬州",
    address: "扬州市古城区得胜桥巷",
    lat: 32.3942,
    lng: 119.421,
    founded: "1885",
    heritageItem: "富春茶点制作技艺",
    description:
      "富春茶社创于1885年，是扬州历史最悠久的茶社之一。以三丁包、千层油糕、翡翠烧卖闻名，是淮扬早茶与苏菜点心的代表，被誉为「淮扬第一楼」。",
    signatureDishes: ["三丁包", "千层油糕", "翡翠烧卖"],
  },
  {
    id: "r-202",
    name: "王兴记",
    categories: ["百年老店", "非遗传承"],
    cuisine: "苏菜",
    province: "江苏",
    city: "无锡",
    address: "无锡市梁溪区中山路",
    lat: 31.5684,
    lng: 120.2986,
    founded: "1913",
    heritageItem: "无锡小笼馒头制作技艺",
    description:
      "王兴记创于1913年，是无锡小笼包与馄饨老字号。小笼包皮薄馅大、汤汁鲜甜，是无锡甜口饮食文化的代表，也是苏菜小吃的经典。",
    signatureDishes: ["无锡小笼包", "鲜肉馄饨", "蟹粉小笼"],
  },
  {
    id: "r-203",
    name: "真正老陆稿荐",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "江苏",
    city: "无锡",
    address: "无锡市梁溪区崇安寺",
    lat: 31.5684,
    lng: 120.2986,
    founded: "1871",
    description:
      "真正老陆稿荐是无锡老字号酱肉铺，以酱排骨、酱肉闻名。酱排骨色泽酱红、甜咸适口，是无锡酱排骨的重要代表，承载着无锡百年卤味记忆。",
    signatureDishes: ["无锡酱排骨", "酱肉", "酱鸭"],
  },
  {
    id: "r-204",
    name: "得月楼",
    categories: ["百年老店"],
    cuisine: "苏菜",
    province: "江苏",
    city: "苏州",
    address: "苏州市姑苏区观前街太监弄",
    lat: 31.2989,
    lng: 120.5853,
    founded: "1563",
    description:
      "得月楼创于明嘉靖年间，是苏州最古老的酒楼之一。以苏帮菜闻名，松鼠桂鱼、响油鳝糊、清炒虾仁是其招牌，是苏菜与苏州宴席文化的代表。",
    signatureDishes: ["松鼠桂鱼", "响油鳝糊", "清炒虾仁"],
  },
  {
    id: "r-205",
    name: "状元馆",
    categories: ["百年老店"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区河坊街",
    lat: 30.2592,
    lng: 120.1303,
    founded: "1869",
    description:
      "状元馆创于清同治八年，是杭州老字号面馆。以虾爆鳝面、片儿川闻名，面条筋道、浇头鲜美，是杭帮面与杭州传统小吃的代表。",
    signatureDishes: ["虾爆鳝面", "片儿川", "蟹粉小笼"],
  },
  {
    id: "r-206",
    name: "羊汤饭店",
    categories: ["百年老店"],
    cuisine: "浙菜",
    province: "浙江",
    city: "杭州",
    address: "杭州市上城区中山中路",
    lat: 30.2592,
    lng: 120.1303,
    founded: "1881",
    description:
      "羊汤饭店是杭州老字号清真餐厅，以羊汤与羊肉烧卖闻名。羊汤乳白浓郁、羊肉鲜嫩，是杭州冬日暖食与清真饮食的代表。",
    signatureDishes: ["羊汤", "羊肉烧卖", "白切羊肉"],
  },
  {
    id: "r-207",
    name: "状元楼",
    categories: ["百年老店"],
    cuisine: "浙菜",
    province: "浙江",
    city: "宁波",
    address: "宁波市海曙区和义路",
    lat: 29.8683,
    lng: 121.544,
    founded: "1785",
    description:
      "状元楼创于清乾隆五十年，是宁波最古老的名酒楼。以冰糖甲鱼、雪菜大汤黄鱼闻名，是正宗甬菜与宁波宴席文化的代表。",
    signatureDishes: ["冰糖甲鱼", "雪菜大汤黄鱼", "红膏炝蟹"],
  },
  {
    id: "r-208",
    name: "缸鸭狗",
    categories: ["百年老店", "非遗传承"],
    cuisine: "浙菜",
    province: "浙江",
    city: "宁波",
    address: "宁波市海曙区天一广场",
    lat: 29.8683,
    lng: 121.544,
    founded: "1926",
    heritageItem: "宁波汤圆制作技艺",
    description:
      "缸鸭狗创于1926年，是宁波汤圆老字号。汤圆皮薄馅多、香甜滑糯，黑芝麻猪油馅最为经典，是宁波甜食与浙菜小吃的代表。",
    signatureDishes: ["宁波汤圆", "猪油汤圆", "苔菜米馒头"],
  },
  {
    id: "r-209",
    name: "咸亨酒店",
    categories: ["百年老店"],
    cuisine: "浙菜",
    province: "浙江",
    city: "绍兴",
    address: "绍兴市越城区鲁迅中路179号",
    lat: 30.001,
    lng: 120.5802,
    founded: "1894",
    description:
      "咸亨酒店因鲁迅《孔乙己》而闻名，是绍兴百年老字号酒馆。以绍兴黄酒与茴香豆、臭豆腐等下酒菜闻名，是绍兴饮食文化与人文记忆的象征。",
    signatureDishes: ["茴香豆", "臭豆腐", "太雕酒", "醉鸡"],
  },
  {
    id: "r-210",
    name: "同心楼",
    categories: ["百年老店"],
    cuisine: "浙菜",
    province: "浙江",
    city: "绍兴",
    address: "绍兴市越城区解放北路",
    lat: 30.001,
    lng: 120.5802,
    founded: "1910",
    description:
      "同心楼是绍兴老字号酒楼，以绍兴菜与黄酒闻名。霉干菜焖肉、绍三鲜、醉虾等菜品体现绍兴风味，是浙菜中绍兴菜的代表。",
    signatureDishes: ["霉干菜焖肉", "绍三鲜", "醉虾"],
  },
  {
    id: "r-211",
    name: "泮溪酒家",
    categories: [],
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    address: "广州市荔湾区龙津西路151号",
    lat: 23.1291,
    lng: 113.2644,
    founded: "1947",
    description:
      "泮溪酒家坐落于广州西关荔枝湾畔，是广州园林式酒家代表。以广式点心与粤菜闻名，环境幽雅，白兔饺、马蹄糕等点心精致可口，是粤式早茶文化的代表。",
    signatureDishes: ["白兔饺", "马蹄糕", "泮塘马蹄露"],
  },
  {
    id: "r-212",
    name: "丹桂轩",
    categories: ["知名餐厅"],
    cuisine: "粤菜",
    province: "广东",
    city: "深圳",
    address: "深圳市罗湖区桂园路",
    lat: 22.5431,
    lng: 114.0579,
    founded: "1995",
    description:
      "丹桂轩是深圳知名粤菜连锁品牌，以港式茶点与粤菜闻名。虾饺皇、烧鹅、乳鸽等菜品地道，是深圳高端粤菜与早茶文化的代表。",
    signatureDishes: ["虾饺皇", "烧鹅", "乳鸽", "蛋挞"],
  },
  {
    id: "r-213",
    name: "东海海鲜酒家",
    categories: ["知名餐厅"],
    cuisine: "粤菜",
    province: "广东",
    city: "深圳",
    address: "深圳市福田区深南大道",
    lat: 22.5431,
    lng: 114.0579,
    founded: "1994",
    description:
      "东海海鲜酒家是深圳老牌粤菜海鲜餐厅，以生猛海鲜与粤式烹饪闻名。龙虾、东星斑、象拔蚌等海鲜做法多样，是深圳海鲜酒家的代表。",
    signatureDishes: ["龙虾刺身", "东星斑", "象拔蚌"],
  },
  {
    id: "r-214",
    name: "金悦轩",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "广东",
    city: "珠海",
    address: "珠海市香洲区情侣南路",
    lat: 22.2707,
    lng: 113.5671,
    stars: 1,
    description:
      "金悦轩是珠海高端粤菜餐厅，以精致点心与海鲜闻名。环境优雅，可远眺海景，是珠海粤菜与早茶文化的代表，连续多年获米其林一星。",
    signatureDishes: ["金悦轩虾饺", "黑松露烧卖", "脆皮乳鸽"],
  },
  {
    id: "r-215",
    name: "建业酒家",
    categories: ["米其林一星"],
    cuisine: "潮菜",
    province: "广东",
    city: "汕头",
    address: "汕头市龙湖区凤凰山路",
    lat: 23.3535,
    lng: 116.731,
    stars: 1,
    description:
      "建业酒家是汕头老牌潮菜餐厅，以传统潮汕菜与精细烹饪闻名。卤鹅、响螺、鱼饭等潮味经典一应俱全，是潮汕美食文化的重要代表。",
    signatureDishes: ["卤鹅", "响螺片", "鱼饭", "反沙芋"],
  },
  {
    id: "r-216",
    name: "应记鲜虾云吞面",
    categories: ["知名餐厅"],
    cuisine: "粤菜",
    province: "广东",
    city: "佛山",
    address: "佛山市禅城区城门头路",
    lat: 23.0218,
    lng: 113.1064,
    founded: "1936",
    description:
      "应记鲜虾云吞面是佛山老字号，以鲜虾云吞面与竹升面闻名。云吞皮薄馅大、面条爽弹，是佛山传统面食与粤菜小吃的代表。",
    signatureDishes: ["鲜虾云吞面", "竹升面", "牛腩面"],
  },
  {
    id: "r-217",
    name: "韩包子",
    categories: ["百年老店"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区蜀都大道",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1914",
    description:
      "韩包子创于1914年，是成都老字号包子铺。包子皮薄馅嫩、汤汁充盈，以鲜肉包、芽菜包闻名，是成都传统小吃与川菜面点的代表。",
    signatureDishes: ["鲜肉包", "芽菜包", "韩包子"],
  },
  {
    id: "r-218",
    name: "担担面",
    categories: ["百年老店", "非遗传承"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区春熙路",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1841",
    heritageItem: "成都担担面制作技艺",
    description:
      "成都担担面历史悠久，由挑担走街串巷的小贩发展而来。面条细薄，卤汁酥香，咸鲜微辣，是成都最具代表性的传统小吃之一。",
    signatureDishes: ["担担面", "红油抄手", "甜水面"],
  },
  {
    id: "r-219",
    name: "眉州东坡",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区总府路",
    lat: 30.5728,
    lng: 104.0668,
    founded: "1996",
    description:
      "眉州东坡由川菜名厨王刚创立，以传统川菜连锁经营闻名。东坡肘子、宫保鸡丁等菜品标准化与品质并重，是川菜走向全国的代表品牌。",
    signatureDishes: ["东坡肘子", "宫保鸡丁", "麻婆豆腐"],
  },
  {
    id: "r-220",
    name: "德庄火锅@",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市南岸区南坪街道",
    lat: 29.563,
    lng: 106.5516,
    founded: "1999",
    description:
      "德庄火锅是重庆知名火锅连锁品牌，以「德庄三宝」（德庄毛肚、德庄汤、德庄酒）闻名。坚持重庆老火锅风味，门店遍布全国，是重庆火锅工业化的代表。",
    signatureDishes: ["德庄毛肚", "德庄汤", "麻辣牛肉"],
  },
  {
    id: "r-221",
    name: "小天鹅火锅",
    categories: ["知名餐厅"],
    cuisine: "川菜",
    province: "重庆",
    city: "重庆",
    address: "重庆市渝中区临江门",
    lat: 29.563,
    lng: 106.5516,
    founded: "1982",
    description:
      "小天鹅火锅创于1982年，是重庆火锅老字号与连锁品牌。以鸳鸯火锅闻名，将麻辣红汤与清汤结合，推动了重庆火锅在全国的普及。",
    signatureDishes: ["鸳鸯火锅", "毛肚", "鸭肠", "黄喉"],
  },
  {
    id: "r-222",
    name: "德发长",
    categories: ["非遗传承"],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市莲湖区钟鼓楼广场",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1936",
    heritageItem: "德发长饺子制作技艺",
    description:
      "德发长创于1936年，是西安老字号饺子馆。以花色饺子与百味饺子宴闻名，饺子造型精美、馅料丰富，是陕西饺子文化的代表。",
    signatureDishes: ["饺子宴", "三鲜饺子", "蒸饺"],
  },
  {
    id: "r-223",
    name: "春发生",
    categories: ["百年老店", "非遗传承"],
    cuisine: "西北菜",
    province: "陕西",
    city: "西安",
    address: "西安市碑林区南院门",
    lat: 34.3416,
    lng: 108.9398,
    founded: "1920",
    heritageItem: "春发生葫芦头泡馍制作技艺",
    description:
      "春发生创于1920年，是西安老字号，以葫芦头泡馍闻名。葫芦头即猪大肠，泡馍汤浓味醇，是西安传统风味与西北菜的代表。",
    signatureDishes: ["葫芦头泡馍", "梆梆肉", "辣子蒜羊血"],
  },
  {
    id: "r-224",
    name: "认一力",
    categories: ["非遗传承"],
    cuisine: "晋菜",
    province: "山西",
    city: "太原",
    address: "太原市迎泽区桥头街",
    lat: 37.8706,
    lng: 112.5489,
    founded: "1930",
    heritageItem: "认一力蒸饺制作技艺",
    description:
      "认一力创于1930年，是太原老字号清真餐厅，以蒸饺闻名。蒸饺皮薄馅大、汁多味鲜，是太原传统小吃与晋菜面点的代表。",
    signatureDishes: ["羊肉蒸饺", "牛肉蒸饺", "头脑"],
  },
  {
    id: "r-225",
    name: "林香斋",
    categories: ["百年老店"],
    cuisine: "晋菜",
    province: "山西",
    city: "太原",
    address: "太原市迎泽区解放路",
    lat: 37.8706,
    lng: 112.5489,
    founded: "1915",
    description:
      "林香斋创于1915年，是太原老字号晋菜馆。以过油肉、糖醋丸子、刀削面等山西传统菜闻名，是晋菜正宗代表与太原饮食记忆。",
    signatureDishes: ["过油肉", "糖醋丸子", "刀削面"],
  },
  {
    id: "r-226",
    name: "宝发园名菜馆",
    categories: ["百年老店"],
    cuisine: "东北菜",
    province: "辽宁",
    city: "沈阳",
    address: "沈阳市沈河区小什字街",
    lat: 41.8057,
    lng: 123.4315,
    founded: "1909",
    description:
      "宝发园名菜馆创于1909年，是沈阳老字号东北菜馆。以熘腰花、熘肝尖、煎丸子、熘黄菜「四绝菜」闻名，是东北菜与沈阳老味道的代表。",
    signatureDishes: ["熘腰花", "熘肝尖", "煎丸子", "熘黄菜"],
  },
  {
    id: "r-227",
    name: "鹿鸣春",
    categories: [],
    cuisine: "东北菜",
    province: "辽宁",
    city: "沈阳",
    address: "沈阳市和平区十一纬路",
    lat: 41.8057,
    lng: 123.4315,
    founded: "1929",
    description:
      "鹿鸣春创于1929年，是沈阳老字号辽菜馆。以满汉全席与传统辽菜闻名，菜品讲究火候与造型，是东北宴席菜与辽菜的代表。",
    signatureDishes: ["满汉全席", "红烧鹿筋", "锅包肉"],
  },
  {
    id: "r-228",
    name: "日丰园",
    categories: ["知名餐厅"],
    cuisine: "东北菜",
    province: "辽宁",
    city: "大连",
    address: "大连市甘井子区小平岛",
    lat: 38.914,
    lng: 121.6147,
    founded: "1992",
    description:
      "日丰园是大连知名海鲜饺子馆，以海肠水饺闻名。海肠水饺皮薄馅鲜、口感脆嫩，是大连海鲜与东北饺子的创新结合，被誉为「大连饺子天花板」。",
    signatureDishes: ["海肠水饺", "海胆水饺", "鲅鱼饺子"],
  },
  {
    id: "r-229",
    name: "牟传仁老菜馆",
    categories: ["知名餐厅"],
    cuisine: "东北菜",
    province: "辽宁",
    city: "大连",
    address: "大连市中山区天津街",
    lat: 38.914,
    lng: 121.6147,
    founded: "1993",
    description:
      "牟传仁老菜馆以传统大连老菜闻名，由辽菜大师牟传仁主理。菜品讲究咸鲜口与海鲜本味，是大连老菜与辽菜传承的代表。",
    signatureDishes: ["红烧海参", "清蒸多宝鱼", "锅包肉"],
  },
  {
    id: "r-230",
    name: "老厨家",
    categories: ["百年老店", "非遗传承"],
    cuisine: "东北菜",
    province: "黑龙江",
    city: "哈尔滨",
    address: "哈尔滨市道里区中央大街",
    lat: 45.8038,
    lng: 126.5349,
    founded: "1922",
    heritageItem: "老厨家锅包肉制作技艺",
    description:
      "老厨家创于1922年，是哈尔滨老字号东北菜馆。锅包肉制作技艺为省级非物质文化遗产，色泽金黄、外酥里嫩、酸甜可口，是东北菜的代表。",
    signatureDishes: ["锅包肉", "油炸冰棍", "杀猪菜"],
  },
  {
    id: "r-231",
    name: "华梅西餐厅",
    categories: ["百年老店"],
    cuisine: "其他",
    province: "黑龙江",
    city: "哈尔滨",
    address: "哈尔滨市道里区中央大街112号",
    lat: 45.8038,
    lng: 126.5349,
    founded: "1925",
    description:
      "华梅西餐厅创于1925年，是哈尔滨历史最悠久的西餐厅之一。以俄式西餐闻名，罐牛、红菜汤、软煎马哈鱼等菜品充满异域风情，是哈尔滨饮食文化的独特符号。",
    signatureDishes: ["罐牛", "红菜汤", "软煎马哈鱼", "面包"],
  },
  {
    id: "r-232",
    name: "燕风楼",
    categories: [],
    cuisine: "冀菜",
    province: "河北",
    city: "石家庄",
    address: "石家庄市长安区建设北大街",
    lat: 38.0445,
    lng: 114.5182,
    founded: "1956",
    description:
      "燕风楼是石家庄老字号冀菜馆，以烤鸭与河北地方菜闻名。烤鸭皮脆肉嫩，是石家庄宴请宾客与传统冀菜的代表。",
    signatureDishes: ["燕风楼烤鸭", "金毛狮子鱼", "锅贴"],
  },
  {
    id: "r-233",
    name: "直隶官府菜",
    categories: ["知名餐厅", "非遗传承"],
    cuisine: "冀菜",
    province: "河北",
    city: "保定",
    address: "保定市莲池区东风中路",
    lat: 38.8743,
    lng: 115.4646,
    founded: "2003",
    heritageItem: "直隶官府菜烹饪技艺",
    description:
      "直隶官府菜以明清直隶总督署官府菜为基础，是冀菜的重要流派。李鸿章烩菜、锅包肘子等菜品讲究排场与滋味，是保定宴席文化的代表。",
    signatureDishes: ["李鸿章烩菜", "锅包肘子", "鸡里蹦"],
  },
  {
    id: "r-234",
    name: "春和楼",
    categories: ["百年老店"],
    cuisine: "鲁菜",
    province: "山东",
    city: "青岛",
    address: "青岛市市南区中山路",
    lat: 36.0671,
    lng: 120.3826,
    founded: "1891",
    description:
      "春和楼创于1891年，是青岛最悠久的老字号酒楼。以香酥鸡、葱烧海参等鲁菜闻名，曾是康有为、梁启超等名人光顾之地，是青岛鲁菜代表。",
    signatureDishes: ["香酥鸡", "葱烧海参", "九转大肠"],
  },
  {
    id: "r-235",
    name: "船歌鱼水饺",
    categories: ["知名餐厅"],
    cuisine: "鲁菜",
    province: "山东",
    city: "青岛",
    address: "青岛市市南区闽江路",
    lat: 36.0671,
    lng: 120.3826,
    founded: "2009",
    description:
      "船歌鱼水饺是青岛知名海鲜水饺连锁品牌，以墨鱼、黄花鱼、鲅鱼水饺闻名。水饺以海鲜入馅，皮薄馅鲜，是将青岛海鲜与饺子文化结合的典范。",
    signatureDishes: ["墨鱼水饺", "黄花鱼水饺", "鲅鱼水饺"],
  },
  {
    id: "r-236",
    name: "蓬莱春",
    categories: [],
    cuisine: "鲁菜",
    province: "山东",
    city: "烟台",
    address: "烟台市芝罘区解放路",
    lat: 37.4638,
    lng: 121.448,
    founded: "1934",
    description:
      "蓬莱春创于1934年，是烟台老字号鲁菜馆。以海鲜与福山帮鲁菜闻名，扒原壳鲍鱼、葱烧海参等菜品体现胶东菜精华，是鲁菜胶东流派的代表。",
    signatureDishes: ["扒原壳鲍鱼", "葱烧海参", "糟熘鱼片"],
  },
  {
    id: "r-237",
    name: "张裕酒文化餐厅",
    categories: ["知名餐厅"],
    cuisine: "鲁菜",
    province: "山东",
    city: "烟台",
    address: "烟台市芝罘区大马路",
    lat: 37.4638,
    lng: 121.448,
    founded: "1992",
    description:
      "张裕酒文化餐厅依托张裕百年葡萄酒文化，以葡萄酒配餐与胶东菜闻名。环境典雅，菜品融合葡萄酒元素，是烟台葡萄酒文化与鲁菜结合的代表。",
    signatureDishes: ["葡萄酒焖牛腩", "胶东海鲜", "张裕品酒"],
  },
  {
    id: "r-238",
    name: "麦香村",
    categories: [],
    cuisine: "蒙餐",
    province: "内蒙古",
    city: "呼和浩特",
    address: "呼和浩特市玉泉区大南街",
    lat: 40.8426,
    lng: 111.751,
    founded: "1929",
    description:
      "麦香村创于1929年，是呼和浩特老字号，以稍麦（烧麦）与蒙餐闻名。稍麦皮薄如纸、羊肉馅鲜美，是呼和浩特早餐文化与蒙餐面点的代表。",
    signatureDishes: ["羊肉稍麦", "羊杂汤", "奶茶"],
  },
  {
    id: "r-239",
    name: "南翔馒头店",
    categories: ["百年老店", "非遗传承"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区豫园路85号",
    lat: 31.2304,
    lng: 121.4737,
    founded: "1900",
    heritageItem: "南翔小笼馒头制作技艺",
    description:
      "南翔馒头店创于1900年，以上海南翔小笼包闻名。小笼包皮薄馅大、汤汁鲜美，是海派小吃与本帮菜的代表，被誉为「上海小笼第一家」。",
    signatureDishes: ["南翔小笼包", "蟹粉小笼", "鲜肉小笼"],
  },
  {
    "id": "r-240",
    "name": "曲廊院",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "东城区东四十条25号",
    "lat": 39.9312,
    "lng": 116.4287,
    "stars": 1,
    "description": "曲廊院坐落于北京胡同深处，将传统四合院空间与现代料理美学相融合。主厨以北方时令食材为基底，运用发酵、烟熏等技法重构京味记忆，菜品兼具在地文化与国际化表达，是京城当代中餐的重要代表。",
    "signatureDishes": [
      "胡同烤鸭",
      "发酵柿子甜品",
      "京葱慢煮牛肉"
    ]
  },
  {
    "id": "r-241",
    "name": "兰斋",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "朝阳区工体北路4号院",
    "lat": 39.9335,
    "lng": 116.4482,
    "stars": 2,
    "description": "兰斋以当代素食料理闻名，2026年晋升米其林二星，主张“不时不食”，从山野菌菇、根茎瓜果到可食花草，皆在盘中呈现自然本味。主厨对植物食材的理解深厚，菜品层次丰富、清雅脱俗，为素食 fine dining 树立了新标杆。",
    "signatureDishes": [
      "松露菌菇汤",
      "百合莲子盏",
      "时令野菜拼盘"
    ]
  },
  {
    "id": "r-242",
    "name": "止观小馆",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "东北菜",
    "province": "北京",
    "city": "北京",
    "address": "东城区金鱼胡同12号",
    "lat": 39.9136,
    "lng": 116.4118,
    "stars": 1,
    "founded": "2015",
    "description": "止观小馆是北方海派官府菜代表，传承辽菜精髓，尤其擅烹渤海海鲜与山珍野味。馆内环境古朴典雅，服务精细考究，将关外粗犷与宫廷精致融为一体，是北京难得一见的东北风味米其林餐厅。",
    "signatureDishes": [
      "家焖渤海湾大鱼",
      "雪绵豆沙",
      "锅包肉"
    ]
  },
  {
    "id": "r-243",
    "name": "富临饭店",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "朝阳区建国门外大街1号",
    "lat": 39.9054,
    "lng": 116.4556,
    "stars": 1,
    "description": "富临饭店源自香港同名传奇粤菜品牌，以传统功夫菜与高端海鲜料理著称。北京分店延续港式排场与对食材的极致追求，鲍参翅肚处理得宜，茶点亦精致可口，是商务宴请与家庭聚餐的热门之选。",
    "signatureDishes": [
      "阿一鲍鱼",
      "脆皮炸子鸡",
      "瑶柱蛋白炒饭"
    ]
  },
  {
    "id": "r-244",
    "name": "泰安门",
    "categories": [
      "米其林三星",
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "静安区镇宁路465号",
    "lat": 31.2196,
    "lng": 121.4449,
    "stars": 3,
    "description": "泰安门由德国名厨 Stefan Stiller 主理，是上海首家米其林三星西餐厅。餐厅以现代欧陆料理为核心，每季更换菜单，善用本地食材与国际技法，出品精准、富有创意，长期占据上海高端餐饮榜首。",
    "signatureDishes": [
      "脆皮乳猪",
      "和牛塔塔",
      "烟熏鳗鱼"
    ]
  },
  {
    "id": "r-246",
    "name": "壹零贰小馆",
    "categories": [
      "米其林二星",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "上海",
    "city": "上海",
    "address": "黄浦区延安中路102号",
    "lat": 31.2235,
    "lng": 121.4695,
    "stars": 2,
    "description": "壹零贰小馆藏身老洋房深处，由香港厨师主理，专注传统顺德与广府菜。餐厅每日菜单依食材而定，一席只设数桌，刀工火候与调味皆见功力，尤其擅长海鲜与禽类的精细烹制，老饕纷至沓来。",
    "signatureDishes": [
      "顺德鱼生",
      "花雕鸡",
      "陈皮红豆沙"
    ]
  },
  {
    "id": "r-247",
    "name": "鹿园",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "上海",
    "city": "上海",
    "address": "静安区愚园路",
    "lat": 31.2254,
    "lng": 121.4462,
    "stars": 1,
    "description": "鹿园以淮扬菜为根基，兼收苏杭风味，讲究时令、刀工与火候。菜品清丽雅致，注重原汁原味，从拆烩鲢鱼头到清炖狮子头，皆能体现江南饮食的温婉细腻，是上海米其林榜单上的稳健之选。",
    "signatureDishes": [
      "清炖狮子头",
      "松鼠鳜鱼",
      "蟹粉豆腐"
    ]
  },
  {
    "id": "r-248",
    "name": "丽轩",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "天河区珠江新城兴安路3号",
    "lat": 23.1248,
    "lng": 113.3269,
    "stars": 1,
    "description": "丽轩位于广州丽思卡尔顿酒店内，以高端粤菜与广式茶点闻名。主厨团队对食材挑剔严苛，擅长炖汤、海鲜与烧味，环境雍容华贵，可俯瞰珠江新城天际线，是广州商务宴请的经典场所。",
    "signatureDishes": [
      "龙虾汤泡饭",
      "脆皮烧肉",
      "天鹅流沙酥"
    ]
  },
  {
    "id": "r-249",
    "name": "广御轩",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "天河区珠江东路",
    "lat": 23.1319,
    "lng": 113.3245,
    "stars": 1,
    "description": "广御轩秉持顺德菜“食不厌精”的传统，从食材采购到火候掌控皆一丝不苟。招牌拆鱼羹、捞起鱼生等顺德名物在这里被演绎得更为精致，餐厅氛围现代又不失岭南韵味，深受本地食客推崇。",
    "signatureDishes": [
      "顺德拆鱼羹",
      "捞起鱼生",
      "煎焗鱼嘴"
    ]
  },
  {
    "id": "r-250",
    "name": "蜀道",
    "categories": [
      "米其林二星",
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "锦江区红星路三段1号",
    "lat": 30.6574,
    "lng": 104.0815,
    "stars": 2,
    "description": "蜀道以传统川菜为魂，融入现代摆盘与高级食材，演绎“一菜一格、百菜百味”的川菜精髓。主厨对麻辣鲜香的平衡把握精准，无论家常豆瓣鱼还是高端山珍，皆能呈现层次分明的味觉享受。",
    "signatureDishes": [
      "开水白菜",
      "豆瓣鳗鱼",
      "怪味鸡片"
    ]
  },
  {
    "id": "r-251",
    "name": "廊桥",
    "categories": [
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "锦江区滨江东路",
    "lat": 30.6502,
    "lng": 104.0858,
    "stars": 1,
    "description": "廊桥由名厨江振诚主理，坐落于安顺廊桥之上，将川菜24味型以当代料理语言重新诠释。餐厅依傍锦江，夜景迷人，菜品兼具艺术感与在地风味，是成都高端餐饮与国际视野结合的典范。",
    "signatureDishes": [
      "鱼香龙虾",
      "麻婆豆腐",
      "宫保鹅肝"
    ]
  },
  {
    "id": "r-252",
    "name": "钱湖渔港",
    "categories": [
      "黑珍珠二钻",
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "宁波",
    "address": "鄞州区东钱湖旅游度假区",
    "lat": 29.7796,
    "lng": 121.6247,
    "diamonds": 2,
    "description": "钱湖渔港藏身宁波东钱湖畔，以钱湖四耳、河海鲜与东海渔获为特色。餐厅环境雅致，大幅落地窗外湖光山色尽收眼底，主厨擅长以清蒸、糟醉等宁波传统技法呈现食材本味，是浙东高端餐饮名片。",
    "signatureDishes": [
      "钱湖河虾",
      "雪菜大汤黄鱼",
      "红膏炝蟹"
    ]
  },
  {
    "id": "r-253",
    "name": "铭家点心",
    "categories": [
      "黑珍珠一钻",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "山东",
    "city": "青岛",
    "address": "市南区香港中路",
    "lat": 36.0647,
    "lng": 120.3896,
    "diamonds": 1,
    "description": "铭家点心将粤式茶点与青岛本地海鲜资源巧妙结合，点心现点现蒸、皮薄馅足，兼具南北风味。店内装潢时尚明亮，是青岛高端早茶与家庭聚餐的人气之选，也推动了港式茶点在山东的普及。",
    "signatureDishes": [
      "虾饺皇",
      "黑金流沙包",
      "青岛大虾饺"
    ]
  },
  {
    "id": "r-254",
    "name": "黑明餐厅",
    "categories": [
      "黑珍珠一钻",
      "知名餐厅"
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "思明区湖滨中路",
    "lat": 24.4704,
    "lng": 118.1024,
    "diamonds": 1,
    "description": "黑明餐厅由厦门名厨张淙明主理，以现代闽菜闻名。餐厅将闽南传统风味与西式烹饪理念相融合，沙茶、海鲜、姜母鸭等元素被重新演绎，既保留乡愁，又呈现国际化表达，是厦门新派闽菜代表。",
    "signatureDishes": [
      "低温慢煮牛肉",
      "厦门沙茶面",
      "紫菜饭"
    ]
  },
  {
    "id": "r-255",
    "name": "趣园茶社",
    "categories": [
      "黑珍珠二钻"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "扬州",
    "address": "邗江区长春路1号",
    "lat": 32.4026,
    "lng": 119.4203,
    "diamonds": 2,
    "founded": "1930",
    "description": "趣园茶社坐落于扬州迎宾馆内，依瘦西湖而建，是扬州早茶文化的标杆。茶社环境清幽，园林叠翠，点心与淮扬细点做工考究，一壶清茶配几碟小点，尽显扬州“早上皮包水”的慢生活美学。",
    "signatureDishes": [
      "翡翠烧卖",
      "蟹黄汤包",
      "千层油糕"
    ]
  },
  {
    "id": "r-256",
    "name": "韩上楼",
    "categories": [
      "黑珍珠一钻",
      "知名餐厅"
    ],
    "cuisine": "潮菜",
    "province": "广东",
    "city": "潮州",
    "address": "湘桥区凤凰洲公园旁",
    "lat": 23.6689,
    "lng": 116.6324,
    "diamonds": 1,
    "description": "韩上楼踞韩江之畔，是潮州高端潮菜与茶点的代表。餐厅将传统潮州功夫茶、卤水、海鲜与精细点心融为一体，厅堂富丽堂皇，可远眺韩文公祠，是来潮州体验正宗潮味的首选之地。",
    "signatureDishes": [
      "卤水鹅肝",
      "潮州蚝烙",
      "功夫茶配点心"
    ]
  },
  {
    "id": "r-257",
    "name": "遇外滩",
    "categories": [
      "米其林一星",
      "黑珍珠三钻"
    ],
    "cuisine": "闽菜",
    "province": "上海",
    "city": "上海",
    "address": "黄浦区中山东二路",
    "lat": 31.2332,
    "lng": 121.4896,
    "stars": 1,
    "diamonds": 3,
    "description": "遇外滩以上海外滩为背景，专注高端福建菜。2026年升至黑珍珠三钻，主厨将闽南、闽西、闽北的风土食材带入都市，红蟳、土笋冻、河田鸡等闽地风物经精心烹调后登上大雅之堂，是上海闽菜 fine dining 的领军者。",
    "signatureDishes": [
      "红蟳米糕",
      "土笋冻",
      "姜母鸭"
    ]
  },
  {
    "id": "r-258",
    "name": "西郊五号",
    "categories": [
      "黑珍珠三钻",
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "长宁区虹桥路",
    "lat": 31.2003,
    "lng": 121.3987,
    "diamonds": 3,
    "description": "西郊五号位于上海西郊宾馆旁，以高端海派本帮菜与江南融合菜著称。餐厅环境私密雅致，主厨团队实力雄厚，菜品既有老上海情怀，又不乏创新表达，是沪上政商名流的宴请重地。",
    "signatureDishes": [
      "红烧肉",
      "蟹粉狮子头",
      "响油鳝丝"
    ]
  },
  {
    "id": "r-259",
    "name": "金沙厅",
    "categories": [
      "黑珍珠三钻",
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "西湖区灵隐路5号",
    "lat": 30.2401,
    "lng": 120.1184,
    "diamonds": 3,
    "description": "金沙厅位于西子湖四季酒店内，是杭州高端杭帮菜的标杆。主厨王勇以江浙时令食材入馔，菜品清丽而不失厚重，从西湖醋鱼到东坡肉，皆以现代技法重塑传统名馔，常年一席难求。",
    "signatureDishes": [
      "金沙脆皮鸡",
      "龙井虾仁",
      "宋嫂鱼羹"
    ]
  },
  {
    "id": "r-264",
    "name": "Mono",
    "categories": [
      "亚洲五十佳",
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环安兰街",
    "lat": 22.2814,
    "lng": 114.1537,
    "ranking": 41,
    "rankingYear": 2024,
    "description": "Mono 是香港首家专注拉丁美洲现代料理的餐厅，由阿根廷主厨 Ricardo Chaneton 掌舵。餐厅将墨西哥、秘鲁、委内瑞拉等地的食材与风味引入亚洲，色彩斑斓、层次丰富，迅速跻身亚洲五十佳榜单。",
    "signatureDishes": [
      "秘鲁酸橘汁腌鱼",
      "墨西哥玉米粽",
      "南美炭烤牛排"
    ]
  },
  {
    "id": "r-265",
    "name": "小滨楼",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "渝中区民权路",
    "lat": 29.559,
    "lng": 106.549,
    "founded": "1928",
    "description": "小滨楼是重庆知名的老字号酒楼，始创于民国年间，以正宗渝派川菜与江湖菜闻名。餐厅见证了山城餐饮的百年变迁，菜品麻辣鲜香、分量豪爽，是重庆人宴请宾朋与回味老重庆风味的经典去处。",
    "signatureDishes": [
      "辣子鸡",
      "毛血旺",
      "山城小汤圆"
    ]
  },
  {
    "id": "r-266",
    "name": "九园包子",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "渝中区八一路",
    "lat": 29.5612,
    "lng": 106.5714,
    "founded": "1931",
    "heritageItem": "九园包子制作技艺",
    "description": "九园包子是重庆传统面点老字号，以皮薄馅大、汁多味鲜著称，其制作技艺已列入非物质文化遗产保护名录。从酱肉包到鲜肉包，每一口都承载着几代重庆人的早餐记忆与山城烟火气。",
    "signatureDishes": [
      "酱肉包子",
      "鲜肉包子",
      "龙眼包子"
    ]
  },
  {
    "id": "r-267",
    "name": "鼎丰真",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "东北菜",
    "province": "吉林",
    "city": "长春",
    "address": "南关区大马路",
    "lat": 43.8903,
    "lng": 125.3386,
    "founded": "1911",
    "heritageItem": "鼎丰真糕点制作技艺",
    "description": "鼎丰真是长春家喻户晓的百年糕点老字号，始创于清末民初，以中式糕点、月饼、元宵等传统食品闻名。其制作技艺被列入吉林省非物质文化遗产，是东北人逢年过节必备的甜蜜记忆。",
    "signatureDishes": [
      "五仁月饼",
      "元宵",
      "长白糕"
    ]
  },
  {
    "id": "r-268",
    "name": "淮上酒家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "徽菜",
    "province": "安徽",
    "city": "合肥",
    "address": "庐阳区淮河路步行街",
    "lat": 31.8661,
    "lng": 117.2846,
    "founded": "1932",
    "description": "淮上酒家是合肥历史悠久的老字号徽菜馆，以重油重色、讲究火功的徽菜传统著称。臭鳜鱼、胡适一品锅等经典徽菜在这里得到忠实传承，同时融入现代审美，是体验徽风皖韵的重要窗口。",
    "signatureDishes": [
      "臭鳜鱼",
      "胡适一品锅",
      "徽州毛豆腐"
    ]
  },
  {
    "id": "r-269",
    "name": "味福记",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "赣菜",
    "province": "江西",
    "city": "南昌",
    "address": "西湖区中山路",
    "lat": 28.6818,
    "lng": 115.8876,
    "description": "味福记是南昌知名的赣菜与小食集合店，以还原老南昌街头风味为己任。白糖糕、拌粉、瓦罐汤等市井小吃在这里被精心呈现，既保留童年味道，又提升了用餐环境，深受本地年轻人与游客喜爱。",
    "signatureDishes": [
      "白糖糕",
      "南昌拌粉",
      "瓦罐汤"
    ]
  },
  {
    "id": "r-270",
    "name": "会仙楼",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "济南",
    "address": "历下区芙蓉街",
    "lat": 36.6662,
    "lng": 117.0215,
    "founded": "1895",
    "description": "会仙楼是济南著名的鲁菜老字号，坐落于芙蓉街历史文化街区。餐厅以传统济南菜见长，爆炒腰花、九转大肠、糖醋鲤鱼等名菜火候老到、口味纯正，是感受泉城饮食文化的不二之选。",
    "signatureDishes": [
      "九转大肠",
      "爆炒腰花",
      "糖醋鲤鱼"
    ]
  },
  {
    "id": "r-271",
    "name": "程肠旺",
    "categories": [
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "黔菜",
    "province": "贵州",
    "city": "贵阳",
    "address": "云岩区中华北路",
    "lat": 26.585,
    "lng": 106.7134,
    "heritageItem": "肠旺面制作技艺",
    "description": "程肠旺是贵阳肠旺面的代表老字号，其肠旺面制作技艺已列入贵阳市非物质文化遗产。面条筋道、血旺嫩滑、肥肠软糯，红油香辣而不燥，是贵阳人开启一天的标准方式，也是游客必尝的地道风味。",
    "signatureDishes": [
      "肠旺面",
      "脆哨",
      "卤豆腐"
    ]
  },
  {
    "id": "r-272",
    "name": "尽善百年古院餐厅",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "滇菜",
    "province": "云南",
    "city": "大理",
    "address": "大理古城人民路",
    "lat": 25.6943,
    "lng": 100.1656,
    "founded": "1912",
    "description": "尽善百年古院餐厅位于大理古城一座百年白族老院内，四合五天井的格局与苍洱风光相映成趣。餐厅主打白族传统菜肴与云南山野食材，酸辣鱼、乳扇、野生菌等在地风物令人回味无穷。",
    "signatureDishes": [
      "大理酸辣鱼",
      "烤乳扇",
      "野生菌火锅"
    ]
  },
  {
    "id": "r-273",
    "name": "胡荣泉",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "潮菜",
    "province": "广东",
    "city": "潮州",
    "address": "湘桥区太平路",
    "lat": 23.6589,
    "lng": 116.6304,
    "founded": "1911",
    "heritageItem": "潮州鸭母捻制作技艺",
    "description": "胡荣泉是潮州百年老字号，以鸭母捻、春饼、腐乳饼等潮州传统小吃闻名。其鸭母捻制作技艺列入非物质文化遗产，甜汤软糯香甜、馅料丰富，是潮州古城里最具代表性的糖水铺之一。",
    "signatureDishes": [
      "鸭母捻",
      "春饼",
      "腐乳饼"
    ]
  },
  {
    "id": "r-274",
    "name": "东兴牛肉店",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "泉州",
    "address": "鲤城区庄府巷",
    "lat": 24.9079,
    "lng": 118.5894,
    "description": "东兴牛肉店是泉州老城里的牛肉料理名店，以牛排、牛肉羹、咸饭组成的经典套餐闻名。牛排炖得酥烂入味，牛肉羹滑嫩鲜香，搭配一碗咸饭，是泉州人最熟悉的古早味，也吸引着四方食客专程打卡。",
    "signatureDishes": [
      "红烧牛排",
      "牛肉羹",
      "咸饭"
    ]
  },
  {
    "id": "r-275",
    "name": "荣禄春",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "绍兴",
    "address": "越城区解放北路",
    "lat": 30.0023,
    "lng": 120.5809,
    "founded": "1909",
    "description": "荣禄春是绍兴历史悠久的餐饮老字号，以绍兴菜与黄酒宴著称。餐厅毗邻鲁迅故里，环境古色古香，霉干菜焖肉、醉鸡、绍三鲜等名菜在这里得到地道呈现，是品味江南水乡与黄酒文化的好去处。",
    "signatureDishes": [
      "霉干菜焖肉",
      "醉鸡",
      "绍三鲜"
    ]
  },
  {
    "id": "r-276",
    "name": "喜鼎海胆水饺",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "东北菜",
    "province": "辽宁",
    "city": "大连",
    "address": "中山区人民路",
    "lat": 38.9215,
    "lng": 121.6457,
    "description": "喜鼎海胆水饺以一只海胆水饺走红全国，将大连海域的鲜美浓缩于薄皮之中。餐厅坚持选用当季海胆与优质面粉，搭配东北家常菜与海鲜料理，既保留了东北人的豪爽，又展现了海洋城市的精致一面。",
    "signatureDishes": [
      "海胆水饺",
      "虾汤泡饭",
      "干炸舌头鱼"
    ]
  },
  {
    "id": "r-277",
    "name": "万和春排骨米饭",
    "categories": [
      "知名餐厅",
      "非遗传承"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "青岛",
    "address": "市南区台西一路",
    "lat": 36.0659,
    "lng": 120.3138,
    "heritageItem": "万和春排骨米饭制作技艺",
    "description": "万和春是青岛家喻户晓的排骨米饭老字号，其制作技艺已列入非物质文化遗产。选用优质肋排，配以秘制酱料慢炖至骨肉酥烂，汤汁浓郁，米饭喷香，是青岛人最日常的 comfort food 与城市味觉符号。",
    "signatureDishes": [
      "招牌排骨米饭",
      "卤蛋",
      "酸菜炖排骨"
    ]
  },
  {
    "id": "r-278",
    "name": "陈记汤饭",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "琼菜",
    "province": "海南",
    "city": "海口",
    "address": "龙华区水巷口街",
    "lat": 20.0451,
    "lng": 110.3435,
    "description": "陈记汤饭是海口骑楼老街里的本地名店，以辣汤饭、牛腩饭、海南粉等海南市井美食闻名。一碗热辣鲜香的猪杂汤配白饭与煎蛋，是海口人早餐与夜宵的心头好，也承载着南洋归侨的饮食记忆。",
    "signatureDishes": [
      "辣汤饭",
      "牛腩饭",
      "海南粉"
    ]
  },
  {
    "id": "gen-r-2025-1",
    "name": "黑天鹅",
    "categories": [
      "米其林二星",
      "黑珍珠一钻"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市顺义区天竺空港开发区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "由好利来创始人之子创立的现代法餐厅，2026年晋升米其林二星并新上榜黑珍珠一钻，以天鹅为主题，菜品精致，藏酒丰富。",
    "signatureDishes": [
      "野生多宝鱼",
      "低温烤鸭",
      "天鹅造型甜品"
    ],
    "stars": 2,
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-2",
    "name": "The Georg",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区东不压桥胡同45号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "毗邻故宫的北欧简约风格餐厅，晚市提供季节性套餐，融合腌制及烟熏技法。",
    "signatureDishes": [
      "开放式三明治",
      "烟熏三文鱼",
      "季节海鲜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-3",
    "name": "龙庭",
    "categories": [
      "米其林一星",
      "黑珍珠一钻"
    ],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区建国门外大街1号国贸商城",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "装修受《红楼梦》启发的粤菜餐厅，2026年新上榜黑珍珠一钻，主厨谭仕业主理湛江风味。",
    "signatureDishes": [
      "湛江式炒龙虾",
      "安铺炖鳘肚",
      "流罗酥"
    ],
    "stars": 1,
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-4",
    "name": "鲁上鲁",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区新源南路8号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "以孔府菜和胶东海产为特色的鲁菜餐厅，精于海参菜式。",
    "signatureDishes": [
      "烤鸭鱼子酱山东煎饼",
      "葱烧海参",
      "孔府菜"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-5",
    "name": "京季荣派官府菜",
    "categories": [
      "米其林二星",
      "黑珍珠三钻"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区新源南路8号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "新荣记旗下高端官府菜品牌，2026年米其林二星、黑珍珠三钻（由二钻升至三钻），坚持传统官府菜烹调技艺与极致食材，是北京官府菜的标杆。",
    "signatureDishes": [
      "家烧黄鱼",
      "沙蒜豆面",
      "官府菜"
    ],
    "stars": 2,
    "diamonds": 3
  },
  {
    "id": "gen-r-2025-6",
    "name": "屋里厢",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "本帮菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区工人体育场北路",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "由上海团队主理的本帮菜餐厅，还原浓油赤酱的海派风味。",
    "signatureDishes": [
      "红烧肉",
      "响油鳝丝",
      "本帮熏鱼"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-7",
    "name": "潮上潮（朝阳）",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "潮菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区朝阳门外大街",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "北京顶级潮州菜餐厅，以海鲜和功夫菜见长。",
    "signatureDishes": [
      "松茸鸽吞燕",
      "隆江猪手",
      "潮州冻蟹"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-8",
    "name": "采逸轩",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区亮马桥路",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "四季酒店内的粤菜餐厅，环境典雅，点心与海鲜出品稳定。",
    "signatureDishes": [
      "虾饺皇",
      "烧鹅",
      "燕窝炖品"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-9",
    "name": "富春居",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市王府井大街1号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "位于王府中環的精致粤菜餐厅，注重传统与创新结合。",
    "signatureDishes": [
      "脆皮鸡",
      "点心",
      "海鲜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-10",
    "name": "芙蓉无双",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "湘菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区新源南路8号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "新荣记旗下高端湘菜品牌，以精致湖南菜著称。",
    "signatureDishes": [
      "剁椒鱼头",
      "小炒黄牛肉",
      "毛氏红烧肉"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-11",
    "name": "美·大董",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "大董旗下时尚中国菜餐厅，以烤鸭和创意中餐闻名。",
    "signatureDishes": [
      "大董烤鸭",
      "葱烧海参",
      "意境菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-12",
    "name": "淮扬府",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "苏菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区地安门西大街",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "主打淮扬菜的北京星级餐厅，讲究刀工与火候。",
    "signatureDishes": [
      "狮子头",
      "大煮干丝",
      "松鼠鳜鱼"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-13",
    "name": "Jing",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区建国门外大街1号",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "王府半岛酒店内的现代法餐厅，融合亚洲食材。",
    "signatureDishes": [
      "鹅肝",
      "龙虾",
      "法式甜点"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-14",
    "name": "玲珑",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "年轻主厨主理的创新中国菜餐厅，菜品精致。",
    "signatureDishes": [
      "创意前菜",
      "分子料理",
      "甜品"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-15",
    "name": "鲁采",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区安定路",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "主打胶东海鲜与现代鲁菜的星级餐厅。",
    "signatureDishes": [
      "葱烧海参",
      "胶东海鲜",
      "鲁菜经典"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-16",
    "name": "京艳·翰林书院",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区箭厂胡同",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "位于四合院内的京菜餐厅，环境古朴，菜品讲究。",
    "signatureDishes": [
      "北京烤鸭",
      "京味小菜",
      "四合院宴席"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-17",
    "name": "茉",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "以现代手法演绎中国地方风味的餐厅。",
    "signatureDishes": [
      "创意热菜",
      "精致点心",
      "季节菜单"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-18",
    "name": "拾久（东三环中路）",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区东三环中路",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "新派京菜餐厅，以烤鸭和创意北京菜著称。",
    "signatureDishes": [
      "烤鸭",
      "脆皮猪手",
      "京菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-19",
    "name": "晟永兴（朝阳）",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "以鱼子酱烤鸭闻名的京菜餐厅。",
    "signatureDishes": [
      "鱼子酱烤鸭",
      "芥末鸭掌",
      "京菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-20",
    "name": "Narisawa",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "日本名厨Narisawa监督的创新料理餐厅，森林面包为招牌。",
    "signatureDishes": [
      "森林面包",
      "时令海鲜",
      "创意料理"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-21",
    "name": "周舍（闵行）",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市闵行区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "传承沪菜技法并融合各地风味的餐厅。",
    "signatureDishes": [
      "青麻老卤鸽",
      "韭芽滑鱼丝",
      "本帮菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-22",
    "name": "景煊",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "由广东厨师团队主理的传统粤菜餐厅，限量供应手工菜。",
    "signatureDishes": [
      "蟛蜞膏带子饺",
      "鸡子戈渣",
      "潮汕美馔"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-23",
    "name": "屋有鲜",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "上海首家获米其林一星的小笼包专门店，以蟹味汤包著称。",
    "signatureDishes": [
      "纯蟹汤包",
      "蟹粉汤包",
      "蟹黄汤包"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-24",
    "name": "御宝轩（广州）",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "广州高端粤菜餐厅，点心与海鲜出品精湛。",
    "signatureDishes": [
      "鲍鱼酥",
      "龙虾饺",
      "烧鹅"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-25",
    "name": "江",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "广州文华东方酒店内的米其林二星粤菜餐厅。",
    "signatureDishes": [
      "创意虾饺",
      "烧味",
      "炖汤"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-26",
    "name": "泰安门（广州）",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "其他",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "由德国主厨Stefan Stiller主理的现代料理餐厅。",
    "signatureDishes": [
      " tasting menu",
      "创意前菜",
      "现代欧陆"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-27",
    "name": "兰亭永",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "川菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市越秀区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "以可持续餐饮为理念的精致川菜餐厅。",
    "signatureDishes": [
      "开水白菜",
      "麻婆豆腐",
      "季节素菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-28",
    "name": "Chōwa",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "香港年轻主厨谭华显主理的创新风格餐厅。",
    "signatureDishes": [
      "创意海鲜",
      "融合料理",
      "季节菜单"
    ],
    "stars": 1
  },

  {
    "id": "gen-r-2025-30",
    "name": "福满楼",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "闽菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市武侯区交子大道33号",
    "lat": 30.5728,
    "lng": 104.0668,
    "description": "成都首家以闽菜摘星的餐厅，每日福建空运海产。",
    "signatureDishes": [
      "泉州脆皮五香卷",
      "福建包心荔枝肉",
      "泉州海鲜卤面"
    ],
    "stars": 1
  },

  {
    "id": "gen-r-2025-32",
    "name": "偲厨",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "四川",
    "city": "成都",
    "address": "成都市武侯区",
    "lat": 30.5728,
    "lng": 104.0668,
    "description": "成都精致西餐代表，以法式技法演绎本土食材。",
    "signatureDishes": [
      "创意前菜",
      "主厨套餐",
      "法式甜点"
    ],
    "stars": 1
  },

  {
    "id": "gen-r-2025-34",
    "name": "THE HALL 会馆",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "四川",
    "city": "成都",
    "address": "成都市锦江区广东会馆",
    "lat": 30.5728,
    "lng": 104.0668,
    "description": "路易威登在中国的首家餐厅，意籍主厨融合法餐与川味。",
    "signatureDishes": [
      "Ode to the Mushroom",
      "四川风味鸡尾酒",
      "法式料理"
    ],
    "stars": 1
  },

  {
    "id": "gen-r-2025-36",
    "name": "如院",
    "categories": [
      "米其林二星",
      "黑珍珠二钻"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "杭州首家米其林二星餐厅，2026年升至黑珍珠二钻，主理人傅月良专注传统杭帮菜。",
    "signatureDishes": [
      "龙井虾仁",
      "西湖醋鱼",
      "东坡肉"
    ],
    "stars": 2,
    "diamonds": 2
  },
  {
    "id": "gen-r-2025-37",
    "name": "Ambré Ciel珀",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "杭州高端法餐厅，以精致料理和酒单著称。",
    "signatureDishes": [
      "法餐套餐",
      "鹅肝",
      "海鲜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-38",
    "name": "安和隐世·SENSE",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "杭州创新中国菜餐厅，注重食材本味。",
    "signatureDishes": [
      "创意中餐",
      "季节菜单",
      "本土食材"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-39",
    "name": "兰轩村庄食坊",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区法云弄",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "位于安缦法云的中式餐厅，主打杭州乡村风味。",
    "signatureDishes": [
      "杭州土菜",
      "时令蔬食",
      "本地河鲜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-40",
    "name": "杭州中心四季酒店中餐厅·颂",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市拱墅区杭州中心四季酒店",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "杭州中心四季酒店内的粤菜餐厅，点心与海鲜精致。",
    "signatureDishes": [
      "点心",
      "烧味",
      "海鲜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-41",
    "name": "暗香",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市上城区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "杭州新兴杭帮菜餐厅，以传统与创新结合见长。",
    "signatureDishes": [
      "东坡肉",
      "叫花鸡",
      "杭帮菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-42",
    "name": "溪畔十九·L'éclat 19",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "位于西湖畔的法式餐厅，环境优雅。",
    "signatureDishes": [
      "法式套餐",
      "牛排",
      "甜点"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-43",
    "name": "Amber",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环皇后大道中15号置地文华东方酒店7楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025年由二星晋升三星，荷兰主厨Richard Ekkebus主理，现代轻盈法餐。",
    "signatureDishes": [
      "赤海胆",
      "平原鸡",
      "乳鸽"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-44",
    "name": "Caprice",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环金融街8号四季酒店6楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港四季酒店内的经典法式餐厅，连续多年保持三星。",
    "signatureDishes": [
      "法式海鲜",
      "鹅肝",
      "甜点"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-45",
    "name": "志魂",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环置地文华东方酒店",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港顶级寿司餐厅，由日本寿司大师主理。",
    "signatureDishes": [
      "握寿司套餐",
      "金枪鱼",
      "海胆"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-46",
    "name": "旅（Ta Vie）",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环荷李活道10号",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "以日本和法国技法融合的创新料理餐厅。",
    "signatureDishes": [
      "季节套餐",
      "和牛",
      "创意前菜"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-47",
    "name": "譽瓏軒",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "粤菜",
    "province": "澳门",
    "city": "澳门",
    "address": "澳门路氹城新濠天地新濠大道",
    "lat": 22.1987,
    "lng": 113.5439,
    "description": "澳门顶级粤菜餐厅，以精致点心和山珍海味闻名。",
    "signatureDishes": [
      "黑豚肉叉烧",
      "燕窝",
      "鲍鱼"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-48",
    "name": "天巢法國餐廳",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "澳门",
    "city": "澳门",
    "address": "澳门葡京路2-4号新葡京酒店43楼",
    "lat": 22.1987,
    "lng": 113.5439,
    "description": "由名厨Joël Robuchon创立的澳门法餐旗舰。",
    "signatureDishes": [
      "松露千层面",
      "鹅肝",
      "龙虾"
    ],
    "stars": 3
  },
  {
    "id": "gen-r-2025-49",
    "name": "譚卉",
    "categories": [
      "米其林二星",
      "亚洲五十佳"
    ],
    "cuisine": "粤菜",
    "province": "澳门",
    "city": "澳门",
    "address": "澳门路氹城永利皇宫地面层",
    "lat": 22.1987,
    "lng": 113.5439,
    "description": "由谭国锋主理，以二十四节气为灵感的高端粤菜，2025亚洲五十佳第9位。",
    "signatureDishes": [
      "节气套餐",
      "炖汤",
      "海鲜"
    ],
    "stars": 2,
    "ranking": 9,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-50",
    "name": "御花園",
    "categories": [
      "黑珍珠一钻",
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "澳门",
    "city": "澳门",
    "address": "澳门路氹城上葡京综合度假村3楼",
    "lat": 22.1987,
    "lng": 113.5439,
    "description": "以宫廷园林为设计灵感的高端粤菜餐厅。",
    "signatureDishes": [
      "鲍鱼",
      "花胶",
      "宫廷点心"
    ],
    "stars": 1,
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-51",
    "name": "麗晶軒",
    "categories": [
      "米其林二星",
      "黑珍珠二钻"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港九龙尖沙咀梳士巴利道18号香港丽晶酒店",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港丽晶酒店内的米其林二星粤菜餐厅。",
    "signatureDishes": [
      "点心",
      "烧味",
      "海鲜"
    ],
    "stars": 2,
    "diamonds": 2
  },
  {
    "id": "gen-r-2025-52",
    "name": "L’Envol",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港湾仔港湾道1号瑞吉酒店3楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港瑞吉酒店内的现代法餐厅，由Olivier Elzer主理。",
    "signatureDishes": [
      "季节性海鲜",
      "现代法餐",
      "甜品"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-53",
    "name": "潤（灣仔店）",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港湾仔港湾道1号瑞吉酒店2楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港瑞吉酒店内的粤菜餐厅，以茶配餐闻名。",
    "signatureDishes": [
      "点心",
      "炖汤",
      "烧味"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-54",
    "name": "萬豪金殿",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港金钟道88号太古广场JW万豪酒店3楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港JW万豪酒店中餐厅，连续四年米其林一星。",
    "signatureDishes": [
      "鲍鱼",
      "花胶",
      "粤菜"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-55",
    "name": "Tosca di Angelo",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环金融街8号丽思卡尔顿酒店102楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港丽思卡尔顿酒店内的意大利餐厅，连续十一年米其林星级。",
    "signatureDishes": [
      "手工意面",
      "海鲜",
      "地中海料理"
    ],
    "stars": 1
  },
  {
    "id": "gen-r-2025-56",
    "name": "天龍軒",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港柯士甸道西1号环球贸易广场丽思卡尔顿酒店102楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "香港丽思卡尔顿酒店中餐厅，连续十二年米其林二星。",
    "signatureDishes": [
      "龙皇披金",
      "鲍鱼酥",
      "粤菜"
    ],
    "stars": 2
  },
  {
    "id": "gen-r-2025-57",
    "name": "永（Wing）",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港上环威灵顿街198号The Wellington29楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第3位，主厨郑永麒以欧陆技法演绎中菜。",
    "signatureDishes": [
      "干式熟成乳鸽",
      "脆皮鸡",
      "创新中菜"
    ],
    "ranking": 3,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-58",
    "name": "Andō",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环威灵顿街52号1楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第41位，阿根廷主厨融合西班牙与日本元素。",
    "signatureDishes": [
      "主厨套餐",
      "融合料理",
      "海鲜"
    ],
    "ranking": 41,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-59",
    "name": "Vea",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环威灵顿街198号The Wellington30楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第53位，郑永麒创办的另一家融合餐厅。",
    "signatureDishes": [
      "创意套餐",
      "海鲜",
      "融合菜"
    ],
    "ranking": 53,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-60",
    "name": "Estro",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环都爹利街1号2楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第32位，拿坡里美食的现代升华。",
    "signatureDishes": [
      "拿坡里套餐",
      "手工意面",
      "海鲜"
    ],
    "ranking": 32,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-61",
    "name": "Neighborhood",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环荷李活道61-63号",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第21位，以食材本味和海鲜为特色。",
    "signatureDishes": [
      "北海道喜知次海鲜饭",
      "羊肚菌盐焗鸡饭",
      "海鲜"
    ],
    "ranking": 21,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-62",
    "name": "新榮記（香港）",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "浙菜",
    "province": "香港",
    "city": "香港",
    "address": "香港湾仔皇后大道东",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "2025亚洲五十佳第56位，新荣记香港分店。",
    "signatureDishes": [
      "家烧黄鱼",
      "沙蒜豆面",
      "东海海鲜"
    ],
    "ranking": 56,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-63",
    "name": "蘭齋",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区三里屯",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "2025亚洲五十佳第50位，以植物料理展现中华传统。",
    "signatureDishes": [
      "豆腐",
      "牛肝菌",
      "季节蔬食"
    ],
    "ranking": 50,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-65",
    "name": "炳胜私厨·中达旗舰店",
    "categories": [
      "黑珍珠二钻"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区珠江新城",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "2025黑珍珠空降二钻，演绎西关名门家宴。",
    "signatureDishes": [
      "西关家宴",
      "粤菜",
      "海鲜"
    ],
    "diamonds": 2
  },
  {
    "id": "gen-r-2025-66",
    "name": "好酒好蔡",
    "categories": [
      "黑珍珠三钻"
    ],
    "cuisine": "潮菜",
    "province": "香港",
    "city": "香港",
    "address": "香港中环",
    "lat": 22.3193,
    "lng": 114.1694,
    "description": "连续多年黑珍珠三钻，高端潮州菜代表。",
    "signatureDishes": [
      "潮州菜",
      "燕窝",
      "海味"
    ],
    "diamonds": 3
  },
  {
    "id": "gen-r-2025-67",
    "name": "西子湖四季酒店·金沙厅",
    "categories": [
      "黑珍珠三钻"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区灵隐路5号",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "连续八年黑珍珠三钻，杭州高端中餐标杆。",
    "signatureDishes": [
      "金沙脆皮鸡",
      "西湖醋鱼",
      "龙井虾仁"
    ],
    "diamonds": 3
  },
  {
    "id": "gen-r-2025-69",
    "name": "AVANT",
    "categories": [
      "黑珍珠二钻"
    ],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市南山区",
    "lat": 22.5431,
    "lng": 114.0579,
    "description": "2025黑珍珠一钻升二钻，深圳创意料理代表。",
    "signatureDishes": [
      "创意套餐",
      "分子料理",
      "本土食材"
    ],
    "diamonds": 2
  },
  {
    "id": "gen-r-2025-70",
    "name": "Ling Long",
    "categories": [
      "黑珍珠二钻",
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "2026年升至黑珍珠二钻，亚洲五十佳第27位。",
    "signatureDishes": [
      "主厨套餐",
      "创意中餐",
      "海鲜"
    ],
    "diamonds": 2,
    "ranking": 27,
    "rankingYear": 2025
  },
  {
    "id": "gen-r-2025-71",
    "name": "皖宴（苏河湾店）",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "徽菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区苏河湾",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "2025黑珍珠新晋一钻，高端徽菜餐厅。",
    "signatureDishes": [
      "臭鳜鱼",
      "毛豆腐",
      "徽菜"
    ],
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-72",
    "name": "七尚酒店·厦餐厅",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "厦门市湖里区",
    "lat": 24.4798,
    "lng": 118.0894,
    "description": "2025黑珍珠新晋一钻，厦门高端闽菜。",
    "signatureDishes": [
      "佛跳墙",
      "海鲜",
      "闽菜"
    ],
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-73",
    "name": "松筠小筑",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "常州",
    "address": "常州市天宁区",
    "lat": 32.0603,
    "lng": 118.7969,
    "description": "2025黑珍珠新晋一钻，常州江南园林餐厅。",
    "signatureDishes": [
      "淮扬菜",
      "时令河鲜",
      "园林宴席"
    ],
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-74",
    "name": "中吴宾馆·毓秀舫",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "常州",
    "address": "常州市钟楼区",
    "lat": 32.0603,
    "lng": 118.7969,
    "description": "2025黑珍珠新晋一钻，常州高端中餐。",
    "signatureDishes": [
      "淮扬菜",
      "常州本帮",
      "宴会菜"
    ],
    "diamonds": 1
  },
  {
    "id": "gen-r-2025-75",
    "name": "阿外楼大酒店（南站店）",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "温州",
    "address": "温州市瓯海区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "2025黑珍珠温州新开城一钻餐厅。",
    "signatureDishes": [
      "瓯菜",
      "海鲜",
      "温州传统菜"
    ],
    "diamonds": 1
  },
  {
    "id": "gen2-r-2025-3",
    "name": "旅·寿司",
    "categories": [
      "米其林三星"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环威灵顿街52号",
    "lat": 22.2828,
    "lng": 114.1547,
    "stars": 3,
    "description": "旅·寿司是香港米其林三星日料餐厅，由师傅主理江户前寿司，食材新鲜，技艺精湛。",
    "signatureDishes": [
      "大トロ寿司",
      "海胆寿司",
      "穴子寿司"
    ]
  },
  {
    "id": "gen2-r-2025-6",
    "name": "L'Atelier de Joël Robuchon",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区中山东一路18号外滩18号3楼",
    "lat": 31.2391,
    "lng": 121.4905,
    "stars": 2,
    "description": "L'Atelier de Joël Robuchon上海店，米其林二星法餐厅，以经典法式料理和精致摆盘著称。",
    "signatureDishes": [
      "鱼子酱龙虾冻",
      "烤乳鸽",
      "土豆泥"
    ]
  },
  {
    "id": "gen2-r-2025-7",
    "name": "Da Vittorio",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市浦东新区世纪大道8号国金中心商场",
    "lat": 31.2336,
    "lng": 121.5056,
    "stars": 2,
    "description": "Da Vittorio上海店，源自意大利的米其林二星餐厅，以传统意式料理和顶级食材闻名。",
    "signatureDishes": [
      "鱼子烟熏三文鱼",
      "意式手工面",
      "提拉米苏"
    ]
  },
  {
    "id": "gen2-r-2025-8",
    "name": "宝丽嘉·意大利餐厅",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市虹口区北外滩大名路198号",
    "lat": 31.2522,
    "lng": 121.4922,
    "stars": 1,
    "description": "上海宝丽嘉酒店意大利餐厅，米其林一星，以现代意式料理和黄浦江景致著称。",
    "signatureDishes": [
      "黑松露意面",
      "烤银鳕鱼",
      "提拉米苏"
    ]
  },
  {
    "id": "gen2-r-2025-9",
    "name": "夏宫",
    "categories": [
      "米其林二星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港中环干诺道中5号香港康得思酒店6楼",
    "lat": 22.2856,
    "lng": 114.1592,
    "stars": 2,
    "description": "夏宫位于香港康得思酒店，米其林二星粤菜餐厅，以传统粤菜和精致点心闻名。",
    "signatureDishes": [
      "蜜汁叉烧",
      "脆皮乳猪",
      "龙虾饺"
    ]
  },
  {
    "id": "gen2-r-2025-10",
    "name": "明阁",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港旺角上海街555号朗豪酒店6楼",
    "lat": 22.3193,
    "lng": 114.1694,
    "stars": 1,
    "description": "明阁位于香港朗豪酒店，米其林一星粤菜餐厅，以创新粤菜和传统点心结合著称。",
    "signatureDishes": [
      "明阁烧鹅",
      "松露龙虾饺",
      "蜜汁叉烧"
    ]
  },
  {
    "id": "gen2-r-2025-11",
    "name": "香宫",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港尖沙咀梳士巴利道22号半岛酒店1楼",
    "lat": 22.2939,
    "lng": 114.1722,
    "stars": 1,
    "description": "香宫位于香港半岛酒店，米其林一星粤菜餐厅，以传统粤菜和精致下午茶闻名。",
    "signatureDishes": [
      "蜜汁叉烧",
      "脆皮烧肉",
      "龙虾饺"
    ]
  },
  {
    "id": "gen2-r-2025-12",
    "name": "欣图宁",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市浦东新区世纪大道8号国金中心商场",
    "lat": 31.2336,
    "lng": 121.5056,
    "stars": 1,
    "description": "欣图宁位于上海浦东丽思卡尔顿酒店，米其林一星粤菜餐厅，以精致粤菜和黄浦江景致著称。",
    "signatureDishes": [
      "脆皮乳鸽",
      "蜜汁叉烧",
      "龙虾饺"
    ]
  },
  {
    "id": "gen2-r-2025-13",
    "name": "雅德",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区中山东一路32号半岛酒店",
    "lat": 31.2391,
    "lng": 121.4905,
    "stars": 1,
    "description": "雅德位于上海半岛酒店，米其林一星法餐厅，以经典法式料理和外滩景观闻名。",
    "signatureDishes": [
      "鹅肝",
      "烤鸭",
      "焦糖布丁"
    ]
  },
  {
    "id": "gen2-r-2025-14",
    "name": "紫光阁",
    "categories": [
      "米其林一星"
    ],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区金融大街丙9号",
    "lat": 39.917,
    "lng": 116.364,
    "stars": 1,
    "description": "紫光阁位于北京金融街，米其林一星粤菜餐厅，以精致粤菜和烤鸭闻名。",
    "signatureDishes": [
      "烤鸭",
      "蜜汁叉烧",
      "龙虾饺"
    ]
  },
  {
    "id": "gen2-r-2025-17",
    "name": "甬府·黄浦",
    "categories": [
      "黑珍珠三钻"
    ],
    "cuisine": "浙菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区中山东一路18号外滩18号",
    "lat": 31.2391,
    "lng": 121.4905,
    "diamonds": 3,
    "description": "甬府黄浦店，黑珍珠三钻餐厅，以宁波菜和东海海鲜闻名，食材考究，烹饪精湛。",
    "signatureDishes": [
      "宁式鳝丝",
      "雪菜大汤黄鱼",
      "红膏炝蟹"
    ]
  },
  {
    "id": "gen2-r-2025-18",
    "name": "晟永兴·侍酒餐厅",
    "categories": [
      "黑珍珠三钻"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区建国门外大街1号",
    "lat": 39.9087,
    "lng": 116.4633,
    "diamonds": 3,
    "description": "晟永兴侍酒餐厅，黑珍珠三钻餐厅，以烤鸭和侍酒师服务闻名，是北京高端餐饮代表。",
    "signatureDishes": [
      "晟永兴烤鸭",
      "鱼子酱烤鸭",
      "松露炒饭"
    ]
  },
  {
    "id": "gen2-r-2025-20",
    "name": "永·湾仔",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "粤菜",
    "province": "香港",
    "city": "香港",
    "address": "香港湾仔湾仔道165号",
    "lat": 22.2735,
    "lng": 114.1756,
    "ranking": 3,
    "rankingYear": 2025,
    "description": "永·湾仔店，2025年亚洲五十佳第3名，以新派粤菜和创意料理闻名，是香港最具人气的餐厅之一。",
    "signatureDishes": [
      "蜜汁叉烧",
      "脆皮乳猪",
      "龙虾炒蛋白"
    ]
  },
  {
    "id": "gen2-r-2025-21",
    "name": "Andō·中环",
    "categories": [
      "亚洲五十佳"
    ],
    "cuisine": "其他",
    "province": "香港",
    "city": "香港",
    "address": "香港中环威灵顿街52号",
    "lat": 22.2828,
    "lng": 114.1547,
    "ranking": 41,
    "rankingYear": 2025,
    "description": "Andō中环店，2025年亚洲五十佳第41名，融合日式与法式料理风格，创意独特。",
    "signatureDishes": [
      "海胆意面",
      "和牛塔塔",
      "抹茶甜品"
    ]
  },
  {
    "id": "gen2-r-2025-45",
    "name": "新雅粤菜馆·上海",
    "categories": [
      
    ],
    "cuisine": "粤菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区南京东路719号",
    "lat": 31.2389,
    "lng": 121.4856,
    "founded": "1926",
    "description": "新雅粤菜馆创立于1926年，是上海著名的粤菜老字号，以粤菜和广式月饼闻名，中华老字号。",
    "signatureDishes": [
      "新雅月饼",
      "蜜汁叉烧",
      "白切鸡"
    ]
  },
  {
    "id": "gen2-r-2025-49",
    "name": "蜜雪冰城·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "河南",
    "city": "郑州",
    "address": "郑州市金水区文化路85号",
    "lat": 34.7466,
    "lng": 113.6253,
    "founded": "1997",
    "description": "蜜雪冰城创立于1997年，连锁品牌，以平价冰淇淋和茶饮闻名，全球门店超3万家，是中国最大的茶饮连锁品牌。",
    "signatureDishes": [
      "冰淇淋",
      "柠檬水",
      "珍珠奶茶"
    ]
  },
  {
    "id": "gen2-r-2025-51",
    "name": "老乡鸡·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "徽菜",
    "province": "安徽",
    "city": "合肥",
    "address": "合肥市蜀山区长江西路",
    "lat": 31.8206,
    "lng": 117.2272,
    "founded": "1982",
    "description": "老乡鸡创立于1982年，连锁品牌，以肥西老母鸡汤和农家菜闻名，全国门店超1000家，是中国快餐连锁代表。",
    "signatureDishes": [
      "肥西老母鸡汤",
      "梅菜扣肉",
      "农家小炒肉"
    ]
  },
  {
    "id": "gen2-r-2025-52",
    "name": "小菜园·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "徽菜",
    "province": "安徽",
    "city": "合肥",
    "address": "合肥市蜀山区长江西路",
    "lat": 31.8206,
    "lng": 117.2272,
    "founded": "2013",
    "description": "小菜园创立于2013年，连锁品牌，以新派徽菜和家常菜闻名，全国门店超500家，是中式快餐连锁新锐。",
    "signatureDishes": [
      "地锅鸡",
      "臭鳜鱼",
      "毛豆腐"
    ]
  },
  {
    "id": "gen2-r-2025-56",
    "name": "呷哺呷哺·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市大兴区科创十二街",
    "lat": 39.7248,
    "lng": 116.5472,
    "founded": "1998",
    "description": "呷哺呷哺创立于1998年，连锁品牌，以一人一锅的快餐式火锅闻名，全国门店超1000家，是火锅连锁代表。",
    "signatureDishes": [
      "肥牛套餐",
      "麻辣锅底",
      "芝麻酱"
    ]
  },
  {
    "id": "gen2-r-2025-57",
    "name": "小龙坎·火锅",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市锦江区东大街",
    "lat": 30.5728,
    "lng": 104.0668,
    "founded": "2015",
    "description": "小龙坎创立于2015年，连锁品牌，以正宗川味火锅闻名，全国门店超900家，是火锅连锁新锐品牌。",
    "signatureDishes": [
      "麻辣锅底",
      "鲜毛肚",
      "酥肉"
    ]
  },
  {
    "id": "gen2-r-2025-58",
    "name": "大龙燚·火锅",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市武侯区二环路南三段",
    "lat": 30.5728,
    "lng": 104.0668,
    "founded": "2013",
    "description": "大龙燚创立于2013年，连锁品牌，以重油锅底和鲜毛肚闻名，全国门店超300家，是成都火锅代表品牌。",
    "signatureDishes": [
      "重油锅底",
      "鲜毛肚",
      "麻辣牛肉"
    ]
  },
  {
    "id": "gen2-r-2025-59",
    "name": "蜀大侠·火锅",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市锦江区水碾河路",
    "lat": 30.5728,
    "lng": 104.0668,
    "founded": "2015",
    "description": "蜀大侠创立于2015年，连锁品牌，以侠客文化和川味火锅闻名，全国门店超600家，是火锅连锁新锐。",
    "signatureDishes": [
      "花千骨",
      "麻辣锅底",
      "鲜鸭肠"
    ]
  },
  {
    "id": "gen2-r-2025-60",
    "name": "杨国福·麻辣烫",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "东北菜",
    "province": "黑龙江",
    "city": "哈尔滨",
    "address": "哈尔滨市南岗区学府路",
    "lat": 45.8038,
    "lng": 126.535,
    "founded": "2003",
    "description": "杨国福麻辣烫创立于2003年，连锁品牌，以自选麻辣烫闻名，全球门店超6000家，是麻辣烫连锁龙头。",
    "signatureDishes": [
      "麻辣烫",
      "骨汤底",
      "麻酱"
    ]
  },
  {
    "id": "gen2-r-2025-61",
    "name": "张亮·麻辣烫",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "东北菜",
    "province": "黑龙江",
    "city": "哈尔滨",
    "address": "哈尔滨市松北区世茂大道",
    "lat": 45.8038,
    "lng": 126.535,
    "founded": "2008",
    "description": "张亮麻辣烫创立于2008年，连锁品牌，以自选麻辣烫闻名，全国门店超5000家，是麻辣烫连锁代表品牌。",
    "signatureDishes": [
      "麻辣烫",
      "番茄底",
      "麻酱"
    ]
  },
  {
    "id": "gen2-r-2025-62",
    "name": "华莱士·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "福建",
    "city": "福州",
    "address": "福州市鼓楼区五四路",
    "lat": 26.0745,
    "lng": 119.2965,
    "founded": "2001",
    "description": "华莱士创立于2001年，连锁品牌，以平价西式快餐闻名，全国门店超20000家，是中国本土最大的西式快餐连锁。",
    "signatureDishes": [
      "炸鸡",
      "汉堡",
      "薯条"
    ]
  },
  {
    "id": "gen2-r-2025-63",
    "name": "乡村基·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "重庆市渝中区解放碑",
    "lat": 29.563,
    "lng": 106.5516,
    "founded": "1996",
    "description": "乡村基创立于1996年，连锁品牌，以中式快餐和川菜闻名，全国门店超1000家，是中国快餐连锁代表。",
    "signatureDishes": [
      "回锅肉套餐",
      "宫保鸡丁",
      "麻婆豆腐"
    ]
  },
  {
    "id": "gen2-r-2025-64",
    "name": "紫光园·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区朝外大街",
    "lat": 39.9087,
    "lng": 116.4633,
    "founded": "1918",
    "description": "紫光园创立于1918年，连锁品牌，以清真菜和北京小吃闻名，北京门店超100家，是清真餐饮连锁代表。",
    "signatureDishes": [
      "酱牛肉",
      "烧麦",
      "驴打滚"
    ]
  },
  {
    "id": "gen2-r-2025-65",
    "name": "永和大王·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市闵行区虹桥镇",
    "lat": 31.2304,
    "lng": 121.4737,
    "founded": "1997",
    "description": "永和大王创立于1997年，连锁品牌，以豆浆油条和台式快餐闻名，全国门店超800家，是中式早餐连锁代表。",
    "signatureDishes": [
      "豆浆",
      "油条",
      "卤肉饭"
    ]
  },
  {
    "id": "gen2-r-2025-66",
    "name": "真功夫·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "东莞",
    "address": "东莞市松山湖科技产业园",
    "lat": 23.0207,
    "lng": 113.7518,
    "founded": "1990",
    "description": "真功夫创立于1990年，连锁品牌，以蒸饭和营养快餐闻名，全国门店超600家，是中式快餐连锁代表。",
    "signatureDishes": [
      "原盅蒸饭",
      "蒸汤",
      "卤蛋"
    ]
  },
  {
    "id": "gen2-r-2025-67",
    "name": "味千拉面·总部",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市浦东新区陆家嘴",
    "lat": 31.2336,
    "lng": 121.5056,
    "founded": "1997",
    "description": "味千拉面创立于1997年，连锁品牌，以日式拉面和定食闻名，全国门店超800家，是日式快餐连锁代表。",
    "signatureDishes": [
      "骨汤拉面",
      "煎饺",
      "炸鸡"
    ]
  },
  {
    "id": "gen2-r-2025-69",
    "name": "沪屿·上海",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区南京西路",
    "lat": 31.2304,
    "lng": 121.4737,
    "diamonds": 1,
    "description": "沪屿上海店，黑珍珠一钻餐厅，以新派本帮菜和精致摆盘闻名，是上海高端餐饮新锐。",
    "signatureDishes": [
      "红烧肉",
      "蟹粉豆腐",
      "油爆虾"
    ]
  },
  {
    "id": "gen2-r-2025-86",
    "name": "建发·清真餐厅",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "宁夏",
    "city": "银川",
    "address": "银川市兴庆区中山南街",
    "lat": 38.4872,
    "lng": 106.2309,
    "founded": "1920",
    "description": "建发清真餐厅创立于1920年，以宁夏手抓羊肉和清真菜闻名，是银川著名的老字号清真餐厅。",
    "signatureDishes": [
      "手抓羊肉",
      "羊杂碎",
      "烩羊肉"
    ]
  },
  {
    "id": "gen2-r-2025-88",
    "name": "君悦·中餐厅",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区珠江新城",
    "lat": 23.1199,
    "lng": 113.3293,
    "diamonds": 1,
    "description": "君悦中餐厅，黑珍珠一钻餐厅，以精致粤菜和广式点心闻名，是广州高端餐饮代表。",
    "signatureDishes": [
      "蜜汁叉烧",
      "脆皮乳猪",
      "虾饺"
    ]
  },
  {
    "id": "gen2-r-2025-89",
    "name": "大蓉和·成都",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市武侯区二环路南三段",
    "lat": 30.5728,
    "lng": 104.0668,
    "founded": "1999",
    "description": "大蓉和创立于1999年，连锁品牌，以新派川菜和融合菜闻名，是成都餐饮名店，全国门店超50家。",
    "signatureDishes": [
      "开门红",
      "石锅三角峰",
      "蓉和酱猪手"
    ]
  },
  {
    "id": "gen4-r-2025-1",
    "name": "柳泉居饭庄",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区新街口南大街178号",
    "lat": 39.9382,
    "lng": 116.3672,
    "founded": "1567",
    "description": "柳泉居创建于明隆庆元年（1567年），是北京著名的'八大居'之一，因院内有一株大柳树和一口甜水井而得名。初以黄酒起家，后发展京味菜，以爆、炒、熘、烧、焖为主，特色菜有蛋黄炒雪蟹、炸烹虾段、拔丝莲子等，豆沙包系列尤为出名。",
    "signatureDishes": [
      "蛋黄炒雪蟹",
      "炸烹虾段",
      "拔丝莲子",
      "豆沙包",
      "拔丝苹果"
    ]
  },
  {
    "id": "gen4-r-2025-2",
    "name": "白魁老号饭庄",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区隆福寺前街1号",
    "lat": 39.9248,
    "lng": 116.4182,
    "founded": "1740",
    "description": "白魁老号创建于清乾隆五年（1740年），以烧羊肉闻名京城，是北京最著名的清真老字号之一。其烧羊肉选用优质羊肉，经秘制老汤煮制后再经油炸，外酥里嫩，香气四溢，是京城清真美食的代表。",
    "signatureDishes": [
      "烧羊肉",
      "白水羊头",
      "羊杂汤",
      "它似蜜"
    ]
  },
  {
    "id": "gen4-r-2025-3",
    "name": "壹条龙饭庄",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区前门大街27号",
    "lat": 39.8972,
    "lng": 116.3974,
    "founded": "1785",
    "description": "壹条龙创建于清乾隆五十年（1785年），原名'南恒顺'，因光绪皇帝曾在此用餐而得名。以涮羊肉闻名，选用内蒙古优质羊肉，刀工精湛，肉片薄如纸，涮后鲜嫩可口。",
    "signatureDishes": [
      "涮羊肉",
      "手切羊肉",
      "烧羊肉",
      "羊蝎子"
    ]
  },
  {
    "id": "gen4-r-2025-4",
    "name": "天兴居",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区鲜鱼口街95号",
    "lat": 39.8952,
    "lng": 116.3992,
    "founded": "1862",
    "description": "天兴居创建于清同治元年（1862年），以炒肝闻名京城，是北京传统小吃代表。其炒肝选用猪肝、猪大肠，配以蒜泥、淀粉熬制，汤汁浓稠，味道咸香，搭配包子食用是老北京人的经典早餐。",
    "signatureDishes": [
      "炒肝",
      "包子",
      "炸灌肠"
    ]
  },
  {
    "id": "gen4-r-2025-5",
    "name": "泰丰楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区前门西大街2号",
    "lat": 39.9004,
    "lng": 116.3884,
    "founded": "1876",
    "description": "泰丰楼创建于清光绪二年（1876年），是京城'八大楼'之一，以鲁菜见长，尤其对汤头十分讲究，每天用活鸡、肘子吊汤。烩乌鱼蛋汤鲜味十足，堪称京城一绝，酸辣鸡丝汤也极受欢迎。",
    "signatureDishes": [
      "烩乌鱼蛋汤",
      "葱烧海参",
      "糟溜鱼片",
      "酸辣鸡丝汤",
      "三吃丸子"
    ]
  },
  {
    "id": "gen4-r-2025-6",
    "name": "致美楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区陶然亭路39号",
    "lat": 39.8712,
    "lng": 116.3782,
    "founded": "1840",
    "description": "致美楼创始于清道光年间，是京城'八大楼'之一，由乾隆御厨景启主理。以'集南北烹调之为表、汇御膳民食之粹'著称，招牌菜一鱼四吃——糟溜、干炸、红烧、糖醋，四种口味一次品尝，刀工技艺令人叹服。",
    "signatureDishes": [
      "一鱼四吃",
      "海参烧蹄筋",
      "干炸丸子",
      "宫保鸡丁",
      "糟溜鱼片"
    ]
  },
  {
    "id": "gen4-r-2025-8",
    "name": "老半斋酒楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区福州路600号",
    "lat": 31.2358,
    "lng": 121.4822,
    "founded": "1905",
    "description": "老半斋创建于清光绪三十一年（1905年），前身为半斋总会，经营淮扬菜点逾百年。以刀鱼面、肴肉面闻名上海滩，每到刀鱼季节，食客盈门。其淮扬菜点制作精细，口味清鲜平和。",
    "signatureDishes": [
      "刀鱼面",
      "肴肉面",
      "蟹粉狮子头",
      "清炒鳝糊",
      "煮干丝"
    ]
  },
  {
    "id": "gen4-r-2025-11",
    "name": "梅龙镇酒家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区南京西路1081弄22号",
    "lat": 31.2302,
    "lng": 121.4522,
    "founded": "1938",
    "description": "梅龙镇酒家创建于1938年，店名取自京剧《游龙戏凤》，是上海文化艺术界人士的聚会圣地。以淮扬菜为基础，融合川扬风味，梅兰芳、周信芳等名角都是常客，其干烧明虾和富贵鱼镶面名扬沪上。",
    "signatureDishes": [
      "干烧明虾",
      "富贵鱼镶面",
      "蟹粉狮子头",
      "松鼠鳜鱼",
      "龙井虾仁"
    ]
  },
  {
    "id": "gen4-r-2025-12",
    "name": "马祥兴菜馆",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市鼓楼区云南北路32号",
    "lat": 32.0632,
    "lng": 118.7812,
    "founded": "1845",
    "description": "马祥兴创建于清道光二十五年（1845年），是全国现存清真菜馆中的'老寿星'。以经营'牛八样'清真菜为特色，四大名菜美人肝、凤尾虾、蛋烧卖、松鼠鱼闻名遐迩。民国时期，谭延闿、于右任、李宗仁等名流均为常客。",
    "signatureDishes": [
      "美人肝",
      "凤尾虾",
      "蛋烧卖",
      "松鼠鱼",
      "牛肉锅贴"
    ]
  },
  {
    "id": "gen4-r-2025-15",
    "name": "成珠楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市海珠区南华中路",
    "lat": 23.1052,
    "lng": 113.2612,
    "founded": "1746",
    "description": "成珠楼起源于清乾隆年间，是广州现存历史最悠久的酒楼之一，被誉为'鸡仔饼鼻祖'。其鸡仔饼（小凤饼）制作技艺已列入非遗名录，入口松化，甘香酥脆，是广州最具代表性的传统糕点。",
    "signatureDishes": [
      "鸡仔饼（小凤饼）",
      "成珠楼月饼",
      "莲蓉酥"
    ]
  },
  {
    "id": "gen4-r-2025-16",
    "name": "太平馆",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市越秀区北京路342号",
    "lat": 23.1232,
    "lng": 113.2682,
    "founded": "1860",
    "description": "太平馆创建于清咸丰十年（1860年），被誉为'广州西餐第一家'。1925年周恩来与邓颖超的婚宴在此举行，三楼设有'总理厅'。招牌红烧乳鸽皮脆肉嫩，孙中山先生曾赞不绝口。",
    "signatureDishes": [
      "红烧乳鸽",
      "葡国鸡",
      "瑞士鸡翼",
      "德国咸猪手"
    ]
  },
  {
    "id": "gen4-r-2025-17",
    "name": "荣华楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市荔湾区龙津东路708号",
    "lat": 23.1212,
    "lng": 113.2482,
    "founded": "1876",
    "description": "荣华楼创建于清光绪二年（1876年），是广州现存最老的茶楼之一，也是广州最后一间可以听粤曲的茶楼。荣华麻香酥斩获'中华名小吃'称号，虾饺、烧卖、叉烧包均为广式点心经典。",
    "signatureDishes": [
      "荣华麻香酥",
      "虾饺",
      "烧卖",
      "叉烧包",
      "酥皮蛋挞"
    ]
  },
  {
    "id": "gen4-r-2025-18",
    "name": "惠如楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市越秀区中山五路",
    "lat": 23.1272,
    "lng": 113.2642,
    "founded": "1875",
    "description": "惠如楼创建于清光绪元年（1875年），是广州最古老的茶楼之一。以'星期美点'闻名，每周更新八咸八甜十六款点心，累计创制点心数千款。脯鱼干蒸烧卖、笋尖鲜虾饺、榄仁萨琪玛均为经典。",
    "signatureDishes": [
      "脯鱼干蒸烧卖",
      "笋尖鲜虾饺",
      "榄仁萨琪玛",
      "星期美点"
    ]
  },
  {
    "id": "gen4-r-2025-21",
    "name": "奎元馆",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市上城区解放路154号",
    "lat": 30.2472,
    "lng": 120.1722,
    "founded": "1867",
    "description": "奎元馆创建于清同治六年（1867年），以经营面食闻名，是江南面王。其虾爆鳝面选用鲜活黄鳝和河虾仁，面条筋道，汤鲜味浓，金庸先生品尝后曾题词'杭州奎元馆，面点天下冠'。",
    "signatureDishes": [
      "虾爆鳝面",
      "片儿川",
      "红烧牛肉面",
      "冬菇炒面"
    ]
  },
  {
    "id": "gen4-r-2025-24",
    "name": "盘飧市",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市锦江区华兴正街54号",
    "lat": 30.6552,
    "lng": 104.0762,
    "founded": "1925",
    "description": "盘飧市创立于1925年，店名取自杜甫诗句'盘飧市远无兼味'。以川卤技艺为根，融合广东卤味技法，卤菜糯软适口，时有'滋味哪堪盘飧市，卤肉锅魁下川戏'之说，是成都卤菜的代表。",
    "signatureDishes": [
      "卤肉锅魁",
      "卤牛肉",
      "卤鸭",
      "卤猪蹄",
      "川菜和席"
    ]
  },
  {
    "id": "gen4-r-2025-25",
    "name": "带江草堂",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市金牛区永陵路",
    "lat": 30.6722,
    "lng": 104.0452,
    "founded": "1936",
    "description": "带江草堂创建于1936年，以大蒜鲢鱼闻名成都。郭沫若曾题诗赞曰'三洞桥边春水生，带江草堂万花明'。其鲢鱼做法独特，蒜香浓郁，鱼肉鲜嫩，是成都河鲜菜的代表。",
    "signatureDishes": [
      "大蒜鲢鱼",
      "酸菜鱼",
      "豆瓣鱼",
      "红烧江团"
    ]
  },
  {
    "id": "gen4-r-2025-26",
    "name": "老四川酒楼",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "重庆市渝中区八一路",
    "lat": 29.5592,
    "lng": 106.5782,
    "founded": "1931",
    "description": "老四川酒楼创建于1931年，是重庆最著名的老字号川菜馆之一。以灯影牛肉、毛肚火锅等传统川菜闻名，其灯影牛肉薄如纸片，色泽红亮，麻辣鲜香，是重庆美食的代表。",
    "signatureDishes": [
      "灯影牛肉",
      "毛肚火锅",
      "水煮鱼",
      "辣子鸡",
      "泉水鸡"
    ]
  },
  {
    "id": "gen4-r-2025-30",
    "name": "第一楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "豫菜",
    "province": "河南",
    "city": "开封",
    "address": "开封市鼓楼区寺后街8号",
    "lat": 34.7952,
    "lng": 114.3522,
    "founded": "1922",
    "description": "开封第一楼创建于1922年，以灌汤包子闻名。其小笼灌汤包皮薄馅大，灌汤流油，提起来像灯笼，放下去像菊花，被誉为'中州膳食一绝'，是开封美食的象征。",
    "signatureDishes": [
      "灌汤包子",
      "鲤鱼焙面",
      "套四宝",
      "炒红薯泥"
    ]
  },
  {
    "id": "gen4-r-2025-31",
    "name": "真不同",
    "categories": [
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "豫菜",
    "province": "河南",
    "city": "洛阳",
    "address": "洛阳市老城区中州东路359号",
    "lat": 34.6822,
    "lng": 112.4812,
    "founded": "1895",
    "description": "真不同创建于清光绪二十一年（1895年），是洛阳水席的代表。洛阳水席始于唐代，共二十四道菜，汤汤水水、酸辣味殊，被列入国家级非物质文化遗产，是中原饮食文化的瑰宝。",
    "signatureDishes": [
      "洛阳水席",
      "牡丹燕菜",
      "连汤肉片",
      "焦炸丸"
    ],
    "heritageItem": "洛阳水席制作技艺"
  },
  {
    "id": "gen4-r-2025-33",
    "name": "玉楼东",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "长沙市天心区五一大道125号",
    "lat": 28.1982,
    "lng": 112.9822,
    "founded": "1904",
    "description": "玉楼东创建于清光绪三十年（1904年），是长沙最老的湘菜馆之一。以传统湘菜见长，剁椒鱼头、麻辣子鸡、发丝百叶等经典湘菜均出自其手，是湘菜的重要传承基地。",
    "signatureDishes": [
      "剁椒鱼头",
      "麻辣子鸡",
      "发丝百叶",
      "腊味合蒸",
      "东安子鸡"
    ]
  },
  {
    "id": "gen4-r-2025-41",
    "name": "宴春酒楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "镇江",
    "address": "镇江市京口区人民街",
    "lat": 32.2022,
    "lng": 119.4322,
    "founded": "1890",
    "description": "宴春酒楼创建于清光绪十六年（1890年），以镇江地方菜和蟹黄汤包闻名。其水晶肴肉晶莹剔透，蟹黄汤包汤汁丰盈，是镇江美食的代表。",
    "signatureDishes": [
      "水晶肴肉",
      "蟹黄汤包",
      "镇江醋排",
      "清蒸鲥鱼"
    ]
  },
  {
    "id": "gen4-r-2025-46",
    "name": "老正兴菜馆",
    "categories": [
      "百年老店",
      "米其林一星",
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区福州路556号",
    "lat": 31.2362,
    "lng": 121.4832,
    "founded": "1862",
    "stars": 1,
    "description": "老正兴创建于清同治元年（1862年），是上海本帮菜的鼻祖，曾获米其林一星。油爆河虾号称'天下第一虾'，拿过国家金牌奖，八宝全鸭、虾子大乌参、草头圈子等均为教科书级本帮菜。",
    "signatureDishes": [
      "油爆河虾",
      "八宝全鸭",
      "虾子大乌参",
      "草头圈子",
      "清炒鳝糊"
    ]
  },
  {
    "id": "gen4-r-2025-47",
    "name": "上海老饭店",
    "categories": [
      "百年老店",
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区福佑路242号",
    "lat": 31.2272,
    "lng": 121.4932,
    "founded": "1875",
    "description": "上海老饭店原名荣顺馆，创建于清光绪元年（1875年），是上海本帮菜的大本营。其八宝鸭是沪上一绝，2013年被认定为国家级非遗，业内称'千姿百态上海菜，源头还在老饭店'。",
    "signatureDishes": [
      "八宝鸭",
      "红烧鮰鱼",
      "油爆虾",
      "扣三丝",
      "虾子大乌参"
    ],
    "heritageItem": "上海本帮菜肴传统烹饪技艺"
  },
  {
    "id": "gen4-r-2025-48",
    "name": "西安贾三灌汤包子",
    "categories": [
      "百年老店",
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "西北菜",
    "province": "陕西",
    "city": "西安",
    "address": "西安市莲湖区回民街北院门93号",
    "lat": 34.2652,
    "lng": 108.9462,
    "founded": "1902",
    "description": "贾三灌汤包子创建于清光绪二十八年（1902年），是西安回民街的招牌美食。其灌汤包子皮薄如纸，馅嫩汤鲜，牛肉灌汤包和羊肉灌汤包最为著名，其制作技艺已入选国家级非遗。",
    "signatureDishes": [
      "牛肉灌汤包",
      "羊肉灌汤包",
      "三鲜灌汤包",
      "八宝甜稀饭"
    ],
    "heritageItem": "贾三灌汤包子制作技艺"
  },
  {
    "id": "gen4-r-2025-50",
    "name": "鲁味斋",
    "categories": [
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "济南",
    "address": "济南市市中区经四路",
    "lat": 36.6622,
    "lng": 116.9982,
    "founded": "1927",
    "description": "鲁味斋创建于1927年，以扒蹄闻名济南。其扒蹄制作技艺入选山东省非遗，2024年晋升中华老字号。扒蹄色泽红亮，软糯香醇，入口即化，是济南传统名吃的代表。",
    "signatureDishes": [
      "鲁味斋扒蹄",
      "酱牛肉",
      "扒鸡",
      "酱猪蹄"
    ],
    "heritageItem": "鲁味斋扒蹄制作技艺"
  },
  {
    "id": "gen4-r-2025-52",
    "name": "章丘黄家烤肉",
    "categories": [
      "百年老店",
      "非遗传承",
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "济南",
    "address": "济南市章丘区绣惠街道",
    "lat": 36.7422,
    "lng": 117.5022,
    "founded": "1662",
    "description": "黄家烤肉始创于清康熙元年（1662年），已有三百余年历史，是章丘最具代表性的传统美食。以整猪烤制，皮脆肉嫩，香气四溢，其制作技艺入选山东省非物质文化遗产。",
    "signatureDishes": [
      "黄家烤肉",
      "烤肉夹馍",
      "烤肉拼盘"
    ],
    "heritageItem": "黄家烤肉制作技艺"
  },
  {
    "id": "gen4-r-2025-54",
    "name": "海底捞火锅",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "全国连锁",
    "lat": 30.6672,
    "lng": 104.0632,
    "founded": "1994",
    "description": "海底捞创建于1994年四川简阳，以极致服务著称，是全球最大的连锁火锅品牌之一。在全国拥有超过1300家门店，以川味火锅为基础，融合各地口味，提供免费美甲、擦鞋等特色服务，2025年营收超432亿元。（连锁）",
    "signatureDishes": [
      "番茄锅底",
      "牛油麻辣锅底",
      "捞派滑牛肉",
      "虾滑",
      "捞面"
    ]
  },
  {
    "id": "gen4-r-2025-60",
    "name": "兰湘子·湘菜小炒",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "全国连锁",
    "lat": 28.1922,
    "lng": 112.9742,
    "founded": "2019",
    "description": "兰湘子创建于2019年，以湘菜小炒为特色，迅速发展至全国超过400家门店。以'上菜快、吃得爽'为理念，专注湘式小炒赛道，是近年来增长最快的湘菜连锁品牌之一。（连锁）",
    "signatureDishes": [
      "辣椒炒肉",
      "小炒黄牛肉",
      "酸辣鸡杂",
      "剁椒鱼头",
      "攸县香干"
    ]
  },
  {
    "id": "gen4-r-2025-61",
    "name": "点都德",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "全国连锁",
    "lat": 23.1272,
    "lng": 113.2642,
    "founded": "1933",
    "description": "点都德创建于1933年，以全天候茶市为特色，是广式茶点的代表品牌。以'传承老广州饮茶文化'为理念，虾饺、红米肠、叉烧包等均为招牌，全国门店超过80家。（连锁）",
    "signatureDishes": [
      "金沙红米肠",
      "招牌虾饺皇",
      "蜜汁叉烧包",
      "沙爹蒸金钱肚",
      "百合酱蒸凤爪"
    ]
  },
  {
    "id": "gen4-r-2025-62",
    "name": "文和友",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "全国连锁",
    "lat": 28.1922,
    "lng": 112.9742,
    "founded": "2011",
    "description": "文和友创建于2011年，以还原老长沙市井文化为特色，是超级网红餐饮品牌。将美食与文化体验结合，营造老城区的沉浸式用餐体验，长沙海信广场店单日取号曾达数万桌。（连锁）",
    "signatureDishes": [
      "口味虾",
      "文和友臭豆腐",
      "老长沙大香肠",
      "糖油粑粑",
      "刮凉粉"
    ]
  },
  {
    "id": "gen4-r-2025-65",
    "name": "黑天鹅法餐厅",
    "categories": [
      "米其林二星",
      "黑珍珠一钻"
    ],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市顺义区天竺镇",
    "lat": 40.0622,
    "lng": 116.5722,
    "stars": 2,
    "diamonds": 1,
    "description": "黑天鹅法餐厅由法国主厨Vianney Massot主理，2026年晋升米其林二星并上榜黑珍珠一钻。以传统法式烹饪结合中国食材，环境优雅，正对天鹅湖，以天鹅为设计元素，是北京顶级法餐代表。",
    "signatureDishes": [
      "低温烤多宝鱼",
      "法式鹅肝",
      "黑松露料理",
      "法式甜点塔"
    ]
  },
  {
    "id": "gen4-r-2025-68",
    "name": "1996川菜·主厨餐厅",
    "categories": [
      "黑珍珠二钻"
    ],
    "cuisine": "川菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9182,
    "lng": 116.4502,
    "diamonds": 2,
    "description": "1996川菜·主厨餐厅2026年升至黑珍珠二钻，以精致川菜为特色。主厨将传统川菜技艺与现代烹饪理念结合，在保留川菜'百菜百味'精髓的同时，呈现更高品质的用餐体验。",
    "signatureDishes": [
      "水煮牛肉",
      "回锅肉",
      "麻婆豆腐",
      "鱼香肉丝",
      "宫保虾球"
    ]
  },
  {
    "id": "gen4-r-2025-73",
    "name": "新长福·新湖南新湘菜",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "湘菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市海淀区新大都",
    "lat": 39.9322,
    "lng": 116.3322,
    "diamonds": 1,
    "description": "新长福2025年新上榜黑珍珠一钻，以新派湘菜为特色。在传统湘菜基础上创新，融合现代烹饪理念，剁椒鱼头、小炒黄牛肉等经典湘菜呈现更高品质。",
    "signatureDishes": [
      "剁椒鱼头",
      "小炒黄牛肉",
      "辣椒炒肉",
      "腊味合蒸",
      "东安子鸡"
    ]
  },
  {
    "id": "gen4-r-2025-74",
    "name": "南景饭店",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "长沙市雨花区圭塘河",
    "lat": 28.1522,
    "lng": 113.0422,
    "diamonds": 1,
    "description": "南景饭店2025年新上榜黑珍珠一钻，是长沙知名的品质湘菜馆。以传统湘菜为基础，注重食材品质和烹饪工艺，是长沙精致湘菜的代表。",
    "signatureDishes": [
      "剁椒鱼头",
      "辣椒炒肉",
      "毛氏红烧肉",
      "腊味合蒸",
      "口味虾"
    ]
  },
  {
    "id": "gen4-r-2025-84",
    "name": "元景宴",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市鼓楼区",
    "lat": 32.0582,
    "lng": 118.7802,
    "diamonds": 1,
    "description": "元景宴2025年新上榜黑珍珠一钻，是南京精致淮扬菜的代表。以淮扬菜为基础，注重食材品质和刀工技艺，大煮干丝、蟹粉狮子头、松鼠鳜鱼等经典淮扬菜均有精致呈现。",
    "signatureDishes": [
      "大煮干丝",
      "蟹粉狮子头",
      "松鼠鳜鱼",
      "水晶肴肉",
      "三套鸭"
    ]
  },
  {
    "id": "gen4-r-2025-85",
    "name": "同庆楼",
    "categories": [
      "百年老店",
      "知名餐厅"
    ],
    "cuisine": "徽菜",
    "province": "安徽",
    "city": "芜湖",
    "address": "芜湖市镜湖区中山路",
    "lat": 31.3422,
    "lng": 118.3782,
    "founded": "1925",
    "description": "同庆楼创建于1925年，是安徽最著名的老字号餐饮品牌，以徽菜见长。2020年A股上市，是中华老字号餐饮上市第一股。其臭鳜鱼、毛豆腐、徽州一品锅等为徽菜经典。",
    "signatureDishes": [
      "臭鳜鱼",
      "毛豆腐",
      "徽州一品锅",
      "胡适一品锅",
      "红烧划水"
    ]
  },
  {
    "id": "gen4-r-2025-71",
    "name": "阿外楼大酒店",
    "categories": [
      "黑珍珠一钻",
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "温州",
    "address": "温州市鹿城区南站",
    "lat": 28.0022,
    "lng": 120.6822,
    "diamonds": 1,
    "description": "阿外楼大酒店是温州最具代表性的本地老字号餐厅，2025年新上榜黑珍珠一钻。主打传统瓯菜，以海鲜为主，活杀活烧，擅长鲜炒、清汤、凉拌、卤味，是温州饮食文化的代表。",
    "signatureDishes": [
      "温州敲鱼",
      "三丝敲鱼汤",
      "炒粉干",
      "鱼丸汤",
      "江蟹生"
    ]
  },
  {
    "id": "gen4-r-2025-82",
    "name": "皖宴",
    "categories": [
      "黑珍珠一钻"
    ],
    "cuisine": "徽菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区苏河湾",
    "lat": 31.2422,
    "lng": 121.4702,
    "diamonds": 1,
    "description": "皖宴2025年新上榜黑珍珠一钻，是上海首家黑珍珠上榜的徽菜餐厅。以精致徽菜为主，将徽州传统菜肴以现代方式呈现，臭鳜鱼、毛豆腐、问政山笋等经典徽菜均有高品质演绎。",
    "signatureDishes": [
      "臭鳜鱼",
      "毛豆腐",
      "问政山笋",
      "徽州一品锅",
      "胡适一品锅"
    ]
  },
  {
    "id": "r-279",
    "name": "丰泽园",
    "categories": [
      
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区珠市口西大街83号",
    "lat": 39.8922,
    "lng": 116.3974,
    "founded": "1930",
    "description": "丰泽园创于1930年，由名厨栾蒲包创办，是北京最著名的鲁菜馆之一。以葱烧海参、糟溜鱼片等传统山东菜闻名，曾为京城达官贵人宴客首选，被誉为「鲁菜泰斗」，是中华老字号。",
    "signatureDishes": [
      "葱烧海参",
      "糟溜鱼片",
      "九转大肠",
      "糟煨冬笋",
      "银丝卷"
    ]
  },
  {
    "id": "r-280",
    "name": "南来顺",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区牛街11号",
    "lat": 39.8826,
    "lng": 116.3639,
    "founded": "1937",
    "description": "南来顺创于1937年，是北京牛街著名的清真老字号。以爆肚、涮羊肉、烤肉闻名，集清真小吃与正餐于一体，是京城清真美食的代表，中华老字号。",
    "signatureDishes": [
      "爆肚",
      "涮羊肉",
      "它似蜜",
      "烧羊肉",
      "芝麻烧饼"
    ]
  },
  {
    "id": "r-281",
    "name": "护国寺小吃",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区护国寺大街93号",
    "lat": 39.9378,
    "lng": 116.3736,
    "founded": "1956",
    "heritageItem": "护国寺小吃制作技艺（市级非遗）",
    "description": "护国寺小吃创于1956年，是京味小吃的集大成者。以艾窝窝、驴打滚、豌豆黄等京式小吃闻名，小吃制作技艺为北京市级非物质文化遗产，承载着老北京小吃的百年传统，中华老字号。",
    "signatureDishes": [
      "艾窝窝",
      "驴打滚",
      "豌豆黄",
      "豆面糕",
      "糖耳朵"
    ]
  },
  {
    "id": "r-282",
    "name": "锦芳小吃",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区磁器口大都市街南厅1楼",
    "lat": 39.8939,
    "lng": 116.4278,
    "founded": "1926",
    "description": "锦芳小吃创于1926年，是北京京味小吃老字号。以元宵、奶油炸糕、什锦烧饼闻名，尤其元宵选料精细、制作讲究，是京城元宵的代表，中华老字号。",
    "signatureDishes": [
      "元宵",
      "奶油炸糕",
      "什锦烧饼",
      "豆汁",
      "焦圈"
    ]
  },
  {
    "id": "r-283",
    "name": "又一顺",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区黄寺大街28号",
    "lat": 39.9619,
    "lng": 116.3736,
    "founded": "1948",
    "description": "又一顺创于1948年，是北京著名的清真老字号。以爆肚、涮羊肉、它似蜜闻名，融合东来顺与传统清真菜之长，是京城清真菜的代表，中华老字号。",
    "signatureDishes": [
      "爆肚",
      "涮羊肉",
      "它似蜜",
      "烧羊肉",
      "扒羊肉条"
    ]
  },
  {
    "id": "r-284",
    "name": "曲园酒楼",
    "categories": [
      
    ],
    "cuisine": "湘菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区西直门外大街德宝新园20号",
    "lat": 39.9447,
    "lng": 116.3494,
    "founded": "1840",
    "description": "曲园酒楼创于1840年（清道光二十年），是北京最早的湘菜馆。以东安子鸡、腊味合蒸等湘菜闻名，曾为毛泽东等湘籍领导人所钟爱，是京城湘菜的代表，中华老字号。",
    "signatureDishes": [
      "东安子鸡",
      "腊味合蒸",
      "剁椒鱼头",
      "红煨鱼翅",
      "麻辣子鸡"
    ]
  },
  {
    "id": "r-285",
    "name": "马凯餐厅",
    "categories": [
      
    ],
    "cuisine": "湘菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区地安门外大街3号",
    "lat": 39.9389,
    "lng": 116.3919,
    "founded": "1953",
    "description": "马凯餐厅创于1953年，是北京著名的湘菜老字号。以东安子鸡、汤泡肚闻名，由京剧大师梅兰芳等名人剪彩开业，是京城湘菜的代表，中华老字号。",
    "signatureDishes": [
      "东安子鸡",
      "汤泡肚",
      "腊味合蒸",
      "红煨鱼翅",
      "麻辣子鸡"
    ]
  },
  {
    "id": "r-286",
    "name": "峨嵋酒家",
    "categories": [
      
    ],
    "cuisine": "川菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区赵登禹路44号",
    "lat": 39.9314,
    "lng": 116.3678,
    "founded": "1950",
    "description": "峨嵋酒家创于1950年，是北京最早的川菜馆。以宫保鸡丁闻名，其宫保鸡丁选用鸡腿肉、花生米，讲究「小荔枝口」，是京城川菜的代表，中华老字号。",
    "signatureDishes": [
      "宫保鸡丁",
      "鱼香肉丝",
      "麻婆豆腐",
      "担担面",
      "夫妻肺片"
    ]
  },
  {
    "id": "r-287",
    "name": "同春园",
    "categories": [
      
    ],
    "cuisine": "苏菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区新街口外大街甲14号",
    "lat": 39.9547,
    "lng": 116.3611,
    "founded": "1930",
    "description": "同春园创于1930年，是北京著名的江苏菜馆老字号。以蟹粉狮子头、煮干丝等淮扬菜闻名，是京城淮扬菜的代表，中华老字号。",
    "signatureDishes": [
      "蟹粉狮子头",
      "煮干丝",
      "松鼠鳜鱼",
      "盐水鸭",
      "水晶肴肉"
    ]
  },
  {
    "id": "r-288",
    "name": "惠丰堂",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市海淀区复兴路33号翠微大厦B座5层",
    "lat": 39.9089,
    "lng": 116.2853,
    "founded": "1858",
    "description": "惠丰堂创于1858年（清咸丰八年），是北京京味老字号饭庄。以烧烩爪尖、糟溜鱼片闻名，曾为京城「八大堂」之一，是京菜的代表，中华老字号。",
    "signatureDishes": [
      "烧烩爪尖",
      "糟溜鱼片",
      "芙蓉鸡片",
      "罗汉大虾",
      "抓炒鱼片"
    ]
  },
  {
    "id": "r-289",
    "name": "聚宝源",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区牛街5号",
    "lat": 39.8842,
    "lng": 116.3639,
    "founded": "1946",
    "description": "聚宝源创于1946年，是北京牛街著名的涮羊肉老字号。以手切鲜羊肉、麻酱烧饼闻名，羊肉选料考究、刀工精细，是京城涮羊肉的代表，中华老字号。",
    "signatureDishes": [
      "手切鲜羊肉",
      "麻酱烧饼",
      "涮羊肉",
      "糖蒜",
      "羊上脑"
    ]
  },
  {
    "id": "r-290",
    "name": "玉华台",
    "categories": [
      
    ],
    "cuisine": "苏菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区德外裕民路23号",
    "lat": 39.9711,
    "lng": 116.3736,
    "founded": "1921",
    "description": "玉华台创于1921年，是北京著名的淮扬菜老字号。以蟹粉狮子头、炝虎尾闻名，曾为京城淮扬菜的代表，开国第一宴的主厨即来自玉华台，中华老字号。",
    "signatureDishes": [
      "蟹粉狮子头",
      "炝虎尾",
      "煮干丝",
      "松鼠鳜鱼",
      "水晶肴肉"
    ]
  },
  {
    "id": "r-291",
    "name": "桂香村",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区西直门内大街132号",
    "lat": 39.9419,
    "lng": 116.3556,
    "founded": "1915",
    "description": "桂香村创于1915年，是北京京味糕点老字号。以玫瑰饼、牛舌饼闻名，与稻香村齐名，是京式糕点的代表，承载着老北京糕点文化，中华老字号。",
    "signatureDishes": [
      "玫瑰饼",
      "牛舌饼",
      "京八件",
      "枣花酥",
      "藤萝饼"
    ]
  },
  {
    "id": "r-292",
    "name": "馄饨侯",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区东四北大街44号",
    "lat": 39.9319,
    "lng": 116.4236,
    "founded": "1949",
    "description": "馄饨侯创于1949年，是北京京味馄饨老字号。以皮薄馅大、汤鲜味美闻名，馄饨讲究「皮薄如纸，馅大如枣」，是京城小吃的代表，中华老字号。",
    "signatureDishes": [
      "鲜肉馄饨",
      "蟹肉馄饨",
      "虾仁馄饨",
      "烧饼",
      "小笼包"
    ]
  },
  {
    "id": "r-293",
    "name": "来今雨轩",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区中山公园内",
    "lat": 39.9089,
    "lng": 116.3974,
    "founded": "1915",
    "description": "来今雨轩创于1915年，位于中山公园内，是京城著名的茶社与饭庄。以冬菜包子闻名，曾为鲁迅、齐白石等文化名人聚会之所，是京味茶点的代表，中华老字号。",
    "signatureDishes": [
      "冬菜包子",
      "肉末烧饼",
      "红楼宴",
      "豆腐脑",
      "茶点"
    ]
  },
  {
    "id": "r-294",
    "name": "新丰楼",
    "categories": [
      
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区白广路6号",
    "lat": 39.8897,
    "lng": 116.3611,
    "founded": "1923",
    "description": "新丰楼创于1923年，是北京著名的山东菜老字号。以烩两鸡丝、烩蝴蝶海参闻名，曾为京城「八大楼」之一，是鲁菜的代表，中华老字号。",
    "signatureDishes": [
      "烩两鸡丝",
      "烩蝴蝶海参",
      "葱烧海参",
      "糟溜鱼片",
      "九转大肠"
    ]
  },
  {
    "id": "r-295",
    "name": "安福楼",
    "categories": [
      
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区王府井大街",
    "lat": 39.9142,
    "lng": 116.4114,
    "founded": "1906",
    "description": "安福楼创于1906年（清光绪三十二年），是北京著名的山东菜老字号。以扒熊掌、烩两鸡丝闻名，曾为京城「八大楼」之一，是鲁菜的代表，中华老字号。",
    "signatureDishes": [
      "扒熊掌",
      "烩两鸡丝",
      "葱烧海参",
      "糟溜鱼片",
      "九转大肠"
    ]
  },
  {
    "id": "r-296",
    "name": "春华楼",
    "categories": [
      
    ],
    "cuisine": "鲁菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区宣武门内大街",
    "lat": 39.8986,
    "lng": 116.3736,
    "founded": "1877",
    "description": "春华楼创于1877年（清光绪三年），是北京著名的山东菜老字号。以油爆双脆、清汤燕菜闻名，曾为京城「八大楼」之一，是鲁菜的代表，中华老字号。",
    "signatureDishes": [
      "油爆双脆",
      "清汤燕菜",
      "葱烧海参",
      "糟溜鱼片",
      "九转大肠"
    ]
  },
  {
    "id": "r-297",
    "name": "致美斋",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区前门大街",
    "lat": 39.8994,
    "lng": 116.3974,
    "founded": "1842",
    "description": "致美斋创于1842年（清道光二十二年），是北京京味老字号饭庄。以四吃活鱼、抓炒鱼片闻名，曾为京城鲁菜与京菜的代表，中华老字号。",
    "signatureDishes": [
      "四吃活鱼",
      "抓炒鱼片",
      "葱烧海参",
      "糟溜鱼片",
      "红烧鱼翅"
    ]
  },
  {
    "id": "r-298",
    "name": "爆肚冯",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区前门大街门框胡同",
    "lat": 39.8994,
    "lng": 116.3974,
    "founded": "1881",
    "heritageItem": "爆肚冯爆肚制作技艺（区级非遗）",
    "description": "爆肚冯创于1881年（清光绪七年），是北京京味小吃老字号。以爆肚闻名，爆肚制作技艺为区级非物质文化遗产，讲究火候与刀工，是京城小吃的代表，中华老字号。",
    "signatureDishes": [
      "爆肚仁",
      "爆肚领",
      "爆散丹",
      "爆肚葫芦",
      "芝麻烧饼"
    ]
  },
  {
    "id": "r-299",
    "name": "隆福寺小吃",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区隆福寺前街1号",
    "lat": 39.9236,
    "lng": 116.4114,
    "founded": "1903",
    "description": "隆福寺小吃创于1903年，是北京京味小吃的集大成者。以豆面糕、豌豆黄闻名，汇集京城各类传统小吃，是老北京小吃文化的代表，中华老字号。",
    "signatureDishes": [
      "豆面糕",
      "豌豆黄",
      "艾窝窝",
      "糖耳朵",
      "焦圈"
    ]
  },
  {
    "id": "r-300",
    "name": "厚德福",
    "categories": [
      
    ],
    "cuisine": "豫菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区德胜门内大街",
    "lat": 39.9447,
    "lng": 116.3689,
    "founded": "1911",
    "description": "厚德福创于1911年，是北京著名的豫菜老字号。以铁锅蛋、糖醋软熘鲤鱼闻名，是京城豫菜的代表，承载着中原饮食文化，中华老字号。",
    "signatureDishes": [
      "铁锅蛋",
      "糖醋软熘鲤鱼",
      "炸紫酥肉",
      "煎扒鲱鱼",
      "扒广肚"
    ]
  },
  {
    "id": "r-301",
    "name": "大顺斋",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市通州区新华大街",
    "lat": 39.9089,
    "lng": 116.6564,
    "founded": "1637",
    "description": "大顺斋创于1637年（明崇祯十年），是北京通州著名的糕点老字号。以糖火烧闻名，糖火烧外酥里软、香甜可口，是京式糕点的代表，承载着通州百年糕点文化，中华老字号。",
    "signatureDishes": [
      "糖火烧",
      "枣花酥",
      "京八件",
      "牛舌饼",
      "藤萝饼"
    ]
  },
  {
    "id": "r-302",
    "name": "大壶春",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区四川中路136号",
    "lat": 31.2381,
    "lng": 121.4853,
    "founded": "1932",
    "heritageItem": "大壶春生煎馒头制作技艺（市级非遗）",
    "description": "大壶春创于1932年，是上海生煎馒头老字号。以生煎馒头闻名，生煎制作技艺为上海市级非物质文化遗产，讲究「清水生煎」，皮薄底脆，是海派点心的代表，中华老字号。",
    "signatureDishes": [
      "生煎馒头",
      "蟹粉生煎",
      "虾仁生煎",
      "鸡蛋线汤",
      "牛肉汤"
    ]
  },
  {
    "id": "r-303",
    "name": "王家沙",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区南京西路805号",
    "lat": 31.2297,
    "lng": 121.4631,
    "founded": "1945",
    "heritageItem": "王家沙本帮点心制作技艺（市级非遗）",
    "description": "王家沙创于1945年，是上海点心老字号。以蟹粉生煎、八宝饭闻名，本帮点心制作技艺为上海市级非物质文化遗产，是海派点心的代表，中华老字号。",
    "signatureDishes": [
      "蟹粉生煎",
      "八宝饭",
      "蟹粉小笼",
      "三鲜小馄饨",
      "蟹粉豆腐"
    ]
  },
  {
    "id": "r-304",
    "name": "凯司令",
    "categories": [
      
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区南京西路1001号",
    "lat": 31.2297,
    "lng": 121.4597,
    "founded": "1928",
    "description": "凯司令创于1928年，是上海西点老字号。以栗子蛋糕、哈斗闻名，融合中西糕点技艺，是海派西点的代表，承载着上海百年西点文化，中华老字号。",
    "signatureDishes": [
      "栗子蛋糕",
      "哈斗",
      "牛利",
      "蛋挞",
      "蝴蝶酥"
    ]
  },
  {
    "id": "r-305",
    "name": "国际饭店",
    "categories": [
      
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区南京西路170号",
    "lat": 31.2336,
    "lng": 121.4750,
    "founded": "1934",
    "description": "国际饭店创于1934年，是上海著名的糕点老字号。以蝴蝶酥闻名，蝴蝶酥酥脆香甜、层次分明，是海派糕点的代表，承载着上海百年糕点文化，中华老字号。",
    "signatureDishes": [
      "蝴蝶酥",
      "杏仁酥",
      "蛋挞",
      "哈斗",
      "牛利"
    ]
  },
  {
    "id": "r-306",
    "name": "泰康食品",
    "categories": [
      
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区南京东路766号",
    "lat": 31.2364,
    "lng": 121.4833,
    "founded": "1914",
    "description": "泰康食品创于1914年，是上海食品老字号。以鲜肉月饼、熏鱼闻名，融合传统与海派风味，是上海食品的代表，承载着百年海派饮食文化，中华老字号。",
    "signatureDishes": [
      "鲜肉月饼",
      "熏鱼",
      "大红肠",
      "蛋挞",
      "蝴蝶酥"
    ]
  },
  {
    "id": "r-307",
    "name": "老大房",
    "categories": [
      
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区南京西路",
    "lat": 31.2297,
    "lng": 121.4631,
    "founded": "1851",
    "description": "老大房创于1851年（清咸丰元年），是上海著名的糕点老字号。以鲜肉月饼闻名，鲜肉月饼皮酥馅鲜，是海派糕点的代表，承载着上海百年糕点文化，中华老字号。",
    "signatureDishes": [
      "鲜肉月饼",
      "蛋挞",
      "蝴蝶酥",
      "杏仁酥",
      "哈斗"
    ]
  },
  {
    "id": "r-308",
    "name": "起士林",
    "categories": [
      
    ],
    "cuisine": "其他",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区浙江路33号",
    "lat": 39.1219,
    "lng": 117.2053,
    "founded": "1901",
    "description": "起士林创于1901年，是天津西餐老字号，由德国人起士林创办。以俄式大菜、黄油鸡卷闻名，是中国最早的西餐厅之一，承载着天津百年西餐文化，中华老字号。",
    "signatureDishes": [
      "黄油鸡卷",
      "红菜汤",
      "罐焖牛肉",
      "俄式大菜",
      "奶油烤鱼"
    ]
  },
  {
    "id": "r-309",
    "name": "大福来",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市红桥区芥园道",
    "lat": 39.1589,
    "lng": 117.1611,
    "founded": "1880",
    "description": "大福来创于1880年（清光绪六年），是天津小吃老字号。以锅巴菜闻名，锅巴菜是天津「四绝」之一，讲究卤汁鲜美、锅巴筋道，是津味小吃的代表，中华老字号。",
    "signatureDishes": [
      "锅巴菜",
      "老豆腐",
      "面茶",
      "卷圈",
      "糖皮果子"
    ]
  },
  {
    "id": "r-310",
    "name": "石头门坎",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区和平路",
    "lat": 39.1219,
    "lng": 117.2053,
    "founded": "1855",
    "description": "石头门坎创于1855年（清咸丰五年），是天津素包老字号。以素包闻名，因店前有一道石头门坎而得名，素包馅料丰富、口味鲜美，是津味小吃的代表，中华老字号。",
    "signatureDishes": [
      "素包",
      "豆沙包",
      "糖三角",
      "芝麻烧饼",
      "小米粥"
    ]
  },
  {
    "id": "r-311",
    "name": "白记",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市红桥区小伙巷",
    "lat": 39.1589,
    "lng": 117.1611,
    "founded": "1890",
    "description": "白记创于1890年（清光绪十六年），是天津清真小吃老字号。以白记饺子闻名，饺子皮薄馅大、鲜香不腻，是津味小吃的代表，中华老字号。",
    "signatureDishes": [
      "牛肉饺子",
      "羊肉饺子",
      "素饺子",
      "烧麦",
      "牛肉饼"
    ]
  },
  {
    "id": "r-312",
    "name": "鸿起顺",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市河西区大沽南路",
    "lat": 39.0833,
    "lng": 117.2236,
    "founded": "1935",
    "description": "鸿起顺创于1935年，是天津清真菜老字号。以红烧牛舌尾、黄焖牛肉闻名，是天津清真菜的代表，中华老字号。",
    "signatureDishes": [
      "红烧牛舌尾",
      "黄焖牛肉",
      "它似蜜",
      "烧羊肉",
      "扒羊肉条"
    ]
  },
  {
    "id": "r-313",
    "name": "天香楼",
    "categories": [
      
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "浙江省杭州市下城区体育场路",
    "lat": 30.2614,
    "lng": 120.1672,
    "founded": "1927",
    "description": "天香楼创于1927年，是杭州著名的杭帮菜老字号。以西湖醋鱼、东坡肉闻名，是杭帮菜的代表，承载着杭州百年饮食文化，中华老字号。",
    "signatureDishes": [
      "西湖醋鱼",
      "东坡肉",
      "龙井虾仁",
      "叫化童鸡",
      "蜜汁火方"
    ]
  },
  {
    "id": "r-314",
    "name": "蛇王满",
    "categories": [
      "百年老店"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市荔湾区桨栏路",
    "lat": 23.1219,
    "lng": 113.2439,
    "founded": "1885",
    "description": "蛇王满创于1885年（清光绪十一年），是广州蛇馔老字号。以龙虎斗、太史蛇羹闻名，蛇馔技艺精湛，是粤菜中蛇馔的代表，承载着岭南饮食文化，中华老字号。",
    "signatureDishes": [
      "龙虎斗",
      "太史蛇羹",
      "蛇肉火锅",
      "三蛇酒",
      "蛇胆陈皮"
    ]
  },
  {
    "id": "r-315",
    "name": "马豫兴",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "豫菜",
    "province": "河南",
    "city": "开封",
    "address": "河南省开封市鼓楼区寺后街",
    "lat": 34.7986,
    "lng": 114.3131,
    "founded": "1820",
    "heritageItem": "马豫兴桶子鸡制作技艺（省级非遗）",
    "description": "马豫兴创于1820年（清嘉庆二十五年），是开封著名的桶子鸡老字号。以桶子鸡闻名，桶子鸡制作技艺为河南省级非物质文化遗产，鸡形如桶、皮脆肉嫩，是豫菜的代表，中华老字号。",
    "signatureDishes": [
      "桶子鸡",
      "烧鸡",
      "道口烧鸡",
      "五香牛肉",
      "熏鱼"
    ]
  },
  {
    "id": "r-316",
    "name": "鸿宴饭庄",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "冀菜",
    "province": "河北",
    "city": "唐山",
    "address": "河北省唐山市路北区新华东道",
    "lat": 39.6306,
    "lng": 118.1804,
    "founded": "1937",
    "heritageItem": "鸿宴饭庄棋子烧饼制作技艺（省级非遗）",
    "description": "鸿宴饭庄创于1937年，是唐山冀菜老字号。以棋子烧饼闻名，棋子烧饼制作技艺为河北省级非物质文化遗产，形如棋子、酥香可口，是冀菜的代表，中华老字号。",
    "signatureDishes": [
      "棋子烧饼",
      "蜂蜜麻糖",
      "郝家烧麦",
      "万里香烧鸡",
      "义盛永熏鸡"
    ]
  },
  {
    "id": "r-317",
    "name": "刘美",
    "categories": [
      "百年老店"
    ],
    "cuisine": "冀菜",
    "province": "河北",
    "city": "唐山",
    "address": "河北省唐山市乐亭县",
    "lat": 39.4256,
    "lng": 118.9003,
    "founded": "1908",
    "description": "刘美创于1908年（清光绪三十四年），是唐山乐亭熟食老字号。以刘美烧鸡闻名，烧鸡选料考究、工艺独特，是冀东熟食的代表，承载着乐亭百年饮食文化，中华老字号。",
    "signatureDishes": [
      "刘美烧鸡",
      "熏鸡",
      "五香牛肉",
      "驴肉",
      "熏鱼"
    ]
  },
  {
    "id": "r-318",
    "name": "老鼠窟",
    "categories": [
      "非遗传承"
    ],
    "cuisine": "晋菜",
    "province": "山西",
    "city": "太原",
    "address": "山西省太原市迎泽区钟楼街",
    "lat": 37.8694,
    "lng": 112.5603,
    "founded": "1937",
    "heritageItem": "老鼠窟元宵制作技艺（省级非遗）",
    "description": "老鼠窟创于1937年，是太原著名的元宵老字号。以桂花元宵闻名，元宵制作技艺为山西省级非物质文化遗产，皮薄馅大、香甜软糯，是晋味小吃的代表，中华老字号。",
    "signatureDishes": [
      "桂花元宵",
      "麻团",
      "油糕",
      "江米酒",
      "醪糟"
    ]
  },
  {
    "id": "r-319",
    "name": "张记",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "西北菜",
    "province": "陕西",
    "city": "咸阳",
    "address": "陕西省咸阳市秦都区",
    "lat": 34.3296,
    "lng": 108.7089,
    "description": "咸阳张记餐饮有限公司是咸阳知名餐饮品牌，以陕西面食与肉夹馍闻名，承载着关中饮食文化，是咸阳市民日常饮食的代表。",
    "signatureDishes": [
      "肉夹馍",
      "羊肉泡馍",
      "臊子面"
    ]
  },
  {
    "id": "r-320",
    "name": "洪长兴",
    "categories": [
      "百年老店"
    ],
    "cuisine": "清真菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区广西北路",
    "lat": 31.2304,
    "lng": 121.4737,
    "founded": "1891",
    "description": "洪长兴创于1891年（清光绪十七年），是上海著名的清真老字号，由马氏回民创办。以涮羊肉闻名，羊肉鲜嫩、蘸料醇香，是上海清真菜的代表，中华老字号。",
    "signatureDishes": [
      "涮羊肉",
      "烤羊肉串",
      "清真牛肉锅贴"
    ]
  },
  {
    "id": "r-321",
    "name": "丰收日",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市浦东新区",
    "lat": 31.2304,
    "lng": 121.4737,
    "founded": "1999",
    "description": "丰收日创于1999年，源自浙江，以东海海鲜与甬菜闻名，是上海知名的浙菜连锁品牌，将宁波菜带入上海，深受食客喜爱。",
    "signatureDishes": [
      "红烧黄鱼",
      "雪菜大汤黄鱼",
      "咸蟹"
    ]
  },
  {
    "id": "r-322",
    "name": "老城隍庙",
    "categories": [
      "百年老店"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区豫园商城",
    "lat": 31.2272,
    "lng": 121.4922,
    "founded": "1862",
    "description": "老城隍庙餐饮依托豫园商城百年历史，汇集上海本帮小吃与点心，南翔小笼、八宝鸭等名点享誉沪上，是上海饮食文化的重要名片。",
    "signatureDishes": [
      "南翔小笼",
      "八宝鸭",
      "蟹壳黄"
    ]
  },
  {
    "id": "r-323",
    "name": "三元楼",
    "categories": [
      "百年老店"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "苏州",
    "address": "江苏省苏州市姑苏区",
    "lat": 31.2989,
    "lng": 120.5853,
    "founded": "1877",
    "description": "三元楼是苏州百年老字号酒楼，以苏帮菜闻名，讲究选料精细、烹制考究，是苏州传统饮食文化的代表之一。",
    "signatureDishes": [
      "松鼠桂鱼",
      "响油鳝糊",
      "樱桃肉"
    ]
  },
  {
    "id": "r-324",
    "name": "石家饭店",
    "categories": [
      "百年老店"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "苏州",
    "address": "江苏省苏州市吴中区木渎",
    "lat": 31.2636,
    "lng": 120.4989,
    "founded": "1756",
    "description": "石家饭店创于清乾隆年间（约1756年），位于苏州木渎，是百年苏帮菜老字号。以鲃肺汤闻名，于右任曾题诗赞颂，是苏帮菜的经典代表。",
    "signatureDishes": [
      "鲃肺汤",
      "三虾豆腐",
      "活炝虾"
    ]
  },
  {
    "id": "r-325",
    "name": "山外山",
    "categories": [
      "百年老店"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "浙江省杭州市西湖区玉泉路",
    "lat": 30.2592,
    "lng": 120.1419,
    "founded": "1903",
    "description": "山外山创于1903年（清光绪二十九年），位于杭州西湖玉泉，与楼外楼、天外天并称杭州三大菜馆。以八宝鱼头闻名，是杭帮菜的代表之一。",
    "signatureDishes": [
      "八宝鱼头",
      "西湖醋鱼",
      "龙井虾仁"
    ]
  },
  {
    "id": "r-326",
    "name": "皇饭儿",
    "categories": [
      "百年老店"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "金华",
    "address": "浙江省金华市婺城区",
    "lat": 29.0784,
    "lng": 119.6472,
    "founded": "1862",
    "description": "皇饭儿是金华百年老字号，相传与乾隆皇帝下江南有关。以金华传统菜闻名，讲究本味与火候，是婺菜的代表品牌。",
    "signatureDishes": [
      "金华火腿煲",
      "胴骨煲",
      "金华肉圆"
    ]
  },
  {
    "id": "r-327",
    "name": "陶然居",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "重庆市九龙坡区",
    "lat": 29.5630,
    "lng": 106.5516,
    "founded": "1995",
    "description": "陶然居创于1995年，是重庆知名川菜连锁品牌，以辣子田螺闻名全国，将传统川菜与江湖菜融合，是中国餐饮百强企业。",
    "signatureDishes": [
      "辣子田螺",
      "芋儿鸡",
      "泡椒凤爪"
    ]
  },
  {
    "id": "r-328",
    "name": "老韩头豆腐串",
    "categories": [
      "百年老店"
    ],
    "cuisine": "东北菜",
    "province": "辽宁",
    "city": "沈阳",
    "address": "辽宁省沈阳市和平区",
    "lat": 41.8057,
    "lng": 123.4315,
    "founded": "1920",
    "description": "老韩头创于1920年代，是沈阳老字号小吃品牌，以豆腐串闻名。豆腐串卤制入味、口感筋道，是沈阳街头小吃的经典代表。",
    "signatureDishes": [
      "卤豆腐串",
      "干豆腐卷",
      "熏干"
    ]
  },
  {
    "id": "r-329",
    "name": "福义兴",
    "categories": [
      "百年老店"
    ],
    "cuisine": "东北菜",
    "province": "黑龙江",
    "city": "哈尔滨",
    "address": "黑龙江省哈尔滨市道外区",
    "lat": 45.8038,
    "lng": 126.5350,
    "founded": "1920",
    "description": "福义兴是哈尔滨百年老字号，以东北传统菜肴与糕点闻名，承载着哈尔滨老道外的饮食记忆，是东北菜的代表品牌之一。",
    "signatureDishes": [
      "锅包肉",
      "酱骨头",
      "老式点心"
    ]
  },
  {
    "id": "r-330",
    "name": "同达",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "东北菜",
    "province": "黑龙江",
    "city": "哈尔滨",
    "address": "黑龙江省哈尔滨市",
    "lat": 45.8038,
    "lng": 126.5350,
    "description": "同达铁锅炖是哈尔滨知名东北菜品牌，以铁锅炖菜闻名，将东北农家炖菜文化发扬光大，是体验东北豪放饮食文化的代表。",
    "signatureDishes": [
      "铁锅炖大鹅",
      "铁锅炖鱼",
      "贴饼子"
    ]
  },
  {
    "id": "r-331",
    "name": "清雅斋",
    "categories": [
      
    ],
    "cuisine": "清真菜",
    "province": "陕西",
    "city": "西安",
    "address": "陕西省西安市新城区",
    "lat": 34.3416,
    "lng": 108.9398,
    "founded": "1934",
    "description": "清雅斋创于1934年，是西安著名的清真老字号饭庄，以涮羊肉与清真菜闻名，承载着西安回民街的饮食文化，是西北清真菜的代表。",
    "signatureDishes": [
      "涮羊肉",
      "烤全羊",
      "清真大盘鸡"
    ]
  },
  {
    "id": "r-332",
    "name": "黄桂稠酒",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "西北菜",
    "province": "陕西",
    "city": "西安",
    "address": "陕西省西安市",
    "lat": 34.3416,
    "lng": 108.9398,
    "founded": "1910",
    "heritageItem": "黄桂稠酒酿造技艺（省级非遗）",
    "description": "黄桂稠酒是西安百年老字号，源于唐代，以黄桂稠酒闻名。酒色乳白、香甜醇厚，李白曾赋诗赞美，是西北传统酿造技艺的代表，中华老字号。",
    "signatureDishes": [
      "黄桂稠酒",
      "黄桂柿子饼",
      "稠酒汤圆"
    ]
  },
  {
    "id": "r-333",
    "name": "白云章",
    "categories": [
      
    ],
    "cuisine": "西北菜",
    "province": "甘肃",
    "city": "兰州",
    "address": "甘肃省兰州市城关区",
    "lat": 36.0611,
    "lng": 103.8343,
    "founded": "1938",
    "description": "白云章创于1938年，是兰州老字号清真餐饮品牌，以牛肉面与清真菜闻名，承载着兰州牛肉面的百年传统，是西北清真饮食的代表。",
    "signatureDishes": [
      "牛肉面",
      "手抓羊肉",
      "酿皮"
    ]
  },
  {
    "id": "r-334",
    "name": "金鼎牛肉面",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "西北菜",
    "province": "甘肃",
    "city": "兰州",
    "address": "甘肃省兰州市七里河区",
    "lat": 36.0611,
    "lng": 103.8343,
    "description": "金鼎牛肉面是兰州知名牛肉面品牌，以正宗兰州牛肉面闻名，讲究「一清二白三红四绿五黄」，是兰州牛肉面文化的代表之一。",
    "signatureDishes": [
      "牛肉面",
      "牛肉拌面",
      "小菜"
    ]
  },
  {
    "id": "r-335",
    "name": "德祥楼",
    "categories": [
      "百年老店"
    ],
    "cuisine": "西北菜",
    "province": "甘肃",
    "city": "兰州",
    "address": "甘肃省兰州市城关区",
    "lat": 36.0611,
    "lng": 103.8343,
    "founded": "1920",
    "description": "德祥楼创于1920年代，是兰州百年老字号清真饭庄，以手抓羊肉与清真菜闻名，食材考究、工艺传统，是兰州清真菜的代表品牌。",
    "signatureDishes": [
      "手抓羊肉",
      "黄焖羊肉",
      "烤全羊"
    ]
  },
  {
    "id": "r-336",
    "name": "老字号悦宾楼",
    "categories": [
      "百年老店"
    ],
    "cuisine": "西北菜",
    "province": "宁夏",
    "city": "银川",
    "address": "宁夏回族自治区银川市兴庆区",
    "lat": 38.4872,
    "lng": 106.2309,
    "founded": "1920",
    "description": "悦宾楼是银川百年老字号饭庄，以西北菜与清真菜闻名，承载着银川饮食文化传统，是宁夏餐饮的代表品牌之一。",
    "signatureDishes": [
      "手抓羊肉",
      "羊杂碎",
      "烩羊肉"
    ]
  },
  {
    "id": "r-337",
    "name": "同盛轩",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "宁夏",
    "city": "银川",
    "address": "宁夏回族自治区银川市兴庆区",
    "lat": 38.4872,
    "lng": 106.2309,
    "description": "同盛轩是银川知名清真饭庄，以宁夏清真菜闻名，选用本地滩羊与特色食材，是体验宁夏清真饮食文化的代表餐厅。",
    "signatureDishes": [
      "清炖羊肉",
      "烩羊杂",
      "馓子"
    ]
  },
  {
    "id": "r-338",
    "name": "塔桥",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "新疆菜",
    "province": "新疆",
    "city": "乌鲁木齐",
    "address": "新疆维吾尔自治区乌鲁木齐市",
    "lat": 43.8256,
    "lng": 87.6168,
    "description": "塔桥餐饮是乌鲁木齐知名新疆菜品牌，以正宗新疆菜与民族特色饮食闻名，大盘鸡、烤肉是其招牌，是新疆饮食文化的代表。",
    "signatureDishes": [
      "大盘鸡",
      "烤羊肉串",
      "手抓饭"
    ]
  },
  {
    "id": "r-339",
    "name": "伊力特宾馆",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "新疆菜",
    "province": "新疆",
    "city": "伊犁",
    "address": "新疆维吾尔自治区伊犁哈萨克自治州",
    "lat": 43.9191,
    "lng": 81.3244,
    "description": "伊力特宾馆是新疆知名餐饮品牌，以新疆特色菜与伊犁河谷食材闻名，将哈萨克族与维吾尔族饮食文化融合，是伊犁地区的代表餐厅。",
    "signatureDishes": [
      "馕包肉",
      "烤全羊",
      "纳仁"
    ]
  },
  {
    "id": "r-340",
    "name": "南园酒家",
    "categories": [
      
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市海珠区",
    "lat": 23.1291,
    "lng": 113.2644,
    "founded": "1928",
    "description": "南园酒家创于1928年，是广州百年老字号粤菜酒家，曾与北园、西园并称广州三大园林酒家。以园林式环境与粤菜闻名，是广州饮食文化的代表。",
    "signatureDishes": [
      "佛跳墙",
      "红烧乳鸽",
      "虾饺"
    ]
  },
  {
    "id": "r-341",
    "name": "皇上皇",
    "categories": [
      
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市荔湾区",
    "lat": 23.1291,
    "lng": 113.2644,
    "founded": "1940",
    "description": "皇上皇创于1940年，是广州百年老字号腊味品牌，以广式腊味闻名，腊肠腊肉选料考究、工艺传统，是广式腊味的代表，中华老字号。",
    "signatureDishes": [
      "广式腊肠",
      "腊肉",
      "腊鸭"
    ]
  },
  {
    "id": "r-342",
    "name": "清平饭店",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市荔湾区清平路",
    "lat": 23.1291,
    "lng": 113.2644,
    "founded": "1985",
    "description": "清平饭店是广州知名粤菜餐厅，以清平鸡闻名，曾创下单日售鸡千只的记录，被誉为「广州第一鸡」，是广州粤菜的代表品牌之一。",
    "signatureDishes": [
      "清平鸡",
      "白切鸡",
      "豉油鸡"
    ]
  },
  {
    "id": "r-343",
    "name": "东江饭店",
    "categories": [
      
    ],
    "cuisine": "客家菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市越秀区",
    "lat": 23.1291,
    "lng": 113.2644,
    "founded": "1946",
    "description": "东江饭店创于1946年，是广州著名的客家菜老字号，以正宗东江菜闻名，盐焗鸡、酿豆腐是其招牌，是客家菜在广州的代表。",
    "signatureDishes": [
      "盐焗鸡",
      "酿豆腐",
      "梅菜扣肉"
    ]
  },
  {
    "id": "r-344",
    "name": "南信牛奶甜品",
    "categories": [
      
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市荔湾区第十甫路",
    "lat": 23.1291,
    "lng": 113.2644,
    "founded": "1934",
    "description": "南信创于1934年，是广州百年老字号甜品店，以双皮奶与姜撞奶闻名，甜品香滑细腻，是广式糖水的代表，承载着西关饮食文化。",
    "signatureDishes": [
      "双皮奶",
      "姜撞奶",
      "凤凰奶糊"
    ]
  },
  {
    "id": "r-345",
    "name": "林林牛杂",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广东省广州市荔湾区",
    "lat": 23.1291,
    "lng": 113.2644,
    "description": "林林牛杂是广州知名小吃品牌，以萝卜牛杂闻名，牛杂软烂入味、汤汁醇厚，是广州街头小吃的代表，深受街坊喜爱。",
    "signatureDishes": [
      "萝卜牛杂",
      "牛腩",
      "牛筋"
    ]
  },
  {
    "id": "r-346",
    "name": "得心酒家",
    "categories": [
      
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "佛山",
    "address": "广东省佛山市禅城区",
    "lat": 23.0218,
    "lng": 113.1219,
    "founded": "1930",
    "description": "得心酒家是佛山百年老字号，以顺德菜与粤菜闻名，烧鹅与顺德鱼生是其招牌，承载着顺德美食之都的饮食传统。",
    "signatureDishes": [
      "烧鹅",
      "顺德鱼生",
      "双皮奶"
    ]
  },
  {
    "id": "r-347",
    "name": "八珍煎饺",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "佛山",
    "address": "广东省佛山市禅城区",
    "lat": 23.0218,
    "lng": 113.1219,
    "description": "八珍是佛山知名小吃品牌，以煎饺闻名，煎饺皮脆馅鲜、底面金黄，是佛山街头小吃的代表，深受当地食客喜爱。",
    "signatureDishes": [
      "煎饺",
      "云吞面",
      "及第粥"
    ]
  },
  {
    "id": "r-348",
    "name": "潮州菜馆",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "潮菜",
    "province": "广东",
    "city": "汕头",
    "address": "广东省汕头市金平区",
    "lat": 23.3535,
    "lng": 116.6820,
    "description": "汕头潮州菜馆是潮汕地区知名餐厅，以正宗潮州菜闻名，卤水、海鲜与工夫茶是其特色，是潮汕饮食文化的代表。",
    "signatureDishes": [
      "卤鹅",
      "潮州牛肉丸",
      "蚝烙"
    ]
  },
  {
    "id": "r-349",
    "name": "春梅里鹅肉店",
    "categories": [
      "百年老店"
    ],
    "cuisine": "潮菜",
    "province": "广东",
    "city": "潮州",
    "address": "广东省潮州市湘桥区",
    "lat": 23.6568,
    "lng": 116.6226,
    "founded": "1920",
    "description": "春梅里是潮州百年老字号，以卤鹅闻名，卤水配方独特、鹅肉鲜嫩，是潮州卤水的代表品牌，承载着潮汕卤味文化。",
    "signatureDishes": [
      "卤鹅",
      "鹅肝",
      "鹅掌"
    ]
  },
  {
    "id": "r-350",
    "name": "石岐佬",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "中山",
    "address": "广东省中山市石岐区",
    "lat": 22.5170,
    "lng": 113.3927,
    "description": "石岐佬是中山知名粤菜品牌，以中山特色菜闻名，石岐乳鸽是其招牌，承载着中山饮食文化传统，深受珠三角食客喜爱。",
    "signatureDishes": [
      "石岐乳鸽",
      "脆肉鲩",
      "芦兜粽"
    ]
  },
  {
    "id": "r-351",
    "name": "咀香园",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "中山",
    "address": "广东省中山市火炬开发区",
    "lat": 22.5170,
    "lng": 113.3927,
    "founded": "1918",
    "heritageItem": "咀香园杏仁饼制作技艺（省级非遗）",
    "description": "咀香园创于1918年，是中山百年老字号，以杏仁饼闻名，杏仁饼制作技艺为广东省级非物质文化遗产，是中山饮食文化的名片，中华老字号。",
    "signatureDishes": [
      "杏仁饼",
      "鸡仔饼",
      "肉松蛋卷"
    ]
  },
  {
    "id": "r-352",
    "name": "海南酒家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "琼菜",
    "province": "海南",
    "city": "海口",
    "address": "海南省海口市美兰区",
    "lat": 20.0440,
    "lng": 110.1990,
    "description": "海南酒家是海口知名琼菜品牌，以海南特色菜闻名，文昌鸡、加积鸭、东山羊、和乐蟹等海南四大名菜是其招牌，是琼菜的代表。",
    "signatureDishes": [
      "文昌鸡",
      "加积鸭",
      "东山羊"
    ]
  },
  {
    "id": "r-353",
    "name": "文昌鸡饭店",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "琼菜",
    "province": "海南",
    "city": "文昌",
    "address": "海南省文昌市文城镇",
    "lat": 19.5436,
    "lng": 110.7536,
    "description": "文昌鸡饭店是文昌知名琼菜餐厅，以正宗文昌鸡闻名，选用本地散养文昌鸡白切，皮黄肉嫩，是海南鸡文化的发源地代表。",
    "signatureDishes": [
      "白切文昌鸡",
      "椰子鸡汤",
      "鸡油饭"
    ]
  },
  {
    "id": "r-354",
    "name": "耳聋伯元宵",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "福州",
    "address": "福建省福州市台江区",
    "lat": 26.0745,
    "lng": 119.2965,
    "founded": "1905",
    "heritageItem": "耳聋伯元宵制作技艺（省级非遗）",
    "description": "耳聋伯元宵创于1905年，是福州百年老字号，以元宵闻名，元宵制作技艺为福建省级非物质文化遗产，皮薄馅大、香甜软糯，是福州小吃的代表。",
    "signatureDishes": [
      "元宵",
      "汤圆",
      "糯米团"
    ]
  },
  {
    "id": "r-355",
    "name": "没牙伯花生汤",
    "categories": [
      
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "福建省厦门市思明区",
    "lat": 24.4798,
    "lng": 118.0894,
    "founded": "1930",
    "description": "没牙伯创于1930年代，是厦门百年老字号甜品店，以花生汤闻名，花生酥烂入口即化，是厦门传统糖水的代表，承载着闽南饮食文化。",
    "signatureDishes": [
      "花生汤",
      "韭菜盒",
      "糯米炸"
    ]
  },
  {
    "id": "r-356",
    "name": "好清香",
    "categories": [
      
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "泉州",
    "address": "福建省泉州市鲤城区",
    "lat": 24.8741,
    "lng": 118.6757,
    "founded": "1940",
    "description": "好清香是泉州百年老字号，以闽南小吃与泉州菜闻名，蚵仔煎、肉粽等是其招牌，承载着泉州古城的饮食文化传统。",
    "signatureDishes": [
      "蚵仔煎",
      "烧肉粽",
      "面线糊"
    ]
  },
  {
    "id": "r-357",
    "name": "吴再添",
    "categories": [
      
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "福建省厦门市思明区",
    "lat": 24.4798,
    "lng": 118.0894,
    "founded": "1940",
    "description": "吴再添创于1940年代，是厦门百年老字号小吃店，以厦门小吃闻名，沙茶面、芋包等是其招牌，是厦门古早味小吃的代表。",
    "signatureDishes": [
      "沙茶面",
      "芋包",
      "油葱粿"
    ]
  },
  {
    "id": "r-358",
    "name": "蓝氏钟楼肉粽",
    "categories": [
      "百年老店"
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "福建省厦门市思明区",
    "lat": 24.4798,
    "lng": 118.0894,
    "founded": "1908",
    "description": "蓝氏钟楼肉粽是厦门百年老字号，以肉粽闻名，粽叶飘香、糯米软糯、馅料丰富，是闽南肉粽的代表品牌，承载着厦门饮食文化。",
    "signatureDishes": [
      "烧肉粽",
      "碱粽",
      "豆沙粽"
    ]
  },
  {
    "id": "r-359",
    "name": "新光酒家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "无锡",
    "address": "江苏省无锡市梁溪区",
    "lat": 31.4912,
    "lng": 120.3119,
    "description": "新光酒家是无锡知名苏菜品牌，以无锡菜闻名，无锡排骨、小笼包是其招牌，讲究甜咸适中、浓油赤酱，是锡菜的代表之一。",
    "signatureDishes": [
      "无锡排骨",
      "小笼包",
      "太湖三白"
    ]
  },
  {
    "id": "r-360",
    "name": "三凤桥",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "无锡",
    "address": "江苏省无锡市梁溪区三凤桥",
    "lat": 31.4912,
    "lng": 120.3119,
    "founded": "1901",
    "heritageItem": "三凤桥肉庄酱排骨制作技艺（省级非遗）",
    "description": "三凤桥创于1901年（清光绪二十七年），是无锡百年老字号肉庄，以无锡酱排骨闻名，酱排骨制作技艺为江苏省级非物质文化遗产，是锡菜的代表，中华老字号。",
    "signatureDishes": [
      "无锡酱排骨",
      "熏鱼",
      "无锡小笼"
    ]
  },
  {
    "id": "r-361",
    "name": "乾生元",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "苏州",
    "address": "江苏省苏州市吴中区木渎",
    "lat": 31.2636,
    "lng": 120.4989,
    "founded": "1786",
    "heritageItem": "乾生元松子枣泥麻饼制作技艺（省级非遗）",
    "description": "乾生元创于1786年（清乾隆五十一年），是苏州百年老字号，以松子枣泥麻饼闻名，麻饼制作技艺为江苏省级非物质文化遗产，是苏式糕点的代表，中华老字号。",
    "signatureDishes": [
      "松子枣泥麻饼",
      "粽子糖",
      "定胜糕"
    ]
  },
  {
    "id": "r-362",
    "name": "孙盛兴",
    "categories": [
      "百年老店"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "苏州",
    "address": "江苏省苏州市姑苏区",
    "lat": 31.2989,
    "lng": 120.5853,
    "founded": "1870",
    "description": "孙盛兴是苏州百年老字号奥灶面馆，以奥灶面闻名，汤头鲜美、面条爽滑，是苏式汤面的代表品牌，承载着苏州面食文化。",
    "signatureDishes": [
      "奥灶面",
      "卤鸭面",
      "爆鱼面"
    ]
  },
  {
    "id": "r-363",
    "name": "又一新",
    "categories": [
      "百年老店"
    ],
    "cuisine": "豫菜",
    "province": "河南",
    "city": "开封",
    "address": "河南省开封市鼓楼区",
    "lat": 34.7972,
    "lng": 114.3081,
    "founded": "1910",
    "description": "又一新创于1910年，是开封百年老字号饭庄，以豫菜闻名，糖醋软熘鲤鱼焙面、煎扒鲭鱼头尾是其招牌，是豫菜的代表品牌，中华老字号。",
    "signatureDishes": [
      "糖醋软熘鲤鱼焙面",
      "煎扒鲭鱼头尾",
      "炸紫酥肉"
    ]
  },
  {
    "id": "r-364",
    "name": "老渝城",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "重庆",
    "city": "重庆",
    "address": "重庆市渝中区",
    "lat": 29.5630,
    "lng": 106.5516,
    "description": "老渝城是重庆知名川菜品牌，以正宗重庆江湖菜闻名，毛血旺、辣子鸡是其招牌，麻辣鲜香，是重庆江湖菜的代表之一。",
    "signatureDishes": [
      "毛血旺",
      "辣子鸡",
      "水煮鱼"
    ]
  },
  {
    "id": "r-365",
    "name": "赖宁白肉",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "四川省成都市青羊区",
    "lat": 30.5728,
    "lng": 104.0668,
    "description": "赖宁白肉是成都知名川菜品牌，以蒜泥白肉闻名，白肉薄如蝉翼、蒜泥鲜香，是成都传统川菜小吃的代表之一。",
    "signatureDishes": [
      "蒜泥白肉",
      "凉拌肉片",
      "红油耳片"
    ]
  },
  {
    "id": "r-366",
    "name": "叶儿粑",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "川菜",
    "province": "四川",
    "city": "宜宾",
    "address": "四川省宜宾市翠屏区",
    "lat": 28.7513,
    "lng": 104.6419,
    "description": "宜宾叶儿粑是当地知名小吃品牌，以叶儿粑闻名，粑叶飘香、馅心咸鲜，是宜宾传统小吃的代表，承载着川南饮食文化。",
    "signatureDishes": [
      "叶儿粑",
      "燃面",
      "竹荪炖鸡"
    ]
  },
  {
    "id": "r-367",
    "name": "宣威火腿",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "滇菜",
    "province": "云南",
    "city": "宣威",
    "address": "云南省曲靖市宣威市",
    "lat": 26.2172,
    "lng": 104.1046,
    "founded": "1909",
    "heritageItem": "宣威火腿制作技艺（国家级非遗）",
    "description": "宣威火腿创于1909年，是云南百年老字号，以宣威火腿闻名，火腿制作技艺为国家级非物质文化遗产，与浙江金华火腿齐名，是滇菜的代表，中华老字号。",
    "signatureDishes": [
      "宣威火腿",
      "火腿月饼",
      "云腿蒸鸡"
    ]
  },
  {
    "id": "r-368",
    "name": "德和罐头",
    "categories": [
      
    ],
    "cuisine": "滇菜",
    "province": "云南",
    "city": "昆明",
    "address": "云南省昆明市官渡区",
    "lat": 25.0389,
    "lng": 102.7183,
    "founded": "1946",
    "description": "德和罐头创于1946年，是昆明百年老字号食品品牌，以罐头食品闻名，红烧牛肉罐头、云腿罐头是其招牌，是云南食品工业的代表，中华老字号。",
    "signatureDishes": [
      "红烧牛肉罐头",
      "云腿罐头",
      "过桥米线"
    ]
  },
  {
    "id": "r-369",
    "name": "过桥园",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "滇菜",
    "province": "云南",
    "city": "昆明",
    "address": "云南省昆明市五华区",
    "lat": 25.0389,
    "lng": 102.7183,
    "description": "过桥园是昆明知名滇菜品牌，以过桥米线闻名，汤底醇厚、配料丰富，是云南过桥米线的代表餐厅之一，深受当地与游客喜爱。",
    "signatureDishes": [
      "过桥米线",
      "小锅米线",
      "汽锅鸡"
    ]
  },
  {
    "id": "r-370",
    "name": "丁义兴",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "黔菜",
    "province": "贵州",
    "city": "贵阳",
    "address": "贵州省贵阳市南明区",
    "lat": 26.6470,
    "lng": 106.6302,
    "description": "丁义兴是贵阳知名黔菜品牌，以贵州特色菜闻名，酸汤鱼、丝娃娃是其招牌，承载着贵州酸辣饮食文化传统。",
    "signatureDishes": [
      "酸汤鱼",
      "丝娃娃",
      "糟辣脆皮鱼"
    ]
  },
  {
    "id": "r-371",
    "name": "丝恋",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "黔菜",
    "province": "贵州",
    "city": "贵阳",
    "address": "贵州省贵阳市云岩区",
    "lat": 26.6470,
    "lng": 106.6302,
    "description": "丝恋是贵阳知名黔菜连锁品牌，以丝娃娃闻名，将传统贵州小吃与现代餐饮结合，是贵阳丝娃娃文化的代表品牌，深受年轻食客喜爱。",
    "signatureDishes": [
      "丝娃娃",
      "折耳根炒腊肉",
      "酸汤鱼"
    ]
  },
  {
    "id": "r-372",
    "name": "但家香酥鸭",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "黔菜",
    "province": "贵州",
    "city": "贵阳",
    "address": "贵州省贵阳市南明区",
    "lat": 26.6470,
    "lng": 106.6302,
    "description": "但家香酥鸭是贵阳知名黔菜品牌，以香酥鸭闻名，鸭肉外酥里嫩、椒香四溢，是贵阳熟食的代表品牌，深受当地食客喜爱。",
    "signatureDishes": [
      "香酥鸭",
      "卤鸭",
      "鸭脖"
    ]
  },
  {
    "id": "r-373",
    "name": "桂林人",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "桂菜",
    "province": "广西",
    "city": "桂林",
    "address": "广西壮族自治区桂林市秀峰区",
    "lat": 25.2736,
    "lng": 110.2907,
    "description": "桂林人是桂林知名桂菜品牌，以桂林特色菜闻名，桂林米粉、啤酒鱼是其招牌，承载着桂林山水间的饮食文化传统。",
    "signatureDishes": [
      "桂林米粉",
      "啤酒鱼",
      "荔浦芋扣肉"
    ]
  },
  {
    "id": "r-374",
    "name": "又益轩",
    "categories": [
      
    ],
    "cuisine": "桂菜",
    "province": "广西",
    "city": "南宁",
    "address": "广西壮族自治区南宁市兴宁区",
    "lat": 22.8170,
    "lng": 108.3669,
    "founded": "1930",
    "description": "又益轩创于1930年代，是南宁百年老字号，以桂菜与南宁小吃闻名，老友粉、八珍粉是其招牌，承载着南宁饮食文化传统。",
    "signatureDishes": [
      "老友粉",
      "八珍粉",
      "生榨米粉"
    ]
  },
  {
    "id": "r-375",
    "name": "南宁肥仔",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "桂菜",
    "province": "广西",
    "city": "南宁",
    "address": "广西壮族自治区南宁市青秀区",
    "lat": 22.8170,
    "lng": 108.3669,
    "description": "南宁肥仔是南宁知名桂菜品牌，以广西特色菜闻名，柠檬鸭、横县鱼生是其招牌，是南宁本地餐饮的代表品牌之一。",
    "signatureDishes": [
      "柠檬鸭",
      "横县鱼生",
      "芋头扣肉"
    ]
  },
  {
    "id": "r-376",
    "name": "玉林泉酒家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "桂菜",
    "province": "广西",
    "city": "玉林",
    "address": "广西壮族自治区玉林市玉州区",
    "lat": 22.6541,
    "lng": 110.1547,
    "description": "玉林泉酒家是玉林知名桂菜品牌，以玉林特色菜闻名，玉林牛巴、牛腩粉是其招牌，承载着桂东南饮食文化传统。",
    "signatureDishes": [
      "玉林牛巴",
      "牛腩粉",
      "白切狗"
    ]
  },
  {
    "id": "r-377",
    "name": "南宁老友粉",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "桂菜",
    "province": "广西",
    "city": "南宁",
    "address": "广西壮族自治区南宁市兴宁区",
    "lat": 22.8170,
    "lng": 108.3669,
    "description": "南宁老友粉是南宁知名小吃品牌，以正宗老友粉闻名，酸笋、豆豉、辣椒与鲜肉爆炒出酸辣鲜香，是南宁早餐与夜宵文化的代表。",
    "signatureDishes": [
      "老友粉",
      "老友炒粉",
      "老友面"
    ]
  },
  {
    "id": "r-378",
    "name": "椰妹",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "琼菜",
    "province": "海南",
    "city": "海口",
    "address": "海南省海口市龙华区",
    "lat": 20.0440,
    "lng": 110.1990,
    "description": "椰妹是海口知名琼菜品牌，以椰子鸡闻名，选用海南文昌鸡与新鲜椰子水炖煮，清甜鲜美，是海南椰子鸡文化的代表品牌。",
    "signatureDishes": [
      "椰子鸡",
      "椰子饭",
      "清补凉"
    ]
  },
  {
    "id": "r-379",
    "name": "同福居",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区",
    "lat": 39.9042,
    "lng": 116.4074,
    "description": "同福居是北京知名京菜品牌，以北京传统菜闻名，烤鸭、爆肚是其招牌，承载着老北京饮食文化传统。",
    "signatureDishes": [
      "北京烤鸭",
      "爆肚",
      "炸酱面"
    ]
  },
  {
    "id": "r-380",
    "name": "西来顺",
    "categories": [
      
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区",
    "lat": 39.9042,
    "lng": 116.4074,
    "founded": "1930",
    "description": "西来顺创于1930年，是北京百年老字号清真饭庄，与东来顺齐名，以清真菜与爆烤闻名，是北京清真菜的代表品牌之一。",
    "signatureDishes": [
      "马莲肉",
      "它似蜜",
      "炸羊尾"
    ]
  },
  {
    "id": "r-381",
    "name": "烤肉刘",
    "categories": [
      "百年老店"
    ],
    "cuisine": "京菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市宣武区",
    "lat": 39.9042,
    "lng": 116.4074,
    "founded": "1910",
    "description": "烤肉刘创于1910年代，是北京百年老字号烤肉饭庄，与烤肉宛、烤肉季并称北京烤肉三大家，以炙子烤肉闻名，是北京烤肉文化的代表。",
    "signatureDishes": [
      "炙子烤肉",
      "烤羊肉",
      "烤牛肉"
    ]
  },
  {
    "id": "r-382",
    "name": "森隆饭庄",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区",
    "lat": 39.0851,
    "lng": 117.1994,
    "founded": "1920",
    "description": "森隆饭庄创于1920年代，是天津百年老字号饭庄，以津菜与鲁菜闻名，蟹黄鱼翅、扒通天鱼翅是其招牌，是天津高档菜的代表品牌。",
    "signatureDishes": [
      "蟹黄鱼翅",
      "扒通天鱼翅",
      "炒青虾仁"
    ]
  },
  {
    "id": "r-383",
    "name": "老仁义",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市红桥区",
    "lat": 39.0851,
    "lng": 117.1994,
    "founded": "1914",
    "description": "老仁义创于1914年，是天津百年老字号清真饭庄，以清真菜闻名，烤羊腿、涮羊肉是其招牌，是天津清真菜的代表品牌，中华老字号。",
    "signatureDishes": [
      "烤羊腿",
      "涮羊肉",
      "红烧舌尾"
    ]
  },
  {
    "id": "r-384",
    "name": "宴宾楼（天津）",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区",
    "lat": 39.0851,
    "lng": 117.1994,
    "founded": "1925",
    "description": "宴宾楼是天津百年老字号饭庄，以津菜与清真菜闻名，是天津老字号餐饮的代表品牌之一，承载着天津饮食文化传统。",
    "signatureDishes": [
      "红烧牛尾",
      "葱烧海参",
      "黄焖牛肉"
    ]
  },
  {
    "id": "r-385",
    "name": "义顺合",
    "categories": [
      "百年老店"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区",
    "lat": 39.0851,
    "lng": 117.1994,
    "founded": "1920",
    "description": "义顺合是天津百年老字号糕点品牌，以传统津式糕点闻名，麻花、糕干是其招牌，承载着天津糕点文化传统，是津门小吃的代表。",
    "signatureDishes": [
      "麻花",
      "糕干",
      "江米条"
    ]
  },
  {
    "id": "r-386",
    "name": "南市食品街",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "津菜",
    "province": "天津",
    "city": "天津",
    "address": "天津市和平区南市食品街",
    "lat": 39.0851,
    "lng": 117.1994,
    "founded": "1984",
    "description": "南市食品街建于1984年，是天津著名美食地标，汇集天津各类老字号与特色小吃，狗不理、耳朵眼、桂发祥等均入驻其中，是天津饮食文化的集中展示窗口。",
    "signatureDishes": [
      "天津三绝",
      "煎饼馃子",
      "锅巴菜"
    ]
  },
  {
    "id": "r-387",
    "name": "老万成",
    "categories": [
      "百年老店"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "济南",
    "address": "山东省济南市历下区",
    "lat": 36.6512,
    "lng": 117.1201,
    "founded": "1920",
    "description": "老万成是济南百年老字号饭庄，以鲁菜闻名，九转大肠、糖醋鲤鱼是其招牌，承载着济南府饮食文化传统，是鲁菜的代表品牌之一。",
    "signatureDishes": [
      "九转大肠",
      "糖醋鲤鱼",
      "油爆双脆"
    ]
  },
  {
    "id": "r-388",
    "name": "聚丰德",
    "categories": [
      
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "济南",
    "address": "山东省济南市市中区",
    "lat": 36.6512,
    "lng": 117.1201,
    "founded": "1947",
    "description": "聚丰德创于1947年，是济南百年老字号鲁菜饭庄，以正宗鲁菜闻名，葱烧海参、糖醋鲤鱼是其招牌，是济南鲁菜的代表品牌之一。",
    "signatureDishes": [
      "葱烧海参",
      "糖醋鲤鱼",
      "九转大肠"
    ]
  },
  {
    "id": "r-389",
    "name": "泰祥",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "青岛",
    "address": "山东省青岛市市南区",
    "lat": 36.0671,
    "lng": 120.3826,
    "description": "泰祥是青岛知名鲁菜品牌，以胶东菜与海鲜闻名，辣炒蛤蜊、鲅鱼水饺是其招牌，承载着青岛海滨饮食文化传统。",
    "signatureDishes": [
      "辣炒蛤蜊",
      "鲅鱼水饺",
      "海鲜拼盘"
    ]
  },
  {
    "id": "r-390",
    "name": "老尹家",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "鲁菜",
    "province": "山东",
    "city": "威海",
    "address": "山东省威海市环翠区",
    "lat": 37.5128,
    "lng": 122.1201,
    "description": "老尹家是威海知名海产品牌，以海参闻名，选用威海海域优质刺参，是胶东海鲜与鲁菜海参文化的代表品牌。",
    "signatureDishes": [
      "葱烧海参",
      "海参汤",
      "鲍鱼"
    ]
  },
  {
    "id": "r-391",
    "name": "清真马家馆",
    "categories": [
      "百年老店"
    ],
    "cuisine": "清真菜",
    "province": "甘肃",
    "city": "兰州",
    "address": "甘肃省兰州市城关区",
    "lat": 36.0611,
    "lng": 103.8343,
    "founded": "1910",
    "description": "清真马家馆创于1910年代，是兰州百年老字号清真饭庄，以手抓羊肉与清真菜闻名，承载着兰州回民饮食文化传统，是西北清真菜的代表。",
    "signatureDishes": [
      "手抓羊肉",
      "黄焖羊肉",
      "羊肉泡馍"
    ]
  },
  {
    "id": "r-392",
    "name": "义顺源",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "西北菜",
    "province": "青海",
    "city": "西宁",
    "address": "青海省西宁市城中区",
    "lat": 36.6171,
    "lng": 101.7782,
    "description": "义顺源是西宁知名西北菜品牌，以青海特色菜闻名，手抓羊肉、酿皮是其招牌，承载着青藏高原饮食文化传统。",
    "signatureDishes": [
      "手抓羊肉",
      "酿皮",
      "青海土火锅"
    ]
  },
  {
    "id": "r-393",
    "name": "同仁轩",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "宁夏",
    "city": "银川",
    "address": "宁夏回族自治区银川市兴庆区",
    "lat": 38.4872,
    "lng": 106.2309,
    "description": "同仁轩是银川知名清真饭庄，以宁夏清真菜闻名，选用本地滩羊与特色食材，是体验宁夏清真饮食文化的代表餐厅之一。",
    "signatureDishes": [
      "清炖滩羊肉",
      "羊杂碎",
      "烩肉"
    ]
  },
  {
    "id": "r-394",
    "name": "凯旋门",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "新疆菜",
    "province": "新疆",
    "city": "乌鲁木齐",
    "address": "新疆维吾尔自治区乌鲁木齐市天山区",
    "lat": 43.8256,
    "lng": 87.6168,
    "description": "凯旋门大饭店是乌鲁木齐知名新疆菜品牌，以正宗新疆菜与民族特色饮食闻名，烤全羊、手抓饭是其招牌，是新疆高档餐饮的代表。",
    "signatureDishes": [
      "烤全羊",
      "手抓饭",
      "大盘鸡"
    ]
  },
  {
    "id": "r-395",
    "name": "新疆第一盘",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "新疆菜",
    "province": "新疆",
    "city": "乌鲁木齐",
    "address": "新疆维吾尔自治区乌鲁木齐市水磨沟区",
    "lat": 43.8256,
    "lng": 87.6168,
    "description": "新疆第一盘是乌鲁木齐知名新疆菜品牌，以超大盘鸡闻名，份量十足、味道地道，是体验新疆豪放饮食文化的代表餐厅。",
    "signatureDishes": [
      "大盘鸡",
      "烤羊肉串",
      "手抓饭"
    ]
  },
  {
    "id": "r-396",
    "name": "红泥",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "浙江省杭州市西湖区",
    "lat": 30.2741,
    "lng": 120.1551,
    "description": "红泥是杭州知名杭帮菜品牌，以「红泥小酌」闻名，将传统杭帮菜与现代餐饮结合，是杭州新派杭帮菜的代表品牌之一。",
    "signatureDishes": [
      "东坡肉",
      "西湖醋鱼",
      "龙井虾仁"
    ]
  },
  {
    "id": "r-397",
    "name": "天外天",
    "categories": [
      "百年老店"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "浙江省杭州市西湖区灵隐",
    "lat": 30.2417,
    "lng": 120.1000,
    "founded": "1910",
    "description": "天外天创于1910年，位于杭州灵隐，与楼外楼、山外山并称杭州三大菜馆。以西湖醋鱼、龙井虾仁闻名，是杭帮菜的代表之一。",
    "signatureDishes": [
      "西湖醋鱼",
      "龙井虾仁",
      "叫化鸡"
    ]
  },
  {
    "id": "r-398",
    "name": "老兴鲜",
    "categories": [
      "百年老店"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "宁波",
    "address": "浙江省宁波市海曙区",
    "lat": 29.8683,
    "lng": 121.5440,
    "founded": "1920",
    "description": "老兴鲜是宁波百年老字号酒楼，以甬帮菜闻名，雪菜大汤黄鱼、红膏炝蟹是其招牌，承载着宁波海滨饮食文化传统。",
    "signatureDishes": [
      "雪菜大汤黄鱼",
      "红膏炝蟹",
      "宁波汤圆"
    ]
  },
  {
    "id": "r-399",
    "name": "绿杨村",
    "categories": [
      "百年老店"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "扬州",
    "address": "江苏省扬州市广陵区",
    "lat": 32.3946,
    "lng": 119.4128,
    "founded": "1900",
    "description": "绿杨村是扬州百年老字号酒家，以淮扬菜闻名，蟹粉狮子头、大煮干丝是其招牌，承载着扬州饮食文化传统，是淮扬菜的代表品牌之一。",
    "signatureDishes": [
      "蟹粉狮子头",
      "大煮干丝",
      "三套鸭"
    ]
  },
  {
    "id": "r-400",
    "name": "共和春",
    "categories": [
      
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "淮安",
    "address": "江苏省淮安市清江浦区",
    "lat": 33.5097,
    "lng": 119.0218,
    "founded": "1930",
    "description": "共和春是淮安百年老字号酒楼，以淮扬菜闻名，长鱼面、软兜长鱼是其招牌，承载着淮安淮扬菜饮食文化传统。",
    "signatureDishes": [
      "软兜长鱼",
      "长鱼面",
      "开洋蒲菜"
    ]
  },
  {
    "id": "r-401",
    "name": "老西门",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区老西门",
    "lat": 31.2272,
    "lng": 121.4844,
    "description": "老西门饭店是上海知名本帮菜品牌，以上海本帮菜闻名，红烧肉、油爆虾是其招牌，承载着老上海城厢饮食文化传统。",
    "signatureDishes": [
      "本帮红烧肉",
      "油爆虾",
      "腌笃鲜"
    ]
  },
  {
    "id": "r-402",
    "name": "老二位",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "苏州",
    "address": "江苏省苏州市姑苏区",
    "lat": 31.2989,
    "lng": 120.5853,
    "description": "老二位是苏州知名苏帮菜品牌，以苏州传统菜闻名，松鼠桂鱼、响油鳝糊是其招牌，承载着苏州饮食文化传统。",
    "signatureDishes": [
      "松鼠桂鱼",
      "响油鳝糊",
      "母油船鸭"
    ]
  },
  {
    "id": "r-403",
    "name": "宴宾楼（南京）",
    "categories": [
      "百年老店"
    ],
    "cuisine": "苏菜",
    "province": "江苏",
    "city": "南京",
    "address": "江苏省南京市秦淮区",
    "lat": 32.0603,
    "lng": 118.7969,
    "founded": "1920",
    "description": "南京宴宾楼是南京百年老字号饭庄，以京苏大菜（金陵菜）闻名，炖菜生、美人肝是其招牌，承载着南京饮食文化传统。",
    "signatureDishes": [
      "炖菜生",
      "美人肝",
      "凤尾虾"
    ]
  },
  {
    "id": "r-404",
    "name": "安乐园",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "本帮菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2304,
    "lng": 121.4737,
    "description": "安乐园是上海知名本帮菜品牌，以上海菜与点心闻名，小笼包、生煎是其招牌，承载着老上海饮食文化传统。",
    "signatureDishes": [
      "小笼包",
      "生煎",
      "三鲜小馄饨"
    ]
  },
  {
    "id": "r-405",
    "name": "美珍香",
    "categories": [
      
    ],
    "cuisine": "闽菜",
    "province": "福建",
    "city": "厦门",
    "address": "福建省厦门市思明区",
    "lat": 24.4798,
    "lng": 118.0894,
    "founded": "1933",
    "description": "美珍香创于1933年，是厦门百年老字号肉干品牌，以猪肉脯与肉松闻名，产品香酥可口，是闽南肉制品的代表品牌，中华老字号。",
    "signatureDishes": [
      "猪肉脯",
      "肉松",
      "肉干"
    ]
  },
  {
    "id": "r-406",
    "name": "吴山酥油饼",
    "categories": [
      "百年老店",
      "非遗传承"
    ],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "浙江省杭州市上城区吴山",
    "lat": 30.2417,
    "lng": 120.1694,
    "founded": "1900",
    "heritageItem": "吴山酥油饼制作技艺（省级非遗）",
    "description": "吴山酥油饼是杭州百年老字号小吃，源于宋代，以酥油饼闻名，酥油饼制作技艺为浙江省级非物质文化遗产，层层酥脆、香甜可口，是杭帮小吃的代表。",
    "signatureDishes": [
      "酥油饼",
      "葱包桧",
      "定胜糕"
    ]
  },
  {
    "id": "r-407",
    "name": "九如斋",
    "categories": [
      "百年老店"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "湖南省长沙市芙蓉区",
    "lat": 28.2278,
    "lng": 112.9388,
    "founded": "1915",
    "description": "九如斋创于1915年，是长沙百年老字号食品品牌，以湘式糕点与腊味闻名，承载着长沙饮食文化传统，是湘菜老字号的代表，中华老字号。",
    "signatureDishes": [
      "湘式月饼",
      "腊味",
      "菌油"
    ]
  },
  {
    "id": "r-408",
    "name": "德园",
    "categories": [
      "百年老店"
    ],
    "cuisine": "湘菜",
    "province": "湖南",
    "city": "长沙",
    "address": "湖南省长沙市天心区",
    "lat": 28.2278,
    "lng": 112.9388,
    "founded": "1875",
    "description": "德园创于1875年（清光绪元年），是长沙百年老字号包子铺，以德园包子闻名，包子皮薄馅大、鲜香多汁，是长沙早点的代表，中华老字号。",
    "signatureDishes": [
      "德园包子",
      "银丝卷",
      "烧麦"
    ]
  },
  {
    "id": "r-409",
    "name": "曹祥泰",
    "categories": [
      "百年老店"
    ],
    "cuisine": "鄂菜",
    "province": "湖北",
    "city": "武汉",
    "address": "湖北省武汉市武昌区",
    "lat": 30.5928,
    "lng": 114.3055,
    "founded": "1884",
    "description": "曹祥泰创于1884年（清光绪十年），是武汉百年老字号杂货与糕点品牌，以绿豆糕、芝麻糕闻名，承载着武汉饮食文化传统，是汉味糕点的代表，中华老字号。",
    "signatureDishes": [
      "绿豆糕",
      "芝麻糕",
      "杂糖"
    ]
  },
  {
    "id": "r-410",
    "name": "一得阁饭庄",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "晋菜",
    "province": "山西",
    "city": "太原",
    "address": "山西省太原市迎泽区",
    "lat": 37.8706,
    "lng": 112.5489,
    "description": "一得阁饭庄是太原知名晋菜品牌，以山西传统菜闻名，过油肉、糖醋鱼是其招牌，承载着三晋饮食文化传统。",
    "signatureDishes": [
      "过油肉",
      "糖醋鱼",
      "刀削面"
    ]
  },
  {
    "id": "r-411",
    "name": "清真大观园",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "清真菜",
    "province": "青海",
    "city": "西宁",
    "address": "青海省西宁市城东区",
    "lat": 36.6171,
    "lng": 101.7782,
    "description": "清真大观园是西宁知名清真饭店，以青海清真菜闻名，手抓羊肉、面片是其招牌，承载着青藏高原清真饮食文化传统。",
    "signatureDishes": [
      "手抓羊肉",
      "面片",
      "酿皮"
    ]
  },
  {
    "id": "r-412",
    "name": "新疆楼兰宾馆",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "新疆菜",
    "province": "新疆",
    "city": "巴音郭楞",
    "address": "新疆维吾尔自治区巴音郭楞蒙古自治州若羌县",
    "lat": 39.0230,
    "lng": 88.1670,
    "description": "新疆楼兰宾馆是新疆知名餐饮品牌，以新疆特色菜与楼兰文化为主题闻名，烤全羊、手抓饭是其招牌，是体验新疆饮食文化的代表餐厅。",
    "signatureDishes": [
      "烤全羊",
      "手抓饭",
      "烤包子"
    ]
  },
  {
    "id": "r-413",
    "name": "老昌春饼",
    "categories": [
      "知名餐厅"
    ],
    "cuisine": "东北菜",
    "province": "黑龙江",
    "city": "哈尔滨",
    "address": "黑龙江省哈尔滨市南岗区",
    "lat": 45.8038,
    "lng": 126.5350,
    "founded": "1993",
    "description": "老昌春饼创于1993年，是哈尔滨知名东北菜连锁品牌，以春饼闻名，饼薄如纸、配菜丰富，是哈尔滨春饼文化的代表品牌，深受东北食客喜爱。",
    "signatureDishes": [
      "春饼",
      "炒合菜",
      "酱肉丝"
    ]
  },
  {
    "id": "new-r-2026-1",
    "name": "荣袍",
    "categories": ["米其林一星", "黑珍珠一钻"],
    "cuisine": "川菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区",
    "lat": 39.9058,
    "lng": 116.3682,
    "stars": 1,
    "diamonds": 1,
    "description": "荣袍以宜宾菜为特色，2026年新获米其林一星并上榜黑珍珠一钻，主打川菜中独具一格的宜宾风味，将川南地方菜系提升至高端餐饮水准。",
    "signatureDishes": ["宜宾燃面", "李庄白肉", "竹荪肝膏汤"]
  },
  {
    "id": "new-r-2026-2",
    "name": "家全七福（北京）",
    "categories": ["米其林一星"],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区建国门外大街",
    "lat": 39.9087,
    "lng": 116.4568,
    "stars": 1,
    "description": "家全七福源自香港，2026年北京新获米其林一星，专注传统粤菜，以鲍参翅肚等高档食材闻名，坚持传统粤菜工艺。",
    "signatureDishes": ["鲍汁花胶", "蜜汁叉烧", "红烧大鲍翅"]
  },
  {
    "id": "new-r-2026-3",
    "name": "潮上潮（西城）",
    "categories": ["米其林一星"],
    "cuisine": "潮菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市西城区金融街",
    "lat": 39.9142,
    "lng": 116.3582,
    "stars": 1,
    "description": "潮上潮西城店2026年新获米其林一星，延续潮上潮品牌的潮州菜精髓，以海鲜和功夫菜见长，是北京潮州菜的重要代表。",
    "signatureDishes": ["松茸鸽吞燕", "潮州冻蟹", "卤水鹅肝"]
  },
  {
    "id": "new-r-2026-4",
    "name": "京.YUZU",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区三里屯",
    "lat": 39.9332,
    "lng": 116.4552,
    "diamonds": 1,
    "description": "京.YUZU 2026年新上榜黑珍珠一钻，以日本料理为特色，融合柚子等柑橘元素，呈现精致而清新的日式用餐体验。",
    "signatureDishes": ["柚子寿司", "刺身拼盘", "柚子甜品"]
  },
  {
    "id": "new-r-2026-5",
    "name": "淮香国色",
    "categories": ["黑珍珠一钻"],
    "cuisine": "苏菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市东城区",
    "lat": 39.9248,
    "lng": 116.4112,
    "diamonds": 1,
    "description": "淮香国色2026年新上榜黑珍珠一钻，以淮扬菜为根基，讲究刀工与火候，将江南饮食的温婉细腻呈现于京城餐桌。",
    "signatureDishes": ["清炖狮子头", "大煮干丝", "松鼠鳜鱼"]
  },
  {
    "id": "new-r-2026-6",
    "name": "鮨膳",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区亮马桥",
    "lat": 39.9482,
    "lng": 116.4622,
    "diamonds": 1,
    "description": "鮨膳2026年新上榜黑珍珠一钻，是北京顶级寿司餐厅，由日本师傅主理江户前寿司，食材新鲜空运，技艺精湛。",
    "signatureDishes": ["大トロ寿司", "海胆寿司", "穴子寿司"]
  },
  {
    "id": "new-r-2026-7",
    "name": "檐庭",
    "categories": ["黑珍珠一钻"],
    "cuisine": "粤菜",
    "province": "北京",
    "city": "北京",
    "address": "北京市朝阳区",
    "lat": 39.9182,
    "lng": 116.4622,
    "diamonds": 1,
    "description": "檐庭2026年新上榜黑珍珠一钻，以精致粤菜为主，在传统粤菜基础上融入现代审美，环境雅致，是北京高端粤菜新锐。",
    "signatureDishes": ["蜜汁叉烧", "脆皮烧肉", "龙虾饺"]
  },
  {
    "id": "new-r-2026-8",
    "name": "Fabula",
    "categories": ["米其林一星"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2304,
    "lng": 121.4737,
    "stars": 1,
    "description": "Fabula 2026年新获米其林一星，以创意西餐为主，主厨将个人故事融入菜品，呈现精致且富有叙事性的用餐体验。",
    "signatureDishes": ["创意前菜", "主厨招牌主菜", "甜品拼盘"]
  },
  {
    "id": "new-r-2026-9",
    "name": "三月醉淮扬",
    "categories": ["米其林一星"],
    "cuisine": "淮扬菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区",
    "lat": 31.2288,
    "lng": 121.4488,
    "stars": 1,
    "description": "三月醉淮扬2026年新获米其林一星，主打精致淮扬菜，以时令食材和传统技法呈现江南风味，菜品清新雅致。",
    "signatureDishes": ["清炖蟹粉狮子头", "文思豆腐", "大煮干丝"]
  },
  {
    "id": "new-r-2026-10",
    "name": "Vivant by Johnny Pham",
    "categories": ["米其林一星"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市徐汇区",
    "lat": 31.1987,
    "lng": 121.4378,
    "stars": 1,
    "description": "Vivant by Johnny Pham 2026年新获米其林一星，以融合亚洲风味的现代料理著称，主厨Johnny Pham曾在多家世界顶级餐厅任职，菜品创意十足。",
    "signatureDishes": ["融合前菜", "招牌主菜", "创意甜品"]
  },
  {
    "id": "new-r-2026-11",
    "name": "1929 by Guillaume Galliot",
    "categories": ["米其林一星"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2354,
    "lng": 121.4802,
    "stars": 1,
    "description": "1929 by Guillaume Galliot 2026年新获米其林一星，由澳门三星名厨Guillaume Galliot主理，呈现经典法式料理，以精湛技艺和顶级食材著称。",
    "signatureDishes": ["法式鹅肝", "龙虾料理", "舒芙蕾"]
  },
  {
    "id": "new-r-2026-12",
    "name": "徽季荣派徽菜",
    "categories": ["米其林一星"],
    "cuisine": "徽菜",
    "province": "上海",
    "city": "上海",
    "address": "上海市浦东新区",
    "lat": 31.2359,
    "lng": 121.5054,
    "stars": 1,
    "description": "徽季荣派徽菜2026年新获米其林一星，以正宗徽菜为主打，将安徽地方风味提升至高端餐饮水准，菜品醇厚浓郁。",
    "signatureDishes": ["臭鳜鱼", "毛豆腐", "徽州一品锅"]
  },
  {
    "id": "new-r-2026-13",
    "name": "福廬",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市长宁区",
    "lat": 31.2203,
    "lng": 121.4158,
    "diamonds": 1,
    "description": "福廬2026年新上榜黑珍珠一钻，以精致融合料理为特色，环境雅致，注重食材品质与用餐体验。",
    "signatureDishes": ["招牌前菜", "主厨推荐", "甜品"]
  },
  {
    "id": "new-r-2026-14",
    "name": "晟永興外滩店",
    "categories": ["黑珍珠一钻"],
    "cuisine": "烤鸭",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区外滩",
    "lat": 31.2400,
    "lng": 121.4908,
    "diamonds": 1,
    "description": "晟永興外滩店2026年新上榜黑珍珠一钻，以烤鸭为招牌，外滩分店在传统烤鸭基础上融入现代餐饮体验，环境可赏外滩美景。",
    "signatureDishes": ["烤鸭", "鱼子酱烤鸭", "鸭架汤"]
  },
  {
    "id": "new-r-2026-15",
    "name": "鐵屋",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市静安区",
    "lat": 31.2268,
    "lng": 121.4468,
    "diamonds": 1,
    "description": "鐵屋2026年新上榜黑珍珠一钻，主打日式铁板烧，以顶级和牛和海鲜铁板烧著称，食材新鲜，技艺精湛。",
    "signatureDishes": ["和牛铁板烧", "铁板龙虾", "鹅肝铁板烧"]
  },
  {
    "id": "new-r-2026-16",
    "name": "NABI",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市徐汇区",
    "lat": 31.2068,
    "lng": 121.4398,
    "diamonds": 1,
    "description": "NABI 2026年新上榜黑珍珠一钻，以现代韩式料理为特色，将韩国传统风味与现代烹饪技法结合，呈现精致的韩式Fine Dining体验。",
    "signatureDishes": ["韩牛料理", "创意韩式前菜", "参鸡汤"]
  },
  {
    "id": "new-r-2026-17",
    "name": "凪",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "上海",
    "city": "上海",
    "address": "上海市黄浦区",
    "lat": 31.2228,
    "lng": 121.4718,
    "diamonds": 1,
    "description": "凪2026年新上榜黑珍珠一钻，以日式割烹料理为主，注重食材本味与季节感，环境静谧，提供沉浸式用餐体验。",
    "signatureDishes": ["刺身拼盘", "煮物", "季节限定套餐"]
  },
  {
    "id": "new-r-2026-18",
    "name": "梦都会",
    "categories": ["黑珍珠一钻"],
    "cuisine": "徽菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市建邺区",
    "lat": 32.0036,
    "lng": 118.7318,
    "diamonds": 1,
    "description": "梦都会2026年新上榜黑珍珠一钻，主打徽菜与淮扬菜融合，以精致环境和传统风味著称，是南京高端餐饮新地标。",
    "signatureDishes": ["徽州臭鳜鱼", "清炖狮子头", "徽式红烧肉"]
  },
  {
    "id": "new-r-2026-19",
    "name": "品宁府",
    "categories": ["黑珍珠一钻"],
    "cuisine": "淮扬菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市玄武区",
    "lat": 32.0608,
    "lng": 118.7969,
    "diamonds": 1,
    "description": "品宁府2026年新上榜黑珍珠一钻，以精致淮扬菜为主，注重食材品质和传统技法，是南京高端淮扬菜的代表。",
    "signatureDishes": ["大煮干丝", "清炖蟹粉狮子头", "松鼠桂鱼"]
  },
  {
    "id": "new-r-2026-20",
    "name": "喜鼎家宴",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "江苏",
    "city": "南京",
    "address": "南京市鼓楼区",
    "lat": 32.0603,
    "lng": 118.7698,
    "diamonds": 1,
    "description": "喜鼎家宴2026年新上榜黑珍珠一钻，以精致中式家宴为概念，主打高端私宴体验，菜品精致且富有仪式感。",
    "signatureDishes": ["家宴套餐", "招牌前菜", "甜品"]
  },
  {
    "id": "new-r-2026-21",
    "name": "橙园",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "江苏",
    "city": "苏州",
    "address": "苏州市姑苏区",
    "lat": 31.3168,
    "lng": 120.6258,
    "diamonds": 1,
    "description": "橙园2026年新上榜黑珍珠一钻，以精致江南创意料理著称，环境雅致，融合苏州园林美学与美食体验。",
    "signatureDishes": ["创意前菜", "主厨推荐", "时令甜品"]
  },
  {
    "id": "new-r-2026-22",
    "name": "龙吟山房",
    "categories": ["黑珍珠二钻"],
    "cuisine": "淮扬菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市江宁区青龙山庄",
    "lat": 31.9523,
    "lng": 118.8028,
    "diamonds": 2,
    "description": "龙吟山房2026年由黑珍珠一钻升至二钻，以山林意境为特色的高端淮扬菜餐厅，坐落于青龙山庄，环境清幽，菜品精致雅致，是南京精致餐饮的代表。",
    "signatureDishes": ["清炖狮子头", "文思豆腐羹", "蟹粉豆腐"]
  },
  {
    "id": "new-r-2026-23",
    "name": "席作·福建会馆",
    "categories": ["黑珍珠一钻"],
    "cuisine": "闽菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市上城区",
    "lat": 30.2441,
    "lng": 120.1702,
    "diamonds": 1,
    "description": "席作·福建会馆2026年新上榜黑珍珠一钻，以正宗闽菜为主打，突出福建菜鲜香醇厚的特色，是杭州闽菜新标杆。",
    "signatureDishes": ["佛跳墙", "荔枝肉", "海蛎煎"]
  },
  {
    "id": "new-r-2026-24",
    "name": "西湖一号",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2408,
    "lng": 120.1418,
    "diamonds": 1,
    "description": "西湖一号2026年新上榜黑珍珠一钻，位于西湖畔的高端浙菜餐厅，以湖景用餐环境和精致浙菜著称，是杭州高端餐饮代表。",
    "signatureDishes": ["西湖醋鱼", "龙井虾仁", "东坡肉"]
  },
  {
    "id": "new-r-2026-25",
    "name": "金海华·平江颂",
    "categories": ["黑珍珠一钻"],
    "cuisine": "淮扬菜",
    "province": "江苏",
    "city": "苏州",
    "address": "苏州市姑苏区平江路",
    "lat": 31.3198,
    "lng": 120.6328,
    "diamonds": 1,
    "description": "金海华·平江颂2026年新上榜黑珍珠一钻，位于平江路历史街区，以苏州园林式用餐环境和精致淮扬菜著称，充满江南韵味。",
    "signatureDishes": ["松鼠桂鱼", "碧螺虾仁", "樱桃肉"]
  },
  {
    "id": "new-r-2026-26",
    "name": "悦山府8号",
    "categories": ["黑珍珠一钻"],
    "cuisine": "淮扬菜",
    "province": "江苏",
    "city": "南京",
    "address": "南京市秦淮区",
    "lat": 32.0148,
    "lng": 118.7928,
    "diamonds": 1,
    "description": "悦山府8号2026年新上榜黑珍珠一钻，以精致淮扬私宴为特色，环境雅致私密，菜品注重食材本味与烹饪技艺。",
    "signatureDishes": ["清炖蟹粉狮子头", "大煮干丝", "文思豆腐"]
  },
  {
    "id": "new-r-2026-27",
    "name": "刻龙壹号",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "台州",
    "address": "台州市椒江区",
    "lat": 28.6588,
    "lng": 121.4428,
    "diamonds": 1,
    "description": "刻龙壹号2026年新上榜黑珍珠一钻，以台州海鲜为主打，注重食材新鲜度和烹饪火候，是台州高端餐饮的代表。",
    "signatureDishes": ["家烧黄鱼", "白灼虾", "海鲜拼盘"]
  },
  {
    "id": "new-r-2026-28",
    "name": "老扁酒家",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "台州",
    "address": "台州市黄岩区",
    "lat": 28.6498,
    "lng": 121.2618,
    "diamonds": 1,
    "description": "老扁酒家2026年新上榜黑珍珠一钻，以台州地方菜闻名，老字号酒家，菜品地道，价格亲民，是台州本地人推荐的老牌餐厅。",
    "signatureDishes": ["老扁卤鸭", "台州麦虾", "家烧杂鱼"]
  },
  {
    "id": "new-r-2026-29",
    "name": "新荣记(椒江)",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "台州",
    "address": "台州市椒江区",
    "lat": 28.6608,
    "lng": 121.4418,
    "diamonds": 1,
    "description": "新荣记(椒江)2026年新上榜黑珍珠一钻，新荣记品牌发源地门店，以台州海鲜和精致浙菜著称，是台州高端餐饮标杆。",
    "signatureDishes": ["家烧大黄鱼", "沙蒜豆面", "黄金脆带鱼"]
  },
  {
    "id": "new-r-2026-30",
    "name": "新荣记(临海)",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "台州",
    "address": "台州市临海市",
    "lat": 28.8568,
    "lng": 121.1318,
    "diamonds": 1,
    "description": "新荣记(临海)2026年新上榜黑珍珠一钻，新荣记品牌在临海的门店，传承台州菜精髓，以东海海鲜和精致烹饪闻名。",
    "signatureDishes": ["家烧黄鱼", "沙蒜豆面", "蜜汁红薯"]
  },
  {
    "id": "new-r-2026-31",
    "name": "新荣记灵湖店",
    "categories": ["黑珍珠一钻"],
    "cuisine": "浙菜",
    "province": "浙江",
    "city": "台州",
    "address": "台州市临海市灵湖",
    "lat": 28.8638,
    "lng": 121.1388,
    "diamonds": 1,
    "description": "新荣记灵湖店2026年新上榜黑珍珠一钻，位于灵湖畔的新荣记旗舰级门店，环境优美，以台州海鲜和精致浙菜为特色。",
    "signatureDishes": ["家烧大黄鱼", "沙蒜烧豆面", "黄金带鱼"]
  },
  {
    "id": "new-r-2026-32",
    "name": "赏鲜悦木牛肉火锅",
    "categories": ["黑珍珠一钻"],
    "cuisine": "火锅",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市南山区",
    "lat": 22.5332,
    "lng": 113.9508,
    "diamonds": 1,
    "description": "赏鲜悦木牛肉火锅2026年新上榜黑珍珠一钻，以高端牛肉火锅著称，精选优质牛肉，汤底鲜美，是深圳火锅新标杆。",
    "signatureDishes": ["鲜切牛肉", "牛骨汤底", "手打牛肉丸"]
  },
  {
    "id": "new-r-2026-33",
    "name": "拾贰·懷石Omakase",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市福田区",
    "lat": 22.5438,
    "lng": 114.0578,
    "diamonds": 1,
    "description": "拾贰·懷石Omakase 2026年新上榜黑珍珠一钻，以日式怀石料理Omakase为主，由经验丰富的日料师傅主理，食材新鲜，技艺精湛。",
    "signatureDishes": ["Omakase套餐", "季节刺身", "和牛料理"]
  },
  {
    "id": "new-r-2026-34",
    "name": "三生AFFINITÉ",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市南山区",
    "lat": 22.5208,
    "lng": 113.9388,
    "diamonds": 1,
    "description": "三生AFFINITÉ 2026年新上榜黑珍珠一钻，以现代融合料理为特色，将东西方烹饪技法结合，呈现创意十足的精致料理。",
    "signatureDishes": ["创意前菜", "融合主菜", "法式甜品"]
  },
  {
    "id": "new-r-2026-35",
    "name": "上海笑鱼静寿司",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市福田区",
    "lat": 22.5388,
    "lng": 114.0488,
    "diamonds": 1,
    "description": "上海笑鱼静寿司2026年新上榜黑珍珠一钻，源自上海的高端寿司品牌，深圳分店延续品牌对食材的极致追求，以江户前寿司闻名。",
    "signatureDishes": ["大トロ", "海胆军舰", "星鳗寿司"]
  },
  {
    "id": "new-r-2026-36",
    "name": "山海作·中国菜",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市南山区",
    "lat": 22.5308,
    "lng": 113.9608,
    "diamonds": 1,
    "description": "山海作·中国菜2026年新上榜黑珍珠一钻，以创新中国菜为概念，融合各地菜系精华，注重食材与呈现方式，是深圳新派中餐代表。",
    "signatureDishes": ["创新前菜", "招牌主菜", "特色甜品"]
  },
  {
    "id": "new-r-2026-37",
    "name": "东湾·The Bay by Chef Fei",
    "categories": ["黑珍珠一钻"],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "广州",
    "address": "广州市天河区",
    "lat": 23.1258,
    "lng": 113.3288,
    "diamonds": 1,
    "description": "东湾·The Bay by Chef Fei 2026年新上榜黑珍珠一钻，由名厨Fei主理的精致粤菜餐厅，以创新粤菜和海鲜料理著称，环境现代雅致。",
    "signatureDishes": ["招牌鲍鱼", "避风塘炒蟹", "花胶炖汤"]
  },
  {
    "id": "new-r-2026-38",
    "name": "Pairedd配德",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "四川",
    "city": "成都",
    "address": "成都市锦江区",
    "lat": 30.6598,
    "lng": 104.0828,
    "diamonds": 1,
    "description": "Pairedd配德2026年新上榜黑珍珠一钻，以创意融合料理和精选餐酒搭配为特色，是成都新锐高端餐饮代表。",
    "signatureDishes": ["创意前菜", "主厨推荐", "甜品配酒"]
  },
  {
    "id": "new-r-2026-39",
    "name": "喜筵28",
    "categories": ["黑珍珠一钻"],
    "cuisine": "川菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市高新区",
    "lat": 30.5728,
    "lng": 104.0668,
    "diamonds": 1,
    "description": "喜筵28 2026年新上榜黑珍珠一钻，以精致川菜宴席为主，将传统川菜技艺与现代审美结合，是成都高端川菜新势力。",
    "signatureDishes": ["水煮鱼", "宫保虾球", "鸡豆花"]
  },
  {
    "id": "new-r-2026-40",
    "name": "FONG SENSE豊·松竹",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "浙江",
    "city": "杭州",
    "address": "杭州市西湖区",
    "lat": 30.2508,
    "lng": 120.1318,
    "diamonds": 1,
    "description": "FONG SENSE豊·松竹2026年新上榜黑珍珠一钻，以精致融合料理和禅意环境著称，注重食材本味与东方美学，是杭州高端餐饮新地标。",
    "signatureDishes": ["创意料理", "季节套餐", "茶道甜品"]
  },
  {
    "id": "new-r-2026-41",
    "name": "唐人馆",
    "categories": ["黑珍珠一钻"],
    "cuisine": "粤菜",
    "province": "四川",
    "city": "成都",
    "address": "成都市武侯区",
    "lat": 30.6398,
    "lng": 104.0518,
    "diamonds": 1,
    "description": "唐人馆2026年新上榜黑珍珠一钻，以精致粤菜为主，在成都呈现高端粤式餐饮体验，菜品精致，环境雅致。",
    "signatureDishes": ["蜜汁叉烧", "清蒸石斑鱼", "花胶炖汤"]
  },
  {
    "id": "new-r-2026-42",
    "name": "Sushi Takeshi",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "深圳",
    "address": "深圳市南山区",
    "lat": 22.5188,
    "lng": 113.9468,
    "diamonds": 1,
    "description": "Sushi Takeshi 2026年新上榜黑珍珠一钻，由日本师傅Takeshi主理的顶级寿司店，以江户前寿司和Omakase体验著称，食材空运直送。",
    "signatureDishes": ["Omakase套餐", "金枪鱼大腹", "时令海鲜"]
  },
  {
    "id": "new-r-2026-43",
    "name": "当奥丰素1890",
    "categories": ["黑珍珠一钻"],
    "cuisine": "其他",
    "province": "广东",
    "city": "珠海",
    "address": "珠海市香洲区",
    "lat": 22.2718,
    "lng": 113.5728,
    "diamonds": 1,
    "description": "当奥丰素1890 2026年新上榜黑珍珠一钻，以意大利南部料理为特色，传承百年家族食谱，呈现正宗意式Fine Dining体验。",
    "signatureDishes": ["手工意面", "海鲜拼盘", "提拉米苏"]
  },
  {
    "id": "new-r-2026-44",
    "name": "御花园",
    "categories": ["黑珍珠一钻"],
    "cuisine": "粤菜",
    "province": "广东",
    "city": "珠海",
    "address": "珠海市香洲区",
    "lat": 22.2668,
    "lng": 113.5768,
    "diamonds": 1,
    "description": "御花园2026年新上榜黑珍珠一钻，以精致粤菜和宫廷菜为特色，环境华丽典雅，菜品精致讲究，是珠海高端粤菜的代表。",
    "signatureDishes": ["宫廷佛跳墙", "鲍汁扣辽参", "燕窝蛋挞"]
  },
  // ========== 2026成都米其林餐厅 ==========
  {
    id: "r-800",
    name: "新荣记（成都华商金融中心店）",
    categories: ["米其林二星"],
    cuisine: "浙菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区华商金融中心",
    lat: 30.6582,
    lng: 104.0812,
    stars: 2,
    description: "新荣记成都华商金融中心店2026年蝉联成都米其林二星，延续新荣记「食必求真」理念，以东海海鲜与家烧技法闻名，是成都高端浙菜代表。",
    signatureDishes: ["家烧黄鱼", "沙蒜豆面", "白煮望潮"],
  },
  {
    id: "r-801",
    name: "芙蓉凰",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市青羊区",
    lat: 30.6634,
    lng: 104.0578,
    stars: 1,
    description: "芙蓉凰2026年成都米其林一星餐厅，以传统川菜味型见长，呈现正宗成都味道，是川菜「一菜一格，百菜百味」的忠实传承者。",
    signatureDishes: ["芙蓉鸡片", "麻婆豆腐", "回锅肉"],
  },
  {
    id: "r-802",
    name: "福满楼（成都）",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区",
    lat: 30.6595,
    lng: 104.0688,
    stars: 1,
    description: "福满楼成都店2026年成都米其林一星餐厅，以精致粤菜与点心闻名，将传统粤式技法带入成都，是成都高端粤菜的代表。",
    signatureDishes: ["蜜汁叉烧", "虾饺", "脆皮烧鹅"],
  },
  {
    id: "r-803",
    name: "谧寻茶室",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区",
    lat: 30.6547,
    lng: 104.0732,
    stars: 1,
    description: "谧寻茶室2026年成都米其林一星餐厅，以茶入菜，将川菜与茶文化巧妙融合，环境清幽雅致，呈现静谧的川菜新意境。",
    signatureDishes: ["茶香鸡", "蒙顶甘露虾仁", "茉莉花茶冻"],
  },
  {
    id: "r-804",
    name: "银锅",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市武侯区",
    lat: 30.6312,
    lng: 104.0488,
    stars: 1,
    description: "银锅2026年成都米其林一星餐厅，以创新川菜与精致锅物闻名，融合传统川菜味型与现代烹饪技法，是成都新派川菜的代表。",
    signatureDishes: ["银锅麻辣烫", "花椒冰淇淋", "酸辣鱼"],
  },
  {
    id: "r-805",
    name: "漾亚·雍雅合鲜（桐梓林东路）",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市武侯区桐梓林东路",
    lat: 30.6245,
    lng: 104.0612,
    stars: 1,
    description: "漾亚·雍雅合鲜桐梓林东路店2026年成都米其林一星餐厅，以河鲜与川菜融合技法闻名，精选长江流域鲜活食材，呈现川菜河鲜的极致鲜味。",
    signatureDishes: ["雅鱼", "河鲜锅", "泡菜鱼"],
  },
  {
    id: "r-806",
    name: "蔻Co-",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区",
    lat: 30.6612,
    lng: 104.0758,
    stars: 1,
    description: "蔻Co-2026年成都米其林一星餐厅，以创新川菜与法式融合料理闻名，将川菜麻辣元素与西式摆盘结合，是成都融合菜的代表。",
    signatureDishes: ["花椒鹅肝", "麻辣和牛", "豆瓣鳕鱼"],
  },
  {
    id: "r-807",
    name: "会馆（The Hall）",
    categories: ["米其林一星"],
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    address: "成都市锦江区",
    lat: 30.6578,
    lng: 104.0825,
    stars: 1,
    description: "会馆The Hall 2026年成都米其林一星餐厅，以精致川菜与官府菜闻名，环境古雅，呈现川菜典雅一面，是成都高端宴请的代表。",
    signatureDishes: ["官府佛跳墙", "开水白菜", "蒜泥白肉"],
  },
  // ========== 2026台湾米其林餐厅 ==========
  {
    id: "r-808",
    name: "頤宮 Le Palais",
    categories: ["米其林三星"],
    cuisine: "粤菜",
    province: "台湾",
    city: "台北",
    address: "台北喜来登大饭店17楼",
    lat: 25.0521,
    lng: 121.5265,
    stars: 3,
    description: "頤宮Le Palais位于台北喜来登大饭店17楼，2026年蝉联台北米其林三星，是台湾唯一连续多年获评三星的餐厅，以正宗粤菜与顶级点心闻名，叉烧酥与烤鸭是其招牌。",
    signatureDishes: ["叉烧酥", "明炉烤鸭", "龙虾脆皮肠粉"],
  },
  {
    id: "r-809",
    name: "JL Studio",
    categories: ["米其林三星"],
    cuisine: "新加坡菜",
    province: "台湾",
    city: "台中",
    address: "台中市西区",
    lat: 24.1487,
    lng: 120.6658,
    stars: 3,
    description: "JL Studio由新加坡籍主厨林恬裔主理，2026年蝉联台中米其林三星，是台湾唯一以新加坡菜获评三星的餐厅，将新加坡风味与精致法式技法融合，独具特色。",
    signatureDishes: ["海南鸡饭", "辣椒螃蟹", "咖喱角"],
  },
  {
    id: "r-810",
    name: "態芮 Taïrroir",
    categories: ["米其林三星"],
    cuisine: "创新菜",
    province: "台湾",
    city: "台北",
    address: "台北市大安区",
    lat: 25.0412,
    lng: 121.5448,
    stars: 3,
    description: "態芮Taïrroir 2026年蝉联台北米其林三星，由主厨何顺凯主理，以法式技法演绎台湾在地食材，是法式融合台菜的代表，菜名Taiwan与Terroir合二为一，寓意深远。",
    signatureDishes: ["三杯鸡", "台湾牛肉面", "芒果冰沙"],
  },
  {
    id: "r-811",
    name: "彧割烹",
    categories: ["米其林二星"],
    cuisine: "日本料理",
    province: "台湾",
    city: "台北",
    address: "台北市中山区",
    lat: 25.0638,
    lng: 121.5238,
    stars: 2,
    description: "彧割烹2026年台北米其林二星餐厅，以江户前寿司与割烹料理闻名，主厨精选日本空运食材，呈现正宗日式Omakase体验，是台北顶级日本料理代表。",
    signatureDishes: ["Omakase套餐", "大腹寿司", "车虾寿司"],
  },
  {
    id: "r-812",
    name: "牡丹",
    categories: ["米其林二星"],
    cuisine: "日本料理",
    province: "台湾",
    city: "台北",
    address: "台北市大安区",
    lat: 25.0398,
    lng: 121.5432,
    stars: 2,
    description: "牡丹2026年台北米其林二星餐厅，以铁板烧与日式料理闻名，精选A5和牛与海鲜食材，在铁板上呈现极致鲜味，是台北高端铁板烧的代表。",
    signatureDishes: ["A5和牛铁板烧", "龙虾铁板烧", "干贝"],
  },
  {
    id: "r-813",
    name: "雅閣",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "台湾",
    city: "台北",
    address: "台北文华东方酒店",
    lat: 25.0528,
    lng: 121.5368,
    stars: 1,
    description: "雅閣位于台北文华东方酒店，2026年台北米其林一星餐厅，以精致粤菜与港式点心闻名，环境典雅，是台北高端粤菜宴请的代表。",
    signatureDishes: ["蜜汁叉烧", "虾饺", "脆皮烤乳猪"],
  },
  {
    id: "r-814",
    name: "請客樓",
    categories: ["米其林一星"],
    cuisine: "川扬菜",
    province: "台湾",
    city: "台北",
    address: "台北喜来登大饭店",
    lat: 25.0521,
    lng: 121.5265,
    stars: 1,
    description: "請客樓位于台北喜来登大饭店，2026年台北米其林一星餐厅，以川扬菜闻名，融合四川与淮扬菜系精髓，是台北独特菜系的代表。",
    signatureDishes: ["椒麻鸡", "蟹粉小笼包", "扬州狮子头"],
  },
  {
    id: "r-815",
    name: "天香樓",
    categories: ["米其林一星"],
    cuisine: "杭帮菜",
    province: "台湾",
    city: "台北",
    address: "台北亚都丽致大饭店",
    lat: 25.0688,
    lng: 121.5238,
    stars: 1,
    description: "天香樓位于台北亚都丽致大饭店，2026年台北米其林一星餐厅，以正宗杭帮菜闻名，是台湾少有的顶级杭州菜代表，传承西湖饮食文化。",
    signatureDishes: ["西湖醋鱼", "东坡肉", "龙井虾仁"],
  },
  {
    id: "r-816",
    name: "金蓬萊遵古台菜",
    categories: ["米其林一星"],
    cuisine: "台湾菜",
    province: "台湾",
    city: "台北",
    address: "台北市士林区",
    lat: 25.0938,
    lng: 121.5248,
    stars: 1,
    description: "金蓬萊遵古台菜2026年台北米其林一星餐厅，以传统台菜闻名，坚持古法烹制，是台北老牌台菜的代表，承载着台湾本土饮食文化。",
    signatureDishes: ["佛跳墙", "红蟳米糕", "排骨酥"],
  },
  {
    id: "r-817",
    name: "明福台菜海產",
    categories: ["米其林一星"],
    cuisine: "台湾菜",
    province: "台湾",
    city: "台北",
    address: "台北市中山區",
    lat: 25.0612,
    lng: 121.5268,
    stars: 1,
    description: "明福台菜海產2026年台北米其林一星餐厅，以海鲜与台菜闻名，店内海鲜新鲜直送，是台北老字号台菜海产的代表，深受饕客喜爱。",
    signatureDishes: ["生鱼片", "佛跳墙", "炒米粉"],
  },
  {
    id: "r-818",
    name: "山海樓",
    categories: ["米其林一星"],
    cuisine: "台湾菜",
    province: "台湾",
    city: "台北",
    address: "台北市中正区",
    lat: 25.0478,
    lng: 121.5218,
    stars: 1,
    description: "山海樓2026年台北米其林一星餐厅，以复古台菜与有机食材闻名，重现日据时期台湾酒楼菜色，是台湾精致台菜的代表。",
    signatureDishes: ["挂炉烤鸭", "鱿鱼螺肉蒜", "金银烧猪"],
  },
  {
    id: "r-819",
    name: "富錦樹台菜香檳（松山）",
    categories: ["米其林一星"],
    cuisine: "台湾菜",
    province: "台湾",
    city: "台北",
    address: "台北市松山区",
    lat: 25.0558,
    lng: 121.5588,
    stars: 1,
    description: "富錦樹台菜香檳松山店2026年台北米其林一星餐厅，以新派台菜与香槟搭配闻名，将传统台菜精致化呈现，是台北新派台菜的代表。",
    signatureDishes: ["蒜味香肠", "卤肉饭", "三杯鸡"],
  },
  {
    id: "r-820",
    name: "鹽之華",
    categories: ["米其林一星"],
    cuisine: "法国菜",
    province: "台湾",
    city: "台中",
    address: "台中市西區",
    lat: 24.1498,
    lng: 120.6688,
    stars: 1,
    description: "鹽之華2026年台中米其林一星餐厅，由主厨黎俞君主理，以精致法式料理闻名，是台中法式Fine Dining的代表，坚持使用在地食材演绎法式技法。",
    signatureDishes: ["法式鹅肝", "松露炖饭", "可丽露"],
  },
  {
    id: "r-821",
    name: "雋 GEN",
    categories: ["米其林一星"],
    cuisine: "粤菜",
    province: "台湾",
    city: "高雄",
    address: "高雄市前金区",
    lat: 22.6312,
    lng: 120.3018,
    stars: 1,
    description: "雋GEN 2026年高雄米其林一星餐厅，以精致粤菜与港式点心闻名，是高雄高端粤菜的代表，呈现正宗粤式烹饪技法。",
    signatureDishes: ["蜜汁叉烧", "虾饺", "烧鹅"],
  },
  {
    id: "r-822",
    name: "方蒔",
    categories: ["米其林一星"],
    cuisine: "创新菜",
    province: "台湾",
    city: "高雄",
    address: "高雄市前金区",
    lat: 22.6298,
    lng: 120.3038,
    stars: 1,
    description: "方蒔2026年高雄米其林一星餐厅，以创新菜与法式融合料理闻名，将台湾在地食材以现代技法重新演绎，是高雄新派料理的代表。",
    signatureDishes: ["在地蔬食套餐", "海鲜料理", "甜品"],
  },
  {
    id: "r-823",
    name: "承 Sho",
    categories: ["米其林一星"],
    cuisine: "日本料理",
    province: "台湾",
    city: "高雄",
    address: "高雄市前金区",
    lat: 22.6308,
    lng: 120.3028,
    stars: 1,
    description: "承Sho 2026年高雄米其林一星餐厅，以江户前寿司与日式割烹闻名，主厨精选日本直送食材，是高雄顶级日本料理的代表。",
    signatureDishes: ["Omakase套餐", "大腹寿司", "玉子烧"],
  },
  {
    id: "r-824",
    name: "Haili",
    categories: ["米其林一星"],
    cuisine: "创新菜",
    province: "台湾",
    city: "高雄",
    address: "高雄市前金区",
    lat: 22.6328,
    lng: 120.3048,
    stars: 1,
    description: "Haili 2026年高雄米其林一星餐厅，以日魂法菜闻名，主厨融合日本料理精神与法式烹饪技法，是高雄创新料理的代表，独具风格。",
    signatureDishes: ["法式海鲜", "和牛料理", "创意甜品"],
  },
  // ========== 2026港澳米其林新晋餐厅 ==========
  {
    id: "r-900",
    name: "Cristal Room by Anne-Sophie Pic",
    categories: ["米其林二星"],
    cuisine: "其他",
    province: "香港",
    city: "香港",
    address: "香港中环都爹利街1号",
    lat: 22.3193,
    lng: 114.1694,
    stars: 2,
    description: "Cristal Room by Anne-Sophie Pic 2026年新晋米其林二星，由法国女主厨Anne-Sophie Pic主理，以精致时尚法国菜著称，融合法式技艺与当代美学，是香港高端法餐新标杆。",
    signatureDishes: ["法式前菜", "主厨套餐", "精致甜点"],
  },
  // ========== 2026黑珍珠餐厅 ==========
  {
    id: "r-950",
    name: "甬府·北外滩",
    categories: ["黑珍珠三钻"],
    cuisine: "甬菜",
    province: "上海",
    city: "上海",
    address: "上海市虹口区北外滩",
    lat: 31.2522,
    lng: 121.4922,
    diamonds: 3,
    description: "甬府·北外滩2026年上榜黑珍珠三钻，以宁波菜和东海海鲜闻名，食材考究，烹饪精湛，是上海高端甬菜的代表。",
    signatureDishes: ["宁式鳝丝", "雪菜大汤黄鱼", "红膏炝蟹"],
  },
  {
    id: "r-951",
    name: "中国菜·头灶",
    categories: ["黑珍珠二钻"],
    cuisine: "本帮菜",
    province: "上海",
    city: "上海",
    address: "上海市",
    lat: 31.2304,
    lng: 121.4737,
    diamonds: 2,
    description: "中国菜·头灶2026年新晋黑珍珠二钻，以精致本帮菜为特色，传承上海本帮菜技艺，注重食材本味与火候，是上海本帮菜fine dining的代表。",
    signatureDishes: ["红烧肉", "油爆虾", "蟹粉豆腐"],
  },
  {
    id: "r-952",
    name: "潮上潮（正大店）",
    categories: ["黑珍珠一钻"],
    cuisine: "潮汕菜",
    province: "北京",
    city: "北京",
    address: "北京市朝阳区正大中心",
    lat: 39.9087,
    lng: 116.4638,
    diamonds: 1,
    description: "潮上潮正大店2026年新上榜黑珍珠一钻，以精致潮汕菜为主，主打海鲜和功夫菜，延续潮上潮品牌的高品质，是北京潮州菜的重要代表。",
    signatureDishes: ["潮州冻蟹", "卤水老鹅头", "隆江猪手"],
  },
  {
    id: "r-953",
    name: "永·江臻（思南公馆店）",
    categories: ["黑珍珠一钻"],
    cuisine: "江鲜",
    province: "上海",
    city: "上海",
    address: "上海市黄浦区思南公馆",
    lat: 31.2207,
    lng: 121.4648,
    diamonds: 1,
    description: "永·江臻思南公馆店2026年新上榜黑珍珠一钻，以长江江鲜为特色，精选时令江鲜食材，以精致烹饪呈现江南水乡风味，是上海江鲜料理的代表。",
    signatureDishes: ["长江刀鱼", "白鱼", "江虾"],
  },
  {
    id: "r-954",
    name: "闽和南·欢席",
    categories: ["黑珍珠一钻"],
    cuisine: "闽菜",
    province: "福建",
    city: "福州",
    address: "福州市",
    lat: 26.0745,
    lng: 119.2965,
    diamonds: 1,
    description: "闽和南·欢席2026年新上榜黑珍珠一钻，以精致闽菜为特色，传承福建饮食文化，讲究山海食材的搭配与烹饪技艺，是福州闽菜fine dining的代表。",
    signatureDishes: ["佛跳墙", "土笋冻", "海蛎煎"],
  },
  {
    id: "r-955",
    name: "崬漁 Dong Yu",
    categories: ["黑珍珠一钻"],
    cuisine: "鲁菜",
    province: "山东",
    city: "济南",
    address: "济南市",
    lat: 36.6512,
    lng: 117.1201,
    diamonds: 1,
    description: "崬漁Dong Yu 2026年新上榜黑珍珠一钻，以精致鲁菜为特色，传承鲁菜技艺，注重食材本味与火候掌控，是济南高端鲁菜的代表。",
    signatureDishes: ["葱烧海参", "九转大肠", "糖醋鲤鱼"],
  },
  {
    id: "r-956",
    name: "喜筵28·精细潮粤",
    categories: ["黑珍珠一钻"],
    cuisine: "粤菜",
    province: "天津",
    city: "天津",
    address: "天津市",
    lat: 39.0842,
    lng: 117.2009,
    diamonds: 1,
    description: "喜筵28·精细潮粤2026年新上榜黑珍珠一钻，以精细潮粤菜为特色，融合潮汕与粤菜技艺，注重食材本味与精致呈现，是天津高端粤菜的代表。",
    signatureDishes: ["蜜汁叉烧", "清蒸石斑鱼", "潮式卤水"],
  },
];