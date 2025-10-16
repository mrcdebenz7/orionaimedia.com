const plans = [
    {
        name: 'Launch Pack (Custom Build)',
        price: 'From $2,500',
        features: [
            'Design system + CMS setup (Next.js + Tailwind)',
            '5–12 core pages with baseline SEO + sitemap/robots',
            'Forms/booking embed + analytics + event mapping',
            'Performance target: Lighthouse ≥90; a11y pass',
            'Outcome: launch‑ready lead funnel with tracking'
        ]
    },
    {
        name: 'Revamp Sprint',
        price: 'From $4,500',
        features: [
            'Speed + Core Web Vitals improvements',
            'IA cleanup, schema, copy tuning, CRO paths',
            'Analytics QA + error cleanup; optional OIA bot',
            'Outcome: faster UX, clearer messaging, higher capture rate'
        ]
    },
    {
        name: 'Lead‑Gen Microsite (7‑Day)',
        price: 'From $1,800',
        features: [
            'Single‑purpose landing + thank‑you page',
            'Offer copy + form to OIA CRM or booking embed',
            'Tracking + event mapping; fast, lightweight build',
            'Outcome: quick launch to capture and route demand'
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

