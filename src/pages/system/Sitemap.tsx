import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Sitemap: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#6e6e73',
    accent: '#0071e3',
    bg: '#f5f5f7',
    border: '#d2d2d7'
  };

  const containerStyle: React.CSSProperties = {
    padding: isMobile ? '100px 20px 80px' : '140px 5% 100px',
    maxWidth: '1600px',
    margin: '0 auto',
    color: COLORS.text,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: 1.6,
    boxSizing: 'border-box',
    overflowX: 'hidden'
  };

  const sitemapNodes = [
    {
      category: 'Core Navigation',
      links: [
        { label: 'Index / Home', path: '/' },
        { label: 'Capabilities Overview / Services', path: '/services' },
        { label: 'Corporate Dossier / About', path: '/about' },
        { label: 'Talent Acquisition / Careers', path: '/careers' },
        { label: 'Operational Hub / Contact', path: '/contact' }
      ]
    },
    {
      category: 'Leadership & Founders',
      links: [
        {
          label: 'Mohit Singh | Systems & Automation',
          path: '/mohit-singh'
        },
        {
          label: 'Harsh Aggarwal | Strategy & Brand Systems',
          path: '/harsh-aggarwal'
        }
      ]
    },
    {
      category: 'Engineering & Specialties',
      links: [
        {
          label: 'High-Fidelity Web Engineering',
          path: '/services/web-design'
        },
        {
          label: 'Workflow Automation Engines',
          path: '/services/automation'
        },
        {
          label: 'Marketplace Operating Infrastructure',
          path: '/services/ecommerce-help'
        },
        {
          label: 'Corporate Brand Architecture',
          path: '/services/branding'
        },
        {
          label: 'Paid Acquisition & Funnel Logic',
          path: '/services/ads-management'
        },
        {
          label: 'Social Curation & Brand Equity',
          path: '/services/social-media'
        }
      ]
    },
    {
      category: 'Regulatory & Legal Frameworks',
      links: [
        {
          label: 'Data Protection & Privacy Policy',
          path: '/privacy-policy'
        },
        {
          label: 'Terms & Conditions of Architecture',
          path: '/terms-and-conditions'
        },
        {
          label: 'Optimization Layers / Cookie Policy',
          path: '/cookie-policy'
        }
      ]
    }
  ];

  return (
    <div style={containerStyle}>
      {/* SEO */}
      <SEO
        title="System Index Maps & Infrastructure Navigation"
        description="A complete directory outlining the operational architecture, infrastructure systems, engineering services, founder pages, and semantic frameworks across TMMT."
        path="/sitemap"
        ogImage="/tmmt-logo.webp"
      />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SiteNavigationElement',
            name: 'TMMT Sitemap',
            url: 'https://www.tmmt.in/sitemap'
          })
        }}
      />

      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '60px'
        }}
      >
        <span
          style={{
            color: COLORS.accent,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            fontSize: '12px'
          }}
        >
          System Index
        </span>

        <h1
          style={{
            fontSize: isMobile ? '38px' : '64px',
            fontWeight: 700,
            marginTop: '12px',
            marginBottom: '20px',
            letterSpacing: '-0.04em',
            lineHeight: 1.05
          }}
        >
          Sitemap.
        </h1>

        <p
          style={{
            color: COLORS.subtext,
            fontSize: isMobile ? '16px' : '22px',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.7
          }}
        >
          A complete map of our high-fidelity digital
          infrastructure.
        </p>
      </div>

      {/* DIVIDER */}
      <hr
        style={{
          border: 'none',
          borderTop: `1px solid ${COLORS.border}`,
          marginBottom: '60px',
          maxWidth: '1200px',
          marginInline: 'auto'
        }}
      />

      {/* SITEMAP GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : 'repeat(4, minmax(0, 1fr))',
          gap: isMobile ? '24px' : '20px',
          alignItems: 'stretch'
        }}
      >
        {sitemapNodes.map((node, i) => (
          <div
            key={i}
            style={{
              backgroundColor: COLORS.bg,
              padding: isMobile ? '28px' : '32px',
              borderRadius: isMobile ? '24px' : '30px',
              border: `1px solid ${COLORS.border}44`,
              transition: 'all 0.25s ease',
              boxSizing: 'border-box',
              minHeight: isMobile ? 'auto' : '420px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-6px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '24px',
                color: COLORS.text,
                lineHeight: 1.5
              }}
            >
              {node.category}
            </h3>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {node.links.map((link, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: '16px'
                  }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontSize: isMobile ? '14px' : '15px',
                      color: '#424245',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                      display: 'inline-block',
                      lineHeight: 1.7
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = COLORS.accent)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = '#424245')
                    }
                  >
                    → &nbsp; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;