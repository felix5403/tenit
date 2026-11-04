/**
 * Tenit Cloud 상세 페이지 콘텐츠 (출처: https://tenit.cloud/landing.html)
 * 성과 수치(생산성·비용 절감), 타사 비교, AI 모델 세부 버전은 의도적으로 넣지 않았습니다.
 */
export const tenitcloud = {
  hero: {
    eyebrow: "Tenit Cloud / 테닛클라우드",
    sub: "AI-Powered Localization Workspace",
    title: "번역의 다음 작업 환경.",
    description:
      "번역, 자막, QA, 프로젝트 관리를 하나의 플랫폼에서. 한국 시장에 맞춰 만든 AI 기반 차세대 CAT 플랫폼입니다.",
    stats: [
      { value: "50+", label: "지원 언어" },
      { value: "4개", label: "AI 모델 통합" },
      { value: "HWP·HWPX", label: "변환 없이 직접 처리" },
    ],
  },

  modules: {
    title: "번역 업무에 필요한 도구를 하나로",
    items: [
      {
        title: "번역 메모리 (TM)",
        body: "번역 자산을 쌓아 재사용하고, 100%·퍼지·컨텍스트 매칭을 자동으로 제안합니다.",
        points: ["프로젝트·고객사별 분리 관리", "번역 확정 시 자동 업데이트"],
      },
      {
        title: "용어집 (Termbase)",
        body: "승인 용어, 금칙어, 고객사별 용어집을 번역 중에 실시간으로 확인합니다.",
        points: ["에디터 내 용어 하이라이트", "금칙어 경고 및 차단"],
      },
      {
        title: "AI 번역",
        body: "OpenAI, Claude, Gemini, HyperCLOVA X 중 프로젝트에 맞는 모델을 선택합니다.",
        points: ["TM·용어집 컨텍스트 자동 반영", "사내 API 키 직접 연동"],
      },
      {
        title: "AI 검수",
        body: "태그, 숫자, 용어 오류와 번역 누락을 자동으로 찾아냅니다.",
        points: ["태그·숫자·날짜 형식 검증", "용어 일치 확인, 과번역 감지"],
      },
      {
        title: "자막 현지화",
        body: "SRT, VTT, ASS, XLIFF 파일을 CAT 환경에서 번역하고 검수합니다.",
        points: ["타임코드 기반 편집기", "SDH 자막과 OTT 규격 지원"],
      },
      {
        title: "프로젝트 관리",
        body: "작업 배정, 진행률, QA 상태, 납기를 대시보드에서 한눈에 관리합니다.",
        points: ["다국어 프로젝트 동시 관리", "번역·검수·PM 역할 기반 배정", "납기 알림, 진행률 자동 집계"],
      },
    ],
  },

  why: {
    title: "한국 시장을 위해 만든 CAT 플랫폼",
    items: [
      { title: "HWP/HWPX 직접 처리", body: "한글 문서를 변환 과정 없이 그대로 다룹니다." },
      { title: "완전한 한국어 인터페이스", body: "한국어 입력, 맞춤법 검사, 한국식 날짜 형식을 지원합니다." },
      { title: "국내 결제 지원", body: "신용카드, 계좌이체, 가상계좌로 결제할 수 있습니다." },
      { title: "전자세금계산서 자동 발행", body: "기업 고객의 정산 업무를 줄여 줍니다." },
      { title: "자막과 CAT를 하나로", body: "자막 번역과 CAT 에디터를 한 플랫폼에서 사용합니다." },
      { title: "보안에 맞춘 AI 연동", body: "보안이 필요하면 사내 API 키로 AI 모델을 연결할 수 있습니다." },
    ],
  },

  ai: {
    title: "필요한 AI 모델을 골라 씁니다",
    description:
      "프로젝트마다 번역에 쓸 모델을 선택합니다. 사내 API 키를 직접 연결하면 데이터가 외부 서버를 거치지 않도록 설정할 수 있습니다.",
    providers: [
      { name: "OpenAI", note: "GPT 계열 모델" },
      { name: "Claude", note: "Anthropic 모델" },
      { name: "Gemini", note: "Google 모델" },
      { name: "HyperCLOVA X", note: "NAVER Cloud 기반, 한국어 특화" },
    ],
  },

  audiences: {
    title: "이런 팀이 함께 씁니다",
    items: [
      { title: "개인 번역가", body: "나만의 TM과 용어집으로 작업 속도를 높입니다." },
      { title: "현지화 팀", body: "프로젝트와 품질 기준을 팀 단위로 관리합니다." },
      { title: "LSP", body: "여러 고객사와 언어의 프로젝트를 한곳에서 운영합니다." },
      { title: "기업", body: "사내 API 키 연동, 보안 옵션, 전담 지원을 제공합니다." },
      { title: "영상 제작팀", body: "자막 번역과 검수를 CAT 환경에서 처리합니다." },
      { title: "AI 데이터팀", body: "다국어 데이터 작업을 체계적으로 관리합니다." },
    ],
  },

  pricing: {
    /** false로 바꾸면 요금 섹션을 숨깁니다 */
    show: true,
    title: "요금제",
    summary: "월 요금은 USD 기준입니다.",
    plans: [
      { name: "Trial", price: "무료", words: "10,000단어", ai: "1,000단어", users: "1명", overage: "-" },
      { name: "Starter", price: "$29", words: "100,000단어", ai: "10,000단어", users: "최대 3명", overage: "$5 / 10,000단어" },
      {
        name: "Pro",
        price: "$99",
        words: "500,000단어",
        ai: "50,000단어",
        users: "최대 10명",
        overage: "$4 / 10,000단어",
        popular: true,
      },
      { name: "Advance", price: "$199", words: "1,500,000단어", ai: "200,000단어", users: "최대 30명", overage: "$3 / 10,000단어" },
      { name: "Enterprise", price: "문의", words: "맞춤", ai: "맞춤", users: "맞춤", overage: "-" },
    ] as { name: string; price: string; words: string; ai: string; users: string; overage: string; popular?: boolean }[],
    notes: [
      "Pro: 파일 분할 배정 포함 · Advance: 우선 지원",
      "Enterprise: 전용 워크스페이스, 사내 API 키 보안 연동, 맞춤 LLM 통합, 세금계산서 자동 발행, 전담 PM",
    ],
  },

  closing: {
    title: "더 빠르고 정확한 현지화를 시작하세요.",
    description: "번역 메모리부터 AI 검수, 자막, 프로젝트 관리까지 Tenit Cloud 하나로.",
  },
};
