import { useState } from "react";
import { X, MapPin, Trophy, Flame, BookOpen, Utensils, Leaf, Calendar, Coffee, Scroll, Pencil, Save, Plus } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getProvinceFlavor, CUISINE_FLAVORS } from "@/data/provinceFlavors";
import { getProvinceFoodCulture } from "@/data/provinceFoodCulture";
import { inferFame } from "@/types/food";
import type { Food, Province } from "@/types/food";
import { FoodImage } from "./FoodImage";

type CultureData = NonNullable<ReturnType<typeof getProvinceFoodCulture>>;

export default function ProvincePanel() {
  const provincePanelOpen = useStore((s) => s.provincePanelOpen);
  const selectedProvince = useStore((s) => s.selectedProvince);
  const closeProvincePanel = useStore((s) => s.closeProvincePanel);
  const getProvinceTopFoods = useStore((s) => s.getProvinceTopFoods);
  const selectFood = useStore((s) => s.selectFood);
  const focusFood = useStore((s) => s.focusFood);
  const openCuisinePanel = useStore((s) => s.openCuisinePanel);
  const foods = useStore((s) => s.foods);

  const [isEditing, setIsEditing] = useState(false);
  const [editCulture, setEditCulture] = useState<CultureData | null>(null);

  if (!provincePanelOpen || !selectedProvince) return null;

  const province = selectedProvince;
  const topFoods = getProvinceTopFoods(province, 10);
  const flavor = getProvinceFlavor(province);
  const originalCulture = getProvinceFoodCulture(province);
  const culture = isEditing && editCulture ? editCulture : originalCulture;
  const totalCount = foods.filter((f) => f.province === province).length;

  // 该省份的饮食传统（type === "tradition" 或 tags 含"饮食传统"）
  const traditionFoods = foods
    .filter((f) => (f.type === "tradition" || (f.tags || []).includes("饮食传统")) && f.province === province)
    .sort((a, b) => (b.popularity || 5) - (a.popularity || 5));

  const startEdit = () => {
    if (originalCulture) {
      setEditCulture(JSON.parse(JSON.stringify(originalCulture)));
      setIsEditing(true);
    }
  };
  const handleSave = () => {
    setIsEditing(false);
    setEditCulture(null);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditCulture(null);
  };
  const setField = (patch: Partial<CultureData>) => {
    if (editCulture) setEditCulture({ ...editCulture, ...patch });
  };

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 z-[1200] bg-ink-900/20 backdrop-blur-[2px]"
        onClick={closeProvincePanel}
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
                <MapPin size={18} className="text-cinnabar-500" />
                <h2 className="font-serif text-2xl font-bold text-ink-900">{province}</h2>
              </div>
              {flavor && (
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3 py-1 font-serif text-xs"
                    style={{ backgroundColor: `${flavor.color}15`, color: flavor.color }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: flavor.color }}
                    />
                    {flavor.flavor}口味
                  </span>
                  <span className="font-sans text-[11px] text-ink-400">
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
                culture && (
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
                onClick={closeProvincePanel}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          {flavor && (
            <p className="mt-2 font-serif text-xs leading-relaxed text-ink-500">
              {flavor.description}
            </p>
          )}
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* 菜系口味 */}
          {(() => {
            const provinceCuisines = CUISINE_FLAVORS.filter(
              (c) => c.originProvinces.includes(province as Province) && c.cuisine !== "其他",
            );
            if (provinceCuisines.length === 0) return null;
            return (
              <section className="mb-4 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
                <h3 className="mb-3 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                  <Utensils size={16} className="text-cinnabar-500" />
                  当地菜系
                </h3>
                <div className="space-y-3">
                  {provinceCuisines.map((cf) => (
                    <div key={cf.cuisine} className="rounded-lg border border-ochre-500/10 bg-paper-50/60 p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openCuisinePanel(cf.cuisine)}
                          className="flex items-center gap-1.5 rounded-full px-3 py-1 font-serif text-sm font-medium transition-all hover:opacity-80 hover:shadow-sm"
                          style={{ backgroundColor: `${cf.color}15`, color: cf.color }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: cf.color }}
                          />
                          {cf.cuisine}·{cf.flavor}
                        </button>
                      </div>
                      <p className="mt-2 font-serif text-[13px] leading-relaxed text-ink-600">
                        {cf.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* 饮食特色 */}
          {culture && (
            <section className="mb-5 rounded-xl border border-ochre-500/15 bg-paper-100/40 p-4">
              <h3 className="mb-3 flex items-center gap-1.5 font-serif text-base font-semibold text-ink-900">
                <BookOpen size={16} className="text-cinnabar-500" />
                当地饮食特色
              </h3>
              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">概述</label>
                    <textarea
                      value={editCulture?.summary || ""}
                      onChange={(e) => setField({ summary: e.target.value })}
                      rows={3}
                      className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-2 font-serif text-sm leading-relaxed text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">主食结构</label>
                    <input
                      type="text"
                      value={editCulture?.staple || ""}
                      onChange={(e) => setField({ staple: e.target.value })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">代表食材（逗号分隔）</label>
                    <input
                      type="text"
                      value={(editCulture?.signatureIngredients || []).join("、")}
                      onChange={(e) => setField({ signatureIngredients: e.target.value.split(/[、,，]/).map((s) => s.trim()).filter(Boolean) })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">烹饪特点（逗号分隔）</label>
                    <input
                      type="text"
                      value={(editCulture?.cookingFeatures || []).join("、")}
                      onChange={(e) => setField({ cookingFeatures: e.target.value.split(/[、,，]/).map((s) => s.trim()).filter(Boolean) })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">饮食习惯（分号分隔）</label>
                    <input
                      type="text"
                      value={(editCulture?.dietaryHabits || []).join("；")}
                      onChange={(e) => setField({ dietaryHabits: e.target.value.split(/[；;]/).map((s) => s.trim()).filter(Boolean) })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">节庆饮食（逗号分隔）</label>
                    <input
                      type="text"
                      value={(editCulture?.festivalFoods || []).join("、")}
                      onChange={(e) => setField({ festivalFoods: e.target.value.split(/[、,，]/).map((s) => s.trim()).filter(Boolean) })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-serif text-xs font-semibold text-ink-700">茶饮文化</label>
                    <input
                      type="text"
                      value={editCulture?.teaCulture || ""}
                      onChange={(e) => setField({ teaCulture: e.target.value })}
                      className="w-full rounded-lg border border-ochre-500/20 bg-paper-50/80 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <p className="mb-3 font-serif text-sm leading-relaxed text-ink-600">
                    {culture.summary}
                  </p>
                  <div className="space-y-2.5">
                    <CultureRow icon={<Utensils size={14} />} label="主食结构">
                      {culture.staple}
                    </CultureRow>
                    <CultureRow icon={<Leaf size={14} />} label="代表食材">
                      {culture.signatureIngredients.join("、")}
                    </CultureRow>
                    <CultureRow icon={<Utensils size={14} />} label="烹饪特点">
                      {culture.cookingFeatures.join("、")}
                    </CultureRow>
                    <CultureRow icon={<Coffee size={14} />} label="饮食习惯">
                      {culture.dietaryHabits.join("；")}
                    </CultureRow>
                    <CultureRow icon={<Calendar size={14} />} label="节庆饮食">
                      {culture.festivalFoods.join("、")}
                    </CultureRow>
                    {culture.teaCulture && (
                      <CultureRow icon={<Coffee size={14} />} label="茶饮文化">
                        {culture.teaCulture}
                      </CultureRow>
                    )}
                  </div>
                </>
              )}
            </section>
          )}

          {/* 饮食传统（可点击跳转到对应详情） */}
          {traditionFoods.length > 0 && (
            <section className="mb-5 rounded-xl border border-emerald-500/20 bg-emerald-50/20 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
                <Scroll size={14} className="text-emerald-600" />
                饮食传统
                <span className="ml-1 font-sans text-[10px] font-normal text-ink-400">
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

          {/* 十大美食列表 */}
          <h3 className="mb-3 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
            <Trophy size={14} className="text-ochre-500" />
            {province}十大美食
            <span className="ml-1 font-sans text-[10px] font-normal text-ink-400">
              综合知名度与热度排序
            </span>
          </h3>

          <div className="space-y-2">
            {topFoods.map((food, idx) => (
              <ProvinceFoodRow
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

function CultureRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2.5">
      <div className="flex w-20 flex-shrink-0 items-center gap-1.5 font-sans text-sm font-medium text-ink-500">
        <span className="text-ochre-500">{icon}</span>
        {label}
      </div>
      <p className="flex-1 font-serif text-[15px] leading-relaxed text-ink-800">
        {children}
      </p>
    </div>
  );
}

function ProvinceFoodRow({
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
      {/* 排名 */}
      <div
        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-latin text-sm font-bold ${rankColor}`}
      >
        {rank}
      </div>

      {/* 图片 */}
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

      {/* 信息 */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate font-serif text-sm font-medium text-ink-900">
            {food.name}
          </p>
          <span
            className={`flex-shrink-0 rounded px-1.5 py-0.5 font-serif text-[9px] ${fameColor[fame]}`}
          >
            {fame}
          </span>
        </div>
        <div className="mt-0.5 flex items-center gap-2 font-sans text-[10px] text-ink-400">
          <span>{food.cuisine}</span>
          <span>·</span>
          <span>{food.category}</span>
          <span>·</span>
          <span>{food.taste}</span>
        </div>
      </div>

      {/* 热度 */}
      <div className="flex flex-shrink-0 flex-col items-end">
        <div className="flex items-center gap-0.5">
          <Flame size={10} className="text-cinnabar-500" />
          <span className="font-latin text-xs font-semibold text-cinnabar-600">
            {food.popularity || 5}
          </span>
        </div>
      </div>
    </button>
  );
}
