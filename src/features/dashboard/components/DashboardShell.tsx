import type { ReactNode } from "react";

import type { Workspace } from "@/features/workspaces/data";

import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export type Theme = "light" | "dark";

interface DashboardShellProps {
  workspace: Workspace;
  workspaces: Workspace[];
  theme: Theme;
  children: ReactNode;
}

export function DashboardShell({ workspace, workspaces, theme, children }: DashboardShellProps) {
  return (
    <div id="app-shell" data-theme={theme} className="min-h-screen bg-paper text-ink lg:pl-64">
      <Sidebar workspace={workspace.slug} workspaceName={workspace.name} />
      <div className="flex min-h-screen flex-col">
        <TopBar workspace={workspace} workspaces={workspaces} theme={theme} />
        <main className="flex-1 px-5 pb-28 pt-8 lg:px-8 lg:pb-10">{children}</main>
      </div>
      <MobileNav workspace={workspace.slug} />
    </div>
  );
}