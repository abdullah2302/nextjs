import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { DashboardShell } from "@/features/dashboard/components/DashboardShell";
import { getWorkspace, listWorkspaces } from "@/features/workspaces/data";

interface WorkspaceLayoutProps {
  children: ReactNode;
  params: Promise<{ workspace: string }>;
}

export default async function WorkspaceLayout({
  children,
  params,
}: WorkspaceLayoutProps) {
  const { workspace: slug } = await params;
  const workspace = getWorkspace(slug);

  // Invalid slug: handled by app/(app)/app/not-found.tsx (branded 404, no shell).
  if (!workspace) notFound();

  return (
    <DashboardShell workspace={workspace} workspaces={listWorkspaces()}>
      {children}
    </DashboardShell>
  );
}
