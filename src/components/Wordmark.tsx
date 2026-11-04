/** 로고 파일이 준비되기 전까지 사용하는 텍스트 워드마크 */
export function Wordmark({ className = "", inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline text-[21px] leading-none font-extrabold tracking-[0.14em] ${inverse ? "text-white" : "text-ink"} ${className}`}
    >
      TENIT
      <span aria-hidden="true" className="ml-[3px] inline-block h-[6px] w-[6px] bg-cobalt" />
    </span>
  );
}
