import type { Metadata } from "next";
import Link from "next/link";

import { getProjects, getWorkspace } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Overview" };

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace: slug } = await params;
  const workspace = getWorkspace(slug);
  const projects = await getProjects(slug);
  const active = projects.filter((p) => p.status === "Active").length;

  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Active now", value: active },
    { label: "Plan", value: workspace?.plan ?? "-" },
  ];

  return (
    <div>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">
        {workspace?.name}
      </h1>
      <p className="text-ink-soft mt-2">Here is where your team stands today.</p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border-line bg-surface rounded-2xl border p-5">
            <dt className="text-ink-soft text-sm">{s.label}</dt>
            <dd className="font-display text-brand mt-1 text-3xl font-extrabold">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display mt-10 text-xl font-bold">Recent projects</h2>
      <ul className="divide-line border-line bg-surface mt-4 divide-y rounded-2xl border">
        {projects.map((p) => (
          <li key={p.id}>
            <Link
              href={`/app/${slug}/projects/${p.id}`}
              className="hover:bg-paper flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="font-medium">{p.name}</span>
              <span className="text-ink-soft text-sm">{p.progress}%</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
