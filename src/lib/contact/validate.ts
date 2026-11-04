import { isValidInquiryType } from "@/data/solutions";

export type InquiryInput = {
  type: string;
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

export const LIMITS = {
  name: 50,
  email: 254,
  company: 100,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** 클라이언트·서버 공용 검증 */
export function validateInquiry(input: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (!isValidInquiryType(input.type)) errors.type = "문의 유형을 선택해 주세요.";

  if (!name) errors.name = "이름을 입력해 주세요.";
  else if (name.length > LIMITS.name) errors.name = `이름은 ${LIMITS.name}자 이내로 입력해 주세요.`;

  if (!email) errors.email = "이메일을 입력해 주세요.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = "올바른 이메일 형식으로 입력해 주세요. 예: name@company.com";

  if (input.company.trim().length > LIMITS.company)
    errors.company = `회사명은 ${LIMITS.company}자 이내로 입력해 주세요.`;

  if (!message) errors.message = "문의 내용을 입력해 주세요.";
  else if (message.length > LIMITS.message)
    errors.message = `문의 내용은 ${LIMITS.message.toLocaleString()}자 이내로 입력해 주세요.`;

  if (!input.consent) errors.consent = "개인정보 수집·이용에 동의해 주세요.";

  return errors;
}

export function normalizeInquiry(raw: unknown): InquiryInput {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  return {
    type: str(r.type),
    name: str(r.name).trim(),
    email: str(r.email).trim(),
    company: str(r.company).trim(),
    message: str(r.message).trim(),
    consent: r.consent === true,
  };
}
