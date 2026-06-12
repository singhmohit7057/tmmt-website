import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const AdsManagement: React.FC = () => {
  const navigate = useNavigate();
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
    border: '#d2d2d7',
    darkBg: '#1d1d1f',
    chartGreen: '#28c840'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO
        title="Meta & Google Ads Management for Ecommerce Brands"
        description="We run Meta and Google Ads for D2C and marketplace brands with server-side CAPI tracking, audience exclusion logic, and ROAS-focused campaign architecture."
        path="/services/ads-management"
        ogImage="/services/performance.png"
      />

      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, paddingTop: isMobile ? '100px' : '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
          05 / Performance
        </span>
        <h1 style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Paid Acquisition <br/> Engineering.
        </h1>
        
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1.5 }}>
            <p style={{ fontSize: isMobile ? '18px' : '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '650px', marginBottom: '30px' }}>
              We manage Google and Meta ad accounts with server-side CAPI tracking, audience exclusion logic, and proper attribution. Less wasted spend, more of what's actually converting.
            </p>

            {/* Capability Tags - Specialized for Ad Performance & Tracking */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'Google Expert', icon: '🔍' },
                { label: 'Meta Expert', icon: '♾️' },
                { label: 'CAPI Setup', icon: '⚡' },
                { label: 'LTV Modeling', icon: '📊' }
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
          
          {/* PERFORMANCE TICKER - Your existing high-appeal dark box */}
          <div style={{ 
            flex: 1, 
            backgroundColor: COLORS.darkBg, 
            borderRadius: '24px', 
            padding: '25px', 
            width: isMobile ? '100%' : '400px',
            color: '#fff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '20px', letterSpacing: '1px' }}>LIVE PERFORMANCE METRICS</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Avg. ROAS</span>
              <span style={{ color: COLORS.chartGreen, fontWeight: 700 }}>4.52x</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Waste (Averaged)</span>
              <span style={{ color: '#ff3b30', fontWeight: 700 }}>0.0%</span>
            </div>
            <div style={{ height: '40px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: COLORS.accent, borderRadius: '2px' }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. RETAINED: THE ZERO-WASTE FUNNEL SECTION */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 5%', backgroundColor: COLORS.bg, borderRadius: isMobile ? '24px' : '48px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '50px', textAlign: 'center' }}>The Zero-Waste Funnel.</h2>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { stage: "Attraction", desc: "Server-side tracking (CAPI) to find high-intent users while excluding existing customers." },
            { stage: "Intent", desc: "Retargeting logic based on time-on-site and technical interaction depth." },
            { stage: "Conversion", desc: "Sub-400ms landing pages engineered for zero friction checkout." }
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, padding: '30px', backgroundColor: '#fff', borderRadius: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '15px' }}>{i === 0 ? "🎯" : i === 1 ? "⚡" : "💰"}</div>
              <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{step.stage}</h4>
              <p style={{ fontSize: '14px', color: COLORS.subtext, lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERT PLATFORM FRAMEWORK (NEW) */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '40px', textAlign: 'center' }}>Platform Specific Expertise.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
          
          {/* Google Ads Expert Card */}
          <div style={{ padding: '40px', borderRadius: '32px', border: `1px solid ${COLORS.border}`, backgroundColor: '#fff' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Google Ads Strategy.</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: COLORS.subtext, lineHeight: '2.2', fontSize: '15px' }}>
              <li>• Performance Max (PMax) Feed Optimization</li>
              <li>• High-Intent Search Term Harvesting</li>
              <li>• Custom Remarketing Lists (RLSA) Engineering</li>
              <li>• Merchant Center Error Resolution & Sync</li>
            </ul>
          </div>

          {/* Meta Ads Expert Card */}
          <div style={{ padding: '40px', borderRadius: '32px', backgroundColor: COLORS.darkBg, color: '#fff' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Meta Ads Architecture.</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#86868b', lineHeight: '2.2', fontSize: '15px' }}>
              <li>• Advantage+ Shopping Campaign Logic</li>
              <li>• Creative Testing & Iteration Sprints</li>
              <li>• Full-Funnel Retargeting Architecture</li>
              <li>• Technical Exclusion of Existing Purchasers</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. TECHNICAL AD STACK */}
      <section style={{ ...sectionStyle, borderTop: `1px solid ${COLORS.border}` }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '60px', textAlign: 'center' }}>The Tech Behind the Growth.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
          {[
            { title: "Meta CAPI", detail: "Server-Side Event Tracking" },
            { title: "GTM Server-Side", detail: "Bypassing Ad-Blockers" },
            { title: "BigQuery", detail: "Custom Attribution Modeling" },
            { title: "Python Scripts", detail: "Automated Bid Adjustments" }
          ].map((tech, i) => (
            <div key={i} style={{ padding: '20px', border: `1px solid ${COLORS.border}`, borderRadius: '16px', textAlign: 'center', backgroundColor: COLORS.bg }}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: COLORS.accent }}>{tech.title}</div>
              <div style={{ fontSize: '12px', color: COLORS.subtext, marginTop: '5px' }}>{tech.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '15px' }}>Want to see where your ad spend is going?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px' }}>We'll audit your current account and show you what's working, what's wasted, and what needs fixing.</p>
        <button onClick={() => navigate('/contact')} style={{ width: isMobile ? '100%' : 'auto', padding: '16px 40px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Request an Audit
        </button>
      </footer>
    </div>
  );
};

export default AdsManagement;