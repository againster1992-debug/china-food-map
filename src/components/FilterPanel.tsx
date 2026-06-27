import { useState, useMemo } from "react";
import { X, RotateCcw, Search, ChevronDown, MapPin, ChevronRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import {
  CUISINES,
  CATEGORIES,
  TASTES,
  FOUR_CUISINES,
  EIGHT_CUISINES,
  FAME_TYPES,
  inferFame,
  type FoodType,
  type Cuisine,
  type Fame,
  type Food,
} from "@/types/food";
import { FoodImage } from "./FoodImage";

export default function FilterPanel() {
  const filterPanelOpen = useStore((s) => s.filterPanelOpen);
  const setFilterPanelOpen = useStore((s) => s.setFilterPanelOpen);
  const filterType = useStore((s) => s.filterType);
  const setFilterType = useStore((s) => s.setFilterType);
  const filterCuisines = useStore((s) => s.filterCuisines);
  const toggleCuisine = useStore((s) => s.toggleCuisine);
  const filterCategories = useStore((s) => s.filterCategories);
  const toggleCategory = useStore((s) => s.toggleCategory);
  const filterTastes = useStore((s) => s.filterTastes);
  const toggleTaste = useStore((s) => s.toggleTaste);
  const filterIngredients = useStore((s) => s.filterIngredients);
  const toggleIngredient = useStore((s) => s.toggleIngredient);
  const filterCookingMethods = useStore((s) => s.filterCookingMethods);
  const toggleCookingMethod = useStore((s) => s.toggleCookingMethod);
  const filterFame = useStore((s) => s.filterFame);
  const toggleFame = useStore((s) => s.toggleFame);
  const clearFilters = useStore((s) => s.clearFilters);
  const getAllIngredients = useStore((s) => s.getAllIngredients);
  const getAllCookingMethods = useStore((s) => s.getAllCookingMethods);
  const getFilteredFoods = useStore((s) => s.getFilteredFoods);
  const selectFood = useStore((s) => s.selectFood);
  const focusFood = useStore((s) => s.focusFood);
  const keyword = useStore((s) => s.keyword);

  const [ingredientSearch, setIngredientSearch] = useState("");
  const [methodSearch, setMethodSearch] = useState("");
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [showResults, setShowResults] = useState(true);

  if (!filterPanelOpen) return null;

  const hasActiveFilter =
    filterType !== "all" ||
    filterCuisines.length > 0 ||
    filterCategories.length > 0 ||
    filterTastes.length > 0 ||
    filterIngredients.length > 0 ||
    filterCookingMethods.length > 0 ||
    filterFame.length > 0;

  const typeOptions: { value: FoodType | "all"; label: string; color: string }[] = [
    { value: "all", label: "全部", color: "ink" },
    { value: "traditional", label: "传统美食", color: "cinnabar" },
    { value: "popular", label: "流行美食", color: "indigo2" },
    { value: "tradition", label: "饮食传统", color: "emerald" },
  ];

  const allIngredients = getAllIngredients();
  const allMethods = getAllCookingMethods();
  const filteredIngredients = allIngredients.filter((i) =>
    i.toLowerCase().includes(ingredientSearch.toLowerCase()),
  );
  const filteredMethods = allMethods.filter((m) =>
    m.toLowerCase().includes(methodSearch.toLowerCase()),
  );

  // 菜系分组
  const eightCuisines = CUISINES.filter((c) => EIGHT_CUISINES.includes(c));
  const otherCuisines = CUISINES.filter(
    (c) => !EIGHT_CUISINES.includes(c) && c !== "其他",
  );
  const visibleCuisines = showAllCuisines
    ? CUISINES
    : [...eightCuisines, ...otherCuisines.slice(0, 6)];

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 z-[1200] bg-ink-900/20 backdrop-blur-[2px]"
        onClick={() => setFilterPanelOpen(false)}
      />

      {/* 面板 */}
      <aside className="fixed right-0 top-16 z-[1201] flex h-[calc(100%-4rem)] w-full max-w-md flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
        {/* 头部 */}
        <div className="flex items-center justify-between border-b border-ochre-500/15 px-5 py-4">
          <div>
            <h2 className="font-serif text-lg font-bold text-ink-900">筛选美食</h2>
            <p className="font-latin text-xs italic text-ochre-500">Filter Cuisines</p>
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilter && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 rounded-full bg-paper-200/60 px-3 py-1 font-sans text-xs text-ink-700 transition-colors hover:bg-paper-200"
              >
                <RotateCcw size={12} />
                重置
              </button>
            )}
            <button
              onClick={() => setFilterPanelOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* 类型筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              美食类型
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {typeOptions.map((opt) => {
                const isActive = filterType === opt.value;
                const colorClass =
                  opt.color === "cinnabar"
                    ? "bg-cinnabar-500 text-paper-50 border-cinnabar-500"
                    : opt.color === "indigo2"
                      ? "bg-indigo2-500 text-paper-50 border-indigo2-500"
                      : opt.color === "emerald"
                        ? "bg-emerald-600 text-paper-50 border-emerald-600"
                        : "bg-ink-900 text-paper-50 border-ink-900";
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFilterType(opt.value)}
                    className={`rounded-lg border px-3 py-2.5 font-serif text-sm transition-all ${
                      isActive
                        ? colorClass
                        : "border-ochre-500/20 bg-paper-100/60 text-ink-700 hover:border-ochre-500/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 知名度筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              知名度
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {FAME_TYPES.map((f) => {
                const isActive = filterFame.includes(f);
                const fameColor: Record<Fame, string> = {
                  名菜: "bg-cinnabar-500 text-paper-50 border-cinnabar-500",
                  热门: "bg-orange-500 text-paper-50 border-orange-500",
                  地方名吃: "bg-indigo2-500 text-paper-50 border-indigo2-500",
                  普通: "bg-ink-500 text-paper-50 border-ink-500",
                };
                return (
                  <button
                    key={f}
                    onClick={() => toggleFame(f)}
                    className={`rounded-lg border px-3 py-2 font-serif text-sm transition-all ${
                      isActive
                        ? fameColor[f]
                        : "border-ochre-500/20 bg-paper-100/60 text-ink-700 hover:border-ochre-500/40"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 菜系筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              菜系
              <span className="ml-1 font-sans text-[10px] font-normal text-ink-400">
                （红色为四大菜系，加粗为八大菜系）
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {visibleCuisines.map((c) => {
                const isActive = filterCuisines.includes(c);
                const isFour = FOUR_CUISINES.includes(c);
                const isEight = EIGHT_CUISINES.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggleCuisine(c)}
                    className={`rounded-full px-3 py-1.5 font-serif text-xs transition-all ${
                      isActive
                        ? "bg-cinnabar-500 text-paper-50 shadow-seal"
                        : isFour
                          ? "border border-cinnabar-500/40 bg-cinnabar-50/40 font-medium text-cinnabar-600 hover:bg-cinnabar-50"
                          : isEight
                            ? "border border-ochre-500/30 bg-paper-100/60 font-medium text-ink-800 hover:bg-paper-200"
                            : "border border-ochre-500/20 bg-paper-100/60 text-ink-700 hover:bg-paper-200"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            {!showAllCuisines && otherCuisines.length > 6 && (
              <button
                onClick={() => setShowAllCuisines(true)}
                className="mt-2 flex items-center gap-1 font-sans text-[11px] text-indigo2-600 hover:text-indigo2-700"
              >
                <ChevronDown size={12} />
                展开全部菜系（{CUISINES.length}种）
              </button>
            )}
            {showAllCuisines && (
              <button
                onClick={() => setShowAllCuisines(false)}
                className="mt-2 flex items-center gap-1 font-sans text-[11px] text-indigo2-600 hover:text-indigo2-700"
              >
                <ChevronDown size={12} className="rotate-180" />
                收起
              </button>
            )}
          </section>

          {/* 分类筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              分类
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => {
                const isActive = filterCategories.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className={`rounded-full px-3 py-1.5 font-serif text-xs transition-all ${
                      isActive
                        ? "bg-ochre-500 text-paper-50"
                        : "border border-ochre-500/20 bg-paper-100/60 text-ink-700 hover:bg-paper-200"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 口味筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              口味
            </h3>
            <div className="flex flex-wrap gap-2">
              {TASTES.map((t) => {
                const isActive = filterTastes.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleTaste(t)}
                    className={`rounded-full px-3 py-1.5 font-serif text-xs transition-all ${
                      isActive
                        ? "bg-indigo2-500 text-paper-50"
                        : "border border-indigo2-500/20 bg-indigo2-50/40 text-indigo2-600 hover:bg-indigo2-50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 食材筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              食材
              {filterIngredients.length > 0 && (
                <span className="ml-1 rounded-full bg-cinnabar-500/10 px-1.5 py-0.5 font-sans text-[10px] text-cinnabar-600">
                  {filterIngredients.length}项
                </span>
              )}
            </h3>
            <div className="relative mb-2">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="text"
                value={ingredientSearch}
                onChange={(e) => setIngredientSearch(e.target.value)}
                placeholder="搜索食材..."
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-1.5 pl-7 pr-3 font-sans text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
            <div className="flex max-h-48 flex-wrap gap-1.5 overflow-y-auto">
              {filteredIngredients.map((ing) => {
                const isActive = filterIngredients.includes(ing);
                return (
                  <button
                    key={ing}
                    onClick={() => toggleIngredient(ing)}
                    className={`rounded-md px-2 py-1 font-serif text-[11px] transition-all ${
                      isActive
                        ? "bg-green-700 text-paper-50"
                        : "border border-green-700/20 bg-green-50/30 text-ink-600 hover:bg-green-50"
                    }`}
                  >
                    {ing}
                  </button>
                );
              })}
              {filteredIngredients.length === 0 && (
                <span className="font-sans text-[11px] text-ink-400">未找到匹配食材</span>
              )}
            </div>
            {ingredientSearch === "" && filteredIngredients.length > 60 && (
              <p className="mt-1.5 font-sans text-[10px] text-ink-400">
                共 {filteredIngredients.length} 种食材，可使用搜索框快速查找
              </p>
            )}
            {filterIngredients.length > 0 && (
              <p className="mt-1.5 font-sans text-[10px] text-ink-400">
                包含以下任一食材的美食
              </p>
            )}
          </section>

          {/* 做法筛选 */}
          <section className="mb-7">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-sm font-semibold text-ink-900">
              <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
              做法
              {filterCookingMethods.length > 0 && (
                <span className="ml-1 rounded-full bg-cinnabar-500/10 px-1.5 py-0.5 font-sans text-[10px] text-cinnabar-600">
                  {filterCookingMethods.length}项
                </span>
              )}
            </h3>
            <div className="relative mb-2">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="text"
                value={methodSearch}
                onChange={(e) => setMethodSearch(e.target.value)}
                placeholder="搜索做法..."
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-1.5 pl-7 pr-3 font-sans text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
            </div>
            <div className="flex max-h-48 flex-wrap gap-1.5 overflow-y-auto">
              {filteredMethods.map((m) => {
                const isActive = filterCookingMethods.includes(m);
                return (
                  <button
                    key={m}
                    onClick={() => toggleCookingMethod(m)}
                    className={`rounded-md px-2 py-1 font-serif text-[11px] transition-all ${
                      isActive
                        ? "bg-purple-700 text-paper-50"
                        : "border border-purple-700/20 bg-purple-50/30 text-ink-600 hover:bg-purple-50"
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
              {filteredMethods.length === 0 && (
                <span className="font-sans text-[11px] text-ink-400">未找到匹配做法</span>
              )}
            </div>
            {filterCookingMethods.length > 0 && (
              <p className="mt-1.5 font-sans text-[10px] text-ink-400">
                包含以下任一做法的美食
              </p>
            )}
          </section>

          {/* 说明 */}
          <section className="rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
            <h4 className="mb-2 font-serif text-xs font-semibold text-ink-900">
              关于分类
            </h4>
            <ul className="space-y-1.5 font-sans text-[11px] leading-relaxed text-ink-400">
              <li>
                <span className="font-semibold text-cinnabar-600">传统美食</span>
                ：着重本土发源、历史传承的经典菜品
              </li>
              <li>
                <span className="font-semibold text-indigo2-600">流行美食</span>
                ：当下在各地流行的美食，不限于本土
              </li>
              <li>菜系不限于八大菜系，按公认分类标注</li>
            </ul>
          </section>
        </div>

        {/* 符合条件的美食列表 */}
        <FilterResults
          showResults={showResults}
          setShowResults={setShowResults}
          getFilteredFoods={getFilteredFoods}
          keyword={keyword}
          hasActiveFilter={hasActiveFilter}
          onSelectFood={(f) => {
            focusFood(f);
            setFilterPanelOpen(false);
          }}
        />
      </aside>
    </>
  );
}

// 符合筛选条件的美食结果列表
function FilterResults({
  showResults,
  setShowResults,
  getFilteredFoods,
  keyword,
  hasActiveFilter,
  onSelectFood,
}: {
  showResults: boolean;
  setShowResults: (v: boolean) => void;
  getFilteredFoods: () => Food[];
  keyword: string;
  hasActiveFilter: boolean;
  onSelectFood: (f: Food) => void;
}) {
  const filteredFoods = useMemo(() => {
    const list = getFilteredFoods();
    // 按 popularity 降序，取前 200 条避免过长
    return list
      .sort((a, b) => (b.popularity || 5) - (a.popularity || 5))
      .slice(0, 200);
  }, [getFilteredFoods, keyword, hasActiveFilter]);

  const totalCount = getFilteredFoods().length;

  return (
    <div className="border-t border-ochre-500/15 bg-paper-100/30">
      {/* 折叠头 */}
      <button
        onClick={() => setShowResults(!showResults)}
        className="flex w-full items-center justify-between px-5 py-3 transition-colors hover:bg-paper-200/40"
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-1 rounded-full bg-cinnabar-500" />
          <h3 className="font-serif text-sm font-semibold text-ink-900">
            符合条件的美食
          </h3>
          <span className="rounded-full bg-cinnabar-500/10 px-2 py-0.5 font-latin text-[10px] font-semibold text-cinnabar-600">
            {totalCount}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-ink-400 transition-transform ${showResults ? "" : "rotate-180"}`}
        />
      </button>

      {/* 列表 */}
      {showResults && (
        <div className="max-h-[40vh] overflow-y-auto px-5 pb-4">
          {filteredFoods.length === 0 ? (
            <div className="py-8 text-center">
              <Search size={28} className="mx-auto mb-2 text-ink-300" />
              <p className="font-serif text-sm text-ink-400">未找到匹配的美食</p>
              <p className="mt-1 font-sans text-[11px] text-ink-400">请调整筛选条件</p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {filteredFoods.map((food) => (
                <FoodResultCard key={food.id} food={food} onClick={() => onSelectFood(food)} />
              ))}
              {totalCount > 200 && (
                <p className="pt-2 text-center font-sans text-[10px] text-ink-400">
                  显示前 200 条，共 {totalCount} 条结果
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 美食结果卡片
function FoodResultCard({ food, onClick }: { food: Food; onClick: () => void }) {
  const fame = inferFame(food);
  const fameColor: Record<string, string> = {
    名菜: "bg-cinnabar-500/15 text-cinnabar-600",
    热门: "bg-orange-500/15 text-orange-600",
    地方名吃: "bg-indigo2-500/15 text-indigo2-600",
    普通: "bg-ink-500/10 text-ink-500",
  };

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-2.5 rounded-lg border border-ochre-500/10 bg-paper-50/60 p-2 text-left transition-all hover:border-cinnabar-500/30 hover:bg-cinnabar-50/20"
    >
      {/* 缩略图 */}
      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* 信息 */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5">
          <p className="truncate font-serif text-xs font-semibold text-ink-800 group-hover:text-cinnabar-600">
            {food.name}
          </p>
          <ChevronRight size={12} className="flex-shrink-0 text-ink-300 group-hover:text-cinnabar-500" />
        </div>
        <div className="mt-0.5 flex items-center gap-1 font-sans text-[10px] text-ink-400">
          <MapPin size={9} />
          <span className="truncate">{food.province}</span>
          <span>·</span>
          <span className="truncate">{food.cuisine}</span>
          <span>·</span>
          <span className="truncate">{food.category}</span>
        </div>
      </div>

      {/* 知名度标签 */}
      <span className={`flex-shrink-0 rounded px-1.5 py-0.5 font-serif text-[9px] ${fameColor[fame]}`}>
        {fame}
      </span>
    </button>
  );
}
