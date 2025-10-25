import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Channels',
    description: 'Podcast, YouTube, and Newsletter—owned media engines that compound reach and build audience equity.',
    alternates: { canonical: 'https://www.orionaimedia.com/channels' },
    openGraph: { url: 'https://www.orionaimedia.com/channels', images: ['/og/channels'] },
    twitter: { card: 'summary_large_image', images: ['/og/channels'] }
};

export default function ChannelsPage() {
    const channels = [
        {
            title: 'Podcast',
            subtitle: 'Audio storytelling that builds trust',
            body: 'From concept to distribution: show design, guest booking, recording, editing, show notes, and multi-platform publishing. We handle the full production lifecycle so you can focus on conversations.',
            features: ['Show strategy & format design', 'Guest research and booking', 'Remote and studio recording', 'Editorial, mixing, mastering', 'Distribution to all platforms', 'Audiograms and promotional clips']
        },
        {
            title: 'YouTube',
            subtitle: 'Video content that earns reach',
            body: 'SEO-optimized uploads, retention-focused storytelling, and consistent cadence. We produce, package, and publish content that the algorithm rewards and audiences love.',
            features: ['Content strategy & SEO research', 'Scripting and pre-production', 'Filming and post-production', 'Thumbnail and title optimization', 'Upload scheduling and metadata', 'Community management']
        },
        {
            title: 'Newsletter',
            subtitle: 'Direct relationships at scale',
            body: 'Editorial newsletters that engage and convert. We write, design, and manage the full publication cycle—from list growth to open-rate optimization.',
            features: ['Content calendar and editorial', 'Copywriting and design', 'ESP setup and automation', 'A/B testing (subject, send time)', 'List segmentation and growth', 'Analytics and optimization']
        }
    ];

    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Channels
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
                        Owned media engines that build audience equity and compound distribution over time.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12 space-y-8">
                    {channels.map((ch, idx) => (
                        <div key={ch.title} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-8 hover:border-pulse-hover/60 transition-colors">
                            <div className="flex items-start gap-6 flex-col md:flex-row">
                                <div className="flex-1">
                                    <div className="text-xs text-pulse-cyan uppercase tracking-wide mb-1">Channel {idx + 1}</div>
                                    <h2 className="text-2xl text-gold-gradient font-semibold mb-1">{ch.title}</h2>
                                    <div className="text-metal-text/70 text-sm mb-4">{ch.subtitle}</div>
                                    <p className="text-metal-text/80 mb-6">{ch.body}</p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-metal-text/70">
                                        {ch.features.map(f => <li key={f} className="flex items-start gap-2"><span className="text-gold-g1">✦</span> {f}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}


