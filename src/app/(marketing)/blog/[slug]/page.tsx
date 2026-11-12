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

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 lg:py-24">
      <Link href="/blog" className="text-brand text-sm font-medium hover:underline">
        Back to blog
      </Link>
      <h1 className="font-display mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="text-ink-soft mt-3 text-sm">
        {post.date} · {post.readTime}
      </p>
      <div className="mt-10 space-y-6 text-lg leading-relaxed">
        {post.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </article>
  );
}
