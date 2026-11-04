import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero, PartnershipCta } from "@/components/Sections";
import { ProductVisual } from "@/components/visuals/ProductVisuals";
import { solutions } from "@/data/solutions";

const description = "Tenit Cloud, BeShop AI, Blackguard, BTSPDF. 테닛이 직접 기획하고 만드는 네 가지 자체 솔루션입니다.";

export const metadata: Metadata = {
  title: "솔루션",
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title: "솔루션 | TENIT 테닛", description, url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solution"
        title="더 나은 업무와 비즈니스를 만드는 솔루션"
        description="테닛이 직접 기획하고 만드는 네 가지 자체 솔루션입니다. 아래 화면은 이해를 돕기 위한 서비스 콘셉트 예시입니다."
      />

      <Container className="pb-20 sm:pb-28">
        <ol>
          {solutions.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <li key={s.slug} className="border-b border-line py-14 last:border-b-0 sm:py-20">
                <article aria-labelledby={`sol-${s.slug}`} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2 lg:col-start-8" : ""}`}>
                    <span className="block h-[3px] w-8" style={{ background: s.accent }} aria-hidden="true" />
                    <h2 id={`sol-${s.slug}`} className="mt-5 text-[15px] font-semibold text-ink-soft">
                      {s.name}
                      {s.nameKo && <span className="font-normal text-muted"> / {s.nameKo}</span>}
                    </h2>
                    <p className="mt-3 text-[28px] leading-[1.35] font-bold tracking-[-0.03em] [text-wrap:balance] sm:text-[34px]">
                      {s.headline}
                    </p>
                    <p className="mt-5 text-[16px] leading-[1.75] text-ink-soft">{s.description}</p>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 border-b-2 pb-1 text-[15px] font-semibold"
                      style={{ borderColor: s.accent, color: s.accent }}
                    >
                      {s.name} 알아보기
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:col-start-6"}`}>
                    <ProductVisual slug={s.slug} />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>

      <PartnershipCta />
    </>
  );
}
