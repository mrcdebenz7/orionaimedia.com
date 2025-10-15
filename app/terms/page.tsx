import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
        <h1 className="gold-emboss text-3xl not-prose">Terms of Service</h1>
        <p className="mt-4">Last updated: 2025-01-01</p>
        <p>These placeholder terms will be replaced with finalized legal text.</p>
      </main>
      <Footer />
    </>
  );
}
