import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import AnimateInClient from '@/components/AnimateInClient';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Orion Ascend Media — Content systems that compound',
    description: 'We build and revamp content systems that compound distribution, lower CAC, and lift retention.',
    alternates: { canonical: 'https://www.orionaimedia.com/' },
    openGraph: {
        title: 'Orion Ascend Media',
        description: 'Content systems that compound distribution and growth.',
        url: 'https://www.orionaimedia.com',
        images: ['/og/home']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Orion Ascend Media',
        description: 'Content systems that compound distribution and growth.',
        images: ['/og/home']
    }
};

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="relative z-content">

                <Section className="overflow-hidden">
                    <Container className="pt-16 md:pt-20 pb-16 md:pb-24 text-center">
                        <div className="relative mx-auto mb-6 w-full max-w-3xl">
                            <div className="absolute -inset-12 rounded-full ring-gold blur-sm" aria-hidden />
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8" aria-hidden>
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g0 animate-sparkle" />
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g1 animate-sparkle [animation-delay:.35s]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-gold-g2 animate-sparkle [animation-delay:.7s]" />
                            </div>
                            <h1 className="gold-emboss text-4xl md:text-6xl lg:text-7xl leading-tight tracking-[0.02em]" aria-label="Orion Ascend Media">ORION ASCEND</h1>
                            <div className="mt-2 text-royal-shade/80 tracking-widest" style={{ fontFamily: 'Cinzel, ui-serif' }}>MEDIA</div>
                        </div>
                        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-metal-text/90">
                            We acquire, improve, and recycle high-intent web assets—then turn them into monetization and lead-gen engines for our sister company OIA.
                        </p>
                        <p className="mt-2 max-w-3xl mx-auto small-caps text-metal-text/80">
                            Human intuition + algorithmic precision for compounding growth.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <TrackedLink href="/contact?intent=revamp" cta="start_revamp_home" className="btn-primary px-5 py-3">Start a revamp</TrackedLink>
                            <TrackedLink href="/contact?intent=microsite" cta="microsite_home" className="btn-outline px-5 py-3">Build a lead-gen microsite</TrackedLink>
                        </div>
                    </Container>
                </Section>


                <AnimateInClient as="section" className="container-edge py-12" y={16}>
                    <div className="badge">About</div>
                    <div className="mt-4 surface-card p-6">
                        <p className="text-metal-text/90">
                            Orion Ascend Media (“Ascend”) acquires and builds niche websites, domains, content, and media. We improve them with fast UX, programmatic SEO, and conversion design—then monetize or route qualified leads directly to Orion Intelligence Agency (OIA) for AI-bot deployments and retainers. When an asset matures, we recycle (hold or flip) to reinvest into the next build.
                        </p>
                        <div className="mt-3 text-sm text-metal-text/70">
                            Backed by <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionapexcapital.com" target="_blank" rel="noreferrer">Orion Apex Capital</a>. Seamless hand-offs to <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionintelligenceagency.com" target="_blank" rel="noreferrer">Orion Intelligence Agency</a>.
                        </div>
                    </div>
                </AnimateInClient>


                <AnimateInClient as="section" className="container-edge py-12" delay={0.05}>
                    <div className="badge">Operating model</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <AnimateInClient className="surface-card p-6" as="div" delay={0.05}>
                            <div className="text-metal-text/90 font-semibold">Acquire</div>
                            <p className="mt-2 text-sm text-metal-text/70">Curated buys + greenfield builds in verticals we know (fitness, wellness/spa, local services, e-com sub-niches).</p>
                        </AnimateInClient>
                        <AnimateInClient className="surface-card p-6" as="div" delay={0.1}>
                            <div className="text-metal-text/90 font-semibold">Improve</div>
                            <p className="mt-2 text-sm text-metal-text/70">Speed + Core Web Vitals, schema, content upgrades (AI-assisted, human-edited), CRO, booking embeds, and the OIA bot for FAQ + capture.</p>
                        </AnimateInClient>
                        <AnimateInClient className="surface-card p-6" as="div" delay={0.15}>
                            <div className="text-metal-text/90 font-semibold">Recycle</div>
                            <p className="mt-2 text-sm text-metal-text/70">Keep high-RPM assets, or flip after 90–180 days when uplift and stability justify it.</p>
                        </AnimateInClient>
                    </div>
                </AnimateInClient>


                <AnimateInClient as="section" className="container-edge py-12" delay={0.05}>
                    <div className="badge">Services</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'A. Custom Build (Launch Pack)', body: 'From brand-new to revenue/lead-ready (design, CMS, content starter kit, tracking).' },
                            { title: 'B. Site Revamp Sprint', body: '30–90 days to fix speed, UX, content gaps, and conversion paths.' },
                            { title: 'C. Lead-Gen Microsite (7-Day)', body: 'Single-purpose pages for gyms, med-spa, wellness, local services.' },
                            { title: 'D. Content & Programmatic SEO', body: 'Editorial calendar + programmatic pages where defensible; human QA.' },
                            { title: 'E. CRO + Bot Integration', body: 'Forms, booking embeds (Vagaro/Mindbody), and OIA chatbot for capture/deflection.' },
                            { title: 'F. Operate or Flip', body: 'We’ll run it (content + A/B + partners) or prep a clean exit.' }
                        ].map((s, i) => (
                            <AnimateInClient key={s.title} as="div" className="surface-card p-6 hover:border-pulse-hover/60 transition-colors" delay={0.05 * i}>
                                <div className="text-metal-text/90 font-semibold">{s.title}</div>
                                <p className="mt-2 text-sm text-metal-text/70">{s.body}</p>
                                <div className="mt-4">
                                    <Link href="/contact?intent=revamp" className="text-pulse-cyan hover:text-pulse-hover text-sm">Start a revamp</Link>
                                </div>
                            </AnimateInClient>
                        ))}
                    </div>
                </AnimateInClient>

                {/* Industries band for lead-gen */}
                <AnimateInClient as="section" className="container-edge py-12">
                    <div className="badge">Who we serve</div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Gyms & Fitness',
                            'Med‑spa / Wellness',
                            'Local Services',
                            'Niche e‑commerce & Newsletters'
                        ].map((label, i) => (
                            <AnimateInClient key={label} as="a" className="surface-card p-5 hover:border-pulse-hover/60 transition-colors text-center" delay={0.04 * i} href="/contact?intent=revamp">
                                <div className="text-metal-text/90 font-semibold">{label}</div>
                                <div className="mt-2 text-pulse-cyan text-sm">Start a revamp →</div>
                            </AnimateInClient>
                        ))}
                    </div>
                </AnimateInClient>


                <AnimateInClient as="section" className="relative my-16" y={20}>
                    <Container className="py-10 text-center surface-panel">
                        <div className="small-caps text-metal-text/80">Book a Discovery Call</div>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <ButtonLink href="/contact?intent=revamp" className="px-5 py-3">Start a revamp</ButtonLink>
                            <ButtonLink href="/contact?intent=microsite" variant="outline" className="px-5 py-3">Build a lead-gen microsite</ButtonLink>
                        </div>
                    </Container>
                </AnimateInClient>
            </main>
            <Footer />
        </>
    );
}

