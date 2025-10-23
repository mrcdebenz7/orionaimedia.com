// JSON-LD structured data helpers

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Orion Ascend Media',
        alternateName: 'Orion Digital AI',
        url: 'https://www.orionaimedia.com',
        logo: 'https://www.orionaimedia.com/crest.svg',
        description: 'Content systems that compound distribution, lower CAC, and lift retention.',
        sameAs: [
            // Add social media URLs when available
            // 'https://twitter.com/orionascendmedia',
            // 'https://linkedin.com/company/orion-ascend-media'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'hello@orionaimedia.com'
        }
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

export function articleSchema(article: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    author?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: article.url,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        image: article.image || 'https://www.orionaimedia.com/og.png',
        author: {
            '@type': 'Organization',
            name: article.author || 'Orion Ascend Media'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Orion Ascend Media',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.orionaimedia.com/crest.svg'
            }
        }
    };
}

export function webPageSchema(page: { name: string; url: string; description?: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: page.name,
        url: page.url,
        description: page.description || ''
    };
}

export function caseStudySchema(item: { name: string; description: string; url: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: item.name,
        url: item.url,
        description: item.description
    };
}


