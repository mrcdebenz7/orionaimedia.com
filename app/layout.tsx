import '../styles/globals.css';
import { Cinzel, Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { organizationSchema } from '@/lib/schema';

const cinzel = Cinzel({ subsets: ['latin'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
    themeColor: '#0E141B',
    colorScheme: 'dark'
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.orionaimedia.com'),
    title: {
        default: 'Orion Ascend Media — Imagine. Create. Transcend.',
        template: '%s — Orion Ascend Media'
    },
    description:
        'Orion Ascend Media (Orion Digital AI) builds content systems that compound distribution, lower CAC, and lift retention.',
    openGraph: {
        type: 'website',
        title: 'Orion Ascend Media',
        description:
            'Content systems that compound distribution and growth.',
        url: 'https://www.orionaimedia.com',
        images: ['/OrionAscendMain.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Orion Ascend Media',
        description:
            'Content systems that compound distribution and growth.',
        images: ['/OrionAscendMain.png']
    },
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    return (
        <html lang="en" className="dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            url: 'https://www.orionaimedia.com',
                            name: 'Orion Ascend Media',
                            potentialAction: {
                                '@type': 'SearchAction',
                                target: 'https://www.orionaimedia.com/search?q={query}',
                                'query-input': 'required name=query'
                            }
                        })
                    }}
                />
                {gaId ? (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
                        <Script id="ga-init" strategy="afterInteractive">{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);} 
                            gtag('js', new Date());
                            gtag('config', '${gaId}', { send_page_view: false });
                        `}</Script>
                    </>
                ) : null}
                {plausibleDomain ? (
                    <Script
                        src="https://plausible.io/js/script.js"
                        strategy="afterInteractive"
                        data-domain={plausibleDomain}
                        defer
                    />
                ) : null}
                <Script id="oam-track" strategy="afterInteractive">{`
                    window.oamTrack = function(name, props){
                        try {
                            if (typeof window.gtag === 'function') { window.gtag('event', name, props || {}); }
                            if (typeof window.plausible === 'function') { window.plausible(name, { props: props || {} }); }
                        } catch (e) { /* no-op */ }
                    };
                `}</Script>
            </head>
            <body className={`body-bg ${cinzel.className} ${inter.className}`}>
                <div className="fixed inset-0 -z-wave wave-layer opacity-50" />
                <div className="relative min-h-screen">{children}</div>
            </body>
        </html>
    );
}

