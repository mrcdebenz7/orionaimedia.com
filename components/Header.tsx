"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    return (
        <header className="sticky top-0 z-header backdrop-blur bg-graphite-900/70 border-b border-royal-shade/30">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <defs>
                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#FFF1C2' }} />
                                <stop offset="45%" style={{ stopColor: '#E6C56E' }} />
                                <stop offset="100%" style={{ stopColor: '#B3842A' }} />
                            </linearGradient>
                            <radialGradient id="blueGlobe" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style={{ stopColor: '#183B73' }} />
                                <stop offset="100%" style={{ stopColor: '#0E2F63' }} />
                            </radialGradient>
                        </defs>
                        <circle cx="64" cy="64" r="58" stroke="url(#goldGrad)" strokeWidth="6" fill="none" opacity="0.95" />
                        <circle cx="64" cy="64" r="52" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" opacity="0.75" />
                        <circle cx="64" cy="64" r="30" fill="url(#blueGlobe)" />
                        <path d="M 64 49 A 15 15 0 0 1 64 79 A 7.5 7.5 0 0 0 64 64 A 7.5 7.5 0 0 1 64 49 Z" fill="url(#goldGrad)" opacity="0.9" />
                        <path d="M 64 49 A 15 15 0 0 0 64 79 A 7.5 7.5 0 0 1 64 64 A 7.5 7.5 0 0 0 64 49 Z" fill="#0E2F63" />
                        <circle cx="64" cy="56.5" r="2.8" fill="#0E2F63" />
                        <circle cx="64" cy="71.5" r="2.8" fill="url(#goldGrad)" />
                    </svg>
                    <span className="text-lg font-semibold text-gold-gradient tracking-wide" style={{ fontFamily: 'Cinzel, ui-serif' }}>
                        ORION ASCEND
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {nav.map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm metallic hover:text-pulse-hover transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <button
                    className="md:hidden rounded-md px-3 py-2 border border-royal-shade/50"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                >
                    Menu
                </button>
            </div>
            {open && (
                <div id="mobile-nav" className="md:hidden px-4 pb-4 grid gap-2">
                    {nav.map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className="rounded-md px-3 py-2 bg-graphite-800/70 hover:bg-graphite-800 border border-royal-shade/40"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

