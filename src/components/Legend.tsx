import { useState } from "react";
import { useStore } from "@/store/useStore";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { FLAVOR_COLORS } from "@/data/provinceFlavors";

export default function Legend() {
  const filterType = useStore((s) => s.filterType);
  const filterCuisines = useStore((s) => s.filterCuisines);
  const filterCategories = useStore((s) => s.filterCategories);
  const filterTastes = useStore((s) => s.filterTastes);
  const filterIngredients = useStore((s) => s.filterIngredients);
  const filterCookingMethods = useStore((s) => s.filterCookingMethods);
  const filterFame = useStore((s) => s.filterFame);
  const clearFilters = useStore((s) => s.clearFilters);
  const toggleCuisine = useStore((s) => s.toggleCuisine);
  const toggleCategory = useStore((s) => s.toggleCategory);
  const toggleTaste = useStore((s) => s.toggleTaste);
  const toggleIngredient = useStore((s) => s.toggleIngredient);
  const toggleCookingMethod = useStore((s) => s.toggleCookingMethod);
  const toggleFame = useStore((s) => s.toggleFame);
  const setFilterType = useStore((s) => s.setFilterType);
  const getFilteredFoods = useStore((s) => s.getFilteredFoods);
  const [showFlavors, setShowFlavors] = useState(false);

  const filteredCount = getFilteredFoods().length;
  const hasActiveFilter =
    filterType !== "all" ||
    filterCuisines.length > 0 ||
    filterCategories.length > 0 ||
    filterTastes.length > 0 ||
    filterIngredients.length > 0 ||
    filterCookingMethods.length > 0 ||
    filterFame.length > 0;

  const flavorEntries = Object.entries(FLAVOR_COLORS);

  return (
    <div className="pointer-events-none absolute bottom-4 left-1/2 z-[1000] flex w-[calc(100vw-1.5rem)] max-w-2xl -translate-x-1/2 flex-col items-center gap-2" style={{ bottom: 'calc(1rem + var(--safe-bottom, 0px))' }}>
      {/* 口味图例（可展开） */}
      {showFlavors && (
        <div className="pointer-events-auto w-full max-w-md rounded-xl border border-ochre-500/20 bg-paper-50/95 px-4 py-3 shadow-ink backdrop-blur-md animate-slide-in-up">
          <p className="mb-2 font-serif text-xs font-semibold text-ink-900">省份口味色标</p>
          <div className="flex flex-wrap gap-2">
            {flavorEntries.map(([flavor, color]) => (
              <div key={flavor} className="flex items-center gap-1">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="font-serif text-[10px] text-ink-600">{flavor}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 font-sans text-[10px] text-ink-400">
            标记边框颜色对应所在省份的总体口味
          </p>
        </div>
      )}

      <div className="pointer-events-auto flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-ochre-500/20 bg-paper-50/95 px-3 py-2 shadow-ink backdrop-blur-md scroll-touch sm:gap-3 sm:px-4">
        {/* 标记说明 */}
        <div className="flex shrink-0 items-center gap-2 border-r border-ochre-500/15 pr-2 sm:gap-3 sm:pr-3">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 text-[8px] font-bold text-paper-50">
              食
            </span>
            <span className="font-serif text-[11px] text-ink-700">传统</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-3.5 w-3.5 rotate-[-45deg] items-center justify-center rounded-[50%_50%_50%_0] bg-gradient-to-br from-indigo2-500 to-indigo2-600">
              <span className="rotate-45 text-[7px] text-paper-50">食</span>
            </span>
            <span className="font-serif text-[11px] text-ink-700">流行</span>
          </div>
        </div>

        {/* 口味色标切换 */}
        <button
          onClick={() => setShowFlavors(!showFlavors)}
          className="flex shrink-0 items-center gap-1 border-r border-ochre-500/15 pr-2 font-serif text-[11px] text-ink-500 transition-colors hover:text-cinnabar-600 sm:pr-3"
        >
          口味色标
          {showFlavors ? <ChevronDown size={11} /> : <ChevronUp size={11} />}
        </button>

        {/* 当前筛选 */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="font-serif text-[11px] text-ink-400">
            当前显示
          </span>
          <span className="font-latin text-sm font-semibold text-cinnabar-600">
            {filteredCount}
          </span>
          <span className="font-serif text-[11px] text-ink-400">道</span>
        </div>

        {/* 活跃筛选标签 */}
        {hasActiveFilter && (
          <div className="flex shrink-0 items-center gap-1.5 border-l border-ochre-500/15 pl-2 sm:pl-3">
            {filterType !== "all" && (
              <FilterChip
                label={filterType === "traditional" ? "传统" : "流行"}
                onRemove={() => setFilterType("all")}
              />
            )}
            {filterCuisines.map((c) => (
              <FilterChip key={c} label={c} onRemove={() => toggleCuisine(c)} />
            ))}
            {filterCategories.map((c) => (
              <FilterChip key={c} label={c} onRemove={() => toggleCategory(c)} />
            ))}
            {filterTastes.map((t) => (
              <FilterChip key={t} label={t} onRemove={() => toggleTaste(t)} />
            ))}
            {filterIngredients.map((i) => (
              <FilterChip key={i} label={i} onRemove={() => toggleIngredient(i)} />
            ))}
            {filterCookingMethods.map((m) => (
              <FilterChip key={m} label={m} onRemove={() => toggleCookingMethod(m)} />
            ))}
            {filterFame.map((f) => (
              <FilterChip key={f} label={f} onRemove={() => toggleFame(f)} />
            ))}
            <button
              onClick={clearFilters}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-paper-200/60 text-ink-400 transition-colors hover:bg-cinnabar-500 hover:text-paper-50"
            >
              <X size={11} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-cinnabar-50 px-2 py-0.5 font-serif text-[10px] text-cinnabar-600">
      {label}
      <button
        onClick={onRemove}
        className="flex h-3 w-3 items-center justify-center rounded-full hover:bg-cinnabar-500 hover:text-paper-50"
      >
        <X size={9} />
      </button>
    </span>
  );
}
