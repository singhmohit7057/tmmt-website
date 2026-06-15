import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const CookiePolicy: React.FC = () => {
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
        title="Optimization Layers & Cookie Policy"
        description="Understand how TMMT uses localized data tokens and cookies to maintain core state switches and stabilize sub-400ms rendering performance interfaces."
        path="/cookie-policy"
        ogImage="/tmmt-logo.webp"
      />

      <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>
        Optimization Layers
      </span>
      <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: 700, marginTop: '10px', marginBottom: '40px', letterSpacing: '-0.03em' }}>
        Cookie Policy
      </h1>
      <p style={{ color: COLORS.subtext, fontSize: '14px', marginBottom: '40px' }}>Last Updated: May 2026</p>

      <hr style={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, marginBottom: '40px' }} />

      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>1. Tracking Elements Definition</h2>
        <p style={{ marginBottom: '20px' }}>
          Our architectural interface uses cookies and localized data strings to calibrate sub-second responsiveness, preserve your functional preferences across page toggles, and secure data interactions.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>2. Active Configuration Profiles</h2>
        <p style={{ marginBottom: '20px' }}>We run two distinct classifications of telemetry nodes:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>Essential System Elements:</strong> Required to preserve internal app state switches, system security configurations, and fluid interactive UI rendering.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Attribution Calibration Strings:</strong> Integrated with our marketing tracking environments (e.g., Meta Pixel signals and Google Search tracking tokens) to evaluate campaign efficiency metrics without exposing individual identity configurations.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>3. User Choice & Browser Control</h2>
        <p style={{ marginBottom: '20px' }}>
          You retain immediate control over data token allocations. You can modify your native browser engine preferences to drop, block, or clear cookies at any time. Note that altering essential cookie nodes may adjust the performance of our sub-400ms rendering logic.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;