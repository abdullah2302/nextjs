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

  const rows = [
    { l: "Name", v: workspace?.name },
    { l: "Address", v: `/app/${slug}` },
    { l: "Plan", v: workspace?.plan },
  ];

  return (
    <div>
      <p className="text-brand text-xs font-bold tracking-widest uppercase">Workspace</p>
      <h1 className="font-display mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Settings
      </h1>
      <p className="text-ink-soft mt-3">Basic details for this workspace.</p>

      <dl className="sticker divide-line mt-8 max-w-xl divide-y-2">
        {rows.map((r) => (
          <div key={r.l} className="flex justify-between gap-4 px-5 py-4">
            <dt className="text-ink-soft">{r.l}</dt>
            <dd className="font-bold">{r.v}</dd>
          </div>
        ))}
      </dl>

      <div className="border-edge mt-6 max-w-xl rounded-2xl border-2 border-dashed p-5">
        <p className="font-display text-lg font-bold">Danger zone</p>
        <p className="text-ink-soft mt-1 text-sm">
          Deleting a workspace removes all of its projects. This demo build does not
          delete anything.
        </p>
      </div>
    </div>
  );
}
