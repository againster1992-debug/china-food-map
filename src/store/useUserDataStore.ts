import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./useAuthStore";

// 单条评论
export interface Comment {
  id: string;
  foodId: string;
  userId: string;
  username: string;
  nickname: string;
  avatar: string;
  text: string;
  createdAt: number;
}

// 用户对某道美食的评分记录
interface RatingEntry {
  userId: string;
  rating: number; // 1-5
  createdAt: number;
  updatedAt: number;
}

// 点赞记录：userId -> 时间戳
type LikeMap = Record<string, number>;

interface UserDataState {
  // foodId -> 用户评分列表
  ratings: Record<string, RatingEntry[]>;
  // foodId -> 点赞用户映射
  likes: Record<string, LikeMap>;
  // userId -> 收藏的 foodId 列表
  favorites: Record<string, string[]>;
  // foodId -> 评论列表（按时间正序）
  comments: Record<string, Comment[]>;

  // 评分相关
  getMyRating: (foodId: string) => number;
  getFoodRatingStats: (foodId: string) => { avg: number; count: number };
  setRating: (foodId: string, rating: number) => { ok: boolean; error?: string };
  removeRating: (foodId: string) => void;

  // 点赞相关
  hasLiked: (foodId: string) => boolean;
  getLikeCount: (foodId: string) => number;
  toggleLike: (foodId: string) => void;

  // 收藏相关
  isFavorite: (foodId: string) => boolean;
  toggleFavorite: (foodId: string) => void;
  getMyFavorites: () => string[];

  // 评论相关
  getComments: (foodId: string) => Comment[];
  addComment: (foodId: string, text: string) => { ok: boolean; error?: string };
  deleteComment: (commentId: string) => void;
  getMyComments: () => Comment[];
  getMyRatings: () => { foodId: string; rating: number; updatedAt: number }[];
}

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export const useUserDataStore = create<UserDataState>()(
  persist(
    (set, get) => ({
      ratings: {},
      likes: {},
      favorites: {},
      comments: {},

      // ===== 评分 =====
      getMyRating: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return 0;
        const list = get().ratings[foodId] || [];
        const entry = list.find((r) => r.userId === cur.id);
        return entry?.rating || 0;
      },

      getFoodRatingStats: (foodId) => {
        const list = get().ratings[foodId] || [];
        if (list.length === 0) return { avg: 0, count: 0 };
        const sum = list.reduce((s, r) => s + r.rating, 0);
        return { avg: sum / list.length, count: list.length };
      },

      setRating: (foodId, rating) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return { ok: false, error: "请先登录" };
        if (rating < 1 || rating > 5) return { ok: false, error: "评分需在 1-5 之间" };
        const now = Date.now();
        set((s) => {
          const list = s.ratings[foodId] || [];
          const idx = list.findIndex((r) => r.userId === cur.id);
          if (idx >= 0) {
            const next = [...list];
            next[idx] = { ...next[idx], rating, updatedAt: now };
            return { ratings: { ...s.ratings, [foodId]: next } };
          }
          return {
            ratings: {
              ...s.ratings,
              [foodId]: [...list, { userId: cur.id, rating, createdAt: now, updatedAt: now }],
            },
          };
        });
        return { ok: true };
      },

      removeRating: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return;
        set((s) => {
          const list = s.ratings[foodId] || [];
          const next = list.filter((r) => r.userId !== cur.id);
          return { ratings: { ...s.ratings, [foodId]: next } };
        });
      },

      // ===== 点赞 =====
      hasLiked: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return false;
        const map = get().likes[foodId] || {};
        return !!map[cur.id];
      },

      getLikeCount: (foodId) => {
        const map = get().likes[foodId] || {};
        return Object.keys(map).length;
      },

      toggleLike: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return;
        set((s) => {
          const map = s.likes[foodId] || {};
          if (map[cur.id]) {
            const { [cur.id]: _removed, ...rest } = map;
            void _removed;
            return { likes: { ...s.likes, [foodId]: rest } };
          }
          return { likes: { ...s.likes, [foodId]: { ...map, [cur.id]: Date.now() } } };
        });
      },

      // ===== 收藏 =====
      isFavorite: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return false;
        const list = get().favorites[cur.id] || [];
        return list.includes(foodId);
      },

      toggleFavorite: (foodId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return;
        set((s) => {
          const list = s.favorites[cur.id] || [];
          const next = list.includes(foodId)
            ? list.filter((id) => id !== foodId)
            : [foodId, ...list];
          return { favorites: { ...s.favorites, [cur.id]: next } };
        });
      },

      getMyFavorites: () => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return [];
        return get().favorites[cur.id] || [];
      },

      // ===== 评论 =====
      getComments: (foodId) => {
        return (get().comments[foodId] || []).slice().sort((a, b) => a.createdAt - b.createdAt);
      },

      addComment: (foodId, text) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return { ok: false, error: "请先登录" };
        const t = text.trim();
        if (!t) return { ok: false, error: "评论内容不能为空" };
        if (t.length > 500) return { ok: false, error: "评论不超过 500 字" };
        const comment: Comment = {
          id: genId(),
          foodId,
          userId: cur.id,
          username: cur.username,
          nickname: cur.nickname,
          avatar: cur.avatar,
          text: t,
          createdAt: Date.now(),
        };
        set((s) => {
          const list = s.comments[foodId] || [];
          return { comments: { ...s.comments, [foodId]: [...list, comment] } };
        });
        return { ok: true };
      },

      deleteComment: (commentId) => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return;
        set((s) => {
          const comments = { ...s.comments };
          for (const foodId of Object.keys(comments)) {
            const list = comments[foodId];
            const filtered = list.filter((c) => {
              if (c.id !== commentId) return true;
              // 仅评论作者或（演示版）任意登录用户可删除自己的评论
              return c.userId !== cur.id;
            });
            if (filtered.length !== list.length) {
              comments[foodId] = filtered;
            }
          }
          return { comments };
        });
      },

      getMyComments: () => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return [];
        const all: Comment[] = [];
        const comments = get().comments;
        for (const foodId of Object.keys(comments)) {
          for (const c of comments[foodId]) {
            if (c.userId === cur.id) all.push(c);
          }
        }
        return all.sort((a, b) => b.createdAt - a.createdAt);
      },

      getMyRatings: () => {
        const cur = useAuthStore.getState().currentUser;
        if (!cur) return [];
        const all: { foodId: string; rating: number; updatedAt: number }[] = [];
        const ratings = get().ratings;
        for (const foodId of Object.keys(ratings)) {
          for (const r of ratings[foodId]) {
            if (r.userId === cur.id) {
              all.push({ foodId, rating: r.rating, updatedAt: r.updatedAt });
            }
          }
        }
        return all.sort((a, b) => b.updatedAt - a.updatedAt);
      },
    }),
    {
      name: "foodmap-userdata",
    }
  )
);
