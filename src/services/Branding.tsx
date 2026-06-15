import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Branding: React.FC = () => {
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
    bg: '#f5f5f7',
    border: '#d2d2d7',
    darkBg: '#1d1d1f'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const brandingProjects = [
    {
      label: "FASHION IDENTITY & COMPLIANCE",
      title: "IBTIDA",
      parent: "Sub-brand of Label Muskaan Singh",
      desc: "Full-scale brand scaling including HSN classification, Trade Name amendments, and APOB (Additional Place of Business) registrations for FBA/FBF fulfillment centers to secure Prime/Assured badges. Managed Trademark applications and end-to-end Myntra/Amazon onboarding.",
      tech: ["APOB REGISTRATION", "GST HSN MAPPING", "TRADEMARK FILING", "FBA/FBF SETUP"],
      image: "/services/ibtida-logo.webp" 
    },
    {
      label: "CORPORATE FOUNDATION",
      title: "Amoha Civil",
      desc: "GST registration, current account setup, and domain procurement for a construction business entering the market. The business side handled before day one.",
      tech: ["ENTITY FORMATION", "TREASURY SETUP", "DOMAIN PROCUREMENT", "BRAND DNA"],
      image: "/services/amoha-logo.webp"
    }
  ];

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO
        title="Brand Identity & Business Setup for Ecommerce"
        description="We handle brand identity, GST registration, HSN mapping, trademark filing, APOB setup, and marketplace onboarding — everything you need to launch and sell legally."
        path="/services/branding"
        ogImage="/services/brand.webp"
      />

      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, paddingTop: isMobile ? '100px' : '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
          04 / Architecture
        </span>
        <h1 style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Brand setup,<br/> done right.
        </h1>
        
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1.5 }}>
            <p style={{ fontSize: isMobile ? '18px' : '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '650px', marginBottom: '30px' }}>
              We handle the paperwork most founders don't want to deal with — GST filings, trademark applications, FBA/FBF registrations, and marketplace onboarding. So the brand can actually ship.
            </p>

            {/* Capability Tags - Specialized for Legal & Brand Architecture */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'GST Compliance', icon: '⚖️' },
                { label: 'Trademark IP', icon: '®️' },
                { label: 'Entity Scaling', icon: '🏛️' }
              ].map((tag) => (
                <div key={tag.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
                  backgroundColor: COLORS.bg, borderRadius: '12px', border: `1px solid ${COLORS.border}66`,
                  fontSize: '13px', fontWeight: 600, color: COLORS.text
                }}>
                  <span>{tag.icon}</span> {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* ENTITY STATUS BOX - Provides the "Box" anchor appeal */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#fff', 
            borderRadius: '24px', 
            padding: '30px', 
            width: isMobile ? '100%' : '420px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: `1px solid ${COLORS.border}`
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#6e6e73', marginBottom: '20px', letterSpacing: '1px' }}>ENTITY STATUS: ACTIVE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'GST / HSN Mapping', status: '✓ Verified' },
                { label: 'Trademark Filing', status: '✓ In-Process' },
                { label: 'FBA/FBF Registry', status: '✓ Active' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: i < 2 ? `1px solid ${COLORS.bg}` : 'none' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: '12px', color: COLORS.accent, fontWeight: 600 }}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE METHODOLOGY (SIMPLE TASKS -> HEAVY WORDING) */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 5%', backgroundColor: COLORS.bg, borderRadius: isMobile ? '24px' : '48px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '50px', textAlign: 'center' }}>How we set up a brand end to end.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { phase: "01", title: "Statutory Entity", items: ["HSN/SAC Mapping", "GST Nexus Filing", "Trademark (TM) Procurement"] },
            { phase: "02", title: "Commercial Setup", items: ["Treasury/Current Acct", "Domain Architecture", "Enterprise Email Hub"] },
            { phase: "03", title: "Logistic Nexus", items: ["APOB Registration", "FBA/FBF Fulfillment", "Packaging Compliance"] },
            { phase: "04", title: "Market Deployment", items: ["Platform Onboarding", "Brand Registry", "D2C Architecture"] }
          ].map((item, i) => (
            <div key={i} style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '24px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ color: COLORS.accent, fontWeight: 700, marginBottom: '10px' }}>PHASE {item.phase}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px' }}>{item.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.subtext, fontSize: '14px', lineHeight: 1.8 }}>
                {item.items.map(bullet => <li key={bullet}>• {bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT SHOWCASE (18/9 RATIO) */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '40px' }}>Brand Architectures.</h2>
        {brandingProjects.map((project, index) => (
          <div key={index} style={{
            display: 'flex', 
            flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'), 
            gap: isMobile ? '30px' : '60px', 
            backgroundColor: index % 2 !== 0 ? COLORS.darkBg : COLORS.bg, 
            color: index % 2 !== 0 ? '#fff' : COLORS.text,
            borderRadius: isMobile ? '32px' : '48px', 
            padding: isMobile ? '30px' : '60px',
            alignItems: 'center',
            marginBottom: '40px',
            overflow: 'hidden'
          }}>
            {/* 18/9 Aspect Ratio Container */}
            <div style={{ 
                flex: 1.2, 
                width: '100%', 
                aspectRatio: '18 / 12', 
                borderRadius: '24px', 
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent }}>{project.label}</span>
              <h3 style={{ fontSize: isMobile ? '32px' : '42px', margin: '10px 0' }}>{project.title}</h3>
              {project.parent && <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px', opacity: 0.8 }}>{project.parent}</div>}
              <p style={{ color: index % 2 === 0 ? COLORS.subtext : '#6e6e73', fontSize: '17px', marginBottom: '25px', lineHeight: 1.6 }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: '10px', fontWeight: 700, padding: '6px 12px', backgroundColor: index % 2 === 0 ? '#fff' : 'rgba(255,255,255,0.1)', borderRadius: '6px', border: index % 2 === 0 ? `1px solid ${COLORS.border}` : 'none' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. FOOTER CTA */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '15px' }}>Starting a new brand?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px' }}>We handle the GST, the trademark, the marketplace setup — so you can focus on the product.</p>
        <button onClick={() => navigate('/contact')} style={{ width: isMobile ? '100%' : 'auto', padding: '18px 45px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default Branding;