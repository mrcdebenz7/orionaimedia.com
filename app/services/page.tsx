import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { webPageSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Custom builds, revamps, lead-gen microsites, programmatic SEO, CRO + bot integration, and operate-or-flip.',
    alternates: { canonical: 'https://www.orionaimedia.com/services' },
    openGraph: { url: 'https://www.orionaimedia.com/services', images: ['/og/services'] },
    twitter: { images: ['/og/services'], card: 'summary_large_image' }
};

const services = [
    { title: 'A. Custom Build (Launch Pack)', body: 'From brand-new to revenue/lead-ready (design, CMS, content starter kit, tracking).', cta: '/contact?intent=build' },
    { title: 'B. Site Revamp Sprint', body: '30–90 days to fix speed, UX, content gaps, and conversion paths.', cta: '/contact?intent=revamp' },
    { title: 'C. Lead-Gen Microsite (7-Day)', body: 'Single-purpose pages for gyms, med-spa, wellness, local services.', cta: '/contact?intent=microsite' },
    { title: 'D. Content & Programmatic SEO', body: 'Editorial calendar + programmatic pages where defensible; human QA.', cta: '/contact?intent=content' },
    { title: 'E. CRO + Bot Integration', body: 'Forms, booking embeds (Vagaro/Mindbody), and OIA chatbot for capture/deflection.', cta: '/contact?intent=cro-bot' },
    { title: 'F. Operate or Flip', body: 'We’ll run it (content + A/B + partners) or prep a clean exit.', cta: '/contact?intent=operate' }
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">Services</h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">
                        We acquire, improve, and recycle high‑intent web assets—and we also build and revamp client sites to generate qualified leads.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 pb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6 hover:border-pulse-hover/60 transition-colors">
                            <div className="text-metal-text/90 font-semibold">{s.title}</div>
                            <p className="mt-2 text-sm text-metal-text/70">{s.body}</p>
                            <div className="mt-4"><Link href={s.cta} className="text-pulse-cyan hover:text-pulse-hover text-sm">Start a revamp</Link></div>
                        </div>
                    ))}
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Revamp Sprint (30–45d)</div>
                            <ul className="mt-2 text-sm text-metal-text/70 space-y-1">
                                <li>• Outcomes: faster site, clearer CTAs, improved conversions</li>
                                <li>• Deliverables: speed/CWV fixes, UX cleanup, CRO flows</li>
                                <li>• From $X</li>
                            </ul>
                        </div>
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Care Plan (monthly)</div>
                            <ul className="mt-2 text-sm text-metal-text/70 space-y-1">
                                <li>• Uptime monitoring, updates, security</li>
                                <li>• CRO tweaks, A/B tests, minor content updates</li>
                                <li>• From $X/mo</li>
                            </ul>
                        </div>
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Programmatic SEO (pilot)</div>
                            <ul className="mt-2 text-sm text-metal-text/70 space-y-1">
                                <li>• Template design + structured data</li>
                                <li>• Indexing strategy and KPIs</li>
                                <li>• From $X</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="rounded-panel border border-royal-shade/40 bg-graphite-800/50 p-8">
                        <h2 className="text-2xl text-gold-gradient font-semibold mb-4">FAQ</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-metal-text/80 text-sm">
                            {[
                                ['How long does a revamp take?', 'Most revamps ship within 30–45 days depending on scope.'],
                                ['What tech stack do you use?', 'Next.js 14, Tailwind, and modern best practices.'],
                                ['Can you work with our CMS?', 'Yes—headless CMS preferred. We can migrate or integrate.'],
                                ['Do you support after launch?', 'Yes—our Care Plan covers updates, monitoring, and CRO tweaks.'],
                                ['How do we start?', 'Book a discovery call or send details via the contact form.']
                            ].map(([q, a]) => (
                                <div key={q as string}>
                                    <div className="font-semibold text-metal-text mb-1">{q}</div>
                                    <p className="text-metal-text/70">{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(webPageSchema({ name: 'Services', url: 'https://www.orionaimedia.com/services' }))
                    }}
                />
                <script
                    type="application/ld+json"
                    // FAQPage structured data
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: [
                                {
                                    '@type': 'Question',
                                    name: 'How long does a revamp take?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Most revamps ship within 30–45 days depending on scope.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'What tech stack do you use?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Next.js 14, Tailwind, and modern best practices.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Can you work with our CMS?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes—headless CMS preferred. We can migrate or integrate.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'Do you support after launch?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Yes—our Care Plan covers updates, monitoring, and CRO tweaks.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    name: 'How do we start?',
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: 'Book a discovery call or send details via the contact form.'
                                    }
                                }
                            ]
                        })
                    }}
                />

                <CTA />
            </main>
            <Footer />
        </>
    );
}


