import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a revamp, launch a microsite, or request a proposal. Real responses, no spam.',
  alternates: { canonical: 'https://www.orionaimedia.com/contact' },
  openGraph: { url: 'https://www.orionaimedia.com/contact', images: ['/og/contact'] },
  twitter: { images: ['/og/contact'], card: 'summary_large_image' }
};

export default function ContactPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const intentParam = searchParams?.intent;
  const intent = Array.isArray(intentParam) ? intentParam[0] || '' : intentParam || '';

  return (
    <>
      <Header />
      <main className="relative z-content">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] text-center">
            Contact
          </h1>
          <p className="mt-4 text-center text-metal-text/80 max-w-2xl mx-auto">
            Ready to build a content system? Book a discovery call or send us a message.
          </p>
        </section>

        <ContactForm intent={intent} />
      </main>
      <Footer />
    </>
  );
}
