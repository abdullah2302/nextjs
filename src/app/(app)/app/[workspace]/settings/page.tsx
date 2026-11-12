import type { Metadata } from "next";

import { getWorkspace } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Settings" };

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ workspace: string }>;
}) {
  const { workspace: slug } = await params;
  const workspace = getWorkspace(slug);

  return (
    <div>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">Settings</h1>
      <p className="text-ink-soft mt-2">Basic details for this workspace.</p>
      <dl className="divide-line border-line bg-surface mt-8 max-w-xl divide-y rounded-2xl border">
        {[
          ["Name", workspace?.name],
          ["Address", `/app/${slug}`],
          ["Plan", workspace?.plan],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 px-5 py-4">
            <dt className="text-ink-soft">{label}</dt>
            <dd className="font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
