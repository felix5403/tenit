import type { Metadata } from "next";
import { Arrow, ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero, SectionTitle, VoucherList } from "@/components/Sections";
import { voucherFits, voucherNotice, vouchers } from "@/data/vouchers";

const description = `테닛은 ${vouchers.map((v) => v.name).join(", ")} 사업의 공급기업입니다. 바우처 협업이 필요한 수요기업은 문의해 주세요.`;

export const metadata: Metadata = {
  title: "바우처 사업",
  description,
  alternates: { canonical: "/voucher" },
  openGraph: { title: "바우처 사업 | TENIT 테닛", description, url: "/voucher" },
};

export default function VoucherPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Voucher"
        title={
          <>
            <span className="block">바우처 사업,</span>
            <span className="block">공급기업 테닛과 함께하세요.</span>
          </>
        }
        description="테닛은 아래 정부 지원사업의 공급기업입니다. 바우처로 AI 서비스 도입이나 새로운 사업을 준비하는 수요기업이라면 협업을 문의해 주세요."
      >
        <ButtonLink href="/contact?solution=voucher">
          바우처 협업 문의하기 <Arrow />
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="voucher-programs">
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle id="voucher-programs" eyebrow="Programs">
              공급기업 참여 사업
            </SectionTitle>
            <p className="mt-5 text-[14px] leading-[1.7] text-muted">{voucherNotice}</p>
          </div>
          <VoucherList className="lg:col-span-7 lg:col-start-6" />
        </Container>
      </section>

      <section aria-labelledby="voucher-fits" className="border-t border-line bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionTitle id="voucher-fits">이런 수요기업과 함께합니다</SectionTitle>
          <ul className="mt-12 grid border-t border-ink md:grid-cols-3">
            {voucherFits.map((t, i) => (
              <li
                key={t}
                className={`border-b border-line py-8 md:border-b-0 md:py-10 md:pr-8 ${i > 0 ? "md:border-l md:pl-8" : ""}`}
              >
                <p className="text-[19px] leading-[1.55] font-semibold">{t}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="voucher-cta" className="bg-ink text-white">
        <Container className="grid gap-8 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="voucher-cta" className="text-[30px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[40px]">
              바우처 협업이 필요하신가요?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#c9ccd4]">
              관심 있는 사업과 준비 중인 과제를 남겨 주시면 확인 후 연락드립니다.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ButtonLink href="/contact?solution=voucher" variant="inverse">
              바우처 협업 문의하기 <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
