# gabriellobo.dev

Personal portfolio website for Gabriel Lobo — SRE & Full-Stack Engineer.

## Tech Stack

- Vanilla HTML, CSS, TypeScript
- [Vite](https://vite.dev) for bundling and dev server
- [Inter](https://fonts.google.com/specimen/Inter) typeface via Google Fonts
- No frameworks or CSS libraries

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

The production build outputs to `dist/`.

## Project Structure

```
├── index.html          # Single-page HTML with all sections
├── src/
│   ├── main.ts         # IntersectionObserver for nav & scroll-reveal
│   └── style.css       # Full stylesheet with CSS custom properties
├── public/
│   ├── favicon.svg     # Site favicon
│   ├── icons.svg       # SVG sprite (GitHub, LinkedIn, email, etc.)
│   └── robots.txt      # Search engine crawling rules
└── package.json
```

## Features

- Dark theme with cyan accent
- Sticky sidebar profile card + scrollable content
- Icon-based section navigation with active state tracking
- Scroll-reveal entrance animations
- Fully responsive (desktop, tablet, mobile)
- Accessible (skip link, ARIA labels, semantic HTML, keyboard navigable)
- SEO-ready (meta tags, Open Graph, JSON-LD structured data)
