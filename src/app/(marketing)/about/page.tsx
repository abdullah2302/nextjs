import type { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built TeamFlow and what we believe about teamwork.",
};

const values = [
  {
    title: "Clarity first",
    body: "If a teammate has to ask who owns something, the tool has failed.",
    tone: "bg-lime",
  },
  {
    title: "Less noise",
    body: "We send fewer, better notifications so people can focus.",
    tone: "bg-surface",
  },
  {
    title: "Built with teams",
    body: "Every feature starts from a problem a real team told us about.",
    tone: "bg-brand text-white",
  },
];

const stats = [
  { n: "4,200+", l: "teams on TeamFlow" },
  { n: "38", l: "countries" },
  { n: "99.9%", l: "uptime last year" },
];

const team = [
  { n: "Sana Khan", r: "Co-founder, Product", c: "bg-brand text-white" },
  { n: "Omar Ali", r: "Co-founder, Engineering", c: "bg-lime" },
  { n: "Ayesha Noor", r: "Head of Design", c: "bg-amber" },
  { n: "Hamza Raza", r: "Customer Success", c: "bg-signal" },
];

const timeline = [
  {
    y: "2023",
    t: "Two founders, one messy spreadsheet. TeamFlow starts as an internal tool.",
  },
  { y: "2024", t: "Public launch. The first 500 teams join in three months." },
  { y: "2025", t: "Workload view and integrations ship. Team size passes 15 people." },
  { y: "2026", t: "4,000+ teams in 38 countries and still shipping every week." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-grid border-ink border-b-2">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
            About us
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-5xl leading-[0.98] font-extrabold tracking-tight sm:text-7xl">
            We build the tool we wished <span className="marker">our own team</span> had.
          </h1>
          <div className="text-ink-soft mt-10 grid gap-8 text-lg leading-relaxed md:grid-cols-2">
            <p>
              TeamFlow started in 2023 when a small product team got tired of tracking
              work across spreadsheets, chat threads and sticky notes. Nothing was wrong
              with any single tool. The trouble was that nobody could see the whole
              picture.
            </p>
            <p>
              So we built one shared board where tasks, owners and deadlines live
              together. Today thousands of teams use it to plan, assign and ship, from
              two-person studios to international companies.
            </p>
          </div>
        </div>
      </section>

      <section className="border-ink bg-lime border-b-2">
        <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l}>
              <dd className="font-display text-6xl font-extrabold">{s.n}</dd>
              <dt className="mt-1 font-medium">{s.l}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          What we believe
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className={cn("sticker sticker-hover p-7", v.tone)}>
              <h3 className="font-display text-2xl font-extrabold">{v.title}</h3>
              <p className="mt-2 leading-relaxed opacity-85">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-ink bg-surface border-y-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our story so far
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {timeline.map((t) => (
              <li key={t.y} className="border-ink border-t-4 pt-4">
                <p className="outline-num font-display text-5xl font-extrabold">{t.y}</p>
                <p className="text-ink-soft mt-3 leading-relaxed">{t.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          The people behind it
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <li key={p.n} className="sticker sticker-hover p-6 text-center">
              <span
                className={cn(
                  "border-ink font-display mx-auto grid size-20 place-items-center rounded-full border-2 text-3xl font-extrabold",
                  p.c,
                )}
              >
                {p.n.charAt(0)}
              </span>
              <p className="font-display mt-4 text-lg font-bold">{p.n}</p>
              <p className="text-ink-soft text-sm">{p.r}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <Link href="/contact" className="btn-ink">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
