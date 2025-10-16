import Link from 'next/link';

export default function Footer() {
    const nav = [
        ['Home', '/'],
        ['Work', '/work'],
        ['Services', '/services'],
        ['Method', '/method'],
        ['Channels', '/channels'],
        ['Packages', '/packages'],
        ['Designs', '/designs'],
        ['Assets', '/assets'],
        ['Insights', '/insights'],
        ['About', '/about'],
        ['Contact', '/contact'],
        ['Privacy', '/privacy'],
        ['Terms', '/terms']
    ] as const;
    return (
        <footer className="mt-16 border-t border-royal-shade/30 bg-graphite-900/70">
            <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-4">
                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <defs>
                                <linearGradient id="goldGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#FFF1C2' }} />
                                    <stop offset="45%" style={{ stopColor: '#E6C56E' }} />
                                    <stop offset="100%" style={{ stopColor: '#B3842A' }} />
                                </linearGradient>
                                <radialGradient id="blueGlobeFooter" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style={{ stopColor: '#183B73' }} />
                                    <stop offset="100%" style={{ stopColor: '#0E2F63' }} />
                                </radialGradient>
                            </defs>
                            <circle cx="64" cy="64" r="58" stroke="url(#goldGradFooter)" strokeWidth="6" fill="none" opacity="0.95" />
                            <circle cx="64" cy="64" r="30" fill="url(#blueGlobeFooter)" />
                            <path d="M 64 49 A 15 15 0 0 1 64 79 A 7.5 7.5 0 0 0 64 64 A 7.5 7.5 0 0 1 64 49 Z" fill="url(#goldGradFooter)" opacity="0.9" />
                            <path d="M 64 49 A 15 15 0 0 0 64 79 A 7.5 7.5 0 0 1 64 64 A 7.5 7.5 0 0 0 64 49 Z" fill="#0E2F63" />
                        </svg>
                        <div className="text-gold-gradient font-semibold">ORION ASCEND</div>
                    </div>
                    <p className="mt-3 text-sm text-metal-text/70">Imagine. Create. Transcend.</p>
                </div>
                <nav className="col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {nav.map(([label, href]) => (
                        <Link key={href} href={href} className="text-sm text-metal-text/80 hover:text-pulse-hover">
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="px-4 py-4 text-center text-xs text-metal-text/60 border-t border-royal-shade/30">© {new Date().getFullYear()} Orion Ascend Media · <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionintelligenceagency.com" target="_blank" rel="noreferrer">OIA</a> · <a className="text-pulse-cyan hover:text-pulse-hover" href="https://orionapexcapital.com" target="_blank" rel="noreferrer">Apex</a></div>
        </footer>
    );
}

