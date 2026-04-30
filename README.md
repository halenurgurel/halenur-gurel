# Halenur Gürel — Portfolio

Personal portfolio site built with Next.js 16, React 19, and Tailwind CSS v4. Features smooth scroll animations, dark/light mode, and a fully responsive single-page layout.

**Live Demo:** [halenur-gurel.vercel.app](https://halenur-gurel.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Framer Motion 12 |
| Theming | next-themes (class-based dark mode) |
| Icons | lucide-react |
| Scroll detection | react-intersection-observer |
| Fonts | Inter · Space Grotesk · JetBrains Mono |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout — fonts, ThemeProvider, metadata
    page.tsx         # Single page, composes all sections
    globals.css      # Tailwind import + CSS tokens + utility classes
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Contact.tsx
    ui/
      ThemeToggle.tsx
      GitHubIcon.tsx
    providers/
      ThemeProvider.tsx
  lib/
    data.ts          # All static content (experience, skills, projects, education, contact)
public/
  profile.jpg
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Design System

Color tokens and utility classes are defined in [src/app/globals.css](src/app/globals.css).

**Semantic tokens** (light/dark aware): `--background`, `--surface`, `--border`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-secondary`, `--glow`, `--glow-secondary`

**Palette**: blush, rose, amber, sage, mint, steel, lavender, mauve

**Utility classes**: `.gradient-text`, `.gradient-border`, `.glow-accent`

Dark mode is class-based — `ThemeProvider` toggles `class="dark"` on `<html>`.

---

## Content

All page copy lives in [src/lib/data.ts](src/lib/data.ts). To update text, skills, projects, or experience, edit that file — no component changes needed.

---

## License

MIT
