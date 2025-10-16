import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Custom builds, revamps, lead-gen microsites, programmatic SEO, CRO + bot integration, and operate-or-flip.'
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

                <CTA />
            </main>
            <Footer />
        </>
    );
}


