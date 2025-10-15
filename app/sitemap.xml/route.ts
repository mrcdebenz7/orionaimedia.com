import { MetadataRoute } from 'next';

export async function GET() {
  const base = 'https://orionaimedia.com';
  const urls = [
    '/', '/services', '/method', '/work', '/channels', '/packages', '/insights', '/about', '/contact', '/privacy', '/terms'
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${base}${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
