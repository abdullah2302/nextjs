import Link from "next/link";

const columns = [
  {
    title: "To do",
    cards: [
      {
        t: "Draft launch brief",
        tag: "Planning",
        who: "SK",
        tilt: "-1.5deg",
        delay: "100ms",
      },
      {
        t: "Review pricing copy",
        tag: "Content",
        who: "OA",
        tilt: "1deg",
        delay: "250ms",
      },
    ],
  },
  {
    title: "Doing",
    cards: [
      {
        t: "Onboarding flow v2",
        tag: "Design",
        who: "AN",
        tilt: "1.5deg",
        delay: "400ms",
      },
      { t: "Fix invite email bug", tag: "Dev", who: "HR", tilt: "-1deg", delay: "550ms" },
    ],
  },
  {
    title: "Done",
    cards: [
      { t: "Dark mode shipped", tag: "Dev", who: "MS", tilt: "-1.5deg", delay: "700ms" },
    ],
  },
];

export function Hero() {
  return (
    <section className="bg-grid border-ink relative overflow-hidden border-b-2">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-14 pb-24 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div>
          <p className="border-ink bg-surface inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-sm font-semibold">
            <span className="bg-signal size-2 rounded-full" />
            Now with workload view
          </p>
          <h1 className="font-display mt-6 text-6xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Work that actually <span className="marker">flows.</span>
          </h1>
          <p className="text-ink-soft mt-6 max-w-lg text-lg leading-relaxed">
            TeamFlow gives your team one shared board for projects, tasks and deadlines.
            Everyone sees what is next, who owns it and when it is due, with no status
            meetings needed.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/signup" className="btn-ink">
              Start free trial
            </Link>
            <Link href="/#how-it-works" className="btn-outline">
              See how it works
            </Link>
          </div>
          <ul className="text-ink-soft mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <li>14 days free</li>
            <li>No credit card</li>
            <li>Setup in 5 minutes</li>
          </ul>
        </div>

        <div className="relative">
          <div
            className="sticker p-4 sm:p-5"
            role="img"
            aria-label="Example TeamFlow board"
          >
            <div className="border-ink mb-4 flex items-center justify-between border-b-2 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="bg-ink size-3 rounded-full" />
                <span className="bg-lime ring-ink size-3 rounded-full ring-2" />
                <span className="bg-brand size-3 rounded-full" />
              </div>
              <p className="font-display text-base font-bold">Website relaunch</p>
              <span className="bg-lime rounded-full px-2.5 py-0.5 text-xs font-bold">
                64%
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {columns.map((col) => (
                <div key={col.title} className="bg-paper rounded-xl p-2.5">
                  <p className="text-ink-soft mb-2 px-1 text-xs font-bold tracking-wide uppercase">
                    {col.title}
                  </p>
                  <div className="space-y-2.5">
                    {col.cards.map((c) => (
                      <div
                        key={c.t}
                        className="board-card border-ink bg-surface rounded-lg border-2 p-2.5"
                        style={
                          { "--tilt": c.tilt, "--delay": c.delay } as React.CSSProperties
                        }
                      >
                        <p className="text-[13px] leading-snug font-semibold">{c.t}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="bg-brand/10 text-brand rounded px-1.5 py-0.5 text-[10px] font-bold">
                            {c.tag}
                          </span>
                          <span className="bg-ink grid size-5 place-items-center rounded-full text-[9px] font-bold text-white">
                            {c.who}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="float border-ink bg-lime absolute -top-5 -left-4 hidden rounded-xl border-2 px-3.5 py-2 text-sm font-bold shadow-[3px_3px_0_0_var(--color-ink)] sm:block"
            style={{ "--tilt": "-4deg" } as React.CSSProperties}
          >
            Sana finished “Launch brief”
          </div>
          <div
            className="float border-ink bg-surface absolute -right-3 -bottom-5 hidden rounded-xl border-2 px-3.5 py-2 text-sm font-bold shadow-[3px_3px_0_0_var(--color-ink)] sm:block"
            style={{ "--tilt": "3deg", "--delay": "1.2s" } as React.CSSProperties}
          >
            3 tasks due today
          </div>
        </div>
      </div>
    </section>
  );
}
