import { useState } from "react";
import { X, User, Lock, UserPlus, LogIn, AlertCircle } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useAuthStore } from "@/store/useAuthStore";

export default function AuthModal() {
  const open = useStore((s) => s.authModalOpen);
  const mode = useStore((s) => s.authModalMode);
  const setMode = useStore((s) => s.setAuthModalMode);
  const close = useStore((s) => s.closeAuthModal);
  const register = useAuthStore((s) => s.register);
  const login = useAuthStore((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const reset = () => {
    setUsername("");
    setPassword("");
    setNickname("");
    setError("");
  };

  const handleClose = () => {
    reset();
    close();
  };

  const switchMode = (m: "login" | "register") => {
    setError("");
    setMode(m);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "register") {
      const res = register(username, password, nickname);
      if (!res.ok) {
        setError(res.error || "注册失败");
        return;
      }
    } else {
      const res = login(username, password);
      if (!res.ok) {
        setError(res.error || "登录失败");
        return;
      }
    }
    reset();
    close();
  };

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-ink-900/50 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-ochre-500/20 bg-paper-50 shadow-panel animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="relative flex items-center justify-between border-b border-ochre-500/15 bg-gradient-to-r from-cinnabar-500/10 to-gold-500/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 shadow-seal">
              <img src={`${import.meta.env.BASE_URL}0001.png`} alt="logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-base font-bold text-ink-900">
                {mode === "login" ? "登录中华美食地图" : "加入中华美食地图"}
              </h2>
              <p className="font-latin text-[10px] italic text-ochre-500">
                {mode === "login" ? "Sign in to explore" : "Create your account"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-paper-200 hover:text-ink-900"
          >
            <X size={16} />
          </button>
        </div>

        {/* 模式切换 */}
        <div className="flex border-b border-ochre-500/10">
          <button
            onClick={() => switchMode("login")}
            className={`flex flex-1 items-center justify-center gap-1.5 py-3 font-serif text-sm transition-colors ${
              mode === "login"
                ? "border-b-2 border-cinnabar-500 text-cinnabar-600"
                : "text-ink-500 hover:text-ink-700"
            }`}
          >
            <LogIn size={14} />
            登录
          </button>
          <button
            onClick={() => switchMode("register")}
            className={`flex flex-1 items-center justify-center gap-1.5 py-3 font-serif text-sm transition-colors ${
              mode === "register"
                ? "border-b-2 border-cinnabar-500 text-cinnabar-600"
                : "text-ink-500 hover:text-ink-700"
            }`}
          >
            <UserPlus size={14} />
            注册
          </button>
        </div>

        {/* 表单 */}
        <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
          <div>
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">
              用户名
            </label>
            <div className="relative">
              <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="2-20 位中英文/数字/下划线"
                autoFocus
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-2 pl-9 pr-3 font-sans text-sm text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
              />
            </div>
          </div>

          {mode === "register" && (
            <div>
              <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">
                昵称（可选）
              </label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="留空则使用用户名"
                  className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-2 pl-9 pr-3 font-sans text-sm text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1.5 block font-serif text-xs font-semibold text-ink-900">
              密码
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="至少 6 位"
                className="w-full rounded-lg border border-ochre-500/20 bg-paper-100/60 py-2 pl-9 pr-3 font-sans text-sm text-ink-900 placeholder:text-ink-400/60 focus:border-cinnabar-500/50 focus:outline-none focus:ring-2 focus:ring-cinnabar-500/10"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-1.5 rounded-lg border border-cinnabar-500/20 bg-cinnabar-50/60 px-3 py-2 font-serif text-xs text-cinnabar-600">
              <AlertCircle size={12} />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-cinnabar-500 py-2.5 font-serif text-sm font-medium text-paper-50 transition-colors hover:bg-cinnabar-600"
          >
            {mode === "login" ? (
              <>
                <LogIn size={14} />
                登录
              </>
            ) : (
              <>
                <UserPlus size={14} />
                注册
              </>
            )}
          </button>

          <p className="text-center font-serif text-[11px] leading-relaxed text-ink-400">
            {mode === "login" ? (
              <>
                还没有账号？
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className="ml-1 text-cinnabar-600 hover:underline"
                >
                  立即注册
                </button>
              </>
            ) : (
              <>
                已有账号？
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className="ml-1 text-cinnabar-600 hover:underline"
                >
                  去登录
                </button>
              </>
            )}
          </p>

          <div className="rounded-lg border border-ochre-500/15 bg-paper-100/40 px-3 py-2 font-serif text-[10px] leading-relaxed text-ink-400">
            演示提示：账号数据保存在浏览器本地（localStorage），
            切换浏览器或清除缓存后需重新注册。评分、点赞、收藏、评论
            均保存在本地，不会上传服务器。
          </div>
        </form>
      </div>
    </div>
  );
}
