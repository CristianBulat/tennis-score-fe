# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Production build
npm run preview  # Preview production build
```

There are no tests configured.

## Architecture

This is a single-page marketing/landing site for the **Tennis Score App** (iOS/watchOS app on the App Store). The entire UI lives in `src/App.jsx` — one React component with no routing, state, or external data fetching.

**Stack:** React 19 + Vite + Tailwind CSS v3

**Design tokens** (defined in `tailwind.config.js`):
- Colors: `court` (#0f3b2d, dark green background), `cream` (#f2e9d0, primary text), `limeGlow` (#c8ff4d, accent), `outline` (#d5d0bd)
- Font: `display` → Space Grotesk / Archivo (loaded externally, not bundled)
- Shadows: `card`, `soft`

**Static assets** in `public/screenshots/` — referenced directly as `/screenshots/*.png` in JSX.

The App Store URL is defined as `APP_STORE_URL` constant at the top of `App.jsx`.
