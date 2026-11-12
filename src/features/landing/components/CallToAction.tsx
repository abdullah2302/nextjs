import Link from "next/link";

export function CallToAction() {
  return (
    <section className="px-5 pb-24">
      <div className="bg-grid-dark border-ink bg-ink relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-2 px-8 py-16 text-center text-white sm:py-20">
        <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight font-extrabold sm:text-6xl">
          Give your team one place to get <span className="text-lime">things done.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/70">
          Create your first board in under five minutes. Free for 14 days.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="border-lime bg-lime text-ink inline-block rounded-full border-2 px-8 py-3.5 font-bold transition-transform hover:-translate-y-0.5"
          >
            Start free trial
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-white/40 px-8 py-3.5 font-bold transition-colors hover:border-white"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
