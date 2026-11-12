import { cn } from "@/lib/cn";

const cases = [
  {
    who: "Agencies",
    line: "Run ten client projects without mixing them up.",
    pts: ["Client-based workspaces", "Per-project deadlines", "Shareable progress views"],
    style: "bg-lime text-ink",
  },
  {
    who: "Product teams",
    line: "Keep design, dev and QA moving in the same sprint.",
    pts: ["Sprint planning", "GitHub sync", "Release checklists"],
    style: "bg-brand text-white",
  },
  {
    who: "Startups",
    line: "Stay organised while the team doubles every quarter.",
    pts: ["Free to start", "Templates ready to use", "Grows to 100+ members"],
    style: "bg-surface text-ink",
  },
];

export function UseCases() {
  return (
    <section className="border-ink bg-paper border-y-2 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
          Built for the way your team works.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.who} className={cn("sticker sticker-hover p-7", c.style)}>
              <h3 className="font-display text-3xl font-extrabold">{c.who}</h3>
              <p className="mt-2 opacity-85">{c.line}</p>
              <ul className="mt-6 space-y-2 text-sm font-semibold">
                {c.pts.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden="true">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
