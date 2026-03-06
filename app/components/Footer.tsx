export default function Footer() {
  return (
    <footer
      className="px-5 py-20 md:px-6 md:py-28"
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      {/* Left-aligned CTA — not centered */}
      <h2
        className="font-extrabold uppercase leading-[0.88] tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6.5svw, 6rem)",
          color: "var(--color-fg)",
        }}
      >
        Let&apos;s build
        <br />
        something.
      </h2>

      {/* Links row */}
      <div className="mt-10 flex items-center gap-6">
        <a
          href="mailto:schultetrevor@gmail.com"
          className="text-xs font-medium uppercase tracking-[0.15em] transition-opacity duration-150 hover:opacity-100"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-muted)" }}
        >
          schultetrevor@gmail.com
        </a>
        <span style={{ color: "var(--color-rule)" }}>·</span>
        <a
          href="https://www.linkedin.com/in/trevorschulte"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium uppercase tracking-[0.15em] transition-opacity duration-150 hover:opacity-100"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-muted)" }}
        >
          LinkedIn
        </a>
      </div>

      {/* Year — bottom left, not centered */}
      <p
        className="mt-16 text-xs font-medium uppercase tracking-[0.15em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-subtle)" }}
      >
        Trevor Schulte · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
