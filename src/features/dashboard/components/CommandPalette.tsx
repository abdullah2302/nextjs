"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/cn";

export interface CommandItem {
  id: string;
  label: string;
  href: string;
  group: string;
}

export function CommandPalette({ items }: { items: CommandItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="border-edge bg-surface hover:bg-lime hover:text-ink flex items-center gap-2 rounded-full border-2 px-3 py-2 text-sm font-semibold transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M11 18a7 7 0 100-14 7 7 0 000 14zm9 3l-4.5-4.5" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="border-edge bg-paper hidden rounded border px-1.5 py-0.5 text-[11px] font-bold sm:inline">
          Ctrl K
        </kbd>
      </button>

      {open &&
        createPortal(
          <PaletteDialog items={items} onClose={() => setOpen(false)} />,
          document.getElementById("app-shell") ?? document.body,
        )}
    </>
  );
}

function PaletteDialog({
  items,
  onClose,
}: {
  items: CommandItem[];
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q),
    );
  }, [items, query]);

  function go(item: CommandItem | undefined) {
    if (!item) return;
    router.push(item.href);
    onClose();
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(results[active]);
    }
  }

  return (
    <div
      className="bg-chrome/70 fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="sticker text-ink w-full max-w-lg overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={
            results[active] ? `palette-${results[active].id}` : undefined
          }
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKeyDown}
          placeholder="Type a command or search..."
          className="border-edge placeholder:text-ink-soft w-full border-b-2 bg-transparent px-5 py-4 text-base font-medium outline-none"
        />

        <ul id="palette-list" role="listbox" className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="text-ink-soft px-3 py-6 text-center text-sm">
              No results found.
            </li>
          )}
          {results.map((item, index) => (
            <li
              key={item.id}
              id={`palette-${item.id}`}
              role="option"
              aria-selected={index === active}
              onMouseEnter={() => setActive(index)}
              onClick={() => go(item)}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold",
                index === active ? "bg-lime text-ink" : "text-ink",
              )}
            >
              <span>{item.label}</span>
              <span
                className={cn(
                  "text-xs font-medium",
                  index === active ? "text-ink/70" : "text-ink-soft",
                )}
              >
                {item.group}
              </span>
            </li>
          ))}
        </ul>

        <p className="border-edge text-ink-soft border-t-2 px-5 py-2.5 text-xs">
          Arrow keys to move, Enter to open, Esc to close.
        </p>
      </div>
    </div>
  );
}
