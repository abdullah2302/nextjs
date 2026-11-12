import type { Metadata } from "next";
import Link from "next/link";

import { posts } from "@/features/blog/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical ideas for planning and shipping work as a team.",
};

const tags = ["Meetings", "Ownership", "Planning"];
const tones = ["bg-lime", "bg-surface", "bg-brand text-white"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-grid border-ink border-b-2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-brand text-sm font-bold tracking-widest uppercase">
            The TeamFlow blog
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl leading-[0.98] font-extrabold tracking-tight sm:text-7xl">
            Ideas for teams that <span className="marker">ship.</span>
          </h1>
          <p className="text-ink-soft mt-6 max-w-xl text-lg">
            Practical ideas for planning and shipping work as a team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="sticker sticker-hover bg-ink grid gap-6 p-8 text-white md:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <span className="bg-lime text-ink rounded-full px-3 py-1 text-xs font-bold">
                Featured
              </span>
              <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-lg text-white/70">{featured.excerpt}</p>
            </div>
            <div className="self-end text-sm text-white/60 md:text-right">
              {featured.date} · {featured.readTime}
              <p className="text-lime mt-2 font-bold">Read article →</p>
            </div>
          </Link>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={cn(
                "sticker sticker-hover flex flex-col p-7",
                tones[i % tones.length],
              )}
            >
              <span className="w-fit rounded-full border-2 border-current px-3 py-0.5 text-xs font-bold">
                {tags[(i + 1) % tags.length]}
              </span>
              <h2 className="font-display mt-4 text-2xl leading-tight font-extrabold">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 opacity-80">{p.excerpt}</p>
              <p className="mt-5 text-sm font-semibold opacity-80">
                {p.date} · {p.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
