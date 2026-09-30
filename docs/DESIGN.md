# Design: "The Clearing"

The site follows **The Clearing** design system: https://claude.ai/artifact/QLBwqhZAVgpjBfseE8QE8p. Its README and `tokens.json` are the source of truth. This file only records how the system maps onto this codebase.

In short, it's a retreat from the internet. **Serene. Warm. Grounded.** Fog (morning) is the light mode, Forest (evening) is the dark mode, there's one text accent, the type is literary serif, and the pages are mostly empty space.

## Where things live

| System | Where |
| --- | --- |
| Tokens (color, type scale, spacing, layout, shadow) | CSS custom properties at the top of `src/styles/global.css`, one per token with the same name (`--surface`, `--ink`, `--accent`, …). Fog values are on `:root` and Forest values on `[data-theme='forest']`. |
| ModeToggle (Morning / Evening) | `src/components/ThemeToggle.astro`, in the header. It follows the system setting until the visitor picks a mode, and fades over 0.9s. |
| SiteHeader, diamond mark | `src/components/Header.astro`. Essay pages pass `essay` to get "← Back to writing" with the name centered. |
| SectionHeading (numbered label + light heading) | `.section`, `.section-label` and `.hair` in `global.css`; used on Home |
| EssayEntry | `src/components/PostList.astro`: `rows` on the Writing page, `stacked` on Home |
| TextLink | `.text-link` in `global.css` |
| FramedPrint | `src/components/Print.astro` (14px frame, or 12px with `small`), plus any `![]()` image in a post |
| PullQuote (bordered variant) | `.prose blockquote` |
| Essay ending (three diamonds) | `src/pages/writing/[...slug].astro` |
| Paper grain | `body::before` (two layered dot patterns at 3–5% ink) |
| Slow fade-ins | add `data-reveal` to an element; handled in `src/layouts/Base.astro`. Turned off under reduced motion. |

Posts can set an optional `topic` in their front matter. It shows in the writing list and the post's meta line.

## Deliberate departures

- **No reply-by-email note.** The system ends every essay with a ReplyNote inviting email. This site intentionally doesn't mention or offer email yet, so essays end with the three diamonds and "Thanks for staying a while" instead.
- **Fonts are self-hosted** through Fontsource (Newsreader variable, IBM Plex Mono) rather than loaded from Google Fonts. The faces are the same.
- **Responsive sizes.** Display sizes, the section gap and the gutter scale down on small screens with `clamp()`, reaching the system's exact values (112/76/60/38px, 200px, 96px) on desktop. Body text stays at 21px everywhere.
