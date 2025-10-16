'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            // Replace with your Formspree endpoint
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });
            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

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

                <section className="max-w-2xl mx-auto px-4 py-12">
                    <form onSubmit={handleSubmit} className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-metal-text mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-metal-text mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-metal-text mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-metal-text mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full rounded-button bg-gold-g2/10 border border-gold-g1/40 shadow-gold-emboss px-5 py-3 text-sm font-semibold text-gold-g0 hover:bg-graphite-800 transition-colors disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="text-pulse-cyan text-sm text-center">Thanks! We'll be in touch soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                        )}
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-metal-text/70 mb-4">Or schedule a discovery call:</p>
                        <a
                            href="https://calendly.com/your-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-button border border-pulse-cyan/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover"
                        >
                            Book a Call
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

