import Link from "next/link";
import { solutions } from "@/data/solutions";
import { ProductVisual } from "./ProductVisuals";

/** 히어로: 네 가지 솔루션을 하나의 스튜디오(TENIT)로 연결한 개념 구성 */
export function HeroVisual() {
  return (
    <div className="relative">
      <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-muted">
        <span className="inline-block h-px w-6 bg-line-strong" aria-hidden="true" />
        서비스 콘셉트 · 예시 화면
      </p>

      {/* 태블릿/데스크톱: 개념 미리보기 */}
      <div className="relative hidden sm:block">
        <div aria-hidden="true" className="absolute inset-0">
          <span className="absolute top-1/2 left-0 h-px w-full bg-cobalt/35" />
          <span className="absolute top-0 left-1/2 h-full w-px bg-cobalt/35" />
        </div>
        <div className="relative grid grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <div key={s.slug} className={i % 2 === 1 ? "translate-y-6" : ""}>
              <ProductVisual slug={s.slug} compact />
            </div>
          ))}
        </div>
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 translate-y-[-38%] bg-ink px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-white"
        >
          TENIT
        </span>
      </div>

      {/* 모바일: 간결한 제품 구성 */}
      <ul className="grid grid-cols-2 border-t border-l border-line sm:hidden">
        {solutions.map((s) => (
          <li key={s.slug} className="border-r border-b border-line">
            <Link href={`/solutions/${s.slug}`} className="block p-4">
              <span className="block h-1 w-6" style={{ background: s.accent }} aria-hidden="true" />
              <span className="mt-3 block text-[15px] font-bold">{s.name}</span>
              {s.nameKo && <span className="mt-1 block text-[12px] leading-snug text-muted">{s.nameKo}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
