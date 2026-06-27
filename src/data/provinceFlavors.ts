import type { Province, Taste, Cuisine } from "@/types/food";

// 省份总体口味特征（根据可靠资料总结）
export interface ProvinceFlavor {
  province: Province;
  flavor: string;        // 总体口味描述（如"咸鲜"、"麻辣"等）
  taste: Taste;          // 对应的 Taste 类型
  color: string;         // 口味对应颜色
  description: string;   // 口味特征说明
}

// 口味-颜色映射
export const FLAVOR_COLORS: Record<string, string> = {
  咸鲜: "#2c5f7c",   // 深蓝
  麻辣: "#c8392e",   // 朱红
  香辣: "#e85d3a",   // 橙红
  酸辣: "#f08c3a",   // 橙色
  清淡: "#5a9b7e",   // 青绿
  香甜: "#d4788a",   // 粉红
  酸甜: "#d4a843",   // 金色
  复合: "#6b4c8c",   // 紫色
  咸: "#3a4f5c",     // 深灰蓝
  酸: "#a8b83a",     // 黄绿
};

// 各省份总体口味数据
export const PROVINCE_FLAVORS: ProvinceFlavor[] = [
  { province: "全国", flavor: "复合", taste: "复合", color: FLAVOR_COLORS["复合"], description: "国民美食，融合各地风味，全国流行" },
  { province: "北京", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "京菜以咸鲜为主，注重本味，融合北方菜特色，酱香浓郁" },
  { province: "天津", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "津菜咸鲜为主，兼收并蓄，口味浓厚" },
  { province: "河北", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "冀菜以咸鲜为主，擅长溜、炒，注重火候" },
  { province: "山西", flavor: "酸", taste: "酸辣", color: FLAVOR_COLORS["酸"], description: "晋菜以酸著称，醋文化深厚，酸香开胃" },
  { province: "内蒙古", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "蒙餐以咸为主，牛羊肉为主料，原汁原味" },
  { province: "辽宁", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "东北菜咸鲜为主，量大味浓，炖菜见长" },
  { province: "吉林", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "东北菜咸鲜为主，朝鲜族风味影响，酸辣点缀" },
  { province: "黑龙江", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "东北菜咸鲜为主，炖菜、烧烤见长，口味浓烈" },
  { province: "上海", flavor: "香甜", taste: "香甜", color: FLAVOR_COLORS["香甜"], description: "本帮菜浓油赤酱，咸甜适中，精致市井，红烧技法受徽菜影响" },
  { province: "江苏", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "苏菜清淡鲜美，注重本味，刀工精细" },
  { province: "浙江", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "浙菜清淡鲜嫩，讲究原汁原味" },
  { province: "安徽", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "徽菜咸鲜为主，重油重色重火功" },
  { province: "福建", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "闽菜清淡鲜美，酸甜适口，汤菜见长" },
  { province: "江西", flavor: "鲜辣", taste: "麻辣", color: FLAVOR_COLORS["香辣"], description: "赣菜鲜辣咸香兼备，辣度不亚于川湘甚至更胜一筹，是名副其实的吃辣大省" },
  { province: "山东", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "鲁菜咸鲜为主，注重火候，擅长爆、炒、烧" },
  { province: "河南", flavor: "复合", taste: "复合", color: FLAVOR_COLORS["复合"], description: "豫菜五味调和，咸鲜为主，南北兼容" },
  { province: "湖北", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "鄂菜咸鲜微辣，蒸菜见长，水产丰富" },
  { province: "湖南", flavor: "香辣", taste: "复合", color: FLAVOR_COLORS["香辣"], description: "湘菜以鲜辣椒、剁椒为灵魂，香辣为主（非麻辣），味重色浓，煨、炒见长" },
  { province: "广东", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "粤菜清淡鲜美，清中求鲜，淡中求美，注重原味，烹调精细" },
  { province: "广西", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "桂菜酸辣为主，兼有粤菜风味，米粉文化发达" },
  { province: "海南", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "琼菜清淡鲜美，椰风海韵，海鲜见长" },
  { province: "重庆", flavor: "麻辣", taste: "麻辣", color: FLAVOR_COLORS["麻辣"], description: "渝菜麻辣为主，火锅文化盛行，味型丰富" },
  { province: "四川", flavor: "麻辣", taste: "麻辣", color: FLAVOR_COLORS["麻辣"], description: "川菜麻辣鲜香，一菜一格，百菜百味" },
  { province: "贵州", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "黔菜酸辣为主，辣度极高，酸汤文化独特，辣中带酸，「三天不吃酸，走路打蹿蹿」" },
  { province: "云南", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "滇菜酸辣鲜香，辣度不低，少数民族风味丰富，菌菇见长" },
  { province: "西藏", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "藏餐以咸为主，酥油茶、糌粑为代表，高原风味" },
  { province: "陕西", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "陕菜酸辣咸香，面食文化发达，古朴厚重" },
  { province: "甘肃", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "陇菜以咸为主，牛羊肉、面食见长，清真风味" },
  { province: "青海", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "青海菜以咸为主，牛羊肉为主，藏回融合" },
  { province: "宁夏", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "宁夏菜以咸为主，清真风味，滩羊文化独特" },
  { province: "新疆", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "新疆菜咸香为主，烤肉、抓饭为代表，浓郁豪迈" },
  { province: "香港", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "港式粤菜清淡鲜美，融合中西，茶餐厅文化" },
  { province: "澳门", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "澳式粤菜清淡鲜美，葡式风味融合" },
  { province: "台湾", flavor: "香甜", taste: "香甜", color: FLAVOR_COLORS["香甜"], description: "台菜香甜为主，融合闽粤、日式风味，小吃文化丰富" },
];

// 省份口味查找映射
export const PROVINCE_FLAVOR_MAP: Record<Province, ProvinceFlavor> = PROVINCE_FLAVORS.reduce(
  (acc, f) => {
    acc[f.province] = f;
    return acc;
  },
  {} as Record<Province, ProvinceFlavor>
);

// 获取省份口味颜色
export function getProvinceColor(province: Province): string {
  return PROVINCE_FLAVOR_MAP[province]?.color || FLAVOR_COLORS["复合"];
}

// 获取省份口味描述
export function getProvinceFlavor(province: Province): ProvinceFlavor | undefined {
  return PROVINCE_FLAVOR_MAP[province];
}

// ========== 菜系级口味数据 ==========

// 菜系总体口味特征
export interface CuisineFlavor {
  cuisine: Cuisine;
  flavor: string;        // 总体口味描述
  taste: Taste;          // 对应的 Taste 类型
  color: string;         // 口味对应颜色
  description: string;   // 口味特征说明
  originProvinces: Province[]; // 发源省份
}

// 各菜系总体口味数据
export const CUISINE_FLAVORS: CuisineFlavor[] = [
  // 八大菜系
  { cuisine: "鲁菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "鲁菜是八大菜系中唯一的北方菜系，源于春秋战国，被誉为「北方菜系之冠」。咸鲜为主，注重火候，擅长爆、烧、炒、扒，「清汤、奶汤」双绝。分济南菜、胶东菜、孔府菜三大流派，影响整个北方饮食文化，北京烤鸭即源于鲁菜烤技。", originProvinces: ["山东"] },
  { cuisine: "川菜", flavor: "麻辣", taste: "麻辣", color: FLAVOR_COLORS["麻辣"], description: "川菜是中国最具影响力的菜系之一，源于古巴蜀，已有两千余年历史。24种味型冠绝天下，「一菜一格，百菜百味」。分上河帮（成都蓉派）、下河帮（重庆渝派）、小河帮（自贡盐帮菜）三大流派，麻辣鲜香，火锅文化盛行，小吃种类繁多。", originProvinces: ["四川", "重庆"] },
  { cuisine: "粤菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "粤菜是中国最早走向世界的菜系，源于先秦，清代「食在广州」名扬天下。清淡鲜美，注重原味，讲究「镬气」，追求「清中求鲜，淡中求美」。分广府菜、潮州菜、东江菜（客家菜）三大流派，早茶点心文化兴盛，烧腊技艺精湛，煲汤养生文化深厚。2014年粤菜烹饪技艺入选国家级非遗。", originProvinces: ["广东", "香港", "澳门"] },
  { cuisine: "苏菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "苏菜是「文人菜」代表，源于先秦，唐宋江南繁荣后大发展。清淡鲜美，注重本味，刀工精细冠绝天下。分金陵菜、淮扬菜、苏锡菜、徐海菜四大流派，炖焖技艺精湛，满汉全席以淮扬菜为主，是新中国国宴菜的基础。", originProvinces: ["江苏"] },
  { cuisine: "浙菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "浙菜源于先秦，南宋定都杭州后南北技艺交融，大发展。清淡鲜嫩，讲究原汁原味，承载江南水乡的饮食雅致。分杭帮菜、宁波菜、绍兴菜、温州菜（瓯菜）四大流派，酒香入菜独特，海鲜丰富，文人雅食底蕴深厚。", originProvinces: ["浙江"] },
  { cuisine: "闽菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "闽菜源于先秦闽越，唐宋中原移民带来北方技艺。清淡鲜美，酸甜适口，「一汤十变」汤菜技艺冠绝天下。分福州菜、闽南菜、闽西菜三大流派，红糟调味独特，海鲜丰富，佛跳墙集山珍海味之大成，是海外华人社区的重要菜系。", originProvinces: ["福建"] },
  { cuisine: "湘菜", flavor: "香辣", taste: "复合", color: FLAVOR_COLORS["香辣"], description: "湘菜源于先秦楚文化，与川菜并称「辣味双雄」，但重在「香辣」而非「麻辣」。味重色浓，煨、炒见长。分湘江流域菜、洞庭湖区菜、湘西山区菜三大流派，腊味文化独特，剁椒、豆豉善用，剁椒鱼头是湘菜名片，是中国最具人气的菜系之一。", originProvinces: ["湖南"] },
  { cuisine: "徽菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "徽菜源于宋代徽州山区，明清徽商兴盛后传遍全国。咸鲜为主，重油重色重火功，是八大菜系中最具山野气息的菜系。分皖南菜、沿江菜、沿淮菜三大流派，山珍野味为特色，臭鳜鱼、毛豆腐体现「以臭为香」的发酵哲学，炭火炖煮「重火功」是核心。", originProvinces: ["安徽"] },
  // 地方菜系
  { cuisine: "京菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "京菜融合宫廷菜、官府菜、民间菜与清真菜，是元明清三代帝都饮食文化的结晶。咸鲜为主，酱香浓郁，烤、涮、爆、炒见长。北京烤鸭源于鲁菜烤技，涮羊肉源于蒙古，分仿膳菜、民间菜、清真菜三大流派。", originProvinces: ["北京"] },
  { cuisine: "津菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "津菜源于明清，天津作为漕运枢纽，南来北往的饮食文化在此交融。咸鲜为主，「河海两鲜」得天独厚，渤海海鲜与运河河鲜并重。小吃文化发达，煎饼馃子、狗不理包子、耳朵眼炸糕、十八街麻花并称天津四大小吃。", originProvinces: ["天津"] },
  { cuisine: "冀菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "冀菜源于燕赵饮食文化，保定、唐山、承德三大流派各具特色。咸鲜为主，擅长溜、炒，注重火候。面食文化发达，河北板面（安徽板面）风靡全国，驴肉火烧是河北名片。", originProvinces: ["河北"] },
  { cuisine: "晋菜", flavor: "酸", taste: "酸辣", color: FLAVOR_COLORS["酸"], description: "晋菜源于三晋大地，面食技艺冠绝天下，有「世界面食在中国，中国面食在山西」之说。以酸著称，山西老陈醋是中国四大名醋之首。刀削面、剔尖、猫耳朵种类繁多，「一面百样，一面百吃」是晋菜特色。", originProvinces: ["山西"] },
  { cuisine: "蒙餐", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "蒙餐源于蒙古高原游牧文化，已有千年历史。以咸为主，牛羊肉为主料，原汁原味。「红食」（肉食）与「白食」（奶食）并重，烤全羊、手把肉是蒙餐名片，奶茶、奶皮是日常饮食。", originProvinces: ["内蒙古"] },
  { cuisine: "东北菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "东北菜融合鲁菜、满族菜、朝鲜族菜及俄式风味，形成独特风格。咸鲜为主，量大味浓，炖菜见长。分辽菜、吉菜、黑菜三大流派，锅包肉、地三鲜是名片，「东北四大炖」家喻户晓，烧烤文化兴盛。", originProvinces: ["辽宁", "吉林", "黑龙江"] },
  { cuisine: "本帮菜", flavor: "香甜", taste: "香甜", color: FLAVOR_COLORS["香甜"], description: "本帮菜源于上海本地农家菜，清末民初吸收苏锡菜、宁帮菜精华，并吸收徽菜做法（红烧技法受徽菜「重油重色重火功」影响），形成浓油赤酱、咸甜适中的独特风格。「一手酱油瓶，一手糖罐子」是本帮菜写照，红烧肉、响油鳝丝是名片，中西融合催生海派餐饮文化。", originProvinces: ["上海"] },
  { cuisine: "赣菜", flavor: "鲜辣", taste: "麻辣", color: FLAVOR_COLORS["香辣"], description: "赣菜源于赣鄱大地，咸鲜辣兼备，辣度不亚于川湘甚至更胜一筹，是「名副其实的吃辣大省」。米粉文化发达，南昌拌粉、景德镇冷粉各具特色。瓦罐汤文化独特，是南昌早餐标配。三杯鸡源于江西宁都，后传入台湾成为名菜。", originProvinces: ["江西"] },
  { cuisine: "豫菜", flavor: "复合", taste: "复合", color: FLAVOR_COLORS["复合"], description: "豫菜源于中原，是中华饮食文化的发源地之一。五味调和，咸鲜为主，南北兼容。洛阳水席源于唐代，24道菜以汤水为主，是中国最古老的宴席形式之一。胡辣汤是中原早餐灵魂，逍遥镇、北舞渡两大流派。", originProvinces: ["河南"] },
  { cuisine: "鄂菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "鄂菜源于楚文化，「千湖之省」水产丰富。咸鲜微辣，蒸菜见长，沔阳三蒸是代表。武汉早餐文化（过早）冠绝全国，热干面、豆皮、面窝种类繁多。武昌鱼、排骨藕汤是湖北人乡愁的味道。", originProvinces: ["湖北"] },
  { cuisine: "桂菜", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "桂菜融合粤菜风味与少数民族饮食，酸辣为主。「酸嘢」文化独特，酸笋、酸豆角是广西味道灵魂。米粉种类冠绝全国，柳州螺蛳粉、桂林米粉、南宁老友粉并称广西三大米粉，近年螺蛳粉风靡全国。", originProvinces: ["广西"] },
  { cuisine: "琼菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "琼菜源于海南岛，清淡鲜美，椰风海韵。四大名菜（文昌鸡、加积鸭、东山羊、和乐蟹）享誉华南。椰子入菜独特，椰子鸡、椰子饭别具风味。海南粉、抱罗粉是海南早餐灵魂，清补凉是消暑佳品。", originProvinces: ["海南"] },
  { cuisine: "滇菜", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "滇菜源于云南高原，少数民族风味丰富，是中国最具民族特色的菜系之一。酸辣鲜香，辣度不低，菌菇见长。野生菌种类冠绝全国，松茸、牛肝菌、鸡枞是云南山珍。过桥米线源于蒙自，已有百年历史，是滇菜名片。", originProvinces: ["云南"] },
  { cuisine: "黔菜", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "黔菜源于贵州高原，酸辣为主，辣度极高，酸汤文化独特。「三天不吃酸，走路打蹿蹿」是贵州俗语。酸汤鱼是黔菜名片，苗家酸汤分红酸（番茄酸）和白酸（米汤酸）两种。丝娃娃、花溪牛肉粉、肠旺面是贵州小吃代表。", originProvinces: ["贵州"] },
  { cuisine: "藏餐", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "藏餐源于青藏高原游牧与农耕文化，已有千年历史。以糌粑、牛羊肉、酥油茶为核心，体现高原民族适应高寒环境的生存智慧。「无糌粑不成藏餐」，酥油茶每日必备，风干牛肉是冬季储备，甜茶馆文化是拉萨市井符号。", originProvinces: ["西藏"] },
  { cuisine: "西北菜", flavor: "酸辣", taste: "酸辣", color: FLAVOR_COLORS["酸辣"], description: "西北菜源于黄土高原与河西走廊，面食文化发达，古朴厚重。西安作为十三朝古都，饮食文化底蕴深厚。羊肉泡馍、肉夹馍、biangbiang面是陕西名片，兰州牛肉面是西北面食代表，遍布全国。清真风味影响深远。", originProvinces: ["陕西", "甘肃", "青海", "宁夏"] },
  { cuisine: "新疆菜", flavor: "咸", taste: "咸鲜", color: FLAVOR_COLORS["咸"], description: "新疆菜融合维吾尔、哈萨克、回等民族风味，浓郁豪迈。咸香为主，烤肉、抓饭为代表。烤全羊是新疆最高规格宴席，大盘鸡源于沙湾县风靡全国。馕是新疆主食，已有两千余年历史，烤包子、拉条子是日常美食。", originProvinces: ["新疆"] },
  { cuisine: "清真菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "清真菜源于唐代阿拉伯、波斯商人来华，融合中国烹饪技艺与伊斯兰饮食规约。遵循伊斯兰饮食规约，以牛羊肉为核心，「清真」意为「洁净合法」。面食文化发达，拉面、馕、油香是日常主食，善用孜然、花椒去膻提鲜。", originProvinces: ["宁夏", "甘肃", "青海", "新疆"] },
  { cuisine: "客家菜", flavor: "咸鲜", taste: "咸鲜", color: FLAVOR_COLORS["咸鲜"], description: "客家菜源于中原汉人南迁，保留大量唐宋古风。讲究「肥、咸、香」，适应迁徙劳作之需。「无菜不酿」，酿豆腐、酿茄子、酿苦瓜是经典。「盐焗」独特工艺，盐焗鸡是客家名片。2010年客家菜烹饪技艺入选国家级非遗。", originProvinces: ["广东", "福建", "江西"] },
  { cuisine: "潮菜", flavor: "清淡", taste: "清淡", color: FLAVOR_COLORS["清淡"], description: "潮菜是粤菜三大流派之一（广府菜、潮州菜、东江菜），源于潮汕平原，已有千年历史。以「鲜」为核心，讲究本味与原汁原味。「夜糜」打冷文化独特，卤水技艺精湛，工夫茶佐餐，海鲜、粿品、小吃文化极其发达。潮菜烹饪技艺入选国家级非遗。", originProvinces: ["广东"] },
  { cuisine: "台湾菜", flavor: "香甜", taste: "香甜", color: FLAVOR_COLORS["香甜"], description: "台菜以闽菜为基础，融合粤菜、日式料理及1949年后外省眷村菜，形成独特风味。香甜为主，「清、淡、鲜、醇」为本。夜市文化兴盛，小吃种类冠绝华人世界。卤肉饭、牛肉面是「国饭」，珍珠奶茶风靡全球。", originProvinces: ["台湾"] },
  { cuisine: "其他", flavor: "复合", taste: "复合", color: FLAVOR_COLORS["复合"], description: "复合口味，兼容并蓄", originProvinces: [] },
];

// 菜系口味查找映射
export const CUISINE_FLAVOR_MAP: Record<string, CuisineFlavor> = CUISINE_FLAVORS.reduce(
  (acc, f) => {
    acc[f.cuisine] = f;
    return acc;
  },
  {} as Record<string, CuisineFlavor>
);

// 获取菜系口味颜色
export function getCuisineColor(cuisine: Cuisine): string {
  return CUISINE_FLAVOR_MAP[cuisine]?.color || FLAVOR_COLORS["复合"];
}

// 获取菜系口味描述
export function getCuisineFlavor(cuisine: Cuisine): CuisineFlavor | undefined {
  return CUISINE_FLAVOR_MAP[cuisine];
}

// 获取美食的口味颜色（优先使用菜系口味，因为菜系更精确）
export function getFoodColor(province: Province, cuisine: Cuisine): string {
  // 对于有明确省份的菜系（如客家菜、潮菜），使用菜系颜色
  if (cuisine === "客家菜" || cuisine === "潮菜" || cuisine === "清真菜") {
    return getCuisineColor(cuisine);
  }
  return getProvinceColor(province);
}
