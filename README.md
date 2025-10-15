# Orion Ascend Media — Next.js 14 + Tailwind

## Quickstart

```bash
pnpm i
pnpm dev
```

## Upload assets
- public/crest.svg
- public/og.png (1200x630)
- public/favicon.ico, favicon-32x32.png, favicon-16x16.png
- public/apple-touch-icon.png, public/safari-pinned-tab.svg

## Branding
- Palette: Graphite-900 #0E141B, Graphite-800 #151D28, Royal-Blue #183B73 (shade #0E2F63), Pulse-Cyan #53D3F8 (hover #34B6E3), Gold gradient #FFF1C2→#E6C56E→#B3842A, Metallic #E5E7EB.
- Typography: Cinzel (headings), Inter (body). Small-caps utilities provided.

## Routes
/ /services /method /work /channels /packages /insights /insights/[slug] /about /contact /privacy /terms 404

## SEO
- app/robots.txt/route.ts
- app/sitemap.xml/route.ts
- Metadata in app/layout.tsx

## Forms & Calendar
- Contact form posts to Formspree placeholder; replace action with your endpoint.
- Calendar link placeholder: https://cal.com/your-handle

## Performance
- Starfield + wave textures are CSS-only and respect prefers-reduced-motion.
- Keep images optimized (PNG ≤400KB for OG).

## Deploy (Vercel)
- Connect repo, set domain orionaimedia.com
- `pnpm build && pnpm start` for preview

