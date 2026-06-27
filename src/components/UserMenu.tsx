import { useState, useRef, useEffect, useMemo } from "react";
import { User, LogIn, UserPlus, LogOut, Settings, Heart, Star, MessageSquare, ChevronDown } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserDataStore } from "@/store/useUserDataStore";
import { useStore } from "@/store/useStore";

export default function UserMenu() {
  const currentUser = useAuthStore((s) => s.currentUser);
  const logout = useAuthStore((s) => s.logout);
  const openAuthModal = useStore((s) => s.openAuthModal);
  const openAccountPanel = useStore((s) => s.openAccountPanel);
  const closeAccountPanel = useStore((s) => s.closeAccountPanel);
  const accountPanelOpen = useStore((s) => s.accountPanelOpen);

  // 订阅原始状态切片（返回稳定引用），用 useMemo 计算计数
  const favoritesMap = useUserDataStore((s) => s.favorites);
  const ratingsMap = useUserDataStore((s) => s.ratings);
  const commentsMap = useUserDataStore((s) => s.comments);

  const favoritesCount = useMemo(() => {
    if (!currentUser) return 0;
    return (favoritesMap[currentUser.id] || []).length;
  }, [favoritesMap, currentUser]);

  const ratingsCount = useMemo(() => {
    if (!currentUser) return 0;
    let n = 0;
    for (const foodId of Object.keys(ratingsMap)) {
      if (ratingsMap[foodId].some((r) => r.userId === currentUser.id)) n++;
    }
    return n;
  }, [ratingsMap, currentUser]);

  const commentsCount = useMemo(() => {
    if (!currentUser) return 0;
    let n = 0;
    for (const foodId of Object.keys(commentsMap)) {
      n += commentsMap[foodId].filter((c) => c.userId === currentUser.id).length;
    }
    return n;
  }, [commentsMap, currentUser]);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // 未登录：显示登录/注册按钮
  if (!currentUser) {
    return (
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => openAuthModal("login")}
          className="flex h-9 items-center gap-1.5 rounded-full border border-ochre-500/20 bg-paper-50/80 px-3 font-sans text-xs text-ink-700 transition-all hover:bg-paper-200"
        >
          <LogIn size={14} />
          <span className="hidden sm:inline">登录</span>
        </button>
        <button
          onClick={() => openAuthModal("register")}
          className="flex h-9 items-center gap-1.5 rounded-full bg-cinnabar-500 px-3 font-sans text-xs text-paper-50 transition-all hover:bg-cinnabar-600"
        >
          <UserPlus size={14} />
          <span className="hidden sm:inline">注册</span>
        </button>
      </div>
    );
  }

  // 已登录：头像 + 下拉菜单
  const initial = (currentUser.nickname || currentUser.username).slice(0, 1).toUpperCase();

  const handleLogout = () => {
    logout();
    setOpen(false);
    closeAccountPanel();
  };

  const handleOpenAccount = (tab: "profile" | "favorites" | "ratings" | "comments") => {
    openAccountPanel(tab);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex h-9 items-center gap-1.5 rounded-full border px-1.5 py-0.5 transition-all ${
          accountPanelOpen || open
            ? "border-cinnabar-500/40 bg-cinnabar-50/60"
            : "border-ochre-500/20 bg-paper-50/80 hover:bg-paper-200"
        }`}
      >
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.nickname}
            className="h-7 w-7 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 font-serif text-xs font-bold text-paper-50">
            {initial}
          </div>
        )}
        <span className="hidden max-w-[80px] truncate font-serif text-xs text-ink-700 sm:inline">
          {currentUser.nickname}
        </span>
        <ChevronDown size={12} className="text-ink-400" />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-[1500] w-56 overflow-hidden rounded-xl border border-ochre-500/20 bg-paper-50 shadow-panel animate-slide-in-right">
          {/* 用户信息 */}
          <div className="border-b border-ochre-500/10 bg-gradient-to-r from-cinnabar-500/5 to-gold-500/5 px-4 py-3">
            <p className="truncate font-serif text-sm font-bold text-ink-900">
              {currentUser.nickname}
            </p>
            <p className="truncate font-sans text-[11px] text-ink-500">@{currentUser.username}</p>
            {currentUser.bio && (
              <p className="mt-1 line-clamp-2 font-serif text-[11px] leading-relaxed text-ink-400">
                {currentUser.bio}
              </p>
            )}
          </div>

          {/* 菜单项 */}
          <div className="py-1">
            <MenuItem icon={<Settings size={14} />} label="账号资料" onClick={() => handleOpenAccount("profile")} />
            <MenuItem
              icon={<Heart size={14} />}
              label="我的收藏"
              badge={favoritesCount}
              onClick={() => handleOpenAccount("favorites")}
            />
            <MenuItem
              icon={<Star size={14} />}
              label="我的评分"
              badge={ratingsCount}
              onClick={() => handleOpenAccount("ratings")}
            />
            <MenuItem
              icon={<MessageSquare size={14} />}
              label="我的评论"
              badge={commentsCount}
              onClick={() => handleOpenAccount("comments")}
            />
          </div>

          <div className="border-t border-ochre-500/10 py-1">
            <MenuItem icon={<LogOut size={14} />} label="退出登录" danger onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  icon,
  label,
  badge,
  danger,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  danger?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 px-4 py-2 font-serif text-sm transition-colors hover:bg-paper-100 ${
        danger ? "text-cinnabar-600" : "text-ink-700"
      }`}
    >
      <span className={danger ? "text-cinnabar-500" : "text-ink-400"}>{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="rounded-full bg-cinnabar-500/10 px-1.5 py-0.5 font-latin text-[10px] font-semibold text-cinnabar-600">
          {badge}
        </span>
      )}
    </button>
  );
}
