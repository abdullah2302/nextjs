import Link from "next/link";
import type { ReactNode } from "react";

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="font-display inline-flex items-center gap-2 text-2xl font-extrabold"
    >
      <span
        className={`grid size-9 place-items-center rounded-lg border-2 ${dark ? "border-lime bg-lime text-ink" : "border-ink bg-lime"}`}
      >
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
      TeamFlow
    </Link>
  );
}

const perks = [
  "One board for every project",
  "Clear owners and deadlines",
  "Free for 14 days, no card needed",
];

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
      <aside className="bg-grid-dark bg-ink hidden flex-col justify-between p-12 text-white lg:flex">
        <Logo dark />
        <div>
          <h2 className="font-display text-5xl leading-[1.02] font-extrabold">
            Work that actually <span className="text-lime">flows.</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-lg">
                <span
                  aria-hidden="true"
                  className="bg-lime text-ink grid size-6 place-items-center rounded-full text-sm font-bold"
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <figure className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <blockquote className="leading-relaxed text-white/85">
            “We dropped two tools and our Monday status meeting. The board tells us
            everything.”
          </blockquote>
          <figcaption className="mt-3 text-sm text-white/55">
            Ayesha Noor, Head of Design
          </figcaption>
        </figure>
      </aside>

      <div className="bg-grid grid place-items-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Logo />
          </div>
          <div className="sticker p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
