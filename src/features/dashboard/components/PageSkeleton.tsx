export function PageSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div aria-busy="true" aria-live="polite" className="animate-pulse">
      <span className="sr-only">Loading</span>
      <div className="bg-lime h-4 w-24 rounded" />
      <div className="bg-line mt-3 h-11 w-64 max-w-full rounded-lg" />
      <div className="bg-line/70 mt-4 h-4 w-80 max-w-full rounded" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="border-edge bg-surface h-40 rounded-[1.25rem] border-2 shadow-[5px_5px_0_0_var(--color-edge)]"
          />
        ))}
      </div>
    </div>
  );
}
