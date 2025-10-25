import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Orion Ascend Media — Content systems that compound',
    description: 'We build and revamp content systems that compound distribution, lower CAC, and lift retention.',
    alternates: { canonical: 'https://www.orionaimedia.com/' },
    openGraph: {
        title: 'Orion Ascend Media',
        description: 'Content systems that compound distribution and growth.',
        url: 'https://www.orionaimedia.com',
        images: ['/og/home']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Orion Ascend Media',
        description: 'Content systems that compound distribution and growth.',
        images: ['/og/home']
    }
};

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="relative z-content">

                <section className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 pt-14 pb-16 md:pb-24 text-center">
                        <div className="relative mx-auto mb-6 w-full max-w-3xl">
                            <div className="absolute -inset-12 rounded-full ring-gold blur-sm" aria-hidden />
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8" aria-hidden>
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g0 animate-sparkle" />
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g1 animate-sparkle [animation-delay:.35s]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g2 animate-sparkle [animation-delay:.7s]" />
                            </div>
                            <h1 className="gold-emboss text-4xl md:text-6xl lg:text-7xl leading-tight tracking-[0.02em]" aria-label="Orion Ascend Media">ORION ASCEND</h1>
                            <div className="mt-2 text-royal-shade/80 tracking-widest" style={{ fontFamily: 'Cinzel, ui-serif' }}>MEDIA</div>
                        </div>
                        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-metal-text/90">
                            We acquire, improve, and recycle high-intent web assets—then turn them into monetization and lead-gen machines for our sister company OIA.
                        </p>
                        <p className="mt-2 max-w-3xl mx-auto small-caps text-metal-text/80">
                            Human intuition + algorithmic precision for compounding growth.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <TrackedLink href="/contact?intent=revamp" cta="start_revamp_home" className="rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors">Start a revamp</TrackedLink>
                            <TrackedLink href="/contact?intent=microsite" cta="microsite_home" className="rounded-button border border-royal-shade/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover">Build a lead-gen microsite</TrackedLink>
                        </div>
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">About</div>
                    <div className="mt-4 rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                        <p className="text-metal-text/90">
                            Orion Ascend Media (“Ascend”) acquires and builds niche websites, domains, content, and media. We improve them with fast UX, programmatic SEO, and conversion design—then monetize or route qualified leads directly to Orion Intelligence Agency (OIA) for AI-bot deployments and retainers. When an asset matures, we recycle (hold or flip) to reinvest into the next build.
                        </p>
                        <div className="mt-3 text-sm text-metal-text/70">
                            Backed by <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionapexcapital.com" target="_blank" rel="noreferrer">Orion Apex Capital</a>. Seamless hand-offs to <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionintelligenceagency.com" target="_blank" rel="noreferrer">Orion Intelligence Agency</a>.
                        </div>
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Operating model</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Acquire</div>
                            <p className="mt-2 text-sm text-metal-text/70">Curated buys + greenfield builds in verticals we know (fitness, wellness/spa, local services, e-com sub-niches).</p>
                        </div>
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Improve</div>
                            <p className="mt-2 text-sm text-metal-text/70">Speed + Core Web Vitals, schema, content upgrades (AI-assisted, human-edited), CRO, booking embeds, and the OIA bot for FAQ + capture.</p>
                        </div>
                        <div className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6">
                            <div className="text-metal-text/90 font-semibold">Recycle</div>
                            <p className="mt-2 text-sm text-metal-text/70">Keep high-RPM assets, or flip after 90–180 days when uplift and stability justify it.</p>
                        </div>
                    </div>
                </section>


                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Services</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'A. Custom Build (Launch Pack)', body: 'From brand-new to revenue/lead-ready (design, CMS, content starter kit, tracking).' },
                            { title: 'B. Site Revamp Sprint', body: '30–90 days to fix speed, UX, content gaps, and conversion paths.' },
                            { title: 'C. Lead-Gen Microsite (7-Day)', body: 'Single-purpose pages for gyms, med-spa, wellness, local services.' },
                            { title: 'D. Content & Programmatic SEO', body: 'Editorial calendar + programmatic pages where defensible; human QA.' },
                            { title: 'E. CRO + Bot Integration', body: 'Forms, booking embeds (Vagaro/Mindbody), and OIA chatbot for capture/deflection.' },
                            { title: 'F. Operate or Flip', body: 'We’ll run it (content + A/B + partners) or prep a clean exit.' }
                        ].map((s) => (
                            <div key={s.title} className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-6 hover:border-pulse-hover/60 transition-colors">
                                <div className="text-metal-text/90 font-semibold">{s.title}</div>
                                <p className="mt-2 text-sm text-metal-text/70">{s.body}</p>
                                <div className="mt-4">
                                    <Link href="/contact?intent=revamp" className="text-pulse-cyan hover:text-pulse-hover text-sm">Start a revamp</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Industries band for lead-gen */}
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Who we serve</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Gyms & Fitness',
                            'Med‑spa / Wellness',
                            'Local Services',
                            'Niche e‑commerce & Newsletters'
                        ].map((label) => (
                            <a key={label} href="/contact?intent=revamp" className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5 hover:border-pulse-hover/60 transition-colors text-center">
                                <div className="text-metal-text/90 font-semibold">{label}</div>
                                <div className="mt-2 text-pulse-cyan text-sm">Start a revamp →</div>
                            </a>
                        ))}
                    </div>
                </section>


                <section className="relative my-16">
                    <div className="max-w-7xl mx-auto px-4 py-10 rounded-panel border border-royal-shade/40 bg-graphite-800/70 text-center">
                        <div className="small-caps text-metal-text/80">Book a Discovery Call</div>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <Link href="/contact?intent=revamp" className="rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors">Start a revamp</Link>
                            <Link href="/contact?intent=microsite" className="rounded-button border border-royal-shade/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover">Build a lead-gen microsite</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

