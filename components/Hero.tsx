import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-8 rounded-full ring-gold blur-sm" aria-hidden />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-g0 animate-sparkle" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold-g1 animate-sparkle [animation-delay:.4s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold-g2 animate-sparkle [animation-delay:.8s]" />
            </div>
            <h1 className="gold-emboss text-4xl md:text-6xl lg:text-7xl leading-tight tracking-[0.02em]">
              ORION ASCEND
            </h1>
            <div className="mt-2 text-royal-shade/80 tracking-widest" style={{ fontFamily: 'Cinzel, ui-serif' }}>
              MEDIA
            </div>
          </div>
          <p className="small-caps text-sm text-metal-text/90">
            IMAGINE. CREATE. TRANSCEND.
          </p>
          <p className="mt-4 max-w-2xl text-base text-metal-text/80">
            We build content systems that compound distribution, lower CAC, and lift retention.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="rounded-button border border-royal-shade/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover"
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
