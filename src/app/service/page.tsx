import type { Metadata } from "next";
import { Arrow, ButtonLink } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Container";
import { PageHero, SectionTitle } from "@/components/Sections";
import { getVisibleServiceAreas, SERVICE_CONTACT_HREF, serviceProcess } from "@/data/services";

const description =
  "상품의 강점을 발견하고, 적합한 판매 채널을 연결하며, 콘텐츠와 마케팅으로 판매 기회를 만듭니다. 테닛은 브랜드의 시장 진입부터 유통 운영까지 함께합니다.";

export const metadata: Metadata = {
  title: "서비스",
  description,
  alternates: { canonical: "/service" },
  openGraph: { title: "서비스 | TENIT 테닛", description, url: "/service" },
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ServicePage() {
  const areas = getVisibleServiceAreas();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title="좋은 상품이 더 넓은 시장에 닿도록."
        description={
          <>
            상품의 강점을 발견하고, 적합한 판매 채널을 연결하며, <br className="hidden sm:block" />
            콘텐츠와 마케팅으로 판매 기회를 만듭니다. <br className="hidden sm:block" />
            테닛은 브랜드의 시장 진입부터 유통 운영까지 함께합니다.
          </>
        }
      >
        <ButtonLink href={SERVICE_CONTACT_HREF}>
          유통·사업 협업 문의 <Arrow />
        </ButtonLink>
      </PageHero>

      {/* 서비스 영역 */}
      {areas.length > 0 && (
        <section aria-labelledby="service-areas">
          <Container className="py-20 sm:py-24">
            <SectionTitle id="service-areas" eyebrow="Service Areas">
              서비스 영역
            </SectionTitle>
            <ol className="mt-12 border-t border-ink">
              {areas.map((a, i) => (
                <li key={a.key} className="grid gap-5 border-b border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">
                  <div className="lg:col-span-5">
                    <span className="font-mono text-[13px] text-cobalt">{pad(i + 1)}</span>
                    <h3 className="mt-3 text-[26px] leading-[1.3] font-bold tracking-[-0.025em] sm:text-[32px]">
                      {a.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
                    <p className="text-[17px] leading-[1.75] text-ink-soft">{a.description}</p>
                    {a.tasks.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${a.title} 세부 업무`}>
                        {a.tasks.map((t) => (
                          <li
                            key={t.label}
                            className="border border-line-strong bg-white px-3.5 py-2 text-[14px] font-medium text-ink"
                          >
                            {t.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* 협업 과정 */}
      <section aria-labelledby="service-process" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionTitle id="service-process" eyebrow="Process">
            상품과 사업에 맞는 실행 방법을 찾습니다.
          </SectionTitle>
          <ol className="mt-12 grid border-t border-ink lg:grid-cols-4">
            {serviceProcess.map((s, i) => (
              <li
                key={s.title}
                className={`relative border-b border-line py-8 pl-12 lg:border-b-0 lg:py-10 lg:pr-8 lg:pl-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-8 left-0 flex h-8 w-8 items-center justify-center bg-ink font-mono text-[13px] text-white lg:static lg:mb-5`}
                >
                  {i + 1}
                </span>
                <h3 className="text-[21px] font-bold tracking-[-0.02em]">
                  <span className="sr-only">{i + 1}단계. </span>
                  {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 하단 문의 CTA */}
      <section aria-labelledby="service-cta" className="bg-ink text-white">
        <Container className="grid gap-8 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow className="text-[#aab0bc]">Contact</Eyebrow>
            <h2 id="service-cta" className="mt-5 text-[30px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[40px]">
              함께 키워갈 상품과 브랜드를 기다립니다.
            </h2>
            <p className="mt-5 max-w-[34em] text-[16px] leading-[1.8] text-[#c9ccd4] sm:text-[17px]">
              판매 채널 구축부터 콘텐츠, 마케팅, 운영 개선까지. <br className="hidden sm:block" />
              필요한 협업 범위를 테닛과 이야기해 주세요.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href={SERVICE_CONTACT_HREF} variant="inverse">
              유통·사업 협업 문의 <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
