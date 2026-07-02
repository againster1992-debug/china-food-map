import { useState, useMemo } from "react";
import {
  X, Settings, Heart, Star, MessageSquare, Save, Camera, Lock, Trash2, MapPin, Clock,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserDataStore, type Comment as FoodComment } from "@/store/useUserDataStore";
import type { Food } from "@/types/food";
import { FoodImage } from "./FoodImage";

type Tab = "profile" | "favorites" | "ratings" | "comments";

export default function AccountPanel() {
  const open = useStore((s) => s.accountPanelOpen);
  const tab = useStore((s) => s.accountTab);
  const setTab = useStore((s) => s.setAccountTab);
  const close = useStore((s) => s.closeAccountPanel);
  const currentUser = useAuthStore((s) => s.currentUser);

  if (!open || !currentUser) return null;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "profile", label: "账号资料", icon: <Settings size={14} /> },
    { key: "favorites", label: "我的收藏", icon: <Heart size={14} /> },
    { key: "ratings", label: "我的评分", icon: <Star size={14} /> },
    { key: "comments", label: "我的评论", icon: <MessageSquare size={14} /> },
  ];

  return (
    <aside className="fixed right-0 top-16 z-[1200] flex h-[calc(100%-4rem)] w-full max-w-sm flex-col animate-slide-in-right border-l border-ochre-500/20 bg-paper-50/95 shadow-panel backdrop-blur-md">
      {/* 头部 */}
      <div className="flex items-center justify-between border-b border-ochre-500/15 px-5 py-3">
        <h2 className="flex items-center gap-2 font-serif text-sm font-bold text-ink-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 text-paper-50">
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt="" className="h-full w-full rounded-lg object-cover" />
            ) : (
              <span className="font-serif text-xs font-bold">
                {(currentUser.nickname || currentUser.username).slice(0, 1).toUpperCase()}
              </span>
            )}
          </span>
          个人中心
        </h2>
        <button
          onClick={close}
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-paper-200 hover:text-ink-900"
        >
          <X size={16} />
        </button>
      </div>

      {/* 标签栏 */}
      <div className="flex border-b border-ochre-500/10">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 font-serif text-xs transition-colors ${
              tab === t.key
                ? "border-b-2 border-cinnabar-500 text-cinnabar-600"
                : "text-ink-500 hover:text-ink-700"
            }`}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {tab === "profile" && <ProfileTab />}
        {tab === "favorites" && <FavoritesTab />}
        {tab === "ratings" && <RatingsTab />}
        {tab === "comments" && <CommentsTab />}
      </div>
    </aside>
  );
}

// ============ 资料标签页 ============
function ProfileTab() {
  const currentUser = useAuthStore((s) => s.currentUser)!;
  const updateProfile = useAuthStore((s) => s.updateProfile);
  const changePassword = useAuthStore((s) => s.changePassword);

  const [nickname, setNickname] = useState(currentUser.nickname);
  const [bio, setBio] = useState(currentUser.bio);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [savedMsg, setSavedMsg] = useState("");

  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 512 * 1024) {
      setSavedMsg("头像不超过 512KB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = () => {
    updateProfile({
      nickname: nickname.trim() || currentUser.username,
      bio: bio.trim(),
      avatar,
    });
    setSavedMsg("资料已保存");
    setTimeout(() => setSavedMsg(""), 2000);
  };

  const handleChangePwd = () => {
    setPwdMsg("");
    setPwdError(false);
    const res = changePassword(oldPwd, newPwd);
    if (!res.ok) {
      setPwdError(true);
      setPwdMsg(res.error || "修改失败");
      return;
    }
    setPwdMsg("密码已修改");
    setOldPwd("");
    setNewPwd("");
    setTimeout(() => setPwdMsg(""), 2000);
  };

  return (
    <div className="px-5 py-5">
      {/* 头像 */}
      <section className="mb-5">
        <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">头像</label>
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-paper-200">
            {avatar ? (
              <img src={avatar} alt="头像" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 font-serif text-xl font-bold text-paper-50">
                {(nickname || currentUser.username).slice(0, 1).toUpperCase()}
              </div>
            )}
          </div>
          <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-dashed border-ochre-500/30 bg-paper-100/40 px-3 py-2 font-serif text-xs text-ochre-600 transition-colors hover:bg-paper-200">
            <Camera size={12} />
            上传头像
            <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
          </label>
          {avatar && (
            <button
              onClick={() => setAvatar("")}
              className="rounded-lg border border-ochre-500/20 px-3 py-2 font-serif text-xs text-ink-500 hover:bg-paper-200"
            >
              移除
            </button>
          )}
        </div>
      </section>

      {/* 用户名（只读） */}
      <section className="mb-4">
        <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">用户名</label>
        <input
          type="text"
          value={currentUser.username}
          disabled
          className="w-full rounded-lg border border-ochre-500/15 bg-paper-100/40 px-3 py-2 font-sans text-sm text-ink-400"
        />
      </section>

      {/* 昵称 */}
      <section className="mb-4">
        <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">昵称</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-2 font-serif text-sm text-ink-900 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
        />
      </section>

      {/* 简介 */}
      <section className="mb-4">
        <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">个人简介</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          maxLength={100}
          placeholder="介绍一下自己吧..."
          className="w-full resize-y rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-2 font-serif text-sm leading-relaxed text-ink-900 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
        />
        <p className="mt-1 text-right font-sans text-[10px] text-ink-400">{bio.length}/100</p>
      </section>

      {/* 注册时间 */}
      <section className="mb-5 flex items-center gap-1.5 font-serif text-[11px] text-ink-400">
        <Clock size={11} />
        注册于 {new Date(currentUser.createdAt).toLocaleDateString("zh-CN")}
      </section>

      <button
        onClick={handleSaveProfile}
        className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-cinnabar-500 py-2.5 font-serif text-sm font-medium text-paper-50 transition-colors hover:bg-cinnabar-600"
      >
        <Save size={14} />
        保存资料
      </button>
      {savedMsg && (
        <p className="mt-2 text-center font-serif text-xs text-emerald-600">{savedMsg}</p>
      )}

      {/* 修改密码 */}
      <div className="mt-6 border-t border-ochre-500/15 pt-5">
        <h3 className="mb-3 flex items-center gap-1.5 font-serif text-sm font-semibold text-ink-900">
          <Lock size={14} className="text-ochre-500" />
          修改密码
        </h3>
        <div className="space-y-3">
          <input
            type="password"
            value={oldPwd}
            onChange={(e) => setOldPwd(e.target.value)}
            placeholder="原密码"
            className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-2 font-sans text-sm text-ink-900 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
          />
          <input
            type="password"
            value={newPwd}
            onChange={(e) => setNewPwd(e.target.value)}
            placeholder="新密码（至少 6 位）"
            className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 px-3 py-2 font-sans text-sm text-ink-900 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
          />
          <button
            onClick={handleChangePwd}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-ochre-500/20 bg-paper-100/60 py-2 font-serif text-sm text-ink-700 transition-colors hover:bg-paper-200"
          >
            <Lock size={14} />
            修改密码
          </button>
          {pwdMsg && (
            <p className={`text-center font-serif text-xs ${pwdError ? "text-cinnabar-600" : "text-emerald-600"}`}>
              {pwdMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ============ 收藏标签页 ============
function FavoritesTab() {
  const foods = useStore((s) => s.foods);
  const focusFood = useStore((s) => s.focusFood);
  const closePanel = useStore((s) => s.closeAccountPanel);
  const currentUser = useAuthStore((s) => s.currentUser);
  const favoritesMap = useUserDataStore((s) => s.favorites);
  const toggleFavorite = useUserDataStore((s) => s.toggleFavorite);

  const myFavorites = useMemo(() => {
    if (!currentUser) return [];
    return favoritesMap[currentUser.id] || [];
  }, [favoritesMap, currentUser]);

  const list = useMemo(() => {
    const map = new Map(foods.map((f) => [f.id, f]));
    return myFavorites.map((id) => map.get(id)).filter(Boolean) as Food[];
  }, [foods, myFavorites]);

  if (list.length === 0) {
    return <EmptyState icon={<Heart size={32} />} text="还没有收藏任何美食" hint="在美食详情中点击收藏按钮" />;
  }

  return (
    <div className="space-y-2 p-4">
      {list.map((f) => (
        <FoodRow
          key={f.id}
          food={f}
          onClick={() => {
            focusFood(f);
            closePanel();
          }}
          action={
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(f.id);
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full text-cinnabar-500 transition-colors hover:bg-cinnabar-50"
              title="取消收藏"
            >
              <Heart size={14} fill="currentColor" />
            </button>
          }
        />
      ))}
    </div>
  );
}

// ============ 评分标签页 ============
function RatingsTab() {
  const foods = useStore((s) => s.foods);
  const focusFood = useStore((s) => s.focusFood);
  const closePanel = useStore((s) => s.closeAccountPanel);
  const currentUser = useAuthStore((s) => s.currentUser);
  const ratingsMap = useUserDataStore((s) => s.ratings);

  const myRatings = useMemo(() => {
    if (!currentUser) return [];
    const all: { foodId: string; rating: number; updatedAt: number }[] = [];
    for (const foodId of Object.keys(ratingsMap)) {
      for (const r of ratingsMap[foodId]) {
        if (r.userId === currentUser.id) {
          all.push({ foodId, rating: r.rating, updatedAt: r.updatedAt });
        }
      }
    }
    return all.sort((a, b) => b.updatedAt - a.updatedAt);
  }, [ratingsMap, currentUser]);

  const list = useMemo(() => {
    const map = new Map(foods.map((f) => [f.id, f]));
    return myRatings
      .map((r) => ({ food: map.get(r.foodId), rating: r.rating, updatedAt: r.updatedAt }))
      .filter((x) => x.food) as { food: Food; rating: number; updatedAt: number }[];
  }, [foods, myRatings]);

  if (list.length === 0) {
    return <EmptyState icon={<Star size={32} />} text="还没有评分记录" hint="在美食详情中给美食打分" />;
  }

  return (
    <div className="space-y-2 p-4">
      {list.map(({ food, rating, updatedAt }) => (
        <FoodRow
          key={food.id}
          food={food}
          onClick={() => {
            focusFood(food);
            closePanel();
          }}
          extra={
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={11}
                    className={n <= rating ? "text-gold-500" : "text-paper-200"}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="font-sans text-[10px] text-ink-400">
                {new Date(updatedAt).toLocaleDateString("zh-CN")}
              </span>
            </div>
          }
        />
      ))}
    </div>
  );
}

// ============ 评论标签页 ============
function CommentsTab() {
  const foods = useStore((s) => s.foods);
  const focusFood = useStore((s) => s.focusFood);
  const closePanel = useStore((s) => s.closeAccountPanel);
  const currentUser = useAuthStore((s) => s.currentUser);
  const commentsMap = useUserDataStore((s) => s.comments);
  const deleteComment = useUserDataStore((s) => s.deleteComment);

  const myComments = useMemo(() => {
    if (!currentUser) return [];
    const all: FoodComment[] = [];
    for (const foodId of Object.keys(commentsMap)) {
      for (const c of commentsMap[foodId]) {
        if (c.userId === currentUser.id) all.push(c);
      }
    }
    return all.sort((a, b) => b.createdAt - a.createdAt);
  }, [commentsMap, currentUser]);

  const list = useMemo(() => {
    const map = new Map(foods.map((f) => [f.id, f]));
    return myComments
      .map((c) => ({ comment: c, food: map.get(c.foodId) }))
      .filter((x) => x.food) as { comment: FoodComment; food: Food }[];
  }, [foods, myComments]);

  if (list.length === 0) {
    return <EmptyState icon={<MessageSquare size={32} />} text="还没有发表过评论" hint="在美食详情中发表评论" />;
  }

  return (
    <div className="space-y-3 p-4">
      {list.map(({ comment, food }) => (
        <div
          key={comment.id}
          className="rounded-lg border border-ochre-500/15 bg-paper-100/40 p-3"
        >
          <div className="mb-1.5 flex items-center justify-between">
            <button
              onClick={() => {
                focusFood(food);
                closePanel();
              }}
              className="flex items-center gap-1.5 font-serif text-xs font-medium text-cinnabar-600 hover:underline"
            >
              <MapPin size={11} />
              {food.name}
            </button>
            <button
              onClick={() => deleteComment(comment.id)}
              className="flex h-6 w-6 items-center justify-center rounded text-ink-400 transition-colors hover:bg-cinnabar-50 hover:text-cinnabar-500"
              title="删除评论"
            >
              <Trash2 size={12} />
            </button>
          </div>
          <p className="font-serif text-sm leading-relaxed text-ink-700">{comment.text}</p>
          <p className="mt-1.5 font-sans text-[10px] text-ink-400">
            {new Date(comment.createdAt).toLocaleString("zh-CN")}
          </p>
        </div>
      ))}
    </div>
  );
}

// ============ 通用子组件 ============
function FoodRow({
  food,
  onClick,
  action,
  extra,
}: {
  food: Food;
  onClick: () => void;
  action?: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-lg border border-ochre-500/15 bg-paper-100/40 p-2 text-left transition-all hover:border-cinnabar-500/30 hover:bg-paper-100/70"
    >
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-paper-200">
        <FoodImage
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-serif text-sm font-medium text-ink-900">{food.name}</p>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="truncate font-sans text-[10px] text-ink-400">
            {food.province} · {food.cuisine}
          </span>
        </div>
        {extra}
      </div>
      {action}
    </button>
  );
}

function EmptyState({ icon, text, hint }: { icon: React.ReactNode; text: string; hint: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="mb-3 text-ink-300">{icon}</div>
      <p className="font-serif text-sm text-ink-500">{text}</p>
      <p className="mt-1 font-serif text-xs text-ink-400">{hint}</p>
    </div>
  );
}
