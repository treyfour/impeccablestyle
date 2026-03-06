# Design System — Sutera.ch → Trevor Schulte

Extracted from sutera.ch CSS source. Adapted for Next.js + Tailwind 4.

---

## Typography

### Fonts
| Role | Original (sutera.ch) | Used here |
|------|---------------------|-----------|
| Primary (headings, nav, body) | PP Neue Montreal (paid) | Geist Sans |
| Secondary (labels, captions) | Neue Haas Grotesk (paid) | Geist Mono |

Both available via `next/font/google` equivalents. Geist is available via `next/font/local` or `geist` npm package.

### Type Scale (fluid, viewport-relative)
All sizes use `svw` units matching sutera.ch's fluid scale.

| Token | Size | Line Height |
|-------|------|-------------|
| `--text-xxl` | 11.19svw | 0.92 |
| `--text-xl` | 9.66svw | 0.90 |
| `--text-l` | 6.36svw | 0.90 |
| `--text-ls` | 5.08svw | 0.90 |
| `--text-m` | 4.07svw | 0.90 |
| `--text-s` | 3.56svw | 1.10 |
| `--text-xs` | 3.3svw | 1.10 |
| `--text-xxs` | 3.05svw | 0.90 |
| `--text-10` | max(10px, 2.54svw) | — |

### Font Weights
```
light:      300
normal:     400
medium:     500
semi-bold:  600
bold:       700
extra-bold: 800
```

### Conventions
- Headings: uppercase, tight line-height (0.9), bold or extra-bold
- Nav/labels: uppercase, small, tracking wide
- Body: normal weight, 1.1 line-height

---

## Color System

### Base Palette
```
--color-black:     #000000
--color-dark:      #121212
--color-grey:      #9e9e9e
--color-dark-grey: #cbcbcb
--color-white:     #ffffff
--color-blue:      #344dbb
--color-green:     #59e7ca
```

### Project Accent Colors
Each project card gets a unique background tint (sutera.ch pattern).
Assigned to Trevor's 9 projects:

| Project | Accent |
|---------|--------|
| AI Agents | #BCD4FD (light blue) |
| Prizeout Checkout | #E3C0A9 (warm beige) |
| Unlocking Enterprise | #C9C1FF (lavender) |
| Reducing Spend | #E88150 (coral) |
| Solace | #91B394 (sage green) |
| Increasing Transfers | #FFA796 (salmon) |
| Admin Compare & Sync | #F9CCDD (blush pink) |
| MSG Camera Shy | #59E7CA (teal) |
| Qualcomm | #996B4A (warm brown) |

---

## Spatial System

### Grid
```
--grid-margin:  20px (mobile) → 24px (desktop)
--grid-gutter:  20px (mobile) → 24px (desktop)
```

### Section Padding
- Top sections: `pt-[12svh]` (desktop)
- Bottom sections: `pb-[13.77svh]`
- Horizontal: `px-(--grid-margin)`

---

## Motion
- Page load: opacity fade on content blocks
- Project cards: subtle lift on hover (translateY -2px + shadow)
- Entrance: staggered fade-up on project grid items
- Easing: `cubic-bezier(0.25, 0, 0, 1)` (no bounce/elastic)
- Duration: 400–600ms for entrances, 200ms for hovers

---

## UI Patterns
- Navigation: fixed top, uppercase, small text, minimal
- Project grid: 2-col desktop, 1-col mobile, each card colored with accent
- Card content: project title (large), short description, tag pills
- About: full-width text block, no card wrapper
- Footer/CTA: centered, simple, email + LinkedIn

---

## Breakpoints (from sutera.ch)
```
mobile:  default
tablet:  custom-tab  (~768px+)
desktop: custom-desktop (~1280px+)
```
