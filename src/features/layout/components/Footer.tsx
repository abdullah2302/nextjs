import Link from "next/link";

import { siteConfig } from "@/config/site";

const product = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];
const company = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Log in", href: "/login" },
];

export function Footer() {
  return (
    <footer className="bg-ink overflow-hidden text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-16 pb-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">
            {siteConfig.name} <span className="text-lime">✦</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
          <Link
            href="/signup"
            className="border-lime bg-lime text-ink mt-6 inline-block rounded-full border-2 px-6 py-2.5 text-sm font-bold"
          >
            Start free trial
          </Link>
        </div>
        <FooterColumn title="Product" links={product} />
        <FooterColumn title="Company" links={company} />
      </div>
      <p
        aria-hidden="true"
        className="font-display text-center text-[22vw] leading-[0.8] font-extrabold whitespace-nowrap text-white/[0.06] select-none"
      >
        TeamFlow
      </p>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-lime text-sm font-bold">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
