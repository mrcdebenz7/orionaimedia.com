import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How Orion Digital AI Assets collects, uses, and protects personal data on orionaimedia.com.'
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
                    <div className="space-y-8 text-metal-text/80">
                        <p className="text-sm text-metal-text/60">Last updated: October 15, 2025</p>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Who we are</h2>
                            <p>
                                Orion Digital AI Assets ("Orion AI Media", "we", "us") operates <strong>orionaimedia.com</strong> to publish and promote
                                digital‑asset projects (websites, content, media) and related lead‑generation services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">What we collect</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Contact data you submit (name, email, company, phone).</li>
                                <li>Content you send (messages, files).</li>
                                <li>Usage data (pages, timestamps, device/browser, approximate location, referrer).</li>
                                <li>Cookies for basic operations, preferences, and performance.</li>
                            </ul>
                            <p className="mt-4">Children’s data: we do not knowingly collect personal information from children under 13. If we learn we did, we will delete it.</p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">How we use data</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>To provide the site, respond to inquiries, and improve content and reliability.</li>
                                <li>To create aggregated/de‑identified analytics.</li>
                                <li>To protect security, prevent fraud, and comply with law.</li>
                            </ul>
                            <p className="mt-3">
                                Legal bases (EEA/UK): contract (respond to requests), consent (marketing), and legitimate interests (security, service
                                improvement) balanced against your rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">“Sale” / “Sharing” (CPRA)</h2>
                            <p>
                                We do not sell or share personal information as defined by California law. If this changes, we will update this Policy
                                and provide a “Do Not Sell or Share” link. We honor Global Privacy Control (GPC) signals where applicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Affiliate links & endorsements</h2>
                            <p>
                                Some pages may include affiliate links. When you click and buy, we may earn a commission. We follow the FTC’s endorsement
                                and disclosure rules and aim for clear, conspicuous disclosures near endorsements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Security</h2>
                            <p>
                                We apply reasonable safeguards (encryption in transit, least‑privilege access, logging, and staff practices). No method
                                is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Your rights</h2>
                            <p>
                                Depending on your location, you may have rights to access, correct, delete, and opt‑out of certain processing (including
                                sale/sharing under California law). Contact us to exercise these rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Data retention & transfers</h2>
                            <p>
                                We retain personal data only as long as needed for the purposes above or required by law, then delete or de‑identify it.
                                We are U.S.‑based; your data may be processed outside your country.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl text-gold-g1 font-semibold mb-3">Contact</h2>
                            <p>Email: contact@orionaimedia.com</p>
                            <p>Mail: [Insert mailing address]</p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}


