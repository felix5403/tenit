/**
 * 회사 정보
 *
 * 확인되지 않은 항목은 빈 문자열("")로 둡니다.
 * 빈 값은 화면에 표시되지 않습니다. 확정된 값만 입력하세요.
 */
export const company: {
  nameKo: string;
  nameEn: string;
  legalName: string;
  tagline: string;
  ceo: string;
  businessNumber: string;
  address: string;
  phone: string;
  contactEmail: string;
} = {
  nameKo: "테닛",
  nameEn: "TENIT",
  legalName: "주식회사 테닛",
  tagline: "AI로 새로운 사업을 만드는 사업개발 전문 스튜디오",

  // ↓ 확인 후 입력 (빈 값이면 화면에서 숨김)
  ceo: "",
  businessNumber: "",
  address: "",
  phone: "",
  /** 공개 문의 이메일. 입력 시 푸터·문의 페이지에 대체 연락 수단으로 노출 */
  contactEmail: "",
};

/** 푸터 등에 노출할 회사 상세 항목 (값이 있는 것만) */
export function getCompanyDetails() {
  const rows: { label: string; value: string; href?: string }[] = [
    { label: "대표", value: company.ceo },
    { label: "사업자등록번호", value: company.businessNumber },
    { label: "주소", value: company.address },
    { label: "전화", value: company.phone, href: company.phone ? `tel:${company.phone.replace(/[^0-9+]/g, "")}` : undefined },
    { label: "이메일", value: company.contactEmail, href: company.contactEmail ? `mailto:${company.contactEmail}` : undefined },
  ];
  return rows.filter((r) => r.value.trim() !== "");
}
