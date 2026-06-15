import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
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
        title="Data Protection Framework & Privacy Policy"
        description="Review the legal data governance and pipeline isolation protocols at TMMT. Learn how we secure commercial metrics and infrastructure assets."
        path="/privacy-policy"
        ogImage="/tmmt-logo.webp"
      />

      <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>
        Legal Framework
      </span>
      <h1 style={{ fontSize: isMobile ? '36px' : '56px', fontWeight: 700, marginTop: '10px', marginBottom: '40px', letterSpacing: '-0.03em' }}>
        Privacy Policy
      </h1>
      <p style={{ color: COLORS.subtext, fontSize: '14px', marginBottom: '40px' }}>Last Updated: May 2026</p>

      <hr style={{ border: 'none', borderTop: `1px solid ${COLORS.border}`, marginBottom: '40px' }} />

      <section>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>1. Data Ingestion & Collection</h2>
        <p style={{ marginBottom: '20px' }}>
          TMMT operates high-performance data and marketing pipelines. We collect information necessary to deliver our engineering, automation, and infrastructure optimization services. This includes:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Identity Data:</strong> Full Name, commercial email address, and company details provided via our contact interface.</li>
          <li style={{ marginBottom: '10px' }}><strong>Technical Metrics:</strong> IP addresses, browser engine configurations, and analytical interaction depth tracking.</li>
          <li style={{ marginBottom: '10px' }}><strong>Operational Assets:</strong> Explicitly shared data frameworks required for statutory compliance implementations (e.g., GST or Trademark processing layout data).</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>2. Practical Data Architecture & Usage</h2>
        <p style={{ marginBottom: '20px' }}>We process your parameters through a secure pipeline to achieve the following operations:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}>Architecting dynamic multi-channel sync architectures and custom store infrastructure layouts.</li>
          <li style={{ marginBottom: '10px' }}>Optimizing server-side conversion parameters (Meta CAPI / GTM Server-Side pipelines).</li>
          <li style={{ marginBottom: '10px' }}>Executing administrative corporate workflows such as setup operations for current accounts or fulfillment centers.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>3. Server Protection & Data Retention</h2>
        <blockquote style={{ margin: '0 0 20px 0', padding: '15px 20px', backgroundColor: COLORS.bg, borderRadius: '12px', borderLeft: `4px solid ${COLORS.accent}` }}>
          <strong>Data Isolation:</strong> TMMT does not store, monetize, or lease your commercial operational metrics to external data brokers.
        </blockquote>
        <p style={{ marginBottom: '20px' }}>
          All pipeline transmission logs are locked behind high-grade security protocols. Operational records are retained only for the duration necessary to satisfy functional engineering milestones or compliance parameters.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;