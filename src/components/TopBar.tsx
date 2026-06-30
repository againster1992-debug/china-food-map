import { useState } from "react";
import { Search, SlidersHorizontal, PanelLeft, X, Award } from "lucide-react";
import { useStore } from "@/store/useStore";
import { FOUR_CUISINES, EIGHT_CUISINES } from "@/types/food";
import { TYPE_STATS } from "@/data/foods";
import UserMenu from "./UserMenu";

export default function TopBar() {
  const keyword = useStore((s) => s.keyword);
  const setKeyword = useStore((s) => s.setKeyword);
  const toggleFilterPanel = useStore((s) => s.toggleFilterPanel);
  const filterPanelOpen = useStore((s) => s.filterPanelOpen);
  const toggleSidebar = useStore((s) => s.toggleSidebar);
  const sidebarOpen = useStore((s) => s.sidebarOpen);
  const toggleCuisine = useStore((s) => s.toggleCuisine);
  const filterCuisines = useStore((s) => s.filterCuisines);
  const foods = useStore((s) => s.foods);
  const openRestaurantPanel = useStore((s) => s.openRestaurantPanel);

  // 移动端搜索框展开态
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-[1100] flex h-16 items-center gap-2 border-b border-ochre-500/15 bg-paper-50/85 px-2 backdrop-blur-md sm:px-3 md:gap-2.5 md:px-5">
      {/* 左侧：菜单切换 + Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={toggleSidebar}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-paper-200/60"
          aria-label="切换索引面板"
          title={sidebarOpen ? "隐藏索引面板" : "显示索引面板"}
        >
          <PanelLeft size={18} />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 shadow-seal">
            <img src={`${import.meta.env.BASE_URL}0001.png`} alt="中华美食地图" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg font-bold leading-tight tracking-wide text-ink-900">
              中华美食地图
            </h1>
            <p className="font-latin text-[10px] italic leading-tight tracking-wider text-ochre-500">
              A Culinary Atlas of China
            </p>
          </div>
        </div>
      </div>

      {/* 中间：菜系快速跳转 */}
      <div className="ml-2 hidden flex-1 items-center gap-1.5 overflow-x-auto lg:flex">
        <span className="shrink-0 font-serif text-xs text-ink-400">菜系：</span>
        {EIGHT_CUISINES.map((c) => {
          const isActive = filterCuisines.includes(c);
          const isFour = FOUR_CUISINES.includes(c);
          return (
            <button
              key={c}
              onClick={() => toggleCuisine(c)}
              className={`shrink-0 rounded-full px-3 py-1 font-serif text-xs transition-all ${
                isActive
                  ? "bg-cinnabar-500 text-paper-50 shadow-seal"
                  : isFour
                    ? "border border-cinnabar-500/40 bg-cinnabar-50/50 text-cinnabar-600 hover:bg-cinnabar-50"
                    : "border border-ochre-500/20 bg-paper-100/60 text-ink-700 hover:bg-paper-200"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* 右侧：搜索 + 筛选 + 统计 */}
      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        {/* 桌面端搜索框 */}
        <div className="relative hidden sm:block">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
          />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索美食、地区、菜系…"
            className="w-36 rounded-full border border-ochre-500/20 bg-paper-50/80 py-1.5 pl-9 pr-3 font-sans text-sm text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10 md:w-56"
          />
          {keyword && (
            <button
              onClick={() => setKeyword("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* 移动端搜索按钮 */}
        <button
          onClick={() => setSearchOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ochre-500/20 bg-paper-50/80 text-ink-700 transition-colors hover:bg-paper-200 sm:hidden"
          aria-label="搜索"
        >
          {searchOpen ? <X size={16} /> : <Search size={16} />}
        </button>

        <button
          onClick={toggleFilterPanel}
          className={`flex h-9 shrink-0 items-center gap-1.5 rounded-full px-2.5 font-sans text-xs transition-all sm:px-3 ${
            filterPanelOpen
              ? "bg-ink-900 text-paper-50"
              : "border border-ochre-500/20 bg-paper-50/80 text-ink-700 hover:bg-paper-200"
          }`}
        >
          <SlidersHorizontal size={14} />
          <span className="hidden sm:inline">筛选</span>
        </button>

        <button
          onClick={() => openRestaurantPanel("全部")}
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-cinnabar-500/30 bg-cinnabar-50/60 px-2.5 font-sans text-xs text-cinnabar-600 transition-all hover:bg-cinnabar-100/80 sm:px-3"
          title="查询知名餐厅"
        >
          <Award size={14} />
          <span className="hidden sm:inline">餐厅</span>
        </button>

        <div className="hidden items-center gap-2 border-l border-ochre-500/20 pl-3 xl:flex">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cinnabar-500" />
            <span className="font-latin text-xs text-ink-700">
              {TYPE_STATS.traditional}
            </span>
            <span className="font-serif text-[10px] text-ink-400">传统</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo2-500" />
            <span className="font-latin text-xs text-ink-700">
              {TYPE_STATS.popular}
            </span>
            <span className="font-serif text-[10px] text-ink-400">流行</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-latin text-xs text-ink-400">/</span>
            <span className="font-latin text-sm font-semibold text-cinnabar-600">
              {foods.length}
            </span>
            <span className="font-serif text-[10px] text-ink-400">道</span>
          </div>
        </div>

        <UserMenu />
      </div>

      {/* 移动端搜索展开层 */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-16 z-[1099] flex items-center gap-2 border-b border-ochre-500/15 bg-paper-50/95 px-3 py-2 backdrop-blur-md sm:hidden">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索美食、地区、菜系…"
              autoFocus
              className="w-full rounded-full border border-ochre-500/20 bg-paper-100/80 py-2 pl-9 pr-9 font-sans text-sm text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
            />
            {keyword && (
              <button
                onClick={() => setKeyword("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
