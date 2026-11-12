"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems, isItemActive } from "@/features/dashboard/nav";
import { cn } from "@/lib/cn";

import { NavIcon } from "./NavIcon";

export function MobileNav({ workspace }: { workspace: string }) {
  const pathname = usePathname();
  const items = getNavItems(workspace);

  return (
    <nav
      aria-label="Workspace"
      className="border-line bg-surface fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      {items.map((item) => {
        const active = isItemActive(pathname, item);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-1 border-t-2 py-2.5 text-[11px] font-medium",
              active ? "border-brand text-brand" : "text-ink-soft border-transparent",
            )}
          >
            <NavIcon path={item.icon} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
