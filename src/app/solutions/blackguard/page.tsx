import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { OtherSolutions } from "@/components/OtherSolutions";
import { BG_GREEN, blackguard as c } from "@/data/blackguard";
import { getSolution } from "@/data/solutions";

const sol = getSolution("blackguard")!;
const CONTACT = "/contact?solution=blackguard";
const title = "블랙가드 — 통합 온라인 평판 관리 서비스";

export const metadata: Metadata = {
  title,
  description: sol.seoDescription,
  alternates: { canonical: "/solutions/blackguard" },
  openGraph: { title, description: sol.seoDescription, url: "/solutions/blackguard" },
};

const pad = (n: number) => String(n).padStart(2, "0");

/** 다크 섹션용 그린 버튼 */
function GreenButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold whitespace-nowrap text-ink transition-opacity hover:opacity-90"
      style={{ background: BG_GREEN }}
    >
      {children}
    </Link>
  );
}

function ExternalButton() {
  if (!sol.url) return null;
  return (
    <a
      href={sol.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 items-center justify-center gap-2 border border-white/40 px-6 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-white hover:text-ink"
    >
      {sol.externalLabel} <Arrow />
      <span className="sr-only">(새 창)</span>
    </a>
  );
}

/** 실제 서비스 화면 프레임 */
function Screen({ s, priority }: { s: (typeof c.platform.screens)[number]; priority?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden border border-white/15 bg-[#1b1d22]">
        <div aria-hidden="true" className="flex gap-1.5 border-b border-white/10 px-3 py-2.5">
          <i className="h-2 w-2 rounded-full bg-white/25" />
          <i className="h-2 w-2 rounded-full bg-white/25" />
          <i className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <Image
          src={s.src}
          width={s.width}
          height={s.height}
          alt={s.alt}
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-[13px] text-[#aab0bc]">{s.caption}</figcaption>
    </figure>
  );
}

export default function BlackguardPage() {
  return (
    <article>
      {/* ── Hero ── */}
      <header className="bg-ink text-white">
        <Container className="pt-10 pb-16 sm:pt-12 sm:pb-24">
          <nav aria-label="현재 위치" className="text-[13px] text-[#aab0bc]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  홈
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solution
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {sol.name}
              </li>
            </ol>
          </nav>

          <div className="mt-14 sm:mt-20">
            <p className="flex items-center gap-3 text-[14px] font-semibold text-[#c9ccd4]">
              <span className="h-[3px] w-8" style={{ background: BG_GREEN }} aria-hidden="true" />
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[38px] leading-[1.2] font-bold tracking-[-0.035em] sm:text-[58px] lg:text-[68px]">
              <span className="block">{c.hero.titleLead}</span>
              <span className="block" style={{ color: BG_GREEN }}>
                {c.hero.titleBrand}
              </span>
            </h1>
            <p className="mt-7 text-[18px] leading-[1.7] text-[#c9ccd4] sm:text-[20px]">{c.hero.tagline}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <GreenButton href={CONTACT}>도입 문의하기</GreenButton>
              <ExternalButton />
            </div>
          </div>
        </Container>
      </header>

      {/* ── 소개 + 주요 특징 ── */}
      <section aria-labelledby="bg-intro">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>About</Eyebrow>
              <h2 id="bg-intro" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                {c.intro.title}
              </h2>
            </div>
            <div className="grid gap-5 text-[17px] leading-[1.8] text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-10">
              {c.intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <h3 className="mt-20 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">주요 특징</h3>
          <ul className="mt-5 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {c.intro.features.map((f, i) => (
              <li
                key={f.title}
                className={`border-b border-line py-8 sm:pr-6 lg:border-b-0 lg:py-10 ${i % 2 === 1 ? "sm:border-l sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <span className="font-mono text-[13px]" style={{ color: sol.accent }}>
                  {pad(i + 1)}
                </span>
                <p className="mt-3 text-[21px] font-bold tracking-[-0.02em]">{f.title}</p>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink-soft">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 왜 평판 관리가 필요한가 ── */}
      <section aria-labelledby="bg-why" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-28">
          <div className="max-w-[46em]">
            <Eyebrow>Why</Eyebrow>
            <h2 id="bg-why" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              {c.why.title}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft sm:text-[18px]">{c.why.lead}</p>
          </div>

          <dl className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.why.problems.map((p) => (
              <div key={p.title} className="bg-white p-6 sm:p-7">
                <dt className="text-[20px] font-bold tracking-[-0.02em]">{p.title}</dt>
                <dd className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{p.body}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-14 text-[16px] font-bold">{c.why.impactsTitle}</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {c.why.impacts.map((t) => (
              <li key={t} className="flex items-center gap-2.5 border border-line-strong bg-white px-4 py-2.5 text-[15px]">
                <i className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: sol.accent }} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 플랫폼 화면 ── */}
      <section aria-labelledby="bg-platform" className="bg-ink text-white">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow className="text-[#aab0bc]">Platform</Eyebrow>
              <h2 id="bg-platform" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                <span className="block">AI 기반</span>
                <span className="block" style={{ color: BG_GREEN }}>
                  통합 평판 관리 플랫폼
                </span>
              </h2>
            </div>
            <div className="grid gap-4 text-[16px] leading-[1.8] text-[#c9ccd4] sm:text-[17px] lg:col-span-6 lg:col-start-7 lg:pt-10">
              {c.platform.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-14 grid items-start gap-6 md:grid-cols-[1.8fr_1fr]">
            {c.platform.screens.map((s, i) => (
              <Screen key={s.src} s={s} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 블랙가드가 필요한 이유 ── */}
      <section aria-labelledby="bg-reasons">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Features</Eyebrow>
          <h2 id="bg-reasons" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.reasons.title}
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {c.reasons.items.map((r) => (
              <section key={r.title} aria-labelledby={`r-${r.title}`} className="border-t-2 pt-6" style={{ borderColor: sol.accent }}>
                <h3 id={`r-${r.title}`} className="text-[21px] leading-[1.35] font-bold tracking-[-0.02em]">
                  {r.title}
                </h3>
                <ul className="mt-5 grid gap-3 text-[15px] leading-[1.65] text-ink-soft">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 bg-ink-soft" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-16 border-t border-line pt-8 text-[18px] leading-[1.7] font-semibold sm:text-[21px]">
            {c.reasons.summary}
          </p>
        </Container>
      </section>

      {/* ── 서비스 프로세스 ── */}
      <section aria-labelledby="bg-process" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Process</Eyebrow>
          <h2 id="bg-process" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.process.title}
          </h2>
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((s, i) => (
              <li key={s.title} className="bg-white p-6 sm:p-7">
                <span className="text-[12px] font-bold tracking-[0.08em]" style={{ color: sol.accent }}>
                  STEP {i + 1}
                </span>
                <h3 className="mt-3 text-[19px] leading-[1.4] font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{s.body}</p>
              </li>
            ))}
            <li aria-hidden="true" className="hidden bg-paper sm:block" />
          </ol>
        </Container>
      </section>

      {/* ── 수집 채널 ── */}
      <section aria-labelledby="bg-channels">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Channels</Eyebrow>
              <h2 id="bg-channels" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                {c.channels.title}
              </h2>
            </div>
            <p className="text-[14px] font-semibold" style={{ color: sol.accent }}>
              {c.channels.note}
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {c.channels.items.map((ch) => (
              <li key={ch} className="border border-line-strong px-4 py-2.5 text-[15px] font-semibold">
                {ch}
              </li>
            ))}
            <li className="px-2 py-2.5 text-[15px] text-muted">외</li>
          </ul>
        </Container>
      </section>

      {/* ── 요금 ── */}
      {c.pricing.show && (
        <section aria-labelledby="bg-pricing" className="border-t border-line bg-paper">
          <Container className="py-20 sm:py-28">
            <Eyebrow>Plan</Eyebrow>
            <h2 id="bg-pricing" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              {c.pricing.title}
            </h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse bg-white text-left text-[15px] [font-variant-numeric:tabular-nums]">
                <caption className="sr-only">블랙가드 플랜별 월 요금과 키워드 수</caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="w-[16%] px-4 py-4 text-[13px] font-semibold text-muted">
                      플랜
                    </th>
                    {c.pricing.plans.map((p) => (
                      <th key={p.name} scope="col" className="px-4 py-4 text-[16px] font-bold">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-line">
                    <th scope="row" className="px-4 py-5 text-[14px] font-semibold text-ink-soft">
                      월 요금
                    </th>
                    {c.pricing.plans.map((p) => (
                      <td key={p.name} className="px-4 py-5 text-[17px] font-bold">
                        {p.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-line">
                    <th scope="row" className="px-4 py-5 text-[14px] font-semibold text-ink-soft">
                      키워드
                    </th>
                    {c.pricing.plans.map((p) => (
                      <td key={p.name} className="px-4 py-5">
                        {p.keywords}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] text-muted">{c.pricing.note}</p>
          </Container>
        </section>
      )}

      {/* ── 마무리 CTA ── */}
      <section aria-labelledby="bg-closing" className="bg-ink text-white">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <h2 id="bg-closing" className="text-[30px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[42px] lg:col-span-8">
            <span className="block">{c.closing.titleLead}</span>
            <span className="block" style={{ color: BG_GREEN }}>
              {c.closing.titleBrand}
            </span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <GreenButton href={CONTACT}>
              도입 문의하기 <Arrow />
            </GreenButton>
            <ExternalButton />
          </div>
        </Container>
      </section>

      <OtherSolutions current={sol.slug} />
    </article>
  );
}
