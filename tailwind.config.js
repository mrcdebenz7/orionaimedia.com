import plugin from 'tailwindcss/plugin';

export default {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                graphite: {
                    900: '#0E141B',
                    800: '#151D28'
                },
                royal: {
                    DEFAULT: '#183B73',
                    shade: '#0E2F63'
                },
                pulse: {
                    cyan: '#53D3F8',
                    hover: '#34B6E3'
                },
                metal: {
                    text: '#E5E7EB'
                },
                gold: {
                    g0: '#FFF1C2',
                    g1: '#E6C56E',
                    g2: '#B3842A'
                }
            },
            fontFamily: {
                heading: ['Cinzel', 'ui-serif', 'Georgia', 'Times New Roman', 'serif'],
                body: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
            },
            letterSpacing: {
                heading: '0.02em',
                smallcaps: '0.08em'
            },
            backgroundImage: {
                'gold-imperial':
                    'linear-gradient(92deg, #FFF1C2 0%, #E6C56E 45%, #B3842A 100%)',
                'starfield':
                    'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.28) 99%, transparent 100%), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.15) 99%, transparent 100%), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.2) 99%, transparent 100%)',
                'circuit':
                    'radial-gradient(ellipse at top right, rgba(24,59,115,0.12), transparent 40%), repeating-linear-gradient(90deg, rgba(83,211,248,0.06), rgba(83,211,248,0.06) 2px, transparent 2px, transparent 8px)'
            },
            boxShadow: {
                'gold-emboss':
                    '0 1px 0 rgba(255,241,194,0.6), 0 2px 6px rgba(179,132,42,0.35), inset 0 1px 0 rgba(255,241,194,0.35)'
            },
            dropShadow: {
                gold: '0 0 24px rgba(230,197,110,0.25)',
                cyan: '0 0 18px rgba(83,211,248,0.35)'
            },
            keyframes: {
                sparkle: {
                    '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                    '50%': { opacity: 1, transform: 'scale(1.12)' }
                },
                waveScroll: {
                    '0%': { backgroundPosition: '0 0, 0 0' },
                    '100%': { backgroundPosition: '800px 0, -800px 0' }
                }
            },
            animation: {
                sparkle: 'sparkle 1.8s ease-in-out infinite',
                'wave-scroll': 'waveScroll 18s linear infinite'
            },
            zIndex: {
                wave: 0,
                content: 10,
                ring: 20,
                star: 30,
                header: 50
            },
            borderRadius: {
                panel: '16px',
                button: '12px'
            }
        }
    },
    plugins: [
        plugin(function ({ addUtilities, theme }) {
            addUtilities({
                '.text-gold-gradient': {
                    backgroundImage:
                        'linear-gradient(92deg, #FFF1C2 0%, #E6C56E 45%, #B3842A 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                },
                '.ring-gold': {
                    boxShadow:
                        '0 0 0 2px rgba(230,197,110,0.65), 0 0 24px rgba(230,197,110,0.25)'
                },
                '.metallic': {
                    color: theme('colors.metal.text')
                },
                '.small-caps': {
                    letterSpacing: theme('letterSpacing.smallcaps'),
                    fontVariant: 'all-small-caps'
                },
                '.bg-wave': {
                    backgroundImage:
                        'linear-gradient(0deg, rgba(83,211,248,0.08) 2px, transparent 2px), radial-gradient(1200px 50px at 50% 50%, rgba(83,211,248,0.08), transparent 40%)',
                    backgroundSize: '8px 8px, 1200px 50px'
                },
                '@media (prefers-reduced-motion: reduce)': {
                    '.animate-wave-scroll': {
                        animation: 'none'
                    },
                    '.animate-sparkle': {
                        animation: 'none'
                    }
                }
            });
        })
    ]
};

