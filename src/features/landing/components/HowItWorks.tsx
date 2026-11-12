const steps = [
  {
    n: "01",
    t: "Create a workspace",
    b: "Name your team, invite people by email and pick a board template. It takes about two minutes.",
  },
  {
    n: "02",
    t: "Plan the work",
    b: "Break projects into tasks, give each one an owner and a date, and drop them on the board.",
  },
  {
    n: "03",
    t: "Ship with a clear view",
    b: "Track progress live, spot overloaded teammates early and get one daily summary of what is due.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
        How it works
      </p>
      <h2 className="font-display mt-2 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
        From signup to first shipped task in one afternoon.
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n}>
            <p className="outline-num font-display text-8xl leading-none font-extrabold">
              {s.n}
            </p>
            <h3 className="font-display mt-4 text-2xl font-bold">{s.t}</h3>
            <p className="text-ink-soft mt-2 leading-relaxed">{s.b}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
