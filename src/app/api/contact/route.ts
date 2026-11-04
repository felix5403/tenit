import { NextResponse } from "next/server";
import { isContactConfigured, sendInquiry } from "@/lib/contact/provider";
import { normalizeInquiry, validateInquiry } from "@/lib/contact/validate";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isContactConfigured()) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  // 스팸 방지용 숨김 필드: 값이 있으면 조용히 무시
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const input = normalizeInquiry(body);
  const errors = validateInquiry(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  const result = await sendInquiry(input);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
