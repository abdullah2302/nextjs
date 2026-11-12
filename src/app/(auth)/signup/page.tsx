import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DEFAULT_WORKSPACE } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Create account" };

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors focus:border-brand";

async function signup() {
  "use server";
  redirect(`/app/${DEFAULT_WORKSPACE}`);
}

export default function SignupPage() {
  return (
    <>
      <h1 className="font-display text-3xl font-extrabold">Create your account</h1>
      <p className="text-ink-soft mt-2">
        Start your 14-day free trial. No credit card needed.
      </p>
      <form action={signup} className="mt-6 space-y-5">
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
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className={field}
          />
        </div>
        <button
          type="submit"
          className="bg-brand hover:bg-brand-deep w-full rounded-full px-6 py-3.5 font-semibold text-white"
        >
          Create account
        </button>
      </form>
      <p className="text-ink-soft mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-brand font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </>
  );
}
