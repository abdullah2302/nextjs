import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-28 text-center">
      <h1 className="font-display text-5xl font-extrabold">Page not found</h1>
      <p className="text-ink-soft mt-4">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="bg-brand mt-8 inline-block rounded-full px-6 py-3 font-semibold text-white"
      >
        Go to home
      </Link>
    </div>
  );
}
