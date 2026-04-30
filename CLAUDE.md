@AGENTS.md

# Project: halenur-gurel Portfolio

Personal portfolio site for Halenur Gürel — a single-page app built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Layer | Library / Version |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 (PostCSS plugin, no config file) |
| Animations | Framer Motion 12 |
| 3D | React Three Fiber + Drei + Three.js |
| Theming | next-themes 0.4.6 (class-based dark mode) |
| Icons | lucide-react |
| Scroll detection | react-intersection-observer |
| Utilities | clsx |
| Fonts | Inter (sans), Space Grotesk (display), JetBrains Mono (mono) — all via `next/font/google` |

## File Structure

```
src/
  app/
    layout.tsx          # Root layout — fonts, ThemeProvider, metadata
    page.tsx            # Single page, composes all sections
    globals.css         # Tailwind import + CSS custom properties (theme tokens, utilities)
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
      ThemeProvider.tsx  # Wraps next-themes, sets class="dark" on <html>
  lib/
    data.ts             # All static content (bio, experience, skills, projects, education, contact)
public/
  profile.jpg
```

## Design System

### Color Tokens (defined in `globals.css`)

Semantic tokens (light/dark aware):
- `--background`, `--surface`, `--border`
- `--text-primary`, `--text-secondary`
- `--accent` → terracotta, `--accent-secondary` → amber, `--accent-tertiary` → sage, `--accent-quaternary` → steel
- `--glow`, `--glow-secondary`

Fixed palette (same in both modes):
`--color-blush`, `--color-rose`, `--color-terracotta` (#dd785b), `--color-amber` (#ea994d), `--color-yellow`, `--color-chartreuse`, `--color-sage`, `--color-mint` (#b4d8d4), `--color-steel`, `--color-lavender`, `--color-mauve` (#a299b8)

### CSS Utility Classes
- `.gradient-text` — multi-stop gradient text (terracotta → amber → chartreuse → mint → mauve)
- `.gradient-bg` — same gradient as background fill
- `.gradient-border` — 1px gradient border via `::before` mask trick
- `.glow-accent` / `.glow-accent-strong` — box-shadow glow using `--glow`

### Dark Mode
Class-based: ThemeProvider toggles `class="dark"` on `<html>`. In Tailwind v4 use the custom variant already defined in globals.css:
```css
@custom-variant dark (&:where(.dark, .dark *));
```
Use `dark:` prefix in Tailwind classes as normal.

## Conventions

- All page content lives in `src/lib/data.ts` — add or update copy there, not in components.
- Section components import data from `data.ts` and are composed in `src/app/page.tsx`.
- Tailwind v4 uses CSS-first config — no `tailwind.config.ts`. Customizations go in `globals.css` under `@theme inline`.
- Font variables are declared in `layout.tsx` and mapped in `globals.css` (`--font-sans`, `--font-display`, `--font-mono`).
- Accent colors per section: terracotta (Frontend/current job), amber (Backend/internship), mint (Tools/older roles), mauve (Marketing).

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```
