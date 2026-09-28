# joeray-website

A quiet personal site built with [Astro](https://astro.build). See [`docs/DESIGN.md`](docs/DESIGN.md) for the design direction ("The Clearing") and how it's implemented.

## Working on it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

- `src/site.config.ts`: your name, description, reply-by-email address and nav
- `src/pages/index.astro`: Home
- `src/pages/now.astro`: What I'm Working On
- `src/content/writing/*.md`: posts (one markdown file each)

## Writing a post

Create `src/content/writing/my-post.md`:

```md
---
title: My post
description: One quiet line about it.   # optional
date: 2026-10-01
draft: true                             # optional; drafts only show in dev
---

Your words here.
```

It shows up at `/writing/my-post/` with its reading time, and ends with an invitation to reply by email.

## Before launch

- Set `site` in `astro.config.mjs` to your real domain.
- Set `email` in `src/site.config.ts`.
- Replace the placeholder copy on the Home and Now pages, and the sample post.
