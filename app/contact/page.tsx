'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { track } from '@/lib/track';

export default function ContactPage() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [refId, setRefId] = useState<string | null>(null);

    const intent = useMemo(() => searchParams.get('intent') || '', [searchParams]);

    useEffect(() => {
        track('contact_view', { intent: intent || undefined });
    }, [intent]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        track('form_start', { form: 'contact', intent });
        setStatus('sending');
        setError(null);
        setRefId(null);
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: data
            });
            const json = await response.json().catch(() => ({}));
            if (response.ok && json?.ok) {
                setStatus('success');
                setRefId(json.ref || null);
                form.reset();
                track('form_submit', { form: 'contact', intent: data.get('intent') || undefined });
            } else {
                setStatus('error');
                setError(json?.error || 'Unable to send message.');
            }
        } catch (err) {
            setStatus('error');
            setError('Network error. Please try again or use the fallback.');
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
                        <input type="text" name="__hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                        <input type="hidden" name="intent" value={intent} />
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
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-metal-text mb-2">
                                    Company (optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-semibold text-metal-text mb-2">
                                    Website (optional)
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    placeholder="https://"
                                    className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="budget" className="block text-sm font-semibold text-metal-text mb-2">
                                Budget
                            </label>
                            <select id="budget" name="budget" className="w-full rounded-button bg-graphite-900 border border-royal-shade/50 px-4 py-2 text-metal-text focus:border-pulse-cyan focus:outline-none">
                                <option value="">Select</option>
                                <option value="<5k">Under $5k</option>
                                <option value="5-10k">$5k–$10k</option>
                                <option value="10-25k">$10k–$25k</option>
                                <option value=">25k">$25k+</option>
                            </select>
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
                            <p className="text-pulse-cyan text-sm text-center">Thanks! Your message was sent. {refId ? `Ref: ${refId}` : ''}</p>
                        )}
                        {status === 'error' && (
                            <div className="text-center text-sm">
                                <p className="text-red-400">{error || 'Unable to send message.'}</p>
                                <p className="text-metal-text/70 mt-2">
                                    Fallback: <a className="text-pulse-cyan hover:text-pulse-hover" href={`mailto:hello@orionaimedia.com?subject=Project inquiry`}>email hello@orionaimedia.com</a>
                                </p>
                            </div>
                        )}
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-metal-text/70 mb-4">Or schedule a discovery call:</p>
                        {process.env.NEXT_PUBLIC_CAL_URL ? (
                            <div className="rounded-panel border border-royal-shade/40 bg-graphite-800/50 p-4">
                                <iframe
                                    src={process.env.NEXT_PUBLIC_CAL_URL}
                                    className="w-full h-[760px] rounded-md border border-royal-shade/30"
                                    loading="lazy"
                                    onLoad={() => (window as any)?.oamTrack?.('calendar_view', { source: 'contact_page' })}
                                />
                            </div>
                        ) : (
                            <a
                                href="https://calendly.com/dan-mercede-orionintelligenceagency/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-button border border-pulse-cyan/50 px-5 py-3 text-sm font-semibold text-pulse-cyan hover:text-pulse-hover"
                                onClick={() => track('cta_click', { cta: 'book_call' })}
                            >
                                Book a Call
                            </a>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}


