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
    <header className="border-ink bg-paper/90 sticky top-0 z-40 border-b-2 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-display flex items-center gap-2 text-xl font-extrabold"
        >
          <span className="border-ink bg-lime grid size-8 place-items-center rounded-lg border-2">
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
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
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive(item.href) ? "bg-ink text-white" : "hover:bg-lime",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm font-semibold hover:underline">
            Log in
          </Link>
          <Link
            href="/signup"
            className="border-ink bg-ink rounded-full border-2 px-5 py-2 text-sm font-bold text-white shadow-[3px_3px_0_0_var(--color-lime)] transition-transform hover:-translate-y-0.5"
          >
            Start free
          </Link>
        </div>

        <button
          type="button"
          className="border-ink grid size-10 place-items-center rounded-lg border-2 md:hidden"
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
            strokeWidth="2.2"
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
          className="border-ink bg-paper border-t-2 px-5 pb-5 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-semibold",
                    isActive(item.href) ? "bg-ink text-white" : "",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="border-ink rounded-full border-2 px-5 py-3 text-center font-bold"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="border-ink bg-lime rounded-full border-2 px-5 py-3 text-center font-bold"
            >
              Start free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
