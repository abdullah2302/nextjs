import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-grid grid min-h-screen place-items-center px-5">
      <div className="sticker max-w-lg p-10 text-center">
        <p className="font-display text-[9rem] leading-none font-extrabold text-transparent [-webkit-text-stroke:3px_var(--color-ink)]">
          404
        </p>
        <h1 className="font-display -mt-3 text-4xl font-extrabold">
          Page <span className="marker">not found</span>
        </h1>
        <p className="text-ink-soft mt-4">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-ink">
            Go to home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
