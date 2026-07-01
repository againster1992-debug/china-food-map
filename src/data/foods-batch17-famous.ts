import type { Food } from "@/types/food";

// 全国最著名100种美食补充（基于传统名菜、非遗美食、地方代表菜）
export const FOODS_BATCH17_FAMOUS: Food[] = [
  // ========== 传统名菜补充 ==========
  ,
  {
    id: "batch17-famous-2",
    name: "牡丹燕菜",
    alias: ["燕菜", "洛阳水席·牡丹燕菜", "洛阳水席牡丹燕菜", "洛阳燕菜"],
    image: "https://img0.baidu.com/it/u=2555091131,1710563061&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1070",
    category: "主菜",
    taste: "酸辣",
    type: "traditional",
    cuisine: "豫菜",
    province: "河南",
    city: "洛阳",
    origin: "河南洛阳传统名菜，武则天赐名",
    description: "牡丹燕菜是洛阳传统名菜，相传武则天赐名。以白萝卜为主料，经多道工序制成燕菜状，配以火腿、香菇等高档食材。汤味鲜美酸辣，萝卜丝晶莹剔透如燕窝，造型美观似牡丹盛开。是洛阳水席的头道菜，体现豫菜精湛的刀工和烹饪技艺。",
    ingredients: ["萝卜", "火腿", "香菇", "醋", "胡椒"],
    cookingMethod: ["煮"],
    tags: ["酸辣", "主菜", "豫菜", "洛阳", "水席"],
    fame: "名菜",
    popularRegions: ["洛阳", "河南"],
    lat: 34.6197,
    lng: 112.4540,
    popularity: 8,
  },
  {
    id: "batch17-famous-3",
    name: "太白鸭子",
    alias: ["太白鸭"],
    image: "https://img0.baidu.com/it/u=719113659,4072946780&fm=253&fmt=auto&app=138&f=JPEG?w=534&h=500",
    category: "主菜",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "川菜",
    province: "四川",
    city: "绵阳",
    origin: "四川绵阳传统名菜，李白传说",
    description: "太白鸭子是四川绵阳的传统名菜，相传与唐代诗人李白有关。选用肥鸭，配以多种调料和药材蒸制而成。鸭肉酥烂入味，汤汁醇厚鲜美，具有滋补养生功效。是绵阳地区的代表性菜肴，承载着深厚的文化底蕴和诗人传说。",
    ingredients: ["鸭肉", "药材", "姜", "葱", "料酒"],
    cookingMethod: ["蒸"],
    tags: ["咸鲜", "主菜", "川菜", "绵阳", "滋补"],
    fame: "地方名吃",
    popularRegions: ["绵阳", "四川"],
    lat: 31.4675,
    lng: 104.6796,
    popularity: 6,
  },
  
  // ========== 山东名菜补充 ==========
  // ========== 浙江名菜补充 ==========
  // ========== 广东名菜补充 ==========
  {
    id: "batch17-famous-12",
    name: "烤乳猪",
    image: "https://img2.baidu.com/it/u=3655206846,2683209605&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=875",
    category: "主菜",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "粤菜",
    province: "广东",
    city: "广州",
    origin: "广东广州传统名菜，宴席大菜",
    description: "烤乳猪是广东传统名菜，选用出生数周的小猪，经多道工序处理后明炉烤制。成品色泽金红，皮脆肉嫩，骨软可嚼。是广东宴席的重头戏，常用于喜庆场合，体现粤菜对火候和食材的精准把控，是粤菜烹饪技艺的典范。",
    ingredients: ["猪肉", "香料", "酱料"],
    cookingMethod: ["烤"],
    tags: ["咸鲜", "主菜", "粤菜", "广州", "宴席"],
    fame: "名菜",
    popularRegions: ["广州", "广东"],
    lat: 23.1291,
    lng: 113.2644,
    popularity: 9,
  },
  // ========== 四川名菜补充 ==========
  // ========== 湖南名菜补充 ==========
  // ========== 其他省份名菜补充 ==========
  // ========== 福建名菜补充 ==========
  // ========== 安徽名菜补充 ==========
  {
    id: "batch17-famous-24",
    name: "李鸿章杂烩",
    image: "https://img2.baidu.com/it/u=129873297,3359054829&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=583",
    category: "主菜",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "徽菜",
    province: "安徽",
    city: "合肥",
    origin: "安徽合肥传统名菜，李鸿章所创",
    description: "李鸿章杂烩是合肥传统名菜，相传为清代李鸿章所创。选用海参、鱼翅、火腿、鸡肉等多种高档食材，配以高汤烩制。汤汁浓郁，食材丰富，味道鲜美。是安徽宴席的高档菜品，承载着深厚的历史文化底蕴。",
    ingredients: ["海参", "鱼翅", "火腿", "鸡肉", "高汤"],
    cookingMethod: ["烩"],
    tags: ["咸鲜", "主菜", "徽菜", "合肥", "杂烩"],
    fame: "地方名吃",
    popularRegions: ["合肥", "安徽"],
    lat: 31.8206,
    lng: 117.2272,
    popularity: 6,
  }
  // ========== 东北名菜补充 ==========
];
