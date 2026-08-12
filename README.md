# BuildTrack

Marketing / product-showcase website for **BuildTrack** — a construction and build project tracking platform. This repository contains the public-facing showcase site only; the BuildTrack product/dashboard application is not part of this codebase.

## Tech Stack

- React 19 + Vite
- React Router (`react-router-dom`)
- Tailwind CSS 3 (`@tailwindcss/forms`, `@tailwindcss/container-queries`)
- Supabase (`@supabase/supabase-js`)
- PostCSS + Autoprefixer
- oxlint

## Getting Started

```bash
npm install
cp .env.example .env   # then fill in your Supabase credentials
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Project Structure

```text
BuildTrack/
├─ public/
│  └─ favicon.svg
├─ supabase/
│  └─ schema.sql
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   ├─ pages/
   │  ├─ Home.jsx
   │  └─ NotFound.jsx
   ├─ components/
   │  ├─ layout/
   │  │  ├─ Navbar.jsx
   │  │  └─ Footer.jsx
   │  ├─ home/
   │  └─ shared/
   │     ├─ Icon.jsx
   │     └─ ScrollToTop.jsx
   ├─ hooks/
   │  ├─ useReveal.js
   │  └─ useActiveSection.js
   ├─ lib/
   │  ├─ constants.js
   │  └─ supabase.js
   └─ assets/
```

## Environment Variables

See `.env.example`. Never commit real Supabase credentials — `.env` is gitignored.
