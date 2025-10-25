import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

// Mock post data (replace with CMS/MDX in production)
const posts: Record<string, { title: string; date: string; content: string }> = {
    'content-systems-compound': {
        title: 'Content Systems Compound',
        date: '2025-01-15',
        content: `
One-off campaigns plateau. Repeatable systems scale.

Most content operations are stuck in project mode: brief, produce, ship, repeat. Each cycle starts from scratch. There's no memory, no iteration, no compounding.

Content systems flip this. Instead of isolated deliverables, you build infrastructure:

- **Messaging frameworks** that guide every piece
- **Modular libraries** that get remixed across formats
- **Testing protocols** that feed insights back into creative
- **Channel operations** that publish and optimize at cadence

The result? Each cycle is faster, cheaper, and better than the last. Creative compounds. Distribution compounds. Audience equity compounds.

If you're still treating content as a service, you're leaving 10x on the table.
    `
    },
    'retention-metrics-matter': {
        title: 'Retention Metrics That Matter',
        date: '2025-01-08',
        content: `
Views are vanity. Retention is reality.

A video with 100K views and 20% retention is worse than one with 10K views and 60% retention. Why? Because the algorithm rewards watch time, not clicks.

Here's what to track:

- **Average View Duration (AVD):** The single best proxy for content quality
- **Audience Retention Graph:** Where do people drop off? Fix those beats.
- **Click-Through Rate (CTR):** Thumbnail + title performance
- **Rewatch Rate:** Are people coming back? That's a signal of value.

Optimize for time, not eyeballs. The rest will follow.
    `
    },
    'testing-creative-at-scale': {
        title: 'Testing Creative at Scale',
        date: '2025-01-02',
        content: `
You can't test creative at scale without systems.

Most teams try to brute-force it: more shots, more edits, more variants. They burn out. Quality drops. Testing becomes chaos.

Here's the framework we use:

1. **Modular shoots:** Capture 20+ hooks in one session with a flexible script
2. **Template-driven editing:** Build reusable After Effects comps for fast iteration
3. **Testing hierarchy:** Test hooks first, then bodies, then CTAs
4. **Weekly review:** Kill losers fast, scale winners, feed insights back

We ship 40+ ad variants per month for clients without adding headcount. The secret? Infrastructure, not hustle.
    `
    },
    'youtube-seo-2025': {
        title: 'YouTube SEO in 2025',
        date: '2024-12-20',
        content: `
YouTube has three discovery surfaces: Search, Suggested, and Browse. Each requires different optimization.

**Search:** Traditional SEO. Keyword research, title optimization, and metadata. Works for evergreen, how-to, and educational content.

**Suggested:** The sidebar and "up next." Driven by session time and click-through rate. Optimize thumbnails and opening hooks.

**Browse:** Home feed and subscription feed. Driven by viewer history and channel authority. Consistency and cadence matter most here.

Most creators over-index on Search and ignore Suggested. Big mistake. Suggested is where scale happens.
    `
    },
    'podcast-distribution-checklist': {
        title: 'Podcast Distribution Checklist',
        date: '2024-12-12',
        content: `
12 steps to ensure your podcast reaches every platform:

1. Submit to Apple Podcasts
2. Submit to Spotify
3. Submit to Google Podcasts
4. Add to YouTube (video or static audiogram)
5. Publish RSS feed
6. Register with Podchaser
7. Submit to Overcast, Pocket Casts, Castro
8. Optimize show notes with links and timestamps
9. Create social clips (audiograms, quotes)
10. Cross-promote in newsletter
11. Submit to podcast directories (Listen Notes, Podbean)
12. Track downloads via analytics (Chartable, Podtrac)

Distribution is half the game. Don't skip it.
    `
    },
    'owned-media-vs-paid': {
        title: 'Owned Media vs. Paid',
        date: '2024-12-05',
        content: `
Paid media rents attention. Owned media builds equity.

Every dollar you spend on ads disappears the moment you stop paying. But every dollar you invest in YouTube, podcasts, or newsletters compounds over time.

Here's the math:

- **Paid:** $10K/month = 50K impressions. Stop paying? Zero impressions.
- **Owned:** $10K/month = 4 videos. Those videos earn views forever. After 12 months, you have 48 assets generating passive reach.

Owned media has higher upfront cost but infinite shelf life. It's the only scalable way to lower CAC over time.

The best teams do both: paid for speed, owned for compounding.
    `
    }
};

export function generateStaticParams() {
    return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const post = posts[params.slug];
    if (!post) return { title: 'Not Found' };
    return {
        title: post.title,
        description: post.content.slice(0, 160),
        alternates: { canonical: `https://www.orionaimedia.com/insights/${params.slug}` },
        openGraph: {
            type: 'article',
            url: `https://www.orionaimedia.com/insights/${params.slug}`,
            title: post.title,
            description: post.content.slice(0, 160),
            images: [{ url: `/og/insights` }]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.content.slice(0, 160),
            images: ['/og/insights']
        }
    };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
    const post = posts[params.slug];
    if (!post) notFound();

    const schema = articleSchema({
        title: post.title,
        description: post.content.slice(0, 160),
        url: `https://www.orionaimedia.com/insights/${params.slug}`,
        datePublished: post.date
    });

    const breadcrumb = breadcrumbSchema([
        { name: 'Home', url: 'https://www.orionaimedia.com' },
        { name: 'Insights', url: 'https://www.orionaimedia.com/insights' },
        { name: post.title, url: `https://www.orionaimedia.com/insights/${params.slug}` }
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            <Header />
            <main className="relative z-content">
                <article className="max-w-3xl mx-auto px-4 py-16">
                    <div className="text-xs text-pulse-cyan uppercase tracking-wide mb-4">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] mb-8">
                        {post.title}
                    </h1>
                    <div className="prose prose-invert prose-gold max-w-none">
                        {post.content.split('\n\n').map((para, idx) => {
                            if (para.trim().startsWith('-')) {
                                return (
                                    <ul key={idx} className="list-disc list-inside space-y-2 text-metal-text/80 my-4">
                                        {para.split('\n').map((item, i) => (
                                            <li key={i} className="ml-4" dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '') }} />
                                        ))}
                                    </ul>
                                );
                            }
                            if (para.trim().match(/^\d+\./)) {
                                return (
                                    <ol key={idx} className="list-decimal list-inside space-y-2 text-metal-text/80 my-4">
                                        {para.split('\n').map((item, i) => (
                                            <li key={i} className="ml-4" dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, '') }} />
                                        ))}
                                    </ol>
                                );
                            }
                            return <p key={idx} className="text-metal-text/80 mb-4" dangerouslySetInnerHTML={{ __html: para }} />;
                        })}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

