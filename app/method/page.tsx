import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Method',
    description: 'Our four-phase process: Discover, Script, Produce, Amplify. Measure, learn, and iterate every cycle.'
};

export default function MethodPage() {
    const steps = [
        {
            title: 'Discover',
            body: 'Research audiences, map messaging, and define content strategy. We identify the insights that will drive creative decisions.'
        },
        {
            title: 'Script',
            body: 'Write outlines, scripts, and shot lists. Structure stories with clear hooks, retention beats, and calls to action.'
        },
        {
            title: 'Produce',
            body: 'Direct, shoot, and edit. Studio or on-location, we capture and finish content with cinematic craft and performance rigor.'
        },
        {
            title: 'Amplify',
            body: 'Publish, optimize, and promote across channels. Track performance, test variants, and feed learnings back into the loop.'
        }
    ];

    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Method
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        Four phases. One continuous loop. From insight to impact, we measure and iterate.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

                <CTA />
            </main>
            <Footer />
        </>
    );
}


