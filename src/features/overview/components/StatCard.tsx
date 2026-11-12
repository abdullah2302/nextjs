interface StatCardProps {
  label: string;
  value: string | number;
  hint: string;
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <dt className="text-sm text-ink-soft">{label}</dt>
      <dd className="mt-1 font-display text-4xl font-extrabold text-brand">{value}</dd>
      <p className="mt-1 text-xs text-ink-soft">{hint}</p>
    </div>
  );
}