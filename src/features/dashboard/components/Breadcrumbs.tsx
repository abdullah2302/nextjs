"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

function prettify(segment: string): string {
  return decodeURIComponent(segment)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname();
  // "/app/acme/projects/website-relaunch" -> ["acme", "projects", "website-relaunch"]
  const segments = pathname.split("/").filter(Boolean).slice(1);

  const crumbs = segments.map((segment, index) => ({
    label: prettify(segment),
    href: `/app/${segments.slice(0, index + 1).join("/")}`,
    current: index === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="min-w-0">
      <ol className="flex items-center gap-2 text-sm">
        {crumbs.map((crumb, index) => (
          <li
            key={crumb.href}
            className={cn(
              "flex min-w-0 items-center gap-2",
              !crumb.current && "hidden sm:flex",
            )}
          >
            {index > 0 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
            {crumb.current ? (
              <span aria-current="page" className="text-ink truncate font-semibold">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
