import Link from "next/link";
import { Arrow, ButtonLink } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { MoreLink, PartnershipCta, SectionTitle } from "@/components/Sections";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { getVisibleServiceAreas } from "@/data/services";
import { solutions } from "@/data/solutions";
import { vouchers, voucherNotice } from "@/data/vouchers";

const steps = [
  { no: "01", title: "Discover", body: "고객의 불편과 시장의 기회를 발견합니다." },
  { no: "02", title: "Build", body: "아이디어를 실제로 사용할 수 있는 제품과 서비스로 만듭니다." },
  { no: "03", title: "Grow", body: "사용자 반응을 바탕으로 서비스를 개선하고 사업을 확장합니다." },
];

export default function HomePage() {
  const serviceAreas = getVisibleServiceAreas();
  return (
    <>
      {/* ── Hero ── */}
      <section aria-labelledby="hero-title" className="border-b border-line">
        <Container className="grid gap-14 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-6 lg:pt-6">
            <Eyebrow className="text-cobalt">AI-Powered Business Development Studio</Eyebrow>
            <h1
              id="hero-title"
              className="mt-6 text-[40px] leading-[1.15] font-bold tracking-[-0.035em] sm:text-[56px] lg:text-[64px]"
            >
              <span className="block">아이디어를 사업으로.</span>
              <span className="block text-cobalt">AI로 더 빠르게.</span>
            </h1>
            <p className="mt-7 max-w-[30em] text-[17px] leading-[1.75] text-ink-soft sm:text-[18px]">
              테닛은 시장의 문제를 발견하고, AI로 해결하며,{" "}
              <br className="hidden sm:block" />
              지속 가능한 사업으로 발전시키는 사업개발 전문 스튜디오입니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/solutions">솔루션 살펴보기</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                협업 문의하기
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <HeroVisual />
          </div>
        </Container>
      </section>

      {/* ── About ── */}
      <section id="about" aria-labelledby="about-title" className="bg-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>About TENIT</Eyebrow>
            <h2 id="about-title" className="mt-5 text-[32px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[42px]">
              <span className="block">필요를 발견하고,</span>
              <span className="block">서비스를 만들고,</span>
              <span className="block">사업을 성장시킵니다.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="text-[17px] leading-[1.8] text-ink-soft sm:text-[18px]">
              테닛은 고객과 시장의 문제에서 출발합니다. 사업 기획부터 제품 개발과 운영까지 연결하며, AI 기술을
              일상과 업무에 필요한 서비스로 구현합니다.
            </p>
          </div>

          <ol className="grid border-t border-ink sm:grid-cols-3 lg:col-span-12 lg:mt-6">
            {steps.map((s, i) => (
              <li
                key={s.no}
                className={`border-b border-line py-8 sm:border-b-0 sm:py-10 ${i > 0 ? "sm:border-l sm:pl-8" : ""} sm:pr-8`}
              >
                <span className="font-mono text-[13px] text-cobalt">{s.no}</span>
                <h3 className="mt-3 text-[26px] font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── SOLUTION 요약 ── */}
      <section aria-labelledby="home-solutions" className="border-t border-line">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle id="home-solutions" eyebrow="Solution">
              더 나은 업무와 비즈니스를 만드는 솔루션
            </SectionTitle>
            <MoreLink href="/solutions">솔루션 전체 보기</MoreLink>
          </div>
          <ul className="mt-14 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => (
              <li key={s.slug} className="border-r border-b border-line">
                <Link href={`/solutions/${s.slug}`} className="group flex h-full flex-col p-6 sm:p-7">
                  <span className="block h-[3px] w-8" style={{ background: s.accent }} aria-hidden="true" />
                  <span className="mt-6 text-[14px] font-semibold text-ink-soft">
                    {s.name}
                    {s.nameKo && <span className="font-normal text-muted"> / {s.nameKo}</span>}
                  </span>
                  <span className="mt-3 text-[21px] leading-[1.4] font-bold tracking-[-0.02em] [text-wrap:balance]">
                    {s.headline}
                  </span>
                  <span className="mt-3 flex-1 text-[15px] leading-[1.7] text-ink-soft">{s.description}</span>
                  <span
                    className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold"
                    style={{ color: s.accent }}
                  >
                    자세히 보기 <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── SERVICE 요약 ── */}
      <section aria-labelledby="home-service" className="border-t border-line bg-paper">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionTitle id="home-service" eyebrow="Service">
              상품의 가능성을 판매 기회로.
            </SectionTitle>
            <p className="mt-6 max-w-[30em] text-[16px] leading-[1.8] text-ink-soft sm:text-[17px]">
              유통 전략부터 판매 채널 구축, 콘텐츠와 마케팅, 운영 개선까지 브랜드의 성장을 함께합니다.
            </p>
            <div className="mt-10">
              <ButtonLink href="/service">
                서비스 살펴보기 <Arrow />
              </ButtonLink>
            </div>
          </div>
          <ol className="border-t border-ink lg:col-span-6 lg:col-start-7" aria-label="서비스 영역">
            {serviceAreas.map((a, i) => (
              <li key={a.key} className="flex items-baseline gap-5 border-b border-line py-5">
                <span className="w-6 shrink-0 font-mono text-[13px] text-cobalt">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[19px] font-bold tracking-[-0.02em] sm:text-[22px]">{a.title}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── VOUCHER 요약 ── */}
      <section aria-labelledby="home-voucher" className="border-t border-line">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle id="home-voucher" eyebrow="Voucher">
              바우처 사업, 공급기업 테닛과 함께하세요.
            </SectionTitle>
            <MoreLink href="/voucher">바우처 사업 보기</MoreLink>
          </div>
          <ul className="mt-12 flex flex-wrap gap-3" aria-label="공급기업 참여 사업">
            {vouchers.map((v) => (
              <li key={v.name} className="border border-line-strong px-5 py-3 text-[16px] font-semibold sm:text-[18px]">
                {v.name}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-muted">{voucherNotice}</p>
        </Container>
      </section>

      <PartnershipCta />
    </>
  );
}
