import type { Metadata } from "next";

import { ActivityList } from "@/features/overview/components/ActivityList";
import { CollapsiblePanel } from "@/features/overview/components/CollapsiblePanel";
import { StatCard } from "@/features/overview/components/StatCard";
import { getActivity, getOverviewStats, getWorkspace } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Overview" };

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace: slug } = await params;

  // Day 3 exercise: this prints in the TERMINAL running `npm run dev`, never in the browser.
  // eslint-disable-next-line no-console
  console.log("[server] OverviewPage rendered for", slug);

  const workspace = getWorkspace(slug);
  const [stats, activity] = await Promise.all([getOverviewStats(slug), getActivity(slug)]);

  return (
    <div>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">{workspace?.name}</h1>
      <p className="mt-2 text-ink-soft">Here is where your team stands today.</p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Projects" value={stats.projects} hint="In this workspace" />
        <StatCard label="Active now" value={stats.active} hint="Currently in progress" />
        <StatCard label="Average progress" value={`${stats.avgProgress}%`} hint="Across all projects" />
        <StatCard label="Due in 30 days" value={stats.dueSoon} hint="Not yet completed" />
      </dl>

      <CollapsiblePanel title="Recent activity">
        <ActivityList items={activity} />
      </CollapsiblePanel>
    </div>
  );
}