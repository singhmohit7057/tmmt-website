import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Automation: React.FC = () => {
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
    darkBg: '#1d1d1f',
    terminalGreen: '#28c840'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  // Using specific paths for each automation project
  const automationProjects = [
    {
      label: "PROPRIETARY TOOL",
      title: "Label Processor 2.0",
      desc: "A custom Python-FastAPI engine for each platform that automates multi-platform shipping label segregation. It performs batch cropping and customizable output sizing, reducing manual warehouse labor by 90%.",
      tech: ["PYTHON 3.14", "FASTAPI", "OPENCV"],
      stats: "90% Labor Reduction",
      image: "/services/label.webp"
    },
    {
      label: "DATA INTEGRITY",
      title: "Myntra Reconcile",
      desc: "Automated scraper and processor that reconciles Myntra monthly reports into Google Sheets. It tracks orders, returns, and scrapes buyer pincodes to build custom targeting audiences for Meta and Google Ads.",
      tech: ["SELENIUM", "PANDAS", "AWS"],
      stats: "Zero Human Error",
      image: "/services/reconcile.webp"
    }
  ];

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO
        title="Workflow Automation Engines & Custom Python Logic"
        description="Eliminate logistics bottlenecks and financial data entry errors. TMMT builds proprietary Python-FastAPI engines, OpenCV tools, and headless Selenium scrapers."
        path="/services/automation"
        ogImage="/services/automation.webp"
      />

      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, paddingTop: isMobile ? '100px' : '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
          02 / Automation
        </span>
        <h1 style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          We Buy Back <br/> Your Time.
        </h1>
        
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1.5 }}>
            <p style={{ fontSize: isMobile ? '18px' : '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '650px', marginBottom: '30px' }}>
              We build proprietary Python engines that eliminate manual data entry, logistics bottlenecks, and settlement errors.
            </p>

            {/* Capability Tags - Ensures UI consistency across all pages */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
               { label: 'Python', icon: '🐍' },
               { label: 'Zapier', icon: '⚡' },
               { label: 'n8n', icon: '🔗' }
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
          
          {/* TERMINAL MOCKUP - Your existing appealing box */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#000', 
            borderRadius: '16px', 
            padding: '20px', 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            color: COLORS.terminalGreen,
            width: isMobile ? '100%' : '400px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '15px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></div>
            </div>
            <div>$ python3 tmmt_engine.py</div>
            <div style={{ color: '#fff' }}>[INFO] Fetching labels from Shopify...</div>
            <div style={{ color: '#fff' }}>[SUCCESS] 542 labels processed in 1.2s</div>
            <div style={{ color: '#fff' }}>[INFO] Syncing to Logistics API...</div>
            <div style={{ color: COLORS.accent }}>{'>'} Status: 100% Operational</div>
          </div>
        </div>
      </section>

      {/* 2. ROI COMPARISON SECTION */}
      <section style={{ ...sectionStyle, backgroundColor: COLORS.bg, borderRadius: isMobile ? '32px' : '60px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '36px', textAlign: 'center', marginBottom: '50px' }}>What changes when you automate.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '24px' }}>
            <h4 style={{ color: COLORS.subtext, fontSize: '14px', textTransform: 'uppercase' }}>Manual Process</h4>
            <div style={{ fontSize: '32px', fontWeight: 700, margin: '15px 0' }}>4+ Hours/Day</div>
            <p style={{ color: COLORS.subtext, fontSize: '14px' }}>Repetitive cropping, manual data entry, and portal downloading.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: COLORS.accent, borderRadius: '24px', color: '#fff' }}>
            <h4 style={{ opacity: 0.8, fontSize: '14px', textTransform: 'uppercase' }}>TMMT Engine</h4>
            <div style={{ fontSize: '32px', fontWeight: 700, margin: '15px 0' }}>90 Seconds/Day</div>
            <p style={{ opacity: 0.8, fontSize: '14px' }}>Fully automated headless logic with real-time error logging.</p>
          </div>
        </div>
      </section>

      {/* 3. LOGIC FLOW DIAGRAM */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '60px', textAlign: 'center' }}>The Architecture.</h2>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px', justifyContent: 'center' }}>
          {[
            { step: "01", title: "Ingestion", desc: "Headless scraping or API fetching." },
            { step: "02", title: "Logic Engine", desc: "Python-driven data processing." },
            { step: "03", title: "Deployment", desc: "Sync to ERP or Cloud storage." }
          ].map((flow, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
              <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>{flow.step}</div>
              <h4 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>{flow.title}</h4>
              <p style={{ color: COLORS.subtext, fontSize: '14px' }}>{flow.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJECT SHOWCASE (ALTERNATING) */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '40px' }}>Proven Results.</h2>
        {automationProjects.map((project, index) => (
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
            {/* FIXED 18:9 Image Container */}
            <div style={{ 
              flex: 1.2, 
              width: '100%', 
              aspectRatio: '18 / 9', 
              borderRadius: '24px', 
              overflow: 'hidden',
              backgroundColor: '#fff',
              border: `1px solid ${COLORS.border}44`
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent }}>{project.label}</span>
              <h3 style={{ fontSize: isMobile ? '32px' : '42px', margin: '10px 0' }}>{project.title}</h3>
              <p style={{ color: index % 2 === 0 ? COLORS.subtext : '#6e6e73', fontSize: '18px', marginBottom: '25px', lineHeight: 1.6 }}>
                {project.desc}
              </p>
              <div style={{ fontSize: '24px', fontWeight: 700, color: COLORS.accent, marginBottom: '20px' }}>{project.stats}</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    padding: '6px 12px', 
                    backgroundColor: index % 2 === 0 ? '#fff' : 'rgba(255,255,255,0.1)', 
                    borderRadius: '6px',
                    border: index % 2 === 0 ? `1px solid ${COLORS.border}` : 'none'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 5. FOOTER CTA */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '15px' }}>Stop wasting hours on manual tasks.</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px' }}>Let us architect an engine that does the work for you.</p>
        <button onClick={() => navigate('/contact')} style={{ width: isMobile ? '100%' : 'auto', padding: '16px 40px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600 }}>
          Start Automation Audit
        </button>
      </footer>
    </div>
  );
};

export default Automation;