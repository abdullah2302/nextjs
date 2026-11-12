const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes. Starter is free for teams of up to 5 people and 3 active projects, with no time limit.",
  },
  {
    q: "Can I try paid features first?",
    a: "Every paid plan starts with a 14-day trial. You do not need a credit card to begin.",
  },
  {
    q: "Can I import from other tools?",
    a: "You can import tasks from CSV files today. Direct importers for popular tools are on our roadmap.",
  },
  {
    q: "Who can see my projects?",
    a: "Only people you invite to the workspace. Business plans add custom roles and an audit log.",
  },
  {
    q: "Does it work on mobile?",
    a: "The whole app is responsive and works in any modern mobile browser.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Cancel from settings whenever you like and keep access until the end of the billing period.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-6xl scroll-mt-20 gap-12 px-5 py-24 lg:grid-cols-[1fr_1.5fr]"
    >
      <div>
        <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          Questions, answered.
        </h2>
        <p className="text-ink-soft mt-4">
          Cannot find what you need? Our team replies within one working day.
        </p>
      </div>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group sticker px-6 py-4 shadow-[3px_3px_0_0_var(--color-ink)]"
          >
            <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
              {f.q}
              <span
                aria-hidden="true"
                className="text-2xl transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="text-ink-soft mt-3 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
