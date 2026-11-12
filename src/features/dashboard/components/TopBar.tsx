import Link from "next/link";

import { getNavItems } from "@/features/dashboard/nav";
import type { Workspace } from "@/features/workspaces/data";

import { Breadcrumbs } from "./Breadcrumbs";
import { CommandPalette, type CommandItem } from "./CommandPalette";
import type { Theme } from "./DashboardShell";
import { ThemeToggle } from "./ThemeToggle";

interface TopBarProps {
  workspace: Workspace;
  workspaces: Workspace[];
  theme: Theme;
}

export function TopBar({ workspace, workspaces, theme }: TopBarProps) {
  const commands: CommandItem[] = [
    ...getNavItems(workspace.slug).map((item) => ({
      id: item.href,
      label: `Go to ${item.label}`,
      href: item.href,
      group: "Navigate",
    })),
    ...workspaces.map((w) => ({
      id: `workspace-${w.slug}`,
      label: `Switch to ${w.name}`,
      href: `/app/${w.slug}`,
      group: "Workspace",
    })),
    { id: "logout", label: "Log out", href: "/login", group: "Account" },
  ];

  return (
    <header className="border-edge bg-paper/90 sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b-2 px-5 backdrop-blur lg:px-8">
      <Breadcrumbs />

      <div className="flex items-center gap-2 sm:gap-3">
        <CommandPalette items={commands} />
        <ThemeToggle initialTheme={theme} />
        <details className="relative">
          <summary className="border-edge bg-surface flex cursor-pointer list-none items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold">
            <span className="bg-signal size-2.5 rounded-full" />
            <span className="max-w-28 truncate">{workspace.name}</span>
          </summary>
          <ul className="sticker absolute right-0 mt-3 w-56 p-2 shadow-[3px_3px_0_0_var(--color-edge)]">
            {workspaces.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/app/${w.slug}`}
                  className="hover:bg-lime hover:text-ink block rounded-lg px-3 py-2 text-sm font-medium"
                  aria-current={w.slug === workspace.slug ? "true" : undefined}
                >
                  {w.name}
                  {w.slug === workspace.slug && (
                    <span className="float-right text-xs">●</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
