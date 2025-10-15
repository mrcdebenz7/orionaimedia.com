import Link from 'next/link';

export default function Footer() {
  const nav = [
    ['Home', '/'],
    ['Work', '/work'],
    ['Services', '/services'],
    ['Method', '/method'],
    ['Channels', '/channels'],
    ['Packages', '/packages'],
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
            <div className="h-8 w-8 rounded-full ring-gold" aria-hidden />
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
      <div className="px-4 py-4 text-center text-xs text-metal-text/60 border-t border-royal-shade/30">© {new Date().getFullYear()} Orion Ascend Media</div>
    </footer>
  );
}
