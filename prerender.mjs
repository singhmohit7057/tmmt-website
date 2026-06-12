/**
 * Post-build prerender script.
 * Copies dist/index.html into each route directory with correct
 * title, meta description, canonical, OG tags, and JSON-LD schemas baked in.
 * Run via: node prerender.mjs (after vite build)
 *
 * Adding a new route: add { path: '/your-path' } to ROUTES.
 * DEFAULTS fill in title/description/ogImage when not specified.
 * Override any field by setting it on the route object.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DIST = './dist';
const BASE = 'https://www.tmmt.in';

const DEFAULTS = {
  title: 'TMMT | Ecommerce Automation & Marketplace Infrastructure',
  description: 'TMMT builds ecommerce automation, marketplace infrastructure, inventory sync, and seller workflows for fashion brands and D2C businesses.',
  ogImage: `${BASE}/tmmt-logo.png`,
};

const ROUTES = [
  {
    path: '/',
    title: 'Ecommerce Automation, AI & Marketplace Infrastructure | TMMT',
    description: 'TMMT builds ecommerce automation, marketplace infrastructure, inventory sync, and seller workflows for fashion brands and D2C businesses.',
    ogImage: `${BASE}/tmmt-logo.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TMMT',
        url: BASE,
        description: 'Ecommerce automation, marketplace infrastructure, and AI-search optimized web systems for D2C and fashion brands.'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does TMMT build?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TMMT builds ecommerce automation systems, marketplace infrastructure, inventory sync workflows, and seller operations for fashion brands and D2C businesses.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you work with fashion brands?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Most of our clients are fashion brands and D2C marketplace sellers on Amazon, Myntra, Flipkart, Ajio, and Meesho.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you automate inventory and marketplace workflows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We sync inventory in real time across active marketplaces and automate seller workflows that usually require manual updates.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do we get started?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Tell us what you're working on via the contact page. We'll review it and come back with what we can realistically build."
            }
          },
          {
            '@type': 'Question',
            name: "What's your typical project timeline?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most automation setups go live in 2–4 weeks. Simple catalog or sync work takes under a week; multi-channel builds with custom rules take 3–6 weeks depending on platform APIs.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you handle catalog and listing work, or only backend automation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both. We write titles, bullets, and A+ content optimized per platform, and we build the backend pipelines that keep listings, pricing, and stock in sync across channels.'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    title: 'About TMMT | Ecommerce Automation & Marketplace Ops',
    description: 'TMMT builds ecommerce infrastructure — marketplace automation, inventory sync, operational dashboards, and scalable commerce ops for modern brands.',
    ogImage: `${BASE}/tmmt-logo.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE}/about` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does TMMT do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We build ecommerce infrastructure — automation systems, marketplace integrations, operational dashboards, and brand systems for D2C brands.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who are the founders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TMMT was founded by Mohit Singh (automation and systems) and Harsh Aggarwal (client strategy and UI architecture).'
            }
          },
          {
            '@type': 'Question',
            name: 'What platforms do you work with?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Amazon, Myntra, Flipkart, Ajio, Meesho, Shopify, and custom-built ecommerce systems.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you work with early-stage brands?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, if the problem is worth solving. We work with brands at launch stage as well as established sellers scaling to multi-channel.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where is TMMT based, and do you work remotely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "We're based in India and work fully remotely with brands across the country. All coordination happens async or over calls — no on-site requirement."
            }
          },
          {
            '@type': 'Question',
            name: 'What makes TMMT different from a freelancer or a generic digital agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "We focus exclusively on ecommerce operations. Mohit's background is automation-first; Harsh's is client-facing execution. You get both without managing multiple vendors."
            }
          },
          {
            '@type': 'Question',
            name: 'Do you offer ongoing retainers or only project work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both. One-time builds (catalog setup, automation rollout) and monthly retainers for ongoing ops, ads management, or marketplace account health.'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/services',
    title: 'Services | What TMMT Builds – TMMT',
    description: 'TMMT builds ecommerce frontends, Python automation, marketplace infrastructure, branding systems, performance ads, and social media for D2C brands.',
    ogImage: `${BASE}/tmmt-logo.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: `${BASE}/services`,
        itemListElement: [
          'web-design', 'automation', 'ecommerce-help',
          'branding', 'social-media', 'ads-management'
        ].map((slug, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: slug.replace(/-/g, ' '),
          url: `${BASE}/services/${slug}`
        }))
      }
    ]
  },
  {
    path: '/contact',
    title: 'Contact TMMT | Talk to Us',
    description: "Tell us what you're working on — inventory sync, marketplace setup, automation, or ads. We'll figure out if we can fix it.",
    ogImage: `${BASE}/tmmt-logo.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE}/contact` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact TMMT',
        url: `${BASE}/contact`,
        mainEntity: {
          '@type': 'ContactPoint',
          email: 'themadmysteryteam@gmail.com',
          contactType: 'customer support'
        }
      }
    ]
  },
  {
    path: '/services/web-design',
    title: 'Ecommerce Web Design & React Development – TMMT',
    description: 'We build fast, SEO-ready ecommerce websites using React, TypeScript, and Vite — optimized for Core Web Vitals, mobile, and search crawlability.',
    ogImage: `${BASE}/services/web.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Ecommerce Web Infrastructure', item: `${BASE}/services/web-design` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ecommerce Web Infrastructure',
        serviceType: 'Web Design & Development',
        description: 'Performance-focused ecommerce websites and marketplace-ready frontend systems built with React and TypeScript, optimized for speed, SEO, and AI readability.',
        url: `${BASE}/services/web-design`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/services/automation',
    title: 'Ecommerce Automation | Python & FastAPI Workflows – TMMT',
    description: 'Custom Python-FastAPI automation for ecommerce: label processing, inventory scrapers, bank settlement tools, and workflow engines.',
    ogImage: `${BASE}/services/automation.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Ecommerce Automation', item: `${BASE}/services/automation` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ecommerce Automation',
        serviceType: 'Workflow Automation',
        description: 'Custom Python-FastAPI automation for ecommerce operations: label processing, inventory scrapers, bank settlement tools, and workflow engines.',
        url: `${BASE}/services/automation`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/services/ecommerce-help',
    title: 'Marketplace Operations | Multi-Channel Setup – TMMT',
    description: 'We set up and manage your seller presence on Amazon, Myntra, Flipkart, Ajio, and Meesho — catalog, inventory sync, FBA/FBF, and settlement reconciliation.',
    ogImage: `${BASE}/services/marketplace.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Marketplace Operations', item: `${BASE}/services/ecommerce-help` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Marketplace Operations',
        serviceType: 'Marketplace Management',
        description: 'Setup and management of seller presence on Amazon, Myntra, Flipkart, Ajio, and Meesho — catalog, inventory sync, FBA/FBF, and settlement reconciliation.',
        url: `${BASE}/services/ecommerce-help`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/services/branding',
    title: 'Brand Identity & Business Setup for Ecommerce – TMMT',
    description: 'Brand identity, GST registration, HSN mapping, trademark filing, APOB setup, and marketplace onboarding for ecommerce businesses.',
    ogImage: `${BASE}/services/brand.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Brand Identity & Business Setup', item: `${BASE}/services/branding` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Brand Identity & Business Setup',
        serviceType: 'Branding & Business Registration',
        description: 'Brand identity, GST registration, HSN mapping, trademark filing, APOB setup, and marketplace onboarding for ecommerce businesses.',
        url: `${BASE}/services/branding`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/services/social-media',
    title: 'Social Media Management & Content Production – TMMT',
    description: "We handle your brand's social media end to end — reels, posts, captions, scheduling, and growth across Instagram, LinkedIn, and YouTube Shorts.",
    ogImage: `${BASE}/services/social.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Social Media Management', item: `${BASE}/services/social-media` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Social Media Management',
        serviceType: 'Social Media Management',
        description: 'End-to-end social media management — reels, posts, captions, scheduling, and growth across Instagram, LinkedIn, and YouTube Shorts.',
        url: `${BASE}/services/social-media`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/services/ads-management',
    title: 'Meta & Google Ads Management for Ecommerce Brands – TMMT',
    description: 'We run Meta and Google Ads for D2C and marketplace brands with server-side CAPI tracking, audience exclusion logic, and ROAS-focused campaign architecture.',
    ogImage: `${BASE}/services/performance.png`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: 'Ads Management Systems', item: `${BASE}/services/ads-management` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Ads Management Systems',
        serviceType: 'Paid Advertising Management',
        description: 'Data-driven Meta and Google Ads management with server-side CAPI tracking, audience exclusion logic, and ROAS-focused campaign architecture.',
        url: `${BASE}/services/ads-management`,
        provider: { '@type': 'Organization', name: 'TMMT', url: BASE },
        areaServed: { '@type': 'Country', name: 'India' }
      }
    ]
  },
  {
    path: '/mohit-singh',
    title: 'Mohit Singh | Co-Founder – TMMT',
    description: 'Mohit Singh is Co-Founder of TMMT, building ecommerce automation infrastructure, Python-FastAPI engines, and marketplace integrations.',
    ogImage: `${BASE}/Mohit-Singh.jpg`,
    ogType: 'profile',
    profileFirstName: 'Mohit',
    profileLastName: 'Singh',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Mohit Singh', item: `${BASE}/mohit-singh` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mohit Singh',
        url: `${BASE}/mohit-singh`,
        image: `${BASE}/Mohit-Singh.jpg`,
        jobTitle: 'Co-Founder',
        description: 'Builds automation infrastructure, Python-FastAPI engines, and marketplace integrations at TMMT.',
        knowsAbout: ['Python', 'FastAPI', 'Ecommerce Automation', 'Marketplace Integration'],
        sameAs: ['https://github.com/singhmohit7057'],
        worksFor: { '@type': 'Organization', name: 'TMMT', url: BASE }
      }
    ]
  },
  {
    path: '/harsh-aggarwal',
    title: 'Harsh Aggarwal | Co-Founder – TMMT',
    description: 'Harsh Aggarwal is Co-Founder of TMMT, leading client strategy, UI architecture, and brand systems for ecommerce businesses and D2C marketplace brands.',
    ogImage: `${BASE}/Harsh-Aggarwal.jpg`,
    ogType: 'profile',
    profileFirstName: 'Harsh',
    profileLastName: 'Aggarwal',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Harsh Aggarwal', item: `${BASE}/harsh-aggarwal` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Harsh Aggarwal',
        url: `${BASE}/harsh-aggarwal`,
        image: `${BASE}/Harsh-Aggarwal.jpg`,
        jobTitle: 'Co-Founder',
        description: 'Leads client strategy, UI architecture, and brand systems at TMMT.',
        knowsAbout: ['UI Architecture', 'Brand Systems', 'Client Strategy', 'Ecommerce'],
        worksFor: { '@type': 'Organization', name: 'TMMT', url: BASE }
      }
    ]
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | TMMT',
    description: 'TMMT privacy policy covering data collection, use, and your rights as a user of tmmt.in.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | TMMT',
    description: 'Terms and conditions for using TMMT services, website, and ecommerce automation solutions.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | TMMT',
    description: 'Cookie policy for tmmt.in — what cookies are used and how to manage them.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/careers',
    title: 'Careers at TMMT | Join the Team',
    description: 'Explore open roles at TMMT — we hire for ecommerce automation, marketplace operations, and web engineering.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/sitemap',
    title: 'Sitemap | TMMT',
    description: 'Full sitemap of tmmt.in — all pages, services, and resources.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/community',
    title: 'TMMT Community | Coming Soon',
    description: 'The TMMT community is coming soon. Join the waitlist to get early access.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
  {
    path: '/services/soon',
    title: 'New Services | Coming Soon – TMMT',
    description: 'New TMMT services are on the way. Join the waitlist to be the first to know.',
    ogImage: `${BASE}/tmmt-logo.png`,
  },
];

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

for (const rawRoute of ROUTES) {
  const route = { ...DEFAULTS, ...rawRoute };
  const canonical = `${BASE}${route.path}`;
  const ogType = route.ogType || 'website';

  let html = template
    // Title
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`
    )
    // Meta description
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    // Canonical
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`
    )
    // OG type
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${ogType}" />`
    )
    // OG title
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    // OG description
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    // OG url
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    // OG image
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${route.ogImage}" />`
    )
    // OG image:secure_url (must match the per-route ogImage)
    .replace(
      /<meta\s+property="og:image:secure_url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image:secure_url" content="${route.ogImage}" />`
    )
    // Twitter title
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    // Twitter description
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    // Twitter image
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${route.ogImage}" />`
    );

  // Inject profile Open Graph tags for founder pages
  if (route.profileFirstName) {
    const profileTags = [
      `<meta property="profile:first_name" content="${route.profileFirstName}" />`,
      `<meta property="profile:last_name" content="${route.profileLastName}" />`
    ].join('\n    ');
    html = html.replace('</head>', `  ${profileTags}\n</head>`);
  }

  // Update the static WebPage schema to match this route
  const pageLabel = (route.path === '/'
    ? 'TMMT Homepage'
    : route.title.split('|')[0].split('–')[0].trim()
  ).replace(/\$/g, '$$$$');
  html = html.replace(
    /("@type":\s*"WebPage",\s*"name":\s*)"[^"]*"(,\s*"url":\s*)"[^"]*"/,
    `$1"${pageLabel}"$2"${canonical}"`
  );

  // Inject route-specific JSON-LD schemas before </head>
  if (route.schemas && route.schemas.length > 0) {
    const schemaBlocks = route.schemas.map(schema => {
      const json = JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>');
      return `<script type="application/ld+json">${json}</script>`;
    }).join('\n  ');
    html = html.replace('</head>', `  ${schemaBlocks}\n</head>`);
  }

  if (route.path === '/') {
    writeFileSync(join(DIST, 'index.html'), html);
    console.log(`✓ /  →  dist/index.html`);
  } else {
    const dir = join(DIST, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    console.log(`✓ ${route.path}  →  dist${route.path}/index.html`);
  }
}

console.log(`\nPrerender complete — ${ROUTES.length} routes generated.`);
