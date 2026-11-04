/**
 * SERVICE: 상품의 시장 진입과 판매를 지원하는 유통 중심 서비스
 *
 * - visible: false 로 두면 영역 또는 세부 업무가 화면에서 숨겨집니다.
 *   번호는 표시되는 항목 기준으로 다시 매겨집니다.
 * - 물류·창고·재고·배송·통관·CS 수행, 입점·성과 보장, 공식 파트너 등
 *   확인되지 않은 내용은 넣지 마세요.
 */
export type ServiceTask = { label: string; visible?: boolean };

export type ServiceArea = {
  key: string;
  title: string;
  description: string;
  tasks: ServiceTask[];
  visible?: boolean;
};

export const serviceAreas: ServiceArea[] = [
  {
    key: "strategy",
    title: "유통 전략 및 상품 기획",
    description: "상품과 시장에 맞는 판매 방향을 설계합니다.",
    tasks: [
      { label: "시장 및 경쟁 상품 조사" },
      { label: "타깃 고객 설정" },
      { label: "상품 구성 및 가격 전략" },
    ],
  },
  {
    key: "channel",
    title: "판매 채널 구축 및 입점 지원",
    description: "브랜드에 적합한 온라인 판매 접점을 만듭니다.",
    tasks: [
      { label: "자사몰 구축" },
      { label: "온라인몰 입점 지원" },
      { label: "상품 등록 및 판매 환경 구성" },
    ],
  },
  {
    key: "content",
    title: "상품 콘텐츠 및 디자인",
    description: "상품의 매력을 구매에 필요한 정보로 전달합니다.",
    tasks: [
      { label: "상품 상세페이지" },
      { label: "제품 소개서" },
      { label: "배너 및 프로모션 콘텐츠" },
    ],
  },
  {
    key: "marketing",
    title: "판매 마케팅 및 프로모션",
    description: "고객 유입부터 구매까지 이어지는 활동을 기획합니다.",
    tasks: [
      { label: "광고 소재 제작" },
      { label: "온라인 광고 운영" },
      { label: "기획전 및 인플루언서 협업" },
    ],
  },
  {
    key: "operation",
    title: "유통 운영 및 판매 개선",
    description: "판매 과정과 데이터를 살펴 운영을 개선합니다.",
    tasks: [
      { label: "상품 정보 및 판매 채널 관리" },
      { label: "판매 성과 분석" },
      { label: "운영 개선안 도출" },
    ],
  },
];

/** 표시 대상 영역과 세부 업무만 반환 */
export function getVisibleServiceAreas() {
  return serviceAreas
    .filter((a) => a.visible !== false)
    .map((a) => ({ ...a, tasks: a.tasks.filter((t) => t.visible !== false) }));
}

export const serviceProcess: { title: string; body: string }[] = [
  { title: "상담", body: "상품과 현재 상황, 협업 목표를 확인합니다." },
  { title: "상품·시장 검토", body: "상품의 특성과 타깃 시장, 판매 채널을 검토합니다." },
  { title: "실행 범위 제안", body: "필요한 업무와 협업 범위를 구체화합니다." },
  { title: "실행 및 개선", body: "합의한 범위에 따라 실행하고 결과를 바탕으로 개선합니다." },
];

export const SERVICE_CONTACT_HREF = "/contact?type=distribution";
