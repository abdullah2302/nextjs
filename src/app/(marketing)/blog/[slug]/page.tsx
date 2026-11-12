import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPost, posts } from "@/features/blog/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const [lead, ...rest] = post.body;
  const next = posts.find((p) => p.slug !== post.slug);

  return (
    <>
      <header className="bg-grid border-ink border-b-2">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
          <Link href="/blog" className="btn-outline !px-4 !py-2 text-sm">
            ← Back to blog
          </Link>
          <h1 className="font-display mt-8 text-4xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="bg-lime rounded-full px-3 py-1">{post.date}</span>
            <span className="text-ink-soft">{post.readTime}</span>
            <span className="text-ink-soft">by the TeamFlow team</span>
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-5 py-16">
        {lead && <p className="font-display text-2xl leading-snug font-bold">{lead}</p>}
        <div className="mt-8 space-y-6 text-lg leading-relaxed">
          {rest.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="sticker sticker-hover bg-lime mt-16 block p-6"
          >
            <p className="text-xs font-bold tracking-widest uppercase">Read next</p>
            <p className="font-display mt-1 text-2xl font-extrabold">{next.title}</p>
          </Link>
        )}
      </article>
    </>
  );
}
