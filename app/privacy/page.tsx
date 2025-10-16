import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your data.'
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="relative z-content">
                <article className="max-w-3xl mx-auto px-4 py-16">
                    <h1 className="gold-emboss text-3xl md:text-5xl tracking-[0.02em] mb-8">
                        Privacy Policy
                    </h1>
                    <div className="space-y-6 text-metal-text/80">
                        <p className="text-sm text-metal-text/60">Last updated: October 15, 2025</p>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Information We Collect</h2>
                            <p>
                                We collect information you provide directly (name, email, company) when you contact us or subscribe to our newsletter.
                                We also collect analytics data (page views, session duration) via standard web analytics tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">How We Use Your Information</h2>
                            <p>
                                We use your information to respond to inquiries, send relevant content and updates, and improve our services.
                                We do not sell or share your data with third parties for marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Cookies</h2>
                            <p>
                                We use cookies and similar technologies to track site usage and preferences. You can disable cookies in your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Your Rights</h2>
                            <p>
                                You have the right to access, correct, or delete your personal information. Contact us at privacy@orionaimedia.com to exercise these rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Changes to This Policy</h2>
                            <p>
                                We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Contact Us</h2>
                            <p>
                                If you have questions about this policy, please contact us at privacy@orionaimedia.com.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}


