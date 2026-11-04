import Link from "next/link";
import type { ReactNode } from "react";
import { vouchers } from "@/data/vouchers";
import { Arrow, ButtonLink } from "./Button";
import { Container, Eyebrow } from "./Container";

/** 하위 페이지 상단 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <Container className="grid gap-10 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[36px] leading-[1.25] font-bold tracking-[-0.035em] sm:text-[52px]">{title}</h1>
          {description && (
            <p className="mt-6 max-w-[34em] text-[17px] leading-[1.75] text-ink-soft sm:text-[18px]">{description}</p>
          )}
        </div>
        {children && <div className="flex items-end lg:col-span-4 lg:justify-end">{children}</div>}
      </Container>
    </header>
  );
}

/** 섹션 제목 */
export function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow?: string; children: ReactNode }) {
  return (
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`${eyebrow ? "mt-5" : ""} text-[30px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[40px]`}>
        {children}
      </h2>
    </div>
  );
}

/** 하단 공통 협업 CTA */
export function PartnershipCta() {
  return (
    <section aria-labelledby="partner-title" className="bg-ink text-white">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow className="text-[#aab0bc]">Partnership</Eyebrow>
          <h2 id="partner-title" className="mt-5 text-[30px] leading-[1.35] font-bold tracking-[-0.03em] sm:text-[42px]">
            다음 사업을 함께 만들어갈 파트너를 찾습니다.
          </h2>
          <p className="mt-6 max-w-[34em] text-[16px] leading-[1.8] text-[#c9ccd4] sm:text-[17px]">
            새로운 서비스의 시작부터 기존 사업의 확장까지. 테닛과 함께 만들고 싶은 제품이나 해결하고 싶은 비즈니스
            과제가 있다면 이야기해 주세요.
          </p>
        </div>
        <div className="flex items-end lg:col-span-4 lg:justify-end">
          <ButtonLink href="/contact?solution=partnership" variant="inverse">
            테닛과 이야기하기 <Arrow />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/** 바우처 사업 목록 */
export function VoucherList({ className = "" }: { className?: string }) {
  return (
    <ul className={`border-t border-ink ${className}`} aria-label="공급기업 참여 사업">
      {vouchers.map((v) => (
        <li
          key={v.name}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-6 sm:py-7"
        >
          <span className="text-[22px] font-bold tracking-[-0.02em] sm:text-[26px]">{v.name}</span>
          <span className="flex items-center gap-3 text-[13px] text-muted">
            <span className="hidden sm:inline">{v.en}</span>
            <span className="border border-cobalt px-2 py-0.5 text-[12px] font-semibold text-cobalt">공급기업</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** 텍스트 링크 */
export function MoreLink({ href, children, color }: { href: string; children: ReactNode; color?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[15px] font-semibold"
      style={color ? { borderColor: color, color } : undefined}
    >
      {children}
      <Arrow className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
