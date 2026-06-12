import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const TermsAndConditions: React.FC = () => {
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
    bg: '#f5f5f7',
    border: '#d2d2d7'
  };

  const containerStyle: React.CSSProperties = {
    padding: isMobile ? '80px 20px' : '140px 15%',
    maxWidth: '1000px',
    margin: '0 auto',
    color: COLORS.text,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: 1.6
  };

  return (
    <div style={containerStyle}>

      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO 
        title="Terms & Conditions of Architecture"
        description="Read the operational terms, intellectual property parameters, and liability boundaries governing systems deployed across the TMMT ecosystem."
        path="/terms-and-conditions"
        ogImage="/tmmt-logo.png"
      />

      <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>
        Operational Framework
      </span>
      <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: 700, marginTop: '10px', marginBottom: '40px', letterSpacing: '-0.03em' }}>
        Terms & Conditions
      </h1>
      <p style={{ color: COLORS.subtext, fontSize: '14px', marginBottom: '40px' }}>Last Updated: May 2026</p>

      <hr style={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, marginBottom: '40px' }} />

      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>1. Scope of Architecture</h2>
        <p style={{ marginBottom: '20px' }}>
          By engaging with the platforms, code bases, or systems developed by TMMT, you formally enter into an operational agreement governed by these parameters. Our services cover custom production across:
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', backgroundColor: COLORS.bg, borderRadius: '12px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 600 }}>Vertical</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 600 }}>Operational Thresholds</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: `1px solid ${COLORS.border}44` }}>
              <td style={{ padding: '15px', fontWeight: 600 }}>Automation Engines</td>
              <td style={{ padding: '15px', color: COLORS.subtext }}>Custom automated logic runs matching individual configuration profiles.</td>
            </tr>
            <tr style={{ borderBottom: `1px solid ${COLORS.border}44` }}>
              <td style={{ padding: '15px', fontWeight: 600 }}>Marketplace Sync</td>
              <td style={{ padding: '15px', color: COLORS.subtext }}>Multi-node inventory mapping configuration across platform nodes.</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', fontWeight: 600 }}>Brand Architecture</td>
              <td style={{ padding: '15px', color: COLORS.subtext }}>Compliance structure adjustments and entity development mapping.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>2. Intellectual Asset Distribution</h2>
        <p style={{ marginBottom: '20px' }}>
          All source engines, custom SPA layout components, system structures, and operational frameworks deployed by TMMT remain proprietary unless otherwise specified in exclusive client master service agreements. Unauthorized extraction of system frameworks is strictly audited.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>3. Boundary of Liability</h2>
        <p style={{ marginBottom: '20px' }}>
          TMMT engineers infrastructure designed for peak performance efficiency. However, third-party api changes, modifications by platform providers (e.g., Amazon, Meta, Myntra API alterations), or external platform status changes are outside our direct operational boundaries.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;