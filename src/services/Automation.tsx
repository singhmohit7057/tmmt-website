import React from 'react';

const PythonScript: React.FC = () => {
  const COLORS = { text: '#1d1d1f', subtext: '#86868b', accent: '#0071e3', bg: '#1d1d1f' };

  return (
    <div style={{ width: '100%', color: COLORS.text }}>
      <section style={{ padding: '140px 10%', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px' }}>01 / Automation</span>
        <h1 style={{ fontSize: '56px', fontWeight: 700 }}>Workflow Automation.</h1>
        <p style={{ fontSize: '20px', color: COLORS.subtext, maxWidth: '700px' }}>
          We buy back your time. We build proprietary Python scripts that eliminate manual data entry, logistics bottlenecks, and settlement errors.
        </p>
      </section>

      <section style={{ padding: '80px 10%', backgroundColor: COLORS.bg, color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ color: COLORS.accent }}>Capabilities</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px', lineHeight: '2.5' }}>
              <li>• Automated Label Processors</li>
              <li>• API Integrations (ERP to Shopify)</li>
              <li>• Marketplace Settlement Scrapers</li>
              <li>• Selenium-based Inventory Syncing</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#2d2d2f', borderRadius: '24px', padding: '40px' }}>
            <h4 style={{ color: COLORS.accent }}>Proven Result:</h4>
            <p style={{ fontSize: '15px', color: '#86868b' }}>
              Built a custom Python-FastAPI tool for a retail brand that automated 1,200+ shipping labels daily, reducing manual labor by 90%.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PythonScript;