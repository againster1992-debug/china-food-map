import { useEffect, useRef, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup, Circle, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useStore } from "@/store/useStore";
import type { Food, Province } from "@/types/food";
import { inferFame } from "@/types/food";
import { PROVINCE_FLAVORS, getFoodColor, CUISINE_FLAVORS } from "@/data/provinceFlavors";
import { SPECIAL_FOOD_ENCLAVES } from "@/data/specialFoodEnclaves";

// 修复 Leaflet 默认图标路径
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;

// 高德地图瓦片 URL（中文标注）
const AMAP_TILE_URL =
  "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
const AMAP_SUBDOMAINS = ["1", "2", "3", "4"];

// 创建缩略图标记图标（边框颜色按省份口味）
function createIcon(food: Food, isSelected: boolean, isHovered: boolean): L.DivIcon {
  const selectedClass = isSelected || isHovered ? "marker-selected" : "";
  const typeClass =
    food.type === "tradition"
      ? "marker-thumb-tradition"
      : food.type === "traditional"
        ? "marker-thumb-traditional"
        : "marker-thumb-popular";
  const size = isSelected || isHovered ? 52 : 42;
  const borderColor = getFoodColor(food.province, food.cuisine);

  return L.divIcon({
    className: "food-marker",
    html: `<div class="food-marker-inner">
      <div class="marker-thumb ${typeClass} ${selectedClass}" style="width:${size}px;height:${size}px;border-color:${borderColor};">
        <img src="${food.image}" alt="${food.name}" loading="lazy" referrerpolicy="no-referrer"
          onload="this.parentElement.classList.add('img-loaded');"
          onerror="this.style.display='none';this.parentElement.classList.add('marker-thumb-fallback');" />
        <span class="marker-thumb-name">${food.name.charAt(0)}</span>
      </div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
  });
}

// 创建聚类标记图标（多个美食在同一坐标）
function createClusterIcon(count: number, foods: Food[]): L.DivIcon {
  const color = getFoodColor(foods[0].province, foods[0].cuisine);
  // 根据数量调整图标大小
  const size = count >= 20 ? 64 : count >= 10 ? 56 : 48;
  const badgeClass = count >= 100 ? "marker-count-badge badge-3digit" : "marker-count-badge";
  return L.divIcon({
    className: "food-marker",
    html: `<div class="food-marker-inner">
      <div class="marker-cluster" style="width:${size}px;height:${size}px;border-color:${color};">
        <img src="${foods[0].image}" alt="${foods[0].name}" loading="lazy" referrerpolicy="no-referrer"
          onload="this.parentElement.classList.add('img-loaded');"
          onerror="this.style.display='none';this.parentElement.classList.add('marker-thumb-fallback');" />
      </div>
      <span class="${badgeClass}">${count}</span>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
  });
}

// 判断是否为餐厅代表菜（名称包含知名餐厅名称）
function isRestaurantDish(name: string): boolean {
  const restaurantNames = [
    "全聚德", "便宜坊", "东来顺", "大董", "狗不理", "老正兴",
    "南翔", "楼外楼", "知味观", "奎元馆", "聚春园", "冶春",
    "富春", "止观小馆", "谭家菜", "仿膳", "功德林",
  ];
  return restaurantNames.some((rn) => name.includes(rn));
}

// 创建省份代表菜图标（低缩放时，每个省份显示一道代表菜 + 美食数量）
function createProvinceIcon(food: Food, count: number): L.DivIcon {
  const color = getFoodColor(food.province, food.cuisine);
  const size = 48;
  const badgeClass = count >= 100 ? "marker-count-badge province-count-badge badge-3digit" : "marker-count-badge province-count-badge";
  return L.divIcon({
    className: "food-marker province-marker",
    html: `<div class="food-marker-inner">
      <div class="marker-province" style="width:${size}px;height:${size}px;border-color:${color};">
        <img src="${food.image}" alt="${food.name}" loading="lazy" referrerpolicy="no-referrer"
          onload="this.parentElement.classList.add('img-loaded');"
          onerror="this.style.display='none';this.parentElement.classList.add('marker-thumb-fallback');" />
        <span class="marker-thumb-name">${food.name.charAt(0)}</span>
      </div>
      <span class="${badgeClass}">${count}</span>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
  });
}

// 创建「特」字旗帜图标（标识特殊饮食聚集区，如义乌外国菜、北京驻京办等）
function createFlagIcon(name: string, type: string): L.DivIcon {
  const size = 30;
  return L.divIcon({
    className: "feature-flag-marker",
    html: `<div class="feature-flag" title="${name}·${type}">
      <div class="feature-flag-pole"></div>
      <div class="feature-flag-body">
        <span class="feature-flag-text">特</span>
      </div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [3, size],
    popupAnchor: [0, -size],
  });
}

// 特殊饮食聚集区列表（义乌外国菜、北京驻京办、广州非洲菜等之前未显示的特殊饮食特色）
const SPECIAL_ENCLAVES = SPECIAL_FOOD_ENCLAVES;

// 地图控制器：处理焦点跳转 + 缩放跟踪
function MapController() {
  const map = useMap();
  const focusTarget = useStore((s) => s.focusTarget);
  const clearFocus = useStore((s) => s.clearFocus);
  const setMapZoom = useStore((s) => s.setMapZoom);

  useEffect(() => {
    const onZoom = () => setMapZoom(map.getZoom());
    map.on("zoomend", onZoom);
    setMapZoom(map.getZoom());
    return () => {
      map.off("zoomend", onZoom);
    };
  }, [map, setMapZoom]);

  useEffect(() => {
    if (focusTarget) {
      map.flyTo([focusTarget.lat, focusTarget.lng], focusTarget.zoom || 8, {
        duration: 1.2,
        easeLinearity: 0.25,
      });
      const timer = setTimeout(() => clearFocus(), 1300);
      return () => clearTimeout(timer);
    }
  }, [focusTarget, map, clearFocus]);

  return null;
}

// 省份中心坐标（省会城市）
// 菜系中心城市坐标（用于菜系色层覆盖）
const CUISINE_CENTERS: Record<string, { lat: number; lng: number; radius: number; label: string }> = {
  客家菜: { lat: 24.3, lng: 116.1, radius: 280000, label: "梅州" },      // 世界客都
  潮菜: { lat: 23.65, lng: 116.62, radius: 180000, label: "潮州" },       // 潮汕文化中心
  清真菜: { lat: 35.6, lng: 103.2, radius: 350000, label: "临夏" },       // 中国麦加，清真饮食中心
  藏餐: { lat: 29.65, lng: 91.1, radius: 400000, label: "拉萨" },         // 藏餐中心
  蒙餐: { lat: 43.8, lng: 87.6, radius: 0, label: "" },                   // 已由省份覆盖，跳过
  东北菜: { lat: 45.75, lng: 126.63, radius: 0, label: "" },              // 已由省份覆盖，跳过
  澳门土生菜: { lat: 22.2, lng: 113.55, radius: 15000, label: "澳门" },   // 中葡融合菜系，2017年非遗
};

// 菜系口味色层：为没有独立省份覆盖的菜系添加色层
const CUISINE_OVERLAYS = CUISINE_FLAVORS.filter(
  (c) => CUISINE_CENTERS[c.cuisine] && CUISINE_CENTERS[c.cuisine].radius > 0,
);

// 省份中心坐标（省会城市）
const PROVINCE_CENTERS: Record<Province, { lat: number; lng: number }> = {
  全国: { lat: 35.0, lng: 105.0 },
  北京: { lat: 39.9, lng: 116.4 },
  天津: { lat: 39.1, lng: 117.2 },
  河北: { lat: 38.04, lng: 114.51 },
  山西: { lat: 37.87, lng: 112.55 },
  内蒙古: { lat: 40.82, lng: 111.67 },
  辽宁: { lat: 41.8, lng: 123.43 },
  吉林: { lat: 43.88, lng: 125.32 },
  黑龙江: { lat: 45.75, lng: 126.63 },
  上海: { lat: 31.23, lng: 121.47 },
  江苏: { lat: 32.06, lng: 118.8 },
  浙江: { lat: 30.27, lng: 120.15 },
  安徽: { lat: 31.86, lng: 117.28 },
  福建: { lat: 26.08, lng: 119.3 },
  江西: { lat: 28.68, lng: 115.89 },
  山东: { lat: 36.65, lng: 117.0 },
  河南: { lat: 34.76, lng: 113.65 },
  湖北: { lat: 30.59, lng: 114.31 },
  湖南: { lat: 28.23, lng: 112.94 },
  广东: { lat: 23.13, lng: 113.27 },
  广西: { lat: 22.82, lng: 108.37 },
  海南: { lat: 20.02, lng: 110.35 },
  重庆: { lat: 29.56, lng: 106.55 },
  四川: { lat: 30.67, lng: 104.07 },
  贵州: { lat: 26.65, lng: 106.71 },
  云南: { lat: 25.04, lng: 102.71 },
  西藏: { lat: 29.65, lng: 91.13 },
  陕西: { lat: 34.27, lng: 108.95 },
  甘肃: { lat: 36.06, lng: 103.83 },
  青海: { lat: 36.62, lng: 101.78 },
  宁夏: { lat: 38.47, lng: 106.27 },
  新疆: { lat: 43.79, lng: 87.63 },
  香港: { lat: 22.32, lng: 114.17 },
  澳门: { lat: 22.2, lng: 113.55 },
  台湾: { lat: 25.03, lng: 121.57 },
};

// 根据缩放级别决定显示哪些美食（优先显示高热度美食，限制总数避免杂乱）
function getDisplayFoods(foods: Food[], zoom: number): Food[] {
  // 综合分：热度×60 + fame权重 + 热度分层加成，与 top10 排序保持一致
  // 大地图优先显示热度较高的美食
  const fameWeight: Record<string, number> = { 名菜: 120, 热门: 80, 地方名吃: 40, 普通: 5 };
  const tierBoost = (pop: number) =>
    pop >= 10 ? 40 : pop >= 9 ? 25 : pop >= 8 ? 15 : pop >= 7 ? 0 : pop >= 6 ? -10 : -20;
  const scoreOf = (f: Food) => {
    const pop = f.popularity || 5;
    return pop * 60 + (fameWeight[inferFame(f)] || 5) + tierBoost(pop);
  };
  const sorted = [...foods].sort((a, b) => {
    const scoreA = scoreOf(a);
    const scoreB = scoreOf(b);
    if (scoreA !== scoreB) return scoreB - scoreA;
    const pa = a.popularity || 5;
    const pb = b.popularity || 5;
    if (pa !== pb) return pb - pa;
    const ta = a.type === "traditional" ? 1 : 0;
    const tb = b.type === "traditional" ? 1 : 0;
    return tb - ta;
  });

  // 各缩放级别的显示上限与最低综合分门槛
  // 新分制：pop8 名菜=615, pop8 热门=575, pop7 名菜=540, pop8 地方名吃=535
  //         pop7 热门=500, pop6 名菜=470, pop8 普通=500, pop9 热门=645
  let limit: number;
  let minScore: number;

  if (zoom >= 10) {
    // 高缩放：显示全部
    return foods;
  } else if (zoom >= 8) {
    limit = 500;
    minScore = 0; // 全部
  } else if (zoom >= 7) {
    limit = 200;
    minScore = 0; // 全部，但限制数量
  } else if (zoom >= 6) {
    limit = 120;
    minScore = 420; // 约 pop>=7 名菜 / pop>=8 热门
  } else if (zoom >= 5) {
    limit = 100;
    minScore = 500; // 约 pop>=8 热门/普通 / pop>=7 名菜
  } else if (zoom >= 4) {
    limit = 80;
    minScore = 535; // 约 pop>=8 地方名吃 / pop>=9 热门
  } else {
    limit = 60;
    minScore = 575; // 约 pop>=8 热门 / pop>=9 热门
  }

  const filtered = sorted.filter((f) => scoreOf(f) >= minScore);
  return filtered.slice(0, limit);
}

// 将同坐标美食聚类（根据缩放级别调整网格精度）
function clusterFoods(foods: Food[], zoom: number): { food: Food; cluster?: Food[] }[] {
  // 根据缩放级别决定网格精度
  // 低缩放（看全国）：按省份聚类（粗网格）
  // 中缩放：按城市聚类
  // 高缩放：按精确坐标聚类
  let precision: number;
  if (zoom < 4) {
    precision = 0; // ~1度网格，约省份级别
  } else if (zoom < 6) {
    precision = 1; // ~0.1度网格，约城市级别
  } else if (zoom < 8) {
    precision = 2; // ~0.01度网格，约区县级别
  } else {
    precision = 3; // 精确坐标
  }

  const map = new Map<string, Food[]>();
  for (const f of foods) {
    const key = `${f.lat.toFixed(precision)},${f.lng.toFixed(precision)}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(f);
  }
  const result: { food: Food; cluster?: Food[] }[] = [];
  for (const [, group] of map) {
    // 按综合分（热度×60+fame+热度分层）降序，取第一个作为代表
    const fameWeight: Record<string, number> = { 名菜: 120, 热门: 80, 地方名吃: 40, 普通: 5 };
    const tierBoost = (pop: number) =>
      pop >= 10 ? 40 : pop >= 9 ? 25 : pop >= 8 ? 15 : pop >= 7 ? 0 : pop >= 6 ? -10 : -20;
    group.sort((a, b) => {
      const sa = (a.popularity || 5) * 60 + (fameWeight[inferFame(a)] || 5) + tierBoost(a.popularity || 5);
      const sb = (b.popularity || 5) * 60 + (fameWeight[inferFame(b)] || 5) + tierBoost(b.popularity || 5);
      return sb - sa;
    });
    if (group.length === 1) {
      result.push({ food: group[0] });
    } else {
      result.push({ food: group[0], cluster: group });
    }
  }
  return result;
}

export default function FoodMap() {
  const foods = useStore((s) => s.foods);
  const getFilteredFoods = useStore((s) => s.getFilteredFoods);
  const selectedFood = useStore((s) => s.selectedFood);
  const hoveredFoodId = useStore((s) => s.hoveredFoodId);
  const selectFood = useStore((s) => s.selectFood);
  const setHovered = useStore((s) => s.setHovered);
  const mapZoom = useStore((s) => s.mapZoom);
  const openProvincePanel = useStore((s) => s.openProvincePanel);
  const openCuisinePanel = useStore((s) => s.openCuisinePanel);
  const openEnclavePanel = useStore((s) => s.openEnclavePanel);
  const getProvinceTopFoods = useStore((s) => s.getProvinceTopFoods);
  const mapRef = useRef<L.Map | null>(null);
  const [showFlavorOverlay, setShowFlavorOverlay] = useState(true);

  const filteredFoods = getFilteredFoods();

  // 国民美食（province="全国"）和饮食传统不在地图上显示为标记
  const mapFoods = useMemo(
    () => filteredFoods.filter(
      (f) => f.province !== "全国" && f.type !== "tradition" && !(f.tags || []).includes("饮食传统")
    ),
    [filteredFoods],
  );

  // 根据缩放级别筛选显示的美食
  const zoomFiltered = useMemo(
    () => getDisplayFoods(mapFoods, mapZoom),
    [mapFoods, mapZoom],
  );

  // 同坐标聚类（根据缩放级别调整网格精度）
  const clustered = useMemo(() => clusterFoods(zoomFiltered, mapZoom), [zoomFiltered, mapZoom]);

  // 省份级代表菜标记（低缩放时，每个省份显示一道代表菜 + 美食总数）
  const provinceMarkers = useMemo(() => {
    if (mapZoom >= 6) return [];
    const result: { province: Province; food: Food; count: number }[] = [];
    for (const pf of PROVINCE_FLAVORS) {
      if (pf.province === "全国") continue;
      const center = PROVINCE_CENTERS[pf.province];
      if (!center) continue;
      // 获取该省份在当前筛选条件下的美食
      const provinceFoods = mapFoods.filter((f) => f.province === pf.province);
      if (provinceFoods.length === 0) continue;
      // 使用 getProvinceTopFoods 获取综合分最高的美食，排除餐厅代表菜
      const topFoods = getProvinceTopFoods(pf.province, 5);
      const nonRestaurant = topFoods.find((f) => !isRestaurantDish(f.name));
      const topFood = nonRestaurant || topFoods[0] || provinceFoods[0];
      result.push({ province: pf.province, food: topFood, count: provinceFoods.length });
    }
    return result;
  }, [mapFoods, mapZoom, getProvinceTopFoods]);

  return (
    <MapContainer
      center={[35.5, 105]}
      zoom={4}
      minZoom={3}
      maxZoom={18}
      zoomControl={true}
      attributionControl={true}
      worldCopyJump={true}
      className="h-full w-full"
      ref={(instance) => {
        if (instance) mapRef.current = instance;
      }}
    >
      <TileLayer
        url={AMAP_TILE_URL}
        subdomains={AMAP_SUBDOMAINS}
        attribution='&copy; 高德地图'
        maxZoom={18}
      />

      <MapController />

      {/* 口味色层叠加：根据省份总体口味为地图着色 */}
      {showFlavorOverlay && mapZoom < 8 && (
        <>
          {PROVINCE_FLAVORS.map((pf) => {
            const center = PROVINCE_CENTERS[pf.province];
            if (!center) return null;
            // "全国"类别不显示色层覆盖
            if (pf.province === "全国") return null;
            // 大省（西藏、新疆、内蒙古、青海、甘肃等）扩大覆盖范围
            const largeProvinces: Record<string, number> = {
              西藏: 600000,
              新疆: 650000,
              内蒙古: 550000,
              青海: 450000,
              甘肃: 450000,
              黑龙江: 400000,
              四川: 400000,
              云南: 380000,
              广西: 320000,
              湖南: 300000,
            };
            const baseRadius = largeProvinces[pf.province] || 280000;
            // 缩放越大，半径越小，透明度越低
            const radius = mapZoom <= 4 ? baseRadius : mapZoom <= 6 ? baseRadius * 0.75 : baseRadius * 0.55;
            const opacity = mapZoom <= 4 ? 0.28 : mapZoom <= 6 ? 0.22 : 0.15;
            return (
              <Circle
                key={`flavor-${pf.province}`}
                center={[center.lat, center.lng]}
                radius={radius}
                pathOptions={{
                  color: pf.color,
                  fillColor: pf.color,
                  fillOpacity: opacity,
                  stroke: true,
                  weight: 1,
                  opacity: 0.4,
                }}
                eventHandlers={{
                  click: () => openProvincePanel(pf.province),
                }}
              >
                <Tooltip direction="center" permanent={false} sticky={false}>
                  <div className="text-center">
                    <p className="font-serif text-xs font-semibold text-ink-900">
                      {pf.province}
                    </p>
                    <p className="text-[10px] text-ink-600">
                      口味：{pf.flavor}
                    </p>
                  </div>
                </Tooltip>
              </Circle>
            );
          })}
          {/* 菜系色层叠加：为客家菜、潮菜、清真菜等独立菜系添加色层 */}
          {CUISINE_OVERLAYS.map((cf) => {
            const cc = CUISINE_CENTERS[cf.cuisine];
            if (!cc) return null;
            const radius = mapZoom <= 4 ? cc.radius : mapZoom <= 6 ? cc.radius * 0.75 : cc.radius * 0.55;
            const opacity = mapZoom <= 4 ? 0.25 : mapZoom <= 6 ? 0.2 : 0.13;
            return (
              <Circle
                key={`cuisine-${cf.cuisine}`}
                center={[cc.lat, cc.lng]}
                radius={radius}
                pathOptions={{
                  color: cf.color,
                  fillColor: cf.color,
                  fillOpacity: opacity,
                  stroke: true,
                  weight: 1.5,
                  opacity: 0.5,
                }}
                eventHandlers={{
                  click: () => openCuisinePanel(cf.cuisine),
                }}
              >
                <Tooltip direction="center" permanent={false} sticky={false}>
                  <div className="text-center">
                    <p className="font-serif text-xs font-semibold text-ink-900">
                      {cf.cuisine}
                    </p>
                    <p className="text-[10px] text-ink-600">
                      {cc.label}·{cf.flavor}
                    </p>
                  </div>
                </Tooltip>
              </Circle>
            );
          })}
        </>
      )}

      {/* 口味色层切换按钮 */}
      <div className="leaflet-control absolute right-3 top-16 z-[1000]">
        <button
          onClick={() => setShowFlavorOverlay((v) => !v)}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-serif text-xs shadow-panel backdrop-blur transition-colors ${
            showFlavorOverlay
              ? "border-cinnabar-500/40 bg-cinnabar-50/90 text-cinnabar-700"
              : "border-ochre-500/20 bg-paper-50/90 text-ink-500"
          }`}
          title="切换省份口味色层显示"
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{
              background: showFlavorOverlay
                ? "linear-gradient(90deg,#c8392e 0%,#f08c3a 25%,#d4a843 50%,#5a9b7e 75%,#2c5f7c 100%)"
                : "#ccc",
            }}
          />
          {showFlavorOverlay ? "口味色层：开" : "口味色层：关"}
        </button>
      </div>

      {/* 省份级代表菜标记：低缩放时每个省份显示一道代表菜 + 美食数量 */}
      {provinceMarkers.map(({ province, food, count }) => {
        const center = PROVINCE_CENTERS[province];
        return (
          <Marker
            key={`province-marker-${province}`}
            position={[center.lat, center.lng]}
            icon={createProvinceIcon(food, count)}
            eventHandlers={{
              click: () => {
                selectFood(food);
                openProvincePanel(province);
              },
              mouseover: () => setHovered(food.id),
              mouseout: () => setHovered(null),
            }}
            zIndexOffset={200}
          >
            <Tooltip direction="top" offset={[0, -28]} permanent={false} sticky={false}>
              <div className="text-center">
                <p className="font-serif text-xs font-semibold text-ink-900">
                  {province} · {count}道美食
                </p>
                <p className="text-[10px] text-ink-600">
                  代表：{food.name}
                </p>
              </div>
            </Tooltip>
          </Marker>
        );
      })}

      {/* 单个美食标记（低缩放时隐藏，由省份标记代替） */}
      {mapZoom >= 5 && clustered.map(({ food, cluster }) => {
        const isSelected = selectedFood?.id === food.id;
        const isHovered = hoveredFoodId === food.id;

        // 如果有聚类（同坐标多道美食），显示聚类图标 + popup
        if (cluster && cluster.length > 1) {
          return (
            <Marker
              key={`cluster-${food.id}`}
              position={[food.lat, food.lng]}
              icon={createClusterIcon(cluster.length, cluster)}
              eventHandlers={{
                click: () => selectFood(food),
                mouseover: () => setHovered(food.id),
                mouseout: () => setHovered(null),
              }}
              zIndexOffset={isSelected ? 1000 : 100}
            >
              <Popup>
                <div className="w-64">
                  <p className="mb-2 font-serif text-sm font-semibold text-ink-900">
                    此处共有 {cluster.length} 道美食
                  </p>
                  <div className="max-h-60 space-y-1.5 overflow-y-auto">
                    {cluster.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => selectFood(f)}
                        className="flex w-full items-center gap-2 rounded-md border border-ochre-500/15 bg-paper-100/40 p-1.5 text-left transition-colors hover:border-cinnabar-500/40 hover:bg-cinnabar-50/30"
                      >
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-paper-200">
                          <img
                            src={f.image}
                            alt={f.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-serif text-xs font-medium text-ink-900">
                            {f.name}
                          </p>
                          <p className="truncate font-sans text-[10px] text-ink-400">
                            {f.taste} · {f.category}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        }

        // 单个美食标记
        return (
          <Marker
            key={food.id}
            position={[food.lat, food.lng]}
            icon={createIcon(food, isSelected, isHovered)}
            eventHandlers={{
              click: () => selectFood(food),
              mouseover: () => setHovered(food.id),
              mouseout: () => setHovered(null),
            }}
            zIndexOffset={isSelected ? 1000 : food.type === "traditional" || food.type === "tradition" ? 100 : 0}
          />
        );
      })}

      {/* 「特」字旗帜标记：标识特殊饮食聚集区（义乌外国菜、北京驻京办等），点击打开聚集区面板 */}
      {SPECIAL_ENCLAVES.map((enclave) => {
        return (
          <Marker
            key={`flag-${enclave.id}`}
            position={[enclave.lat, enclave.lng]}
            icon={createFlagIcon(enclave.name, enclave.type)}
            eventHandlers={{
              click: () => openEnclavePanel(enclave),
            }}
            zIndexOffset={500}
          >
            <Tooltip direction="top" offset={[0, -30]} permanent={false} sticky={false}>
              <div className="text-center">
                <p className="font-serif text-xs font-semibold text-ink-900">
                  {enclave.name}
                </p>
                <p className="text-[10px] text-ink-600">
                  {enclave.type}·点击查看
                </p>
              </div>
            </Tooltip>
          </Marker>
        );
      })}

      {foods.length > 0 && filteredFoods.length === 0 && (
        <div className="leaflet-control">
          <div className="absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-ochre-500/30 bg-paper-50/95 px-6 py-4 text-center shadow-panel backdrop-blur">
            <p className="font-serif text-lg text-ink-900">未找到匹配的美食</p>
            <p className="mt-1 text-sm text-ink-400">请调整筛选条件</p>
          </div>
        </div>
      )}

      {/* 缩放提示 */}
      {zoomFiltered.length > 0 && zoomFiltered.length < mapFoods.length && (
        <div className="leaflet-control absolute bottom-20 left-1/2 z-[1000] -translate-x-1/2 rounded-full border border-ochre-500/20 bg-paper-50/95 px-4 py-2 shadow-panel backdrop-blur">
          <p className="font-serif text-xs text-ink-600">
            显示 {zoomFiltered.length} / {mapFoods.length} 道美食，放大地图查看更多
          </p>
        </div>
      )}
    </MapContainer>
  );
}
