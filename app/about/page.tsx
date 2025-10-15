import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">About</h1>
        <p className="mt-4 text-metal-text/80">We’re a studio of strategists, directors, editors, and operators.</p>
      </main>
      <Footer />
    </>
  );
}
