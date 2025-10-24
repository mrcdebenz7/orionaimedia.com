import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <section className="max-w-7xl mx-auto px-4 py-32 text-center">
                    <h1 className="gold-emboss text-6xl md:text-8xl tracking-[0.02em] mb-4">
                        404
                    </h1>
                    <p className="text-xl text-metal-text/80 mb-8">
                        Page not found. The content you're looking for has moved or doesn't exist.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-block rounded-button border border-royal-shade/50 px-6 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover"
                        >
                            Return Home
                        </Link>
                        <Link
                            href="/contact#book"
                            className="inline-block rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-6 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors"
                        >
                            Book a call
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}


