const plans = [
    {
        name: 'Starter — Launch Site',
        price: '$2,500 one-time',
        features: [
            '1–5 pages (Home, About, Services, Contact)',
            'Custom responsive UI (Next.js + Tailwind)',
            'Baseline SEO (titles, meta, OG) + sitemap/robots',
            'Contact form (Formspree) + analytics tag',
            'Performance target: Lighthouse ≥90',
            '2 rounds of revisions + Vercel deploy'
        ]
    },
    {
        name: 'Growth — Site Plus',
        price: '$6,500 one-time',
        features: [
            '6–12 pages + blog (MDX) and reusable components',
            'Design system tokens + advanced navigation',
            'Schema (Organization, Breadcrumb) + OG images',
            'A11y: WCAG AA pass + reduced-motion support',
            'Content authoring docs + handoff',
            '3 rounds of revisions + staging preview'
        ]
    },
    {
        name: 'Enterprise — Custom Build',
        price: 'Custom (from $12,000)',
        features: [
            'Headless CMS (Sanity/Contentful) + content modeling',
            'Complex IA (12–25+ pages), search, filters, i18n',
            'Integrations (Auth, CRM, analytics pipeline)',
            'Advanced animations and interactions',
            'SEO program (schema, redirects, migration)',
            'Launch + 30 days of post‑launch support'
        ]
    }
];

export default function PackagesTable() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
                <div key={p.name} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-6 hover:border-pulse-hover/60 transition-colors">
                    <div className="text-gold-gradient text-lg font-semibold">{p.name}</div>
                    <div className="mt-1 text-2xl text-metal-text">{p.price}</div>
                    <ul className="mt-4 space-y-2 text-sm text-metal-text/80">
                        {p.features.map(f => (<li key={f}>• {f}</li>))}
                    </ul>
                    <a href="/contact" className="mt-6 inline-block rounded-button border border-royal-shade/50 px-4 py-2 text-sm text-pulse-cyan hover:text-pulse-hover">Request Proposal</a>
                </div>
            ))}
        </div>
    );
}

