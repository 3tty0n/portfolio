# Yusuke Izawa — Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/49926149-a6ae-4954-a52c-be6b855a8f22/deploy-status)](https://app.netlify.com/projects/yizawa/deploys)

Personal academic portfolio site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── content/          # Markdown content (edit here to update text)
│   ├── blog/         # Blog posts
│   ├── home/         # Home page sections (hero, about, contact)
│   ├── services/     # Academic services & committee memberships
│   ├── supervision/  # Supervision entries (PhD, Master's, Bachelor's)
│   └── teaching/     # Teaching entries
├── components/       # Astro components (Nav, etc.)
├── data/             # Structured data (publications)
├── layouts/          # Page layouts
└── pages/            # Route pages
```

## Editing Content

All text content is managed via Markdown files in `src/content/`. Edit `.md` files to update the site — no need to touch `.astro` templates.

| Content | File(s) |
|---|---|
| Hero bio | `src/content/home/hero.md` |
| About section | `src/content/home/about.md` |
| Contact info | `src/content/home/contact.md` |
| Services | `src/content/services/services.md` |
| Supervision | `src/content/supervision/*.md` (one per student) |
| Teaching | `src/content/teaching/*.md` (one per course) |
| Blog posts | `src/content/blog/*.md` |

