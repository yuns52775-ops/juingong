"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CtaButton, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "./cta-button";

const LINKS = [
  { href: "#samples", label: "샘플" },
  { href: "#process", label: "만드는 과정" },
  { href: "#themes", label: "테마" },
  { href: "#pricing", label: "가격" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
        <nav className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between rounded-full border border-ink/8 bg-paper/75 pl-6 pr-3 backdrop-blur-2xl dark:border-paper/10 dark:bg-forest-deep/70">
          <Link
            href="/"
            className="text-[17px] font-bold tracking-tight"
            onClick={() => setOpen(false)}
          >
            주인공
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-ink-soft transition-colors duration-300 hover:text-ink dark:text-moss dark:hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <CtaButton size="sm" />
          </div>

          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex size-11 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.94] md:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] dark:bg-paper ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] dark:bg-paper ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-paper/90 backdrop-blur-3xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden dark:bg-forest-deep/90 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`text-4xl font-semibold tracking-tight transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={PRIMARY_CTA_HREF}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "360ms" : "0ms" }}
            className={`mt-8 inline-flex w-fit items-center rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {PRIMARY_CTA_LABEL}
          </Link>
        </div>
      </div>
    </>
  );
}
