import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const brand = { bg: '#0D1B2A', copper: '#B87654', lime: '#E6FF4D' } as const;

const titles: Record<string, { t: string; d: string }> = {
  home:     { t: 'Acquire • Improve • Recycle', d: 'Web assets that pay for themselves.' },
  services: { t: 'Services', d: 'Revamps, Care Plans, and Programmatic SEO.' },
  work:     { t: 'Case Studies', d: 'Before/After: speed, UX, and leads.' },
  method:   { t: 'Method', d: '30/60/90 — Acquire → Improve → Recycle.' },
  packages: { t: 'Packages', d: 'Clear options. Clear outcomes.' },
  contact:  { t: 'Let’s Start', d: 'Book a 30-min revamp consult.' },
  insights: { t: 'Insights', d: 'Short, actionable playbooks.' },
  about:    { t: 'About', d: 'Orion Ascend Media.' },
};

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const u = new URL(req.url);
  const slug = (params.slug || 'home').toLowerCase();
  const fallback = { t: 'Orion Ascend Media', d: 'Acquire • Improve • Recycle' };
  const preset = titles[slug] ?? fallback;
  const t = u.searchParams.get('title') ?? preset.t;
  const d = u.searchParams.get('desc') ?? preset.d;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: `linear-gradient(135deg, ${brand.bg} 0%, #13253A 60%, ${brand.copper} 120%)`,
          color: 'white',
          padding: '64px',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '72%' }}>
          <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1 }}>Orion Ascend Media</div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 8 }}>{t}</div>
          <div style={{ fontSize: 24, opacity: 0.95, marginTop: 10 }}>{d}</div>
        </div>
        <div style={{ width: 14, height: '80%', background: brand.lime, borderRadius: 10 }} />
      </div>
    ),
    { ...size }
  );
}
