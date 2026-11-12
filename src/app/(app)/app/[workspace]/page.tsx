import type { Metadata } from "next";

import { ActivityList } from "@/features/overview/components/ActivityList";
import { CollapsiblePanel } from "@/features/overview/components/CollapsiblePanel";
import { ProjectProgress } from "@/features/overview/components/ProjectProgress";
import { StatCard } from "@/features/overview/components/StatCard";
import {
  getActivity,
  getOverviewStats,
  getProjects,
  getWorkspace,
} from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Overview" };

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace: slug } = await params;
  const workspace = getWorkspace(slug);
  const [stats, activity, projects] = await Promise.all([
    getOverviewStats(slug),
    getActivity(slug),
    getProjects(slug),
  ]);

  return (
    <div>
      <p className="text-brand text-xs font-bold tracking-widest uppercase">Overview</p>
      <h1 className="font-display mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="marker">{workspace?.name}</span>
      </h1>
      <p className="text-ink-soft mt-3">Here is where your team stands today.</p>

      <dl className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="lime"
          label="Projects"
          value={stats.projects}
          hint="In this workspace"
        />
        <StatCard
          tone="brand"
          label="Active now"
          value={stats.active}
          hint="Currently in progress"
        />
        <StatCard
          tone="white"
          label="Avg progress"
          value={`${stats.avgProgress}%`}
          hint="Across all projects"
        />
        <StatCard
          tone="ink"
          label="Due in 30 days"
          value={stats.dueSoon}
          hint="Not yet completed"
        />
      </dl>

      <div className="mt-8 grid items-start gap-6 xl:grid-cols-[1.5fr_1fr]">
        <CollapsiblePanel title="Recent activity">
          <ActivityList items={activity} />
        </CollapsiblePanel>
        <ProjectProgress workspace={slug} projects={projects} />
      </div>
    </div>
  );
}
