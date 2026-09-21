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
    subtext: '#6e6e73',
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
      logo: '/ecom/shopify.webp'
    },
    {
      name: 'Myntra',
      logo: '/ecom/myntra.webp'
    },
    {
      name: 'Amazon',
      logo: '/ecom/amazon.webp'
    },
    {
      name: 'Flipkart',
      logo: '/ecom/flipkart.webp'
    },
    {
      name: 'Ajio',
      logo: '/ecom/ajio.webp'
    },
    {
      name: 'Meesho',
      logo: '/ecom/meesho.webp'
    },
  ];

  const services = [
    {
      title: 'Web & Application Engineering',
      desc: 'Bespoke web applications, internal tools, and client dashboards engineered with React and FastAPI. Structured for high performance, scalable APIs, and deep operational integration.',
      link: '/services/web-design',
      img: '/services/web.webp'
    },
    {
      title: 'Workflow Automation',
      desc: 'Custom automation pipelines for any business process — data sync, report generation, notification systems, and workflow engines that eliminate manual work.',
      link: '/services/automation',
      img: '/services/automation.webp'
    },
    {
      title: 'Marketplace Operations',
      desc: 'Operational infrastructure for Shopify, Myntra, Amazon, Flipkart, Ajio, and Meesho marketplace businesses.',
      link: '/services/ecommerce-help',
      img: '/services/marketplace.webp'
    },
    {
      title: 'Branding Systems',
      desc: 'Brand identity systems and visual architecture for businesses that want a consistent, professional presence across every channel.',
      link: '/services/branding',
      img: '/services/brand.webp'
    },
    {
      title: 'Ads Management Systems',
      desc: 'Data-driven advertising workflows and campaign infrastructure for businesses looking to grow through paid channels.',
      link: '/services/ads-management',
      img: '/services/performance.webp'
    },
    {
      title: 'Social Media Systems',
      desc: 'Content systems, scheduling workflows, and brand communication infrastructure built to keep your social presence consistent and active.',
      link: '/services/social-media',
      img: '/services/social.webp'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      techs: ['React', 'Vite', 'TypeScript', 'JavaScript']
    },
    {
      category: 'Backend',
      techs: ['Python', 'FastAPI', 'Supabase', 'SQL', 'REST APIs', 'Web3Forms', 'Google Script']
    },
    {
      category: 'Infrastructure',
      techs: ['Vercel', 'AWS', 'OpenCV', 'Selenium']
    },
    {
      category: 'Platforms',
      techs: ['Shopify', 'Myntra', 'Amazon', 'Flipkart', 'Meesho', 'Ajio']
    }
  ];

  const faqs = [
    {
      q: 'What does TMMT build?',
      a: 'TMMT builds custom websites, web applications, internal dashboards, and workflow automation systems. Whether you need a business website, a client portal, or automated processes — we engineer it from scratch.'
    },
    {
      q: 'Can TMMT automate my business processes?',
      a: 'Yes. We build custom automation for any repeatable business task — data sync between tools, automated reports, notification systems, document generation, and more. If you do it manually more than a few times a week, we can automate it.'
    },
    {
      q: 'What kinds of websites does TMMT build?',
      a: 'We build business websites, portfolio sites, service company websites, nonprofit sites, landing pages, and custom web applications. Every build is custom — no templates, no page builders.'
    },
    {
      q: 'What industries does TMMT work with?',
      a: 'We work with businesses across industries — from manufacturing and services to fashion, nonprofits, and startups. If your business needs a strong web presence or better-automated operations, we can help.'
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
        title="TMMT | Web Engineering & Workflow Automation"
        description="TMMT builds custom websites, web applications, and workflow automation systems for businesses. From your first website to internal dashboards and automated business processes."
        path="/"
        keywords="web engineering, custom websites, workflow automation, business automation, web applications, website design, internal tools, process automation, react development, fastapi, python automation"
        robots="index, follow"
        author="TMMT Team"
        type="website"
        ogImage="/tmmt-logo.webp"
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
          Web Engineering & Automation
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
          We Build Websites <br />
          & Automate Your Workflows
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
          TMMT designs and engineers custom websites, web applications, and business automation tools.
          From your first website to internal dashboards and automated workflows — we build what your business needs to run efficiently.
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
            Most businesses waste hours on tasks that should run automatically. Processes fall apart,
            data sits in silos, and websites don't convert. TMMT engineers the web infrastructure and
            automation layers that let your business run without you holding it together.
          </p>
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

      {/* ECOMMERCE PLATFORMS */}
      <section style={{ ...sectionStyle, backgroundColor: COLORS.bgLight }}>
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
            Ecommerce Expertise
          </span>
          <h2
            style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: 600,
              margin: '14px 0 10px'
            }}
          >
            Marketplace Integrations
          </h2>
          <p style={{ color: COLORS.subtext, fontSize: isMobile ? '16px' : '18px', margin: 0 }}>
            Deep integration experience across India's major ecommerce platforms.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '24px',
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
                backgroundColor: COLORS.white,
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
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
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
          Build Your Website. Automate Your Business.
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
          Custom websites, web applications, and workflow automation — engineered to work reliably from day one.
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