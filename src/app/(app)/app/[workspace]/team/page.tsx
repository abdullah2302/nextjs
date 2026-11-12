import type { Metadata } from "next";

import { getProjects } from "@/features/workspaces/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Team" };

const colors = [
  "bg-brand text-white",
  "bg-lime text-ink",
  "bg-amber text-ink",
  "bg-signal text-ink",
];

export default async function TeamPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace } = await params;
  const projects = await getProjects(workspace);
  const owners = [...new Set(projects.map((p) => p.owner))];

  return (
    <div>
      <p className="text-brand text-xs font-bold tracking-widest uppercase">Workspace</p>
      <h1 className="font-display mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Team
      </h1>
      <p className="text-ink-soft mt-3">People who own work in this workspace.</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {owners.map((name, i) => (
          <li key={name} className="sticker sticker-hover flex items-center gap-4 p-5">
            <span
              className={cn(
                "border-edge font-display grid size-14 place-items-center rounded-full border-2 text-xl font-extrabold",
                colors[i % colors.length],
              )}
            >
              {name.charAt(0)}
            </span>
            <div>
              <p className="font-display text-lg font-bold">{name}</p>
              <p className="text-ink-soft text-sm">
                {projects.filter((p) => p.owner === name).length} project(s)
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
