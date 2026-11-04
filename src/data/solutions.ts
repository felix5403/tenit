/**
 * 솔루션 정보
 *
 * - url: 실제 서비스 URL이 확정되면 입력하세요. 값이 있을 때만
 *   상세 페이지에 외부 서비스 이동 버튼이 나타납니다.
 * - 요금, 출시 여부, 지원 형식, 성능 수치 등 확정되지 않은 내용은 넣지 마세요.
 */
export type SolutionSlug = "tenit-cloud" | "beshop-ai" | "blackguard" | "btspdf";

export type Solution = {
  slug: SolutionSlug;
  name: string;
  /** 한글 표기 (없으면 빈 문자열, 화면에서 숨김) */
  nameKo: string;
  headline: string;
  description: string;
  /** 상세 페이지 소개 문단 */
  intro: string[];
  /** 제품이 필요한 상황 */
  situations: string[];
  /** 접근성(흰 배경 대비 4.5:1 이상)을 고려한 포인트 색 */
  accent: string;
  /** 포인트 색의 아주 옅은 배경 */
  accentSoft: string;
  /** 실제 서비스 URL (미정이면 null) */
  url: string | null;
  /** 외부 서비스 버튼 문구 (url이 있을 때만 사용) */
  externalLabel: string;
  seoDescription: string;
  /** true면 공통 템플릿 대신 전용 페이지(src/app/solutions/<slug>/page.tsx)를 사용 */
  customPage?: boolean;
  /** 실제 서비스 화면 (있으면 솔루션 목록에서 콘셉트 비주얼 대신 표시) */
  screenshot?: { src: string; width: number; height: number; alt: string };
};

export const solutions: Solution[] = [
  {
    slug: "tenit-cloud",
    name: "Tenit Cloud",
    nameKo: "테닛클라우드",
    headline: "번역의 다음 작업 환경.",
    description:
      "AI 기반의 차세대 CAT 툴. 번역 업무를 더 효율적으로 수행할 수 있는 작업 환경을 제공합니다.",
    intro: [
      "Tenit Cloud는 AI 기반의 차세대 CAT(Computer-Assisted Translation) 툴입니다.",
      "번역 업무를 더 효율적으로 수행할 수 있는 작업 환경을 목표로 만들고 있습니다.",
    ],
    situations: [
      "번역 업무에 더 효율적인 작업 환경이 필요할 때",
      "AI를 번역 업무 흐름에 도입하는 방법을 검토할 때",
      "번역 작업 도구를 새로 고르거나 바꾸려 할 때",
    ],
    accent: "#0B5FCC",
    accentSoft: "#EEF4FD",
    url: null,
    externalLabel: "Tenit Cloud 바로가기",
    seoDescription:
      "Tenit Cloud(테닛클라우드)는 AI 기반의 차세대 CAT 툴로, 번역 업무를 더 효율적으로 수행할 수 있는 작업 환경을 제공합니다.",
  },
  {
    slug: "beshop-ai",
    name: "BeShop AI",
    nameKo: "비숍",
    headline: "상품의 매력을, 상세페이지로 뚝딱.",
    description: "AI로 상품 상세페이지를 간편하게 제작하는 서비스입니다.",
    intro: [
      "BeShop AI는 AI로 상품 상세페이지를 간편하게 제작하는 서비스입니다.",
      "상품이 가진 매력을 고객에게 전달하는 페이지를 더 쉽게 만들 수 있도록 돕습니다.",
    ],
    situations: [
      "판매할 상품은 많은데 상세페이지 제작이 늘 밀릴 때",
      "디자인 인력 없이 상세페이지를 준비해야 할 때",
      "새 상품을 판매 채널에 더 빨리 올리고 싶을 때",
    ],
    accent: "#6D28D9",
    accentSoft: "#F4EFFD",
    url: null,
    externalLabel: "BeShop AI 바로가기",
    seoDescription:
      "BeShop AI(비숍)는 AI로 상품 상세페이지를 간편하게 제작하는 서비스입니다.",
  },
  {
    slug: "blackguard",
    name: "Blackguard",
    nameKo: "블랙가드",
    headline: "브랜드를 둘러싼 목소리를 이해하다.",
    description: "AI 기반의 온라인 여론 및 평판 관리 서비스입니다.",
    intro: [
      "Blackguard는 AI 기반의 온라인 여론 및 평판 관리 서비스입니다.",
      "브랜드를 둘러싼 온라인의 목소리를 이해하고 관리하는 일을 돕습니다.",
    ],
    situations: [
      "브랜드에 대한 온라인 반응을 이해하고 싶을 때",
      "평판 관리 업무를 체계적으로 운영하고 싶을 때",
      "제품 출시나 캠페인 이후 고객의 목소리를 살펴보고 싶을 때",
    ],
    // 브랜드 그린 (흰 배경 대비 5.4:1)
    accent: "#087A3F",
    accentSoft: "#EEF8F2",
    url: "https://blackguard.co.kr",
    externalLabel: "블랙가드 사이트 바로가기",
    seoDescription:
      "블랙가드(Blackguard)는 악플과 선플을 함께 수집·분석해 개인·기업·브랜드의 온라인 평판을 관리하는 AI 기반 통합 평판 관리 서비스입니다.",
    customPage: true,
    screenshot: {
      src: "/images/blackguard/trend.jpg",
      width: 1127,
      height: 942,
      alt: "블랙가드 대시보드의 일별 댓글 추이와 감정분석 추이 그래프 화면",
    },
  },
  {
    slug: "btspdf",
    name: "BTSPDF",
    nameKo: "",
    headline: "PDF와 문서 사이를 자유롭게.",
    description: "PDF를 문서로, 문서를 PDF로 변환하는 서비스입니다.",
    intro: [
      "BTSPDF는 PDF를 문서로, 문서를 PDF로 변환하는 서비스입니다.",
      "형식 때문에 멈추는 문서 작업을 더 가볍게 만듭니다.",
    ],
    situations: [
      "PDF로 받은 자료를 다시 편집해야 할 때",
      "작성한 문서를 PDF로 공유해야 할 때",
      "문서 형식 변환에 드는 시간을 줄이고 싶을 때",
    ],
    accent: "#0F766E",
    accentSoft: "#EDF7F6",
    url: null,
    externalLabel: "BTSPDF 바로가기",
    seoDescription: "BTSPDF는 PDF를 문서로, 문서를 PDF로 변환하는 서비스입니다.",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

/** 문의 유형 (solution slug + 기타 유형) */
export const inquiryTypes = [
  ...solutions.map((s) => ({ value: s.slug as string, label: s.name })),
  { value: "partnership", label: "사업개발 및 파트너십" },
  { value: "distribution", label: "유통 및 판매 지원" },
  { value: "service", label: "서비스 의뢰" },
  { value: "voucher", label: "정부지원 바우처 협업" },
  { value: "other", label: "기타" },
] as const;

export function isValidInquiryType(value: unknown): value is string {
  return typeof value === "string" && inquiryTypes.some((t) => t.value === value);
}
