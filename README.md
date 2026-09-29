# Sarthak Chaurasia — Portfolio

[![CI](https://github.com/Sxrthak/Sarthak-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Sxrthak/Sarthak-Portfolio/actions/workflows/ci.yml)

A premium, animated portfolio for a Full-Stack & Cloud Engineer, built as a "living cloud infrastructure" experience.

**Stack:** React 18 · Vite · Framer Motion · hand-built SVG.

## Highlights

- **Animated CI/CD pipeline diagram** — the hero centerpiece: interactive nodes (git → terraform → docker → ECR → EC2) with flowing packets and hover states.
- **Terraform-apply boot loader** — a short, skippable boot sequence on first load.
- **Custom cursor** with a lagging ring that reacts to interactive elements (pointer-fine devices only).
- **Magnetic buttons**, **3D tilt project cards** with a moving glare, **animated metric counters**, a scroll progress bar, an infinite skills marquee, and an animated experience timeline.
- **Interactive terminal** — type `help`, `projects`, `skills`, `resume`… with tab-completion and history; Ctrl/⌘+K jumps to it.
- **Live GitHub feed** — recently pushed public repos, fetched from the GitHub API (hidden if the API is unavailable).
- **Link previews & SEO** — Open Graph image (`public/og-image.png`) and schema.org Person data in `index.html`.
- **CI** — GitHub Actions builds every push and pull request.
- **Fully responsive** with an adaptive mobile menu, and **`prefers-reduced-motion`** respected throughout.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The built site lands in `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Editing your content

Everything lives in [`src/data.js`](src/data.js) — name, summary, skills, experience, projects, certifications, links.

Your résumé PDF is served from `public/Sarthak_Chaurasia_Resume.pdf` (the "Résumé" buttons download it). Replace that file to update the download.

## Project structure

```
src/
  data.js            All portfolio content (edit here)
  index.css          Design tokens + global styles
  App.css            Component styles
  App.jsx            Composition
  hooks/             Scroll spy, count-up, in-view
  components/        Nav, Hero, PipelineDiagram, About, Skills,
                     Experience, Projects, Certs, Contact, Cursor, Loader…
```
