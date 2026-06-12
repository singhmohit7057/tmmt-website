import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7',
    white: '#ffffff'
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: isMobile ? '68px 10px 42px' : '105px 6% 60px',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr',
    gap: isMobile ? '28px' : '60px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box',
    alignItems: 'center'
  };

  const infoItemStyle: React.CSSProperties = {
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#fff',
        overflowX: 'hidden'
      }}
    >
      {/* SEO */}
      <SEO
        title="Contact TMMT"
        description="Contact TMMT for ecommerce infrastructure systems, marketplace automation workflows, inventory synchronization systems, operational dashboards, and scalable commerce operations."
        path="/contact"
        ogImage="/tmmt-logo.png"
      />

      {/* CONTACT + ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TMMT',
            url: 'https://www.tmmt.in',
            logo: 'https://www.tmmt.in/tmmt-logo.png',
            email: 'themadmysteryteam@gmail.com',
            description:
              'TMMT builds ecommerce infrastructure systems, marketplace automation workflows, operational dashboards, and scalable commerce operations.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kolkata',
              addressRegion: 'West Bengal',
              addressCountry: 'India'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'themadmysteryteam@gmail.com',
              areaServed: 'Worldwide',
              availableLanguage: ['English']
            },
            sameAs: [
              'https://www.instagram.com/themadmysteryteam',
              'https://linkedin.com/company/themadmysteryteam',
              'https://twitter.com/tmmt_official'
            ]
          })
        }}
      />

      <div style={containerStyle}>
        {/* LEFT SIDE */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1.2px'
            }}
          >
            Contact TMMT
          </span>

          {!isMobile && (
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 700,
                margin: '14px 0 18px',
                lineHeight: 1.05,
                letterSpacing: '-0.05em',
                maxWidth: '720px',
                textAlign: 'center'
              }}
            >
              Tell us what's breaking.
            </h1>
          )}

          {isMobile && (
            <p
              style={{
                fontSize: '14px',
                color: COLORS.subtext,
                margin: '10px 0 24px',
                lineHeight: 1.6,
                maxWidth: '320px'
              }}
            >
              Drop us a message about your ecommerce setup. We'll take it from there.
            </p>
          )}

          {!isMobile && (
            <p
              style={{
                fontSize: '18px',
                color: COLORS.subtext,
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '720px',
                textAlign: 'center'
              }}
            >
              Whether it's inventory sync, marketplace setup, automation, or something you can't quite name yet — tell us what's going wrong and we'll figure out if we can fix it.
            </p>
          )}

          <div style={infoItemStyle}>
            <span
              style={{
                fontWeight: 700,
                color: COLORS.text,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Email
            </span>

            <a
              href="mailto:themadmysteryteam@gmail.com"
              style={{
                color: COLORS.accent,
                textDecoration: 'none',
                fontSize: isMobile ? '15px' : '18px',
                wordBreak: 'break-word'
              }}
            >
              themadmysteryteam@gmail.com
            </a>
          </div>

          <div style={infoItemStyle}>
            <span
              style={{
                fontWeight: 700,
                color: COLORS.text,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Location
            </span>

            <span
              style={{
                color: COLORS.subtext,
                fontSize: isMobile ? '14px' : '17px',
                lineHeight: 1.6
              }}
            >
              Kolkata, West Bengal, India
            </span>
          </div>

          <div style={infoItemStyle}>
            <span
              style={{
                fontWeight: 700,
                color: COLORS.text,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Social
            </span>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '10px' : '14px',
                rowGap: '10px',
                justifyContent: 'center'
              }}
            >
              {[
                {
                  label: 'Instagram',
                  href: 'https://instagram.com/themadmysteryteam'
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/company/themadmysteryteam'
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/tmmt_official'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: COLORS.accent,
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: isMobile ? '13px' : '15px'
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            backgroundColor: COLORS.bgLight,
            padding: isMobile ? '18px 10px' : '36px',
            borderRadius: isMobile ? '24px' : '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
          }}
        >
          <div
            style={{
              marginBottom: '18px',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <span
              style={{
                color: COLORS.accent,
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Start a Conversation
            </span>

            <h2
              style={{
                fontSize: isMobile ? '20px' : '32px',
                fontWeight: 700,
                margin: '12px 0',
                lineHeight: 1.1
              }}
            >
              What are you working on?
            </h2>

            <p
              style={{
                color: COLORS.subtext,
                fontSize: isMobile ? '14px' : '15px',
                lineHeight: 1.55
              }}
            >
              Give us the context — platform, problem, scale. We'll respond with what we can actually do about it.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;