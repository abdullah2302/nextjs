"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface NotFoundViewProps {
  title: string;
  message: string;
  backLabel: string;
  /** Sub-path inside the current workspace, e.g. "projects". Ignored when href is set. */
  backSegment?: string;
  /** Fixed link target, used when no workspace is available (invalid workspace slug). */
  href?: string;
}

export function NotFoundView({
  title,
  message,
  backLabel,
  backSegment,
  href,
}: NotFoundViewProps) {
  const params = useParams<{ workspace?: string }>();
  const target =
    href ??
    (params.workspace
      ? `/app/${params.workspace}${backSegment ? `/${backSegment}` : ""}`
      : "/app");

  return (
    <div className="mx-auto max-w-lg py-10 text-center">
      <p className="font-display text-brand text-8xl font-extrabold">404</p>
      <h2 className="font-display mt-2 text-3xl font-bold">{title}</h2>
      <p className="text-ink-soft mt-3">{message}</p>
      <Link
        href={target}
        className="bg-brand hover:bg-brand-deep mt-8 inline-block rounded-full px-6 py-3 font-semibold text-white"
      >
        {backLabel}
      </Link>
    </div>
  );
}
