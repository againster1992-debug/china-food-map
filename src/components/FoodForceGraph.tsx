import { useEffect, useMemo, useRef, useState } from "react";
import { Expand, X, ArrowLeft } from "lucide-react";
import type { Food, Province, Cuisine } from "@/types/food";
import { calculateSimilarity } from "@/utils/similarity";
import { getFoodColor } from "@/data/provinceFlavors";
import { FoodImage } from "./FoodImage";

/**
 * 美食关联动力图（力导向图）
 *
 * 交互方式：
 * - 单击节点：将该节点切换为图的中心，展示其关联美食
 * - 双击节点：直接打开该美食的详情面板
 * - 点击"返回"按钮：回到原始选中美食
 * - 点击"放大"按钮：弹窗放大查看
 *
 * 实现：力模拟在 useMemo 中同步完成，CSS transition 实现动画，
 * 不使用 requestAnimationFrame，避免与 React DOM 协调冲突。
 */

interface SimNode {
  id: string;
  food: Food;
  x: number;
  y: number;
  initX: number;
  initY: number;
  radius: number;
  isCenter: boolean;
  score: number;
  edgeType: EdgeType | null;
}

interface GraphEdge {
  sourceIdx: number;
  targetIdx: number;
  weight: number;
  type: EdgeType;
}

type EdgeType = "region" | "cuisine" | "ingredients" | "cookingMethod" | "taste";

const EDGE_COLORS: Record<EdgeType, string> = {
  region: "#3b82f6",
  cuisine: "#c8392e",
  ingredients: "#16a34a",
  cookingMethod: "#ea580c",
  taste: "#9333ea",
};

const EDGE_LABELS: Record<EdgeType, string> = {
  region: "同地域",
  cuisine: "同菜系",
  ingredients: "同食材",
  cookingMethod: "同做法",
  taste: "同口味",
};

function getRelationship(a: Food, b: Food): { weight: number; type: EdgeType } | null {
  const sim = calculateSimilarity(a, b);
  if (sim <= 0) return null;
  const sharedIng = a.ingredients.filter((i) => b.ingredients.includes(i)).length;
  const sharedMethod = a.cookingMethod.filter((m) => b.cookingMethod.includes(m)).length;
  const sameProvince = a.province === b.province;
  const sameCuisine = a.cuisine === b.cuisine && a.cuisine !== "其他";
  const sameTaste = a.taste === b.taste;

  let type: EdgeType;
  if (sameProvince) type = "region";
  else if (sameCuisine) type = "cuisine";
  else if (sharedIng >= sharedMethod && sharedIng > 0) type = "ingredients";
  else if (sharedMethod > 0) type = "cookingMethod";
  else if (sameTaste) type = "taste";
  else if (sharedIng > 0) type = "ingredients";
  else return null;

  return { weight: Math.min(100, sim), type };
}

interface FoodForceGraphProps {
  centerFood: Food;
  foods: Food[];
  onSelectFood: (food: Food) => void;
}

// 适配窄面板（max-w-sm = 384px，减去 padding 后内容约 320px）
const VIEW_W = 320;
const VIEW_H = 260;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const MAX_RELATED = 12;
const SIM_STEPS = 300;
const DBL_CLICK_MS = 280;

export default function FoodForceGraph({ centerFood, foods, onSelectFood }: FoodForceGraphProps) {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [enlarged, setEnlarged] = useState(false);
  const [animated, setAnimated] = useState(false);
  // 图的当前中心美食（单击切换，不一定等于 DetailPanel 选中的美食）
  const [graphCenter, setGraphCenter] = useState(centerFood);

  const clickTimerRef = useRef<number | null>(null);

  // DetailPanel 选中美食变化时，同步图的中心
  useEffect(() => {
    setGraphCenter(centerFood);
  }, [centerFood]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  // 同步计算：关联美食 + 力模拟 + 边
  const graphData = useMemo(() => {
    const center = graphCenter;
    // 1. 找最相似的 12 个美食
    const scored = foods
      .filter((f) => f.id !== center.id)
      .map((f) => ({ food: f, score: calculateSimilarity(center, f) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RELATED);

    const related = scored.map((s) => s.food);

    // 2. 构建初始节点
    const nodes: SimNode[] = [
      {
        id: center.id,
        food: center,
        x: CX, y: CY, initX: CX, initY: CY,
        radius: 26, isCenter: true, score: 100, edgeType: null,
      },
      ...related.map((f, i) => {
        const angle = (i / related.length) * Math.PI * 2;
        const dist = 85;
        const score = scored[i].score;
        return {
          id: f.id,
          food: f,
          x: CX + Math.cos(angle) * dist,
          y: CY + Math.sin(angle) * dist,
          initX: CX + Math.cos(angle) * dist,
          initY: CY + Math.sin(angle) * dist,
          radius: 16 + Math.min(8, (score / 100) * 8),
          isCenter: false,
          score,
          edgeType: null as EdgeType | null,
        };
      }),
    ];

    // 3. 构建边
    const edges: GraphEdge[] = [];
    const nodeIdx = new Map<string, number>();
    nodes.forEach((n, i) => nodeIdx.set(n.id, i));

    related.forEach((f) => {
      const rel = getRelationship(center, f);
      if (rel) {
        edges.push({ sourceIdx: 0, targetIdx: nodeIdx.get(f.id)!, weight: rel.weight, type: rel.type });
        const node = nodes[nodeIdx.get(f.id)!];
        if (node && !node.edgeType) node.edgeType = rel.type;
      }
    });

    for (let i = 0; i < related.length; i++) {
      for (let j = i + 1; j < related.length; j++) {
        const a = related[i];
        const b = related[j];
        if (a.province === b.province || (a.cuisine === b.cuisine && a.cuisine !== "其他")) {
          const rel = getRelationship(a, b);
          if (rel) {
            edges.push({ sourceIdx: nodeIdx.get(a.id)!, targetIdx: nodeIdx.get(b.id)!, weight: rel.weight, type: rel.type });
          }
        }
      }
    }

    // 4. 同步运行力模拟
    const sim = nodes.map((n) => ({ ...n, vx: 0, vy: 0 }));
    const kRepel = 2000;
    const kSpring = 0.014;
    const restLen = 78;
    const kCenter = 0.01;
    const damping = 0.82;

    const nodeEdges: number[][] = sim.map(() => []);
    edges.forEach((e, ei) => {
      nodeEdges[e.sourceIdx].push(ei);
      nodeEdges[e.targetIdx].push(ei);
    });

    for (let step = 0; step < SIM_STEPS; step++) {
      for (let ni = 0; ni < sim.length; ni++) {
        const n = sim[ni];
        if (n.isCenter) continue;
        let fx = 0, fy = 0;
        for (let mi = 0; mi < sim.length; mi++) {
          if (mi === ni) continue;
          const m = sim[mi];
          let dx = n.x - m.x;
          let dy = n.y - m.y;
          let d2 = dx * dx + dy * dy;
          if (d2 < 1) { d2 = 1; dx = (Math.random() - 0.5) * 2; dy = (Math.random() - 0.5) * 2; }
          const d = Math.sqrt(d2);
          const f = kRepel / d2;
          fx += (dx / d) * f;
          fy += (dy / d) * f;
        }
        for (const ei of nodeEdges[ni]) {
          const e = edges[ei];
          const otherIdx = e.sourceIdx === ni ? e.targetIdx : e.sourceIdx;
          const other = sim[otherIdx];
          if (!other) continue;
          const dx = other.x - n.x;
          const dy = other.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const f = kSpring * (d - restLen) * (e.weight / 100);
          fx += (dx / d) * f;
          fy += (dy / d) * f;
        }
        fx += (CX - n.x) * kCenter;
        fy += (CY - n.y) * kCenter;
        n.vx = (n.vx + fx) * damping;
        n.vy = (n.vy + fy) * damping;
        n.x += n.vx * 0.3;
        n.y += n.vy * 0.3;
        const margin = n.radius + 4;
        if (n.x < margin) { n.x = margin; n.vx *= -0.3; }
        if (n.x > VIEW_W - margin) { n.x = VIEW_W - margin; n.vx *= -0.3; }
        if (n.y < margin) { n.y = margin; n.vy *= -0.3; }
        if (n.y > VIEW_H - margin) { n.y = VIEW_H - margin; n.vy *= -0.3; }
      }
    }

    sim.forEach((s, i) => { nodes[i].x = s.x; nodes[i].y = s.y; });

    const types: EdgeType[] = ["region", "cuisine", "ingredients", "cookingMethod", "taste"];
    const activeTypes = types.filter((t) => edges.some((e) => e.type === t));

    return { nodes, edges, activeTypes };
  }, [graphCenter, foods]);

  // graphCenter 变化时触发 CSS 动画
  useEffect(() => {
    setAnimated(false);
    setClickedId(null);
    const timer = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(timer);
  }, [graphCenter.id]);

  // 单击：切换图的中心节点
  const handleNodeClick = (node: SimNode) => {
    if (node.isCenter) return;
    // 取消之前的单击定时器（防止与双击冲突）
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    // 延迟执行单击操作，给双击留出时间窗口
    clickTimerRef.current = window.setTimeout(() => {
      setGraphCenter(node.food);
      setClickedId(null);
      clickTimerRef.current = null;
    }, DBL_CLICK_MS);
  };

  // 双击：直接打开该美食
  const handleNodeDoubleClick = (node: SimNode) => {
    if (node.isCenter) return;
    // 取消单击定时器
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
    }
    // 闪烁后打开
    setClickedId(node.id);
    setTimeout(() => {
      onSelectFood(node.food);
    }, 450);
  };

  const borderColor = (node: SimNode): string => {
    if (node.isCenter) return getFoodColor(node.food.province as Province, node.food.cuisine as Cuisine);
    return node.edgeType ? EDGE_COLORS[node.edgeType] : "#a8a29e";
  };

  const renderGraph = (scale: number) => {
    const { nodes, edges, activeTypes } = graphData;
    return (
      <div
        className="relative mx-auto"
        style={{ width: VIEW_W * scale, height: VIEW_H * scale }}
      >
        {/* SVG 边层（静态渲染，不更新） */}
        <svg
          className="pointer-events-none absolute inset-0"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width="100%"
          height="100%"
        >
          {edges.map((e, i) => {
            const s = nodes[e.sourceIdx];
            const t = nodes[e.targetIdx];
            if (!s || !t) return null;
            const isHovered = hoverId && (s.id === hoverId || t.id === hoverId);
            const isClicked = clickedId && (s.id === clickedId || t.id === clickedId);
            const opacity = isHovered || isClicked ? 0.85 : 0.2 + (e.weight / 100) * 0.3;
            const isCenterEdge = s.isCenter || t.isCenter;
            return (
              <line
                key={i}
                x1={s.x}
                y1={s.y}
                x2={t.x}
                y2={t.y}
                stroke={EDGE_COLORS[e.type]}
                strokeWidth={isCenterEdge ? 1.5 : 0.7}
                strokeOpacity={opacity}
              />
            );
          })}
        </svg>

        {/* 节点层（HTML divs） */}
        {nodes.map((n) => {
          const color = borderColor(n);
          const isHovered = hoverId === n.id;
          const isClicked = clickedId === n.id;
          const size = n.radius * 2 * scale;
          const x = (animated ? n.x : n.initX) - n.radius;
          const y = (animated ? n.y : n.initY) - n.radius;
          const label = n.food.name.length > 5 ? n.food.name.slice(0, 5) + "…" : n.food.name;

          return (
            <div
              key={n.id}
              className="absolute flex cursor-pointer flex-col items-center"
              style={{
                left: x * scale,
                top: y * scale,
                width: size,
                height: size,
                transition: "left 1.2s cubic-bezier(0.4, 0, 0.2, 1), top 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease",
                transform: isHovered ? "scale(1.15)" : "scale(1)",
                zIndex: n.isCenter ? 20 : isHovered || isClicked ? 15 : 10,
              }}
              onClick={() => handleNodeClick(n)}
              onDoubleClick={() => handleNodeDoubleClick(n)}
              onMouseEnter={() => setHoverId(n.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-full bg-paper-200 ${isClicked ? "ffg-flash" : ""}`}
                style={{
                  width: size,
                  height: size,
                  border: `${Math.max(2, 3 * scale)}px solid ${color}`,
                  boxShadow: isClicked
                    ? `0 0 0 3px ${color}, 0 0 12px 2px ${color}`
                    : isHovered
                      ? `0 0 8px ${color}80`
                      : `0 1px 3px rgba(0,0,0,0.15)`,
                  ["--flash-color" as string]: color,
                }}
              >
                <FoodImage
                  src={n.food.image}
                  alt={n.food.name}
                  className="h-full w-full object-cover"
                />
                {/* 中心节点标记 */}
                {n.isCenter && (
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-offset-1 ring-cinnabar-500/50" />
                )}
              </div>
              {/* 名称标签 */}
              <span
                className="mt-0.5 whitespace-nowrap rounded bg-paper-50/90 px-1 font-serif text-ink-800 shadow-sm"
                style={{
                  fontSize: n.isCenter ? 10 * scale : 8 * scale,
                  fontWeight: n.isCenter || isHovered ? 600 : 400,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const { activeTypes } = graphData;
  const isViewingRelated = graphCenter.id !== centerFood.id;

  return (
    <>
      <div className="rounded-lg border border-ochre-500/15 bg-paper-100/30 p-1.5">
        {/* 操作提示栏 */}
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sans text-[10px] text-ink-400">
            <span className="rounded bg-ochre-500/10 px-1.5 py-0.5">单击切换中心</span>
            <span className="rounded bg-indigo2-500/10 px-1.5 py-0.5">双击打开美食</span>
          </div>
          <button
            onClick={() => setEnlarged(true)}
            className="flex items-center gap-0.5 rounded px-1.5 py-0.5 font-serif text-[10px] text-indigo2-600 transition-colors hover:bg-indigo2-50"
            title="放大查看"
          >
            <Expand size={11} />
            放大
          </button>
        </div>

        {/* 返回按钮（查看关联节点时显示） */}
        {isViewingRelated && (
          <button
            onClick={() => setGraphCenter(centerFood)}
            className="mb-1.5 flex items-center gap-1 rounded-md bg-cinnabar-500/10 px-2 py-1 font-serif text-[11px] text-cinnabar-600 transition-colors hover:bg-cinnabar-500/20"
          >
            <ArrowLeft size={11} />
            返回 {centerFood.name}
          </button>
        )}

        {/* 当前中心提示 */}
        {isViewingRelated && (
          <div className="mb-1 text-center font-serif text-[10px] text-ink-500">
            当前中心：<span className="font-medium text-ink-700">{graphCenter.name}</span>
          </div>
        )}

        {renderGraph(1)}

        {/* 图例 */}
        {activeTypes.length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            {activeTypes.map((t) => (
              <span key={t} className="flex items-center gap-1 font-sans text-[10px] text-ink-500">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: EDGE_COLORS[t] }}
                />
                {EDGE_LABELS[t]}
              </span>
            ))}
          </div>
        )}

        {/* 悬浮提示 */}
        {hoverId && (() => {
          const n = graphData.nodes.find((x) => x.id === hoverId);
          if (!n) return null;
          return (
            <div className="mt-1 rounded-md bg-ink-900/5 px-2 py-1 text-center font-serif text-[11px] text-ink-700">
              <span className="font-medium">{n.food.name}</span>
              <span className="ml-1.5 text-ink-400">· {n.food.province} · {n.food.cuisine}</span>
              {n.isCenter ? (
                <span className="ml-1.5 text-cinnabar-500">（当前中心）</span>
              ) : (
                <span className="ml-1.5 text-indigo2-400">单击切换 · 双击打开</span>
              )}
            </div>
          );
        })()}
      </div>

      {/* 放大弹窗 */}
      {enlarged && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-ink-900/80 backdrop-blur-sm"
          onClick={() => setEnlarged(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-xl bg-paper-50 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnlarged(false)}
              className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/20 text-ink-700 transition-colors hover:bg-cinnabar-500 hover:text-paper-50"
            >
              <X size={16} />
            </button>
            <h3 className="mb-2 text-center font-serif text-sm font-semibold text-ink-900">
              {graphCenter.name} · 美食关联图
            </h3>
            <div className="mb-2 flex items-center justify-center gap-3 font-sans text-xs text-ink-400">
              <span>单击切换中心</span>
              <span>·</span>
              <span>双击打开美食</span>
            </div>
            {renderGraph(1.6)}
            {/* 图例 */}
            {activeTypes.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {activeTypes.map((t) => (
                  <span key={t} className="flex items-center gap-1 font-sans text-xs text-ink-600">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: EDGE_COLORS[t] }}
                    />
                    {EDGE_LABELS[t]}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
