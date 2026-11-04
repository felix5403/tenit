import Link from "next/link";
import { company, getCompanyDetails } from "@/data/company";
import { solutions } from "@/data/solutions";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const details = getCompanyDetails();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-4 text-[15px] text-ink-soft">
            {company.legalName} / {company.nameEn}
          </p>
          <p className="mt-1 text-[14px] text-muted">{company.tagline}</p>

          {details.length > 0 && (
            <dl className="mt-6 grid gap-1 text-[13px] text-muted">
              {details.map((d) => (
                <div key={d.label} className="flex gap-2">
                  <dt className="shrink-0">{d.label}</dt>
                  <dd>
                    {d.href ? (
                      <a href={d.href} className="hover:text-ink">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <nav aria-label="솔루션" className="md:col-span-4">
          <h2 className="text-[13px] font-semibold text-ink">
            <Link href="/solutions" className="hover:underline">
              Solution
            </Link>
          </h2>
          <ul className="mt-4 grid gap-3 text-[14px] text-ink-soft">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="회사" className="md:col-span-3">
          <h2 className="text-[13px] font-semibold text-ink">Company</h2>
          <ul className="mt-4 grid gap-3 text-[14px] text-ink-soft">
            {[
              { href: "/service", label: "서비스" },
              { href: "/voucher", label: "바우처 사업" },
              { href: "/contact", label: "문의하기" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="font-semibold text-ink hover:underline">
                개인정보처리방침
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-[1200px] px-5 py-6 text-[13px] text-muted sm:px-8">
          © {year} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
