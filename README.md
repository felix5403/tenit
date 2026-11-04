# TENIT 공식 웹사이트

주식회사 테닛(TENIT) 기업 웹사이트. Next.js 15 App Router + TypeScript + Tailwind CSS v4.

## 실행

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run lint
npx tsc --noEmit
npm run build && npm run start
```

## 사이트맵

| 메뉴 | 경로 | 내용 |
| --- | --- | --- |
| HOME | `/` | Hero · About · 솔루션/서비스/바우처 요약 · 협업 CTA |
| SOLUTION | `/solutions` | 솔루션 4종 소개 (헤더 드롭다운) |
| └ | `/solutions/tenit-cloud` · `btspdf` | 솔루션 상세 (공통 템플릿) |
| └ | `/solutions/beshop-ai` | 비숍 전용 페이지 (beshop.ai 기반) |
| └ | `/solutions/blackguard` | 블랙가드 전용 페이지 (소개서 기반) |
| SERVICE | `/service` | 서비스 영역 (현지화·디자인·개발·마케팅·품질 검수) |
| VOUCHER | `/voucher` | 공급기업 참여 정부 지원사업 |
| CONTACT | `/contact` | 문의 폼 (`?solution=<값>`으로 유형 자동 선택) |
| (푸터) | `/privacy` | 개인정보처리방침 **초안** (noindex) |

문의 유형 값: `tenit-cloud`, `beshop-ai`, `blackguard`, `btspdf`, `partnership`, `service`, `voucher`, `other`

## 콘텐츠 수정

| 파일 | 내용 |
| --- | --- |
| `src/data/company.ts` | 회사 정보. **빈 값은 화면에 표시되지 않음** |
| `src/data/solutions.ts` | 제품명, 헤드라인, 설명, 필요한 상황, 포인트 색, 서비스 URL, 문의 유형 |
| `src/data/blackguard.ts` | 블랙가드 페이지 문구·프로세스·수집 채널·요금 (`pricing.show`로 요금 표시 여부) |
| `src/data/beshop.ts` | 비숍 페이지 문구·기능·요금·FAQ (`pricing.show`로 요금 표시 여부) |
| `src/data/services.ts` | SERVICE 페이지 서비스 영역 |
| `src/data/vouchers.ts` | 바우처 사업 목록, 수요기업 예시, 안내 문구 |
| `src/data/navigation.ts` | 헤더 메뉴 (사이트맵) |
| `src/components/visuals/` | 제품별 서비스 콘셉트 비주얼 |

- 제품 `url`에 실제 주소를 넣으면 상세 페이지에 외부 서비스 이동 버튼이 나타납니다. 비어 있으면 `도입 문의하기`만 표시됩니다.
- `company.contactEmail`을 넣으면 푸터와 문의 페이지에 이메일 링크가 표시됩니다.

## 환경변수

`.env.example`을 `.env.local`로 복사해 사용합니다. 문의 관련 값은 서버에서만 읽습니다.

| 변수 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 배포 도메인 (canonical, OG, sitemap) |
| `CONTACT_PROVIDER` | `resend` 또는 `webhook`. 비어 있으면 문의 폼 비활성화 |
| `RESEND_API_KEY` | Resend API 키 |
| `CONTACT_TO_EMAIL` | 문의 수신 주소 (쉼표로 여러 개) |
| `CONTACT_FROM_EMAIL` | 발신 주소 (Resend에서 인증한 도메인) |
| `CONTACT_WEBHOOK_URL` | webhook 방식일 때 JSON을 POST할 주소 |
| `CONTACT_WEBHOOK_SECRET` | 선택. `X-Webhook-Secret` 헤더로 전송 |

### 문의 연동 방법

연동 코드는 `src/lib/contact/provider.ts` 한 곳에 있습니다.

**Resend**
1. Resend에서 발신 도메인 인증 → API 키 발급
2. `CONTACT_PROVIDER=resend`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` 설정
3. 문의자의 이메일이 `reply_to`로 들어가 바로 답장할 수 있습니다

**Webhook** (Slack·Make·Zapier·Supabase Edge Function 등)
1. `CONTACT_PROVIDER=webhook`, `CONTACT_WEBHOOK_URL` 설정
2. 전송 JSON: `type, typeLabel, name, email, company, message, consent, submittedAt`

다른 방식(Supabase 테이블 저장 등)은 `sendInquiry()`에 분기를 추가하면 됩니다.

동작 원칙
- 설정이 없으면 폼이 비활성화되고 "연결되지 않음" 안내가 표시됩니다. 성공 메시지는 실제 전송이 성공했을 때만 표시됩니다.
- 서버에서도 동일한 검증(`src/lib/contact/validate.ts`)을 수행합니다.
- 개인정보·문의 내용은 콘솔/로그에 남기지 않습니다.
- 숨김 필드(honeypot)로 단순 스팸을 거릅니다. 필요하면 rate limit을 추가하세요.
- 환경변수를 바꾼 뒤에는 재배포(재시작)해야 반영됩니다.

## 배포 전 확인 항목

**회사 정보** (`src/data/company.ts`)
- [ ] 대표자, 사업자등록번호, 주소, 전화번호, 공개 문의 이메일

**제품** (`src/data/solutions.ts`)
- [ ] 제품별 실제 서비스 URL
- [ ] 콘셉트 비주얼을 실제 화면으로 교체할지 여부
- [ ] 로고 파일 (현재 텍스트 워드마크 사용 — `src/components/Wordmark.tsx`)

**개인정보처리방침** (`src/app/privacy/page.tsx` — "확정 필요" 표시 항목)
- [ ] 보유 및 이용 기간
- [ ] 처리 위탁 업체(메일 발송, 호스팅 등)와 위탁 업무
- [ ] 국외 이전 여부 (Resend·Vercel 등 해외 서비스 사용 시 필요)
- [ ] 자동 수집 정보(접속 기록 등) 해당 여부
- [ ] 개인정보 보호책임자 성명·직책·연락처
- [ ] 시행일
- [ ] 법률 검토 후 초안 표시와 `robots: noindex` 제거

**인프라**
- [ ] `NEXT_PUBLIC_SITE_URL` 실제 도메인으로 설정
- [ ] 문의 연동 환경변수 설정 및 실제 수신 테스트
