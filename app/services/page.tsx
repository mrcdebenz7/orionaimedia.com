import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SimpleCards } from '@/components/Cards';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Content Systems, Studio Production, Post-Production, Performance Creative, Channel Ops, and Analytics & Iteration.'
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Services
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        Six core capabilities that scale content from concept to distribution.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <SimpleCards items={[
                        {
                            title: 'Content Systems',
                            body: 'Strategic messaging frameworks, content mapping, and modular libraries that ensure consistency and velocity across every channel.'
                        },
                        {
                            title: 'Studio Production',
                            body: 'Full-service directing, cinematography, lighting, audio capture, and on-set operations for editorial, commercial, and branded content.'
                        },
                        {
                            title: 'Post-Production',
                            body: 'Editorial, motion graphics, color grading, sound design, and finishing. We turn raw footage into polished stories.'
                        },
                        {
                            title: 'Performance Creative',
                            body: 'UGC-style ads, hooks, and rapid iteration loops. Test, learn, and scale what works across paid and organic.'
                        },
                        {
                            title: 'Channel Ops',
                            body: 'YouTube optimization, podcast production and distribution, newsletter strategy—owned media engines that compound reach.'
                        },
                        {
                            title: 'Analytics & Iteration',
                            body: 'Creative testing frameworks, retention analysis, and feedback loops that turn data into better content.'
                        }
                    ]} />
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}


