import { X, MapPin, Utensils, Sparkles, Store, Navigation } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function EnclavePanel() {
  const enclavePanelOpen = useStore((s) => s.enclavePanelOpen);
  const selectedEnclave = useStore((s) => s.selectedEnclave);
  const closeEnclavePanel = useStore((s) => s.closeEnclavePanel);
  const setFocusTarget = useStore((s) => s.setFocusTarget);

  if (!enclavePanelOpen || !selectedEnclave) return null;

  const enclave = selectedEnclave;

  const typeColorMap: Record<string, string> = {
    外国菜聚集区: "#2c5f7c",
    驻京办餐厅: "#c8392e",
    民族美食聚集区: "#d4a843",
    地域菜系聚集区: "#5a9b7e",
    融合菜聚集区: "#8b5cf6",
    夜市小吃聚集区: "#f08c3a",
  };
  const typeColor = typeColorMap[enclave.type] || "#c8392e";

  return (
    <>
      {/* 遮罩 */}
      <div
        className="fixed inset-0 z-[1200] bg-ink-900/20 backdrop-blur-[2px]"
        onClick={closeEnclavePanel}
      />

      {/* 面板 */}
      <aside className="fixed right-0 top-16 z-[1201] flex h-[calc(100%-4rem)] w-full max-w-sm flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
        {/* 头部 */}
        <div
          className="relative overflow-hidden px-5 py-5"
          style={{
            background: `linear-gradient(135deg, ${typeColor}18, ${typeColor}05)`,
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Sparkles size={18} style={{ color: typeColor }} />
                <span
                  className="rounded-full px-2.5 py-0.5 font-serif text-[11px]"
                  style={{ backgroundColor: `${typeColor}18`, color: typeColor }}
                >
                  {enclave.type}
                </span>
              </div>
              <h2 className="mt-2 font-serif text-2xl font-bold text-ink-900">
                {enclave.name}
              </h2>
              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin size={14} />
                <span>
                  {enclave.city}·{enclave.province}
                </span>
              </div>
            </div>
            <button
              onClick={closeEnclavePanel}
              className="rounded-full p-1.5 text-ink-400 transition-colors hover:bg-paper-200/60 hover:text-ink-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* 简介 */}
          <section className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-700">
              <BookOpen size={14} className="text-cinnabar-500" />
              聚集区简介
            </h3>
            <p className="text-sm leading-relaxed text-ink-600">{enclave.description}</p>
          </section>

          {/* 饮食特色 */}
          <section className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-700">
              <Sparkles size={14} className="text-cinnabar-500" />
              饮食特色
            </h3>
            <div className="space-y-1.5">
              {enclave.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 rounded-md border border-ochre-500/15 bg-paper-100/40 px-3 py-2"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: typeColor }}
                  />
                  <span className="text-sm text-ink-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 代表美食 */}
          <section className="mb-5">
            <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-700">
              <Utensils size={14} className="text-cinnabar-500" />
              代表美食
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {enclave.representativeFoods.map((food, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-cinnabar-500/20 bg-cinnabar-50/40 px-3 py-1 font-serif text-xs text-cinnabar-700"
                >
                  {food}
                </span>
              ))}
            </div>
          </section>

          {/* 代表餐厅 */}
          {enclave.representativeRestaurants && enclave.representativeRestaurants.length > 0 && (
            <section className="mb-5">
              <h3 className="mb-2 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-700">
                <Store size={14} className="text-cinnabar-500" />
                代表餐厅
              </h3>
              <div className="space-y-1.5">
                {enclave.representativeRestaurants.map((restaurant, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-md border border-ochre-500/15 bg-paper-100/40 px-3 py-2"
                  >
                    <Store size={12} className="text-ochre-500" />
                    <span className="text-sm text-ink-700">{restaurant}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 定位按钮 */}
          <button
            onClick={() => {
              setFocusTarget({ lat: enclave.lat, lng: enclave.lng, zoom: 10 });
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-cinnabar-500/30 bg-cinnabar-50/50 px-4 py-2.5 font-serif text-sm text-cinnabar-700 transition-colors hover:bg-cinnabar-100/60"
          >
            <Navigation size={14} />
            在地图上定位
          </button>
        </div>
      </aside>
    </>
  );
}

// 内联 BookOpen 图标（避免额外导入）
function BookOpen({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  );
}
