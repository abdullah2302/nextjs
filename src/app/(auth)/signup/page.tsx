import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DEFAULT_WORKSPACE } from "@/features/workspaces/data";
import { fieldClass } from "@/lib/ui";

export const metadata: Metadata = { title: "Create account" };

async function signup() {
  "use server";
  redirect(`/app/${DEFAULT_WORKSPACE}`);
}

export default function SignupPage() {
  return (
    <>
      <h1 className="font-display text-4xl font-extrabold">
        Create your <span className="marker">account</span>
      </h1>
      <p className="text-ink-soft mt-2">
        Start your 14-day free trial. No credit card needed.
      </p>
      <form action={signup} className="mt-7 space-y-5">
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
            placeholder="Your name"
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
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-bold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            placeholder="At least 8 characters"
            className={fieldClass}
          />
        </div>
        <button type="submit" className="btn-ink w-full">
          Create account
        </button>
      </form>
      <p className="text-ink-soft mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-brand font-bold underline">
          Log in
        </Link>
      </p>
    </>
  );
}
