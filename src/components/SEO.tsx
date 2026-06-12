import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
  robots?: string;
  author?: string;
  type?: string;
}

const SEO: React.FC<SeoProps> = ({
  title,
  description,
  path,
  ogImage,
  keywords = 'web engineering, workflow automation, market infrastructure, brand architecture, performance marketing, social narrative, TMMT',
  robots = 'index, follow',
  author = 'TMMT',
  type = 'website',
}) => {
  useEffect(() => {
    const fullTitle = `${title} | TMMT`;
    const fullUrl = `https://www.tmmt.in${path}`;

    // Title
    document.title = fullTitle;

    // Helper function for meta tags
    const updateMetaTag = (
      selector: string,
      attribute: string,
      value: string
    ) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(
          selector.includes('property') ? 'property' : 'name',
          attribute
        );
        document.head.appendChild(element);
      }

      element.setAttribute('content', value);
    };

    // Basic SEO
    updateMetaTag('meta[name="description"]', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'keywords', keywords);
    updateMetaTag('meta[name="robots"]', 'robots', robots);
    updateMetaTag('meta[name="author"]', 'author', author);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'og:title', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'og:url', fullUrl);
    updateMetaTag('meta[property="og:type"]', 'og:type', type);

    // Twitter
    updateMetaTag('meta[name="twitter:title"]', 'twitter:title', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');

    // Images
    if (ogImage) {
      const imageUrl = `https://www.tmmt.in${ogImage}`;

      updateMetaTag('meta[property="og:image"]', 'og:image', imageUrl);
      updateMetaTag('meta[name="twitter:image"]', 'twitter:image', imageUrl);
    }

    // Canonical
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', fullUrl);
  }, [
    title,
    description,
    path,
    ogImage,
    keywords,
    robots,
    author,
    type,
  ]);

  return null;
};

export default SEO;