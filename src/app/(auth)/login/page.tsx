import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DEFAULT_WORKSPACE } from "@/features/workspaces/data";
import { fieldClass } from "@/lib/ui";

export const metadata: Metadata = { title: "Log in" };

async function login() {
  "use server";
  // Demo only: real authentication comes later in the course.
  redirect(`/app/${DEFAULT_WORKSPACE}/projects`);
}

export default function LoginPage() {
  return (
    <>
      <h1 className="font-display text-4xl font-extrabold">
        Welcome <span className="marker">back</span>
      </h1>
      <p className="text-ink-soft mt-2">Log in to open your workspace.</p>
      <form action={login} className="mt-7 space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-bold">
            Email
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
            autoComplete="current-password"
            placeholder="Your password"
            className={fieldClass}
          />
        </div>
        <button type="submit" className="btn-ink w-full">
          Log in
        </button>
      </form>
      <p className="text-ink-soft mt-6 text-center text-sm">
        New to TeamFlow?{" "}
        <Link href="/signup" className="text-brand font-bold underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
