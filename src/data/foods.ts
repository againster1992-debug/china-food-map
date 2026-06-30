import type { Food } from "@/types/food";
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

export const EXISTING_FOODS: Food[] = [
  ...FOODS_BATCH_SOUTH,
  ...FOODS_BATCH2_YUNNAN,
  ...FOODS_BATCH2_NORTH,

  // ========== 鲁菜（四大菜系之一，发源山东）==========

  // ========== 川菜（四大菜系之一，发源四川、重庆）==========

  // ========== 粤菜（四大菜系之一，发源广东）==========
  {
    id: "yue-3",
    name: "广式早茶点心",
    image: "https://img2.baidu.com/it/u=1805065564,574832807&fm=253&fmt=auto&app=120&f=JPEG?w=823&h=800",
    category: "小吃",
    taste: "咸鲜",
    type: "tradition",
    cuisine: "粤菜",
    province: "广东",
    origin: "广州茶楼文化，清末民初兴盛",
    description:
      "广式早茶是粤菜文化的精髓，包括虾饺、烧卖、叉烧包、肠粉、凤爪等数十种点心。配以一壶好茶，「一盅两件」是老广的生活方式。2014年粤菜烹饪技艺入选国家级非遗。",
    alias: [],
    ingredients: ["面粉", "虾", "猪肉", "茶叶"],
    cookingMethod: ["蒸", "煮"],
    tags: ["咸鲜", "小吃", "粤菜"],
    lat: 23.1291,
    lng: 113.2644,
    fame: "热门",
    popularRegions: ["广东"],
    popularity: 5,
  },

  // ========== 苏菜（四大菜系之一，发源江苏）==========
  

  // ========== 浙菜（八大菜系之一，发源浙江）==========

  // ========== 闽菜（八大菜系之一，发源福建）==========

  // ========== 湘菜（八大菜系之一，发源湖南）==========
  {
    id: "xiang-4",
    name: "口味虾",
    image: "https://img2.baidu.com/it/u=4182380063,3809247626&fm=253&fmt=auto&app=138&f=JPEG?w=514&h=500",
    category: "主菜",
    taste: "麻辣",
    type: "traditional",
    cuisine: "湘菜",
    province: "湖南",
    origin: "长沙夜市，20世纪90年代兴起",
    description:
      "口味虾以小龙虾加紫苏、辣椒、花椒等烧制。麻辣鲜香，色泽红亮，是长沙夜宵的灵魂。配啤酒食用，「剥虾喝酒」成为夏日风尚，近年从长沙火遍全国。",
    alias: [],
    ingredients: ["鱼肉", "紫苏", "辣椒", "花椒"],
    cookingMethod: ["烧", "炒"],
    tags: ["麻辣", "主菜", "湘菜"],
    lat: 28.2278,
    lng: 112.9388,
    fame: "热门",
    popularRegions: ["湖南"],
    popularity: 9,
  },

  // ========== 徽菜（八大菜系之一，发源安徽）==========

  // ========== 34 省市自治区代表美食 ==========

  // 北京
  

  // 天津

  // 河北
  {
    id: "hb-2",
    name: "石家庄安徽板面",
    image: "https://img0.baidu.com/it/u=3516828562,4233298525&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800",
    category: "面食",
    taste: "麻辣",
    type: "popular",
    cuisine: "冀菜",
    province: "河北",
    city: "石家庄",
    origin: "源自安徽太和，在石家庄发扬光大",
    description:
      "板面以宽扁面条配牛油辣椒、香料熬制的汤底，加青菜、卤蛋、豆皮。麻辣鲜香，面条筋道。本是安徽小吃，却在石家庄「反客为主」，成为当地「市吃」，全国门店超10万家。",
    alias: ["太和板面","石家庄板面"],
    ingredients: ["面粉", "牛肉", "辣椒", "青菜", "豆腐"],
    cookingMethod: ["煮","卤"],
    tags: ["麻辣", "面食", "冀菜", "街头小吃", "特色小吃"],
    fame: "热门",
    popularRegions: ["河北"],
    lat: 38.0428,
    lng: 114.5149,
    popularity: 4,
  },

  // 山西

  // 内蒙古
  {
    id: "nm-2",
    name: "稍美",
    image: "https://img2.baidu.com/it/u=2063647906,1098185859&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    category: "小吃",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "蒙餐",
    province: "内蒙古",
    city: "呼和浩特",
    origin: "呼和浩特，清康熙年间已有",
    description:
      "内蒙稍美以羊肉大葱为馅，皮薄如纸，顶端开口如花。蒸熟后皮透明馅微露，鲜香不膻。配砖茶解腻，是呼和浩特早茶的灵魂，与南方烧卖形似而味迥。",
    alias: ["烧麦","烧卖","稍梅"],
    ingredients: ["羊肉", "葱", "面粉"],
    cookingMethod: ["蒸"],
    tags: ["咸鲜", "小吃", "蒙餐", "特色小吃", "传统名菜", "酥脆"],
    fame: "热门",
    popularRegions: ["内蒙古"],
    lat: 40.8426,
    lng: 111.7511,
    popularity: 3,
  },

  // 辽宁
  {
    id: "ln-2",
    name: "大连海鲜焖子",
    image: "https://img1.baidu.com/it/u=1310791747,3880022564&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=642",
    category: "小吃",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "东北菜",
    province: "辽宁",
    city: "大连",
    origin: "大连，源自山东移民的焖子改良",
    description:
      "大连焖子以红薯淀粉煎至焦黄，浇麻酱、蒜汁、酱油，加海参、虾仁等海鲜。外焦内软，鲜香浓郁。是大连街头标志，融合鲁菜底蕴与海滨特色。",
    alias: ["海鲜焖子"],
    ingredients: ["红薯", "鱼肉", "虾", "麻酱", "蒜"],
    cookingMethod: ["煎"],
    tags: ["咸鲜", "小吃", "东北菜", "特色小吃", "街头小吃"],
    fame: "地方名吃",
    popularRegions: ["辽宁"],
    lat: 38.914,
    lng: 121.6147,
    popularity: 4,
  },

  // 吉林
  {
    id: "hlj-2",
    name: "锅包肉",
    image: "https://img0.baidu.com/it/u=1520302312,2597417742&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800",
    category: "主菜",
    taste: "酸甜",
    type: "traditional",
    cuisine: "东北菜",
    province: "黑龙江",
    city: "哈尔滨",
    origin: "哈尔滨，清光绪年间郑兴文所创",
    description:
      "锅包肉将猪里脊切片挂糊炸脆，浇糖醋汁。外酥里嫩，酸甜开胃。本是哈尔滨名菜，风靡东三省。正宗做法用番茄汁，老式做法用糖醋，是东北菜的「门面担当」。",
    alias: ["锅爆肉"],
    ingredients: ["猪肉", "淀粉", "糖", "醋", "番茄酱"],
    cookingMethod: ["炸","熘"],
    tags: ["酸甜", "主菜", "东北菜", "传统名菜", "劲道"],
    fame: "名菜",
    popularRegions: ["全国"],
    lat: 45.8038,
    lng: 126.535,
    popularity: 9,
  },

  // 黑龙江

  // 上海

  // 江西

  // 河南
  

  // 湖北
  

  // 广东（补充）
  {
    id: "gd-1",
    name: "肠粉",
    image: "https://img2.baidu.com/it/u=3010722744,449686653&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=652",
    category: "小吃",
    taste: "鲜香",
    type: "traditional",
    cuisine: "粤菜",
    province: "广东",
    origin: "广州西关，清末已有",
    description:
      "肠粉以米浆蒸制薄皮，裹虾仁、牛肉、叉烧等。皮薄如纸，滑嫩透亮，淋酱油食用。是广式早茶必点，布拉肠、抽屉肠两大流派，体现粤菜「鲜嫩滑」精髓。",
    alias: [],
    ingredients: ["米粉", "虾", "牛肉", "酱油"],
    cookingMethod: ["蒸"],
    tags: ["清淡", "小吃", "粤菜", "焦香"],
    lat: 23.1291,
    lng: 113.2644,
    fame: "热门",
    popularRegions: ["广东"],
    popularity: 9,
  },

  // 广西

  // 重庆（补充）

  // 四川（补充）
  

  // 贵州

  // 云南

  // 西藏

  // 陕西
  {
    id: "snx-3",
    name: "biangbiang面",
    image: "https://img2.baidu.com/it/u=4016947050,138679689&fm=253&fmt=auto&app=138&f=JPEG?w=531&h=500",
    category: "面食",
    taste: "酸辣",
    type: "traditional",
    cuisine: "西北菜",
    province: "陕西",
    origin: "关中，据说秦时已有",
    description:
      "biangbiang面以宽如裤带的面条煮熟，泼热油、辣椒面、醋。「面条像裤带」是关中「八大怪」之一。筋道爽滑，酸辣过瘾，是陕西「油泼面」的代表，字难写味难忘。",
    alias: ["彪彪面"],
    ingredients: ["面粉", "辣椒", "醋", "葱"],
    cookingMethod: ["煮", "浇"],
    tags: ["酸辣", "面食", "其他"],
    lat: 34.3416,
    lng: 108.9398,
    fame: "名菜",
    popularRegions: ["全国"],
    popularity: 9,
  },

  // 甘肃

  // 青海

  // 宁夏
  

  // 新疆
  {
    id: "xj-1",
    name: "大盘鸡",
    image: "https://img1.baidu.com/it/u=2725455802,2356302128&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    category: "主菜",
    taste: "麻辣",
    type: "traditional",
    cuisine: "新疆菜",
    province: "新疆",
    city: "塔城",
    origin: "沙湾，据说90年代公路餐馆所创",
    description:
      "大盘鸡以鸡块、土豆、青椒红椒烧制，大盘盛装，最后加皮带面。麻辣鲜香，肉烂土豆绵。是新疆「公路美食」代表，从沙湾火遍全国，体现多民族饮食融合。",
    alias: ["沙湾大盘鸡","新疆大盘鸡"],
    ingredients: ["鸡肉", "土豆", "辣椒"],
    cookingMethod: ["烧","炖"],
    tags: ["麻辣", "主菜", "新疆菜", "传统名菜", "特色小吃", "嫩滑"],
    fame: "名菜",
    popularRegions: ["全国"],
    lat: 44.3271,
    lng: 84.8516,
    popularity: 10,
  },
  
  {
    id: "xj-3",
    name: "抓饭",
    image: "https://img1.baidu.com/it/u=4187823347,2190123895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653",
    category: "主食",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "新疆菜",
    province: "新疆",
    city: "乌鲁木齐",
    origin: "新疆，维吾尔族传统",
    description:
      "抓饭以大米、羊肉、胡萝卜、洋葱焖制。米粒金黄，肉烂饭香，油润不腻。是维吾尔族「待客饭」，婚丧嫁娶必备。手抓食之故名，现多用勺，是新疆节庆的味道。",
    alias: ["手抓饭","帕罗"],
    ingredients: ["大米","羊肉","胡萝卜","洋葱"],
    cookingMethod: ["焖"],
    tags: ["咸鲜", "主食", "新疆菜", "特色小吃", "传统名菜", "嫩滑", "劲道"],
    fame: "地方名吃",
    popularRegions: ["新疆"],
    lat: 43.7928,
    lng: 87.6271,
    popularity: 4,
  },

  // 香港
  {
    id: "hk-1",
    name: "港式奶茶",
    image: "https://img0.baidu.com/it/u=2002066454,1707265730&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=646",
    category: "饮品",
    taste: "香甜",
    type: "traditional",
    cuisine: "粤菜",
    province: "香港",
    origin: "香港，源自英式奶茶改良",
    description:
      "港式奶茶以锡兰红茶经「丝袜」滤袋反复冲撞，加淡奶。茶味浓郁，奶香顺滑，「丝袜奶茶」最知名。是茶餐厅灵魂，「鸳鸯」（奶茶+咖啡）更是港式独创，体现中西融合。",
    alias: [],
    ingredients: ["茶叶", "淡奶", "糖"],
    cookingMethod: ["煮", "冲"],
    tags: ["香甜", "饮品", "粤菜"],
    lat: 22.3193,
    lng: 114.1694,
    fame: "热门",
    popularRegions: ["香港"],
    popularity: 3,
  },
  

  // 澳门
  {
    id: "mo-2",
    name: "猪扒包",
    image: "https://img2.baidu.com/it/u=2136176697,1501089439&fm=253&fmt=auto&app=138&f=JPEG?w=513&h=500",
    category: "小吃",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "粤菜",
    province: "澳门",
    city: "澳门",
    origin: "澳门氹仔，茶餐厅所创",
    description:
      "猪扒包以烤脆的猪仔包夹煎炸猪扒。外脆内嫩，肉汁丰盈。大利来记最知名，每日限量。是澳门街头标志，简单却令人难忘，体现澳式茶餐厅的实在与美味。",
    alias: ["猪仔包"],
    ingredients: ["猪肉"],
    cookingMethod: ["煎","烤"],
    tags: ["咸鲜", "小吃", "粤菜", "特色小吃", "街头小吃"],
    fame: "热门",
    popularRegions: ["澳门"],
    lat: 22.1987,
    lng: 113.5439,
    popularity: 4,
  },

  // 台湾
  
  {
    id: "tw-3",
    name: "珍珠奶茶",
    image: "https://img1.baidu.com/it/u=462835128,1290818344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
    category: "饮品",
    taste: "香甜",
    type: "popular",
    cuisine: "台湾菜",
    province: "台湾",
    origin: "台中，1980年代所创",
    description:
      "珍珠奶茶以奶茶加粉圆（珍珠）。Q弹有嚼劲，甜而不腻。相传台中东翰茶坊、春水堂皆自称首创。从台湾火遍全球，「boba」成为国际词汇，是台湾最具影响力的饮品。",
    alias: [],
    ingredients: ["茶叶", "牛奶", "糖"],
    cookingMethod: ["煮"],
    tags: ["香甜", "饮品", "其他"],
    lat: 24.1477,
    lng: 120.6736,
    fame: "热门",
    popularRegions: ["台湾"],
    popularity: 9,
  },

  // 山东（补充）

  // 江苏（补充）

  // 浙江（补充）

  // 安徽（补充）

  // 福建（补充）

  // 湖南（补充）

  // ========== 流行美食（当下各地流行）==========
  
  
  {
    id: "pop-9",
    name: "炸鸡锁骨",
    image: "https://img1.baidu.com/it/u=3407915171,1817955280&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=652",
    category: "小吃",
    taste: "咸鲜",
    type: "popular",
    cuisine: "东北菜",
    province: "辽宁",
    city: "沈阳",
    origin: "东北，2010年代夜市兴起",
    description:
      "炸鸡锁骨以鸡锁骨腌制裹粉油炸，撒孜然辣椒。外酥里嫩，越啃越香。从东北夜市火遍全国，是「地摊经济」的代表，配啤酒是夜宵绝配，体现街头美食的生命力。",
    alias: ["鸡锁骨"],
    ingredients: ["鸡肉", "淀粉", "孜然", "辣椒"],
    cookingMethod: ["炸"],
    tags: ["咸鲜", "小吃", "东北菜", "街头小吃", "特色小吃", "网红"],
    fame: "热门",
    popularRegions: ["辽宁"],
    lat: 41.8057,
    lng: 123.4315,
    popularity: 8,
  },
  
  {
    id: "pop-11",
    name: "奶茶（新式茶饮）",
    image: "https://img1.baidu.com/it/u=2079225146,1932343109&fm=253&fmt=auto&app=138&f=JPEG?w=515&h=500",
    category: "饮品",
    taste: "香甜",
    type: "popular",
    cuisine: "粤菜",
    province: "广东",
    origin: "广东，2010年代新式茶饮兴起",
    description:
      "新式茶饮以原叶茶、鲜奶、水果为主，区别于传统奶茶粉。喜茶、奈雪、茶颜悦色等品牌崛起，从广东火遍全国。「芝士奶盖」「鲜果茶」成现象级单品，是Z世代的社交货币。",
    alias: [],
    ingredients: ["茶叶", "牛奶", "糖"],
    cookingMethod: ["煮", "冲"],
    tags: ["香甜", "饮品", "其他"],
    lat: 23.1291,
    lng: 113.2644,
    fame: "热门",
    popularRegions: ["广东"],
    popularity: 4,
  },
  {
    id: "pop-13",
    name: "烤面筋",
    image: "https://img1.baidu.com/it/u=3359545262,1812241170&fm=253&fmt=auto&app=138&f=PNG?w=500&h=557",
    category: "小吃",
    taste: "香辣",
    type: "popular",
    cuisine: "西北菜",
    province: "陕西",
    origin: "陕西，街头夜市兴起",
    description:
      "烤面筋以面筋串烤制，刷辣酱、撒孜然。外焦里韧，香辣过瘾。从西北夜市火遍全国，是「地摊美食」代表。便宜量大，是学生与打工人的夜宵首选，体现市井美食的活力。",
    alias: [],
    ingredients: ["面筋", "辣椒", "孜然"],
    cookingMethod: ["烤"],
    tags: ["麻辣", "小吃", "其他"],
    lat: 34.3416,
    lng: 108.9398,
    popularity: 8,
  },
  {
    id: "pop-14",
    name: "酸辣粉",
    image: "https://img0.baidu.com/it/u=3558245665,1717520811&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=561",
    category: "面食",
    taste: "酸辣",
    type: "popular",
    cuisine: "川菜",
    province: "四川",
    origin: "川渝，民间传统",
    description:
      "酸辣粉以红薯粉条配酸辣汤底，加花生、榨菜、香菜。酸辣开胃，粉条筋道。从川渝街头火遍全国，是「小吃之王」之一。方便装酸辣粉更让其进入千家万户，年销量惊人。",
    alias: [],
    ingredients: ["红薯", "花生", "榨菜", "香菜", "醋"],
    cookingMethod: ["煮"],
    tags: ["酸辣", "面食", "川菜", "酥脆"],
    lat: 30.5728,
    lng: 104.0668,
    popularity: 10,
  },
  {
    id: "pop-15",
    name: "部队锅",
    image: "https://img2.baidu.com/it/u=3721775256,2161103713&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=641",
    category: "主菜",
    taste: "酸辣",
    type: "popular",
    cuisine: "其他",
    province: "北京",
    origin: "韩国，在中国流行",
    description:
      "部队锅源自韩国，以火腿、午餐肉、泡菜、芝士、拉面煮制。在中国一二线城市韩餐店流行，是「韩流美食」代表。虽非中国本土美食，却成为年轻人聚餐热门选择，体现饮食文化交融。",
    alias: [],
    ingredients: ["火腿", "午餐肉", "泡菜", "芝士"],
    cookingMethod: ["煮"],
    tags: ["酸辣", "主菜", "其他"],
    lat: 39.9042,
    lng: 116.4074,
    popularity: 3,
  },

  // ========== 全国最热门100种美食与最著名100种美食补充 ==========
  ...FOODS_BATCH22_HOT100,
  ...FOODS_BATCH23_FAMOUS100,
  ...FOODS_BATCH24_PROVINCE_CUISINE_SUPPLEMENT,
  ...FOODS_BATCH25_HOT100,
  ...FOODS_BATCH26_FAMOUS100,
  ...FOODS_BATCH27_SEARCH_SUPPLEMENT,
  ...FOODS_BATCH28_TRENDING_2026,
  ...FOODS_BATCH28_HOT100,
  ...FOODS_BATCH29_FAMOUS100,
  ...FOODS_BATCH29_FOOD_TRADITIONS];

// 合并所有数据源
export const FOODS: Food[] = [
  ...EXISTING_FOODS,
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
  ...FOODS_BATCH_EAST,
  ...FOODS_BATCH_CENTRAL,
  ...FOODS_BATCH_WEST,
  ...FOODS_BATCH_NORTH,
  ...FOODS_BATCH2_EASTCENTRAL,
  ...FOODS_BATCH2_JIANGXI,
  ...FOODS_BATCH3_SICHUAN,
  ...FOODS_BATCH3_SHANDONG,
  ...FOODS_BATCH3_JIANGSU,
  ...FOODS_BATCH3_CANTONESE,
  ...FOODS_BATCH3_TAIWAN,
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
  ...FOODS_NATIONAL,
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
  ...FOODS_RESTORED_COMPLIANCE].filter((f): f is Food => !!f); // 过滤掉注释块导致的 undefined 元素

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
