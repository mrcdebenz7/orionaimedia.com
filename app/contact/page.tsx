import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="gold-emboss text-3xl">Start a Project</h1>
        <p className="mt-3 text-metal-text/80">Tell us about your goals. We typically reply within 1 business day.</p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="mt-6 grid gap-4"
        >
          <label className="grid gap-1">
            <span className="text-sm text-metal-text/80">Name</span>
            <input name="name" required className="rounded-button bg-graphite-800/70 border border-royal-shade/40 px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-metal-text/80">Email</span>
            <input type="email" name="email" required className="rounded-button bg-graphite-800/70 border border-royal-shade/40 px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-metal-text/80">Company / URL</span>
            <input name="company" className="rounded-button bg-graphite-800/70 border border-royal-shade/40 px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-metal-text/80">What do you want to achieve?</span>
            <textarea name="message" rows={5} required className="rounded-button bg-graphite-800/70 border border-royal-shade/40 px-3 py-2" />
          </label>
          <button className="justify-self-start rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-2 text-sm font-semibold text-gold-g0 hover:bg-graphite-800">
            Send
          </button>
        </form>
        <div className="mt-6 text-sm">
          Or book directly: <a href="https://cal.com/your-handle" className="text-pulse-cyan hover:text-pulse-hover">Calendar link</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
