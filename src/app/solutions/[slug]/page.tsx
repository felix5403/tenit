import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProductVisual } from "@/components/visuals/ProductVisuals";
import { getSolution, solutions } from "@/data/solutions";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  const title = `${s.name} — ${s.headline}`;
  return {
    title,
    description: s.seoDescription,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title, description: s.seoDescription, url: `/solutions/${s.slug}` },
  };
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const others = solutions.filter((o) => o.slug !== s.slug);
  const contactHref = `/contact?solution=${s.slug}`;

  return (
    <article style={{ "--accent": s.accent } as React.CSSProperties}>
      {/* 1. 제품명과 핵심 메시지 */}
      <header className="border-b border-line">
        <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20">
          <nav aria-label="현재 위치" className="text-[13px] text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  홈
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/solutions" className="hover:text-ink">
                  Solutions
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {s.name}
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-8" style={{ background: s.accent }} aria-hidden="true" />
                <p className="text-[14px] font-semibold text-ink-soft">
                  {s.name}
                  {s.nameKo && ` / ${s.nameKo}`}
                </p>
              </div>
              <h1 className="mt-6 text-[38px] leading-[1.2] font-bold tracking-[-0.035em] sm:text-[56px]">
                {s.headline}
              </h1>
              <p className="mt-6 max-w-[34em] text-[17px] leading-[1.75] text-ink-soft sm:text-[18px]">
                {s.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 self-end sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <ButtonLink href={contactHref} style={{ background: s.accent }} className="hover:opacity-90">
                도입 문의하기
              </ButtonLink>
              {s.url && (
                <ButtonLink href={s.url} external variant="secondary">
                  {s.externalLabel} <Arrow />
                </ButtonLink>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* 2. 제품 소개 + 4. 서비스 콘셉트 비주얼 */}
      <section aria-labelledby="intro-title">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="intro-title" className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
              제품 소개
            </h2>
            <div className="mt-5 grid gap-4 text-[17px] leading-[1.8] text-ink-soft">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ProductVisual slug={s.slug} />
            <p className="mt-3 text-[13px] text-muted">
              이해를 돕기 위한 서비스 콘셉트 예시이며, 실제 화면 및 기능과 다를 수 있습니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. 제품이 필요한 상황 */}
      <section aria-labelledby="situations-title" className="bg-paper">
        <Container className="py-20 sm:py-24">
          <h2 id="situations-title" className="text-[28px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[36px]">
            이럴 때 {s.name}를 떠올려 보세요
          </h2>
          <ul className="mt-12 grid border-t border-ink md:grid-cols-3">
            {s.situations.map((t, i) => (
              <li
                key={t}
                className={`border-b border-line py-8 md:border-b-0 md:py-10 md:pr-8 ${i > 0 ? "md:border-l md:pl-8" : ""}`}
              >
                <span className="font-mono text-[13px]" style={{ color: s.accent }}>
                  0{i + 1}
                </span>
                <p className="mt-3 text-[19px] leading-[1.55] font-semibold">{t}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. 도입 및 제휴 문의 CTA */}
      <section aria-labelledby="cta-title" className="border-t border-line">
        <Container className="grid gap-8 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="cta-title" className="text-[28px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[36px]">
              {s.name} 도입과 제휴를 문의해 주세요.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft">
              도입 검토, 제휴 제안, 궁금한 점 무엇이든 남겨 주시면 확인 후 연락드립니다.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href={contactHref} style={{ background: s.accent }} className="hover:opacity-90">
              도입 문의하기 <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* 6. 다른 솔루션 */}
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
    </article>
  );
}
