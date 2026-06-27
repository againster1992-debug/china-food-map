import type { Food } from "@/types/food";

// 饮食传统与地方特色美食
// 1. 饮食传统：海南老爸茶、广式早茶、广式凉茶、香港茶餐厅等
// 2. 地方特色美食：正定崩肝、莎车鸽子等具有鲜明特色的地方美食
export const FOODS_TRADITIONS_SPECIALTIES: Food[] = [
  // ========== 饮食传统 ==========
  // 海南老爸茶
  {
    id: "tradition-hainan-laobacha",
    name: "老爸茶",
    alias: ["下午茶"],
    image: "https://img1.baidu.com/it/u=1569247260,1241642255&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653",
    category: "饮品",
    taste: "香甜",
    type: "traditional",
    cuisine: "琼菜",
    province: "海南",
    city: "海口",
    origin: "海南海口，源于南洋华侨带回的下午茶习俗",
    description:
      "老爸茶是海南独特的下午茶文化，源于南洋华侨带回的英式下午茶，经本土化演变。茶客多为中老年男性，故称「老爸茶」。一壶红茶、几笼点心，从下午坐到傍晚，是海南人悠闲生活的写照。茶点丰富，有菠萝包、萝卜糕、煎堆、咖啡奶等数十种，体现南洋、粤式、海南本土三重风味交融。",
    ingredients: ["茶叶", "萝卜", "咖啡", "菠萝"],
    cookingMethod: ["煮", "蒸", "炸", "烤"],
    tags: ["饮食传统", "下午茶", "南洋风味", "海南特色", "悠闲文化"],
    fame: "地方名吃",
    popularRegions: ["广东", "广西"],
    lat: 20.0444,
    lng: 110.1989,
    popularity: 3,
  },
  // 广式早茶
  // 广式凉茶
  // 香港茶餐厅
  {
    id: "tradition-hk-chachaanteng",
    name: "港式茶餐厅",
    alias: ["茶餐厅"],
    image: "https://img0.baidu.com/it/u=1856201598,3089715771&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=659",
    category: "小吃",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "粤菜",
    province: "香港",
    city: "香港",
    origin: "香港，1950年代兴起，融合中西饮食文化",
    description:
      "茶餐厅是香港独特的餐饮形态，源于战后港人将西式餐厅本土化。以「快、平、靓」为特色，供应丝袜奶茶、菠萝油、西多士、干炒牛河、烧味饭等中西美食。「鸳鸯」（奶茶+咖啡）、「茶走」（奶茶加炼乳）等独创饮法体现港式创意。茶餐厅是香港市井文化的缩影，2014年入选香港非遗，2022年更被列入联合国教科文组织非遗候选名单，是港人集体记忆的载体。",
    ingredients: ["奶茶", "猪肉", "牛肉", "鸡蛋"],
    cookingMethod: ["炒", "煎", "烤", "煮"],
    tags: ["饮食传统", "茶餐厅", "港式", "中西融合", "香港文化", "非遗"],
    fame: "名菜",
    popularRegions: ["广东", "澳门"],
    lat: 22.3193,
    lng: 114.1694,
    popularity: 7,
  },
  // 成都茶馆
  {
    id: "tradition-chengdu-teahouse",
    name: "茶馆",
    alias: ["盖碗茶", "茶馆文化"],
    image: "https://img2.baidu.com/it/u=2537667959,3338609037&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=654",
    category: "饮品",
    taste: "清淡",
    type: "traditional",
    cuisine: "川菜",
    province: "四川",
    city: "成都",
    origin: "成都，茶馆文化数百年传承",
    description:
      "成都茶馆是蜀地悠闲生活的象征，以盖碗茶为标志。竹椅、方桌、盖碗，一壶花茶可坐半日。茶馆亦是社交、听书、看戏、摆龙门阵的公共场所，「头上晴天少，眼前茶馆多」道出成都茶馆之盛。盖碗茶由茶碗、茶盖、茶船三件组成，添水不加价，体现成都人的「巴适」哲学。2018年成都茶馆文化入选省级非遗。",
    ingredients: ["茶叶"],
    cookingMethod: ["泡"],
    tags: ["饮食传统", "茶馆", "盖碗茶", "悠闲文化", "非遗"],
    fame: "地方名吃",
    popularRegions: ["重庆"],
    lat: 30.5728,
    lng: 104.0668,
    popularity: 5,
  },
  // 潮汕工夫茶

  // ========== 地方特色美食 ==========
  // 正定崩肝（河北石家庄正定）
  {
    id: "specialty-zhengding-benggan",
    name: "正定崩肝",
    alias: ["崩肝", "正定牛肝"],
    image: "https://img1.baidu.com/it/u=1132067344,3110375792&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=929",
    category: "小吃",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "冀菜",
    province: "河北",
    city: "石家庄",
    origin: "河北石家庄正定县，据传唐代已有",
    description:
      "正定崩肝是河北正定古城的特色名吃，以牛肝切丝慢火崩制而成。「崩」是独特工艺，将牛肝切细丝后以油崩炒，使肝丝松散酥脆。成品色泽暗红，肝丝细长，咸香有嚼劲，佐酒下饭皆宜。正定「八大碗」之一，与马家卤鸡、郝家排骨并称正定三宝。相传安史之乱时唐军以此犒赏将士，历史悠久，是冀中平原的味觉记忆。",
    ingredients: ["牛肉", "酱油", "葱", "姜"],
    cookingMethod: ["炒", "卤"],
    tags: ["地方特色", "正定", "崩肝", "牛肝", "古城美食", "冀菜"],
    fame: "地方名吃",
    lat: 38.1456,
    lng: 114.5713,
    popularity: 4,
  },
  // 莎车鸽子（新疆喀什莎车）
  {
    id: "specialty-shache-gezi",
    name: "莎车鸽子",
    alias: ["莎车烤鸽子", "莎车鸽子汤"],
    image: "https://img1.baidu.com/it/u=3709369398,4110299406&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
    category: "主菜",
    taste: "咸鲜",
    type: "traditional",
    cuisine: "新疆菜",
    province: "新疆",
    city: "喀什",
    origin: "新疆喀什莎车县，维吾尔族传统",
    description:
      "莎车鸽子是新疆莎车县的名片美食，以当地特产乳鸽烤制或炖汤。莎车地处塔克拉玛干沙漠边缘，自古盛产优质鸽子。烤鸽子以孜然、辣椒、盐腌制后炭火慢烤，皮脆肉嫩，香气四溢；鸽子汤则以鸽子配药材炖煮，汤鲜味醇，滋补养生。莎车「鸽子一条街」闻名遐迩，是南疆独特的美食景观，体现维吾尔族饮食文化与丝路风情。",
    ingredients: ["乳鸽", "孜然", "辣椒", "洋葱"],
    cookingMethod: ["烤", "炖"],
    tags: ["地方特色", "莎车", "鸽子", "南疆", "维吾尔族", "丝路美食"],
    fame: "地方名吃",
    lat: 38.4164,
    lng: 77.2463,
    popularity: 5,
  },
  // 顺德双皮奶（广东顺德）
  // 柳州螺蛳粉（已在 popular 中，此处不重复）
  // 潮汕牛肉丸
  // 潮汕卤鹅
  // 潮汕砂锅粥
  // 高邮咸鸭蛋（江苏高邮）
  // 宁波年糕
  // 西安肉夹馍（已在 existing 中，此处不重复，补充其他特色）
  // 兰州酿皮（已在 existing 中，此处补充其他西北特色）
  // 西宁酿皮
  // 延吉冷面（已在 existing 中，此处补充其他东北特色）
  // 齐齐哈尔烤肉
  // 锡盟烤全羊（内蒙古锡林郭勒）
  // 景德镇冷粉（江西景德镇）
  {
    id: "specialty-jingdezhen-lengfen",
    name: "景德镇冷粉",
    alias: ["景德镇拌粉", "冷粉"],
    image: "https://img1.baidu.com/it/u=1467820231,292520224&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    category: "小吃",
    taste: "酸辣",
    type: "traditional",
    cuisine: "赣菜",
    province: "江西",
    city: "景德镇",
    origin: "江西景德镇，瓷都民间传统",
    description:
      "景德镇冷粉以粗米粉烫熟冷却，拌辣椒、花生、萝卜干、薄荷。冷粉较南昌拌粉更粗，口感更筋道，是瓷都人的夏日记忆。景德镇「瓷文化」与「冷粉文化」并行，窑工们一碗冷粉配一碗瓦罐汤，是千年瓷都的市井味道。薄荷的清凉是景德镇冷粉的独特标志，区别于江西其他地区的拌粉。",
    ingredients: ["米粉", "辣椒", "花生", "萝卜", "薄荷"],
    cookingMethod: ["煮", "拌"],
    tags: ["地方特色", "冷粉", "瓷都", "赣菜", "夏日小吃"],
    fame: "地方名吃",
    lat: 29.2687,
    lng: 117.1784,
    popularity: 4,
  },
  // 阳朔啤酒鱼（广西阳朔）
  // 和田烤蛋（新疆和田）
  // 厦门沙茶面（福建厦门）
  // 长沙糖油粑粑（湖南长沙）
  // 西安粉蒸肉（陕西西安）
  
  // 苏州奥灶面（江苏苏州）
  // 蒙自过桥米线已在 existing 中
  // 大理乳扇（云南大理）
  // 丽江腊排骨（云南丽江）
  // 哈尔滨锅包肉已在 existing 中
  // 长春酱骨头（吉林长春）
  // 平遥牛肉已在 existing 中
  // 太原刀削面已在 existing 中
  // 开封灌汤包（河南开封）
  // 遵义豆花面
  // 贵阳丝娃娃
  {
    id: "specialty-guiyang-siwawa",
    name: "贵阳丝娃娃",
    alias: ["丝娃娃", "素春卷"],
    image: "https://img2.baidu.com/it/u=3687496029,547604142&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=687",
    category: "小吃",
    taste: "酸辣",
    type: "traditional",
    cuisine: "黔菜",
    province: "贵州",
    city: "贵阳",
    origin: "贵州贵阳，民间传统小吃",
    description:
      "贵阳丝娃娃以薄如蝉翼的米面皮包裹萝卜丝、海带丝、豆芽、折耳根、黄瓜丝等十余种素菜，浇上酸辣蘸水食用。形如襁褓中的婴儿，故名「丝娃娃」。口感清爽，酸辣开胃，是贵阳街头最具代表性的素食小吃。体现贵州人对酸辣的钟爱和对食材多样性的追求，也是黔式小吃中少见的清爽代表。",
    ingredients: ["豆芽", "折耳根"],
    cookingMethod: ["切", "包", "蘸"],
    tags: ["地方特色", "丝娃娃", "黔菜", "素食", "酸辣"],
    fame: "地方名吃",
    popularRegions: ["贵州", "云南"],
    lat: 26.6477,
    lng: 106.6302,
    popularity: 4,
  },
  // 水城烙锅
  // 兴义羊肉粉
  {
    id: "specialty-xingyi-yangroufen",
    name: "兴义羊肉粉",
    alias: ["羊杂粉", "黔西南羊肉粉"],
    image: "https://img1.baidu.com/it/u=3792281989,2410520809&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=635",
    category: "小吃",
    taste: "香辣",
    type: "traditional",
    cuisine: "黔菜",
    province: "贵州",
    city: "兴义",
    origin: "贵州兴义，黔西南传统早餐",
    description:
      "兴义羊肉粉以当地优质米粉配清炖羊肉汤，加羊肉片、羊血、薄荷、糊辣椒。汤清味鲜，羊肉醇香，薄荷清凉解腻，糊辣椒香气扑鼻。兴义地处滇黔桂交界，羊肉粉融合三地风味。与遵义羊肉粉、水城羊肉粉并称贵州三大羊肉粉。是黔西南人早餐首选，体现贵州高原对羊肉汤粉的极致演绎。",
    ingredients: ["米粉", "羊肉", "薄荷", "辣椒"],
    cookingMethod: ["熬", "煮", "拌"],
    tags: ["地方特色", "羊肉粉", "黔菜", "米粉", "麻辣", "劲道"],
    fame: "地方名吃",
    popularRegions: ["贵州", "云南"],
    lat: 25.0926,
    lng: 104.8949,
    popularity: 4,
  }];
