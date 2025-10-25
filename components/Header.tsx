"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';
import Logo from '@/components/ui/Logo';
import { ButtonLink } from '@/components/ui/Button';

export default function Header() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onResize = () => setOpen(false);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    const nav = [
        ['Work', '/work'],
        ['Services', '/services'],
        ['Method', '/method'],
        ['Channels', '/channels'],
        ['Packages', '/packages'],
        ['Designs', '/designs'],
        ['Assets', '/assets'],
        ['Insights', '/insights'],
        ['About', '/about'],
        ['Contact', '/contact']
    ] as const;
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-header backdrop-blur bg-graphite-900/70 border-b border-royal-shade/30">
            <div className="container-edge py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group" aria-label="Orion Ascend Media — Home">
                    <Logo className="h-8 w-8" />
                    <span className="text-lg font-semibold text-gold-gradient tracking-wide" style={{ fontFamily: 'Cinzel, ui-serif' }}>
                        ORION ASCEND
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                    {nav.map(([label, href]) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={active ? 'page' : undefined}
                                className={`text-sm metallic hover:text-pulse-hover transition-colors${active ? ' text-gold-g0' : ''}`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <ButtonLink href="/contact#book" className="ml-2">Book a call</ButtonLink>
                </nav>
                <button
                    className="md:hidden rounded-button px-3 py-2 border border-royal-shade/50"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    aria-label="Toggle menu"
                >
                    Menu
                </button>
            </div>
            {/* Sticky promo bar */}
            <div className="hidden md:block border-t border-royal-shade/30 bg-graphite-900/60">
                <div className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-metal-text/70">
                    Looking to upgrade performance and conversions?
                    <a href="/contact?intent=revamp" className="ml-2 inline-block rounded-button border border-gold-g1/40 px-3 py-1 text-[11px] font-semibold text-gold-g0 hover:bg-graphite-800" onClick={() => track('cta_click', { cta: 'start_revamp_bar' })}>
                        Start a revamp
                    </a>
                </div>
            </div>
            {open && (
                <div id="mobile-nav" className="md:hidden container-edge pb-4 grid gap-2" aria-label="Mobile navigation">
                    {nav.map(([label, href]) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={active ? 'page' : undefined}
                                className={`rounded-button px-3 py-2 bg-graphite-800/70 hover:bg-graphite-800 border border-royal-shade/40${active ? ' border-pulse-hover/60' : ''}`}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <ButtonLink href="/contact#book" className="justify-self-start">Book a call</ButtonLink>
                </div>
            )}
        </header>
    );
}

