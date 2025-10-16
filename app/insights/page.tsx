import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights',
    description: 'Essays and breakdowns on content systems, creative testing, and channel growth.'
};

const posts = [
    {
        slug: 'content-systems-compound',
        title: 'Content Systems Compound',
        date: '2025-01-15',
        excerpt: 'Why one-off campaigns plateau and repeatable systems scale. A framework for content infrastructure.'
    },
    {
        slug: 'retention-metrics-matter',
        title: 'Retention Metrics That Matter',
        date: '2025-01-08',
        excerpt: 'Beyond views and clicks: the metrics that predict long-term content performance.'
    },
    {
        slug: 'testing-creative-at-scale',
        title: 'Testing Creative at Scale',
        date: '2025-01-02',
        excerpt: 'How to ship 40+ ad variants per month without sacrificing quality or burning out your team.'
    },
    {
        slug: 'youtube-seo-2025',
        title: 'YouTube SEO in 2025',
        date: '2024-12-20',
        excerpt: 'Search, suggested, and browse: optimizing content for each discovery surface.'
    },
    {
        slug: 'podcast-distribution-checklist',
        title: 'Podcast Distribution Checklist',
        date: '2024-12-12',
        excerpt: '12 steps to ensure your podcast reaches every platform and ranks in discovery feeds.'
    },
    {
        slug: 'owned-media-vs-paid',
        title: 'Owned Media vs. Paid',
        date: '2024-12-05',
        excerpt: 'The ROI case for YouTube, podcasts, and newsletters as long-term distribution engines.'
    }
];

export default function InsightsPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Insights
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        Essays and breakdowns on content systems, creative testing, and channel growth.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/insights/${post.slug}`}
                                className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-6 hover:border-pulse-hover/60 transition-colors"
                            >
                                <div className="text-xs text-pulse-cyan uppercase tracking-wide mb-2">
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                                <h3 className="text-xl text-metal-text/90 font-semibold mb-3">{post.title}</h3>
                                <p className="text-sm text-metal-text/70">{post.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

