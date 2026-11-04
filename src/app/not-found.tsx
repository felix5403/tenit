import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="font-mono text-[13px] text-cobalt">404</p>
      <h1 className="mt-4 text-[32px] font-bold tracking-[-0.03em] sm:text-[40px]">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-4 text-[16px] text-ink-soft">주소가 바뀌었거나 존재하지 않는 페이지입니다.</p>
      <div className="mt-10">
        <ButtonLink href="/">홈으로</ButtonLink>
      </div>
    </Container>
  );
}
