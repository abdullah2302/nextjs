const stats = [
  { n: "4,200+", l: "teams run on TeamFlow" },
  { n: "1.8M", l: "tasks completed" },
  { n: "38%", l: "faster delivery on average" },
  { n: "99.9%", l: "uptime last year" },
];

export function StatsBand() {
  return (
    <section className="border-ink bg-lime border-b-2">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="lg:border-ink lg:border-l-2 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <dd className="font-display text-5xl font-extrabold">{s.n}</dd>
            <dt className="mt-1 text-sm font-medium">{s.l}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
