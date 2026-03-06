# Portfolio Rebuild Plan
**Style source:** [sutera.ch](https://www.sutera.ch)
**Content source:** [trevorschulte.xyz](https://trevorschulte.xyz)
**Stack:** Next.js 16 · Tailwind CSS 4 · TypeScript
**Impeccable commands queued:** `/audit`, `/critique`, `/animate`, `/polish`

---

## Phase 1 — Style Extraction ✅

Extracted directly from sutera.ch CSS source. Documented in `DESIGN_SYSTEM.md`.

- [x] Fonts: PP Neue Montreal (primary), Neue Haas Grotesk (secondary) — adapted to Syne + DM Sans
- [x] Type scale: fluid svw-based (11.19svw → 3.05svw), tight line-heights (0.88–0.9)
- [x] Color: base palette + 9 per-project accent colors
- [x] Grid: 20px margin/gutter (mobile), 24px (desktop)
- [x] Motion: ease-out-quart, 600ms entrances, CSS custom property stagger

---

## Phase 2 — Content Inventory ✅

Scraped from trevorschulte.xyz via curl (Framer site, JS-rendered). Documented in `CONTENT.md`.

- [x] Hero: name, title, tagline, specialties
- [x] 9 projects: AI Agents, Prizeout Checkout, Unlocking Enterprise, Reducing Spend, Solace, Increasing Transfers, Admin Compare & Sync, MSG Camera Shy, Qualcomm
- [x] Contact: schultetrevor@gmail.com · LinkedIn

---

## Phase 3 — Component Build ✅

All components built and passing production build (`npm run build`).

### Foundation
- [x] OKLCH color system in `globals.css` (no pure black/white, tinted neutrals)
- [x] Syne (display) + DM Sans (body) loaded via `next/font/google`
- [x] Tailwind 4 `@theme` block with tokens
- [x] Ease-out-quart + CSS custom property stagger + `prefers-reduced-motion`

### Components (`app/components/`)
- [x] `Nav.tsx` — fixed top, Syne uppercase, left logo / right links
- [x] `Hero.tsx` — full-height, fluid Syne headline (clamp 3.5rem→11rem), staggered entrance
- [x] `Work.tsx` — 2-col grid, 9 cards, per-project OKLCH-tinted text (no gray on color)
- [x] `About.tsx` — 2-col text layout, left-aligned, no card wrapper
- [x] `Footer.tsx` — left-aligned CTA, email + LinkedIn

### Impeccable rules applied
| Rule | Applied |
|------|---------|
| No generic fonts (no Inter/Geist) | Syne + DM Sans |
| No mono as decoration | Removed entirely from labels/nav |
| No pure black/white | OKLCH tinted neutrals throughout |
| No gray text on colored bg | `color-mix(in oklch, accent, textColor)` per card |
| No alpha soup | Explicit semantic tokens only |
| Correct easing | `cubic-bezier(0.25, 1, 0.5, 1)` everywhere |
| Transform + opacity only | No layout property animations |
| prefers-reduced-motion | Implemented |
| No centering everything | Footer + About left-aligned |

---

## Phase 4 — Impeccable Review Pass ⬜

Run these commands in order in a fresh context:

| Command | Goal |
|---------|------|
| `/audit` | Accessibility, responsive, performance issues |
| `/critique` | UX hierarchy and emotional resonance |
| `/animate` | Scroll-triggered reveals on project grid, more entrance motion |
| `/polish` | Final pre-ship pass |

### Known gaps to address in Phase 4
- No scroll-triggered animation on project cards (Intersection Observer)
- Fluid spacing with `clamp()` not yet applied to section padding
- Container queries not implemented (viewport breakpoints used instead)
- OpenType features (`font-kerning`, `tabular-nums`) not set
- Project cards have no images yet — placeholder needed or image strategy

---

## Key Files
```
PLAN.md            ← this file
DESIGN_SYSTEM.md   ← extracted sutera.ch tokens + adaptations
CONTENT.md         ← Trevor's portfolio content (scraped)
app/
  globals.css      ← OKLCH tokens, Tailwind @theme, animations
  layout.tsx       ← Syne + DM Sans font loading, metadata
  page.tsx         ← composes Nav + Hero + Work + About + Footer
  components/
    Nav.tsx
    Hero.tsx
    Work.tsx       ← 9 project cards with per-project accent colors
    About.tsx
    Footer.tsx
```
