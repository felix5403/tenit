import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "개인정보처리방침 (초안)",
  description: "주식회사 테닛 웹사이트 개인정보처리방침 초안입니다.",
  alternates: { canonical: "/privacy" },
  // 확정 전 초안이므로 검색 노출 제외
  robots: { index: false, follow: true },
};

/** 확정되지 않은 항목 표시 */
function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-0.5 inline-block border border-dashed border-[#b45309] bg-[#fdf6ec] px-1.5 text-[14px] font-semibold text-[#8a3f06]">
      확정 필요: {children}
    </span>
  );
}

export default function PrivacyPage() {
  const contact = company.contactEmail;

  return (
    <Container className="pt-14 pb-24 sm:pt-20">
      <div className="max-w-[760px]">
        <Eyebrow>Privacy Policy · Draft</Eyebrow>
        <h1 className="mt-5 text-[34px] leading-[1.3] font-bold tracking-[-0.03em] sm:text-[44px]">개인정보처리방침</h1>

        <div role="note" className="mt-8 border-l-4 border-[#b45309] bg-[#fdf6ec] px-5 py-4 text-[15px] leading-[1.7]">
          <p className="font-semibold">검토 중인 초안입니다.</p>
          <p className="mt-1 text-ink-soft">
            법률 검토와 내부 확인을 거쳐 확정될 예정이며, 표시된 항목은 아직 정해지지 않았습니다. 확정 전에는
            효력이 있는 방침으로 사용하지 마세요.
          </p>
        </div>

        <div className="mt-12 grid gap-12 text-[16px] leading-[1.85] text-ink-soft [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-1.5 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <p>
              {company.legalName}(이하 “회사”)는 「개인정보 보호법」 등 관련 법령을 준수하며, 웹사이트 문의를 통해
              수집하는 개인정보를 다음과 같이 처리합니다.
            </p>
          </section>

          <section>
            <h2>1. 수집하는 개인정보 항목</h2>
            <ul>
              <li>필수: 문의 유형, 이름, 이메일, 문의 내용</li>
              <li>선택: 회사명</li>
              <li>
                서비스 이용 과정에서 자동으로 생성·수집될 수 있는 정보(접속 기록 등): <Pending>해당 여부 및 항목</Pending>
              </li>
            </ul>
          </section>

          <section>
            <h2>2. 수집 및 이용 목적</h2>
            <ul>
              <li>문의 내용 확인 및 답변</li>
              <li>솔루션 도입, 사업개발 및 파트너십 관련 상담</li>
            </ul>
          </section>

          <section>
            <h2>3. 보유 및 이용 기간</h2>
            <p className="mt-3">
              수집한 개인정보는 <Pending>보유 기간</Pending> 동안 보관한 뒤 지체 없이 파기합니다. 관련 법령에 따라
              보관이 필요한 경우에는 해당 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2>4. 개인정보 처리 위탁</h2>
            <p className="mt-3">
              회사는 문의 접수와 처리를 위해 개인정보 처리 업무를 외부에 위탁할 수 있습니다.
            </p>
            <ul>
              <li>
                수탁자 및 위탁 업무: <Pending>메일 발송·호스팅 등 처리업체 목록</Pending>
              </li>
              <li>
                국외 이전 여부: <Pending>해당 여부, 이전 국가, 항목, 방법</Pending>
              </li>
            </ul>
          </section>

          <section>
            <h2>5. 제3자 제공</h2>
            <p className="mt-3">
              회사는 정보주체의 동의가 있거나 법령에 근거가 있는 경우를 제외하고 개인정보를 제3자에게 제공하지
              않습니다.
            </p>
          </section>

          <section>
            <h2>6. 개인정보의 파기</h2>
            <p className="mt-3">
              보유 기간이 끝나거나 처리 목적이 달성된 개인정보는 복구할 수 없는 방법으로 지체 없이 파기합니다.
            </p>
          </section>

          <section>
            <h2>7. 정보주체의 권리</h2>
            <p className="mt-3">
              정보주체는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구할 수 있으며, 동의를 철회할
              수 있습니다.
            </p>
          </section>

          <section>
            <h2>8. 동의를 거부할 권리</h2>
            <p className="mt-3">
              개인정보 수집·이용에 동의하지 않을 수 있습니다. 다만 필수 항목에 동의하지 않으면 웹사이트를 통한 문의
              접수가 어렵습니다.
            </p>
          </section>

          <section>
            <h2>9. 개인정보 보호책임자 및 문의처</h2>
            <ul>
              <li>
                개인정보 보호책임자: <Pending>성명·직책</Pending>
              </li>
              <li>
                연락처: {contact ? <a href={`mailto:${contact}`} className="text-cobalt underline">{contact}</a> : <Pending>이메일·전화</Pending>}
              </li>
            </ul>
          </section>

          <section>
            <h2>10. 시행일</h2>
            <p className="mt-3">
              이 방침은 <Pending>시행일</Pending>부터 적용됩니다.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
