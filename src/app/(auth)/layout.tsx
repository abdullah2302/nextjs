import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="bg-paper grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="font-display mb-8 flex items-center justify-center gap-2 text-2xl font-bold"
        >
          <span className="bg-brand grid size-9 place-items-center rounded-lg text-white">
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
          TeamFlow
        </Link>
        <div className="border-line bg-surface shadow-ink/5 rounded-3xl border p-8 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
