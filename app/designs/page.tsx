import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Design Examples',
    description: 'A curated gallery of Orion Ascend Media design work, UI explorations, and brand applications.',
    alternates: { canonical: 'https://www.orionaimedia.com/designs' },
    openGraph: { url: 'https://www.orionaimedia.com/designs' }
};

type DesignItem = {
    title: string;
    description: string;
    imageSrc: string;
    href?: string;
};

const designs: DesignItem[] = [
    { title: 'Crest (SVG)', description: 'Imperial gold ring + stars; royal blue globe.', imageSrc: '/crest.svg', href: '/' },
    { title: 'Crest Transparent (PNG)', description: 'Transparent PNG for decks and thumbnails.', imageSrc: '/crest-transparent.png' },
    { title: 'Crest Transparent 1024', description: 'High‑res crest export for large comps.', imageSrc: '/crest-transparent-1024.png' },
    { title: 'Crest with Background', description: 'Brand background with waveform texture.', imageSrc: '/crest-with-bg.png' },
    { title: 'Orion Ascend Main', description: 'Full lockup from uploads.', imageSrc: '/OrionAscendMain.png' },
    { title: 'OIM Crest Lockup', description: 'Alternate crest lockup provided.', imageSrc: '/OIMcrestlogo.png' }
];

export default function DesignsPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Design Examples
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">
                        A sample of UI designs and brand applications. Drop your final images into <code className="px-1 rounded bg-graphite-800 border border-royal-shade/40">public/</code> and update the gallery items here.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 pb-16">
                    <div className="small-caps text-gold-g1/80 mb-4">Gallery</div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {designs.map((item) => (
                            <a
                                key={item.title}
                                href={item.href || '#'}
                                className="group rounded-panel border border-royal-shade/40 bg-graphite-800/70 overflow-hidden hover:border-pulse-hover/60 transition-colors"
                            >
                                <div className="aspect-video relative bg-graphite-900">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="text-metal-text/90 font-semibold">{item.title}</div>
                                    <p className="mt-2 text-sm text-metal-text/70">{item.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}



