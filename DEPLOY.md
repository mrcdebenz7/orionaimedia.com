# Deployment Guide — Orion Ascend Media

## Pre-Deploy Checklist

- [ ] Replace placeholder assets in `public/` (see `public/ASSETS_TODO.md`)
- [ ] Update Formspree endpoint in `app/contact/page.tsx` (line 15)
- [ ] Add Calendly link in `app/contact/page.tsx` (line 95)
- [ ] Add analytics (Google Analytics, Plausible) in `app/layout.tsx`
- [ ] Review legal pages (`/privacy`, `/terms`) and update jurisdiction/contact
- [ ] Add real case studies in `/work` page
- [ ] Optionally integrate CMS for `/insights` (Contentful, Sanity, MDX)

---

## Deployment: Vercel (Recommended)

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Orion Ascend Media site"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your Git repository
   - Framework preset: Next.js
   - Root directory: `./`
   - Build command: `next build` (default)
   - Output directory: `.next` (default)

3. **Environment Variables** (if needed)
   - Add any API keys or secrets in Vercel dashboard under Settings → Environment Variables

4. **Deploy**
   - Click **Deploy**
   - Vercel will auto-build and deploy
   - Preview URL will be generated (e.g., `orion-ascend-media.vercel.app`)

5. **Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add `orionaimedia.com` and `www.orionaimedia.com`
   - Update DNS records at your registrar:
     - `A` record: `76.76.21.21` (Vercel)
     - `CNAME` record: `cname.vercel-dns.com`
   - Wait for DNS propagation (5-60 min)

---

## Deployment: Netlify

1. **Push to Git** (same as above)

2. **Connect to Netlify**
   - Go to https://app.netlify.com/start
   - Connect to Git repository
   - Build command: `npm run build` or `pnpm build`
   - Publish directory: `.next`

3. **Add `netlify.toml`** (optional, for cleaner config)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

4. **Deploy & Custom Domain**
   - Similar to Vercel: add domain in Netlify dashboard
   - Netlify DNS or external DNS (use Netlify nameservers or CNAME)

---

## Deployment: Self-Hosted (VPS, AWS, etc.)

1. **Build**
   ```bash
   npm run build
   ```

2. **Start**
   ```bash
   npm start
   # or with PM2:
   pm2 start npm --name "orion-ascend" -- start
   ```

3. **Reverse Proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name orionaimedia.com www.orionaimedia.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL (Let's Encrypt)**
   ```bash
   sudo certbot --nginx -d orionaimedia.com -d www.orionaimedia.com
   ```

---

## Post-Deploy

- [ ] Test all pages and links
- [ ] Verify OG images on https://www.opengraph.xyz/ or Twitter Card Validator
- [ ] Run Lighthouse audit (target 90+)
- [ ] Submit sitemap to Google Search Console: `https://orionaimedia.com/sitemap.xml`
- [ ] Test contact form (Formspree)
- [ ] Monitor analytics (check tracking code fires)

---

## Maintenance

- **Updates**: Pull latest changes, `npm install`, `npm run build`, redeploy
- **Content**: Update case studies, blog posts, packages as needed
- **Performance**: Monitor Core Web Vitals via Google Search Console or Vercel Analytics

---

**Questions?** Refer to `README.md` or contact hello@orionaimedia.com

