"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function CollapsiblePanel({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="mt-10 rounded-2xl border border-line bg-surface">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-display text-xl font-bold">{title}</span>
        <span className="text-sm text-ink-soft">{open ? "Hide" : "Show"}</span>
      </button>
      {open && <div className="border-t border-line">{children}</div>}
    </section>
  );
}