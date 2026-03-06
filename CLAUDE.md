# Trevor Schulte Portfolio — Claude Context

## What this is
Rebuilding Trevor Schulte's product design portfolio (`trevorschulte.xyz`) in Next.js, using [sutera.ch](https://www.sutera.ch) as the visual style reference. The goal is to apply the Impeccable frontend-design skill throughout the build.

## Current state
Phases 1–3 complete. **Next task: Phase 4 — Impeccable review pass.**

Run these commands in order:
1. `/audit` — catch a11y, responsive, and performance issues
2. `/critique` — UX hierarchy and emotional resonance review
3. `/animate` — scroll-triggered reveals on project grid
4. `/polish` — final pre-ship cleanup

See `PLAN.md` for the full breakdown and known gaps.

## Stack
- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4 (CSS-first config via `@theme` in `globals.css`)
- TypeScript
- Fonts: **Syne** (display/headings) + **DM Sans** (body) via `next/font/google`

## Design system
Style sourced from sutera.ch. Key decisions:
- **Colors:** OKLCH throughout — `oklch(13% 0.02 255)` fg, `oklch(98% 0.005 245)` bg. No pure black/white.
- **Per-project accents:** Each of 9 work cards has a unique accent color; text on cards uses `color-mix(in oklch, accent, textColor)` — never gray on color.
- **Type:** Fluid scale (`clamp()`), tight line-height (0.88–0.9), uppercase for headings/labels.
- **Motion:** `cubic-bezier(0.25, 1, 0.5, 1)` (ease-out-quart), transform + opacity only, `prefers-reduced-motion` supported.

## Impeccable skill
The `pbakaus/impeccable` marketplace is installed. The `frontend-design` skill is active and provides `/audit`, `/critique`, `/polish`, `/animate`, `/colorize`, `/bolder`, `/quieter`, and more.

Key rules already applied (do not regress):
- No Inter/Geist/system fonts
- No monospace as decoration
- No pure `#000`/`#fff`
- No gray text on colored backgrounds
- No alpha transparency as a substitute for proper palette
- No centering everything
- Correct easing (ease-out-quart, not ease, not bounce)

## Content
Trevor's portfolio content is in `CONTENT.md`. It was scraped from `trevorschulte.xyz` (Framer site — use `curl` + python strip to get rendered text, not WebFetch which can't execute JS).

## Commands
```bash
npm run dev    # dev server
npm run build  # production build (use to verify before committing)
```
