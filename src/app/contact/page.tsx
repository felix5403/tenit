import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";
import { isContactConfigured } from "@/lib/contact/provider";

export const metadata: Metadata = {
  title: "문의",
  description: "솔루션 도입부터 새로운 사업의 시작까지, 테닛에 문의 내용을 남겨 주세요.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "문의 | TENIT 테닛",
    description: "솔루션 도입부터 새로운 사업의 시작까지, 테닛에 문의 내용을 남겨 주세요.",
    url: "/contact",
  },
};

// 환경변수(문의 연동 여부)를 요청 시점에 읽음
export const dynamic = "force-dynamic";

export default function ContactPage() {
  const enabled = isContactConfigured();
  const fallbackEmail = company.contactEmail || null;

  return (
    <Container className="grid gap-14 pt-14 pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-5 text-[36px] leading-[1.25] font-bold tracking-[-0.035em] sm:text-[48px]">
          어떤 가능성을 함께 만들까요?
        </h1>
        <p className="mt-6 text-[17px] leading-[1.75] text-ink-soft">
          솔루션 도입부터 새로운 사업의 시작까지,
          <br className="hidden sm:block" /> 문의 내용을 남겨 주세요.
        </p>
        {fallbackEmail && (
          <p className="mt-10 border-t border-line pt-6 text-[15px] text-ink-soft">
            이메일 문의{" "}
            <a href={`mailto:${fallbackEmail}`} className="font-semibold text-cobalt underline underline-offset-4">
              {fallbackEmail}
            </a>
          </p>
        )}
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <Suspense fallback={null}>
          <ContactForm enabled={enabled} fallbackEmail={fallbackEmail} />
        </Suspense>
      </div>
    </Container>
  );
}
