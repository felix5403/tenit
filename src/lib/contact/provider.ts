/**
 * 문의 제출 연동 모듈 (서버 전용)
 *
 * 지원 방식 (README 참고):
 *  - CONTACT_PROVIDER=resend  : Resend API로 메일 발송
 *      RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL 필요
 *  - CONTACT_PROVIDER=webhook : 지정한 URL로 JSON POST
 *      CONTACT_WEBHOOK_URL 필요 (CONTACT_WEBHOOK_SECRET 선택)
 *
 * 설정이 없으면 미연결 상태로 간주하고 폼 제출을 막습니다.
 * 개인정보·문의 내용은 로그로 남기지 않습니다.
 */
import { inquiryTypes } from "@/data/solutions";
import type { InquiryInput } from "./validate";

type Provider = "resend" | "webhook";

function env(name: string) {
  return process.env[name]?.trim() || "";
}

function getProvider(): Provider | null {
  const p = env("CONTACT_PROVIDER").toLowerCase();
  if (p === "resend" && env("RESEND_API_KEY") && env("CONTACT_TO_EMAIL") && env("CONTACT_FROM_EMAIL"))
    return "resend";
  if (p === "webhook" && env("CONTACT_WEBHOOK_URL")) return "webhook";
  return null;
}

export function isContactConfigured(): boolean {
  return getProvider() !== null;
}

function typeLabel(value: string) {
  return inquiryTypes.find((t) => t.value === value)?.label ?? value;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type SendResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

export async function sendInquiry(input: InquiryInput): Promise<SendResult> {
  const provider = getProvider();
  if (!provider) return { ok: false, reason: "not_configured" };

  const payload = {
    type: input.type,
    typeLabel: typeLabel(input.type),
    name: input.name,
    email: input.email,
    company: input.company,
    message: input.message,
    consent: input.consent,
    submittedAt: new Date().toISOString(),
  };

  try {
    if (provider === "resend") {
      const rows: [string, string][] = [
        ["문의 유형", payload.typeLabel],
        ["이름", payload.name],
        ["이메일", payload.email],
        ["회사명", payload.company || "-"],
        ["접수 시각", payload.submittedAt],
      ];
      const html =
        `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">` +
        rows.map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v)}</td></tr>`).join("") +
        `</table><p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px">${escapeHtml(payload.message)}</p>`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env("RESEND_API_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env("CONTACT_FROM_EMAIL"),
          to: env("CONTACT_TO_EMAIL").split(",").map((s) => s.trim()).filter(Boolean),
          reply_to: payload.email,
          subject: `[TENIT 문의] ${payload.typeLabel} · ${payload.name}`,
          html,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? { ok: true } : { ok: false, reason: "failed" };
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const secret = env("CONTACT_WEBHOOK_SECRET");
    if (secret) headers["X-Webhook-Secret"] = secret;
    const res = await fetch(env("CONTACT_WEBHOOK_URL"), {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    // 의도적으로 상세 내용을 기록하지 않음 (개인정보 보호)
    return { ok: false, reason: "failed" };
  }
}
