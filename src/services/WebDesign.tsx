import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const WebDesign: React.FC = () => {
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
    bg: '#f5f5f7', 
    border: '#d2d2d7',
    darkBg: '#1d1d1f',
    green: '#28c840'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const getProjectCardStyle = (index: number): React.CSSProperties => {
    const isEven = index % 2 === 0;
    return {
      display: 'flex', 
      flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'), 
      gap: isMobile ? '30px' : '60px', 
      backgroundColor: isEven ? COLORS.bg : COLORS.darkBg, 
      color: isEven ? COLORS.text : '#fff',
      borderRadius: isMobile ? '32px' : '48px', 
      padding: isMobile ? '30px' : '60px',
      alignItems: 'center',
      marginBottom: isMobile ? '30px' : '60px',
      overflow: 'hidden'
    };
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: 1.2,
    width: '100%',
    aspectRatio: '18 / 9', 
    borderRadius: '16px', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    border: `1px solid ${COLORS.border}33`,
    backgroundColor: '#fff',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const projects = [
    {
      label: "BUILDING NOW",
      title: "Ecomsathi",
      desc: "An all-in-one ecommerce operations platform being built by TMMT — SKU generation, label cropping, batch PDF tools, and seller workflows unified into a single interface.",
      tech: ["Vite", "React", "TypeScript", "FastAPI", "SupaBase", "Railway", "Node.js + Express", "FFmpeg", "Sharp", "Tesseract.js", "pdf-lib", "jszip"],
      image: "/services/ecomsathi.png",
      link: "https://ecomsathi.vercel.app/"
    },
    {
      label: "FINISHED PROJECT",
      title: "Label Muskaan Singh",
      desc: "A Shopify ethnic fashion store with custom garment visualizations, RazorPay integration, and ShipRocket fulfillment. Sub-second navigation, fully mobile.",
      tech: ["Shopify", "RazorPay", "ShipRocket", "Liquid"],
      image: "/services/labelmuskaansingh.png",
      link: "https://labelmuskaansingh.in"
    },
    {
      label: "LIVE ORGANIZATION WEBSITE",
      title: "Johar Foundation",
      desc: "Nonprofit website built with React and Web3Forms. Responsive, accessible, and optimized for organic search so donors and volunteers can actually find them.",
      tech: ["React", "Vite", "TypeScript", "Responsive UI", "Web3Forms"],
      image: "/services/joharfoundation.png",
      link: "https://joharfoundation.org"
    },
    {
      label: "SIDE PROJECT",
      title: "GrabOffer",
      desc: "Lightweight deal-aggregator optimized for extreme performance with sub-second search and mobile responsiveness.",
      tech: ["Vite", "React", "TypeScript", "Vercel", "Web3Forms"],
      image: "/services/graboffer.png",
      link: "https://graboffer.vercel.app"
    },
    {
      label: "PORTFOLIO WEBSITE",
      title: "Muskaan Singh",
      desc: "Personal portfolio for fashion designer Muskaan Singh — minimal, editorial layout with smooth transitions and full mobile responsiveness.",
      tech: ["React", "Vite", "TypeScript", "Vercel", "Framer Motion", "Web3Forms"],
      image: "/services/muskaansingh.png",
      link: "https://www.muskaansingh.in"
    },
    {
      label: "SAAS PRODUCT",
      title: "WashMate",
      desc: "A laundry service management platform with booking flows, order tracking, and a clean dashboard built for speed and simplicity.",
      tech: ["React", "Vite", "TypeScript", "Vercel", "Framer Motion", "SupaBase"],
      image: "/services/washmate.png",
      link: "https://washmate-tawny.vercel.app/"
    },
    {
      label: "FINISHED PROJECT",
      title: "Jarvis HMS",
      desc: "A full-stack clinic management system covering three modules — Doctor (appointments, prescriptions, consultations), Pharmacy (inventory, billing, near-expiry tracking, sales history), and Lab (bookings, sample processing, reports). Unified under a single role-based dashboard with real-time analytics and activity logs.",
      tech: ["Vite", "React", "TypeScript", "Tailwind", "Supabase", "Zustand", "Zod", "jsPDF + XLSX", "TanStack Table", "Recharts", "Sonner"],
      image: "/services/jarvishms.png",
      link: "https://jarvis-hms.vercel.app/"
    },
    {
      label: "INTERACTIVE BUILD",
      title: "100 Year Clock",
      desc: "A high-precision JavaScript engine visualizing a century of time with frame-perfect mathematical accuracy.",
      tech: ["Github", "JavaScript", "CSS3"],
      image: "/services/100yearclock.png",
      link: "https://singhmohit7057.github.io/100-year-clock/"
    }
  ];

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO
        title="Ecommerce Web Design & React Development"
        description="We build fast, SEO-ready ecommerce websites using React, TypeScript, and Vite — optimized for Core Web Vitals, mobile, and search crawlability."
        path="/services/web-design"
        ogImage="/services/web.png"
      />


    {/* 1. HERO SECTION */}
<section
  style={{
    ...sectionStyle,
    paddingTop: isMobile ? '90px' : '140px'
  }}
>
  <span
    style={{
      color: COLORS.accent,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      fontSize: '12px'
    }}
  >
    01 / Engineering
  </span>

  <h1
    style={{
      fontSize: isMobile ? '34px' : '72px',
      fontWeight: 700,
      margin: isMobile ? '16px 0 18px' : '20px 0',
      letterSpacing: '-0.04em',
      lineHeight: isMobile ? 1.12 : 1.05,
      maxWidth: '900px'
    }}
  >
    High-Fidelity
    <br />
    Web Engineering.
  </h1>

  <div
    style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '36px' : '40px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}
  >
    {/* LEFT SIDE */}
    <div style={{ flex: 1.5, width: '100%' }}>
      <p
        style={{
          fontSize: isMobile ? '16px' : '24px',
          color: COLORS.subtext,
          lineHeight: 1.6,
          maxWidth: '650px',
          marginBottom: '30px'
        }}
      >
        <>
          React, TypeScript, and Vite — built for fast load times, clean mobile rendering, and Core Web Vitals that actually pass. We've shipped sites that score 100 across the board on Lighthouse.
        </>
      </p>

      {/* Capability Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {[
          { label: 'Web Engineering', icon: '🌐' },
          { label: 'Automation Systems', icon: '⚙️' },
          { label: 'Ecommerce Infrastructure', icon: '🛒' }
        ].map((tag) => (
          <div
            key={tag.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '10px 14px' : '10px 16px',
              backgroundColor: COLORS.bg,
              borderRadius: '14px',
              border: `1px solid ${COLORS.border}66`,
              fontSize: isMobile ? '12px' : '13px',
              fontWeight: 600,
              color: COLORS.text,
              boxSizing: 'border-box'
            }}
          >
            <span>{tag.icon}</span>
            {tag.label}
          </div>
        ))}
      </div>
    </div>
          
          {/* THE LIGHTHOUSE AUDIT BOX - Now matches the Ads/Automation boxes */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#fff', 
            borderRadius: '24px', 
            padding: '30px', 
            width: isMobile ? '100%' : '420px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
            border: `1px solid ${COLORS.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: COLORS.subtext, letterSpacing: '1px' }}>CORE WEB VITALS: PASSED</div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {[100, 100, 100, 100].map((score, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: isMobile ? '45px' : '55px', 
                    height: isMobile ? '45px' : '55px', 
                    borderRadius: '50%', 
                    border: `2px solid ${COLORS.green}`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 700, 
                    color: COLORS.green, 
                    fontSize: isMobile ? '12px' : '14px', 
                    backgroundColor: 'rgba(40, 200, 64, 0.05)' 
                  }}>
                    {score}
                  </div>
                  <div style={{ fontSize: '8px', fontWeight: 700, marginTop: '8px', color: COLORS.subtext }}>
                    {['PERF', 'ACC', 'BEST', 'SEO'][i]}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: `1px solid ${COLORS.bg}`, paddingTop: '15px', fontSize: '11px', fontWeight: 600, color: COLORS.green }}>
               ✓ All metrics meet optimized threshold
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT SHOWCASE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '40px' }}>Project Showcase.</h2>
        
        {projects.map((project, index) => (
          <div key={index} style={getProjectCardStyle(index)}>
            {/* Image Container (Clickable) */}
            <div 
              style={{ 
                ...imageContainerStyle, 
                cursor: project.link ? 'pointer' : 'default' 
              }}
              onClick={() => project.link && window.open(project.link, '_blank')}
              onMouseEnter={(e) => project.link && (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => project.link && (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  backgroundColor: '#fff',
                  display: 'block' 
                }} 
              />
            </div>

            {/* Content Side */}
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent, textTransform: 'uppercase' }}>
                {project.label}
              </span>
              <h3 
                style={{ 
                  fontSize: isMobile ? '32px' : '42px', 
                  margin: '15px 0',
                  cursor: project.link ? 'pointer' : 'default' 
                }}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {project.title}
              </h3>
              <p style={{ color: index % 2 === 0 ? COLORS.subtext : '#e0e0e0', lineHeight: '1.6', fontSize: '18px', marginBottom: '30px' }}>
                {project.desc}
              </p>
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    padding: '6px 12px', 
                    backgroundColor: index % 2 === 0 ? '#fff' : 'rgba(255,255,255,0.1)', 
                    borderRadius: '6px', 
                    border: index % 2 === 0 ? `1px solid ${COLORS.border}` : '1px solid rgba(255,255,255,0.2)' 
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <button 
                  onClick={() => window.open(project.link!, '_blank')} 
                  style={{ 
                    backgroundColor: COLORS.accent, 
                    color: '#fff', 
                    padding: '14px 32px', 
                    borderRadius: '100px', 
                    border: 'none', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    width: isMobile ? '100%' : 'auto',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Visit Site
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA FOOTER */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '20px' }}>Need a faster, better-structured site?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '40px' }}>We look at what you have, find what's slowing it down, and build something that actually performs.</p>
        <button 
          onClick={() => navigate('/contact')} 
          style={{ 
            padding: '18px 45px', 
            borderRadius: '100px', 
            backgroundColor: COLORS.accent, 
            color: '#fff', 
            border: 'none', 
            fontWeight: 600, 
            cursor: 'pointer', 
            width: isMobile ? '100%' : 'auto' 
          }}
        >
          Request Audit
        </button>
      </footer>
    </div>
  );
};

export default WebDesign;