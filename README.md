# Daniel Link Hub (Astro)

Minimal, modern personal link hub / portfolio built with Astro.

## Features

- EN / PT-BR language toggle (no i18n libraries)
- Dark / Light theme toggle with `localStorage` persistence
- Dark theme as default
- Responsive, mobile-first centered layout
- Link-focused cards, short about section, projects list, and minimal footer

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── LinkCard.astro
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── i18n.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build For Production

```bash
npm run build
npm run preview
```
