# ⚡ Quick Reference Card

## 🌐 Your Site

**Local Dev**: http://localhost:3000 (running now!)  
**Domain**: orionaimedia.com (pending deployment)

---

## 📋 Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Build for production
npm start        # Run production build
npm install      # Install dependencies
```

---

## 📂 Key Files

**Pages**: `app/[page]/page.tsx`  
**Components**: `components/[Component].tsx`  
**Styles**: `styles/globals.css`  
**Config**: `tailwind.config.js`, `next.config.js`  
**Assets**: `public/`  

---

## 🎨 Design Tokens

### Colors
```css
Graphite-900  #0E141B  /* Page background */
Royal-Blue    #183B73  /* Accents */
Pulse-Cyan    #53D3F8  /* Links */
Gold gradient #FFF1C2 → #E6C56E → #B3842A
```

### Utilities
```css
.text-gold-gradient  /* Gold gradient text */
.gold-emboss         /* Embossed effect */
.metallic            /* Body text color */
.small-caps          /* Labels */
```

---

## 🔧 To-Do Before Launch

- [ ] Replace `public/og.png` (1200×630)
- [ ] Upload favicons (use realfavicongenerator.net)
- [ ] Update Formspree: `app/contact/page.tsx:15`
- [ ] Add Calendly: `app/contact/page.tsx:95`
- [ ] Add analytics: `app/layout.tsx`
- [ ] Deploy to Vercel

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com/new
3. Import repo
4. Click "Deploy"
5. Add domain: orionaimedia.com

**DNS**:
- A record: `76.76.21.21`
- CNAME www: `cname.vercel-dns.com`

---

## 📚 Documentation

- `FINAL_SUMMARY.md` — Complete overview
- `STATUS.md` — Current status + checklist
- `QUICKSTART.md` — Setup guide
- `DEPLOY.md` — Deployment guide
- `DESIGN_TOKENS_REFERENCE.md` — Design system

---

## ✅ Status

**Built**: ✅ 22 routes, 87 KB first load  
**Running**: ✅ Dev server on port 3000  
**Ready**: ⏳ Upload assets + integrate + deploy  

---

**View now**: http://localhost:3000

