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

  const facts = [
    { l: "Status", v: project.status },
    { l: "Owner", v: project.owner },
    { l: "Due date", v: project.due },
  ];

  return (
    <div>
      <Link
        href={`/app/${workspace}/projects`}
        className="text-brand text-sm font-bold hover:underline"
      >
        ← Back to projects
      </Link>
      <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="marker">{project.name}</span>
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="sticker p-6">
          <div className="flex items-end justify-between">
            <p className="font-display text-6xl leading-none font-extrabold">
              {project.progress}%
            </p>
            <p className="text-ink-soft text-sm font-semibold">complete</p>
          </div>
          <div className="border-edge bg-paper mt-5 h-5 overflow-hidden rounded-full border-2">
            <div className="bg-brand h-full" style={{ width: `${project.progress}%` }} />
          </div>
        </div>

        <dl className="sticker divide-line divide-y-2">
          {facts.map((f) => (
            <div key={f.l} className="flex justify-between gap-4 px-5 py-4">
              <dt className="text-ink-soft">{f.l}</dt>
              <dd className="font-bold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
