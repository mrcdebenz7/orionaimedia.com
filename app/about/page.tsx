import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: "We're a studio of strategists, directors, editors, and operators building content systems that compound."
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        About Orion Ascend
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        We're a studio of strategists, directors, editors, and operators who believe content is a system, not a service.
                    </p>
                </section>

                <section className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-metal-text/80">
                    <p>
                        Orion Ascend Media (also known as Orion Digital AI) was founded on a simple premise: most content fails not because
                        of craft, but because of structure. Great creative without distribution strategy is wasted. Fast production without
                        iteration loops is blind. Channels without systems plateau.
                    </p>
                    <p>
                        We solve this by treating content as infrastructure. Every project connects to a larger system—messaging frameworks,
                        testing protocols, channel operations, and feedback loops that learn and improve over time.
                    </p>
                    <p>
                        Our team spans strategy, production, and growth disciplines. We've built YouTube channels from zero to top-decile,
                        scaled podcast networks, and run performance creative engines that ship hundreds of ad variants per quarter. We bring
                        the rigor of product thinking to the craft of storytelling.
                    </p>
                    <p>
                        Whether you're launching a new channel, scaling an existing content operation, or need a full studio partner—we design
                        systems that compound distribution, lower CAC, and lift retention.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-8">
                        <h2 className="text-2xl text-gold-gradient font-semibold mb-4 text-center">Our Principles</h2>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Systems Over Services</h3>
                                <p className="text-sm text-metal-text/70">We build repeatable processes, not one-off deliverables.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Craft + Data</h3>
                                <p className="text-sm text-metal-text/70">Cinematic quality meets rigorous performance testing.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-gold-g1 text-4xl mb-3">✦</div>
                                <h3 className="text-lg font-semibold text-metal-text mb-2">Long-Term Compounding</h3>
                                <p className="text-sm text-metal-text/70">We optimize for years, not quarters. Owned media builds equity.</p>
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

