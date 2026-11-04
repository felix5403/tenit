import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { OtherSolutions } from "@/components/OtherSolutions";
import { ProductVisual } from "@/components/visuals/ProductVisuals";
import { btspdf as c } from "@/data/btspdf";
import { getSolution } from "@/data/solutions";

const sol = getSolution("btspdf")!;
const CONTACT = "/contact?solution=btspdf";
const T = sol.accent; // teal
const title = "BTSPDF — PDF와 문서 사이를 자유롭게";

export const metadata: Metadata = {
  title,
  description: sol.seoDescription,
  alternates: { canonical: "/solutions/btspdf" },
  openGraph: { title, description: sol.seoDescription, url: "/solutions/btspdf" },
};

function SiteButton({ inverse = false }: { inverse?: boolean }) {
  if (!sol.url) return null;
  return (
    <a
      href={sol.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold whitespace-nowrap transition-opacity hover:opacity-90 ${inverse ? "bg-white" : "text-white"}`}
      style={inverse ? { color: T } : { background: T }}
    >
      {sol.externalLabel} <Arrow />
      <span className="sr-only">(새 창)</span>
    </a>
  );
}

function ContactButton({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href={CONTACT}
      className={`inline-flex h-12 items-center justify-center border px-6 text-[15px] font-semibold whitespace-nowrap transition-colors ${inverse ? "border-white/50 text-white hover:bg-white/10" : "border-ink/80 text-ink hover:bg-ink hover:text-white"}`}
    >
      도입 문의하기
    </Link>
  );
}

export default function BtspdfPage() {
  return (
    <article>
      {/* ── Hero ── */}
      <header style={{ background: sol.accentSoft }}>
        <Container className="pt-10 pb-16 sm:pt-12 sm:pb-24">
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
                  Solution
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {sol.name}
              </li>
            </ol>
          </nav>

          <div className="mt-14 sm:mt-20">
            <p className="flex items-center gap-3 text-[14px] font-semibold text-ink-soft">
              <span className="h-[3px] w-8" style={{ background: T }} aria-hidden="true" />
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[40px] leading-[1.2] font-bold tracking-[-0.035em] sm:text-[58px] lg:text-[68px]">
              <span className="block">{c.hero.title[0]}</span>
              <span className="block" style={{ color: T }}>
                {c.hero.title[1]}
              </span>
            </h1>
            <p className="mt-7 max-w-[34em] text-[17px] leading-[1.75] text-ink-soft sm:text-[19px]">{c.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <SiteButton />
              <ContactButton />
            </div>
          </div>
        </Container>
      </header>

      {/* ── 주요 작업 ── */}
      <section aria-labelledby="bt-tools">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Eyebrow>Tools</Eyebrow>
            <h2 id="bt-tools" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              {c.tools.title}
            </h2>
            <ul className="mt-10 border-t border-ink">
              {c.tools.items.map((t) => (
                <li key={t.title} className="border-b border-line py-6">
                  <h3 className="text-[21px] font-bold tracking-[-0.02em]">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:col-span-5 lg:col-start-8 lg:pt-24">
            <ProductVisual slug="btspdf" />
            <p className="mt-3 text-[13px] text-muted">이해를 돕기 위한 서비스 콘셉트 예시입니다.</p>
          </div>
        </Container>
      </section>

      {/* ── 특징 ── */}
      <section aria-labelledby="bt-features" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Features</Eyebrow>
          <h2 id="bt-features" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.features.title}
          </h2>
          <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {c.features.items.map((f) => (
              <li key={f.title} className="bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[20px] leading-[1.4] font-bold tracking-[-0.02em]">{f.title}</h3>
                  {f.badge && (
                    <span className="border px-2 py-0.5 text-[12px] font-semibold" style={{ borderColor: T, color: T }}>
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 마무리 CTA ── */}
      <section aria-labelledby="bt-closing" className="text-white" style={{ background: "#0b4f4a" }}>
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="bt-closing" className="text-[32px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[44px]">
              {c.closing.title}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-white/80 sm:text-[17px]">{c.closing.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <SiteButton inverse />
            <ContactButton inverse />
          </div>
        </Container>
      </section>

      <OtherSolutions current={sol.slug} />
    </article>
  );
}
