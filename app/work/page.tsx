import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Work' };

export default function WorkPage() {
  const cases = [
    { title: 'Crescent Tech', outcome: '+3.2x reach' },
    { title: 'Atlas Health', outcome: '28% CAC ↓' },
    { title: 'Northwind SaaS', outcome: '17% retention ↑' }
  ];
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Work</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5">
              <div className="text-metal-text/90 font-semibold">{c.title}</div>
              <div className="mt-1 text-pulse-cyan">{c.outcome}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
