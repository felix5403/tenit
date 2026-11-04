"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { isActive, mainNav, type NavItem } from "@/data/navigation";
import { Wordmark } from "./Wordmark";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${open ? "rotate-180" : ""}`}>
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** 데스크톱 드롭다운 (클릭·키보드·마우스 오버) */
function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, item.href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="nav-solution"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 py-2 hover:text-ink ${active ? "text-ink" : ""}`}
      >
        {item.label}
        <Chevron open={open} />
      </button>
      <div
        id="nav-solution"
        hidden={!open}
        className="absolute top-full left-1/2 w-[320px] -translate-x-1/2 pt-4"
      >
        <ul className="border border-line bg-white py-2 tracking-normal shadow-[0_8px_24px_rgba(21,23,28,0.08)]">
          {item.children!.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                aria-current={pathname === c.href ? "page" : undefined}
                className="block px-5 py-3 hover:bg-paper aria-[current=page]:text-cobalt"
              >
                <span className="block text-[15px] font-semibold text-ink">{c.label}</span>
                {c.note && <span className="mt-0.5 block text-[13px] font-normal text-muted">{c.note}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
      if (e.key === "Tab" && panelRef.current) {
        const items = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a")].filter(
          Boolean,
        ) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 900px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="TENIT 홈" className="-ml-1 px-1 py-2">
          <Wordmark />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden min-[900px]:block">
          <ul className="flex items-center gap-9 text-[14px] font-semibold tracking-[0.06em] text-ink-soft">
            {mainNav.map((n) =>
              n.children ? (
                <DesktopDropdown key={n.href} item={n} pathname={pathname} />
              ) : (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="py-2 hover:text-ink aria-[current=page]:text-ink"
                    aria-current={isActive(pathname, n.href) ? "page" : undefined}
                  >
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-10 items-center bg-ink px-5 text-[14px] font-semibold text-white transition-colors hover:bg-cobalt sm:inline-flex"
          >
            협업 문의
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform ${open ? "top-[5px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto border-t border-line bg-white min-[900px]:hidden"
      >
        <nav aria-label="모바일 메뉴" className="px-5 pt-2 pb-10">
          <ul>
            {mainNav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <Link
                  href={n.href}
                  onClick={() => close()}
                  aria-current={isActive(pathname, n.href) && !n.children ? "page" : undefined}
                  className="flex items-center justify-between py-4 text-[20px] font-bold tracking-[0.04em] aria-[current=page]:text-cobalt"
                >
                  {n.label}
                </Link>
                {n.children && (
                  <ul className="-mt-1 pb-4">
                    {n.children
                      .filter((c) => c.href !== n.href)
                      .map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => close()}
                            aria-current={pathname === c.href ? "page" : undefined}
                            className="block py-2.5 pl-4 text-[16px] text-ink-soft aria-[current=page]:font-semibold aria-[current=page]:text-cobalt"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => close()}
            className="mt-8 flex h-13 items-center justify-center bg-cobalt text-[16px] font-semibold text-white"
          >
            협업 문의
          </Link>
        </nav>
      </div>
    </header>
  );
}
