import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
        <h1 className="gold-emboss text-3xl not-prose">Privacy Policy</h1>
        <p className="mt-4">Last updated: 2025-01-01</p>
        <p>We respect your privacy. This placeholder will be replaced with final policy text.</p>
      </main>
      <Footer />
    </>
  );
}
