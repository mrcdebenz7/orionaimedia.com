import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { SimpleCards } from '@/components/Cards';
import PackagesTable from '@/components/PackagesTable';
import CTA from '@/components/CTA';

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <Hero />
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">What We Do</div>
                    <div className="mt-4">
                        <SimpleCards items={[
                            { title: 'Performance Creative', body: 'Iterative, data-backed concepts for ads and organic.' },
                            { title: 'Editorial & Video', body: 'Script, direct, and produce cinematic stories that earn trust.' },
                            { title: 'Distribution & Growth', body: 'Channel ops that compound reach across platforms.' }
                        ]} />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Services</div>
                    <div className="mt-4">
                        <SimpleCards items={[
                            { title: 'Content Systems', body: 'Messaging, mapping, and modular content libraries.' },
                            { title: 'Studio Production', body: 'Directing, lighting, audio, and on-set ops.' },
                            { title: 'Post-Production', body: 'Editorial, motion, color, and finishing.' },
                            { title: 'Performance Creative', body: 'UGC, ads, hooks, and iteration loops.' },
                            { title: 'Channel Ops', body: 'YouTube, podcast, and newsletter engines.' },
                            { title: 'Analytics & Iteration', body: 'Creative testing and retention insights.' }
                        ]} />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Method</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-4">
                        {['Discover', 'Script', 'Produce', 'Amplify'].map(step => (
                            <div key={step} className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-5">
                                <div className="text-metal-text/90 font-semibold">{step}</div>
                                <p className="mt-2 text-sm text-metal-text/70">From insight to impact with a measurable loop.</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Work</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {[
                            { title: 'Crescent Tech', metrics: '+3.2x reach' },
                            { title: 'Atlas Health', metrics: '28% CAC ↓' },
                            { title: 'Northwind SaaS', metrics: '17% retention ↑' }
                        ].map(w => (
                            <div key={w.title} className="rounded-panel border border-royal-shade/40 bg-royal-shade/10 p-5">
                                <div className="text-metal-text/90 font-semibold">{w.title}</div>
                                <div className="mt-1 text-pulse-cyan">{w.metrics}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Channels</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {['Podcast', 'YouTube', 'Newsletter'].map(ch => (
                            <div key={ch} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5">
                                <div className="text-metal-text/90 font-semibold">{ch}</div>
                                <p className="mt-2 text-sm text-metal-text/70">Owned media engines with blue/gold overlays.</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Packages</div>
                    <div className="mt-4">
                        <PackagesTable />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="small-caps text-gold-g1/80">Insights</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {[1, 2, 3].map(i => (
                            <a key={i} href={`/insights/post-${i}`} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5 hover:border-pulse-hover/60">
                                <div className="text-metal-text/90 font-semibold">Insight #{i}</div>
                                <p className="mt-2 text-sm text-metal-text/70">On content systems, creative testing, and growth.</p>
                            </a>
                        ))}
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}

