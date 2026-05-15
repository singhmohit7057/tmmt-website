import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    padding: '60px 10% 30px',
    backgroundColor: '#f5f5f7',
    color: '#1d1d1f',
    marginTop: 'auto',
    width: '100%',
    boxSizing: 'border-box'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#1d1d1f',
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    margin: '10px 0',
    fontSize: '12px',
    color: '#424245',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div style={gridStyle}>
        <div>
          {/* Updated Footer Logo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <img 
              src="/logo.png" 
              alt="TMMT Logo" 
              style={{ height: '30px', width: 'auto', marginRight: '10px', filter: 'grayscale(100%)' }} 
            />
            <div style={{ fontSize: '14px', fontWeight: 600 }}>TMMT Digital</div>
          </div>
          <p style={{ color: '#86868b', fontSize: '12px', lineHeight: '1.5' }}>
            Engineered growth for modern brands.
          </p>
        </div>

        <div>
          <div style={headingStyle}>Explore</div>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </div>

        <div>
          <div style={headingStyle}>Specialties</div>
          <Link to="/services/web-design" style={linkStyle}>Web Engineering</Link>
          <Link to="/services/automation" style={linkStyle}>Workflow Automation.</Link>
          <Link to="/services/ecom" style={linkStyle}>Marketplace Infrastructure</Link>
          <Link to="/services/branding" style={linkStyle}>Brand Architecture</Link>
          <Link to="/services/ads" style={linkStyle}>Performance Marketing</Link>
          <Link to="/services/social" style={linkStyle}>Social Narrative</Link>
        </div>

        <div>
          <div style={headingStyle}>Contact</div>
          <Link to="/contact" style={linkStyle}>Start a Project</Link>
          <a href="mailto:hello@tmmt.com" style={linkStyle}>Email Us</a>
        </div>
      </div>

      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #d2d2d7', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#86868b' }}>
        <div>© {new Date().getFullYear()} TMMT. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
          <span>Sitemap</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;