import '../styles/globals.css';
import { Cinzel, Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { organizationSchema } from '@/lib/schema';

const cinzel = Cinzel({ subsets: ['latin'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
    themeColor: '#0E141B',
    colorScheme: 'dark'
};

export const metadata: Metadata = {
    metadataBase: new URL('https://orionaimedia.com'),
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
        url: 'https://orionaimedia.com',
        images: ['/og.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Orion Ascend Media',
        description:
            'Content systems that compound distribution and growth.',
        images: ['/og.png']
    },
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
                />
            </head>
            <body className={`body-bg ${cinzel.className} ${inter.className}`}>
                <div className="fixed inset-0 -z-wave wave-layer opacity-50" />
                <div className="relative min-h-screen">{children}</div>
            </body>
        </html>
    );
}

