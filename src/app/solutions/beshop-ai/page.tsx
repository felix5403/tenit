import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { OtherSolutions } from "@/components/OtherSolutions";
import { beshop as c } from "@/data/beshop";
import { getSolution } from "@/data/solutions";

const sol = getSolution("beshop-ai")!;
const CONTACT = "/contact?solution=beshop-ai";
const V = sol.accent; // violet
const title = "비숍 AI — 상품 사진만 올리면 완성되는 상세페이지";

export const metadata: Metadata = {
  title,
  description: sol.seoDescription,
  alternates: { canonical: "/solutions/beshop-ai" },
  openGraph: { title, description: sol.seoDescription, url: "/solutions/beshop-ai" },
};

const pad = (n: number) => String(n).padStart(2, "0");

function StartButton({ inverse = false }: { inverse?: boolean }) {
  if (!sol.url) return null;
  return (
    <a
      href={sol.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px] font-semibold whitespace-nowrap transition-opacity hover:opacity-90 ${inverse ? "bg-white" : "text-white"}`}
      style={inverse ? { color: V } : { background: V }}
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
      className={`inline-flex h-12 items-center justify-center gap-2 border px-6 text-[15px] font-semibold whitespace-nowrap transition-colors ${inverse ? "border-white/50 text-white hover:bg-white/10" : "border-ink/80 text-ink hover:bg-ink hover:text-white"}`}
    >
      도입 문의하기
    </Link>
  );
}

/** 채팅 에디터 예시 화면 (실제 화면 아님) */
function EditorMock() {
  const selected = 0;
  return (
    <figure
      role="img"
      aria-label={`채팅 에디터 예시 화면. ${c.editor.product} 상세페이지의 섹션 목록과 수정 요청 예시. 실제 서비스 화면이 아닌 예시입니다.`}
      className="border border-line bg-white"
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-[11px] text-muted">
          <span className="font-semibold tracking-wide">{c.editor.product}</span>
          <span className="shrink-0 border border-line-strong px-1.5 py-0.5 text-[10px] font-semibold text-ink-soft">예시 화면</span>
        </div>
        <div className="grid sm:grid-cols-[1.15fr_1fr]">
          {/* 섹션 구성 */}
          <ol className="grid content-start gap-1.5 border-b border-line p-4 sm:border-r sm:border-b-0">
            {c.editor.sections.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-3 border px-3 py-2 text-[13px]"
                style={
                  i === selected
                    ? { borderColor: V, background: sol.accentSoft, color: V, fontWeight: 700 }
                    : { borderColor: "var(--color-line)" }
                }
              >
                <span className="w-5 shrink-0 font-mono text-[11px] opacity-70">{pad(i + 1)}</span>
                {s}
              </li>
            ))}
          </ol>
          {/* 채팅 */}
          <div className="flex flex-col gap-3 bg-paper p-4">
            <span className="text-[11px] font-semibold text-muted">선택: {c.editor.sections[selected]}</span>
            <p className="ml-auto max-w-[85%] px-3.5 py-2.5 text-[13px] text-white" style={{ background: V }}>
              {c.editor.commands[0]}
            </p>
            <p className="max-w-[90%] border border-line bg-white px-3.5 py-2.5 text-[13px] leading-[1.6] text-ink-soft">
              선택한 섹션의 수정안을 만들었어요. 미리 보고 적용하거나 되돌릴 수 있어요.
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {c.editor.commands.map((cmd) => (
                <span key={cmd} className="border border-line-strong bg-white px-2.5 py-1 text-[12px] text-ink-soft">
                  {cmd}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function BeshopPage() {
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
              <span className="h-[3px] w-8" style={{ background: V }} aria-hidden="true" />
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[36px] leading-[1.22] font-bold tracking-[-0.035em] sm:text-[54px] lg:text-[64px]">
              <span className="block">{c.hero.title[0]}</span>
              <span className="block" style={{ color: V }}>
                {c.hero.title[1]}
              </span>
            </h1>
            <p className="mt-7 max-w-[36em] text-[17px] leading-[1.75] text-ink-soft sm:text-[19px]">{c.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <StartButton />
              <ContactButton />
            </div>
            <ol className="mt-12 flex flex-wrap items-center gap-3 text-[14px] font-semibold" aria-label="제작 흐름">
              {c.hero.flow.map((f, i) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="border border-line-strong bg-white px-3.5 py-1.5">{f}</span>
                  {i < c.hero.flow.length - 1 && (
                    <svg aria-hidden="true" width="18" height="10" viewBox="0 0 18 10" style={{ color: V }}>
                      <path d="M0 5h15M11.5 1.5 15.5 5l-4 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </header>

      {/* ── 사용 방법 ── */}
      <section aria-labelledby="bs-steps">
        <Container className="py-20 sm:py-28">
          <Eyebrow>How it works</Eyebrow>
          <h2 id="bs-steps" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.steps.title}
          </h2>
          <ol className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map((s, i) => (
              <li
                key={s.title}
                className={`border-b border-line py-8 sm:pr-6 lg:border-b-0 lg:py-10 ${i % 2 === 1 ? "sm:border-l sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <span className="font-mono text-[13px]" style={{ color: V }}>
                  STEP {i + 1}
                </span>
                <h3 className="mt-3 text-[24px] font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── 채팅 에디터 ── */}
      <section aria-labelledby="bs-editor" className="border-t border-line bg-paper">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Chat Editor</Eyebrow>
            <h2 id="bs-editor" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              <span className="block">{c.editor.title[0]}</span>
              <span className="block">{c.editor.title[1]}</span>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink-soft">{c.editor.description}</p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <EditorMock />
          </div>
        </Container>
      </section>

      {/* ── 기능 ── */}
      <section aria-labelledby="bs-features">
        <Container className="py-20 sm:py-28">
          <Eyebrow>Features</Eyebrow>
          <h2 id="bs-features" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
            {c.features.title}
          </h2>
          <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {c.features.items.map((f) => (
              <li key={f.title} className="bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[20px] leading-[1.4] font-bold tracking-[-0.02em]">{f.title}</h3>
                  {f.badge && (
                    <span className="border px-2 py-0.5 text-[12px] font-semibold" style={{ borderColor: V, color: V }}>
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">{f.body}</p>
                {f.languages && (
                  <p className="mt-4 text-[13px] leading-[1.7] text-muted">{f.languages.join(" · ")}</p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 요금제 ── */}
      {c.pricing.show && (
        <section aria-labelledby="bs-pricing" className="border-t border-line bg-paper">
          <Container className="py-20 sm:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Plan</Eyebrow>
                <h2 id="bs-pricing" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
                  {c.pricing.title}
                </h2>
              </div>
              <p className="text-[14px] text-ink-soft">{c.pricing.summary}</p>
            </div>

            <ul className="mt-12 grid gap-4 lg:grid-cols-3">
              {c.pricing.plans.map((p) => (
                <li
                  key={p.name}
                  className="relative flex flex-col border bg-white p-7 sm:p-8"
                  style={{ borderColor: p.popular ? V : "var(--color-line)", borderWidth: p.popular ? 2 : 1 }}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-7 px-2.5 py-0.5 text-[12px] font-bold text-white" style={{ background: V }}>
                      가장 많이 선택
                    </span>
                  )}
                  <h3 className="text-[22px] font-bold">{p.name}</h3>
                  <p className="mt-1 text-[14px] text-muted">{p.target}</p>
                  <p className="mt-6 [font-variant-numeric:tabular-nums]">
                    <span className="text-[34px] font-bold tracking-[-0.02em]">{p.price}</span>
                    <span className="ml-1 text-[14px] text-muted">/ 월</span>
                  </p>
                  <dl className="mt-6 grid gap-2 border-t border-line pt-6 text-[15px]">
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">월 상세페이지 제작</dt>
                      <dd className="font-bold">{p.pages}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink-soft">AI 이미지</dt>
                      <dd className="font-bold">{p.images}</dd>
                    </div>
                  </dl>
                  {p.extras.length > 0 && (
                    <ul className="mt-5 grid gap-1.5 text-[14px] text-ink-soft">
                      {p.extras.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span aria-hidden="true" style={{ color: V }}>
                            +
                          </span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-[14px] font-bold">모든 플랜 공통</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {c.pricing.common.map((t) => (
                    <li key={t} className="border border-line-strong bg-white px-3 py-1.5 text-[13px]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="grid gap-1.5 text-[13px] leading-[1.6] text-muted">
                {c.pricing.notes.map((n) => (
                  <li key={n}>· {n}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* ── FAQ ── */}
      <section aria-labelledby="bs-faq">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="bs-faq" className="mt-5 text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]">
              자주 묻는 질문
            </h2>
          </div>
          <div className="border-t border-ink lg:col-span-8">
            {c.faq.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="shrink-0 transition-transform group-open:rotate-45"
                  >
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </summary>
                <p className="pb-6 text-[15px] leading-[1.75] text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 마무리 CTA ── */}
      <section aria-labelledby="bs-closing" className="text-white" style={{ background: "#4c1d95" }}>
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="bs-closing" className="text-[32px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[44px]">
              <span className="block">{c.closing.title[0]}</span>
              <span className="block">{c.closing.title[1]}</span>
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
