import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
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
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const avatarStyle: React.CSSProperties = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    backgroundColor: COLORS.border,
    margin: '0 auto 25px',
    overflow: 'hidden',
    display: 'block',
    border: `4px solid #fff`,
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  };

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff' }}>
      
      {/* 1. MISSION & STORY */}
      <section style={{ ...sectionStyle, textAlign: 'center', paddingTop: '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
          Our Story
        </span>
        <h1 style={{ fontSize: '64px', fontWeight: 700, letterSpacing: '-0.04em', margin: '20px 0', lineHeight: 1.1 }}>
          Engineering growth for the <br/> <span style={{ color: COLORS.accent }}>next generation</span> of brands.
        </h1>
        <p style={{ fontSize: '21px', color: COLORS.subtext, lineHeight: '1.6', maxWidth: '850px', margin: '0 auto' }}>
          TMMT was born from a simple realization: modern brands are often held back by legacy technical debt. We built an agency that functions like a software lab—focused on automation, marketplace logic, and high-performance design.
        </p>
      </section>

      {/* 2. THE DUO (CO-FOUNDERS) */}
      <section style={{ ...sectionStyle, backgroundColor: '#fff' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {/* Rahul Singh */}
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: COLORS.bgLight, borderRadius: '32px' }}>
            <div style={avatarStyle}>
              <img src="/founder1.jpg" alt="Rahul Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 600, marginBottom: '5px' }}>Rahul Singh</h3>
            <p style={{ color: COLORS.accent, fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>
              Co-Founder & Design Lead
            </p>
            <p style={{ color: COLORS.subtext, fontSize: '16px', lineHeight: '1.6' }}>
              Specializing in high-fidelity brand systems and UI engineering. Rahul ensures that every TMMT interface meets the "Retina-ready" standard of modern luxury.
            </p>
          </div>

          {/* Sameer Singh */}
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: COLORS.bgLight, borderRadius: '32px' }}>
            <div style={avatarStyle}>
              <img src="/founder2.jpg" alt="Sameer Singh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: 600, marginBottom: '5px' }}>Sameer Singh</h3>
            <p style={{ color: COLORS.accent, fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>
              Co-Founder & Systems Architect
            </p>
            <p style={{ color: COLORS.subtext, fontSize: '16px', lineHeight: '1.6' }}>
              Expert in Python automation and multi-channel marketplace logic. Sameer architects the backend engines that power 24/7 retail operations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL TENETS (Legitimacy Section) */}
      <section style={{ ...sectionStyle, borderTop: `1px solid ${COLORS.bgLight}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
          {[
            { title: 'Privacy & Integrity', desc: 'We build proprietary automation tools that ensure your data remains yours, following strict encryption standards.' },
            { title: 'Marketplace Authority', desc: 'Deep-rooted expertise in scaling brands across Amazon, Myntra, Flipkart, and Shopify Plus.' },
            { title: 'Zero Friction', desc: 'Our Method is built on removing operational bottlenecks so founders can focus on vision, not logistics.' }
          ].map((tenet, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px' }}>{tenet.title}</h4>
              <p style={{ color: COLORS.subtext, fontSize: '15px', lineHeight: '1.6' }}>{tenet.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE SOCIAL SIDE (Future Initiatives) */}
      <section style={{ 
        padding: '80px 10%', 
        backgroundColor: COLORS.text, 
        color: '#fff', 
        borderRadius: '48px', 
        margin: '0 20px 80px',
        textAlign: 'center'
      }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          The TMMT Lifestyle
        </span>
        <h2 style={{ fontSize: '42px', fontWeight: 600, margin: '15px 0' }}>Beyond the Code.</h2>
        <p style={{ fontSize: '19px', color: COLORS.subtext, maxWidth: '650px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Engineering is a marathon, not a sprint. We are currently architecting the <strong>TMMT Run Club</strong> and <strong>Founders' Mixer</strong> series—creating a space for the city's brightest builders to connect.
        </p>
        <button 
          onClick={() => navigate('/community')}
          style={{ 
            padding: '16px 35px', 
            borderRadius: '980px', 
            backgroundColor: COLORS.accent, 
            color: '#fff', 
            border: 'none', 
            fontSize: '17px', 
            fontWeight: 600, 
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.accent)}
        >
          Get Early Access
        </button>
      </section>

    </div>
  );
};

export default About;