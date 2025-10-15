import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="gold-emboss text-4xl">404</h1>
        <p className="mt-3 text-metal-text/80">Page not found.</p>
      </main>
      <Footer />
    </>
  );
}
