import { useState, useMemo } from "react";
import { Star, Heart, ThumbsUp, MessageSquare, Send, Trash2, LogIn } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserDataStore } from "@/store/useUserDataStore";
import { useStore } from "@/store/useStore";
import type { Food } from "@/types/food";

export default function FoodInteraction({ food }: { food: Food }) {
  const currentUser = useAuthStore((s) => s.currentUser);
  const openAuthModal = useStore((s) => s.openAuthModal);

  // 订阅原始状态切片（返回稳定引用），用 useMemo 派生
  const ratingsList = useUserDataStore((s) => s.ratings[food.id]);
  const likesMap = useUserDataStore((s) => s.likes[food.id]);
  const favoritesMap = useUserDataStore((s) => s.favorites);
  const commentsList = useUserDataStore((s) => s.comments[food.id]);

  const setRating = useUserDataStore((s) => s.setRating);
  const removeRating = useUserDataStore((s) => s.removeRating);
  const toggleLike = useUserDataStore((s) => s.toggleLike);
  const toggleFavorite = useUserDataStore((s) => s.toggleFavorite);
  const addComment = useUserDataStore((s) => s.addComment);
  const deleteComment = useUserDataStore((s) => s.deleteComment);

  // 派生数据
  const myRating = useMemo(() => {
    if (!currentUser || !ratingsList) return 0;
    return ratingsList.find((r) => r.userId === currentUser.id)?.rating || 0;
  }, [ratingsList, currentUser]);

  const stats = useMemo(() => {
    const list = ratingsList || [];
    if (list.length === 0) return { avg: 0, count: 0 };
    const sum = list.reduce((s, r) => s + r.rating, 0);
    return { avg: sum / list.length, count: list.length };
  }, [ratingsList]);

  const hasLiked = useMemo(() => {
    if (!currentUser || !likesMap) return false;
    return !!likesMap[currentUser.id];
  }, [likesMap, currentUser]);

  const likeCount = useMemo(() => {
    if (!likesMap) return 0;
    return Object.keys(likesMap).length;
  }, [likesMap]);

  const isFavorite = useMemo(() => {
    if (!currentUser) return false;
    return (favoritesMap[currentUser.id] || []).includes(food.id);
  }, [favoritesMap, currentUser, food.id]);

  const comments = useMemo(() => {
    return (commentsList || []).slice().sort((a, b) => a.createdAt - b.createdAt);
  }, [commentsList]);

  const [hoverRating, setHoverRating] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState("");

  const requireLogin = () => {
    if (!currentUser) {
      openAuthModal("login");
      return false;
    }
    return true;
  };

  const handleRating = (n: number) => {
    if (!requireLogin()) return;
    if (myRating === n) {
      removeRating(food.id);
    } else {
      setRating(food.id, n);
    }
  };

  const handleLike = () => {
    if (!requireLogin()) return;
    toggleLike(food.id);
  };

  const handleFavorite = () => {
    if (!requireLogin()) return;
    toggleFavorite(food.id);
  };

  const handleAddComment = () => {
    setCommentError("");
    if (!requireLogin()) return;
    const res = addComment(food.id, commentText);
    if (!res.ok) {
      setCommentError(res.error || "评论失败");
      return;
    }
    setCommentText("");
  };

  return (
    <section className="mb-5">
      <h3 className="mb-3 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
        <Star size={14} className="text-cinnabar-500" />
        评分与互动
      </h3>

      {/* 评分 + 统计 */}
      <div className="mb-3 rounded-lg border border-ochre-500/15 bg-paper-100/40 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => {
              const active = (hoverRating || myRating) >= n;
              return (
                <button
                  key={n}
                  onClick={() => handleRating(n)}
                  onMouseEnter={() => setHoverRating(n)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`transition-transform hover:scale-110 ${
                    active ? "text-gold-500" : "text-paper-200"
                  }`}
                  title={`${n} 星`}
                >
                  <Star size={20} fill={active ? "currentColor" : "none"} />
                </button>
              );
            })}
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className="font-latin text-lg font-bold text-cinnabar-600">
                {stats.avg.toFixed(1)}
              </span>
              <span className="font-serif text-xs text-ink-400">/ 5</span>
            </div>
            <p className="font-serif text-[10px] text-ink-400">
              {stats.count > 0 ? `${stats.count} 人评分` : "暂无评分"}
            </p>
          </div>
        </div>
        {myRating > 0 && (
          <p className="mt-1.5 font-serif text-[11px] text-ochre-600">
            你已评 {myRating} 星 · 点击同星级可取消
          </p>
        )}
      </div>

      {/* 点赞 + 收藏 */}
      <div className="mb-3 flex gap-2">
        <button
          onClick={handleLike}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 font-serif text-xs transition-all ${
            hasLiked
              ? "border-cinnabar-500/40 bg-cinnabar-50/60 text-cinnabar-600"
              : "border-ochre-500/20 bg-paper-100/40 text-ink-700 hover:bg-paper-200"
          }`}
        >
          <ThumbsUp size={14} fill={hasLiked ? "currentColor" : "none"} />
          {hasLiked ? "已赞" : "点赞"}
          {likeCount > 0 && (
            <span className="ml-0.5 rounded-full bg-cinnabar-500/10 px-1.5 py-0.5 font-latin text-[10px] font-semibold">
              {likeCount}
            </span>
          )}
        </button>
        <button
          onClick={handleFavorite}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 font-serif text-xs transition-all ${
            isFavorite
              ? "border-cinnabar-500/40 bg-cinnabar-50/60 text-cinnabar-600"
              : "border-ochre-500/20 bg-paper-100/40 text-ink-700 hover:bg-paper-200"
          }`}
        >
          <Heart size={14} fill={isFavorite ? "currentColor" : "none"} />
          {isFavorite ? "已收藏" : "收藏"}
        </button>
      </div>

      {/* 评论区 */}
      <div className="rounded-lg border border-ochre-500/15 bg-paper-100/40 p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <MessageSquare size={12} className="text-ochre-500" />
          <span className="font-serif text-xs font-semibold text-ink-900">
            评论 {comments.length > 0 && `(${comments.length})`}
          </span>
        </div>

        {/* 评论输入 */}
        {currentUser ? (
          <div className="mb-3">
            <div className="flex gap-1.5">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    handleAddComment();
                  }
                }}
                rows={2}
                maxLength={500}
                placeholder="写下你的评论... (Ctrl+Enter 发表)"
                className="flex-1 resize-y rounded-lg border border-ochre-500/20 bg-paper-50/80 px-2.5 py-1.5 font-serif text-xs leading-relaxed text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
              />
              <button
                onClick={handleAddComment}
                disabled={!commentText.trim()}
                className="flex items-center justify-center self-stretch rounded-lg bg-cinnabar-500 px-2.5 text-paper-50 transition-colors hover:bg-cinnabar-600 disabled:cursor-not-allowed disabled:bg-paper-200 disabled:text-ink-400"
              >
                <Send size={12} />
              </button>
            </div>
            {commentError && (
              <p className="mt-1 font-serif text-[11px] text-cinnabar-600">{commentError}</p>
            )}
            <p className="mt-1 text-right font-sans text-[10px] text-ink-400">
              {commentText.length}/500
            </p>
          </div>
        ) : (
          <button
            onClick={() => openAuthModal("login")}
            className="mb-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-ochre-500/30 bg-paper-50/60 py-2 font-serif text-xs text-ochre-600 transition-colors hover:bg-paper-100"
          >
            <LogIn size={12} />
            登录后发表评论
          </button>
        )}

        {/* 评论列表 */}
        {comments.length === 0 ? (
          <p className="py-3 text-center font-serif text-[11px] text-ink-400">
            还没有评论，快来抢沙发吧
          </p>
        ) : (
          <div className="space-y-2.5">
            {comments
              .slice()
              .reverse()
              .map((c) => (
                <div
                  key={c.id}
                  className="rounded-lg border border-ochre-500/10 bg-paper-50/60 p-2.5"
                >
                  <div className="mb-1 flex items-center gap-2">
                    {c.avatar ? (
                      <img
                        src={c.avatar}
                        alt={c.nickname}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 font-serif text-[10px] font-bold text-paper-50">
                        {(c.nickname || c.username).slice(0, 1).toUpperCase()}
                      </div>
                    )}
                    <span className="font-serif text-xs font-medium text-ink-900">
                      {c.nickname}
                    </span>
                    <span className="ml-auto font-sans text-[10px] text-ink-400">
                      {formatTime(c.createdAt)}
                    </span>
                    {currentUser?.id === c.userId && (
                      <button
                        onClick={() => deleteComment(c.id)}
                        className="flex h-5 w-5 items-center justify-center rounded text-ink-400 transition-colors hover:bg-cinnabar-50 hover:text-cinnabar-500"
                        title="删除评论"
                      >
                        <Trash2 size={10} />
                      </button>
                    )}
                  </div>
                  <p className="font-serif text-xs leading-relaxed text-ink-700 whitespace-pre-wrap break-words">
                    {c.text}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

function formatTime(ts: number): string {
  const now = Date.now();
  const diff = now - ts;
  const min = 60 * 1000;
  const hour = 60 * min;
  const day = 24 * hour;
  if (diff < min) return "刚刚";
  if (diff < hour) return `${Math.floor(diff / min)} 分钟前`;
  if (diff < day) return `${Math.floor(diff / hour)} 小时前`;
  if (diff < 7 * day) return `${Math.floor(diff / day)} 天前`;
  return new Date(ts).toLocaleDateString("zh-CN");
}
