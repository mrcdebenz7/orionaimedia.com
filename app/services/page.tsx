import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Services</h1>
        <p className="mt-4 text-metal-text/80 max-w-2xl">
          Content Systems, Studio Production, Post-Production, Performance Creative, Channel Ops, Analytics & Iteration.
        </p>
      </main>
      <Footer />
    </>
  );
}
