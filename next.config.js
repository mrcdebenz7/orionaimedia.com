/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'orionaimedia.com' }],
                destination: 'https://www.orionaimedia.com/:path*',
                permanent: true
            }
        ];
    }
};

export default nextConfig;

