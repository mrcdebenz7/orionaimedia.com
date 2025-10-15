import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Channels' };

export default function ChannelsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Channels</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Podcast', 'YouTube', 'Newsletter'].map((c) => (
            <div key={c} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5">
              <div className="text-metal-text/90 font-semibold">{c}</div>
              <p className="mt-2 text-sm text-metal-text/70">Owned media engines with blue/gold overlays.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
