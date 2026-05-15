import React from 'react';
import ContactForm from '../components/ContactForm'; // Ensure this path is correct

const Contact: React.FC = () => {
  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7'
  };

  const containerStyle: React.CSSProperties = {
    padding: '120px 10% 80px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const infoItemStyle: React.CSSProperties = {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  };

  return (
    <div style={containerStyle}>
      {/* LEFT COLUMN: CONTACT INFO */}
      <div style={{ textAlign: 'left' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, margin: '0 0 20px' }}>Contact Us</h1>
        <p style={{ fontSize: '19px', color: COLORS.subtext, lineHeight: '1.6', marginBottom: '40px' }}>
          Have a project in mind or just want to join the run club? We're here to engineer your next big step.
        </p>

        <div style={infoItemStyle}>
          <span style={{ fontWeight: 600, color: COLORS.text }}>Email</span>
          <a href="mailto:hello@tmmt.com" style={{ color: COLORS.accent, textDecoration: 'none' }}>hello@tmmt.com</a>
        </div>

        <div style={infoItemStyle}>
          <span style={{ fontWeight: 600, color: COLORS.text }}>Office</span>
          <span style={{ color: COLORS.subtext }}>Kolkata, West Bengal, India</span>
        </div>

        <div style={infoItemStyle}>
          <span style={{ fontWeight: 600, color: COLORS.text }}>Social</span>
          <div style={{ display: 'flex', gap: '15px', color: COLORS.accent }}>
            <span style={{ cursor: 'pointer' }}>LinkedIn</span>
            <span style={{ cursor: 'pointer' }}>Twitter</span>
            <span style={{ cursor: 'pointer' }}>Instagram</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: INTEGRATED CONTACT FORM */}
      <div style={{ backgroundColor: COLORS.bgLight, padding: '40px', borderRadius: '24px' }}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;