import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const footerStyle: React.CSSProperties = {
    padding: isMobile ? '50px 20px 30px' : '60px 10% 30px',
    backgroundColor: '#f5f5f7',
    color: '#1d1d1f',
    marginTop: 'auto',
    width: '100%',
    boxSizing: 'border-box'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile
      ? '1fr'
      : 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: isMobile ? '36px' : '30px',
    marginBottom: '40px',
    textAlign: isMobile ? 'center' : 'left'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 700,
    marginBottom: '15px',
    color: '#1d1d1f',
    textTransform: 'uppercase',
    letterSpacing: '0.6px'
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    margin: '10px 0',
    fontSize: '13px',
    color: '#424245',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };

  const legalLinkStyle: React.CSSProperties = {
    color: '#86868b',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    fontSize: '12px'
  };

  return (
    <footer style={footerStyle}>
      <div style={gridStyle}>
        {/* BRAND */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          {/* TOP BRAND ROW */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '10px' : '12px',
              marginBottom: '18px',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            <img
              src="/logo.png"
              alt="TMMT Logo"
              width="42"
              height="42"
              style={{
                height: isMobile ? '32px' : '42px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%)'
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.1,
                alignItems: isMobile ? 'center' : 'flex-start',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                TMMT
              </div>

              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#86868b',
                  letterSpacing: '0.7px',
                  marginTop: '3px',
                  textTransform: 'uppercase'
                }}
              >
                The Mad Mystery Team
              </div>
            </div>
          </div>

          {/* BRAND DESCRIPTION */}
          <p
            style={{
              color: '#86868b',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: '1.7',
              maxWidth: '280px',
              margin: 0
            }}
          >
            Engineered growth for modern ecommerce
            brands and marketplace infrastructure
            systems.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <div style={headingStyle}>Explore</div>

          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/services" style={linkStyle}>
            Services
          </Link>

          <Link to="/about" style={linkStyle}>
            About
          </Link>

          <Link to="/community" style={linkStyle}>
            Community
          </Link>

          <Link to="/careers" style={linkStyle}>
            Career
          </Link>
        </div>

        {/* SPECIALTIES */}
        <div>
          <div style={headingStyle}>Specialties</div>

          <Link to="/services/web-design" style={linkStyle}>
            Web Engineering
          </Link>

          <Link to="/services/automation" style={linkStyle}>
            Workflow Automation
          </Link>

          <Link to="/services/ecommerce-help" style={linkStyle}>
            Marketplace Infrastructure
          </Link>

          <Link to="/services/branding" style={linkStyle}>
            Brand Architecture
          </Link>

          <Link to="/services/ads-management" style={linkStyle}>
            Performance Marketing
          </Link>

          <Link to="/services/social-media" style={linkStyle}>
            Social Narrative
          </Link>
        </div>

        {/* CONTACT */}
        <div>
          <div style={headingStyle}>Contact</div>

          <Link to="/contact" style={linkStyle}>
            Start a Project
          </Link>

          <a
            href="mailto:themadmysteryteam@gmail.com"
            style={linkStyle}
          >
            Email Us
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #d2d2d7',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: 'center',
          fontSize: '12px',
          color: '#86868b',
          flexWrap: 'wrap',
          gap: isMobile ? '16px' : '15px'
        }}
      >
        <div>
          © {new Date().getFullYear()} TMMT. All rights reserved.
        </div>

        <div
          style={{
            display: 'flex',
            gap: isMobile ? '14px' : '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Link
            to="/privacy-policy"
            style={legalLinkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = '#1d1d1f')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = '#86868b')
            }
          >
            Privacy
          </Link>

          <Link
            to="/terms-and-conditions"
            style={legalLinkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = '#1d1d1f')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = '#86868b')
            }
          >
            Terms
          </Link>

          <Link
            to="/cookie-policy"
            style={legalLinkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = '#1d1d1f')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = '#86868b')
            }
          >
            Cookies
          </Link>

          <Link
            to="/sitemap"
            style={legalLinkStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = '#1d1d1f')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = '#86868b')
            }
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;