import { cn } from "@/lib/cn";

type Tone = "lime" | "brand" | "white" | "ink";

const tones: Record<Tone, string> = {
  lime: "bg-lime text-ink",
  brand: "bg-brand text-white",
  white: "bg-surface text-ink",
  ink: "bg-chrome text-white",
};

interface StatCardProps {
  label: string;
  value: string | number;
  hint: string;
  tone?: Tone;
}

export function StatCard({ label, value, hint, tone = "white" }: StatCardProps) {
  return (
    <div className={cn("sticker sticker-hover p-5", tones[tone])}>
      <dt className="text-xs font-bold tracking-widest uppercase opacity-70">{label}</dt>
      <dd className="font-display mt-2 text-5xl leading-none font-extrabold">{value}</dd>
      <p className="mt-2 text-xs font-medium opacity-70">{hint}</p>
    </div>
  );
}
