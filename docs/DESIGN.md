# Design Direction: "The Clearing"

The site should feel like a retreat from the internet: a quiet, warm room at the edge of a foggy forest where visitors slow down and stay a while. Serene, warm, grounded. Never loud, busy, or template-like.

- **Modes:** Light = "fog" (warm cream bg, plum-brown ink). Dark = "forest office" (deep green bg, cream text, wood accents).
- **Palette:** fog `#EEEAE3`, forest `#1E3530`, canopy text `#3F3538`, mist secondary `#8A7F7C`, wood accent `#C9A27A`. One accent only, no saturated colors.
- **Layout:** generous whitespace; asymmetric compositions weighted bottom-left, open top-right; ~65ch reading width; thin wood-tone frames on images like framed prints.
- **Type:** literary serif (Newsreader or Source Serif) for headings and body at 19–20px with 1.7 line-height; small quiet sans or mono for labels, dates, and nav.
- **Texture/motion:** subtle paper/film grain; slow fade-ins on scroll only; respect `prefers-reduced-motion`.
- **Presence:** no pop-ups, chat widgets, autoplay, or social feeds. Minimal nav (name, Home, What I'm Working On, Writing). Posts show reading time, have no sidebar, and end with an invitation to reply by email.
- **Microcopy tone:** a calm host. "Stay a while." "More from the desk."
- **Avoid:** gradients, neon, dense card grids, stock photos, sales CTAs in the hero.

## How it's implemented

| Brief | Where |
| --- | --- |
| Palette and both modes | CSS variables at the top of `src/styles/global.css` |
| Mode switch (fog / forest) | `src/components/ThemeToggle.astro`. Follows the system setting until the visitor picks one. |
| Left-leaning column, 65ch | `.column` in `global.css` |
| Framed prints | `src/components/Print.astro`, plus any `![]()` image in a post |
| Grain | `body::before` in `global.css` (inline SVG noise, no image request) |
| Slow fade-ins | add `data-reveal` to an element. Handled in `src/layouts/Base.astro`. Off under reduced motion. |
| Reading time and reply-by-email | `src/pages/writing/[...slug].astro` |

**Accessibility note:** mist `#8A7F7C` is only 3.2:1 on fog, which is too faint for small text. It is used as given for rules and decorative lines. Small labels use a slightly deeper mist (`--ink-soft`: `#6E6360` on fog, `#A89E98` on forest) so they pass WCAG AA. Wood is never used for text on fog, where the contrast is 2:1.
