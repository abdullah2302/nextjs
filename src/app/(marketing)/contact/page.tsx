import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the TeamFlow team about plans, demos and support.",
};

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors focus:border-brand";

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 lg:py-24">
      <div>
        <h1 className="font-display text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl">
          Talk to our team.
        </h1>
        <p className="text-ink-soft mt-5 max-w-md text-lg leading-relaxed">
          Questions about plans, a demo for your team, or help with your account? Send a
          message and we will reply within one working day.
        </p>
        <p className="text-ink-soft mt-8">
          Email: <span className="text-ink font-semibold">hello@teamflow.example</span>
        </p>
      </div>

      <form className="border-line bg-surface space-y-5 rounded-3xl border p-6 sm:p-8">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold">
            How can we help?
          </label>
          <textarea id="message" name="message" rows={5} required className={field} />
        </div>
        <button
          type="submit"
          className="bg-brand hover:bg-brand-deep w-full rounded-full px-6 py-3.5 font-semibold text-white transition-colors"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
