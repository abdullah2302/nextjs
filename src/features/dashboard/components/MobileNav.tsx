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
      className="border-edge bg-surface fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 gap-1 border-t-2 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      {items.map((item) => {
        const active = isItemActive(pathname, item);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-bold",
              active ? "bg-lime text-ink" : "text-ink-soft",
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
