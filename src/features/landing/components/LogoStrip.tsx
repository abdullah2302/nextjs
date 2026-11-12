const brands = [
  "Northwind",
  "Lumen Studio",
  "Pixelforge",
  "Brightpath",
  "Kite & Co",
  "Orbital",
  "Fieldnote",
  "Mosaic Labs",
  "Tandem",
  "Harbor",
];

export function LogoStrip() {
  const items = [...brands, ...brands];
  return (
    <section
      aria-label="Trusted by"
      className="border-ink bg-ink overflow-hidden border-b-2 py-5 text-white"
    >
      <p className="sr-only">Trusted by teams at {brands.join(", ")}</p>
      <div className="marquee-track" aria-hidden="true">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-display mx-8 flex items-center gap-8 text-xl font-bold"
          >
            {name}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
