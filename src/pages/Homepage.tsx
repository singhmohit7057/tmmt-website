import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bgLight: '#f5f5f7',
    border: '#d2d2d7',
    white: '#ffffff'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '980px',
    fontSize: isMobile ? '16px' : '17px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    width: isMobile ? '100%' : 'auto',
    maxWidth: '320px'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '70px 20px' : '100px 10%',
    width: '100%',
    boxSizing: 'border-box'
  };

  const platforms = [
    {
      name: 'Shopify',
      logo: '/ecom/shopify.png'
    },
    {
      name: 'Myntra',
      logo: '/ecom/myntra.png'
    },
    {
      name: 'Amazon',
      logo: '/ecom/amazon.jpg'
    },
    {
      name: 'Flipkart',
      logo: '/ecom/flipkart.png'
    },
    {
      name: 'Ajio',
      logo: '/ecom/ajio.png'
    },
    {
      name: 'Meesho',
      logo: '/ecom/meesho.png'
    },
  ];

  const services = [
    {
      title: 'Web & Application Engineering',
      desc: 'Bespoke web applications, internal tools, and client dashboards engineered with React and FastAPI. Structured for high performance, scalable APIs, and deep operational integration.',
      link: '/services/web-design',
      img: '/services/web.png'
    },
    {
      title: 'Ecommerce Automation',
      desc: 'Inventory synchronization, seller workflows, marketplace automation, and operational systems for scalable ecommerce operations.',
      link: '/services/automation',
      img: '/services/automation.png'
    },
    {
      title: 'Marketplace Operations',
      desc: 'Operational infrastructure for Shopify, Myntra, Amazon, Flipkart, Ajio, and Meesho marketplace businesses.',
      link: '/services/ecommerce-help',
      img: '/services/marketplace.png'
    },
    {
      title: 'Branding Systems',
      desc: 'Brand identity systems and ecommerce-focused visual architecture for fashion brands and D2C businesses.',
      link: '/services/branding',
      img: '/services/brand.png'
    },
    {
      title: 'Ads Management Systems',
      desc: 'Data-driven advertising workflows and ecommerce campaign infrastructure for marketplace and D2C brands.',
      link: '/services/ads-management',
      img: '/services/performance.png'
    },
    {
      title: 'Social Media Systems',
      desc: 'Content systems, social commerce workflows, and brand communication infrastructure for ecommerce businesses.',
      link: '/services/social-media',
      img: '/services/social.png'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      techs: ['React', 'Vite', 'TypeScript', 'Tailwind']
    },
    {
      category: 'Backend',
      techs: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'Infrastructure',
      techs: ['Docker', 'AWS', 'CI/CD', 'Cloud Deployments']
    },
    {
      category: 'Platforms',
      techs: ['Shopify', 'Myntra', 'Amazon', 'Flipkart', 'Meesho']
    }
  ];

  const faqs = [
    {
      q: 'What does TMMT build?',
      a: 'TMMT engineers custom web applications, internal dashboards, and robust e-commerce automation systems designed to streamline multi-channel operations.'
    },
    {
      q: 'Does TMMT build custom web applications outside of e-commerce?',
      a: 'Yes. While we have deep infrastructure roots in e-commerce, our core capability is custom Web Engineering. We build scalable software tools, internal dashboards, and custom API connections for businesses that need tailored digital solutions.'
    },
    {
      q: 'Does TMMT provide inventory synchronization?',
      a: 'Yes. Real-time inventory synchronization across major marketplaces and seller workflow automation are foundational components of our engineering systems.'
    },
    {
      q: 'What industries does TMMT work with?',
      a: 'We work with growing D2C brands, fashion labels, enterprise apparel manufacturers, and companies looking to automate manual business processes with custom software.'
    }
  ];

  return (
    <div
      style={{
        width: '100%',
        color: COLORS.text,
        overflowX: 'hidden',
        backgroundColor: COLORS.white
      }}
    >
      <SEO
        title="TMMT | Web Engineering & Ecommerce Infrastructure"
        description="TMMT engineers custom web applications, backend automation platforms, inventory synchronization systems, and data-driven marketplace infrastructure for modern digital brands."
        path="/"
        keywords="web engineering, custom web applications, ecommerce automation, marketplace automation, inventory synchronization, seller dashboard, react development, fastapi developer, backend infrastructure"
        robots="index, follow"
        author="TMMT Team"
        type="website"
        ogImage="/tmmt-logo.png"
      />

      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TMMT',
            url: 'https://www.tmmt.in',
            logo: 'https://www.tmmt.in/tmmt-logo.png',
            description:
              'TMMT engineers custom web applications, backend automation platforms, inventory synchronization systems, and data-driven marketplace infrastructure for modern digital brands.',
            sameAs: [
              'https://instagram.com/themadmysteryteam',
              'https://www.instagram.com/singhmohit7057'
            ],
            founder: [
              {
                '@type': 'Person',
                name: 'Mohit Singh',
                url: 'https://www.tmmt.in/mohit-singh'
              },
              {
                '@type': 'Person',
                name: 'Harsh Aggarwal',
                url: 'https://www.tmmt.in/harsh-aggarwal'
              }
            ],
            areaServed: 'Worldwide',
            knowsAbout: [
              'Web Engineering',
              'Custom Application Development',
              'Ecommerce Automation',
              'Marketplace Infrastructure',
              'Inventory Synchronization',
              'Seller Operations',
              'FastAPI Systems',
              'React Dashboards'
            ]
          })
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })
        }}
      />

      {/* HERO SECTION */}
      <section
        style={{
          ...sectionStyle,
          textAlign: 'center',
          paddingTop: isMobile ? '120px' : '140px'
        }}
      >
        <span
          style={{
            color: COLORS.accent,
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1.2px'
          }}
        >
          Web Engineering & Operations
        </span>

        <h1
          style={{
            fontSize: isMobile ? '42px' : '72px',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            margin: '20px 0',
            lineHeight: isMobile ? 1.2 : 1.1
          }}
        >
          Custom Web Engineering <br />
          & Marketplace Infrastructure
        </h1>

        <p
          style={{
            fontSize: isMobile ? '18px' : '24px',
            color: COLORS.subtext,
            maxWidth: '940px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}
        >
          TMMT engineers production-grade web applications, custom API pipelines, 
          and automated marketplace infrastructure. We build the dashboards and systems 
          that replace manual bottlenecks for high-volume D2C and e-commerce enterprises.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center'
          }}
        >
          <button
            style={{
              ...buttonStyle,
              backgroundColor: COLORS.accent,
              color: '#fff'
            }}
            onClick={() => navigate('/contact')}
          >
            Start a Project
          </button>

          <button
            style={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              color: COLORS.accent,
              border: `1px solid ${COLORS.accent}`
            }}
            onClick={() => navigate('/services')}
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* VISION SECTION */}
      <section
        style={{
          ...sectionStyle,
          paddingTop: '40px',
          paddingBottom: '60px'
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center'
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
            Our Vision
          </span>

          <h2
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: 700,
              margin: '20px 0',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}
          >
            Built for operators, not audiences.
          </h2>

          <p
            style={{
              fontSize: isMobile ? '18px' : '22px',
              color: COLORS.subtext,
              lineHeight: 1.7,
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            Most digital brands hit a wall when scaling across three or four multi-channel nodes. 
            Data goes out of sync, workflows fail, and custom logic breaks. TMMT engineers the stable web assets 
            and automated backend layers necessary to clean up technical debt and keep business operations flawless.
          </p>
        </div>
      </section>

      {/* SUPPORTED PLATFORMS */}
      <section style={{ ...sectionStyle, paddingTop: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase'
            }}
          >
            Integrations Ecosystem
          </span>
          <h2
            style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: 600
            }}
          >
            Supported Platforms
          </h2>

          <p
            style={{
              color: COLORS.subtext,
              fontSize: isMobile ? '16px' : '18px'
            }}
          >
            Engineered integrations and ecosystem connections.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '24px',
            marginTop: '40px',
            maxWidth: '1200px',
            marginInline: 'auto'
          }}
        >
          {platforms.map((platform, i) => (
            <div
              key={i}
              style={{
                width: isMobile ? '140px' : '165px',
                minHeight: isMobile ? '140px' : '170px',
                backgroundColor: COLORS.bgLight,
                border: `1px solid ${COLORS.border}`,
                borderRadius: '28px',
                padding: isMobile ? '20px' : '28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                transition: 'all 0.25s ease',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 40px rgba(0,0,0,0.08)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                loading="lazy"
                width="60"
                height="60"
                style={{
                  width: isMobile ? '50px' : '62px',
                  height: isMobile ? '50px' : '62px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />

              <span
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 600,
                  color: COLORS.text,
                  textAlign: 'center',
                  lineHeight: 1.4
                }}
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ ...sectionStyle }}>
        <div
          style={{
            marginBottom: '60px',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px'
            }}
          >
            Capabilities Grid
          </span>

          <h2
            style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: 600,
              margin: '0 0 14px',
              lineHeight: 1.2
            }}
          >
            Engineering & System Services
          </h2>

          <p
            style={{
              color: COLORS.subtext,
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: 1.7,
              maxWidth: isMobile ? '700px' : '760px',
              margin: '0 auto'
            }}
          >
            Bespoke codebases and automation mechanics engineered to run smoothly.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: COLORS.bgLight,
                borderRadius: '32px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => navigate(s.link)}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.transform = 'translateY(-8px)')
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              <div
                style={{
                  width: '100%',
                  height: isMobile ? '200px' : '220px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width="600"
                  height="400"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              <div
                style={{
                  padding: isMobile ? '24px' : '30px'
                }}
              >
                <div
                  style={{
                    color: COLORS.accent,
                    fontWeight: 700,
                    marginBottom: '10px',
                    fontSize: '12px'
                  }}
                >
                  0{i + 1}
                </div>

                <h3
                  style={{
                    fontSize: isMobile ? '22px' : '24px',
                    margin: '0 0 12px',
                    lineHeight: 1.3
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    color: COLORS.subtext,
                    lineHeight: '1.7',
                    fontSize: isMobile ? '15px' : '16px',
                    margin: 0
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINE ROOM SECTION */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: COLORS.text,
          color: COLORS.white
        }}
      >
        <div
          style={{
            margin: '0 auto 60px',
            maxWidth: '900px',
            textAlign: 'center'
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
            Technical Infrastructure
          </span>

          <h2
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: 700,
              margin: '20px 0',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}
          >
            The Engine Room.
          </h2>

          <p
            style={{
              color: '#d2d2d7',
              fontSize: isMobile ? '18px' : '22px',
              lineHeight: 1.7,
              maxWidth: '850px',
              margin: '0 auto'
            }}
          >
            We don&apos;t configure standard plug-and-play middleware; we build software. Our modern stack is balanced specifically for custom layout speeds, clean APIs, real-time sync systems, and secure containerization.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}
        >
          {techStack.map((item, i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? '24px' : '30px',
                border: '1px solid #333',
                borderRadius: '28px',
                backgroundColor: 'rgba(255,255,255,0.02)'
              }}
            >
              <h3
                style={{
                  color: COLORS.accent,
                  marginBottom: '20px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {item.category}
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                {item.techs.map((tech, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: '12px',
                      fontSize: isMobile ? '16px' : '18px',
                      color: COLORS.white,
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: COLORS.bgLight
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
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
                lineHeight: 1.1,
                letterSpacing: '-0.03em'
              }}
            >
              Common Questions.
            </h2>

            <p
              style={{
                color: COLORS.subtext,
                fontSize: isMobile ? '18px' : '20px',
                lineHeight: 1.7,
                maxWidth: '760px',
                margin: '0 auto'
              }}
            >
              Architecture, production-level engineering, custom software panels, and synchronization workflows.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '20px'
            }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: '28px',
                  padding: isMobile ? '24px' : '32px',
                  border: `1px solid ${COLORS.border}`
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? '20px' : '24px',
                    marginBottom: '14px',
                    color: COLORS.text
                  }}
                >
                  {faq.q}
                </h3>

                <p
                  style={{
                    color: COLORS.subtext,
                    fontSize: isMobile ? '15px' : '17px',
                    lineHeight: 1.8,
                    margin: 0
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          ...sectionStyle,
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '34px' : '56px',
            fontWeight: 700,
            marginBottom: '20px',
            lineHeight: 1.1
          }}
        >
          Build High-Performance Digital Infrastructure.
        </h2>

        <p
          style={{
            fontSize: isMobile ? '18px' : '22px',
            color: COLORS.subtext,
            maxWidth: '760px',
            margin: '0 auto 40px',
            lineHeight: 1.7
          }}
        >
          Custom web engineering, robust marketplace frameworks, inventory logic engines, and production architectures engineered for scale.
        </p>

        <button
          style={{
            ...buttonStyle,
            backgroundColor: COLORS.accent,
            color: COLORS.white
          }}
          onClick={() => navigate('/contact')}
        >
          Contact TMMT
        </button>
      </section>
    </div>
  );
};

export default Homepage;