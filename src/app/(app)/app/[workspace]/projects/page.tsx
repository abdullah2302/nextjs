import type { Metadata } from "next";
import Link from "next/link";

import { getProjects } from "@/features/workspaces/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Projects" };

const statusStyle = {
  Active: "bg-lime text-ink",
  Planning: "bg-amber text-ink",
  Done: "bg-surface text-ink-soft",
} as const;

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace } = await params;
  const projects = await getProjects(workspace);

  return (
    <div>
      <p className="text-brand text-xs font-bold tracking-widest uppercase">Workspace</p>
      <h1 className="font-display mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Projects
      </h1>
      <p className="text-ink-soft mt-3">Every project in this workspace.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/app/${workspace}/projects/${p.id}`}
            className="sticker sticker-hover block p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-xl leading-tight font-extrabold">
                {p.name}
              </h2>
              <span
                className={cn(
                  "border-edge shrink-0 rounded-full border-2 px-2.5 py-0.5 text-xs font-bold",
                  statusStyle[p.status],
                )}
              >
                {p.status}
              </span>
            </div>
            <p className="text-ink-soft mt-1 text-sm">Owner: {p.owner}</p>
            <div className="border-edge bg-paper mt-5 h-3 overflow-hidden rounded-full border-2">
              <div className="bg-brand h-full" style={{ width: `${p.progress}%` }} />
            </div>
            <p className="text-ink-soft mt-2 text-xs font-medium">
              {p.progress}% complete · due {p.due}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-ink-soft mt-10 text-sm">
        Testing error handling?{" "}
        <Link
          href={`/app/${workspace}/projects/crash`}
          className="text-brand font-bold underline"
        >
          Open a project that fails
        </Link>
      </p>
    </div>
  );
}
