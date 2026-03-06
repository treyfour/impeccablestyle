// Per-project accent colors (from sutera.ch pattern).
// Text colors are explicitly tinted toward each accent — no gray on color.
const projects = [
  {
    title: "AI Agents",
    description: "AI agents increase task completions for employers",
    tags: ["B2B", "Fintech", "Agentic"],
    accent: "#BCD4FD",
    textColor: "oklch(22% 0.06 250)",   // deep blue-tinted dark
  },
  {
    title: "Prizeout Checkout",
    description: "A modular checkout experience similar to Apple Pay",
    tags: ["B2B2C", "Fintech", "Checkout"],
    accent: "#E3C0A9",
    textColor: "oklch(25% 0.05 50)",    // warm brown-tinted dark
  },
  {
    title: "Unlocking Enterprise",
    description: "Enterprise exports that save time for enterprise customers",
    tags: ["B2B", "Reporting", "Export"],
    accent: "#C9C1FF",
    textColor: "oklch(22% 0.07 285)",   // violet-tinted dark
  },
  {
    title: "Reducing Spend",
    description: "Reducing card spend through virtual card first",
    tags: ["B2C", "Credit Cards", "Onboard"],
    accent: "#E88150",
    textColor: "oklch(22% 0.06 35)",    // orange-tinted dark
  },
  {
    title: "Solace",
    description: "Engineering project management productivity platform",
    tags: ["B2B", "Software", "Productivity"],
    accent: "#91B394",
    textColor: "oklch(22% 0.05 150)",   // green-tinted dark
  },
  {
    title: "Increasing Transfers",
    description: "4% increase in transfer conversion with UX change",
    tags: ["B2B2C", "Fintech", "Transfer"],
    accent: "#FFA796",
    textColor: "oklch(22% 0.06 20)",    // red-tinted dark
  },
  {
    title: "Admin Compare & Sync",
    description: "Save time for CS with compare and sync",
    tags: ["B2B", "CS", "Optimization"],
    accent: "#F9CCDD",
    textColor: "oklch(25% 0.05 0)",     // pink-tinted dark
  },
  {
    title: "MSG Camera Shy",
    description: "Social media for introverts who don't want to be on camera",
    tags: ["B2C", "Social", "Messaging"],
    accent: "#59E7CA",
    textColor: "oklch(22% 0.07 180)",   // teal-tinted dark
  },
  {
    title: "Qualcomm",
    description: "Streamlining engineering project management",
    tags: ["B2B", "Software Dev", "Productivity"],
    accent: "#996B4A",
    textColor: "oklch(97% 0.015 60)",   // light warm (dark bg)
  },
];

export default function Work() {
  return (
    <section id="work" className="px-5 py-20 md:px-6 md:py-28">
      <p
        className="mb-10 text-xs font-medium uppercase tracking-[0.2em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-subtle)" }}
      >
        Selected Work
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  accent,
  textColor,
  index,
}: {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  textColor: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex min-h-60 cursor-pointer flex-col justify-between p-6 transition-transform duration-200 hover:-translate-y-px md:min-h-72"
      style={{
        backgroundColor: accent,
        // transition uses ease-out-quart
        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      {/* Index + arrow row */}
      <div className="flex items-start justify-between">
        <span
          className="text-xs font-medium uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-display)", color: `color-mix(in oklch, ${accent} 30%, ${textColor})` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: `color-mix(in oklch, ${accent} 40%, ${textColor})` }}
        >
          ↗
        </span>
      </div>

      {/* Title + description */}
      <div className="mt-auto">
        <h2
          className="mb-2 font-bold uppercase leading-[0.88] tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3.5svw, 2.8rem)",
            color: textColor,
          }}
        >
          {title}
        </h2>
        <p
          className="mb-4 text-sm font-light leading-snug"
          style={{ color: `color-mix(in oklch, ${accent} 15%, ${textColor})` }}
        >
          {description}
        </p>

        {/* Tags — tinted toward accent, no gray */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border px-2 py-0.5 text-xs font-medium uppercase tracking-wider"
              style={{
                fontFamily: "var(--font-display)",
                borderColor: `color-mix(in oklch, ${accent} 40%, ${textColor})`,
                color: `color-mix(in oklch, ${accent} 25%, ${textColor})`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
