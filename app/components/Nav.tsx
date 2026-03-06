export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-6">
      <span
        className="text-xs font-bold uppercase tracking-[0.2em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
      >
        TS
      </span>
      <nav className="flex items-center gap-7">
        {["Work", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Contact" ? "mailto:schultetrevor@gmail.com" : `#${item.toLowerCase()}`}
            className="text-xs font-medium uppercase tracking-[0.15em] transition-opacity duration-150 hover:opacity-100"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-muted)",
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
