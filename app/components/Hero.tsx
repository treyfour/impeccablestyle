export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-between px-5 pb-14 pt-24 md:px-6 md:pb-16 md:pt-28">

      {/* Top label row — left only, not symmetric */}
      <p
        className="text-xs font-medium uppercase tracking-[0.2em] animate-fade-up"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-subtle)",
          "--stagger": 0,
        } as React.CSSProperties}
      >
        Product Designer · San Francisco
      </p>

      {/* Headline — the focal point */}
      <div className="-ml-0.5 py-12 md:py-0">
        <h1
          className="font-extrabold uppercase leading-[0.88] tracking-tight animate-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10.5svw, 11rem)",
            color: "var(--color-fg)",
            "--stagger": 1,
          } as React.CSSProperties}
        >
          Trevor
          <br />
          Schulte
        </h1>
      </div>

      {/* Bottom — tagline left, domains right */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <p
          className="max-w-xs text-sm font-light leading-relaxed animate-fade-up"
          style={{
            color: "var(--color-muted)",
            "--stagger": 2,
          } as React.CSSProperties}
        >
          I simplify complex problems into thoughtful
          experiences people love.
        </p>
        <p
          className="text-xs font-medium uppercase tracking-[0.15em] animate-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-subtle)",
            "--stagger": 3,
          } as React.CSSProperties}
        >
          Fintech · SaaS · Security · Agentic
        </p>
      </div>
    </section>
  );
}
