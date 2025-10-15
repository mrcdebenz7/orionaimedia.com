import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Method' };

export default function MethodPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Our Method</h1>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {['Discover', 'Script', 'Produce', 'Amplify'].map((s) => (
            <li key={s} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-5">
              <div className="text-metal-text/90 font-semibold">{s}</div>
              <p className="text-sm text-metal-text/70 mt-2">Measurable loop from insight to impact.</p>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </>
  );
}
