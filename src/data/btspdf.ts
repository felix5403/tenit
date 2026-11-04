/**
 * BTSPDF 상세 페이지 콘텐츠
 * 출처: 서비스 담당자 확인 내용 (btspdf.com 사이트 본문은 미확인)
 * 요금, 처리 속도, 지원 형식 세부 목록 등 확인되지 않은 내용은 넣지 마세요.
 */
export const btspdf = {
  hero: {
    eyebrow: "BTSPDF · Better Tools, Simple PDF",
    title: ["PDF와 문서 사이를", "자유롭게."],
    description:
      "PDF·이미지·오피스 파일 변환부터 압축과 페이지 정리까지. 필요한 파일 작업을 웹에서 간단하게 처리합니다.",
  },

  tools: {
    title: "자주 쓰는 파일 작업을 한곳에서",
    items: [
      { title: "오피스 ↔ PDF 변환", body: "Word·Excel·PowerPoint 문서를 PDF로, PDF를 다시 오피스 문서로 바꿉니다." },
      { title: "PDF ↔ 이미지 변환", body: "PDF와 이미지 파일 사이를 필요한 형식으로 변환합니다." },
      { title: "PDF 압축", body: "공유하거나 업로드하기 좋게 PDF 용량을 줄입니다." },
      { title: "페이지 정리", body: "PDF 페이지를 원하는 순서와 구성으로 정리합니다." },
    ],
  },

  features: {
    title: "가볍게 시작하고, 필요할 때 더 깊게",
    items: [
      { title: "로그인 없이 바로", body: "기본 기능은 회원가입이나 로그인 없이 사용할 수 있습니다." },
      { title: "한국어·영어 지원", body: "한국어와 영어 화면을 제공해 국내외 사용자가 함께 쓸 수 있습니다." },
      {
        title: "OCR 기반 문서 변환",
        body: "Pro에서는 PDF를 Word·Excel·PowerPoint로 바꿀 때 OCR 변환과 일반 변환 중 선택할 수 있습니다.",
        badge: "Pro",
      },
    ] as { title: string; body: string; badge?: string }[],
  },

  closing: {
    title: "문서 형식 때문에 멈추지 마세요.",
    description: "변환, 압축, 페이지 정리. 필요한 파일 작업을 BTSPDF에서 바로 시작하세요.",
  },
};
