import Link from "next/link";

import type { Project } from "@/features/workspaces/data";

export function ProjectProgress({
  workspace,
  projects,
}: {
  workspace: string;
  projects: Project[];
}) {
  return (
    <section className="sticker p-5">
      <h2 className="font-display text-xl font-extrabold">Project progress</h2>
      <ul className="mt-5 space-y-5">
        {projects.map((p) => (
          <li key={p.id}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <Link
                href={`/app/${workspace}/projects/${p.id}`}
                className="font-bold hover:underline"
              >
                {p.name}
              </Link>
              <span className="text-ink-soft font-semibold">{p.progress}%</span>
            </div>
            <div className="border-edge bg-paper mt-2 h-3 overflow-hidden rounded-full border-2">
              <div className="bg-brand h-full" style={{ width: `${p.progress}%` }} />
            </div>
          </li>
        ))}
        {projects.length === 0 && (
          <li className="text-ink-soft text-sm">No projects yet.</li>
        )}
      </ul>
    </section>
  );
}
