# ⚡ Quick Start — Orion Ascend Media

## 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript 5
- Autoprefixer & PostCSS

## 2. Run Dev Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## 3. What You'll See

- ✅ Homepage with hero, services, method, work, channels, packages, insights
- ✅ Sticky header with crest + nav
- ✅ Gold embossed wordmark with sparkle stars
- ✅ Pulse waveform background
- ✅ All 12 pages fully functional

## 4. Before Deploying

See checklist in `HANDOFF.md`:

- [ ] Replace `public/og.png` (1200×630)
- [ ] Add favicons (see `public/ASSETS_TODO.md`)
- [ ] Update Formspree endpoint (`app/contact/page.tsx` line 15)
- [ ] Add Calendly link (`app/contact/page.tsx` line 95)
- [ ] Add analytics tag (`app/layout.tsx`)
- [ ] Review legal pages (`/privacy`, `/terms`)

## 5. Build & Deploy

```bash
npm run build   # Test production build
npm start       # Run production locally
```

Then deploy to **Vercel** (recommended):

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import repo
4. Click **Deploy**
5. Add custom domain: `orionaimedia.com`

See `DEPLOY.md` for full deployment guide.

---

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Update Fonts
Edit `app/layout.tsx` → `Cinzel` and `Inter` imports

### Add Analytics
Edit `app/layout.tsx` → Add `<Script>` tag in `<head>`

### Add More Pages
Create new folder in `app/` with `page.tsx`

### Edit Content
All content is in `app/[page]/page.tsx` files — just edit the JSX

---

## 📚 Docs

- `README.md` — Project overview
- `DEPLOY.md` — Deployment guide
- `HANDOFF.md` — Complete checklist & design system
- `PROJECT_SUMMARY.md` — What was delivered
- `public/ASSETS_TODO.md` — Asset specifications

---

**Questions?** Check the docs or contact hello@orionaimedia.com

**Built with Next.js 14 + Tailwind CSS + TypeScript**

