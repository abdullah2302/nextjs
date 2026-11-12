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
      <p className="font-display text-[8rem] leading-none font-extrabold text-transparent [-webkit-text-stroke:3px_var(--color-edge)]">
        404
      </p>
      <h2 className="font-display -mt-2 text-4xl font-extrabold">
        <span className="marker">{title}</span>
      </h2>
      <p className="text-ink-soft mt-4">{message}</p>
      <Link href={target} className="btn-brand mt-8">
        {backLabel}
      </Link>
    </div>
  );
}
