import type { Activity } from "@/features/workspaces/data";
import { cn } from "@/lib/cn";

const avatarColors = [
  "bg-brand text-white",
  "bg-lime text-ink",
  "bg-amber text-ink",
  "bg-signal text-ink",
];

export function ActivityList({ items }: { items: Activity[] }) {
  if (items.length === 0) {
    return (
      <p className="text-ink-soft px-5 py-8 text-center text-sm">No activity yet.</p>
    );
  }

  return (
    <ul className="divide-line divide-y-2">
      {items.map((item, index) => (
        <li key={item.id} className="flex items-start gap-4 px-5 py-4">
          <span
            aria-hidden="true"
            className={cn(
              "border-edge grid size-9 shrink-0 place-items-center rounded-full border-2 text-sm font-bold",
              avatarColors[index % avatarColors.length],
            )}
          >
            {item.actor.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-relaxed">
              <span className="font-bold">{item.actor}</span> {item.action}{" "}
              <span className="font-bold">{item.target}</span>
            </p>
            <p className="text-ink-soft mt-0.5 text-xs">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
