/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            // Enforce canonical host (www)
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'orionaimedia.com' }],
                destination: 'https://www.orionaimedia.com/:path*',
                permanent: true
            },
            // Legacy slugs
            {
                source: '/designs',
                destination: '/work',
                permanent: true
            },
            {
                source: '/assets',
                destination: '/work',
                permanent: true
            },
            {
                source: '/blog',
                destination: '/insights',
                permanent: true
            }
        ];
    }
};

export default nextConfig;

