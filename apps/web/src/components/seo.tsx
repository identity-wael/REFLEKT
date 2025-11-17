import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { generateMetadata } from '@/lib/utils';
import type { SEOProps, Locale } from '@/types';

interface SEOComponentProps extends SEOProps {
  locale?: Locale;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  locale = 'en',
  canonical,
  noindex = false,
  nofollow = false,
}: SEOComponentProps): Metadata {
  const metadata = generateMetadata({
    title,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    ogImage,
  });

  const canonicalUrl = canonical || SITE_CONFIG.url;

  return {
    ...metadata,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${SITE_CONFIG.url}/en`,
        'ja-JP': `${SITE_CONFIG.url}/ja`,
      },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: locale === 'en' ? 'en_US' : 'ja_JP',
      alternateLocale: locale === 'en' ? 'ja_JP' : 'en_US',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
    },
    other: {
      'msapplication-TileColor': '#2B5797',
      'theme-color': '#ffffff',
    },
  };
}

// JSON-LD structured data
export function generateStructuredData(type: 'website' | 'organization' | 'article', data?: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'website':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'customer service',
          availableLanguage: ['English', 'Japanese'],
        },
        sameAs: [
          'https://github.com/reflekt',
          'https://linkedin.com/company/reflekt',
          'https://twitter.com/reflekt',
        ],
      };

    case 'article':
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: data?.title,
        description: data?.description,
        author: {
          '@type': 'Person',
          name: data?.author || SITE_CONFIG.author,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/logo.png`,
          },
        },
        datePublished: data?.publishDate,
        dateModified: data?.modifiedDate || data?.publishDate,
        image: data?.image ? `${SITE_CONFIG.url}${data.image}` : SITE_CONFIG.ogImage,
      };

    default:
      return baseStructuredData;
  }
}

// Breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Component for adding structured data to pages
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}