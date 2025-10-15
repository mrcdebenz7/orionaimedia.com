export default function CTA() {
  return (
    <section className="relative my-16">
      <div className="max-w-7xl mx-auto px-4 py-10 rounded-panel border border-royal-shade/40 bg-graphite-800/70">
        <div className="flex flex-col items-center text-center">
          <div className="small-caps text-metal-text/80">Book a Discovery Call</div>
          <a
            href="/contact"
            className="mt-3 rounded-button border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
