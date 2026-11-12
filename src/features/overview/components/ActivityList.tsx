import type { Activity } from "@/features/workspaces/data";

export function ActivityList({ items }: { items: Activity[] }) {
  if (items.length === 0) {
    return <p className="px-5 py-8 text-center text-sm text-ink-soft">No activity yet.</p>;
  }

  return (
    <ul className="divide-y divide-line">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-4 px-5 py-4">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white"
          >
            {item.actor.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">{item.actor}</span> {item.action}{" "}
              <span className="font-semibold">{item.target}</span>
            </p>
            <p className="mt-0.5 text-xs text-ink-soft">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}