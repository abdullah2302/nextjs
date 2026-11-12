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
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-line bg-paper/90 px-5 backdrop-blur lg:px-8">
      <Breadcrumbs />

      <div className="flex items-center gap-2 sm:gap-3">
        <CommandPalette items={commands} />
        <ThemeToggle initialTheme={theme} />
        <details className="relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium">
            <span className="size-2 rounded-full bg-signal" />
            {workspace.name}
          </summary>
          <ul className="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-ink/10">
            {workspaces.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/app/${w.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-paper"
                  aria-current={w.slug === workspace.slug ? "true" : undefined}
                >
                  {w.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}