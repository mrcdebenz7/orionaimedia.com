# Orion Ascend Media — Next.js 14 + Tailwind

Production-ready website for **Orion Ascend Media** (Orion Digital AI), featuring a gold/royal-blue/pulse-cyan design system inspired by the brand logo.

---

## Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install

# Run dev server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts, metadata, wave background
  page.tsx            # Homepage
  services/           # Services page
  method/             # Method page
  work/               # Case studies
  channels/           # Podcast, YouTube, Newsletter
  packages/           # Pricing tiers
  insights/           # Blog index
  insights/[slug]/    # Blog post pages
  about/              # About page
  contact/            # Contact form
  privacy/            # Privacy policy
  terms/              # Terms of service
  not-found.tsx       # 404 page
  robots.ts           # robots.txt
  sitemap.ts          # sitemap.xml

components/
  Header.tsx          # Sticky nav with crest
  Hero.tsx            # Homepage hero with gold ring + stars
  Footer.tsx          # Sitemap footer
  Cards.tsx           # Reusable card grids
  PackagesTable.tsx   # Pricing comparison
  CTA.tsx             # Discovery call CTA band

public/
  crest.svg           # Optimized logo crest
  og.png              # Open Graph image (1200×630, to be replaced)
  favicon.ico         # Favicon (to be replaced)
  apple-touch-icon.png # iOS icon (to be replaced)
  site.webmanifest    # PWA manifest

styles/
  globals.css         # Tailwind + custom utilities

tailwind.config.js    # Design tokens, animations
postcss.config.js
next.config.js
tsconfig.json
package.json
```

---

## Design System

### Colors

- **Graphite-900** `#0E141B` (page background)
- **Graphite-800** `#151D28` (panels)
- **Royal-Blue** `#183B73` (globe, accents), shade `#0E2F63`
- **Pulse-Cyan** `#53D3F8` (waveforms, links), hover `#34B6E3`
- **Imperial Gold** gradient `#FFF1C2 → #E6C56E → #B3842A` (wordmark, rules)
- **Metallic** `#E5E7EB` (body text)

### Typography

- **Headings:** Cinzel (Google Fonts), tracking `0.02em`
- **Body:** Inter (Google Fonts)
- **Small-caps:** utility class `.small-caps` with `0.08em` tracking

### Motifs

- Gold ring + star glyphs (hero)
- Pulse waveform (background layer)
- Starfield micro-texture
- Yin-yang globe (crest)

### Motion

- Sparkle animation on stars (1.8s)
- Wave scroll background (18s linear)
- Respects `prefers-reduced-motion`

---

## Content Checklist

- [ ] Replace `public/og.png` with 1200×630 branded Open Graph image
- [ ] Replace `public/favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`
- [ ] Add `public/apple-touch-icon.png` (180×180)
- [ ] Add `public/safari-pinned-tab.svg` (mask icon)
- [ ] Update Formspree endpoint in `app/contact/page.tsx` (line 15)
- [ ] Add Calendly link in `app/contact/page.tsx` (line 95)
- [ ] Add analytics tag (Google Analytics, Plausible, etc.) in `app/layout.tsx`
- [ ] Replace placeholder case studies in `/work` with real data
- [ ] Add real blog posts or integrate CMS (Contentful, Sanity, MDX)
- [ ] Update legal placeholders in `/privacy` and `/terms`

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab
2. Connect repo to Vercel
3. Set `NODE_ENV=production`
4. Deploy

### Other Platforms

```bash
npm run build
npm start
```

Serve the `.next` build output on your platform of choice (Netlify, Cloudflare Pages, Render, etc.).

---

## SEO & Schema

- Metadata configured in `app/layout.tsx` and per-page
- Sitemap generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- **TODO:** Add Organization and BreadcrumbList schema via `next/head` or JSON-LD in layout

---

## Performance

- Tailwind CSS purged in production (target: <100KB)
- Fonts preloaded via `next/font/google`
- SVG crest optimized
- Lazy loading images (use `next/image` for future assets)
- Target Lighthouse score: 90+

---

## Accessibility

- WCAG AA contrast maintained
- Semantic HTML (headings, landmarks, labels)
- Focus states on interactive elements
- Respects `prefers-reduced-motion`

---

## Form Integration

Contact form uses **Formspree** (placeholder). To wire up:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
3. Replace in `app/contact/page.tsx` line 15

---

## Analytics

Add your analytics provider of choice:

- **Google Analytics:** Add `<Script>` tag in `app/layout.tsx`
- **Plausible:** Add script tag or `next/script`
- **Fathom:** Same approach

---

## License

Proprietary. All rights reserved by Orion Ascend Media.

---

**Questions?** Contact us at hello@orionaimedia.com
