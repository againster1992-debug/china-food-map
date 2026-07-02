import { useState, useMemo } from "react";
import {
  X,
  MapPin,
  Award,
  Star,
  Gem,
  Trophy,
  Clock,
  BookOpen,
  Utensils,
  Search,
  Flame,
  ChevronRight,
  Pencil,
  Save,
  Plus,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { RESTAURANTS } from "@/data/restaurants";
import type { Restaurant, RestaurantCategory } from "@/data/restaurants";

// 筛选分类
const FILTER_CATEGORIES: {
  key: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  match: (r: Restaurant) => boolean;
}[] = [
  {
    key: "全部",
    label: "全部",
    icon: <Utensils size={14} />,
    color: "#6b4c8c",
    match: () => true,
  },
  {
    key: "米其林",
    label: "米其林星级",
    icon: <Star size={14} />,
    color: "#c8392e",
    match: (r) => r.categories.some((c) => c.startsWith("米其林")),
  },
  {
    key: "黑珍珠",
    label: "黑珍珠",
    icon: <Gem size={14} />,
    color: "#1a1a1a",
    match: (r) => r.categories.some((c) => c.startsWith("黑珍珠")),
  },
  {
    key: "亚洲五十佳",
    label: "亚洲五十佳",
    icon: <Trophy size={14} />,
    color: "#d4a843",
    match: (r) => r.categories.includes("亚洲五十佳"),
  },
  {
    key: "世界五十佳",
    label: "世界五十佳",
    icon: <Award size={14} />,
    color: "#2c5f7c",
    match: (r) => r.categories.includes("世界五十佳"),
  },
  {
    key: "百年老店",
    label: "百年老店",
    icon: <Clock size={14} />,
    color: "#8b6f47",
    match: (r) => r.categories.includes("百年老店"),
  },
  {
    key: "非遗传承",
    label: "非遗传承",
    icon: <BookOpen size={14} />,
    color: "#5a9b7e",
    match: (r) => r.categories.includes("非遗传承"),
  },
  {
    key: "知名餐厅",
    label: "知名餐厅",
    icon: <Flame size={14} />,
    color: "#e85d3a",
    match: (r) => r.categories.includes("知名餐厅"),
  },
];

// 分类标签颜色
const CATEGORY_STYLES: Record<RestaurantCategory, { bg: string; text: string; label: string }> = {
  米其林三星: { bg: "bg-cinnabar-500/15", text: "text-cinnabar-600", label: "米其林三星" },
  米其林二星: { bg: "bg-cinnabar-400/15", text: "text-cinnabar-500", label: "米其林二星" },
  米其林一星: { bg: "bg-cinnabar-300/15", text: "text-cinnabar-400", label: "米其林一星" },
  黑珍珠三钻: { bg: "bg-ink-900/15", text: "text-ink-800", label: "黑珍珠三钻" },
  黑珍珠二钻: { bg: "bg-ink-700/15", text: "text-ink-600", label: "黑珍珠二钻" },
  黑珍珠一钻: { bg: "bg-ink-500/15", text: "text-ink-500", label: "黑珍珠一钻" },
  亚洲五十佳: { bg: "bg-ochre-500/15", text: "text-ochre-600", label: "亚洲五十佳" },
  世界五十佳: { bg: "bg-indigo2-500/15", text: "text-indigo2-600", label: "世界五十佳" },
  百年老店: { bg: "bg-amber-700/15", text: "text-amber-700", label: "百年老店" },
  非遗传承: { bg: "bg-emerald-600/15", text: "text-emerald-600", label: "非遗传承" },
  知名餐厅: { bg: "bg-orange-500/15", text: "text-orange-600", label: "知名餐厅" },
};

export default function RestaurantPanel() {
  const restaurantPanelOpen = useStore((s) => s.restaurantPanelOpen);
  const restaurantFilter = useStore((s) => s.restaurantFilter);
  const closeRestaurantPanel = useStore((s) => s.closeRestaurantPanel);
  const setRestaurantFilter = useStore((s) => s.setRestaurantFilter);
  const setFocusTarget = useStore((s) => s.setFocusTarget);

  const [keyword, setKeyword] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [provinceFilter, setProvinceFilter] = useState<string>("全部");

  // 所有省份列表（从餐厅数据中提取）
  const provinces = useMemo(() => {
    const set = new Set<string>();
    RESTAURANTS.forEach((r) => set.add(r.province));
    return ["全部", ...Array.from(set).sort()];
  }, []);

  // 筛选餐厅
  const filteredRestaurants = useMemo(() => {
    const filterConfig = FILTER_CATEGORIES.find((f) => f.key === restaurantFilter);
    return RESTAURANTS.filter((r) => {
      // 分类筛选
      if (filterConfig && !filterConfig.match(r)) return false;
      // 省份筛选
      if (provinceFilter !== "全部" && r.province !== provinceFilter) return false;
      // 关键词筛选
      if (keyword) {
        const k = keyword.toLowerCase();
        if (
          !r.name.toLowerCase().includes(k) &&
          !r.cuisine.toLowerCase().includes(k) &&
          !r.city.toLowerCase().includes(k) &&
          !r.signatureDishes.some((d) => d.toLowerCase().includes(k))
        )
          return false;
      }
      return true;
    }).sort((a, b) => {
      // 排序：米其林星级 > 黑珍珠钻级 > 其他
      const aScore = (a.stars || 0) * 100 + (a.diamonds || 0) * 10;
      const bScore = (b.stars || 0) * 100 + (b.diamonds || 0) * 10;
      return bScore - aScore;
    });
  }, [restaurantFilter, provinceFilter, keyword]);

  if (!restaurantPanelOpen) return null;

  // 统计各分类数量
  const categoryCounts: Record<string, number> = {
    全部: RESTAURANTS.length,
  };
  FILTER_CATEGORIES.forEach((f) => {
    if (f.key !== "全部") {
      categoryCounts[f.key] = RESTAURANTS.filter(f.match).length;
    }
  });

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 z-[1200] bg-ink-900/20 backdrop-blur-[2px]"
        onClick={closeRestaurantPanel}
      />

      {/* 面板 */}
      <aside className="fixed right-0 top-16 z-[1201] flex h-[calc(100%-4rem)] w-full max-w-sm flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
        {/* 头部 */}
        <div className="relative overflow-hidden border-b border-ochre-500/15 bg-gradient-to-br from-cinnabar-500/10 to-ochre-500/5 px-5 py-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-cinnabar-500" />
                <h2 className="font-serif text-2xl font-bold text-ink-900">知名餐厅</h2>
              </div>
              <p className="mt-1 font-sans text-[11px] text-ink-500">
                米其林 · 黑珍珠 · 亚洲五十佳 · 世界五十佳 · 百年老店 · 非遗传承
              </p>
            </div>
            <button
              onClick={closeRestaurantPanel}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 筛选区 */}
        <div className="border-b border-ochre-500/10 px-5 py-3">
          {/* 分类筛选标签 */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {FILTER_CATEGORIES.map((f) => {
              const active = restaurantFilter === f.key;
              const count = categoryCounts[f.key] || 0;
              return (
                <button
                  key={f.key}
                  onClick={() => setRestaurantFilter(f.key)}
                  className={`flex items-center gap-1 rounded-full border px-2.5 py-1 font-serif text-[11px] transition-all ${
                    active
                      ? "border-transparent text-paper-50 shadow-sm"
                      : "border-ochre-500/20 bg-paper-100/60 text-ink-600 hover:border-ochre-500/40"
                  }`}
                  style={active ? { backgroundColor: f.color } : undefined}
                >
                  {f.icon}
                  {f.label}
                  <span
                    className={`ml-0.5 rounded-full px-1 font-latin text-[9px] ${
                      active ? "bg-paper-50/25" : "bg-paper-200/80"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 搜索框 + 省份筛选 */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400"
              />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="搜索餐厅、菜系、招牌菜..."
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-1.5 pl-8 pr-3 font-sans text-xs text-ink-700 placeholder:text-ink-400 focus:border-cinnabar-500/40 focus:outline-none focus:ring-1 focus:ring-cinnabar-500/20"
              />
            </div>
            <select
              value={provinceFilter}
              onChange={(e) => setProvinceFilter(e.target.value)}
              className="rounded-lg border border-ochre-500/20 bg-paper-100/60 px-2 py-1.5 font-sans text-xs text-ink-700 focus:border-cinnabar-500/40 focus:outline-none"
            >
              {provinces.map((p) => (
                <option key={p} value={p}>
                  {p === "全部" ? "全部地区" : p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-y-auto">
          {selectedRestaurant ? (
            /* 餐厅详情 */
            <RestaurantDetail
              restaurant={selectedRestaurant}
              onBack={() => setSelectedRestaurant(null)}
              onFocus={(r) => {
                setFocusTarget({ lat: r.lat, lng: r.lng, zoom: 10 });
                closeRestaurantPanel();
              }}
            />
          ) : (
            <>
              {/* 结果统计 */}
              <div className="px-5 py-2 font-sans text-[11px] text-ink-400">
                共找到 <span className="font-semibold text-cinnabar-600">{filteredRestaurants.length}</span> 家餐厅
              </div>

              {/* 餐厅列表 */}
              <div className="space-y-2 px-5 pb-5">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onClick={() => setSelectedRestaurant(restaurant)}
                  />
                ))}
              </div>

              {filteredRestaurants.length === 0 && (
                <div className="py-12 text-center">
                  <Utensils size={32} className="mx-auto mb-2 text-ink-300" />
                  <p className="font-serif text-sm text-ink-400">暂无匹配的餐厅</p>
                  <p className="mt-1 font-sans text-[11px] text-ink-400">请调整筛选条件</p>
                </div>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
}

// 餐厅卡片
function RestaurantCard({
  restaurant,
  onClick,
}: {
  restaurant: Restaurant;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-start gap-3 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-3 text-left transition-all hover:border-cinnabar-500/40 hover:bg-cinnabar-50/20 hover:shadow-sm"
    >
      {/* 图标区 */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cinnabar-500/10 to-ochre-500/10">
        {restaurant.stars ? (
          <div className="flex flex-col items-center">
            <div className="flex">
              {Array.from({ length: restaurant.stars }).map((_, i) => (
                <Star key={i} size={10} className="fill-cinnabar-500 text-cinnabar-500" />
              ))}
            </div>
            <span className="mt-0.5 font-latin text-[8px] font-bold text-cinnabar-600">
              MICHELIN
            </span>
          </div>
        ) : restaurant.diamonds ? (
          <div className="flex flex-col items-center">
            <div className="flex">
              {Array.from({ length: restaurant.diamonds }).map((_, i) => (
                <Gem key={i} size={10} className="fill-ink-700 text-ink-700" />
              ))}
            </div>
            <span className="mt-0.5 font-latin text-[8px] font-bold text-ink-600">
              BLACK PEARL
            </span>
          </div>
        ) : restaurant.categories.includes("百年老店") ? (
          <Clock size={20} className="text-amber-700" />
        ) : restaurant.categories.includes("非遗传承") ? (
          <BookOpen size={20} className="text-emerald-600" />
        ) : restaurant.categories.includes("亚洲五十佳") ? (
          <Trophy size={20} className="text-ochre-500" />
        ) : restaurant.categories.includes("世界五十佳") ? (
          <Award size={20} className="text-indigo2-500" />
        ) : (
          <Utensils size={20} className="text-orange-500" />
        )}
      </div>

      {/* 信息区 */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-serif text-sm font-semibold text-ink-900 group-hover:text-cinnabar-600">
            {restaurant.name}
          </p>
          <ChevronRight size={14} className="flex-shrink-0 text-ink-300 group-hover:text-cinnabar-500" />
        </div>

        <div className="mt-0.5 flex items-center gap-1.5 font-sans text-[10px] text-ink-400">
          <MapPin size={10} />
          <span>{restaurant.city}</span>
          <span>·</span>
          <span>{restaurant.cuisine}</span>
          {restaurant.founded && (
            <>
              <span>·</span>
              <span className="text-amber-700">创于{restaurant.founded}</span>
            </>
          )}
        </div>

        {/* 分类标签 */}
        <div className="mt-1.5 flex flex-wrap gap-1">
          {restaurant.categories.slice(0, 4).map((cat) => {
            const style = CATEGORY_STYLES[cat];
            return (
              <span
                key={cat}
                className={`rounded px-1.5 py-0.5 font-serif text-[9px] ${style?.bg} ${style?.text}`}
              >
                {style?.label || cat}
              </span>
            );
          })}
          {restaurant.description.includes("连锁") && (
            <span className="rounded bg-purple-500/15 px-1.5 py-0.5 font-serif text-[9px] text-purple-600">
              连锁品牌
            </span>
          )}
        </div>

        {/* 招牌菜 */}
        {restaurant.signatureDishes.length > 0 && (
          <p className="mt-1.5 truncate font-sans text-[10px] text-ink-500">
            招牌：{restaurant.signatureDishes.slice(0, 3).join("、")}
          </p>
        )}
      </div>
    </button>
  );
}

// 餐厅详情
function RestaurantDetail({
  restaurant,
  onBack,
  onFocus,
}: {
  restaurant: Restaurant;
  onBack: () => void;
  onFocus: (r: Restaurant) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Restaurant | null>(null);
  const [newDish, setNewDish] = useState("");

  const set = (patch: Partial<Restaurant>) => {
    if (editData) setEditData({ ...editData, ...patch });
  };

  const startEdit = () => {
    setEditData(JSON.parse(JSON.stringify(restaurant)));
    setIsEditing(true);
  };
  const handleSave = () => {
    if (editData) {
      Object.assign(restaurant, editData);
    }
    setIsEditing(false);
    setEditData(null);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const r = isEditing && editData ? editData : restaurant;

  return (
    <div className="px-5 py-4">
      {/* 返回按钮 + 编辑按钮 */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1 font-serif text-xs text-ink-500 transition-colors hover:text-cinnabar-600"
        >
          <ChevronRight size={14} className="rotate-180" />
          返回列表
        </button>
        {isEditing ? (
          <div className="flex items-center gap-1.5">
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
          </div>
        ) : (
          <button
            onClick={startEdit}
            className="flex items-center gap-1 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 transition-colors hover:bg-paper-200"
          >
            <Pencil size={12} />
            编辑
          </button>
        )}
      </div>

      {/* 餐厅名称 */}
      {isEditing ? (
        <input
          type="text"
          value={r.name}
          onChange={(e) => set({ name: e.target.value })}
          className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-xl font-bold text-ink-900 outline-none focus:border-ochre-500/40"
        />
      ) : (
        <h2 className="font-serif text-xl font-bold text-ink-900">{restaurant.name}</h2>
      )}

      {/* 基本信息 */}
      {isEditing ? (
        <div className="mt-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-0.5 block font-serif text-[11px] text-ink-500">省份</label>
              <input
                type="text"
                value={r.province}
                onChange={(e) => set({ province: e.target.value })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
            <div>
              <label className="mb-0.5 block font-serif text-[11px] text-ink-500">城市</label>
              <input
                type="text"
                value={r.city}
                onChange={(e) => set({ city: e.target.value })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-0.5 block font-serif text-[11px] text-ink-500">菜系</label>
              <input
                type="text"
                value={r.cuisine}
                onChange={(e) => set({ cuisine: e.target.value })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
            <div>
              <label className="mb-0.5 block font-serif text-[11px] text-ink-500">创立年份</label>
              <input
                type="number"
                value={r.founded || ""}
                onChange={(e) => set({ founded: e.target.value || undefined })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-wrap items-center gap-2 font-sans text-[11px] text-ink-500">
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {restaurant.province}·{restaurant.city}
          </span>
          <span>·</span>
          <span>{restaurant.cuisine}</span>
          {restaurant.founded && (
            <>
              <span>·</span>
              <span className="text-amber-700">创立于 {restaurant.founded} 年</span>
            </>
          )}
        </div>
      )}

      {/* 分类标签 */}
      {!isEditing && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {restaurant.categories.map((cat) => {
            const style = CATEGORY_STYLES[cat];
            return (
              <span
                key={cat}
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 font-serif text-[11px] ${style?.bg} ${style?.text}`}
              >
                {style?.label || cat}
                {cat.includes("米其林") && restaurant.stars && (
                  <span className="flex">
                    {Array.from({ length: restaurant.stars }).map((_, i) => (
                      <Star key={i} size={9} className="fill-current" />
                    ))}
                  </span>
                )}
                {cat.includes("黑珍珠") && restaurant.diamonds && (
                  <span className="flex">
                    {Array.from({ length: restaurant.diamonds }).map((_, i) => (
                      <Gem key={i} size={9} className="fill-current" />
                    ))}
                  </span>
                )}
              </span>
            );
          })}
          {restaurant.description.includes("连锁") && (
            <span className="flex items-center gap-1 rounded-full bg-purple-500/15 px-2.5 py-1 font-serif text-[11px] text-purple-600">
              连锁品牌
            </span>
          )}
        </div>
      )}

      {/* 排名信息 */}
      {!isEditing && restaurant.ranking && (
        <div className="mt-3 rounded-lg border border-ochre-500/20 bg-ochre-500/5 p-2.5">
          <p className="font-serif text-xs text-ink-700">
            <Trophy size={12} className="mr-1 inline text-ochre-500" />
            {restaurant.rankingYear}年{restaurant.categories.includes("世界五十佳") ? "世界五十佳" : "亚洲五十佳"}餐厅
            <span className="ml-1 font-latin font-bold text-ochre-600">第 {restaurant.ranking} 位</span>
          </p>
        </div>
      )}

      {/* 地址 */}
      <div className="mt-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-3">
        <h3 className="mb-1 flex items-center gap-1.5 font-serif text-xs font-semibold text-ink-900">
          <MapPin size={12} className="text-cinnabar-500" />
          地址
        </h3>
        {isEditing ? (
          <input
            type="text"
            value={r.address || ""}
            onChange={(e) => set({ address: e.target.value })}
            className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-sans text-[11px] text-ink-600 outline-none focus:border-ochre-500/40"
          />
        ) : (
          <p className="font-sans text-[11px] leading-relaxed text-ink-600">
            {restaurant.address}
          </p>
        )}
      </div>

      {/* 餐厅介绍 */}
      <div className="mt-3 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-3">
        <h3 className="mb-1.5 flex items-center gap-1.5 font-serif text-xs font-semibold text-ink-900">
          <BookOpen size={12} className="text-cinnabar-500" />
          餐厅介绍
        </h3>
        {isEditing ? (
          <textarea
            value={r.description}
            onChange={(e) => set({ description: e.target.value })}
            rows={4}
            className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1.5 font-serif text-xs leading-relaxed text-ink-700 outline-none focus:border-ochre-500/40"
          />
        ) : (
          <p className="font-serif text-xs leading-relaxed text-ink-700">
            {restaurant.description}
          </p>
        )}
      </div>

      {/* 非遗项目 */}
      {(isEditing || restaurant.heritageItem) && (
        <div className="mt-3 rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-3">
          <h3 className="mb-1 flex items-center gap-1.5 font-serif text-xs font-semibold text-emerald-700">
            <BookOpen size={12} />
            非遗项目
          </h3>
          {isEditing ? (
            <input
              type="text"
              value={r.heritageItem || ""}
              onChange={(e) => set({ heritageItem: e.target.value })}
              className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
            />
          ) : (
            <p className="font-serif text-xs leading-relaxed text-ink-700">
              {restaurant.heritageItem}
            </p>
          )}
        </div>
      )}

      {/* 招牌菜 */}
      <div className="mt-3 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-3">
        <h3 className="mb-2 flex items-center gap-1.5 font-serif text-xs font-semibold text-ink-900">
          <Utensils size={12} className="text-cinnabar-500" />
          招牌菜品
        </h3>
        {isEditing ? (
          <>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {r.signatureDishes.map((dish, idx) => (
                <span key={idx} className="flex items-center gap-1 rounded-full border border-ochre-500/20 bg-paper-50/80 px-2.5 py-1 font-serif text-[11px] text-ink-700">
                  {dish}
                  <button
                    onClick={() => set({ signatureDishes: r.signatureDishes.filter((_, i) => i !== idx) })}
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
                    if (t) { set({ signatureDishes: [...r.signatureDishes, t] }); setNewDish(""); }
                  }
                }}
                placeholder="添加招牌菜..."
                className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2 py-1 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
              <button
                onClick={() => {
                  const t = newDish.trim();
                  if (t) { set({ signatureDishes: [...r.signatureDishes, t] }); setNewDish(""); }
                }}
                className="flex items-center gap-1 rounded-lg bg-ochre-500/80 px-2 py-1 font-serif text-xs text-paper-50 hover:bg-ochre-500"
              >
                <Plus size={12} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {restaurant.signatureDishes.map((dish) => (
              <span
                key={dish}
                className="rounded-full border border-ochre-500/20 bg-paper-50/80 px-2.5 py-1 font-serif text-[11px] text-ink-700"
              >
                {dish}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 定位按钮 */}
      {!isEditing && (
        <button
          onClick={() => onFocus(restaurant)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cinnabar-500 py-2.5 font-serif text-sm font-medium text-paper-50 shadow-sm transition-all hover:bg-cinnabar-600 hover:shadow-md"
        >
          <MapPin size={14} />
          在地图上查看位置
        </button>
      )}
    </div>
  );
}
