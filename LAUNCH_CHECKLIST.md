# 🚀 Launch Checklist — Orion Ascend Media

## Phase 1: Development ✅ COMPLETE

- [x] Design tokens configured
- [x] Tailwind setup with custom utilities
- [x] Next.js 14 + TypeScript configured
- [x] Google Fonts loaded (Cinzel + Inter)
- [x] All 12 pages built
- [x] Components created (Header, Hero, Footer, Cards, Packages, CTA)
- [x] Crest SVG integrated in header/footer
- [x] SEO metadata configured
- [x] Schema.org structured data added
- [x] Sitemap + robots.txt generated
- [x] Dependencies installed
- [x] Production build tested ✅
- [x] Dev server running ✅

## Phase 2: Assets ⏳ PENDING

- [ ] Create OG image (1200×630 PNG)
  - Dark graphite background (#0E141B)
  - Gold ring + yin-yang globe crest
  - "ORION ASCEND MEDIA" wordmark
  - Tagline: "IMAGINE. CREATE. TRANSCEND."
  - Pulse cyan waveform accent
  - Save as `public/og.png`

- [ ] Generate favicons
  - Use https://realfavicongenerator.net/
  - Upload 512×512 crest PNG
  - Download package
  - Extract files to `public/`:
    - [ ] favicon.ico
    - [ ] favicon-32x32.png
    - [ ] favicon-16x16.png
    - [ ] apple-touch-icon.png (180×180)
    - [ ] safari-pinned-tab.svg

## Phase 3: Integrations ⏳ PENDING

### Contact Form (Formspree)
- [ ] Create Formspree account at https://formspree.io
- [ ] Get form endpoint (e.g., `f/YOUR_FORM_ID`)
- [ ] Update `app/contact/page.tsx` line 15:
  ```typescript
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  ```

### Calendar Booking (Calendly)
- [ ] Get your Calendly link
- [ ] Update `app/contact/page.tsx` line 95:
  ```tsx
  href="https://calendly.com/your-link"
  ```

### Analytics
- [ ] Choose provider (Google Analytics, Plausible, or Fathom)
- [ ] Get tracking ID
- [ ] Add script tag in `app/layout.tsx` inside `<head>`
  
  **Google Analytics**:
  ```tsx
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </Script>
  ```
  
  **OR Plausible** (privacy-focused):
  ```tsx
  <Script
    src="https://plausible.io/js/script.js"
    data-domain="orionaimedia.com"
    strategy="afterInteractive"
  />
  ```

## Phase 4: Content Review ⏳ OPTIONAL

- [ ] Review About page narrative
- [ ] Update case studies in Work page (or keep placeholders)
- [ ] Add real blog posts to Insights (or keep samples)
- [ ] Review legal pages:
  - [ ] Update jurisdiction in Privacy Policy
  - [ ] Update jurisdiction in Terms of Service
  - [ ] Verify contact emails (privacy@, legal@)

## Phase 5: Pre-Launch Testing ⏳

- [ ] Open http://localhost:3000
- [ ] Test all navigation links
- [ ] Test mobile responsive (resize browser)
- [ ] Verify crest SVG displays correctly
- [ ] Check gold emboss text rendering
- [ ] Verify animations (sparkle, wave scroll)
- [ ] Test contact form fields (won't submit until Formspree added)
- [ ] Read through all pages for typos
- [ ] Test keyboard navigation (tab through links)
- [ ] Test with screen reader (optional but recommended)

## Phase 6: Deployment 🚀

### Git Setup
- [ ] Initialize Git (if not done):
  ```bash
  git init
  git add .
  git commit -m "Orion Ascend Media site launch"
  ```
- [ ] Create GitHub repository
- [ ] Push to GitHub:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/orionaimedia.git
  git branch -M main
  git push -u origin main
  ```

### Vercel Deployment
- [ ] Go to https://vercel.com/new
- [ ] Sign in with GitHub
- [ ] Click "Import Project"
- [ ] Select your repository
- [ ] Framework preset: Next.js (auto-detected)
- [ ] Click "Deploy"
- [ ] Wait ~2 minutes for build
- [ ] Note preview URL (e.g., `orion-ascend-media.vercel.app`)

### Custom Domain
- [ ] In Vercel dashboard → Settings → Domains
- [ ] Click "Add Domain"
- [ ] Enter `orionaimedia.com`
- [ ] Vercel will provide DNS instructions
- [ ] Go to your domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Update DNS records:
  - [ ] A record: `@` → `76.76.21.21`
  - [ ] CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (5-60 minutes)
- [ ] Verify site loads at https://orionaimedia.com

### SSL Certificate
- [ ] Vercel auto-provisions SSL (Let's Encrypt)
- [ ] Verify HTTPS works (green padlock in browser)
- [ ] Force HTTPS redirect (enabled by default in Vercel)

## Phase 7: Post-Launch QA ✅

### Functionality
- [ ] All pages load on live URL
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Contact form submits (check Formspree inbox)
- [ ] Calendly link opens booking page
- [ ] Analytics tracking fires (check dashboard)

### SEO
- [ ] Verify OG images: https://www.opengraph.xyz/
  - Test URL: https://orionaimedia.com
  - Should show your 1200×630 OG image
- [ ] Twitter Card validator: https://cards-dev.twitter.com/validator
- [ ] Submit sitemap to Google Search Console
  - Add property: orionaimedia.com
  - Submit sitemap: https://orionaimedia.com/sitemap.xml
- [ ] Check robots.txt: https://orionaimedia.com/robots.txt

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
  - Right-click → Inspect → Lighthouse tab
  - Select "Desktop" or "Mobile"
  - Click "Analyze page load"
  - Target scores:
    - [ ] Performance: 90+
    - [ ] Accessibility: 100
    - [ ] Best Practices: 100
    - [ ] SEO: 100
- [ ] Test on PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Verify Core Web Vitals (LCP, FID, CLS)

### Browsers & Devices
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox
- [ ] Edge
- [ ] Android Chrome

## Phase 8: Marketing & Launch 🎉

- [ ] Announce on social media
- [ ] Update LinkedIn company page
- [ ] Add to portfolio/case studies
- [ ] Update email signatures with new link
- [ ] Share with team/stakeholders
- [ ] Monitor analytics for first week

## Phase 9: Maintenance & Monitoring 📊

### Regular Tasks
- [ ] Monitor analytics weekly
- [ ] Check Formspree submissions
- [ ] Review Calendly bookings
- [ ] Update blog (Insights) monthly
- [ ] Update case studies as projects complete
- [ ] Monitor Google Search Console for issues

### Monthly
- [ ] Run Lighthouse audit
- [ ] Check for broken links
- [ ] Review Core Web Vitals
- [ ] Update dependencies:
  ```bash
  npm outdated
  npm update
  ```

### Quarterly
- [ ] Review and refresh copy
- [ ] Add new case studies
- [ ] Update pricing (if changed)
- [ ] Refresh blog content
- [ ] Check for SEO opportunities

---

## 🎯 Current Status

**Phase 1**: ✅ **COMPLETE** — Development done, build passing  
**Phase 2**: ⏳ **PENDING** — Assets ready to upload (Chat 3)  
**Phase 3**: ⏳ **PENDING** — Integrations to wire  
**Phase 4**: ⏳ **OPTIONAL** — Content review  
**Phase 5**: ⏳ **READY** — Test at http://localhost:3000  
**Phase 6**: ⏳ **READY** — Deploy when assets/integrations done  
**Phase 7**: ⏳ **POST-LAUNCH** — QA after deployment  
**Phase 8**: ⏳ **POST-LAUNCH** — Marketing  
**Phase 9**: ⏳ **ONGOING** — Maintenance  

---

## 📞 Support

If you encounter issues:

1. Check `FINAL_SUMMARY.md` for overview
2. Check `STATUS.md` for current state
3. Check `DEPLOY.md` for deployment help
4. Check `DESIGN_TOKENS_REFERENCE.md` for design specs
5. Revisit this checklist for missed steps

---

**Next milestone**: Upload assets (Chat 3), then deploy! 🚀


