import type { Metadata } from "next";
import Link from "next/link";

import { posts } from "@/features/blog/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical ideas for planning and shipping work as a team.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 lg:py-24">
      <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
        Blog
      </h1>
      <p className="text-ink-soft mt-4 text-lg">
        Practical ideas for planning and shipping work as a team.
      </p>
      <ul className="divide-line border-line mt-12 divide-y border-y">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group block py-7">
              <p className="text-ink-soft text-sm">
                {p.date} · {p.readTime}
              </p>
              <h2 className="font-display group-hover:text-brand mt-1 text-2xl font-bold transition-colors">
                {p.title}
              </h2>
              <p className="text-ink-soft mt-2">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
