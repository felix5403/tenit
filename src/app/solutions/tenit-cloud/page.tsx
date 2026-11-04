import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { OtherSolutions } from "@/components/OtherSolutions";
import { ProductVisual } from "@/components/visuals/ProductVisuals";
import { getSolution } from "@/data/solutions";
import { tenitcloud as c } from "@/data/tenitcloud";

const sol = getSolution("tenit-cloud")!;
const CONTACT = "/contact?solution=tenit-cloud";
const B = sol.accent; // blue
const title = "Tenit Cloud — AI 기반 차세대 CAT 플랫폼";

export const metadata: Metadata = {
  title,
  description: sol.seoDescription,
  alternates: { canonical: "/solutions/tenit-cloud" },
  openGraph: { title, description: sol.seoDescription, url: "/solutions/tenit-cloud" },
};

function StartButton({ inverse = false }: { inverse?: boolean }) {
  if (!sol.url) return null;
  return (
    <a
      href={sol.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold whitespace-nowrap transition-opacity hover:opacity-90 ${inverse ? "bg-white" : "text-white"}`}
      style={inverse ? { color: B } : { background: B }}
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

export default function TenitCloudPage() {
  return (
    <article>
      {/* ── Hero ── */}
      <header style={{ background: sol.accentSoft }}>
        <Container className="pt-10 pb-16 sm:pt-12 sm:pb-20">
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
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] font-semibold text-ink-soft">
              <span className="h-[3px] w-8" style={{ background: B }} aria-hidden="true" />
              {c.hero.eyebrow}
              <span className="font-normal text-muted">· {c.hero.sub}</span>
            </p>
            <h1 className="mt-6 text-[40px] leading-[1.2] font-bold tracking-[-0.035em] sm:text-[60px] lg:text-[72px]">
              번역의 <span style={{ color: B }}>다음 작업 환경.</span>
            </h1>
            <p className="mt-7 max-w-[34em] text-[17px] leading-[1.75] text-ink-soft sm:text-[19px]">{c.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <StartButton />
              <ContactButton />
            </div>
          </div>

          <dl className="mt-14 grid border-t border-ink/15 pt-8 sm:mt-20 sm:grid-cols-3">
            {c.hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-3 sm:py-0 ${i > 0 ? "sm:border-l sm:border-ink/15 sm:pl-8" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[30px] leading-none font-bold tracking-[-0.02em] sm:text-[36px]">{s.value}</dd>
                <dd className="mt-2 text-[14px] text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* ── 주요 기능 ── */}
      <section aria-labelledby="tc-modules">
        <Container className="py-20 sm:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Product</Eyebrow>
              <h2 id="tc-modules" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                {c.modules.title}
              </h2>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <ProductVisual slug="tenit-cloud" />
            </div>
          </div>
          <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {c.modules.items.map((m) => (
              <li key={m.title} className="bg-white p-6 sm:p-8">
                <h3 className="text-[20px] leading-[1.4] font-bold tracking-[-0.02em]">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{m.body}</p>
                <ul className="mt-5 grid gap-2 border-t border-line pt-5 text-[14px] text-ink-soft">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0" style={{ background: B }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 왜 Tenit Cloud ── */}
      <section aria-labelledby="tc-why" className="bg-ink text-white">
        <Container className="py-20 sm:py-28">
          <Eyebrow className="text-[#aab0bc]">Why Tenit Cloud</Eyebrow>
          <h2 id="tc-why" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.why.title}
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-10 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((w) => (
              <li key={w.title}>
                <h3 className="text-[20px] font-bold tracking-[-0.02em]">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#c9ccd4]">{w.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── AI 연동 ── */}
      <section aria-labelledby="tc-ai">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>AI Integration</Eyebrow>
            <h2 id="tc-ai" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              {c.ai.title}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">{c.ai.description}</p>
          </div>
          <ul className="border-t border-ink lg:col-span-6 lg:col-start-7">
            {c.ai.providers.map((p) => (
              <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-6">
                <span className="text-[24px] font-bold tracking-[-0.02em]">{p.name}</span>
                <span className="text-[14px] text-muted">{p.note}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 대상 ── */}
      <section aria-labelledby="tc-audience" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Solutions</Eyebrow>
          <h2 id="tc-audience" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.audiences.title}
          </h2>
          <ul className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
            {c.audiences.items.map((a) => (
              <li key={a.title} className="border-b border-line py-7 sm:pr-8">
                <h3 className="text-[19px] font-bold">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">{a.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 요금제 ── */}
      {c.pricing.show && (
        <section aria-labelledby="tc-pricing">
          <Container className="py-20 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Plan</Eyebrow>
                <h2 id="tc-pricing" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                  {c.pricing.title}
                </h2>
              </div>
              <p className="text-[14px] text-ink-soft">{c.pricing.summary}</p>
            </div>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-[15px] [font-variant-numeric:tabular-nums]">
                <caption className="sr-only">Tenit Cloud 플랜별 요금과 제공량</caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="w-[16%] px-4 py-4 text-[13px] font-semibold text-muted">
                      플랜
                    </th>
                    {c.pricing.plans.map((p) => (
                      <th
                        key={p.name}
                        scope="col"
                        className="px-4 py-4 align-bottom text-[16px] font-bold"
                        style={p.popular ? { color: B } : undefined}
                      >
                        {p.popular && <span className="mb-1 block text-[11px] font-bold tracking-[0.06em]">MOST POPULAR</span>}
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      ["월 요금", "price"],
                      ["월 단어 수", "words"],
                      ["AI 번역 포함", "ai"],
                      ["사용자", "users"],
                      ["초과 요금", "overage"],
                    ] as const
                  ).map(([label, key]) => (
                    <tr key={key} className="border-b border-line">
                      <th scope="row" className="px-4 py-4 text-[14px] font-semibold text-ink-soft">
                        {label}
                      </th>
                      {c.pricing.plans.map((p) => (
                        <td
                          key={p.name}
                          className={`px-4 py-4 ${key === "price" ? "text-[18px] font-bold" : ""}`}
                          style={p.popular ? { background: sol.accentSoft } : undefined}
                        >
                          {p[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-5 grid gap-1.5 text-[13px] leading-[1.6] text-muted">
              {c.pricing.notes.map((n) => (
                <li key={n}>· {n}</li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── 마무리 CTA ── */}
      <section aria-labelledby="tc-closing" className="text-white" style={{ background: "#0a3f8a" }}>
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="tc-closing" className="text-[32px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[44px]">
              {c.closing.title}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-white/80 sm:text-[17px]">{c.closing.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <StartButton inverse />
            <ContactButton inverse />
          </div>
        </Container>
      </section>

      <OtherSolutions current={sol.slug} />
    </article>
  );
}
