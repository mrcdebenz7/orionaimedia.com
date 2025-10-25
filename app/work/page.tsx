import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';
import { caseStudySchema } from '@/lib/schema';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Work',
    description: 'Case studies and outcomes: reach, ROAS, CAC reduction, and retention lift.',
    alternates: { canonical: 'https://www.orionaimedia.com/work' },
    openGraph: { url: 'https://www.orionaimedia.com/work', images: ['/og/work'] },
    twitter: { images: ['/og/work'], card: 'summary_large_image' }
};

export default function WorkPage() {
    const cases = [
        {
            title: 'Crescent Tech',
            category: 'SaaS Growth',
            outcome: '+3.2x YouTube reach',
            description: 'Launched a thought-leadership channel with weekly deep-dives. Optimized thumbnails, hooks, and packaging drove 320% reach lift in 6 months.',
            metrics: ['180K → 576K monthly views', '12% avg retention lift', '4.2% CTR (vs. 2.8% baseline)']
        },
        {
            title: 'Atlas Health',
            category: 'Performance Creative',
            outcome: '28% CAC reduction',
            description: 'Built a UGC testing engine with 40+ ad variants per month. Iterative creative optimization lowered acquisition cost while scaling spend.',
            metrics: ['$127 → $91 CAC', '2.4x ROAS improvement', '18 winning hooks identified']
        },
        {
            title: 'Northwind SaaS',
            category: 'Content Systems',
            outcome: '17% retention lift',
            description: 'Redesigned onboarding content and launched an educational newsletter. Improved activation and long-term engagement.',
            metrics: ['58% → 68% D30 retention', '3.2x email open rate', '24% feature adoption increase']
        },
        {
            title: 'Vanguard Ventures',
            category: 'Podcast Production',
            outcome: 'Top 5% in category',
            description: 'Produced and distributed a weekly B2B podcast. Grew from zero to 15K downloads/episode with strategic guest booking and cross-promotion.',
            metrics: ['0 → 15K avg. downloads', 'Featured in Apple Top Shows', '38 inbound leads in Q1']
        },
        {
            title: 'Meridian Commerce',
            category: 'Editorial & Brand',
            outcome: '2.1M organic impressions',
            description: 'Created a documentary-style brand series. Earned distribution across LinkedIn, YouTube, and industry press.',
            metrics: ['2.1M impressions', '87K video completions', 'Featured in 4 trade publications']
        },
        {
            title: 'Apex Fitness',
            category: 'Channel Ops',
            outcome: '5.6x subscriber growth',
            description: 'Rebuilt YouTube strategy with SEO-optimized uploads, consistent cadence, and community engagement. Scaled from 8K to 45K subscribers.',
            metrics: ['8K → 45K subscribers', '420% watch time increase', '3.8% sub conversion rate']
        }
    ];

    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Work
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        Measurable outcomes across content, creative, and distribution.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { id: 'alpha', title: 'Homepage Revamp', alt: 'Case Alpha — Homepage Revamp (demo metrics)' },
                            { id: 'beta', title: 'Services Clarity', alt: 'Case Beta — Services Clarity (demo metrics)' },
                            { id: 'gamma', title: 'Method Readability', alt: 'Case Gamma — Method Readability (demo metrics)' }
                        ].map((c) => (
                            <div key={c.id} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-6 hover:border-pulse-hover/60 transition-colors">
                                <div className="text-xs text-pulse-cyan uppercase tracking-wide mb-2">Case Study</div>
                                <h3 className="text-xl text-metal-text/90 font-semibold mb-3">{c.title}</h3>
                                <Link href={`/work/case-${c.id}`} className="block">
                                    <div className="aspect-video relative bg-graphite-900 rounded md:overflow-hidden border border-royal-shade/40 mb-4">
                                        <Image
                                            src={`/work/case-${c.id}/card.png`}
                                            alt={c.alt}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            className="object-cover"
                                            priority={false}
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>
                                <Link href="/contact?intent=revamp" className="text-pulse-cyan hover:text-pulse-hover text-sm">Start a revamp</Link>
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema({ name: c.title, description: c.alt, url: `https://www.orionaimedia.com/work` })) }}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-metal-text/60 mt-6">Metrics shown are demo placeholders for illustration.</p>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}


