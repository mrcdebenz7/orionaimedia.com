import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'About',
    description:
        'We acquire, improve, and recycle high‑intent web assets—and build or revamp client sites to generate qualified leads.',
    alternates: { canonical: 'https://www.orionaimedia.com/about' },
    openGraph: {
        url: 'https://www.orionaimedia.com/about',
        images: ['/og/about']
    },
    twitter: { images: ['/og/about'], card: 'summary_large_image' }
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="container-edge py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        About Orion Ascend
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">We acquire, improve, and recycle high‑intent web assets—and we also build and revamp client sites to generate qualified leads.</p>
                </section>

                <section className="container-edge max-w-4xl py-12 space-y-6 text-metal-text/80">
                    <p>Ascend improves assets with fast UX, programmatic SEO, and conversion design—then monetizes or routes qualified leads to <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionintelligenceagency.com" target="_blank" rel="noreferrer">Orion Intelligence Agency</a> for AI‑bot deployments and retainers.</p>
                    <p>When an asset matures, we recycle (hold or flip) and reinvest into the next build. For clients, we offer two tracks: revamp your current site or build a high‑value lead‑gen property from scratch.</p>
                </section>

                <section className="container-edge py-12">
                    <div className="surface-card p-8">
                        <h2 className="text-2xl text-gold-gradient font-semibold mb-4 text-center">Our Principles</h2>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Acquire → Improve → Recycle</h3>
                                <p className="text-sm text-metal-text/70">Simple operating model that compounds traffic and lead flow.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Fast UX + SEO</h3>
                                <p className="text-sm text-metal-text/70">Speed, Core Web Vitals, and programmatic SEO where defensible.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Conversion Design</h3>
                                <p className="text-sm text-metal-text/70">Clear paths to contact, booking, and capture—no hype, just clarity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}

