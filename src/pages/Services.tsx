import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7'
  };

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const serviceRowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '80px',
    alignItems: 'center',
    marginBottom: '100px'
  };

  const tagStyle: React.CSSProperties = {
    padding: '6px 14px',
    backgroundColor: COLORS.bgLight,
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 700,
    color: COLORS.subtext,
    textTransform: 'uppercase',
    letterSpacing: '0.8px'
  };

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, textAlign: 'center', paddingTop: '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
          Our Capabilities
        </span>
        <h1 style={{ fontSize: '64px', fontWeight: 700, letterSpacing: '-0.04em', margin: '20px 0' }}>
          Technical solutions <br/> built to <span style={{ color: COLORS.accent }}>scale</span>.
        </h1>
        <p style={{ fontSize: '22px', color: COLORS.subtext, maxWidth: '850px', margin: '0 auto', lineHeight: '1.5' }}>
          We provide the engineering and strategy required to turn digital potential into market leadership. 
          From custom automation to multi-channel retail management.
        </p>
      </section>

      {/* 2. SERVICES DEEP DIVE */}
      <section style={sectionStyle}>
        
        {/* 01: WEB ENGINEERING */}
        <div style={serviceRowStyle}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>React</span><span style={tagStyle}>Vite</span><span style={tagStyle}>TS</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Web Engineering.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              We build ultra-fast, "Retina-ready" web applications. Our focus is on sub-second load times and flawless UI execution using modern frontend stacks.
            </p>
            <button onClick={() => navigate('/services/web-design')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

        {/* 02: AUTOMATION (PYTHON) */}
        <div style={{ ...serviceRowStyle, direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>Python</span><span style={tagStyle}>Automation</span><span style={tagStyle}>APIs</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Workflow Automation.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              Eliminate manual tasks with custom Python scripts. We engineer label processors, inventory scrapers, and bank settlement tools that work 24/7.
            </p>
            <button onClick={() => navigate('/services/automation')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

        {/* 03: ECOM HELP (Marketplaces) */}
        <div style={serviceRowStyle}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>Multi-Channel</span><span style={tagStyle}>Logistics</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Marketplace Infrastructure.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              Expert support for the world's largest platforms. We manage and optimize your presence across **Shopify, Amazon, Flipkart, Myntra, and Meesho**, handling everything from listing logic to settlement analysis.
            </p>
            <button onClick={() => navigate('/services/ecom')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

        {/* 04: BRANDING */}
        <div style={{ ...serviceRowStyle, direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>Design</span><span style={tagStyle}>Identity</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Brand Architecture.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              Visual systems that signal authority. We design logos, packaging, and digital guidelines that ensure your brand looks premium on every screen.
            </p>
            <button onClick={() => navigate('/services/branding')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

        {/* 05: ADVERTISING */}
        <div style={serviceRowStyle}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>Meta Ads</span><span style={tagStyle}>SEM</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Performance Marketing.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              Data-backed advertising funnels. We manage Meta and Google Ads with a focus on ROAS, using custom attribution logic to track every rupee spent.
            </p>
            <button onClick={() => navigate('/services/ads')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

        {/* 06: SOCIAL MEDIA */}
        <div style={{ ...serviceRowStyle, direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <span style={tagStyle}>Organic</span><span style={tagStyle}>Curation</span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px' }}>Social Narrative.</h2>
            <p style={{ fontSize: '17px', color: COLORS.subtext, lineHeight: '1.7', marginBottom: '30px' }}>
              High-fidelity content management. We curate your brand’s social presence to build trust and community, transitioning followers into loyal customers.
            </p>
            <button onClick={() => navigate('/services/social')} style={{ padding: '12px 24px', borderRadius: '980px', backgroundColor: COLORS.text, color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
          <div style={{ backgroundColor: COLORS.bgLight, height: '350px', borderRadius: '24px' }}></div>
        </div>

      </section>

      {/* FINAL CTA */}
      <section style={{ ...sectionStyle, textAlign: 'center', backgroundColor: COLORS.bgLight, borderRadius: '48px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 600 }}>Ready to engineer your growth?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px', fontSize: '18px' }}>Book a 15-minute technical audit to find your bottlenecks.</p>
        <button onClick={() => navigate('/contact')} style={{ padding: '16px 40px', borderRadius: '980px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontSize: '18px', fontWeight: 600, cursor: 'pointer' }}>Get Started</button>
      </section>

    </div>
  );
};

export default Services;