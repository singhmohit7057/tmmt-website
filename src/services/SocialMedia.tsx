import React from 'react';

const SocialMedia: React.FC = () => {
  return (
    <div style={{ width: '100%', padding: '140px 10%' }}>
      <h1 style={{ fontSize: '56px', fontWeight: 700 }}>Social Narrative.</h1>
      <p style={{ fontSize: '20px', color: '#86868b', maxWidth: '800px', marginBottom: '80px' }}>
        Building long-term brand equity through high-fidelity curation and organic growth strategies.
      </p>

      <div style={{ columns: '2', columnGap: '20px' }}>
        <div style={{ height: '300px', backgroundColor: '#f5f5f7', borderRadius: '24px', marginBottom: '20px' }}></div>
        <div style={{ height: '500px', backgroundColor: '#f5f5f7', borderRadius: '24px', marginBottom: '20px' }}></div>
        <div style={{ height: '400px', backgroundColor: '#f5f5f7', borderRadius: '24px', marginBottom: '20px' }}></div>
        <div style={{ height: '350px', backgroundColor: '#f5f5f7', borderRadius: '24px', marginBottom: '20px' }}></div>
      </div>
    </div>
  );
};

export default SocialMedia;