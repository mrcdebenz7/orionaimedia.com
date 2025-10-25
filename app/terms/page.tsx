import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms and conditions for using orionaimedia.com by Orion Digital AI Assets.',
    alternates: { canonical: 'https://www.orionaimedia.com/terms' },
    openGraph: { url: 'https://www.orionaimedia.com/terms' }
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <article className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] mb-8">
                        Terms of Service
                    </h1>
                    <div className="space-y-8 text-metal-text/80">
                        <p className="text-sm text-metal-text/60">Last updated: October 15, 2025</p>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Acceptance of Terms</h2>
                            <p>
                                By accessing or using Orion Ascend Media's services, you agree to be bound by these Terms of Service.
                                If you do not agree, do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Services</h2>
                            <p>
                                Orion Ascend Media provides website builds, revamps, lead‑gen microsites, SEO, CRO + bot integration, and related services.
                                Specific deliverables and timelines are defined in individual Statements of Work (SOWs).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Payment Terms</h2>
                            <p>
                                Fees are outlined in the SOW. Payment is due within 30 days of invoice. Late payments may incur interest charges.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Intellectual Property</h2>
                            <p>
                                Upon full payment, you own the final deliverables. We retain the right to use project work in our portfolio and case studies,
                                unless otherwise agreed in writing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Confidentiality</h2>
                            <p>
                                Both parties agree to keep confidential information private. This obligation survives termination of the agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Limitation of Liability</h2>
                            <p>
                                Orion Ascend Media's liability is limited to the fees paid for services. We are not liable for indirect, incidental, or consequential damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Termination</h2>
                            <p>
                                Either party may terminate with 30 days' written notice. You are responsible for fees incurred up to the termination date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Governing law & venue</h2>
                            <p>
                                These Terms are governed by Ohio law; exclusive venue in courts located in Cuyahoga County, Ohio. Non‑waivable consumer/privacy rights under applicable law still apply.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Contact</h2>
                            <p>
                                For questions about these terms, contact us at legal@orionaimedia.com.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}


