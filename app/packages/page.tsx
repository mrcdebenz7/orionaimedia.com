import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesTable from '@/components/PackagesTable';

export const metadata = { title: 'Packages' };

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Packages</h1>
        <div className="mt-6"><PackagesTable /></div>
      </main>
      <Footer />
    </>
  );
}
