import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDesign: React.FC = () => {
  const navigate = useNavigate();
  const COLORS = { text: '#1d1d1f', subtext: '#86868b', accent: '#0071e3', bg: '#f5f5f7' };

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff' }}>
      <section style={{ padding: '140px 10% 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px' }}>01 / Engineering</span>
        <h1 style={{ fontSize: '64px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em' }}>Web Engineering.</h1>
        <p style={{ fontSize: '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '800px' }}>
          We don't build websites; we architect high-performance digital engines. Every line of code is written for sub-second latency and 99.9% uptime.
        </p>
      </section>

      <section style={{ padding: '60px 10%', backgroundColor: COLORS.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Technical Stack</h3>
            <p style={{ color: COLORS.subtext, lineHeight: '1.6' }}>
              Utilizing **Vite**, **React**, and **TypeScript** to build type-safe, modular applications that are easily maintainable and highly scalable.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Performance Edge</h3>
            <p style={{ color: COLORS.subtext, lineHeight: '1.6' }}>
              Implementation of **Server-Side Rendering (SSR)** and **Edge Caching** to ensure your brand is accessible instantly, anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 10%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>The Impact.</h2>
        <div style={{ borderLeft: `4px solid ${COLORS.accent}`, paddingLeft: '30px' }}>
          <p style={{ fontSize: '20px', fontStyle: 'italic', color: COLORS.text }}>
            "The transition to a React-based architecture reduced our page load time from 4s to 600ms, directly resulting in a 22% increase in conversion rate."
          </p>
          <p style={{ marginTop: '20px', fontWeight: 600 }}>— Tech Founder, E-com Partner</p>
        </div>
      </section>

      <footer style={{ padding: '80px 10%', textAlign: 'center' }}>
        <button onClick={() => navigate('/contact')} style={{ padding: '18px 45px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Book Technical Audit
        </button>
      </footer>
    </div>
  );
};

export default WebDesign;