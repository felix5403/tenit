/**
 * 테닛이 공급기업으로 참여하는 정부 지원사업
 * 사업명을 추가·삭제하면 HOME과 VOUCHER 페이지에 바로 반영됩니다.
 */
export const vouchers: { name: string; en: string }[] = [
  { name: "관광혁신바우처", en: "Tourism Innovation Voucher" },
  { name: "클라우드바우처", en: "Cloud Voucher" },
  { name: "데이터바우처", en: "Data Voucher" },
  { name: "AI바우처", en: "AI Voucher" },
  { name: "스마트공장", en: "Smart Factory" },
];

/** VOUCHER 페이지: 협업이 필요한 수요기업 */
export const voucherFits: string[] = [
  "바우처로 AI 서비스 도입을 검토하는 기업",
  "클라우드와 데이터를 활용해 업무를 개선하려는 기업",
  "관광·제조 등 현장에 디지털 전환이 필요한 기업",
];

export const voucherNotice = "사업별 지원 대상과 조건은 해당 연도 공고를 기준으로 합니다.";
