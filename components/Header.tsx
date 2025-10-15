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
    ['Insights', '/insights'],
    ['About', '/about'],
    ['Contact', '/contact']
  ] as const;
  return (
    <header className="sticky top-0 z-header backdrop-blur bg-graphite-900/70 border-b border-royal-shade/30">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-full ring-gold" aria-hidden />
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
