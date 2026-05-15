import React from 'react';

const Branding: React.FC = () => {
  return (
    <div style={{ width: '100%', padding: '140px 10%', textAlign: 'center' }}>
      <h1 style={{ fontSize: '56px', fontWeight: 700 }}>Brand Architecture.</h1>
      <p style={{ fontSize: '20px', color: '#86868b', maxWidth: '700px', margin: '0 auto 60px' }}>
        We design visual systems that signal authority. From **IBTIDA**'s minimalist packaging to **Amoha Civil**'s corporate identity.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div style={{ height: '500px', backgroundColor: '#f5f5f7', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>IBTIDA Branding Project</span>
        </div>
        <div style={{ height: '500px', backgroundColor: '#f5f5f7', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Amoha Civil Constructions</span>
        </div>
      </div>
    </div>
  );
};

export default Branding;