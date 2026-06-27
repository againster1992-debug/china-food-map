import { useMemo, useState } from "react";
import { Search, X, ChevronDown, MapPin, Utensils, Trophy, Star, ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { useStore } from "@/store/useStore";
import type { Food, Cuisine, Province } from "@/types/food";
import { EIGHT_CUISINES } from "@/types/food";
import { FoodImage } from "./FoodImage";

export default function Sidebar() {
  const sidebarOpen = useStore((s) => s.sidebarOpen);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);
  const getFilteredFoods = useStore((s) => s.getFilteredFoods);
  const keyword = useStore((s) => s.keyword);
  const setKeyword = useStore((s) => s.setKeyword);
  const focusFood = useStore((s) => s.focusFood);
  const selectedFood = useStore((s) => s.selectedFood);
  const groupBy = useStore((s) => s.groupBy);
  const setGroupBy = useStore((s) => s.setGroupBy);
  const openProvincePanel = useStore((s) => s.openProvincePanel);
  const filterProvinces = useStore((s) => s.filterProvinces);
  const toggleProvince = useStore((s) => s.toggleProvince);
  const clearFilters = useStore((s) => s.clearFilters);

  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  const filteredFoods = getFilteredFoods();

  // 分组
  const grouped = useMemo(() => {
    const map = new Map<string, Food[]>();
    for (const f of filteredFoods) {
      const key = groupBy === "cuisine" ? f.cuisine : f.province;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(f);
    }
    // 排序：菜系按八大菜系顺序，省份按字母
    if (groupBy === "cuisine") {
      const sorted = new Map<string, Food[]>();
      for (const c of EIGHT_CUISINES) {
        if (map.has(c)) sorted.set(c, map.get(c)!);
      }
      if (map.has("其他")) sorted.set("其他", map.get("其他")!);
      return sorted;
    }
    return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0], "zh")));
  }, [filteredFoods, groupBy]);

  const toggleGroup = (key: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // 全部折叠 / 全部展开
  const allCollapsed = grouped.size > 0 && collapsedGroups.size >= grouped.size;
  const toggleAll = () => {
    if (allCollapsed) {
      setCollapsedGroups(new Set());
    } else {
      setCollapsedGroups(new Set([...grouped.keys()]));
    }
  };

  if (!sidebarOpen) return null;

  return (
    <aside className="relative z-[1000] flex h-full w-full flex-col border-r border-ochre-500/15 bg-paper-50/80 backdrop-blur-md md:w-80 lg:w-96">
      {/* 头部 */}
      <div className="border-b border-ochre-500/15 px-4 py-3">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-base font-bold text-ink-900">美食索引</h2>
            <p className="font-latin text-[10px] italic text-ochre-500">
              Culinary Index · {filteredFoods.length} 道
            </p>
          </div>
          <div className="flex items-center gap-1">
            {grouped.size > 0 && (
              <button
                onClick={toggleAll}
                className="flex items-center gap-1 rounded-full border border-ochre-500/20 bg-paper-100/60 px-2 py-1 font-serif text-[10px] text-ink-600 transition-colors hover:border-ochre-500/40 hover:bg-paper-200/60 hover:text-ink-900"
                title={allCollapsed ? "全部展开" : "全部折叠"}
              >
                {allCollapsed ? <ChevronsUpDown size={11} /> : <ChevronsDownUp size={11} />}
                {allCollapsed ? "展开" : "折叠"}
              </button>
            )}
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
              aria-label="隐藏索引面板"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-3">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
          />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索美食名称、地区…"
            className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-2 pl-9 pr-3 font-sans text-xs text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/40 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
          />
        </div>

        {/* 国民美食快捷筛选 */}
        <div className="mb-3 flex gap-1.5">
          <button
            onClick={() => {
              if (filterProvinces.includes("全国")) {
                clearFilters();
              } else {
                clearFilters();
                toggleProvince("全国");
              }
            }}
            className={`flex items-center gap-1 rounded-full px-3 py-1 font-serif text-xs transition-all ${
              filterProvinces.includes("全国")
                ? "bg-cinnabar-500 text-paper-50 shadow-seal"
                : "border border-cinnabar-500/30 bg-cinnabar-50/40 text-cinnabar-600 hover:bg-cinnabar-50"
            }`}
          >
            <Star size={11} />
            国民美食
          </button>
        </div>

        {/* 分组切换 */}
        <div className="flex items-center gap-1 rounded-lg bg-paper-200/50 p-1">
          <button
            onClick={() => setGroupBy("cuisine")}
            className={`flex flex-1 items-center justify-center gap-1 rounded-md py-1.5 font-serif text-xs transition-all ${
              groupBy === "cuisine"
                ? "bg-paper-50 text-cinnabar-600 shadow-sm"
                : "text-ink-400 hover:text-ink-700"
            }`}
          >
            <Utensils size={12} />
            按菜系
          </button>
          <button
            onClick={() => setGroupBy("province")}
            className={`flex flex-1 items-center justify-center gap-1 rounded-md py-1.5 font-serif text-xs transition-all ${
              groupBy === "province"
                ? "bg-paper-50 text-cinnabar-600 shadow-sm"
                : "text-ink-400 hover:text-ink-700"
            }`}
          >
            <MapPin size={12} />
            按省份
          </button>
        </div>
      </div>

      {/* 列表 */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        {grouped.size === 0 ? (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-paper-200/60">
              <Search size={20} className="text-ink-400" />
            </div>
            <p className="font-serif text-sm text-ink-700">未找到匹配美食</p>
            <p className="mt-1 font-sans text-xs text-ink-400">尝试调整搜索或筛选条件</p>
          </div>
        ) : (
          [...grouped.entries()].map(([groupKey, items]) => {
            const isCollapsed = collapsedGroups.has(groupKey);
            return (
              <div key={groupKey} className="mb-4">
                {/* 分组标题 */}
                <div className="flex w-full items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-paper-200/40">
                  <button
                    onClick={() => toggleGroup(groupKey)}
                    className="flex items-center gap-2"
                  >
                    <span className="font-serif text-sm font-semibold text-ink-900">
                      {groupKey}
                    </span>
                    <span className="rounded-full bg-paper-200/60 px-1.5 py-0.5 font-latin text-[10px] text-ink-400">
                      {items.length}
                    </span>
                  </button>
                  <div className="flex items-center gap-1">
                    {groupBy === "province" && (
                      <button
                        onClick={() => openProvincePanel(groupKey as Province)}
                        className="flex items-center gap-1 rounded-full bg-ochre-500/10 px-2 py-0.5 font-serif text-[10px] text-ochre-600 transition-colors hover:bg-ochre-500/20"
                        title={`查看${groupKey}十大美食`}
                      >
                        <Trophy size={10} />
                        十大
                      </button>
                    )}
                    <button onClick={() => toggleGroup(groupKey)}>
                      <ChevronDown
                        size={14}
                        className={`text-ink-400 transition-transform ${
                          isCollapsed ? "" : "rotate-180"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* 分组内容 */}
                {!isCollapsed && (
                  <div className="mt-1 space-y-1">
                    {items.map((food) => (
                      <FoodListItem
                        key={food.id}
                        food={food}
                        isSelected={selectedFood?.id === food.id}
                        onClick={() => focusFood(food)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* 底部图例 */}
      <div className="border-t border-ochre-500/15 bg-paper-100/40 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 text-[8px] font-bold text-paper-50">
                食
              </span>
              <span className="font-serif text-[10px] text-ink-700">传统</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-3.5 w-3.5 rotate-[-45deg] items-center justify-center rounded-[50%_50%_50%_0] bg-gradient-to-br from-indigo2-500 to-indigo2-600">
                <span className="rotate-45 text-[7px] text-paper-50">食</span>
              </span>
              <span className="font-serif text-[10px] text-ink-700">流行</span>
            </div>
          </div>
          <span className="font-latin text-[10px] italic text-ochre-500">
            Tap to explore
          </span>
        </div>
      </div>
    </aside>
  );
}

function FoodListItem({
  food,
  isSelected,
  onClick,
}: {
  food: Food;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-2.5 rounded-lg border px-2 py-2 text-left transition-all ${
        isSelected
          ? "border-cinnabar-500/40 bg-cinnabar-50/60 shadow-sm"
          : "border-transparent hover:border-ochre-500/20 hover:bg-paper-100/60"
      }`}
    >
      {/* 缩略图 */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div
          className={`absolute left-0 top-0 h-1.5 w-1.5 ${
            food.type === "tradition" || (food.tags || []).includes("饮食传统")
              ? "bg-emerald-500"
              : food.type === "traditional"
                ? "bg-cinnabar-500"
                : "bg-indigo2-500"
          }`}
        />
      </div>

      {/* 信息 */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h4 className="truncate font-serif text-sm font-medium text-ink-900">
            {food.name}
          </h4>
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 font-sans text-[10px] text-ink-400">
          <span>{food.province}</span>
          <span>·</span>
          <span>{food.cuisine}</span>
          <span>·</span>
          <span>{food.taste}</span>
        </div>
      </div>

      {/* 流行度 */}
      {food.popularity && food.popularity >= 9 && (
        <span className="shrink-0 rounded-full bg-cinnabar-500/10 px-1.5 py-0.5 font-latin text-[9px] font-semibold text-cinnabar-600">
          HOT
        </span>
      )}
    </button>
  );
}
