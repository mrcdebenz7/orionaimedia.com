import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.orionaimedia.com';
    const lastModified = new Date();

    const routes = [
        '',
        '/services',
        '/method',
        '/work',
        '/channels',
        '/packages',
        '/designs',
        '/assets',
        '/insights',
        '/about',
        '/contact',
        '/privacy',
        '/terms'
    ];

    const posts = [
        'content-systems-compound',
        'retention-metrics-matter',
        'testing-creative-at-scale',
        'youtube-seo-2025',
        'podcast-distribution-checklist',
        'owned-media-vs-paid'
    ];

    return [
        ...routes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8
        })),
        ...posts.map((slug) => ({
            url: `${baseUrl}/insights/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.6
        }))
    ];
}

