import { useState } from "react";
import { X, MapPin, Flame, BookOpen, Clock, Sparkles, Tag, Utensils, Pencil, Save, Plus } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useUserDataStore } from "@/store/useUserDataStore";
import { getSimilarFoodsByCategory } from "@/utils/similarity";
import { getProvinceFlavor, getCuisineFlavor } from "@/data/provinceFlavors";
import { inferFame, CATEGORIES, TASTES, CUISINES, type Food, type Taste, type FoodCategory, type Cuisine } from "@/types/food";
import { FoodImage } from "./FoodImage";
import FoodInteraction from "./FoodInteraction";

export default function DetailPanel() {
  const detailOpen = useStore((s) => s.detailOpen);
  const setDetailOpen = useStore((s) => s.setDetailOpen);
  const selectedFood = useStore((s) => s.selectedFood);
  const focusFood = useStore((s) => s.focusFood);
  const foods = useStore((s) => s.foods);
  const selectFood = useStore((s) => s.selectFood);
  const updateFood = useStore((s) => s.updateFood);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Food | null>(null);
  const [newTag, setNewTag] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newMethod, setNewMethod] = useState("");

  if (!detailOpen || !selectedFood) return null;

  const food = selectedFood;

  // 编辑模式
  if (isEditing && editData) {
    const set = (patch: Partial<Food>) => setEditData({ ...editData, ...patch });

    const addTag = () => {
      const t = newTag.trim();
      if (t && !editData.tags.includes(t)) set({ tags: [...editData.tags, t] });
      setNewTag("");
    };
    const removeTag = (t: string) => set({ tags: editData.tags.filter((x) => x !== t) });

    const addIngredient = () => {
      const t = newIngredient.trim();
      if (t && !editData.ingredients.includes(t)) set({ ingredients: [...editData.ingredients, t] });
      setNewIngredient("");
    };
    const removeIngredient = (t: string) => set({ ingredients: editData.ingredients.filter((x) => x !== t) });

    const addMethod = () => {
      const t = newMethod.trim();
      if (t && !editData.cookingMethod.includes(t)) set({ cookingMethod: [...editData.cookingMethod, t] });
      setNewMethod("");
    };
    const removeMethod = (t: string) => set({ cookingMethod: editData.cookingMethod.filter((x) => x !== t) });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        set({ image: result });
      };
      reader.readAsDataURL(file);
    };

    const handleSave = () => {
      updateFood(food.id, editData);
      setIsEditing(false);
      setEditData(null);
    };

    const handleCancel = () => {
      setIsEditing(false);
      setEditData(null);
    };

    return (
      <aside className="fixed right-0 top-16 z-[1100] flex h-[calc(100%-4rem)] w-full max-w-md flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
        {/* 编辑模式头部 */}
        <div className="flex items-center justify-between border-b border-ochre-500/15 px-5 py-3">
          <h2 className="flex items-center gap-2 font-serif text-sm font-bold text-cinnabar-600">
            <Pencil size={14} />
            编辑美食信息
          </h2>
          <div className="flex items-center gap-2">
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
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* 图片编辑 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">美食图片</label>
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-paper-200">
              <img
                src={editData.image}
                alt={editData.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <input
              type="text"
              value={editData.image.startsWith("data:") ? "（已上传图片）" : editData.image}
              onChange={(e) => set({ image: e.target.value })}
              placeholder="输入图片URL..."
              className="mt-2 w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-sans text-xs text-ink-700 outline-none focus:border-ochre-500/40"
            />
            <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-dashed border-ochre-500/30 bg-paper-100/40 py-1.5 font-serif text-xs text-ochre-600 transition-colors hover:bg-paper-200">
              <Plus size={12} />
              上传本地图片
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </section>

          {/* 名称 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">名称</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => set({ name: e.target.value })}
              className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-sm text-ink-900 outline-none focus:border-ochre-500/40"
            />
          </section>

          {/* 别名 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">别名（逗号分隔）</label>
            <input
              type="text"
              value={(editData.alias || []).join("、")}
              onChange={(e) => set({ alias: e.target.value.split(/[、,，]/).map((s) => s.trim()).filter(Boolean) })}
              className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
            />
          </section>

          {/* 分类/口味/菜系 */}
          <section className="mb-4 grid grid-cols-3 gap-2">
            <div>
              <label className="mb-1 block font-serif text-[11px] font-semibold text-ink-900">分类</label>
              <select
                value={editData.category}
                onChange={(e) => set({ category: e.target.value as FoodCategory })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-2 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1 block font-serif text-[11px] font-semibold text-ink-900">口味</label>
              <select
                value={editData.taste}
                onChange={(e) => set({ taste: e.target.value as Taste })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-2 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              >
                {TASTES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1 block font-serif text-[11px] font-semibold text-ink-900">菜系</label>
              <select
                value={editData.cuisine}
                onChange={(e) => set({ cuisine: e.target.value as Cuisine })}
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-2 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              >
                {CUISINES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </section>

          {/* 发源地 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">发源地</label>
            <input
              type="text"
              value={editData.origin}
              onChange={(e) => set({ origin: e.target.value })}
              className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-sm text-ink-700 outline-none focus:border-ochre-500/40"
            />
          </section>

          {/* 详细介绍 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">详细介绍</label>
            <textarea
              value={editData.description}
              onChange={(e) => set({ description: e.target.value })}
              rows={5}
              className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-2 font-serif text-sm leading-relaxed text-ink-700 outline-none focus:border-ochre-500/40"
            />
          </section>

          {/* 特色标签 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">特色标签</label>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {editData.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 rounded-md border border-ochre-500/20 bg-paper-100/60 px-2 py-0.5 font-serif text-[11px] text-ink-700">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="text-ink-400 hover:text-cinnabar-500">
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                placeholder="输入新标签..."
                className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
              <button onClick={addTag} className="flex items-center gap-1 rounded-lg bg-ochre-500/80 px-3 py-1.5 font-serif text-xs text-paper-50 hover:bg-ochre-500">
                <Plus size={12} />
              </button>
            </div>
          </section>

          {/* 食材 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">主要食材</label>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {editData.ingredients.map((ing) => (
                <span key={ing} className="flex items-center gap-1 rounded-md border border-green-700/20 bg-green-50/40 px-2 py-0.5 font-serif text-[11px] text-green-800">
                  {ing}
                  <button onClick={() => removeIngredient(ing)} className="text-green-600 hover:text-cinnabar-500">
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addIngredient(); } }}
                placeholder="输入新食材..."
                className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
              <button onClick={addIngredient} className="flex items-center gap-1 rounded-lg bg-green-700/80 px-3 py-1.5 font-serif text-xs text-paper-50 hover:bg-green-700">
                <Plus size={12} />
              </button>
            </div>
          </section>

          {/* 做法 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">烹饪方式</label>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {editData.cookingMethod.map((m) => (
                <span key={m} className="flex items-center gap-1 rounded-md border border-indigo2-500/20 bg-indigo2-50/40 px-2 py-0.5 font-serif text-[11px] text-indigo2-700">
                  {m}
                  <button onClick={() => removeMethod(m)} className="text-indigo2-400 hover:text-cinnabar-500">
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={newMethod}
                onChange={(e) => setNewMethod(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addMethod(); } }}
                placeholder="输入新做法..."
                className="flex-1 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-1.5 font-serif text-xs text-ink-700 outline-none focus:border-ochre-500/40"
              />
              <button onClick={addMethod} className="flex items-center gap-1 rounded-lg bg-indigo2-500/80 px-3 py-1.5 font-serif text-xs text-paper-50 hover:bg-indigo2-500">
                <Plus size={12} />
              </button>
            </div>
          </section>

          {/* 热度 */}
          <section className="mb-4">
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">
              热度指数：<span className="text-cinnabar-600">{editData.popularity || 5}/10</span>
            </label>
            <input
              type="range"
              min={1}
              max={10}
              value={editData.popularity || 5}
              onChange={(e) => set({ popularity: Number(e.target.value) })}
              className="w-full accent-cinnabar-500"
            />
          </section>
        </div>
      </aside>
    );
  }

  // 展示模式
  const isTraditional = food.type === "traditional";
  const isTradition = food.type === "tradition" || (food.tags || []).includes("饮食传统");
  const similarByCategory = isTradition ? null : getSimilarFoodsByCategory(food, foods, 8);

  const startEdit = () => {
    setEditData({ ...food });
    setIsEditing(true);
  };

  return (
    <aside className="fixed right-0 top-16 z-[1100] flex h-[calc(100%-4rem)] w-full max-w-md flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5">
        <button
          onClick={startEdit}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/30 text-paper-50 backdrop-blur transition-colors hover:bg-cinnabar-500"
          title="编辑"
        >
          <Pencil size={14} />
        </button>
        <button
          onClick={() => setDetailOpen(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/30 text-paper-50 backdrop-blur transition-colors hover:bg-ink-900/50"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* 图片：按原图长宽比显示，最高不超过 420px */}
        <div className="relative w-full overflow-hidden bg-paper-200">
          <img
            src={food.image}
            alt={food.name}
            referrerPolicy="no-referrer"
            className="block max-h-[420px] w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.style.background =
                "linear-gradient(135deg, #c8392e 0%, #a82d24 100%)";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 font-serif text-[11px] font-medium backdrop-blur ${
                isTradition
                  ? "bg-emerald-600/90 text-paper-50"
                  : isTraditional
                    ? "bg-cinnabar-500/90 text-paper-50"
                    : "bg-indigo2-500/90 text-paper-50"
              }`}
            >
              {isTradition ? "饮食传统" : isTraditional ? "传统美食" : "流行美食"}
            </span>
            {food.popularity && food.popularity >= 9 && (
              <span className="flex items-center gap-1 rounded-full bg-ink-900/60 px-2 py-1 font-latin text-[10px] font-semibold text-gold-400 backdrop-blur">
                <Flame size={10} />
                HOT
              </span>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-3xl font-bold text-paper-50 drop-shadow-lg">
                {food.name}
              </h2>
              {(() => {
                const fame = inferFame(food);
                const fameStyle: Record<string, string> = {
                  名菜: "bg-cinnabar-500/90 text-paper-50",
                  热门: "bg-orange-500/90 text-paper-50",
                  地方名吃: "bg-indigo2-500/80 text-paper-50",
                  普通: "",
                };
                if (fame === "普通") return null;
                return (
                  <span className={`rounded-full px-2.5 py-0.5 font-serif text-xs ${fameStyle[fame]}`}>
                    {fame}
                  </span>
                );
              })()}
            </div>
            {food.alias && food.alias.length > 0 && (
              <p className="mt-1 font-serif text-sm text-paper-200/90">
                <span className="text-paper-200/60">别名：</span>
                {food.alias.join(" · ")}
              </p>
            )}
            <p className="mt-1 font-latin text-sm italic text-paper-200/90">
              {food.province} · {food.cuisine}
            </p>
          </div>
        </div>

        {/* 信息区 */}
        <div className="px-5 py-5">
          {/* 标签栏 */}
          <div className="mb-5 flex flex-wrap gap-2">
            <InfoTag label="分类" value={food.category} color="ochre" />
            <InfoTag label="口味" value={food.taste} color="indigo2" />
            <InfoTag label="菜系" value={food.cuisine} color="cinnabar" />
          </div>

          {/* 综合标签 */}
          {food.tags && food.tags.length > 0 && (
            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
                <Tag size={14} className="text-cinnabar-500" />
                特色标签
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {food.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-ochre-500/20 bg-paper-100/60 px-2 py-0.5 font-serif text-[11px] text-ink-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 食材与做法 */}
          <section className="mb-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-ochre-500/15 bg-paper-100/40 p-3">
              <h4 className="mb-1.5 flex items-center gap-1 font-serif text-xs font-semibold text-ink-900">
                <Utensils size={11} className="text-ochre-500" />
                主要食材
              </h4>
              <p className="font-serif text-xs leading-relaxed text-ink-700">
                {food.ingredients.join("、")}
              </p>
            </div>
            <div className="rounded-lg border border-ochre-500/15 bg-paper-100/40 p-3">
              <h4 className="mb-1.5 flex items-center gap-1 font-serif text-xs font-semibold text-ink-900">
                <Sparkles size={11} className="text-ochre-500" />
                烹饪方式
              </h4>
              <p className="font-serif text-xs leading-relaxed text-ink-700">
                {food.cookingMethod.join("、")}
              </p>
            </div>
          </section>

          {/* 发源地 */}
          <section className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
              <MapPin size={14} className="text-cinnabar-500" />
              发源地
            </h3>
            <div className="rounded-lg border border-ochre-500/15 bg-paper-100/50 p-3">
              <p className="font-serif text-sm leading-relaxed text-ink-700">
                {food.origin}
              </p>
              <div className="mt-2 flex items-center gap-2 border-t border-ochre-500/10 pt-2">
                <MapPin size={11} className="text-ink-400" />
                <span className="font-serif text-xs text-ink-600">{food.province}</span>
                <span className="font-serif text-xs text-ink-400">·</span>
                <span className="font-serif text-xs text-ink-600">{food.cuisine}</span>
                {(() => {
                  const pf = getProvinceFlavor(food.province);
                  const cf = getCuisineFlavor(food.cuisine);
                  if (cf && pf && cf.flavor !== pf.flavor) {
                    return (
                      <>
                        <span
                          className="flex items-center gap-1 rounded-full px-2 py-0.5 font-serif text-[10px]"
                          style={{ backgroundColor: `${cf.color}15`, color: cf.color }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: cf.color }}
                          />
                          {food.cuisine}·{cf.flavor}
                        </span>
                        <span
                          className="flex items-center gap-1 rounded-full px-2 py-0.5 font-serif text-[10px]"
                          style={{ backgroundColor: `${pf.color}15`, color: pf.color }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: pf.color }}
                          />
                          {pf.flavor}口味
                        </span>
                      </>
                    );
                  }
                  const flavor = cf || pf;
                  if (!flavor) return null;
                  return (
                    <span
                      className="flex items-center gap-1 rounded-full px-2 py-0.5 font-serif text-[10px]"
                      style={{ backgroundColor: `${flavor.color}15`, color: flavor.color }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: flavor.color }}
                      />
                      {flavor.flavor}口味
                    </span>
                  );
                })()}
              </div>
            </div>
          </section>

          {/* 详细介绍 */}
          <section className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
              <BookOpen size={14} className="text-cinnabar-500" />
              详细介绍
            </h3>
            <p className="font-serif text-sm leading-7 text-ink-700">
              {food.description}
            </p>
          </section>

          {/* 流行度 */}
          {food.type === "popular" && food.popularity && (
            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
                <Flame size={14} className="text-cinnabar-500" />
                流行指数
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-paper-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cinnabar-500 to-gold-500"
                    style={{ width: `${food.popularity * 10}%` }}
                  />
                </div>
                <span className="font-latin text-sm font-semibold text-cinnabar-600">
                  {food.popularity}/10
                </span>
              </div>
            </section>
          )}

          {/* 多地区流行 */}
          {food.popularRegions && food.popularRegions.length > 0 && (
            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
                <MapPin size={14} className="text-indigo2-500" />
                同样流行于
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {food.popularRegions.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-indigo2-500/20 bg-indigo2-50/40 px-2.5 py-1 font-serif text-[11px] text-indigo2-600"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 相似美食推荐 - 按维度分类（饮食传统不显示） */}
          {similarByCategory && (() => {
            const categories = [
              { key: "comprehensive", label: "综合相似", items: similarByCategory.comprehensive, icon: "✨", color: "cinnabar" },
              { key: "region", label: "地域相近", items: similarByCategory.region, icon: "📍", color: "cinnabar" },
              { key: "ingredients", label: "食材相近", items: similarByCategory.ingredients, icon: "🥘", color: "indigo2" },
              { key: "cookingMethod", label: "做法相近", items: similarByCategory.cookingMethod, icon: "🔥", color: "cinnabar" },
            ].filter((c) => c.items.length > 0);

            if (categories.length === 0) return null;

            return (
              <section className="mb-5">
                <h3 className="mb-3 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
                  <Sparkles size={14} className="text-cinnabar-500" />
                  相似美食
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat.key}>
                      <p className="mb-1.5 font-serif text-[11px] font-medium text-ink-500">
                        {cat.icon} {cat.label}
                        <span className="ml-1 text-ink-300">({cat.items.length})</span>
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                        {cat.items.map((sf) => (
                          <SimilarFoodCard
                            key={sf.id}
                            food={sf}
                            onClick={() => {
                              selectFood(sf);
                              focusFood(sf);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* 评分与互动（饮食传统不显示评分，但显示评论） */}
          <FoodInteraction food={food} />

          {/* 操作 */}
          <div className="flex gap-2 border-t border-ochre-500/15 pt-4">
            <button
              onClick={() => focusFood(food)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-cinnabar-500 py-2.5 font-serif text-sm font-medium text-paper-50 transition-colors hover:bg-cinnabar-600"
            >
              <MapPin size={14} />
              地图定位
            </button>
            <button
              onClick={() => setDetailOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-ochre-500/20 bg-paper-100/60 px-4 py-2.5 font-serif text-sm text-ink-700 transition-colors hover:bg-paper-200"
            >
              <Clock size={14} />
              继续探索
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function InfoTag({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "ochre" | "indigo2" | "cinnabar";
}) {
  const colorClass = {
    ochre: "border-ochre-500/30 bg-ochre-500/5 text-ochre-600",
    indigo2: "border-indigo2-500/30 bg-indigo2-500/5 text-indigo2-600",
    cinnabar: "border-cinnabar-500/30 bg-cinnabar-500/5 text-cinnabar-600",
  }[color];

  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 ${colorClass}`}
    >
      <span className="font-sans text-[10px] opacity-70">{label}</span>
      <span className="font-serif text-xs font-medium">{value}</span>
    </div>
  );
}

function SimilarFoodCard({ food, onClick }: { food: Food; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-20 flex-shrink-0 flex-col items-center overflow-hidden rounded-lg border border-ochre-500/15 bg-paper-100/40 transition-all hover:border-cinnabar-500/40 hover:shadow-sm"
    >
      <div className="relative h-16 w-full overflow-hidden bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div
          className={`absolute left-1 top-1 h-1.5 w-1.5 rounded-full ${
            food.type === "tradition" || (food.tags || []).includes("饮食传统")
              ? "bg-emerald-500"
              : food.type === "traditional"
                ? "bg-cinnabar-500"
                : "bg-indigo2-500"
          }`}
        />
      </div>
      <div className="w-full px-1.5 py-1.5">
        <p className="truncate font-serif text-[11px] font-medium text-ink-900">
          {food.name}
        </p>
        <p className="truncate font-sans text-[9px] text-ink-400">
          {food.province} · {food.taste}
        </p>
      </div>
    </button>
  );
}
