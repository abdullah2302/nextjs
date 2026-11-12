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
    <aside className="border-edge bg-chrome fixed inset-y-0 left-0 hidden w-64 flex-col border-r-2 text-white lg:flex">
      <Link
        href="/"
        className="font-display flex items-center gap-2 px-6 py-6 text-xl font-extrabold"
      >
        <span className="border-lime bg-lime text-ink grid size-8 place-items-center rounded-lg border-2">
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

      <div className="mx-4 mb-6 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
        <p className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
          Workspace
        </p>
        <p className="font-display mt-0.5 text-lg font-bold">{workspaceName}</p>
      </div>

      <nav aria-label="Workspace" className="flex-1 space-y-1.5 px-4">
        {items.map((item) => {
          const active = isItemActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors",
                active
                  ? "bg-lime text-ink"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="bg-lime text-ink m-4 rounded-2xl p-4">
        <p className="font-display text-base font-extrabold">Invite your team</p>
        <p className="mt-1 text-xs leading-relaxed">
          Projects move faster with more hands on deck.
        </p>
        <Link
          href={`/app/${workspace}/team`}
          className="bg-ink mt-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold text-white"
        >
          Invite people
        </Link>
      </div>

      <Link
        href="/login"
        className="mx-4 mb-4 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white"
      >
        Log out
      </Link>
    </aside>
  );
}
