import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease'
  };

  const sectionStyle: React.CSSProperties = {
    padding: '100px 10%',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ width: '100%', color: COLORS.text, overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, textAlign: 'center', backgroundColor: '#fff', paddingTop: '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
          Next-Gen Technical Agency
        </span>
        <h1 style={{ fontSize: '72px', fontWeight: 700, letterSpacing: '-0.04em', margin: '20px 0', lineHeight: 1.1 }}>
          Engineering the <span style={{ color: COLORS.accent }}>Future</span> <br/> of Digital Brands.
        </h1>
        <p style={{ fontSize: '24px', color: COLORS.subtext, maxWidth: '750px', margin: '0 auto 40px', lineHeight: 1.5 }}>
          We bridge the gap between creative vision and technical execution through high-fidelity design, automation, and scalable code.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button style={{ ...buttonStyle, backgroundColor: COLORS.accent, color: '#fff' }} onClick={() => navigate('/contact')}>
            Start a Project
          </button>
          <button style={{ ...buttonStyle, backgroundColor: 'transparent', color: COLORS.accent, border: `1px solid ${COLORS.accent}` }} onClick={() => navigate('/services')}>
            Our Expertise
          </button>
        </div>
      </section>

      {/* 2. STATS & IMPACT (The "Proof" Section) */}
      <section style={{ ...sectionStyle, backgroundColor: '#fff', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center', borderTop: `1px solid ${COLORS.bgLight}`, paddingTop: '60px' }}>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>40%</h2>
            <p style={{ color: COLORS.subtext, fontSize: '16px', marginTop: '10px' }}>Efficiency Increase via Automation</p>
          </div>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>Sub-1s</h2>
            <p style={{ color: COLORS.subtext, fontSize: '16px', marginTop: '10px' }}>Average Page Load Time</p>
          </div>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: 700, margin: 0 }}>24/7</h2>
            <p style={{ color: COLORS.subtext, fontSize: '16px', marginTop: '10px' }}>Technical Monitoring & Support</p>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY FOCUS (Refined Pills) */}
        <section style={{ ...sectionStyle, backgroundColor: COLORS.bgLight, textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>
            Specialized for High-Growth Sectors
          </h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '12px', 
            maxWidth: '900px', 
            margin: '0 auto' 
          }}>
            {['E-Commerce', 'Fintech', 'SaaS', 'Fashion Retail', 'Logistics', 'Real Estate'].map((industry, i) => (
              <div key={i} style={{ 
                padding: '12px 28px', 
                backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '100px', 
                fontSize: '16px',
                fontWeight: 500,
                color: COLORS.text,
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

      {/* 4. CORE SOLUTIONS GRID */}
        <section style={{ ...sectionStyle, backgroundColor: '#fff' }}>
          <div style={{ textAlign: 'left', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 600 }}>Core Solutions.</h2>
            <p style={{ color: COLORS.subtext, fontSize: '18px' }}>Engineered for performance, designed for conversion.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '25px', 
            marginBottom: '50px' 
          }}>
            {[
              { 
                title: 'Web Engineering', 
                desc: 'High-speed React & Vite applications built for sub-second load times and Retina-ready visual precision.', 
                link: '/services/web-design' 
              },
              { 
                title: 'Workflow Automation', 
                desc: 'Custom Python scripts, label processors, and API integrations that eliminate manual operational bottlenecks.', 
                link: '/services/automation' 
              },
              { 
                title: 'Marketplace Infra', 
                desc: 'Multi-channel scaling across Shopify, Amazon, Myntra, and Flipkart with automated settlement and inventory logic.', 
                link: '/services/ecom' 
              },
              { 
                title: 'Brand Architecture', 
                desc: 'Comprehensive visual identity systems and digital guidelines designed to signal authority and premium quality.', 
                link: '/services/branding' 
              },
              { 
                title: 'Ad Engineering', 
                desc: 'Data-driven funnel optimization across Meta and Google with custom attribution and performance tracking.', 
                link: '/services/ads' 
              },
              { 
                title: 'Social Narrative', 
                desc: 'High-fidelity content curation and organic growth strategies to transition followers into loyal brand communities.', 
                link: '/services/social' 
              }
            ].map((s, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '40px', 
                  backgroundColor: COLORS.bgLight, 
                  borderRadius: '24px', 
                  cursor: 'pointer', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
                }} 
                onClick={() => navigate(s.link)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: COLORS.accent, fontWeight: 700, marginBottom: '15px', fontSize: '14px', letterSpacing: '1px' }}>
                  0{i+1}
                </div>
                <h3 style={{ fontSize: '24px', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ color: COLORS.subtext, lineHeight: '1.6', fontSize: '15px' }}>{s.desc}</p>
                <div style={{ marginTop: '24px', color: COLORS.accent, fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Explore Capability <span style={{ fontSize: '18px' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* 5. TECHNICAL PHILOSOPHY (The "Big Text" Section) */}
      <section style={{ ...sectionStyle, backgroundColor: COLORS.text, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 600, lineHeight: 1.2 }}>"Code is not just a tool; it's the foundation of modern brand identity."</h2>
          <p style={{ color: COLORS.subtext, fontSize: '20px', marginTop: '30px' }}>
            We don't believe in templates. We believe in custom logic that solves real business bottlenecks, allowing your brand to scale without technical debt.
          </p>
        </div>
      </section>

      {/* 6. THE PROCESS */}
      <section style={{ ...sectionStyle, backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 600, marginBottom: '80px' }}>The TMMT Method</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {[
            { step: '01', title: 'Audit', desc: 'Comprehensive analysis of technical debt and infrastructure gaps.' },
            { step: '02', title: 'Blueprint', desc: 'Architecture design focusing on scalability and performance.' },
            { step: '03', title: 'Build', desc: 'Agile development with continuous integration and testing.' },
            { step: '04', title: 'Scale', desc: 'Post-launch optimization and data-driven growth strategies.' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'left', padding: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: COLORS.accent, marginBottom: '10px' }}>{item.step}</div>
              <h4 style={{ fontSize: '22px', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: COLORS.subtext, fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA / SOCIAL SECTION */}
      <section style={{ padding: '80px 10%', backgroundColor: COLORS.bgLight, borderRadius: '48px', margin: '0 20px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 600, marginBottom: '20px' }}>Join the TMMT Social.</h2>
            <p style={{ color: COLORS.subtext, fontSize: '18px', lineHeight: '1.6' }}>
              We're building more than just code. Join our Saturday Run Club or founders' mixers to connect with the city's brightest builders.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ ...buttonStyle, backgroundColor: COLORS.text, color: '#fff' }} onClick={() => navigate('/community')}>
              Join Waitlist
            </button>
            <button style={{ ...buttonStyle, backgroundColor: '#fff', border: `1px solid ${COLORS.border}`, color: COLORS.text }} onClick={() => navigate('/about')}>
              About Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;