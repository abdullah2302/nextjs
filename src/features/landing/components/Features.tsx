import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

function Tile({
  title,
  body,
  className,
  children,
}: {
  title: string;
  body: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("sticker sticker-hover flex flex-col p-6", className)}>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="text-ink-soft mt-2 max-w-md leading-relaxed">{body}</p>
      <div className="mt-6 flex-1">{children}</div>
    </div>
  );
}

const bars = [
  { n: "Sana", v: 82, c: "bg-amber" },
  { n: "Omar", v: 45, c: "bg-signal" },
  { n: "Ayesha", v: 63, c: "bg-brand" },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-ink bg-surface scroll-mt-20 border-y-2 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
          Features
        </p>
        <h2 className="font-display mt-2 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
          Everything your team needs, nothing it does not.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-6">
          <Tile
            className="lg:col-span-4"
            title="One board for every project"
            body="Drag tasks between stages, set owners and due dates, and see progress roll up automatically."
          >
            <div className="flex gap-3">
              {["Backlog", "Doing", "Review"].map((c, i) => (
                <div key={c} className="bg-paper flex-1 rounded-xl p-2.5">
                  <p className="text-ink-soft mb-2 text-[11px] font-bold uppercase">
                    {c}
                  </p>
                  {Array.from({ length: 3 - i }).map((_, j) => (
                    <div
                      key={j}
                      className="border-ink bg-surface mb-2 h-8 rounded-md border-2"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            title="Workload at a glance"
            body="Know who has room before you assign."
          >
            <div className="space-y-3">
              {bars.map((b) => (
                <div key={b.n}>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>{b.n}</span>
                    <span>{b.v}%</span>
                  </div>
                  <div className="border-ink bg-paper mt-1 h-3 overflow-hidden rounded-full border-2">
                    <div className={cn("h-full", b.c)} style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            title="Clear ownership"
            body="Exactly one owner and one deadline per task."
          >
            <div className="flex -space-x-3">
              {["bg-brand", "bg-lime", "bg-amber", "bg-signal"].map((c) => (
                <span
                  key={c}
                  className={cn("border-ink size-11 rounded-full border-2", c)}
                />
              ))}
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            title="Comments in context"
            body="Talk on the task so decisions stay with the work."
          >
            <div className="space-y-2 text-sm">
              <p className="border-ink bg-paper w-4/5 rounded-xl rounded-bl-none border-2 px-3 py-2">
                Can we ship Friday?
              </p>
              <p className="border-ink bg-lime ml-auto w-3/5 rounded-xl rounded-br-none border-2 px-3 py-2 font-medium">
                Yes, QA is done.
              </p>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            title="Works with your tools"
            body="Slack, GitHub and Google Calendar sync both ways."
          >
            <div className="flex flex-wrap gap-2">
              {["Slack", "GitHub", "Calendar", "Figma"].map((t) => (
                <span
                  key={t}
                  className="border-ink rounded-full border-2 px-3 py-1 text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
