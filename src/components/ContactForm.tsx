"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { inquiryTypes, isValidInquiryType } from "@/data/solutions";
import { LIMITS, validateInquiry, type InquiryErrors, type InquiryInput } from "@/lib/contact/validate";

type Status = "idle" | "submitting" | "success" | "error";

const fieldOrder: (keyof InquiryInput)[] = ["type", "name", "email", "company", "message", "consent"];

export function ContactForm({ enabled, fallbackEmail }: { enabled: boolean; fallbackEmail: string | null }) {
  const params = useSearchParams();
  // 우선순위: 유효한 type → 유효한 solution → 기본(미선택)
  const initialType = (() => {
    const type = params.get("type");
    if (isValidInquiryType(type)) return type;
    const solution = params.get("solution");
    return isValidInquiryType(solution) ? solution : "";
  })();

  const [values, setValues] = useState<InquiryInput>({
    type: initialType,
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  // 렌더 전 연속 클릭까지 막기 위한 동기 잠금
  const inFlight = useRef(false);

  const disabled = !enabled || status === "submitting";

  function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled || inFlight.current) return;

    const found = validateInquiry(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; fields?: InquiryErrors } | null;
      if (res.ok && data?.ok) {
        setStatus("success");
        setValues({ type: "", name: "", email: "", company: "", message: "", consent: false });
      } else {
        if (data?.fields) setErrors(data.fields);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const inputCls =
    "mt-2 block w-full border border-line-strong bg-white px-4 py-3 text-[16px] text-ink placeholder:text-[#8a909b] focus:border-cobalt focus:outline-none focus-visible:outline-2 focus-visible:outline-cobalt disabled:cursor-not-allowed disabled:bg-paper aria-[invalid=true]:border-[#c81e1e]";

  return (
    <div>
      {!enabled && (
        <div role="status" className="mb-8 border-l-4 border-[#b45309] bg-[#fdf6ec] px-5 py-4 text-[15px] leading-[1.7] text-ink">
          <p className="font-semibold">온라인 문의 접수가 아직 연결되지 않았습니다.</p>
          <p className="mt-1 text-ink-soft">
            현재 이 양식으로는 문의를 보낼 수 없습니다.
            {fallbackEmail ? (
              <>
                {" "}
                <a href={`mailto:${fallbackEmail}`} className="font-semibold text-cobalt underline underline-offset-4">
                  {fallbackEmail}
                </a>
                로 문의해 주세요.
              </>
            ) : (
              " 접수 채널이 준비되는 대로 이용하실 수 있습니다."
            )}
          </p>
        </div>
      )}

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === "success" && (
          <div className="mb-8 border-l-4 border-[#0f766e] bg-[#edf7f6] px-5 py-4 text-[15px] leading-[1.7]">
            <p className="font-semibold">문의가 접수되었습니다.</p>
            <p className="mt-1 text-ink-soft">남겨 주신 이메일로 확인 후 연락드리겠습니다.</p>
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="mb-8 border-l-4 border-[#c81e1e] bg-[#fdf1f1] px-5 py-4 text-[15px] leading-[1.7]">
            <p className="font-semibold">문의를 보내지 못했습니다.</p>
            <p className="mt-1 text-ink-soft">
              입력 내용을 확인한 뒤 잠시 후 다시 시도해 주세요.
              {fallbackEmail && (
                <>
                  {" "}
                  계속 문제가 있으면{" "}
                  <a href={`mailto:${fallbackEmail}`} className="font-semibold text-cobalt underline underline-offset-4">
                    {fallbackEmail}
                  </a>
                  로 연락해 주세요.
                </>
              )}
            </p>
          </div>
        )}
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="required-note">
        <p id="required-note" className="mb-6 text-[13px] text-muted">
          <span className="text-[#c81e1e]" aria-hidden="true">*</span> 표시는 필수 입력 항목입니다.
        </p>

        <fieldset disabled={disabled} className="grid gap-6">
          <legend className="sr-only">문의 정보</legend>

          <Field id="type" label="문의 유형" required error={errors.type}>
            <select
              id="type"
              name="type"
              value={values.type}
              onChange={(e) => update("type", e.target.value)}
              aria-invalid={!!errors.type}
              aria-describedby={errors.type ? "type-error" : undefined}
              required
              className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%3E%3Cpath%20d='M1%201l5%205%205-5'%20fill='none'%20stroke='%2315171c'%20stroke-width='1.5'/%3E%3C/svg%3E")] bg-[position:right_16px_center] bg-no-repeat pr-10`}
            >
              <option value="">선택해 주세요</option>
              {inquiryTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="이름" required error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={LIMITS.name}
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
                className={inputCls}
              />
            </Field>
            <Field id="company" label="회사명" error={errors.company}>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={LIMITS.company}
                value={values.company}
                onChange={(e) => update("company", e.target.value)}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
                className={inputCls}
              />
            </Field>
          </div>

          <Field id="email" label="이메일" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              maxLength={LIMITS.email}
              placeholder="name@company.com"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
              className={inputCls}
            />
          </Field>

          <Field id="message" label="문의 내용" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={7}
              maxLength={LIMITS.message}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={`message-count${errors.message ? " message-error" : ""}`}
              required
              className={`${inputCls} resize-y`}
            />
            <span id="message-count" className="mt-1 block text-right text-[12px] text-muted">
              {values.message.length.toLocaleString()} / {LIMITS.message.toLocaleString()}자
            </span>
          </Field>

          {/* 스팸 방지용 숨김 필드 */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">웹사이트</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={values.consent}
                onChange={(e) => update("consent", e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={`consent-desc${errors.consent ? " consent-error" : ""}`}
                required
                className="mt-1 h-5 w-5 shrink-0 accent-[#1a47d6]"
              />
              <label htmlFor="consent" className="text-[15px] leading-[1.6]">
                개인정보 수집·이용에 동의합니다. <span className="text-[#c81e1e]" aria-hidden="true">*</span>
                <span className="sr-only">(필수)</span>
              </label>
            </div>
            <p id="consent-desc" className="mt-2 pl-8 text-[13px] leading-[1.6] text-muted">
              문의 유형, 이름, 이메일, 회사명, 문의 내용을 문의 확인 및 답변을 위해 수집합니다. 자세한 내용은{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
                개인정보처리방침
              </Link>
              을 확인해 주세요.
            </p>
            {errors.consent && <ErrorText id="consent-error" className="pl-8">{errors.consent}</ErrorText>}
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={disabled}
          aria-disabled={disabled}
          className="mt-10 inline-flex h-13 w-full items-center justify-center bg-cobalt px-8 text-[16px] font-semibold text-white transition-colors hover:bg-cobalt-dark disabled:cursor-not-allowed disabled:bg-[#9aa1ad] sm:w-auto"
        >
          {!enabled ? "문의 접수 준비 중" : status === "submitting" ? "보내는 중…" : "문의 보내기"}
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-semibold">
        {label}
        {required ? (
          <>
            {" "}
            <span className="text-[#c81e1e]" aria-hidden="true">*</span>
            <span className="sr-only">(필수)</span>
          </>
        ) : (
          <span className="ml-1 font-normal text-muted">(선택)</span>
        )}
      </label>
      {children}
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <p id={id} className={`mt-2 text-[13px] font-medium text-[#b91c1c] ${className}`}>
      {children}
    </p>
  );
}
