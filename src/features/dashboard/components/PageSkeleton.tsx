export function PageSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div aria-busy="true" aria-live="polite" className="animate-pulse">
      <span className="sr-only">Loading</span>
      <div className="bg-line h-9 w-56 rounded-lg" />
      <div className="bg-line/70 mt-3 h-4 w-80 max-w-full rounded" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="bg-line/60 h-36 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
