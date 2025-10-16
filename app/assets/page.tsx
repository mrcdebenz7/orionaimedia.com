import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Assets & Holdings',
    description: 'A living inventory of Orion Ascend Media brand assets, design files, and content holdings.'
};

type AssetItem = {
    name: string;
    type: 'Logo' | 'Design' | 'Video' | 'Audio' | 'Document' | 'Other';
    pathOrLink: string;
    notes?: string;
};

// Placeholder items; replace with real links (Drive/Dropbox/Notion/CMS)
const assets: AssetItem[] = [
    { name: 'Crest SVG', type: 'Logo', pathOrLink: '/crest.svg', notes: 'Transparent background, optimized' },
    { name: 'OG Image', type: 'Design', pathOrLink: '/og.png', notes: 'Replace with final 1200×630' },
    { name: 'Brand Tokens', type: 'Document', pathOrLink: '/DESIGN_TOKENS_REFERENCE.md', notes: 'Palette, typography, utilities' },
    { name: 'Favicon Guide', type: 'Document', pathOrLink: '/public/FAVICON_GENERATOR_GUIDE.md', notes: 'How to generate favicons' }
];

export default function AssetsPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
                        Assets & Holdings
                    </h1>
                    <p className="mt-4 text-center text-metal-text/80 max-w-3xl mx-auto">
                        Central place to find brand marks, files, and content holdings. Replace the placeholders with
                        links to your Drive/Dropbox/Notion/CMS as needed.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-4 pb-16">
                    <div className="overflow-x-auto rounded-panel border border-royal-shade/40 bg-graphite-800/70">
                        <table className="min-w-full text-sm">
                            <thead className="text-left text-metal-text/70">
                                <tr className="border-b border-royal-shade/40">
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Link</th>
                                    <th className="p-4">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assets.map((a) => (
                                    <tr key={a.name} className="border-b border-royal-shade/30 last:border-none">
                                        <td className="p-4 text-metal-text/90">{a.name}</td>
                                        <td className="p-4 text-metal-text/70">{a.type}</td>
                                        <td className="p-4">
                                            <a href={a.pathOrLink} className="text-pulse-cyan hover:text-pulse-hover break-all">{a.pathOrLink}</a>
                                        </td>
                                        <td className="p-4 text-metal-text/70">{a.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}



