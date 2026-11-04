import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const base =
  "inline-flex items-center justify-center gap-2 h-12 px-6 text-[15px] font-semibold transition-colors whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-cobalt-dark",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink underline-offset-4 hover:underline px-0 h-auto",
  inverse: "bg-white text-ink hover:bg-cobalt-soft",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  style?: CSSProperties;
};

export function ButtonLink({ href, children, variant = "primary", className = "", external, style }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} style={style} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only">(새 창)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" className={className}>
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
