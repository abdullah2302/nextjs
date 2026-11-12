import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProject } from "@/features/workspaces/data";

interface PageProps {
  params: Promise<{ workspace: string; projectId: string }>;
}

export const metadata: Metadata = { title: "Project" };

export default async function ProjectPage({ params }: PageProps) {
  const { workspace, projectId } = await params;

  // Demo: this id always fails so you can see the route-level error boundary.
  if (projectId === "crash") {
    throw new Error("The project service did not respond.");
  }

  const project = await getProject(workspace, projectId);
  if (!project) notFound();

  return (
    <div>
      <Link
        href={`/app/${workspace}/projects`}
        className="text-brand text-sm font-medium hover:underline"
      >
        Back to projects
      </Link>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight">
        {project.name}
      </h1>
      <p className="text-ink-soft mt-2">
        Owned by {project.owner}. Due {project.due}.
      </p>

      <div className="border-line bg-surface mt-8 max-w-xl rounded-2xl border p-6">
        <div className="flex justify-between text-sm">
          <span className="font-semibold">{project.status}</span>
          <span className="text-ink-soft">{project.progress}% complete</span>
        </div>
        <div className="bg-paper mt-3 h-3 overflow-hidden rounded-full">
          <div
            className="bg-brand h-full rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
