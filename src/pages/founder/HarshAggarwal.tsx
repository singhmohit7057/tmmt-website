import React, { useState } from 'react';
import { submitForm } from '../../form/formService';
import SEO from '../../components/SEO';

const HarshAggarwal: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bg: '#f5f5f7',
    border: '#d2d2d7'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await submitForm('harsh', {
        ...formData,
        subject: `General Connect: Harsh Aggarwal`,
        page_source: 'Harsh Profile'
      });
      if (res.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', color: COLORS.text, fontFamily: '-apple-system, sans-serif' }}>
      <SEO
        title="Harsh Aggarwal | Co-Founder"
        description="Harsh Aggarwal is Co-Founder of TMMT, leading client strategy, UI architecture, and brand systems for ecommerce businesses and D2C marketplace brands."
        path="/harsh-aggarwal"
        ogImage="/Harsh-Aggarwal.jpg"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Harsh Aggarwal',
        url: 'https://www.tmmt.in/harsh-aggarwal',
        image: 'https://www.tmmt.in/Harsh-Aggarwal.jpg',
        jobTitle: 'Co-Founder',
        worksFor: { '@type': 'Organization', name: 'TMMT', url: 'https://www.tmmt.in' },
        knowsAbout: ['UI Architecture', 'Brand Systems', 'Ecommerce Design', 'Client Strategy', 'Component-Driven Development'],
        sameAs: ['https://instagram.com/h.a.r.s.h_149']
      })}} />

      <div style={{ padding: '140px 10% 80px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '80px', boxSizing: 'border-box' }}>
        
        {/* Left Profile Column */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', marginBottom: '30px' }}>
            <img src="/Harsh-Aggarwal.jpg" alt="Harsh Aggarwal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Co-Founder</span>
          <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '10px 0 20px', letterSpacing: '-0.03em' }}>Harsh Aggarwal</h1>
          <p style={{ fontSize: '18px', color: COLORS.subtext, lineHeight: '1.6', marginBottom: '30px' }}>
            Harsh is the client-facing side of TMMT — brand systems, UI design, and the communication layer between what we build and how it gets positioned. He cares a lot about things looking right.
          </p>
          <div style={{ fontSize: '14px', color: COLORS.subtext }}>
            <strong>Specialties:</strong> UI Architecture • Brand Systems • Client Strategy
          </div>
        </div>

        {/* Right Form Column - General Community Context */}
        <div style={{ backgroundColor: COLORS.bg, padding: '40px', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 25px' }}>Say Hello</h3>
          
          {status === 'success' ? (
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '16px', border: `1px solid ${COLORS.accent}`, textAlign: 'center' }}>
              <h4 style={{ color: COLORS.accent, margin: '0 0 5px' }}>Message Sent</h4>
              <p style={{ color: COLORS.subtext, margin: 0, fontSize: '14px' }}>Thanks for reaching out! Harsh will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, fontSize: '16px', outline: 'none', backgroundColor: '#fff' }} />
              <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, fontSize: '16px', outline: 'none', backgroundColor: '#fff' }} />
              <input type="tel" placeholder="Contact Number (Optional)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, fontSize: '16px', outline: 'none', backgroundColor: '#fff' }} />
              <textarea placeholder="What's on your mind? Drop a message, share an idea, or ask anything..." required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${COLORS.border}`, fontSize: '16px', outline: 'none', resize: 'none', backgroundColor: '#fff' }} />
              <button type="submit" disabled={status === 'submitting'} style={{ padding: '16px', borderRadius: '12px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && <p style={{ color: '#ff3b30', fontSize: '13px', margin: 0, textAlign: 'center' }}>Pipeline error. Please re-submit.</p>}
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default HarshAggarwal;