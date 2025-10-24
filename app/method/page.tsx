import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import { webPageSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Method',
    description: 'Acquire → Improve → Recycle. A simple operating model to compound traffic and lead flow.',
    alternates: { canonical: 'https://www.orionaimedia.com/method' },
    openGraph: { images: ['/og/method.png'] },
    twitter: { images: ['/og/method.png'], card: 'summary_large_image' }
};

export default function MethodPage() {
    const steps = [
        { title: 'Acquire', body: 'Curated buys + greenfield builds in verticals we know (fitness, wellness/spa, local services, e‑com sub‑niches).' },
        { title: 'Improve', body: 'Speed + Core Web Vitals, schema, content upgrades (AI‑assisted, human‑edited), CRO, booking embeds, and the OIA bot for FAQ + capture.' },
        { title: 'Recycle', body: 'Keep high‑RPM assets, or flip after 90–180 days when uplift and stability justify it.' }
    ];

    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">Method</h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">Acquire → Improve → Recycle. A simple operating model to compound traffic and lead flow.</p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-3">
                        {steps.map((step, idx) => (
                            <div key={step.title} className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6 hover:border-pulse-hover/60 transition-colors">
                                <div className="text-gold-g1 text-sm font-semibold mb-2">Phase {idx + 1}</div>
                                <h3 className="text-xl text-metal-text/90 font-semibold mb-3">{step.title}</h3>
                                <p className="text-sm text-metal-text/70">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="rounded-panel border border-royal-shade/40 bg-graphite-800/50 p-8">
                        <h2 className="text-2xl text-gold-gradient font-semibold mb-4">Continuous Iteration</h2>
                        <p className="text-metal-text/80">
                            Every cycle feeds the next. Performance data informs creative testing; audience feedback shapes messaging;
                            distribution learnings optimize channel strategy. We don't just ship content—we build systems that learn and improve.
                        </p>
                    </div>
                </section>

                <section id="revamp" className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <TrackedLink href="/contact?intent=revamp" cta="method_revamp" className="rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-6 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800">Start a revamp</TrackedLink>
                </section>

                <CTA />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: 'Method', url: 'https://www.orionaimedia.com/method' })) }}
                />
            </main>
            <Footer />
        </>
    );
}


