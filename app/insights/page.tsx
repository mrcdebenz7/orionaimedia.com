import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights',
    description: 'Essays and breakdowns on content systems, creative testing, and channel growth.',
    alternates: { canonical: 'https://www.orionaimedia.com/insights' },
    openGraph: { url: 'https://www.orionaimedia.com/insights', images: ['/og/insights'] },
    twitter: { images: ['/og/insights'], card: 'summary_large_image' }
};

const posts = [
    {
        slug: '90-day-revamp-playbook',
        title: '90-Day Revamp Playbook (Coming Soon)',
        date: '2025-10-23',
        excerpt: 'Our step-by-step approach to leveling-up speed, UX, and conversions in 90 days.'
    }
];

export default function InsightsPage() {
    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Insights',
                        url: 'https://www.orionaimedia.com/insights'
                    })
                }}
            />
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


