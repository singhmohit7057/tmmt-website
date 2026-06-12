import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7',
    white: '#ffffff',
    statusGreen: '#28c840'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '80px 20px' : '120px 10%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const faqs = [
    {
      q: 'What ecommerce infrastructure systems does TMMT build?',
      a: 'TMMT develops ecommerce infrastructure systems, marketplace automation workflows, inventory synchronization systems, operational dashboards, and scalable commerce operations.'
    },
    {
      q: 'Which ecommerce marketplaces does TMMT support?',
      a: 'TMMT supports Shopify, Myntra, Amazon, Flipkart, Ajio, Meesho, WooCommerce, and multi-channel ecommerce operations.'
    },
    {
      q: 'Does TMMT develop custom ecommerce automation systems?',
      a: 'Yes. TMMT develops custom workflows, operational dashboards, automation systems, and ecommerce infrastructure solutions.'
    },
    {
      q: 'Who does TMMT work with?',
      a: 'TMMT works with fashion brands, D2C businesses, apparel manufacturers, and marketplace sellers.'
    }
  ];

  return (
    <div
      style={{
        width: '100%',
        color: COLORS.text,
        backgroundColor: COLORS.white,
        overflowX: 'hidden'
      }}
    >
      <SEO
        title="About TMMT"
        description="TMMT develops ecommerce infrastructure systems, marketplace automation workflows, inventory synchronization systems, operational dashboards, and scalable commerce operations for modern brands."
        path="/about"
        ogImage="/tmmt-logo.png"
      />

      {/* HERO */}
      <section
        style={{
          ...sectionStyle,
          textAlign: 'center',
          paddingTop: isMobile ? '120px' : '160px'
        }}
      >
        <span
          style={{
            color: COLORS.accent,
            fontWeight: 600,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px'
          }}
        >
          About TMMT
        </span>

        <h1
          style={{
            fontSize: isMobile ? '42px' : '64px',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            margin: '20px 0',
            lineHeight: 1.1
          }}
        >
          Ecommerce infrastructure, built to run.
        </h1>

        <p
          style={{
            fontSize: isMobile ? '18px' : '21px',
            color: COLORS.subtext,
            lineHeight: 1.7,
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          TMMT builds the systems that keep ecommerce brands operational — across channels, at scale, without the manual overhead that usually comes with it.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section
        style={{
          padding: isMobile ? '0 20px' : '0 10%',
          marginBottom: '100px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px',
            backgroundColor: COLORS.bgLight,
            padding: isMobile ? '40px 20px' : '60px 40px',
            borderRadius: isMobile ? '32px' : '48px'
          }}
        >
          {[
            {
              title: 'Marketplace Infrastructure',
              desc: 'Multi-channel setup across Shopify, Amazon, Myntra, Flipkart, Ajio, and Meesho — catalog, orders, and sync.'
            },
            {
              title: 'Inventory Synchronization',
              desc: 'Real-time stock updates across all active channels so nothing goes out of sync when orders come in.'
            },
            {
              title: 'Operational Automation',
              desc: 'Custom Python workflows that replace the manual steps your team handles every day — labels, reconciliation, reporting.'
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                backgroundColor: COLORS.white,
                padding: isMobile ? '30px 20px' : '40px 30px',
                borderRadius: '32px'
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? '22px' : '28px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: COLORS.accent
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: COLORS.subtext,
                  lineHeight: 1.7,
                  fontSize: isMobile ? '15px' : '16px'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={sectionStyle}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}
          >
            Leadership
          </span>

          <h2
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: 700,
              margin: '20px 0',
              lineHeight: 1.1
            }}
          >
            The Founders.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '30px' : '40px'
          }}
        >
          {[
            {
              name: 'Mohit Singh',
              role: 'Co-Founder',
              img: '/Mohit-Singh.jpg',
              desc:
                'Mohit builds the backend — Python engines, marketplace API integrations, automation workflows, and the infrastructure that keeps everything running.',
              link: '/mohit-singh'
            },
            {
              name: 'Harsh Aggarwal',
              role: 'Co-Founder',
              img: '/Harsh-Aggarwal.jpg',
              desc:
                'Harsh handles what the client sees — brand systems, UI, and how all of it gets communicated across marketplaces and platforms.',
              link: '/harsh-aggarwal'
            }
          ].map((founder, i) => (
            <div
              key={i}
              onClick={() => navigate(founder.link)}
              style={{
                textAlign: 'center',
                padding: isMobile ? '40px 20px' : '50px 30px',
                border: `1px solid ${COLORS.bgLight}`,
                borderRadius: '40px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                backgroundColor: COLORS.white
              }}
            >
              <div
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  margin: '0 auto 25px',
                  overflow: 'hidden',
                  border: `4px solid #fff`,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                }}
              >
                <img
                  src={founder.img}
                  alt={founder.name}
                  loading="lazy"
                  width="160"
                  height="160"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: isMobile ? '26px' : '30px',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                {founder.name}
              </h3>

              <p
                style={{
                  color: COLORS.accent,
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {founder.role}
              </p>

              <p
                style={{
                  color: COLORS.subtext,
                  fontSize: isMobile ? '15px' : '16px',
                  marginTop: '20px',
                  lineHeight: 1.7
                }}
              >
                {founder.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPERATIONAL ARCHITECTURE */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: COLORS.bgLight,
          borderRadius: isMobile ? '32px' : '60px',
          margin: isMobile ? '0 15px 100px' : '0 auto 120px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}
          >
            Operational Systems
          </span>

          <h2
            style={{
              fontSize: isMobile ? '32px' : '42px',
              fontWeight: 700,
              marginTop: '20px'
            }}
          >
            How the work gets done.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '20px'
          }}
        >
          {[
            {
              title: 'Technical Infrastructure',
              desc:
                'React frontends, FastAPI backends, PostgreSQL, Docker, and AWS — the actual stack behind what we ship.'
            },
            {
              title: 'Marketplace Operations',
              desc:
                'Catalog management, inventory sync, order routing, and platform compliance across every channel we support.'
            },
            {
              title: 'Monitoring & Automation',
              desc:
                "Headless scrapers, automated reconciliation pipelines, and real-time dashboards that show what's happening.",
              status: true
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: COLORS.white,
                padding: isMobile ? '30px' : '40px',
                borderRadius: '32px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px'
                }}
              >
                <h4
                  style={{
                    fontSize: isMobile ? '20px' : '22px',
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h4>

                {item.status && (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>

              <p
                style={{
                  color: COLORS.subtext,
                  fontSize: isMobile ? '15px' : '16px',
                  lineHeight: 1.7
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-label="Frequently Asked Questions about TMMT ecommerce infrastructure"
        style={sectionStyle}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}
          >
            Frequently Asked Questions
          </span>

          <h2
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: 700,
              margin: '20px 0',
              lineHeight: 1.1
            }}
          >
            Frequently asked.
          </h2>

          <p
            style={{
              color: COLORS.subtext,
              fontSize: isMobile ? '16px' : '18px',
              maxWidth: '760px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            The things people ask before they decide to work with us.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: COLORS.bgLight,
                borderRadius: '28px',
                padding: isMobile ? '24px' : '32px',
                border: `1px solid ${COLORS.border}`
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  marginBottom: '14px',
                  lineHeight: 1.4
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  color: COLORS.subtext,
                  lineHeight: 1.8,
                  fontSize: isMobile ? '15px' : '16px',
                  margin: 0
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: isMobile ? '80px 20px' : '100px 10%',
          backgroundColor: COLORS.text,
          color: '#fff',
          textAlign: 'center',
          borderRadius: isMobile ? '32px' : '0'
        }}
      >
        <span
          style={{
            color: COLORS.accent,
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Build With TMMT
        </span>

        <h2
          style={{
            fontSize: isMobile ? '36px' : '48px',
            fontWeight: 600,
            margin: '20px 0'
          }}
        >
          Want to see what we can build for you?
        </h2>

        <p
          style={{
            fontSize: isMobile ? '17px' : '19px',
            color: '#d2d2d7',
            maxWidth: '760px',
            margin: '0 auto 40px',
            lineHeight: 1.7
          }}
        >
          Tell us where your operations break down. We'll tell you if we can build something around it.
        </p>

        <button
          onClick={() => navigate('/contact')}
          style={{
            padding: '18px 40px',
            borderRadius: '100px',
            backgroundColor: COLORS.accent,
            color: '#fff',
            border: 'none',
            fontSize: '17px',
            fontWeight: 600,
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto',
            maxWidth: '320px'
          }}
        >
          Contact TMMT
        </button>
      </section>
    </div>
  );
};

export default About;