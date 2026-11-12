import type { Metadata } from "next";

import { getProjects } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Team" };

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
      <h1 className="font-display text-4xl font-extrabold tracking-tight">Team</h1>
      <p className="text-ink-soft mt-2">People who own work in this workspace.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {owners.map((name) => (
          <li
            key={name}
            className="border-line bg-surface flex items-center gap-4 rounded-2xl border p-5"
          >
            <span className="bg-brand grid size-11 place-items-center rounded-full font-semibold text-white">
              {name.charAt(0)}
            </span>
            <div>
              <p className="font-semibold">{name}</p>
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
