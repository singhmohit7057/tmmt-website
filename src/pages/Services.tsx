import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const navigate = useNavigate();
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
    bgLight: '#f5f5f7',
    border: '#d2d2d7'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const serviceRowStyle = (index: number): React.CSSProperties => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
    gap: isMobile ? '24px' : '80px',
    alignItems: 'center',
    marginBottom: isMobile ? '60px' : '120px'
  });

  const tagStyle: React.CSSProperties = {
    padding: '6px 12px',
    backgroundColor: COLORS.bgLight,
    borderRadius: '6px',
    fontSize: '10px',
    fontWeight: 700,
    color: COLORS.subtext,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    border: `1px solid ${COLORS.border}44`
  };

  const services = [
    {
      id: "01",
      title: "Web Engineering.",
      desc: "React and TypeScript frontends that load fast and don't break on mobile. Built for ecommerce, optimized for search.",
      tags: ["React", "Vite", "TypeScript"],
      image: "/services/web.webp",
      path: "/services/web-design"
    },
    {
      id: "02",
      title: "Workflow Automation.",
      desc: "Eliminate manual tasks with custom Python scripts. We engineer label processors, inventory scrapers, and bank settlement tools that work 24/7.",
      tags: ["Python", "Automation", "APIs"],
      image: "/services/automation.webp",
      path: "/services/automation"
    },
    {
      id: "03",
      title: "Marketplace Infrastructure.",
      desc: "Expert support for the world's largest platforms. We manage and optimize your presence across Shopify, Amazon, Flipkart, Myntra, and Meesho.",
      tags: ["Multi-Channel", "Logistics", "Sync"],
      image: "/services/marketplace.webp",
      path: "/services/ecommerce-help"
    },
    {
      id: "04",
      title: "Brand Architecture.",
      desc: "Logo, packaging, GST filing, trademark, and marketplace onboarding — the full setup you need to launch a brand on Indian marketplaces.",
      tags: ["Design", "Identity", "IP"],
      image: "/services/brand.webp",
      path: "/services/branding"
    },
    {
      id: "05",
      title: "Performance Marketing.",
      desc: "Meta and Google Ads with server-side CAPI tracking and audience exclusion logic. We track every rupee spent and cut what isn't working.",
      tags: ["Meta Ads", "Google Ads", "ROAS"],
      image: "/services/performance.webp",
      path: "/services/ads-management"
    },
    {
      id: "06",
      title: "Social Narrative.",
      desc: "Reels, posts, captions, and scheduling across Instagram, LinkedIn, and YouTube Shorts. Content produced and posted by us.",
      tags: ["Organic", "Curation", "Growth"],
      image: "/services/social.webp",
      path: "/services/social-media"
    }
  ];

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
    {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO 
        title="Core Technical Capabilities & Solutions"
        description="Explore TMMT's core solutions engineered for business performance: high-speed frontends, headless data scrapers, automated multi-channel syncing, and data-backed ad networks."
        path="/services"
        ogImage="/tmmt-logo.webp"
      />

      {/* 1. HERO SECTION */}
        <section
          style={{
            ...sectionStyle,
            textAlign: 'center',
            paddingTop: isMobile ? '110px' : '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1.2px'
            }}
          >
            Our Capabilities
          </span>

          <h1
            style={{
              fontSize: isMobile ? '42px' : '72px',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              margin: '20px 0',
              lineHeight: 1.1,
              maxWidth: '900px'
            }}
          >
            Six systems.
            <br />
            One{' '}
            <span style={{ color: COLORS.accent }}>
              infrastructure
            </span>.
          </h1>

          <p
            style={{
              fontSize: isMobile ? '17px' : '24px',
              color: COLORS.subtext,
              maxWidth: '850px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            We build the systems your ecommerce operation needs — faster frontends, automated workflows, and marketplace infrastructure across Shopify, Amazon, Myntra, Flipkart, Ajio, and Meesho.
          </p>
        </section>

      {/* 2. SERVICES LIST */}
      <section style={sectionStyle}>
        {services.map((service, index) => (
          <div key={service.id} style={serviceRowStyle(index)}>
            
            {/* Content Container */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* MOBILE HIERARCHY: 1. TAGS */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={tagStyle}>{tag}</span>
                ))}
              </div>

              {/* MOBILE HIERARCHY: 2. HEADING */}
              <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>
                {service.title}
              </h2>

              {/* MOBILE HIERARCHY: 3. IMAGE (ONLY SHOWS HERE ON MOBILE) */}
              {isMobile && (
                <div style={{ 
                  width: '100%', 
                  aspectRatio: '16/9', 
                  backgroundColor: COLORS.bgLight, 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  margin: '10px 0'
                }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              {/* MOBILE HIERARCHY: 4. DESCRIPTION */}
              <p style={{ 
                fontSize: isMobile ? '16px' : '18px', 
                color: COLORS.subtext, 
                lineHeight: 1.6, 
                margin: 0,
                maxWidth: '500px'
              }}>
                {service.desc}
              </p>

              {/* MOBILE HIERARCHY: 5. BUTTON */}
              <button 
                onClick={() => navigate(service.path)} 
                style={{ 
                  width: isMobile ? '100%' : 'fit-content',
                  padding: '14px 28px', 
                  borderRadius: '980px', 
                  backgroundColor: COLORS.text, 
                  color: '#fff', 
                  border: 'none', 
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                View Details
              </button>
            </div>

            {/* DESKTOP IMAGE (HIDDEN ON MOBILE) */}
            {!isMobile && (
              <div style={{ 
                flex: 1.2,
                height: '450px', 
                backgroundColor: COLORS.bgLight, 
                borderRadius: '32px', 
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
              }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section style={{ ...sectionStyle, textAlign: 'center', backgroundColor: COLORS.bgLight, borderRadius: isMobile ? '32px' : '60px', marginBottom: '80px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 600, marginBottom: '15px' }}>Not sure where to start?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px', fontSize: '18px' }}>Tell us what you're working on and we'll figure out what needs fixing first.</p>
        <button 
          onClick={() => navigate('/contact')} 
          style={{ 
            width: isMobile ? '100%' : 'auto',
            padding: '18px 45px', 
            borderRadius: '980px', 
            backgroundColor: COLORS.accent, 
            color: '#fff', 
            border: 'none', 
            fontSize: '18px', 
            fontWeight: 600, 
            cursor: 'pointer' 
          }}
        >
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Services;