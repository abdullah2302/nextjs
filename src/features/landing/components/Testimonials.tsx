const quotes = [
  {
    q: "We dropped two tools and our Monday status meeting. The board tells us everything.",
    n: "Ayesha Noor",
    r: "Head of Design, Lumen Studio",
  },
  {
    q: "Workload view changed how we plan. Nobody is silently drowning anymore.",
    n: "Hamza Raza",
    r: "Engineering Lead, Pixelforge",
  },
  {
    q: "Setup took one afternoon. By Friday the whole agency was using it.",
    n: "Mina Shah",
    r: "Founder, Kite & Co",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="font-display max-w-2xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
        Teams <span className="marker">love</span> the calm.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {quotes.map((t, i) => (
          <figure
            key={t.n}
            className="sticker flex flex-col p-7"
            style={{ rotate: `${[-1, 0.8, -0.6][i]}deg` }}
          >
            <span
              aria-hidden="true"
              className="font-display text-brand text-6xl leading-none font-extrabold"
            >
              “
            </span>
            <blockquote className="mt-2 flex-1 text-lg leading-relaxed font-medium">
              {t.q}
            </blockquote>
            <figcaption className="border-ink mt-6 border-t-2 pt-4">
              <p className="font-bold">{t.n}</p>
              <p className="text-ink-soft text-sm">{t.r}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
