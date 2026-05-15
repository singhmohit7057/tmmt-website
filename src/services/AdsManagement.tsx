import React from 'react';

const AdsManagement: React.FC = () => {
  return (
    <div style={{ width: '100%', padding: '140px 10%' }}>
      <h1 style={{ fontSize: '56px', fontWeight: 700 }}>Ad Engineering.</h1>
      <p style={{ fontSize: '20px', color: '#86868b', maxWidth: '800px' }}>
        Marketing is math. We optimize for **Return on Ad Spend (ROAS)** using custom attribution models and data-driven funnel engineering.
      </p>

      <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        <div style={{ padding: '40px', backgroundColor: '#0071e3', color: '#fff', borderRadius: '24px' }}>
          <h2>4.5x</h2>
          <p>Average ROAS across retail clients</p>
        </div>
        <div style={{ padding: '40px', backgroundColor: '#1d1d1f', color: '#fff', borderRadius: '24px' }}>
          <h2>Zero Waste</h2>
          <p>Custom negative-keyword and audience-exclusion logic</p>
        </div>
      </div>
    </div>
  );
};

export default AdsManagement;