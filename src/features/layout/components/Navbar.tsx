"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-line bg-paper/85 sticky top-0 z-40 border-b backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-display flex items-center gap-2 text-xl font-bold">
          <span className="bg-brand grid size-8 place-items-center rounded-lg text-white">
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M4 8h10M4 16h16M14 8l3-3m-3 3l3 3" />
            </svg>
          </span>
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-ink text-white"
                    : "text-ink-soft hover:bg-line/60 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="text-ink-soft hover:text-ink rounded-full px-4 py-2 text-sm font-medium"
          >
            Log in
          </Link>
          <Link
            href="/#pricing"
            className="bg-brand hover:bg-brand-deep rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Start free trial
          </Link>
        </div>

        <button
          type="button"
          className="border-line grid size-10 place-items-center rounded-lg border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-line bg-paper border-t px-5 pb-5 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium",
                    isActive(item.href) ? "bg-ink text-white" : "text-ink-soft",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="border-line mt-3 block rounded-full border px-5 py-3 text-center font-semibold"
          >
            Log in
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setOpen(false)}
            className="bg-brand mt-3 block rounded-full px-5 py-3 text-center font-semibold text-white"
          >
            Start free trial
          </Link>
        </div>
      )}
    </header>
  );
}
