import Link from "next/link";

const columns = [
  {
    title: "To do",
    cards: [
      { t: "Draft Q1 launch brief", tag: "Planning", tilt: "-1deg", delay: "100ms" },
      { t: "Review pricing copy", tag: "Content", tilt: "1deg", delay: "250ms" },
    ],
  },
  {
    title: "In progress",
    cards: [
      { t: "Onboarding flow v2", tag: "Design", tilt: "1.5deg", delay: "400ms" },
      { t: "Fix invite email bug", tag: "Dev", tilt: "-1deg", delay: "550ms" },
    ],
  },
  {
    title: "Shipped",
    cards: [
      { t: "Dark mode for dashboard", tag: "Dev", tilt: "-1.5deg", delay: "700ms" },
    ],
  },
];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
      <div>
        <h1 className="font-display text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Move work forward, not paperwork.
        </h1>
        <p className="text-ink-soft mt-6 max-w-lg text-lg leading-relaxed">
          TeamFlow puts every project, task and deadline on one shared board, so your team
          always knows what is next and who owns it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#pricing"
            className="bg-brand shadow-brand/25 hover:bg-brand-deep rounded-full px-7 py-3.5 font-semibold text-white shadow-lg transition-colors"
          >
            Start free trial
          </Link>
          <Link
            href="/#features"
            className="border-ink/15 bg-surface hover:border-ink/40 rounded-full border px-7 py-3.5 font-semibold transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="text-ink-soft mt-5 text-sm">14 days free. No credit card needed.</p>
      </div>

      <div
        className="border-line bg-surface shadow-ink/5 rounded-3xl border p-4 shadow-xl sm:p-5"
        aria-label="Example TeamFlow board"
        role="img"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-lg font-bold">Website relaunch</p>
          <div className="flex -space-x-2">
            {["bg-brand", "bg-signal", "bg-amber"].map((c) => (
              <span
                key={c}
                className={`border-surface size-7 rounded-full border-2 ${c}`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {columns.map((col) => (
            <div key={col.title} className="bg-paper rounded-2xl p-2.5">
              <p className="text-ink-soft mb-2 px-1 text-xs font-semibold">{col.title}</p>
              <div className="space-y-2.5">
                {col.cards.map((c) => (
                  <div
                    key={c.t}
                    className="board-card border-line bg-surface rounded-xl border p-3 shadow-sm"
                    style={
                      { "--tilt": c.tilt, "--delay": c.delay } as React.CSSProperties
                    }
                  >
                    <p className="text-[13px] leading-snug font-semibold">{c.t}</p>
                    <span className="bg-brand/10 text-brand mt-2 inline-block rounded-md px-2 py-0.5 text-[11px] font-medium">
                      {c.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
