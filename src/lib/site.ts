/** 배포 URL. NEXT_PUBLIC_SITE_URL 환경변수로 설정합니다. */
export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  try {
    if (raw) return new URL(raw);
  } catch {
    // 잘못된 값이면 기본값 사용
  }
  return new URL("http://localhost:3000");
}
