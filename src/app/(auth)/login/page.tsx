import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DEFAULT_WORKSPACE } from "@/features/workspaces/data";

export const metadata: Metadata = { title: "Log in" };

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 outline-none transition-colors focus:border-brand";

async function login() {
  "use server";
  // Demo only: real authentication comes later in the course.
  redirect(`/app/${DEFAULT_WORKSPACE}/projects`);
}

export default function LoginPage() {
  return (
    <>
      <h1 className="font-display text-3xl font-extrabold">Welcome back</h1>
      <p className="text-ink-soft mt-2">Log in to open your workspace.</p>
      <form action={login} className="mt-6 space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Email
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
            autoComplete="current-password"
            className={field}
          />
        </div>
        <button
          type="submit"
          className="bg-brand hover:bg-brand-deep w-full rounded-full px-6 py-3.5 font-semibold text-white"
        >
          Log in
        </button>
      </form>
      <p className="text-ink-soft mt-6 text-center text-sm">
        New to TeamFlow?{" "}
        <Link href="/signup" className="text-brand font-semibold hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
