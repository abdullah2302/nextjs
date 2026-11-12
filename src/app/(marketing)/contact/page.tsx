import type { Metadata } from "next";

import { fieldClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the TeamFlow team about plans, demos and support.",
};

const channels = [
  {
    t: "Sales",
    d: "Plans, pricing and demos",
    v: "sales@teamflow.example",
    c: "bg-lime",
  },
  {
    t: "Support",
    d: "Help with your account",
    v: "help@teamflow.example",
    c: "bg-surface",
  },
  {
    t: "Press",
    d: "Media and partnerships",
    v: "press@teamflow.example",
    c: "bg-surface",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-grid">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div>
          <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
            Contact
          </p>
          <h1 className="font-display mt-3 text-5xl leading-[0.98] font-extrabold tracking-tight sm:text-7xl">
            Talk to <span className="marker">our team.</span>
          </h1>
          <p className="text-ink-soft mt-6 max-w-md text-lg leading-relaxed">
            Questions about plans, a demo for your team, or help with your account? Send a
            message and we will reply within one working day.
          </p>
          <ul className="mt-10 space-y-4">
            {channels.map((c) => (
              <li
                key={c.t}
                className={`sticker flex items-center justify-between gap-4 px-5 py-4 ${c.c}`}
              >
                <div>
                  <p className="font-display text-lg font-extrabold">{c.t}</p>
                  <p className="text-sm opacity-70">{c.d}</p>
                </div>
                <p className="text-sm font-bold">{c.v}</p>
              </li>
            ))}
          </ul>
        </div>

        <form className="sticker space-y-5 self-start p-6 sm:p-8">
          <h2 className="font-display text-2xl font-extrabold">Send a message</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="topic" className="text-sm font-bold">
              Topic
            </label>
            <select id="topic" name="topic" className={fieldClass} defaultValue="sales">
              <option value="sales">Plans and pricing</option>
              <option value="demo">Book a demo</option>
              <option value="support">Account support</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={fieldClass}
            />
          </div>
          <button type="submit" className="btn-ink w-full">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
