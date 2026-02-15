# Dylan Messerly — Portfolio Site

Personal portfolio website built with Vite + React + TypeScript + React Router.

Live at: https://codedtx11.github.io/

## Tech Stack

- **Vite** — build tool and dev server
- **React 18** — UI framework
- **TypeScript** — type safety
- **React Router v6** — client-side routing
- **Bootstrap 5** — styling (CDN)
- **Gradio** — embedded AI Career Chatbot
- **Formspree** — contact form submissions

## Getting Started

```bash
npm install
npm run dev
```

Opens a local dev server with hot reload at `http://localhost:5173`.

## Deploying to GitHub Pages

```bash
npm run deploy
```

This does two things automatically:
1. Builds the site (`npm run build` → outputs to `dist/`)
2. Pushes `dist/` to the `gh-pages` branch on GitHub

GitHub Pages serves the `gh-pages` branch at https://codedtx11.github.io/.

### First-time setup

Go to GitHub repo → **Settings** → **Pages** → set **Source** branch to `gh-pages` → **Save**.

## Project Structure

```
src/
├── main.tsx              # Entry point, imports styles
├── App.tsx               # BrowserRouter + routes
├── pages/
│   ├── HomePage.tsx      # Full portfolio (single-page scroll)
│   └── ResumePage.tsx    # PDF resume viewer
├── components/
│   ├── layout/           # Navbar, Footer, ScrollToTopButton, EndBanner
│   ├── sections/         # Hero, AboutMe, AIChatbot, Education, etc.
│   └── ui/               # PopFadeCard, SurpriseButton
├── hooks/                # useBodyVisibility, useIntersectionObserver, useScrollToTop
├── types/                # Gradio + CSS type declarations
└── styles/
    └── style.css         # All styles (unchanged from original)
public/
└── assets/               # Images, resume PDF, 404.html
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage — full portfolio with smooth-scroll navigation |
| `/resume` | Embedded PDF resume viewer |
