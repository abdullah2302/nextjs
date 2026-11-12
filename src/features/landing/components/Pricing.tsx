"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    note: "For small teams trying it out",
    features: [
      "Up to 5 members",
      "3 active projects",
      "Kanban boards",
      "Community support",
    ],
    cta: "Start for free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Team",
    monthly: 12,
    yearly: 10,
    note: "per member, per month",
    features: [
      "Unlimited members",
      "Unlimited projects",
      "Workload view",
      "Slack and GitHub integrations",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Business",
    monthly: 24,
    yearly: 19,
    note: "per member, per month",
    features: [
      "Everything in Team",
      "Single sign-on",
      "Audit log",
      "Custom roles",
      "Dedicated manager",
    ],
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="border-ink bg-surface scroll-mt-20 border-y-2 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
            Simple pricing. No surprises.
          </h2>
          <div
            role="group"
            aria-label="Billing period"
            className="border-ink flex rounded-full border-2 p-1 text-sm font-bold"
          >
            {[
              { l: "Monthly", v: false },
              { l: "Yearly · save 20%", v: true },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                aria-pressed={yearly === o.v}
                onClick={() => setYearly(o.v)}
                className={cn(
                  "rounded-full px-4 py-2 transition-colors",
                  yearly === o.v ? "bg-ink text-white" : "text-ink-soft",
                )}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn("sticker flex flex-col p-8", p.featured && "bg-lime")}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                {p.featured && (
                  <span className="bg-ink rounded-full px-3 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className="font-display mt-6 text-6xl font-extrabold">
                ${yearly ? p.yearly : p.monthly}
              </p>
              <p className="text-ink-soft mt-1 text-sm">{p.note}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] font-medium">
                    <span aria-hidden="true" className="font-bold">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={p.href}
                className={cn("mt-8 text-center", p.featured ? "btn-ink" : "btn-outline")}
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
