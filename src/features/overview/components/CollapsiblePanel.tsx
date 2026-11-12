"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function CollapsiblePanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <section className="sticker overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-display text-xl font-extrabold">{title}</span>
        <span className="border-edge rounded-full border-2 px-3 py-0.5 text-xs font-bold">
          {open ? "Hide" : "Show"}
        </span>
      </button>
      {open && <div className="border-edge border-t-2">{children}</div>}
    </section>
  );
}
