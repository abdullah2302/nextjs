import type { Metadata } from "next";
import Link from "next/link";

import { getProjects } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Projects" };

const statusStyle = {
  Active: "bg-signal/15 text-emerald-700",
  Planning: "bg-amber/15 text-amber-700",
  Done: "bg-ink/10 text-ink-soft",
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
      <h1 className="font-display text-4xl font-extrabold tracking-tight">Projects</h1>
      <p className="text-ink-soft mt-2">Every project in this workspace.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/app/${workspace}/projects/${p.id}`}
            className="border-line bg-surface hover:border-brand rounded-2xl border p-5 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-lg font-bold">{p.name}</h2>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="text-ink-soft mt-1 text-sm">Owner: {p.owner}</p>
            <div className="bg-paper mt-5 h-2 overflow-hidden rounded-full">
              <div
                className="bg-brand h-full rounded-full"
                style={{ width: `${p.progress}%` }}
              />
            </div>
            <p className="text-ink-soft mt-2 text-xs">
              {p.progress}% complete · due {p.due}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-ink-soft mt-10 text-sm">
        Testing error handling?{" "}
        <Link
          href={`/app/${workspace}/projects/crash`}
          className="text-brand font-semibold hover:underline"
        >
          Open a project that fails
        </Link>
      </p>
    </div>
  );
}
