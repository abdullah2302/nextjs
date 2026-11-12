import Link from "next/link";

export function CallToAction() {
  return (
    <section className="px-5 pb-20">
      <div className="bg-brand mx-auto max-w-6xl rounded-3xl px-8 py-14 text-center text-white sm:py-16">
        <h2 className="font-display mx-auto max-w-2xl text-4xl leading-tight font-extrabold sm:text-5xl">
          Give your team one place to get things done.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/80">
          Set up your first board in under five minutes.
        </p>
        <Link
          href="/contact"
          className="text-brand hover:bg-ink mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold transition-colors hover:text-white"
        >
          Start free trial
        </Link>
      </div>
    </section>
  );
}
