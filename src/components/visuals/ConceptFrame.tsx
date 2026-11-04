import type { ReactNode } from "react";

/**
 * 개념 비주얼 공통 프레임
 * 실제 서비스 화면이 아님을 명확히 표시합니다.
 */
export function ConceptFrame({
  title,
  label = "서비스 콘셉트 · 예시 화면",
  dark = false,
  children,
  className = "",
}: {
  title: string;
  label?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      role="img"
      aria-label={`${title} ${label}. 실제 서비스 화면이 아닌 개념 이미지입니다.`}
      className={`relative border ${dark ? "border-[#2a2d34] bg-[#121418] text-white" : "border-line bg-white text-ink"} ${className}`}
    >
      <div
        aria-hidden="true"
        className={`flex items-center justify-between gap-3 border-b px-4 py-2.5 text-[11px] ${dark ? "border-[#2a2d34] text-[#b4b8c1]" : "border-line text-muted"}`}
      >
        <span className="font-semibold tracking-wide">{title}</span>
        <span
          className={`shrink-0 border px-1.5 py-0.5 text-[10px] font-semibold ${dark ? "border-[#3a3e47] text-[#c9ccd4]" : "border-line-strong text-ink-soft"}`}
        >
          {label}
        </span>
      </div>
      <div aria-hidden="true">{children}</div>
    </figure>
  );
}

export function Bar({ w, className = "", style }: { w: string; className?: string; style?: React.CSSProperties }) {
  return <span className={`block h-[6px] rounded-full bg-[#e6e8ed] ${className}`} style={{ width: w, ...style }} />;
}
