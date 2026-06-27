import { useState } from "react";

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  /** 是否在加载失败时显示文字占位（默认 true） */
  fallback?: boolean;
}

/**
 * 美食图片组件：加载失败时显示首字占位，避免留白。
 */
export function FoodImage({ src, alt, className = "", fallback = true }: FoodImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored && fallback) {
    // 取名称首字作为占位
    const ch = alt?.trim()?.charAt(0) || "?";
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-cinnabar-500 to-cinnabar-700 font-serif font-bold text-paper-50 ${className}`}
      >
        {ch}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
