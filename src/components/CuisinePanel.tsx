import { useState } from "react";
import { X, Utensils, Flame, BookOpen, MapPin, Trophy, Scroll, Layers, Pencil, Save, Plus } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getCuisineFlavor } from "@/data/provinceFlavors";
import { inferFame } from "@/types/food";
import type { Food, Cuisine } from "@/types/food";
import { FoodImage } from "./FoodImage";
import { CUISINE_PROVINCES } from "@/types/food";

// 菜系流派分支
interface CuisineSchool {
  name: string;       // 流派名称
  region: string;     // 分布区域
  features: string;   // 风味特色
}

// 菜系补充介绍数据（饮食特色、代表美食等）
const CUISINE_DETAILS: Record<string, {
  dietaryFeatures: string[];     // 饮食特色
  cookingStyle: string;          // 烹饪风格
  signatureDishes: string[];     // 代表菜品名称
  history: string;               // 历史渊源
  region: string;                // 分布区域描述
  schools?: CuisineSchool[];     // 流派分支
}> = {
  // ========== 四大菜系 / 八大菜系 ==========
  鲁菜: {
    dietaryFeatures: [
      "咸鲜为主，注重火候，善用葱香，是北方菜系代表",
      "「清汤、奶汤」双绝，清汤如水、奶汤如乳",
      "「爆」法冠绝天下，油爆、汤爆、酱爆各具特色",
      "海鲜烹调精湛，胶东菜以鲜见长",
      "孔府菜讲究排场礼仪，是宫廷菜与官府菜的典范",
    ],
    cookingStyle: "爆、烧、炒、扒、蒸、煮，尤以「爆」法和「吊汤」绝技著称，火候精准",
    signatureDishes: ["糖醋鲤鱼", "葱烧海参", "九转大肠", "油爆双脆", "奶汤蒲菜", "德州扒鸡", "清汤燕窝"],
    history: "鲁菜源于春秋战国，齐桓公御厨易牙善调味，南北朝贾思勰《齐民要术》总结黄河中下游烹饪技艺。明清两代鲁菜成为宫廷菜基础，大量山东厨师进入御膳房。鲁菜是八大菜系中唯一的北方菜系，影响整个北方饮食文化，被誉为「北方菜系之冠」。",
    region: "山东全省，辐射华北、东北、京津地区",
    schools: [
      { name: "济南菜", region: "济南、泰安", features: "善爆、烧、炒、扒，清汤、奶汤双绝，糖醋鲤鱼、九转大肠为代表" },
      { name: "胶东菜", region: "烟台、青岛、威海", features: "以海鲜见长，善爆、炸、蒸、溜，油爆海螺、清蒸加吉鱼为代表" },
      { name: "孔府菜", region: "曲阜", features: "宫廷与官府菜结合，讲究排场与礼仪，孔府一品锅、当朝一品锅为代表" },
    ],
  },
  川菜: {
    dietaryFeatures: [
      "24种味型冠绝天下，麻辣、鱼香、宫保、怪味等各具特色",
      "「一菜一格，百菜百味」，味型丰富度居各菜系之首",
      "「三椒」（花椒、辣椒、胡椒）的精妙运用",
      "火锅文化盛行，重庆火锅、麻辣烫风靡全国",
      "小吃种类繁多，龙抄手、钟水饺、担担面、夫妻肺片并称成都小吃四大名旦",
    ],
    cookingStyle: "炒、煎、炸、煮、蒸、烧、炖，尤以小炒、干煸、干烧、家常烧见长，善用泡椒、豆瓣酱",
    signatureDishes: ["麻婆豆腐", "宫保鸡丁", "回锅肉", "水煮鱼", "夫妻肺片", "东坡肘子", "开水白菜"],
    history: "川菜源于古巴蜀，已有两千余年历史。西汉扬雄《蜀都赋》记巴蜀饮食之盛。明末辣椒传入后，川菜形成麻辣特色。清代《成都通览》记载川菜1328种。近现代川菜发展出24种味型，是中国味型最丰富的菜系，也是最具国际影响力的中国菜系之一。",
    region: "四川、重庆，辐射全国，海外华人社区亦有分布",
    schools: [
      { name: "上河帮（蓉派）", region: "成都、乐山", features: "细腻讲究，官府菜遗风，善「麻」，开水白菜、麻婆豆腐、宫保鸡丁为代表" },
      { name: "下河帮（渝派）", region: "重庆、达州", features: "粗犷豪放，善「辣」，火锅、毛血旺、辣子鸡等江湖菜为代表" },
      { name: "小河帮（盐帮菜）", region: "自贡、内江", features: "味厚香浓，善「香」，水煮牛肉、冷吃兔、富顺豆花为代表" },
    ],
  },
  粤菜: {
    dietaryFeatures: [
      "清淡鲜美，注重原味，讲究「食在广州」",
      "早茶点心文化兴盛，「一盅两件」是老广生活方式",
      "烧腊技艺精湛，叉烧、烧鹅、脆皮烧肉并称烧腊三宝",
      "煲汤养生文化深厚，老火靓汤是粤人日常",
      "海鲜烹调鲜活，清蒸为主，保留原汁原味",
    ],
    cookingStyle: "蒸、炒、炸、焖、炖、煲，讲究「镬气」，注重火候，善用豉油、蚝油提鲜",
    signatureDishes: ["白切鸡", "烧鹅", "清蒸石斑", "虾饺", "叉烧", "煲仔饭", "老火靓汤"],
    history: "粤菜源于先秦，汉唐已具规模。广州自唐代起为通商口岸，融汇中外饮食。清代「食在广州」名扬天下。粤菜是中国最早走向世界的菜系，海外中餐馆以粤菜为主，2021年潮州菜烹饪技艺入选第五批国家级非遗。",
    region: "广东、香港、澳门，辐射海外华人社区",
    schools: [
      { name: "广府菜", region: "广州、佛山、珠江三角洲", features: "清淡鲜美，早茶文化，烧腊精湛，白切鸡、叉烧为代表" },
      { name: "潮州菜（潮菜）", region: "潮州、汕头、揭阳", features: "以鲜为核心，卤水、海鲜、粿品，卤鹅、牛肉丸为代表" },
      { name: "东江菜（客家菜）", region: "惠州、梅州", features: "肥咸香，酿豆腐、盐焗鸡、梅菜扣肉为代表" },
    ],
  },
  苏菜: {
    dietaryFeatures: [
      "清淡鲜美，注重本味，是「文人菜」代表",
      "刀工精细，文思豆腐、大煮干丝冠绝天下",
      "炖焖技艺精湛，火候考究",
      "甜咸适中，苏锡菜偏甜，淮扬菜清淡",
      "淮扬菜是新中国国宴菜的基础，以清淡精细著称",
    ],
    cookingStyle: "炖、焖、煨、焐、蒸、炒，尤以炖焖见长，刀工冠绝天下",
    signatureDishes: ["松鼠桂鱼", "狮子头", "盐水鸭", "大煮干丝", "文思豆腐", "叫花鸡", "水晶肴肉"],
    history: "苏菜源于先秦，唐宋时期江南经济文化繁荣，苏菜随之发展。清代乾隆南巡后淮扬菜进入宫廷，《扬州画舫录》所载满汉席以淮扬风味为主。苏菜以「文人菜」著称，讲究刀工与火候，是新中国国宴菜的基础。",
    region: "江苏全省，辐射长三角地区",
    schools: [
      { name: "金陵菜（南京菜）", region: "南京", features: "鸭肴冠绝天下，善炖焖，盐水鸭、鸭血粉丝汤为代表" },
      { name: "淮扬菜", region: "扬州、淮安", features: "刀工精细，清淡鲜美，狮子头、大煮干丝、文思豆腐为代表" },
      { name: "苏锡菜", region: "苏州、无锡", features: "偏甜，善炖焖，松鼠桂鱼、无锡酱排骨为代表" },
      { name: "徐海菜", region: "徐州、连云港", features: "偏咸辣，近鲁菜，地锅鸡、把子肉为代表" },
    ],
  },
  浙菜: {
    dietaryFeatures: [
      "清淡鲜嫩，讲究原汁原味，江南水乡的饮食雅致",
      "酒香入菜，绍兴菜以酒调味独具特色",
      "海鲜丰富，宁波菜以咸鲜合一见长",
      "小吃精美，杭州小笼包、宁波汤圆、嘉兴粽子并称浙江三大小吃",
      "文人雅食，东坡肉、西湖醋鱼承载千年文化",
    ],
    cookingStyle: "炒、炸、烩、熘、蒸、煮，讲究刀工与火候，善用酒、糖调味",
    signatureDishes: ["西湖醋鱼", "东坡肉", "龙井虾仁", "叫花鸡", "宋嫂鱼羹", "宁波汤圆", "干菜焖肉"],
    history: "浙菜源于先秦，南宋定都杭州后，南北烹饪技艺交融，浙菜大发展。西湖醋鱼、东坡肉等名菜均源于宋代。浙菜以江南水乡的饮食雅致著称，承载着深厚的文人文化底蕴。",
    region: "浙江全省",
    schools: [
      { name: "杭帮菜", region: "杭州", features: "精致典雅，西湖醋鱼、东坡肉、龙井虾仁为代表" },
      { name: "宁波菜", region: "宁波", features: "海鲜见长，咸鲜合一，汤圆、呛蟹、雪菜大汤黄鱼为代表" },
      { name: "绍兴菜", region: "绍兴", features: "以酒入菜，霉鲜独特，梅干菜扣肉、醉鸡为代表" },
      { name: "温州菜（瓯菜）", region: "温州", features: "海鲜丰富，清淡鲜美，三丝敲鱼、温州鱼丸为代表" },
    ],
  },
  闽菜: {
    dietaryFeatures: [
      "清淡鲜美，酸甜适口，汤菜见长",
      "「一汤十变」，汤菜技艺冠绝天下",
      "红糟调味独特，是闽菜标志性风味",
      "海鲜丰富，佛跳墙集山珍海味之大成",
      "刀工精细，荔枝肉、刀鱼丸体现精湛技艺",
    ],
    cookingStyle: "煎、炒、炸、蒸、炖，尤以汤菜见长，善用红糟、虾油调味",
    signatureDishes: ["佛跳墙", "荔枝肉", "醉排骨", "海蛎煎", "鱼丸", "沙县扁肉", "红糟鸡"],
    history: "闽菜源于先秦闽越，唐宋时期中原移民带来北方烹饪技艺。福建面海背山，山珍海味兼备。闽菜以汤菜见长，酸甜适口，是海外华人社区的重要菜系。佛跳墙是闽菜巅峰之作，集山珍海味之大成。",
    region: "福建全省，辐射台湾、东南亚",
    schools: [
      { name: "福州菜", region: "福州", features: "清淡鲜美，汤菜见长，佛跳墙、荔枝肉为代表" },
      { name: "闽南菜", region: "厦门、泉州、漳州", features: "海鲜与药膳并重，海蛎煎、沙茶面为代表" },
      { name: "闽西菜", region: "长汀、龙岩", features: "客家风味，山珍为主，长汀豆腐干、客家酿豆腐为代表" },
    ],
  },
  湘菜: {
    dietaryFeatures: [
      "香辣为主，味重色浓，与川菜并称「辣味双雄」",
      "重在「香辣」而非「麻辣」，辣椒用法多样",
      "煨炖技艺精湛，红煨鱼翅、腊味合蒸是经典",
      "腊味文化独特，湘西腊肉、湖南腊肠享誉全国",
      "剁椒、豆豉善用，剁椒鱼头是湘菜名片",
    ],
    cookingStyle: "煨、炖、蒸、炒、腊，尤以煨、炒见长，善用剁椒、豆豉、腊肉",
    signatureDishes: ["剁椒鱼头", "腊味合蒸", "毛氏红烧肉", "东安鸡", "口味虾", "血鸭", "永州血鸭"],
    history: "湘菜源于先秦楚文化，马王堆汉墓出土菜谱已有湘菜雏形。湖南气候湿热，辣椒明末传入后成为祛湿佳品。湘菜与川菜并称「辣味双雄」，但湘菜重在「香辣」而非「麻辣」，是中国最具人气的菜系之一。",
    region: "湖南全省",
    schools: [
      { name: "湘江流域菜", region: "长沙、湘潭、株洲", features: "煨、炒见长，剁椒鱼头、毛氏红烧肉为代表" },
      { name: "洞庭湖区菜", region: "常德、益阳、岳阳", features: "水产丰富，炖、蒸见长，洞庭鱼头、常德牛肉粉为代表" },
      { name: "湘西山区菜", region: "湘西、怀化、张家界", features: "少数民族风味，腊味、酸味见长，腊肉、酸鱼为代表" },
    ],
  },
  徽菜: {
    dietaryFeatures: [
      "咸鲜为主，重油重色重火功，是八大菜系中最具山野气息的菜系",
      "山珍野味为特色，臭鳜鱼、毛豆腐是徽菜名片",
      "发酵食品独特，臭鳜鱼、毛豆腐体现「以臭为香」的哲学",
      "炭火炖煮，「重火功」是徽菜核心",
      "明清徽商兴盛，徽菜随徽商足迹传遍全国",
    ],
    cookingStyle: "烧、炖、蒸、熏，尤以炖、烧见长，重火功，善用火腿、冰糖提鲜",
    signatureDishes: ["臭鳜鱼", "毛豆腐", "胡适一品锅", "徽州饼", "火腿炖甲鱼", "黄山炖鸽", "问政山笋"],
    history: "徽菜源于宋代的徽州山区，明清徽商兴盛，徽菜随徽商足迹传遍全国。徽菜以山珍野味为特色，重油重色重火功，是八大菜系中最具山野气息的菜系。徽商衰落後，徽菜一度式微，但近年随徽州旅游兴起而重焕生机。",
    region: "安徽全省，辐射徽商足迹所至",
    schools: [
      { name: "皖南菜（徽州菜）", region: "黄山、宣城", features: "山珍野味，重火功，臭鳜鱼、毛豆腐为代表" },
      { name: "沿江菜", region: "芜湖、马鞍山", features: "长江沿岸，水产丰富，长江鲥鱼、无为熏鸭为代表" },
      { name: "沿淮菜", region: "蚌埠、淮南", features: "淮河流域，牛羊肉见长，符离集烧鸡、奶汁肥王鱼为代表" },
    ],
  },
  // ========== 地方菜系 ==========
  京菜: {
    dietaryFeatures: [
      "咸鲜为主，融合宫廷与民间，酱香浓郁",
      "宫廷菜（仿膳）与民间菜并重",
      "烤、涮、爆、炒见长，北京烤鸭、涮羊肉是名片",
      "清真风味影响深远，牛街是北京清真美食聚集地",
      "小吃文化丰富，豆汁、焦圈、卤煮是老北京市井符号",
    ],
    cookingStyle: "烤、涮、爆、炒、焖，善用黄酱、甜面酱，注重火候",
    signatureDishes: ["北京烤鸭", "涮羊肉", "京酱肉丝", "爆肚", "炒肝", "卤煮火烧", "豆汁焦圈"],
    history: "京菜融合宫廷菜、官府菜、民间菜与清真菜，是元明清三代帝都饮食文化的结晶。北京烤鸭源于明宫廷南京烤鸭，经便宜坊、全聚德发扬光大。涮羊肉源于蒙古，清代宫廷盛行后传入民间。",
    region: "北京，辐射京津冀",
    schools: [
      { name: "仿膳菜（宫廷菜）", region: "北京", features: "源于清宫御膳，讲究排场，抓炒鱼片、罗汉大虾为代表" },
      { name: "民间菜", region: "北京", features: "市井风味，酱香浓郁，京酱肉丝、炒肝为代表" },
      { name: "清真菜", region: "牛街", features: "回族风味，牛羊肉为主，爆肚、门钉肉饼为代表" },
    ],
  },
  津菜: {
    dietaryFeatures: [
      "咸鲜为主，兼收并蓄，口味浓厚",
      "「河海两鲜」是特色，渤海海鲜与河鲜并重",
      "小吃文化发达，煎饼馃子、狗不理包子是名片",
      "清真风味影响深远，天津清真菜独树一帜",
    ],
    cookingStyle: "炒、炖、焖、蒸、煮，善用河海两鲜，注重原味",
    signatureDishes: ["狗不理包子", "煎饼馃子", "耳朵眼炸糕", "十八街麻花", "锅巴菜", "贴饽饽熬鱼"],
    history: "津菜源于明清，天津作为漕运枢纽，南来北往的饮食文化在此交融。天津「河海两鲜」得天独厚，渤海海鲜与运河河鲜并重。天津小吃文化发达，煎饼馃子、狗不理包子、耳朵眼炸糕、十八街麻花并称天津四大小吃。",
    region: "天津，辐射京津冀",
  },
  冀菜: {
    dietaryFeatures: [
      "咸鲜为主，擅长溜、炒，注重火候",
      "保定菜、唐山菜、承德菜各具特色",
      "面食文化发达，河北板面（安徽板面）风靡全国",
      "清真风味在沧州、保定影响深远",
    ],
    cookingStyle: "溜、炒、炖、焖，注重火候，善用酱",
    signatureDishes: ["驴肉火烧", "石家庄安徽板面", "锅包肘子", "唐山棋子烧饼", "承德拨御面"],
    history: "冀菜源于燕赵饮食文化，保定、唐山、承德三大流派各具特色。河北地处京畿，饮食受京菜影响深远，同时保留地方特色。",
    region: "河北全省",
  },
  晋菜: {
    dietaryFeatures: [
      "以酸著称，醋文化深厚，山西老陈醋名扬天下",
      "面食技艺冠绝天下，刀削面、剔尖、猫耳朵种类繁多",
      "「一面百样，一面百吃」是晋菜特色",
      "晋商饮食文化影响深远，平遥牛肉、太谷饼是晋商名片",
    ],
    cookingStyle: "蒸、煮、炒、炖，面食技艺精湛，善用醋调味",
    signatureDishes: ["刀削面", "剔尖", "猫耳朵", "平遥牛肉", "太谷饼", "过油肉", "莜面栲栳栳"],
    history: "晋菜源于三晋大地，面食技艺冠绝天下，有「世界面食在中国，中国面食在山西」之说。山西老陈醋是中国四大名醋之首，晋菜以酸著称。晋商兴盛时期，晋菜随晋商足迹传遍北方。",
    region: "山西全省",
  },
  蒙餐: {
    dietaryFeatures: [
      "以咸为主，牛羊肉为主料，原汁原味",
      "「红食」（肉食）与「白食」（奶食）并重",
      "烤全羊、手把肉是蒙餐名片",
      "奶茶、奶皮、奶豆腐是日常饮食",
      "那达慕大会的烤全羊是蒙古族最高规格宴席",
    ],
    cookingStyle: "烤、煮、炖、风干，原汁原味，少用复杂调味",
    signatureDishes: ["烤全羊", "手把肉", "涮羊肉", "稍美", "奶茶", "奶皮", "风干牛肉"],
    history: "蒙餐源于蒙古高原游牧文化，已有千年历史。蒙餐以牛羊肉、奶制品为核心，体现游牧民族适应草原环境的生存智慧。成吉思汗时代的涮羊肉传遍中国，是蒙餐对中华饮食的重要贡献。",
    region: "内蒙古全区，辐射北方地区",
  },
  东北菜: {
    dietaryFeatures: [
      "咸鲜为主，量大味浓，炖菜见长",
      "「东北四大炖」：猪肉炖粉条、小鸡炖蘑菇、鲶鱼炖茄子、排骨炖豆角",
      "锅包肉、地三鲜是东北菜名片",
      "朝鲜族风味影响深远，冷面、打糕、泡菜是东北特色",
      "烧烤文化兴盛，东北烧烤风靡全国",
    ],
    cookingStyle: "炖、炒、烤、蒸，量大味浓，善用酱油、大酱",
    signatureDishes: ["锅包肉", "地三鲜", "小鸡炖蘑菇", "猪肉炖粉条", "东北大拉皮", "杀猪菜", "冷面"],
    history: "东北菜融合鲁菜、满族菜、朝鲜族菜及俄式风味，形成独特风格。东北菜量大味浓，炖菜见长，体现东北人豪爽性格。锅包肉源于哈尔滨，清光绪年间郑兴文所创，是东北菜的「门面担当」。",
    region: "辽宁、吉林、黑龙江",
    schools: [
      { name: "辽菜", region: "沈阳、大连", features: "鲁菜底蕴，海鲜丰富，海味全家福、大连焖子为代表" },
      { name: "吉菜", region: "长春、延边", features: "朝鲜族风味影响，冷面、打糕为代表" },
      { name: "黑菜", region: "哈尔滨、齐齐哈尔", features: "俄式风味融合，锅包肉、红肠为代表" },
    ],
  },
  本帮菜: {
    dietaryFeatures: [
      "浓油赤酱，咸甜适中，精致市井",
      "「一手酱油瓶，一手糖罐子」是本帮菜写照",
      "红烧肉、响油鳝丝是本帮菜名片",
      "上海小吃文化发达，生煎包、小笼包、葱油饼并称上海三大小吃",
      "中西融合，海派餐饮文化独树一帜",
    ],
    cookingStyle: "烧、炒、炖、焖，浓油赤酱，善用酱油、冰糖",
    signatureDishes: ["红烧肉", "响油鳝丝", "生煎包", "小笼包", "葱油拌面", "白斩鸡", "排骨年糕"],
    history: "本帮菜源于上海本地农家菜，清末民初上海开埠后，本帮菜吸收苏锡菜、宁帮菜精华，形成浓油赤酱、咸甜适中的独特风格。上海作为国际大都市，本帮菜与西餐融合，催生了海派餐饮文化。",
    region: "上海，辐射长三角",
  },
  赣菜: {
    dietaryFeatures: [
      "咸鲜辣兼备，吃辣不亚于川湘",
      "「无辣不欢」，江西人是隐藏的吃辣高手",
      "米粉文化发达，南昌拌粉、景德镇冷粉各具特色",
      "瓦罐汤文化独特，是南昌早餐标配",
    ],
    cookingStyle: "炒、炖、蒸、焖，善用辣椒、豆豉",
    signatureDishes: ["瓦罐汤", "南昌拌粉", "三杯鸡", "藜蒿炒腊肉", "米粉蒸肉", "赣南小炒鱼"],
    history: "赣菜源于赣鄱大地，吃辣不亚于川湘，是「隐藏的吃辣大省」。江西米粉文化发达，各地米粉风味各异。三杯鸡源于江西宁都，后传入台湾成为名菜。瓦罐汤是南昌饮食文化名片。",
    region: "江西全省",
  },
  豫菜: {
    dietaryFeatures: [
      "五味调和，咸鲜为主，南北兼容",
      "洛阳水席是豫菜巅峰，24道菜以汤水为主",
      "胡辣汤是中原早餐灵魂，逍遥镇、北舞渡两大流派",
      "面食文化发达，烩面、焖饼是河南日常",
    ],
    cookingStyle: "炖、煮、蒸、炒，五味调和，善用胡椒、醋",
    signatureDishes: ["胡辣汤", "洛阳水席", "郑州烩面", "道口烧鸡", "开封灌汤包", "焖饼"],
    history: "豫菜源于中原，是中华饮食文化的发源地之一。洛阳水席源于唐代，24道菜以汤水为主，是中国最古老的宴席形式之一。胡辣汤是中原早餐灵魂，逍遥镇胡辣汤名扬全国。",
    region: "河南全省",
  },
  鄂菜: {
    dietaryFeatures: [
      "咸鲜微辣，蒸菜见长，水产丰富",
      "「千湖之省」水产丰富，武昌鱼、排骨藕汤是名片",
      "蒸菜文化发达，沔阳三蒸是鄂菜代表",
      "早餐文化（过早）冠绝全国，武汉热干面、豆皮、面窝种类繁多",
    ],
    cookingStyle: "蒸、炖、炒、烧，善用藕、鱼，注重原味",
    signatureDishes: ["热干面", "武昌鱼", "排骨藕汤", "沔阳三蒸", "豆皮", "鸭脖", "面窝"],
    history: "鄂菜源于楚文化，「千湖之省」水产丰富。武汉早餐文化（过早）冠绝全国，热干面、豆皮、面窝、欢喜坨种类繁多。沔阳三蒸是鄂菜蒸菜代表，排骨藕汤是湖北人乡愁的味道。",
    region: "湖北全省",
  },
  桂菜: {
    dietaryFeatures: [
      "酸辣为主，兼有粤菜风味，米粉文化发达",
      "「酸嘢」文化独特，酸笋、酸豆角是广西味道灵魂",
      "米粉种类冠绝全国，柳州螺蛳粉、桂林米粉、南宁老友粉并称广西三大米粉",
      "少数民族风味丰富，壮族、瑶族、苗族饮食各具特色",
    ],
    cookingStyle: "炒、炖、蒸、煮，善用酸笋、柠檬、酸姜",
    signatureDishes: ["柳州螺蛳粉", "桂林米粉", "南宁老友粉", "柠檬鸭", "阳朔啤酒鱼", "巴马香猪"],
    history: "桂菜融合粤菜风味与少数民族饮食，酸辣为主。广西米粉文化发达，柳州螺蛳粉近年风靡全国。「酸嘢」文化是广西独特饮食现象，酸笋、酸豆角是广西味道的灵魂。",
    region: "广西全区",
  },
  琼菜: {
    dietaryFeatures: [
      "清淡鲜美，椰风海韵，海鲜见长",
      "椰子入菜独特，椰子鸡、椰子饭是海南特色",
      "四大名菜：文昌鸡、加积鸭、东山羊、和乐蟹",
      "海南粉、抱罗粉是海南早餐灵魂",
    ],
    cookingStyle: "蒸、煮、炖、白切，注重原味，善用椰子",
    signatureDishes: ["文昌鸡", "加积鸭", "东山羊", "和乐蟹", "椰子鸡", "海南粉", "清补凉"],
    history: "琼菜源于海南岛，清淡鲜美，椰风海韵。海南四大名菜（文昌鸡、加积鸭、东山羊、和乐蟹）享誉华南。椰子入菜是琼菜独特之处，椰子鸡、椰子饭别具风味。",
    region: "海南全省",
  },
  滇菜: {
    dietaryFeatures: [
      "酸辣鲜香，少数民族风味丰富，菌菇见长",
      "野生菌文化独特，松茸、牛肝菌、鸡枞是云南山珍",
      "少数民族风味丰富，傣族、白族、纳西族饮食各具特色",
      "过桥米线是滇菜名片，源于蒙自，已有百年历史",
    ],
    cookingStyle: "炒、炖、蒸、煮、烤，善用酸笋、香茅草、菌菇",
    signatureDishes: ["过桥米线", "汽锅鸡", "野生菌火锅", "傣味烤鱼", "宣威火腿", "饵块", "破酥包"],
    history: "滇菜源于云南高原，少数民族风味丰富，是中国最具民族特色的菜系之一。云南野生菌种类冠绝全国，松茸、牛肝菌、鸡枞是云南山珍。过桥米线源于蒙自，已有百年历史，是滇菜名片。",
    region: "云南全省",
  },
  黔菜: {
    dietaryFeatures: [
      "酸辣为主，酸汤文化独特，辣中带酸",
      "「三天不吃酸，走路打蹿蹿」是贵州俗语",
      "酸汤鱼是黔菜名片，苗家酸汤红白两种",
      "少数民族风味丰富，苗族、侗族、布依族饮食各具特色",
    ],
    cookingStyle: "煮、炖、炒、蒸，善用酸汤、糟辣椒",
    signatureDishes: ["酸汤鱼", "丝娃娃", "花溪牛肉粉", "肠旺面", "糟辣脆皮鱼", "折耳根炒腊肉"],
    history: "黔菜源于贵州高原，酸辣为主，酸汤文化独特。「三天不吃酸，走路打蹿蹿」是贵州俗语，体现贵州人对酸的热爱。酸汤鱼是黔菜名片，苗家酸汤分红酸（番茄酸）和白酸（米汤酸）两种。",
    region: "贵州全省",
  },
  藏餐: {
    dietaryFeatures: [
      "以糌粑、牛羊肉、酥油茶为核心，高原风味",
      "「无糌粑不成藏餐」，青稞是主食",
      "酥油茶每日必备，补充能量御寒",
      "风干牛肉是冬季储备，耐储存",
      "「甜茶馆」文化兴盛，是拉萨市井符号",
    ],
    cookingStyle: "煮、炖、烤、风干，原汁原味，少用复杂调味",
    signatureDishes: ["酥油茶", "糌粑", "风干牛肉", "藏香猪", "青稞酒", "甜茶", "藏式酸奶"],
    history: "藏餐源于青藏高原游牧与农耕文化，已有千年历史。藏餐以青稞、牦牛、酥油为核心，体现高原民族适应高寒环境的生存智慧。藏餐与藏传佛教文化紧密相连，是藏族文化的重要载体。",
    region: "西藏全境，以及四川、青海、甘肃、云南藏区",
  },
  西北菜: {
    dietaryFeatures: [
      "酸辣咸香，面食文化发达，古朴厚重",
      "面食种类繁多，肉夹馍、biangbiang面、臊子面是陕西名片",
      "牛羊肉泡馍是西安饮食文化核心",
      "清真风味影响深远，西北回民饮食独具特色",
    ],
    cookingStyle: "炖、煮、蒸、炒，善用辣椒、醋、孜然",
    signatureDishes: ["羊肉泡馍", "肉夹馍", "biangbiang面", "臊子面", "凉皮", "兰州牛肉面", "静宁烧鸡"],
    history: "西北菜源于黄土高原与河西走廊，面食文化发达，古朴厚重。西安作为十三朝古都，饮食文化底蕴深厚。羊肉泡馍、肉夹馍、biangbiang面是陕西名片。兰州牛肉面是西北面食代表，遍布全国。",
    region: "陕西、甘肃、青海、宁夏",
  },
  新疆菜: {
    dietaryFeatures: [
      "咸香为主，烤肉、抓饭为代表，浓郁豪迈",
      "烤全羊、烤包子、馕是新疆三大主食",
      "大盘鸡是新疆名片，风靡全国",
      "瓜果文化发达，哈密瓜、葡萄、石榴是新疆特产",
    ],
    cookingStyle: "烤、煮、蒸、炒，善用孜然、辣椒，注重原味",
    signatureDishes: ["大盘鸡", "烤全羊", "羊肉串", "抓饭", "馕", "烤包子", "拉条子"],
    history: "新疆菜融合维吾尔、哈萨克、回等民族风味，浓郁豪迈。烤全羊是新疆最高规格宴席，大盘鸡是新疆名片，源于沙湾县，风靡全国。馕是新疆主食，已有两千余年历史。",
    region: "新疆全区",
  },
  清真菜: {
    dietaryFeatures: [
      "遵循伊斯兰饮食规约，禁猪、禁酒、禁自死物",
      "以牛羊肉为核心，注重「清真」屠宰方式",
      "「清真」二字意为「洁净合法」，贯穿选料、加工、烹饪全过程",
      "面食文化发达，拉面、馕、油香是日常主食",
      "善用香料，孜然、花椒、草果去膻提鲜",
    ],
    cookingStyle: "烤、煮、炖、焖为主，注重原味，善用香料去膻，火候讲究",
    signatureDishes: ["手抓羊肉", "烤全羊", "兰州牛肉面", "羊肉泡馍", "大盘鸡", "馕", "油香"],
    history: "清真菜源于唐代阿拉伯、波斯商人来华，经宋元明清发展，融合中国烹饪技艺与伊斯兰饮食规约，形成独特菜系。清真菜遍布全国，以西北回、维吾尔、哈萨克等民族聚居区为盛，是中国饮食文化的重要组成部分。",
    region: "宁夏、甘肃、青海、新疆等西北省区，以及全国回族聚居区",
  },
  客家菜: {
    dietaryFeatures: [
      "讲究「肥、咸、香」，适应迁徙劳作之需",
      "「无菜不酿」，酿豆腐、酿茄子、酿苦瓜是经典",
      "保留中原古风，重蒸、炖、煲，少爆炒",
      "「盐焗」独特工艺，盐焗鸡是客家名片",
      "米食文化发达，粄、粿种类繁多",
    ],
    cookingStyle: "蒸、炖、煲、焗、焖为主，讲究原汁原味与火候，少用辛辣",
    signatureDishes: ["酿豆腐", "盐焗鸡", "梅菜扣肉", "猪肚包鸡", "盆菜", "客家擂茶", "粄条"],
    history: "客家菜源于中原汉人南迁，保留了大量唐宋古风。客家人迁徙至闽西、粤东、赣南山区，以「客」为家，饮食既承中原遗风，又融南方食材，形成独特菜系。客家菜是客家文化的重要载体，客家菜烹饪技艺入选广东省级非物质文化遗产。",
    region: "广东梅州、惠州、韶关；福建龙岩、长汀；江西赣州等客家聚居区",
  },
  潮菜: {
    dietaryFeatures: [
      "以「鲜」为核心，讲究本味与原汁原味",
      "「夜糜」打冷文化独特，深夜粥档是潮汕风情",
      "卤水技艺精湛，卤鹅、卤猪脚是潮汕名片",
      "工夫茶佐餐，茶食相融",
      "海鲜、粿品、小吃文化极其发达",
    ],
    cookingStyle: "蒸、煮、炖、卤为主，清淡鲜美，刀工精细，讲究火候",
    signatureDishes: ["卤鹅", "牛肉丸", "潮汕砂锅粥", "蚝烙", "粿条", "潮州打冷", "工夫茶"],
    history: "潮菜是粤菜三大流派之一（广府菜、潮州菜、东江菜），源于潮汕平原，已有千年历史。潮汕背山面海，物产丰饶，饮食既承中原古风，又融闽南、南洋风味。潮菜烹饪技艺入选国家级非遗，是潮汕文化的味觉名片。",
    region: "广东潮州、汕头、揭阳等潮汕地区，以及港澳、东南亚潮人社区",
  },
  台湾菜: {
    dietaryFeatures: [
      "融合闽粤、日式、外省眷村风味，多元并蓄",
      "「夜市文化」兴盛，小吃种类冠绝华人世界",
      "「清、淡、鲜、醇」为本，注重原味",
      "米食、面食并重，卤肉饭、牛肉面是「国饭」",
      "茶饮文化发达，珍珠奶茶风靡全球",
    ],
    cookingStyle: "蒸、煮、炒、卤为主，清淡中带甘甜，善用酱油、米酒、糖",
    signatureDishes: ["卤肉饭", "牛肉面", "珍珠奶茶", "蚵仔煎", "鼎边锉", "大肠包小肠", "凤梨酥"],
    history: "台湾菜以闽菜为基础，融合粤菜、日式料理及1949年后外省眷村菜，形成独特风味。台湾夜市文化是世界知名的小吃文化，2010年代台湾饮品、烘焙走向全球，是中华美食现代化的重要代表。",
    region: "台湾全岛，以台北、台南、高雄美食文化最盛",
  },
};

export default function CuisinePanel() {
  const cuisinePanelOpen = useStore((s) => s.cuisinePanelOpen);
  const selectedCuisine = useStore((s) => s.selectedCuisine);
  const closeCuisinePanel = useStore((s) => s.closeCuisinePanel);
  const foods = useStore((s) => s.foods);
  const selectFood = useStore((s) => s.selectFood);
  const focusFood = useStore((s) => s.focusFood);

  const [isEditing, setIsEditing] = useState(false);
  const [editDetail, setEditDetail] = useState<typeof CUISINE_DETAILS[string] | null>(null);
  const [newFeature, setNewFeature] = useState("");
  const [newDish, setNewDish] = useState("");

  if (!cuisinePanelOpen || !selectedCuisine) return null;

  const cuisine = selectedCuisine as Cuisine;
  const flavor = getCuisineFlavor(cuisine);
  const originalDetail = CUISINE_DETAILS[cuisine];
  const detail = isEditing && editDetail ? editDetail : originalDetail;
  const cuisineFoods = foods.filter((f) => f.cuisine === cuisine);
  const originProvinces = CUISINE_PROVINCES[cuisine] || [];
  const totalCount = cuisineFoods.length;

  // 取该菜系热度最高的代表美食（排除饮食传统类）
  // 排序优先级：1.名菜 2.热度 3.本地传统
  const topFoods = [...cuisineFoods]
    .filter((f) => f.type !== "tradition" && !(f.tags || []).includes("饮食传统"))
    .sort((a, b) => {
      const fameWeight: Record<string, number> = { 名菜: 100, 热门: 80, 地方名吃: 50, 普通: 20 };
      const fa = fameWeight[inferFame(a)] || 20;
      const fb = fameWeight[inferFame(b)] || 20;
      if (fa !== fb) return fb - fa;
      const pa = a.popularity || 5;
      const pb = b.popularity || 5;
      if (pa !== pb) return pb - pa;
      const ta = a.type === "traditional" ? 1 : 0;
      const tb = b.type === "traditional" ? 1 : 0;
      return tb - ta;
    })
    .slice(0, 12);

  // 该菜系下的饮食传统（type === "tradition" 或 tags 含"饮食传统"）
  const traditionFoods = cuisineFoods
    .filter((f) => f.type === "tradition" || (f.tags || []).includes("饮食传统"))
    .sort((a, b) => (b.popularity || 5) - (a.popularity || 5));

  const startEdit = () => {
    if (originalDetail) {
      setEditDetail(JSON.parse(JSON.stringify(originalDetail)));
      setIsEditing(true);
    }
  };
  const handleSave = () => {
    if (editDetail) {
      CUISINE_DETAILS[cuisine] = editDetail;
    }
    setIsEditing(false);
    setEditDetail(null);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditDetail(null);
  };
  const setField = (patch: Partial<typeof CUISINE_DETAILS[string]>) => {
    if (editDetail) setEditDetail({ ...editDetail, ...patch });
  };

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 z-[1200] bg-ink-900/20 backdrop-blur-[2px]"
        onClick={closeCuisinePanel}
      />

      {/* 面板 */}
      <aside className="fixed right-0 top-16 z-[1201] flex h-[calc(100%-4rem)] w-full max-w-md flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
        {/* 头部 */}
        <div
          className="relative overflow-hidden px-5 py-5"
          style={{
            background: flavor
              ? `linear-gradient(135deg, ${flavor.color}15, ${flavor.color}05)`
              : undefined,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Utensils size={20} className="text-cinnabar-500" />
                <h2 className="font-serif text-2xl font-bold text-ink-900">{cuisine}</h2>
              </div>
              {flavor && (
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3 py-1 font-serif text-sm"
                    style={{ backgroundColor: `${flavor.color}15`, color: flavor.color }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: flavor.color }}
                    />
                    {flavor.flavor}口味
                  </span>
                  <span className="font-sans text-xs text-ink-400">
                    共 {totalCount} 道美食
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1 rounded-lg bg-cinnabar-500 px-3 py-1.5 font-serif text-xs text-paper-50 transition-colors hover:bg-cinnabar-600"
                  >
                    <Save size={12} />
                    保存
                  </button>
                  <button
                    onClick={handleCancel}
                    className="rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 transition-colors hover:bg-paper-200"
                  >
                    取消
                  </button>
                </>
              ) : (
                detail && (
                  <button
                    onClick={startEdit}
                    className="flex items-center gap-1 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 transition-colors hover:bg-paper-200"
                  >
                    <Pencil size={12} />
                    编辑
                  </button>
                )
              )}
              <button
                onClick={closeCuisinePanel}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          {flavor && (
            <p className="mt-2 font-serif text-sm leading-relaxed text-ink-600">
              {flavor.description}
            </p>
          )}
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* 历史渊源 */}
          {detail && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <BookOpen size={16} className="text-cinnabar-500" />
                历史渊源
              </h3>
              {isEditing ? (
                <textarea
                  value={editDetail?.history || ""}
                  onChange={(e) => setField({ history: e.target.value })}
                  rows={5}
                  className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-2 font-serif text-sm leading-relaxed text-ink-700 outline-none focus:border-ochre-500/40"
                />
              ) : (
                <p className="font-serif text-sm leading-relaxed text-ink-700">
                  {detail.history}
                </p>
              )}
            </section>
          )}

          {/* 流派分支 */}
          {detail && detail.schools && detail.schools.length > 0 && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-3 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <Layers size={16} className="text-cinnabar-500" />
                流派分支
              </h3>
              <div className="space-y-2.5">
                {detail.schools.map((school, idx) => (
                  <div key={idx} className="rounded-lg border border-ochre-500/10 bg-paper-50/60 p-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cinnabar-500/10 font-latin text-[11px] font-bold text-cinnabar-600">
                        {idx + 1}
                      </span>
                      <span className="font-serif text-sm font-semibold text-ink-900">
                        {school.name}
                      </span>
                      <span className="font-sans text-[11px] text-ink-400">
                        {school.region}
                      </span>
                    </div>
                    <p className="mt-1.5 pl-7 font-serif text-[13px] leading-relaxed text-ink-600">
                      {school.features}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 分布区域 */}
          {detail && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <MapPin size={16} className="text-cinnabar-500" />
                分布区域
              </h3>
              {isEditing ? (
                <input
                  type="text"
                  value={editDetail?.region || ""}
                  onChange={(e) => setField({ region: e.target.value })}
                  className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                />
              ) : (
                <p className="font-serif text-sm leading-relaxed text-ink-700">
                  {detail.region}
                </p>
              )}
              {originProvinces.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {originProvinces.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-paper-200/60 px-2.5 py-0.5 font-serif text-xs text-ink-600"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 烹饪风格 */}
          {detail && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <Utensils size={16} className="text-cinnabar-500" />
                烹饪风格
              </h3>
              {isEditing ? (
                <textarea
                  value={editDetail?.cookingStyle || ""}
                  onChange={(e) => setField({ cookingStyle: e.target.value })}
                  rows={3}
                  className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-2 font-serif text-sm leading-relaxed text-ink-700 outline-none focus:border-ochre-500/40"
                />
              ) : (
                <p className="font-serif text-sm leading-relaxed text-ink-700">
                  {detail.cookingStyle}
                </p>
              )}
            </section>
          )}

          {/* 饮食特色 */}
          {detail && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <BookOpen size={16} className="text-cinnabar-500" />
                饮食特色
              </h3>
              {isEditing ? (
                <>
                  <ul className="mb-2 space-y-1.5">
                    {(editDetail?.dietaryFeatures || []).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cinnabar-500" />
                        <input
                          type="text"
                          value={feat}
                          onChange={(e) => {
                            const arr = [...(editDetail?.dietaryFeatures || [])];
                            arr[idx] = e.target.value;
                            setField({ dietaryFeatures: arr });
                          }}
                          className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-[13px] text-ink-700 outline-none focus:border-ochre-500/40"
                        />
                        <button
                          onClick={() => setField({ dietaryFeatures: (editDetail?.dietaryFeatures || []).filter((_, i) => i !== idx) })}
                          className="mt-1 text-ink-400 hover:text-cinnabar-500"
                        >
                          <X size={12} />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const t = newFeature.trim();
                          if (t) { setField({ dietaryFeatures: [...(editDetail?.dietaryFeatures || []), t] }); setNewFeature(""); }
                        }
                      }}
                      placeholder="添加饮食特色..."
                      className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                    <button
                      onClick={() => {
                        const t = newFeature.trim();
                        if (t) { setField({ dietaryFeatures: [...(editDetail?.dietaryFeatures || []), t] }); setNewFeature(""); }
                      }}
                      className="flex items-center gap-1 rounded-lg bg-ochre-500/80 px-2 py-1 font-serif text-xs text-paper-50 hover:bg-ochre-500"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </>
              ) : (
                <ul className="space-y-2">
                  {detail.dietaryFeatures.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 font-serif text-[13px] leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cinnabar-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* 代表菜品名称 */}
          {detail && detail.signatureDishes.length > 0 && (
            <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <Trophy size={16} className="text-ochre-500" />
                经典代表
              </h3>
              {isEditing ? (
                <>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {(editDetail?.signatureDishes || []).map((dish, idx) => (
                      <span key={idx} className="flex items-center gap-1 rounded-full border border-ochre-500/20 bg-paper-50/80 px-2.5 py-1 font-serif text-xs text-ink-700">
                        {dish}
                        <button
                          onClick={() => setField({ signatureDishes: (editDetail?.signatureDishes || []).filter((_, i) => i !== idx) })}
                          className="text-ink-400 hover:text-cinnabar-500"
                        >
                          <X size={10} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={newDish}
                      onChange={(e) => setNewDish(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          const t = newDish.trim();
                          if (t) { setField({ signatureDishes: [...(editDetail?.signatureDishes || []), t] }); setNewDish(""); }
                        }
                      }}
                      placeholder="添加代表菜品..."
                      className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                    <button
                      onClick={() => {
                        const t = newDish.trim();
                        if (t) { setField({ signatureDishes: [...(editDetail?.signatureDishes || []), t] }); setNewDish(""); }
                      }}
                      className="flex items-center gap-1 rounded-lg bg-ochre-500/80 px-2 py-1 font-serif text-xs text-paper-50 hover:bg-ochre-500"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {detail.signatureDishes.map((dish) => (
                    <span
                      key={dish}
                      className="rounded-full border border-ochre-500/20 bg-paper-50/80 px-2.5 py-1 font-serif text-xs text-ink-700"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 饮食传统（可点击跳转到对应详情） */}
          {traditionFoods.length > 0 && (
            <section className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-50/20 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <Scroll size={16} className="text-emerald-600" />
                饮食传统
                <span className="ml-1 font-sans text-[11px] font-normal text-ink-400">
                  点击查看详情（共{traditionFoods.length}项）
                </span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {traditionFoods.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => {
                      selectFood(food);
                      focusFood(food);
                    }}
                    className="group inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-serif text-xs text-emerald-700 transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:shadow-sm"
                  >
                    <Scroll size={10} className="text-emerald-500" />
                    {food.name}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* 菜系代表美食列表 */}
          <h3 className="mb-3 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
            <Flame size={16} className="text-cinnabar-500" />
            {cuisine}代表美食
            <span className="ml-1 font-sans text-[11px] font-normal text-ink-400">
              按热度排序
            </span>
          </h3>

          <div className="space-y-2">
            {topFoods.map((food, idx) => (
              <CuisineFoodRow
                key={food.id}
                food={food}
                rank={idx + 1}
                onClick={() => {
                  selectFood(food);
                  focusFood(food);
                }}
              />
            ))}
          </div>

          {topFoods.length === 0 && (
            <div className="py-8 text-center">
              <p className="font-serif text-sm text-ink-400">暂无数据</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

function CuisineFoodRow({
  food,
  rank,
  onClick,
}: {
  food: Food;
  rank: number;
  onClick: () => void;
}) {
  const fame = inferFame(food);
  const rankColor =
    rank === 1
      ? "bg-ochre-500 text-paper-50"
      : rank === 2
        ? "bg-ochre-400 text-paper-50"
        : rank === 3
          ? "bg-ochre-300 text-paper-50"
          : "bg-paper-200 text-ink-500";

  const fameColor: Record<string, string> = {
    名菜: "bg-cinnabar-500/10 text-cinnabar-600",
    热门: "bg-orange-500/10 text-orange-600",
    地方名吃: "bg-indigo2-500/10 text-indigo2-600",
    普通: "bg-ink-500/10 text-ink-500",
  };

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-2.5 text-left transition-all hover:border-cinnabar-500/40 hover:bg-cinnabar-50/20 hover:shadow-sm"
    >
      <div
        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-latin text-sm font-bold ${rankColor}`}
      >
        {rank}
      </div>

      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate font-serif text-sm font-medium text-ink-900">
            {food.name}
          </p>
          <span
            className={`flex-shrink-0 rounded px-1.5 py-0.5 font-serif text-[10px] ${fameColor[fame]}`}
          >
            {fame}
          </span>
        </div>
        <div className="mt-0.5 flex items-center gap-2 font-sans text-[11px] text-ink-400">
          <span>{food.province}</span>
          <span>·</span>
          <span>{food.category}</span>
          <span>·</span>
          <span>{food.taste}</span>
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-col items-end">
        <div className="flex items-center gap-0.5">
          <Flame size={11} className="text-cinnabar-500" />
          <span className="font-latin text-xs font-semibold text-cinnabar-600">
            {food.popularity || 5}
          </span>
        </div>
      </div>
    </button>
  );
}
