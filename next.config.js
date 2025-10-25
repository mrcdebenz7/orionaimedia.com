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
                source: '/blog',
                destination: '/insights',
                permanent: true
            }
        ];
    }
};

export default nextConfig;

