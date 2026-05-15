import React from 'react';
import { useNavigate } from 'react-router-dom';

const EcomHelp: React.FC = () => {
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

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff' }}>
      
      {/* 1. TECHNICAL OVERVIEW */}
      <section style={{ ...sectionStyle, paddingTop: '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px' }}>
          03 / Infrastructure
        </span>
        <h1 style={{ fontSize: '64px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Marketplace <br/> Infrastructure.
        </h1>
        <p style={{ fontSize: '24px', color: COLORS.subtext, maxWidth: '850px', lineHeight: '1.5' }}>
          Scaling across **Amazon, Myntra, Flipkart, and Meesho** requires more than just listings—it requires technical precision in inventory logic and settlement architecture.
        </p>
      </section>

      {/* 2. THE CAPABILITIES GRID (WEIGHTED) */}
      <section style={{ ...sectionStyle, backgroundColor: COLORS.bgLight, borderRadius: '48px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Platform Capabilities.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { 
              title: 'Inventory Logic', 
              desc: 'Sub-second inventory synchronization across multiple warehouses and 5+ sales channels to prevent overselling and OOS penalties.' 
            },
            { 
              title: 'Settlement Analysis', 
              desc: 'Automated reconciliation of bank settlements against marketplace reports to identify hidden fees and payment leakages.' 
            },
            { 
              title: 'Listing Architecture', 
              desc: 'High-fidelity SEO for Amazon and Myntra using data-driven keyword injection and category-specific attribute mapping.' 
            },
            { 
              title: 'Account Health Systems', 
              desc: 'Continuous monitoring of seller metrics and automated dispute resolution logic to maintain 98%+ account health scores.' 
            }
          ].map((item, i) => (
            <div key={i} style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ color: COLORS.subtext, fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAST WORK & IMPACT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Strategic Success.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          
          {/* CASE STUDY 01 */}
          <div style={{ borderLeft: `4px solid ${COLORS.accent}`, paddingLeft: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Apparel Brand Scaling</h3>
            <p style={{ color: COLORS.subtext, lineHeight: '1.6' }}>
              "TMMT transformed our Amazon and Myntra operations. By fixing our technical backend and inventory sync logic, they took our monthly revenue from **₹5L to ₹50L**."
            </p>
            <p style={{ marginTop: '15px', fontWeight: 600, fontSize: '14px' }}>— CEO, Ethnic Fashion Brand</p>
          </div>

          {/* CASE STUDY 02 */}
          <div style={{ borderLeft: `4px solid ${COLORS.accent}`, paddingLeft: '30px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Logistics Optimization</h3>
            <p style={{ color: COLORS.subtext, lineHeight: '1.6' }}>
              Integrated automated shipping and profit tracking for a multi-channel seller, reducing operational overhead by 60% while increasing listing visibility by 35%.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION FOOTER */}
      <section style={{ ...sectionStyle, textAlign: 'center', borderTop: `1px solid ${COLORS.bgLight}` }}>
        <h2 style={{ fontSize: '28px', fontWeight: 600 }}>Does your infrastructure scale?</h2>
        <p style={{ color: COLORS.subtext, margin: '20px 0 40px' }}>Get a technical audit of your marketplace health and inventory logic.</p>
        <button 
          onClick={() => navigate('/contact')}
          style={{ 
            padding: '16px 40px', 
            borderRadius: '100px', 
            backgroundColor: COLORS.accent, 
            color: '#fff', 
            border: 'none', 
            fontSize: '18px', 
            fontWeight: 600, 
            cursor: 'pointer' 
          }}
        >
          Book Technical Audit
        </button>
      </section>

    </div>
  );
};

export default EcomHelp;