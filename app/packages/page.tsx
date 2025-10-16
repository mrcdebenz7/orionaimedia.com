import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesTable from '@/components/PackagesTable';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Packages',
    description: 'Transparent website build packages: Starter (Launch Site), Growth (Site Plus), and Enterprise (Custom Build).'
};

export default function PackagesPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Packages
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">
                        Website design and front-end builds on Next.js + Tailwind. Fair entry pricing based on current market research:
                        basic launch sites often range $2k–$5k, mid-size builds $6.5k–$15k, and custom systems from $12k+.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <PackagesTable />
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="rounded-panel border border-royal-shade/40 bg-graphite-800/50 p-8">
                        <h2 className="text-2xl text-gold-gradient font-semibold mb-4">What's Included</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-metal-text/80">
                            <div>
                                <h3 className="font-semibold text-metal-text mb-2">All Packages Include:</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>• Discovery + IA outline</li>
                                    <li>• Responsive UI on Next.js 14 + Tailwind</li>
                                    <li>• Baseline SEO, OG images, sitemap & robots</li>
                                    <li>• Accessibility pass (WCAG AA)</li>
                                    <li>• Vercel deploy + performance audit</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-metal-text mb-2">Enterprise Add-Ons:</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>• Headless CMS (Sanity/Contentful)</li>
                                    <li>• Component libraries + design tokens</li>
                                    <li>• API/CRM integrations</li>
                                    <li>• Localization (i18n) and search</li>
                                    <li>• Post‑launch support SLAs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="text-center">
                        <p className="text-metal-text/80 mb-4">Not sure which package fits? Book a discovery call and we'll walk through your needs.</p>
                        <a href="/contact" className="inline-block rounded-button border border-gold-g1/40 shadow-gold-emboss px-6 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors">
                            Get Started
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

