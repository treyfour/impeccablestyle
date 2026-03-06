export default function About() {
  return (
    <section
      id="about"
      className="px-5 py-20 md:px-6 md:py-28"
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      <p
        className="mb-12 text-xs font-medium uppercase tracking-[0.2em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-subtle)" }}
      >
        About
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        {/* Left: headline — left-aligned, not centered */}
        <h2
          className="font-extrabold uppercase leading-[0.88] tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5svw, 4.5rem)",
            color: "var(--color-fg)",
          }}
        >
          Thoughtful
          <br />
          by design.
        </h2>

        {/* Right: bio */}
        <div className="flex flex-col justify-center gap-5">
          <p
            className="text-base font-light leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            I&apos;m a product designer based in San Francisco. I simplify
            complex problems into thoughtful experiences people love.
          </p>
          <p
            className="text-base font-light leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Experienced across Fintech, SaaS, Security, and Agentic
            interfaces — working at the intersection of clarity and craft.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Fintech", "SaaS", "Security", "Agentic AI"].map((tag) => (
              <span
                key={tag}
                className="border px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-display)",
                  borderColor: "var(--color-rule)",
                  color: "var(--color-subtle)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
