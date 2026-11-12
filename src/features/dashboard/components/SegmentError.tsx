"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface SegmentErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function SegmentError({ error, reset }: SegmentErrorProps) {
  const params = useParams<{ workspace?: string }>();
  const home = params.workspace ? `/app/${params.workspace}` : "/";

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="border-line bg-surface mx-auto max-w-lg rounded-3xl border p-8 text-center"
    >
      <span className="bg-amber/15 text-amber mx-auto grid size-12 place-items-center rounded-full">
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 8v5m0 4h.01M10.3 4l-8 14a2 2 0 001.7 3h16a2 2 0 001.7-3l-8-14a2 2 0 00-3.4 0z" />
        </svg>
      </span>
      <h2 className="font-display mt-5 text-2xl font-bold">This page hit a problem</h2>
      <p className="text-ink-soft mt-2">
        {error.message || "Something went wrong while loading this page."} The rest of
        your workspace is still working.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="bg-brand hover:bg-brand-deep rounded-full px-5 py-2.5 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href={home}
          className="border-line rounded-full border px-5 py-2.5 text-sm font-semibold"
        >
          {params.workspace ? "Go to overview" : "Go to home"}
        </Link>
      </div>
    </div>
  );
}
