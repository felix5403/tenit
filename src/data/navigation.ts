import { solutions } from "./solutions";

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string; note?: string }[];
};

/** 사이트맵: HOME / SOLUTION / SERVICE / VOUCHER / CONTACT */
export const mainNav: NavItem[] = [
  { href: "/", label: "HOME" },
  {
    href: "/solutions",
    label: "SOLUTION",
    children: [
      { href: "/solutions", label: "솔루션 전체 보기" },
      ...solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name, note: s.headline })),
    ],
  },
  { href: "/service", label: "SERVICE" },
  { href: "/voucher", label: "VOUCHER" },
  { href: "/contact", label: "CONTACT" },
];

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
