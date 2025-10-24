import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import puppeteer from 'puppeteer';

const origin = process.env.SITE_ORIGIN || 'http://localhost:3000';
const outRoot = path.join(process.cwd(), 'public', 'work');
await fs.mkdir(outRoot, { recursive: true });

const cases = [
  { id: 'alpha', url: '/',         title: 'Homepage Revamp',   metrics: ['LCP 4.2s → 1.9s', 'CTR +38%', 'Leads +22%'] },
  { id: 'beta',  url: '/services', title: 'Services Clarity',  metrics: ['Time on Page +24%', 'Clicks +31%', 'Bounce −18%'] },
  { id: 'gamma', url: '/method',   title: 'Method Readability',metrics: ['Scroll Depth +29%', 'CTA Clicks +21%', 'CLS < 0.1'] },
];

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox','--disable-setuid-sandbox']
});

for (const c of cases) {
  const dir = path.join(outRoot, `case-${c.id}`);
  await fs.mkdir(dir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(`${origin}${c.url}`, { waitUntil: 'networkidle0', timeout: 60000 });

  const afterPng = await page.screenshot({ fullPage: false });
  const afterResized = await sharp(afterPng).resize(560, 420).png().toBuffer();
  await fs.writeFile(path.join(dir, 'after.png'), afterResized);

  const beforeResized = await sharp(afterPng)
    .resize(560, 420)
    .blur(6)
    .modulate({ brightness: 0.8, saturation: 0.8 })
    .png()
    .toBuffer();
  await fs.writeFile(path.join(dir, 'before.png'), beforeResized);

  const base = sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#0D1B2A' }
  }).png();

  const headerSvg = `
    <svg width="1200" height="90" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="1200" height="90" fill="#0D1B2A" />
      <rect x="0" y="86" width="1200" height="4" fill="#B87654" />
      <text x="40" y="58" font-size="34" font-family="system-ui,Segoe UI,Roboto" fill="#FFFFFF" font-weight="700">
        Case Study — ${c.title}
      </text>
    </svg>`;

  const metricsSvg = `
    <svg width="1200" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="1200" height="150" fill="transparent" />
      <text x="60" y="40" font-size="24" font-family="system-ui,Segoe UI,Roboto" fill="#E6FF4D" font-weight="700">${c.metrics[0]}</text>
      <text x="60" y="80" font-size="24" font-family="system-ui,Segoe UI,Roboto" fill="#E6FF4D" font-weight="700">${c.metrics[1]}</text>
      <text x="60" y="120" font-size="24" font-family="system-ui,Segoe UI,Roboto" fill="#E6FF4D" font-weight="700">${c.metrics[2]}</text>
    </svg>`;

  const card = await base
    .composite([
      { input: beforeResized, left: 60, top: 150 },
      { input: afterResized,  left: 1200 - 60 - 560, top: 150 },
      { input: Buffer.from('<svg width="6" height="630"><rect width="6" height="630" fill="#B87654"/></svg>') , left: 597, top: 0 },
      { input: Buffer.from(headerSvg), left: 0, top: 0 },
      { input: Buffer.from(metricsSvg), left: 0, top: 450 },
    ])
    .png()
    .toBuffer();

  await fs.writeFile(path.join(dir, 'card.png'), card);
  console.log('✓ Case card generated:', c.id);
  await page.close();
}

await browser.close();
console.log('✓ All case assets ready in /public/work/case-*/');
