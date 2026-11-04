import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/data/company";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const description =
  "테닛은 시장의 문제를 발견하고, AI로 해결하며, 지속 가능한 사업으로 발전시키는 사업개발 전문 스튜디오입니다.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${company.nameEn} 테닛 — ${company.tagline}`,
    template: `%s | ${company.nameEn} 테닛`,
  },
  description,
  applicationName: company.nameEn,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: `${company.nameEn} 테닛`,
    title: `${company.nameEn} 테닛 — ${company.tagline}`,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-dvh antialiased">
        <a href="#main" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
