import Link from "next/link";
import { solutions } from "@/data/solutions";
import { Arrow } from "./Button";
import { Container } from "./Container";

/** 상세 페이지 하단: 현재 솔루션을 제외한 다른 솔루션 링크 */
export function OtherSolutions({ current }: { current: string }) {
  const others = solutions.filter((o) => o.slug !== current);
  return (
    <nav aria-labelledby="others-title" className="border-t border-line bg-paper">
      <Container className="py-16 sm:py-20">
        <h2 id="others-title" className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
          다른 솔루션
        </h2>
        <ul className="mt-6 grid border-t border-line md:grid-cols-3">
          {others.map((o, i) => (
            <li key={o.slug} className={`border-b border-line md:border-b-0 ${i > 0 ? "md:border-l" : ""}`}>
              <Link href={`/solutions/${o.slug}`} className="group block py-7 md:px-6 md:first:pl-0">
                <span className="block h-[3px] w-6" style={{ background: o.accent }} aria-hidden="true" />
                <span className="mt-4 flex items-center justify-between gap-3 text-[20px] font-bold">
                  {o.name}
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-[15px] text-ink-soft">{o.headline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
