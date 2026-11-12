import Link from "next/link";

import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "For small teams trying it out",
    features: [
      "Up to 5 members",
      "3 active projects",
      "Kanban boards",
      "Community support",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Team",
    price: "$12",
    note: "per member, per month",
    features: [
      "Unlimited members",
      "Unlimited projects",
      "Workload view",
      "Slack and GitHub integrations",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$24",
    note: "per member, per month",
    features: [
      "Everything in Team",
      "Single sign-on",
      "Audit log",
      "Custom roles",
      "Dedicated manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Pricing that grows with you.
        </h2>
        <p className="text-ink-soft mt-4 max-w-xl text-lg">
          Pick a plan today and change it any time. Every paid plan includes a 14-day
          trial.
        </p>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "flex flex-col rounded-3xl p-8",
                p.featured
                  ? "bg-ink shadow-brand/20 text-white shadow-2xl lg:-my-3"
                  : "border-line bg-surface border",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                {p.featured && (
                  <span className="bg-signal text-ink rounded-full px-3 py-1 text-xs font-semibold">
                    Most popular
                  </span>
                )}
              </div>
              <p className="font-display mt-6 text-5xl font-extrabold">{p.price}</p>
              <p
                className={cn(
                  "mt-1 text-sm",
                  p.featured ? "text-white/65" : "text-ink-soft",
                )}
              >
                {p.note}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px]">
                    <svg
                      viewBox="0 0 24 24"
                      className={cn(
                        "mt-0.5 size-5 shrink-0",
                        p.featured ? "text-signal" : "text-brand",
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  "mt-8 rounded-full px-6 py-3 text-center font-semibold transition-colors",
                  p.featured
                    ? "bg-brand hover:text-ink text-white hover:bg-white"
                    : "border-ink/15 hover:border-ink/40 border",
                )}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
