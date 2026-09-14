# RINGA - Landing Page

Marketing landing page for **RINGA**, a proximity-based social app that shows real
people physically near you in real time. Rebuilt as a **React + TypeScript + Vite**
SPA styled with **Tailwind CSS v4** and animated with **Framer Motion**.

## Features

- **Bilingual** Hebrew (RTL) / English (LTR) with a live toggle, persisted to `localStorage`.
- **Animated proximity radar** hero visual (rotating sweep + pulsing "nearby" blips).
- **Scroll-reveal** entrances, staggered feature grid, mouse-follow card glow,
  spring-based hover/press feedback.
- Fully **`prefers-reduced-motion` aware** - animations collapse to instant for users
  who request reduced motion.
- Routed **Terms** (`/terms`) and **Privacy** (`/privacy`) pages.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── main.tsx                 # entry + providers (Router, Language)
├── App.tsx                  # routes + scroll restoration
├── index.css                # Tailwind v4 import, @theme tokens, base + keyframes
├── i18n/
│   ├── translations.ts      # all HE/EN copy + store links
│   └── LanguageContext.tsx  # language state, <html> lang/dir sync, persistence
├── components/              # Nav, Hero, RadarVisual, Features, Steps, etc.
└── pages/                   # Home, Terms, Privacy
```

## Design tokens

Brand colors and fonts live in `src/index.css` under `@theme`
(`--color-coral`, `--color-purple`, `--color-bg`, …), which Tailwind turns into
utilities like `bg-coral`, `text-muted`, `from-coral`, `border-line`.

## Deploy

Static output. Build and serve `dist/` on any static host (Netlify, Vercel,
Cloudflare Pages). For client-side routing, add a SPA fallback rewriting all
paths to `/index.html`.

---

> The original static export of this page is kept in [`landing/`](landing/) for
> reference and is fully superseded by the React app.
