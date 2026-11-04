import type { SolutionSlug } from "@/data/solutions";
import { getSolution } from "@/data/solutions";
import { Bar, ConceptFrame } from "./ConceptFrame";

type VisualProps = { compact?: boolean; framed?: boolean };

/* ───────── Tenit Cloud: 원문/번역 세그먼트 편집기 ───────── */
function TenitCloudBody({ compact }: VisualProps) {
  const accent = getSolution("tenit-cloud")!.accent;
  const rows = [
    { src: "Welcome to the new workspace.", tgt: "새로운 작업 공간에 오신 것을 환영합니다.", state: "done" },
    { src: "Every project starts with a clear brief.", tgt: "모든 프로젝트는 명확한 브리프에서 시작합니다.", state: "active" },
    { src: "Review the terms before you begin.", tgt: "", state: "todo" },
  ] as const;
  const shown = compact ? rows.slice(0, 2) : rows;
  return (
    <div className="text-[12px]">
      {!compact && (
        <div className="grid grid-cols-[28px_1fr_1fr] border-b border-line bg-paper text-[10px] font-semibold text-muted">
          <span className="px-2 py-2">#</span>
          <span className="border-l border-line px-3 py-2">Source</span>
          <span className="border-l border-line px-3 py-2">Target</span>
        </div>
      )}
      {shown.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-[28px_1fr_1fr] border-b border-line last:border-b-0"
          style={r.state === "active" ? { boxShadow: `inset 3px 0 0 ${accent}`, background: "#f7faff" } : undefined}
        >
          <span className="px-2 py-3 text-[10px] text-muted">{i + 1}</span>
          <span className="border-l border-line px-3 py-3 leading-snug text-ink-soft">{r.src}</span>
          <span className="border-l border-line px-3 py-3 leading-snug">
            {r.tgt ? (
              <>
                {r.tgt}
                {r.state === "active" && (
                  <span
                    className="mt-2 block w-fit px-1.5 py-0.5 text-[10px] font-semibold text-white"
                    style={{ background: accent }}
                  >
                    AI 제안
                  </span>
                )}
              </>
            ) : (
              <span className="grid gap-1.5 pt-1">
                <Bar w="80%" />
                <Bar w="55%" />
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ───────── BeShop AI: 상품 → 상세페이지 ───────── */
function BeShopBody({ compact }: VisualProps) {
  const { accent, accentSoft } = getSolution("beshop-ai")!;
  return (
    <div className={`grid items-center gap-4 ${compact ? "grid-cols-[1fr_auto_1.3fr] p-3" : "grid-cols-[1fr_auto_1.4fr] p-5 sm:p-6"}`}>
      <div className="border border-line p-2.5">
        <div className="aspect-square w-full bg-paper p-[18%]">
          <div className="h-full w-full rounded-full border-[6px]" style={{ borderColor: accent, opacity: 0.85 }} />
        </div>
        <span className="mt-2.5 block text-[10px] font-semibold text-muted">상품 정보</span>
        <span className="mt-1.5 grid gap-1">
          <Bar w="90%" />
          <Bar w="60%" />
        </span>
      </div>
      <svg width="22" height="12" viewBox="0 0 22 12" className="text-line-strong">
        <path d="M0 6h19M15 1.5 19.5 6 15 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="border border-line">
        <div className="px-3 py-4" style={{ background: accentSoft }}>
          <span className="block text-[9px] font-semibold" style={{ color: accent }}>
            NEW
          </span>
          <span className={`mt-1 block font-bold leading-tight ${compact ? "text-[12px]" : "text-[15px]"}`}>
            상품의 매력을
            <br />
            한눈에
          </span>
        </div>
        <div className="grid gap-2 px-3 py-3">
          <div className="aspect-[16/9] w-full bg-paper" />
          <Bar w="85%" />
          <Bar w="70%" />
          {!compact && (
            <>
              <div className="mt-1 grid grid-cols-3 gap-1.5">
                <div className="aspect-square bg-paper" />
                <div className="aspect-square bg-paper" />
                <div className="aspect-square bg-paper" />
              </div>
              <Bar w="60%" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────── Blackguard: 브랜드 언급 흐름 ───────── */
function BlackguardBody({ compact }: VisualProps) {
  const red = "#F26363"; // 어두운 배경 위 대비 확보용 밝은 레드
  const items = [
    { src: "커뮤니티", tone: "주의", color: red },
    { src: "리뷰", tone: "긍정", color: "#E8EAEE" },
    { src: "뉴스", tone: "중립", color: "#8A909B" },
  ];
  const shown = compact ? items.slice(0, 2) : items;
  return (
    <div className={compact ? "p-3" : "p-5 sm:p-6"}>
      <div className="flex items-end justify-between">
        <span className="text-[10px] font-semibold text-[#b4b8c1]">브랜드 언급 흐름</span>
        <span className="flex gap-2 text-[9px] text-[#b4b8c1]">
          <span className="flex items-center gap-1">
            <i className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: red }} />
            주의
          </span>
          <span className="flex items-center gap-1">
            <i className="inline-block h-1.5 w-1.5 rounded-full bg-[#E8EAEE]" />
            긍정
          </span>
        </span>
      </div>
      <svg viewBox="0 0 300 70" className="mt-2 h-auto w-full" preserveAspectRatio="none">
        <path d="M0 52 C30 48 50 40 80 44 S130 30 160 34 S210 20 240 26 S280 18 300 14" fill="none" stroke="#E8EAEE" strokeWidth="1.6" />
        <path d="M0 62 C40 60 70 58 100 54 S150 30 170 40 S220 58 260 56 S290 54 300 55" fill="none" stroke={red} strokeWidth="1.6" />
        <line x1="170" y1="0" x2="170" y2="70" stroke="#3a3e47" strokeDasharray="2 3" />
      </svg>
      <ul className="mt-3 grid gap-2">
        {shown.map((it) => (
          <li key={it.src} className="flex items-center gap-3 border border-[#2a2d34] px-3 py-2.5">
            <i className="h-2 w-2 shrink-0 rounded-full" style={{ background: it.color }} />
            <span className="w-14 shrink-0 text-[11px] text-[#c9ccd4]">{it.src}</span>
            <span className="grid flex-1 gap-1">
              <span className="block h-[5px] w-[85%] rounded-full bg-[#2c3038]" />
              <span className="block h-[5px] w-[55%] rounded-full bg-[#2c3038]" />
            </span>
            <span className="shrink-0 text-[10px] font-semibold" style={{ color: it.color }}>
              {it.tone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────── BTSPDF: PDF ⇄ 문서 ───────── */
function Page({ tag, color, lines }: { tag: string; color: string; lines: string[] }) {
  return (
    <div className="relative aspect-[3/4] w-full border border-line bg-white p-[12%]">
      <span
        className="absolute top-0 right-0 px-1.5 py-0.5 text-[10px] font-bold text-white"
        style={{ background: color }}
      >
        {tag}
      </span>
      <span className="grid gap-[9%] pt-[14%]">
        {lines.map((w, i) => (
          <Bar key={i} w={w} />
        ))}
      </span>
    </div>
  );
}

function BtspdfBody({ compact }: VisualProps) {
  const { accent, accentSoft } = getSolution("btspdf")!;
  return (
    <div className={`grid grid-cols-[1fr_auto_1fr] items-center ${compact ? "gap-3 p-3" : "gap-5 p-6 sm:p-8"}`} style={{ background: accentSoft }}>
      <Page tag="PDF" color={accent} lines={["90%", "75%", "85%", "50%"]} />
      <svg width="28" height="28" viewBox="0 0 28 28" style={{ color: accent }}>
        <path d="M3 10h20M18 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M25 18H5M10 13l-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <Page tag="문서" color="#3f444e" lines={["80%", "90%", "65%", "85%"]} />
    </div>
  );
}

const bodies: Record<SolutionSlug, (p: VisualProps) => React.JSX.Element> = {
  "tenit-cloud": TenitCloudBody,
  "beshop-ai": BeShopBody,
  blackguard: BlackguardBody,
  btspdf: BtspdfBody,
};

export function ProductVisual({ slug, compact = false, className = "" }: { slug: SolutionSlug; compact?: boolean; className?: string }) {
  const s = getSolution(slug)!;
  const Body = bodies[slug];
  return (
    <ConceptFrame title={s.name} dark={slug === "blackguard"} className={className} label={compact ? "콘셉트" : undefined}>
      <Body compact={compact} />
    </ConceptFrame>
  );
}
