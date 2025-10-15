import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: 'Insights' };

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Insights</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/insights/post-${i}`}
              className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5 hover:border-pulse-hover/60"
            >
              <div className="text-metal-text/90 font-semibold">Insight #{i}</div>
              <p className="mt-2 text-sm text-metal-text/70">
                On content systems, creative testing, and growth.
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
