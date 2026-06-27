import { create } from "zustand";
import { persist } from "zustand/middleware";

// 用户信息（不含密码）
export interface UserProfile {
  id: string;
  username: string;
  nickname: string;
  avatar: string; // data URL 或空字符串（用首字母占位）
  bio: string;
  createdAt: number;
}

// 完整用户记录（含密码哈希，仅存于 localStorage，不暴露
interface UserRecord extends UserProfile {
  passwordHash: string;
}

// 简单哈希（演示用，非安全级别）
function simpleHash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
}

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

interface AuthState {
  currentUser: UserProfile | null;
  // 内部用户表：username -> UserRecord
  users: Record<string, UserRecord>;

  register: (username: string, password: string, nickname?: string) => { ok: boolean; error?: string };
  login: (username: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
  updateProfile: (patch: Partial<Pick<UserProfile, "nickname" | "avatar" | "bio">>) => void;
  changePassword: (oldPwd: string, newPwd: string) => { ok: boolean; error?: string };
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      users: {},

      register: (username, password, nickname) => {
        const u = username.trim();
        if (!u) return { ok: false, error: "请输入用户名" };
        if (!/^[A-Za-z0-9_\u4e00-\u9fa5]{2,20}$/.test(u)) {
          return { ok: false, error: "用户名需为 2-20 位中英文/数字/下划线" };
        }
        if (password.length < 6) return { ok: false, error: "密码至少 6 位" };
        const users = get().users;
        if (users[u]) return { ok: false, error: "用户名已存在" };

        const record: UserRecord = {
          id: genId(),
          username: u,
          nickname: (nickname || u).trim() || u,
          avatar: "",
          bio: "",
          createdAt: Date.now(),
          passwordHash: simpleHash(password),
        };
        const { passwordHash, ...profile } = record;
        void passwordHash;
        set((s) => ({
          users: { ...s.users, [u]: record },
          currentUser: profile,
        }));
        return { ok: true };
      },

      login: (username, password) => {
        const u = username.trim();
        const record = get().users[u];
        if (!record) return { ok: false, error: "用户不存在" };
        if (record.passwordHash !== simpleHash(password)) {
          return { ok: false, error: "密码错误" };
        }
        const { passwordHash, ...profile } = record;
        void passwordHash;
        set({ currentUser: profile });
        return { ok: true };
      },

      logout: () => set({ currentUser: null }),

      updateProfile: (patch) => {
        const cur = get().currentUser;
        if (!cur) return;
        const updated: UserProfile = { ...cur, ...patch };
        const record = get().users[cur.username];
        if (record) {
          const { passwordHash } = record;
          set((s) => ({
            currentUser: updated,
            users: { ...s.users, [cur.username]: { ...updated, passwordHash } },
          }));
        } else {
          set({ currentUser: updated });
        }
      },

      changePassword: (oldPwd, newPwd) => {
        const cur = get().currentUser;
        if (!cur) return { ok: false, error: "未登录" };
        const record = get().users[cur.username];
        if (!record) return { ok: false, error: "用户记录丢失" };
        if (record.passwordHash !== simpleHash(oldPwd)) {
          return { ok: false, error: "原密码错误" };
        }
        if (newPwd.length < 6) return { ok: false, error: "新密码至少 6 位" };
        set((s) => ({
          users: {
            ...s.users,
            [cur.username]: { ...record, passwordHash: simpleHash(newPwd) },
          },
        }));
        return { ok: true };
      },
    }),
    {
      name: "foodmap-auth",
      // 仅持久化必要字段
      partialize: (s) => ({ currentUser: s.currentUser, users: s.users }),
    }
  )
);
