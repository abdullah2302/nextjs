import Link from "next/link";

import type { Workspace } from "@/features/workspaces/data";

import { Breadcrumbs } from "./Breadcrumbs";

export function TopBar({
  workspace,
  workspaces,
}: {
  workspace: Workspace;
  workspaces: Workspace[];
}) {
  return (
    <header className="border-line bg-paper/90 sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b px-5 backdrop-blur lg:px-8">
      <Breadcrumbs />

      <div className="flex items-center gap-3">
        <details className="relative">
          <summary className="border-line bg-surface flex cursor-pointer list-none items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="bg-signal size-2 rounded-full" />
            {workspace.name}
          </summary>
          <ul className="border-line bg-surface shadow-ink/10 absolute right-0 mt-2 w-52 rounded-2xl border p-2 shadow-xl">
            {workspaces.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/app/${w.slug}`}
                  className="hover:bg-paper block rounded-lg px-3 py-2 text-sm"
                  aria-current={w.slug === workspace.slug ? "true" : undefined}
                >
                  {w.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <Link
          href="/login"
          className="text-ink-soft hover:text-ink hidden text-sm sm:block lg:hidden"
        >
          Log out
        </Link>
      </div>
    </header>
  );
}
