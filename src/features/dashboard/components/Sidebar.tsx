"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems, isItemActive } from "@/features/dashboard/nav";
import { cn } from "@/lib/cn";

import { NavIcon } from "./NavIcon";

export function Sidebar({
  workspace,
  workspaceName,
}: {
  workspace: string;
  workspaceName: string;
}) {
  const pathname = usePathname();
  const items = getNavItems(workspace);

  return (
    <aside className="bg-ink fixed inset-y-0 left-0 hidden w-64 flex-col text-white lg:flex">
      <Link
        href="/"
        className="font-display flex items-center gap-2 px-6 py-6 text-xl font-bold"
      >
        <span className="bg-brand grid size-8 place-items-center rounded-lg">
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

      <p className="px-6 pb-2 text-xs text-white/50">Workspace</p>
      <p className="font-display px-6 pb-5 text-lg font-semibold">{workspaceName}</p>

      <nav aria-label="Workspace" className="flex-1 space-y-1 px-3">
        {items.map((item) => {
          const active = isItemActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "text-ink bg-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/login"
        className="m-3 rounded-xl px-3 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white"
      >
        Log out
      </Link>
    </aside>
  );
}
