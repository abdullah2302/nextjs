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
    <div role="alert" className="sticker mx-auto max-w-lg p-8 text-center">
      <span className="border-edge bg-amber text-ink mx-auto grid size-14 place-items-center rounded-full border-2">
        <svg
          viewBox="0 0 24 24"
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 8v5m0 4h.01M10.3 4l-8 14a2 2 0 001.7 3h16a2 2 0 001.7-3l-8-14a2 2 0 00-3.4 0z" />
        </svg>
      </span>
      <h2 className="font-display mt-5 text-3xl font-extrabold">This page hit a snag</h2>
      <p className="text-ink-soft mt-2">
        {error.message || "Something went wrong while loading this page."} The rest of
        your workspace is still working.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={reset} className="btn-brand">
          Try again
        </button>
        <Link
          href={home}
          className="border-edge hover:bg-lime hover:text-ink rounded-full border-2 px-5 py-2.5 text-sm font-bold"
        >
          {params.workspace ? "Go to overview" : "Go to home"}
        </Link>
      </div>
    </div>
  );
}
