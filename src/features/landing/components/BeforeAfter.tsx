const before = [
  "Status lives in chat threads",
  "Three spreadsheets, none up to date",
  "“Who owns this?” asked every week",
  "Deadlines found out the day before",
];
const after = [
  "One board shows the real status",
  "Every task has one owner and one date",
  "Workload visible before you assign",
  "A daily summary replaces the nagging",
];

export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="font-display max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
        Stop chasing updates. <span className="marker">Start shipping.</span>
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="border-ink/40 rounded-3xl border-2 border-dashed p-8">
          <p className="font-display text-ink-soft text-sm font-bold tracking-widest uppercase">
            Before
          </p>
          <ul className="mt-5 space-y-4">
            {before.map((t) => (
              <li
                key={t}
                className="text-ink-soft decoration-ink/40 flex gap-3 text-lg line-through"
              >
                <span aria-hidden="true">✕</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="sticker p-8">
          <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
            With TeamFlow
          </p>
          <ul className="mt-5 space-y-4">
            {after.map((t) => (
              <li key={t} className="flex gap-3 text-lg font-medium">
                <span
                  aria-hidden="true"
                  className="bg-lime grid size-6 shrink-0 place-items-center rounded-full text-sm font-bold"
                >
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
