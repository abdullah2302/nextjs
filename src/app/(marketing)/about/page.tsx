import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built TeamFlow and what we believe about teamwork.",
};

const values = [
  {
    title: "Clarity first",
    body: "If a teammate has to ask who owns something, the tool has failed.",
  },
  {
    title: "Less noise",
    body: "We send fewer, better notifications so people can focus.",
  },
  {
    title: "Built with teams",
    body: "Every feature starts from a problem a real team told us about.",
  },
];

const stats = [
  { n: "4,200+", l: "teams on TeamFlow" },
  { n: "38", l: "countries" },
  { n: "99.9%", l: "uptime last year" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <h1 className="font-display max-w-3xl text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl">
        We build the tool we wished our own team had.
      </h1>
      <div className="text-ink-soft mt-8 grid gap-8 text-lg leading-relaxed md:grid-cols-2">
        <p>
          TeamFlow started in 2023 when a small product team got tired of tracking work
          across spreadsheets, chat threads and sticky notes. Nothing was wrong with any
          single tool. The trouble was that nobody could see the whole picture.
        </p>
        <p>
          So we built one shared board where tasks, owners and deadlines live together.
          Today thousands of teams use it to plan, assign and ship, from two-person
          studios to international companies.
        </p>
      </div>

      <dl className="mt-14 grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.l} className="border-line bg-surface rounded-2xl border p-6">
            <dt className="text-ink-soft text-sm">{s.l}</dt>
            <dd className="font-display text-brand mt-1 text-4xl font-extrabold">
              {s.n}
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="font-display mt-20 text-3xl font-extrabold">What we believe</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="border-brand border-t-2 pt-4">
            <h3 className="font-display text-xl font-bold">{v.title}</h3>
            <p className="text-ink-soft mt-2 leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
