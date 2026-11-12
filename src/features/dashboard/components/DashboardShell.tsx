import type { ReactNode } from "react";

import type { Workspace } from "@/features/workspaces/data";

import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface DashboardShellProps {
  workspace: Workspace;
  workspaces: Workspace[];
  children: ReactNode;
}

export function DashboardShell({ workspace, workspaces, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen lg:pl-64">
      <Sidebar workspace={workspace.slug} workspaceName={workspace.name} />
      <div className="flex min-h-screen flex-col">
        <TopBar workspace={workspace} workspaces={workspaces} />
        <main className="flex-1 px-5 pt-8 pb-28 lg:px-8 lg:pb-10">{children}</main>
      </div>
      <MobileNav workspace={workspace.slug} />
    </div>
  );
}
