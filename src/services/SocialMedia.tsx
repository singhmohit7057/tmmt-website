import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const SocialNarrative: React.FC = () => {
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
    darkBg: '#1d1d1f'
  };

  const sectionStyle: React.CSSProperties = {
    padding: isMobile ? '60px 20px' : '100px 10%',
    maxWidth: '1400px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ width: '100%', color: COLORS.text, backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* SEO MANAGEMENT MODULE INJECTION */}
      <SEO
        title="Social Media Management & Content Production"
        description="We handle your brand's social media end to end — reels, posts, captions, scheduling, and growth across Instagram, LinkedIn, and YouTube Shorts."
        path="/services/social-media"
        ogImage="/services/social.png"
      />

      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, paddingTop: isMobile ? '100px' : '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
          06 / Narrative
        </span>
        <h1 style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Social Media,<br/> handled.
        </h1>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1.5 }}>
            <p style={{ fontSize: isMobile ? '18px' : '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '650px', marginBottom: '30px' }}>
              We shoot, edit, caption, and post. From 4K reels to daily feed management — your social presence runs on our schedule, not yours.
            </p>

            {/* Capability Tags - Specialized for Social & Content Narrative */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'Cinematic Reels', icon: '🎬' },
                { label: 'Omnichannel', icon: '📱' },
                { label: 'Growth Logic', icon: '📈' }
              ].map((tag) => (
                <div key={tag.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
                  backgroundColor: COLORS.bg, borderRadius: '12px', border: `1px solid ${COLORS.border}66`,
                  fontSize: '13px', fontWeight: 600, color: COLORS.text
                }}>
                  <span>{tag.icon}</span> {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTION PIPELINE BOX - Retained high-appeal dark box */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#1d1d1f', 
            borderRadius: '24px', 
            padding: '25px', 
            width: isMobile ? '100%' : '400px',
            color: '#fff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
          }}>
            <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '20px', letterSpacing: '1px' }}>PRODUCTION PIPELINE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📸</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600 }}>4K Cinematic Reel</div>
                <div style={{ fontSize: '12px', opacity: 0.6 }}>Post-Production: 90%</div>
              </div>
            </div>
            <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '90%', height: '100%', background: COLORS.accent }}></div>
            </div>
            <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600 }}>
              <span style={{ color: '#28c840' }}>● Render Complete</span>
              <span>Exporting for IG/Shorts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-CYCLE MANAGEMENT SECTION */}
      <section style={{ padding: isMobile ? '40px 20px' : '80px 5%', backgroundColor: COLORS.bg, borderRadius: isMobile ? '24px' : '48px', margin: '0 20px 80px' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '50px', textAlign: 'center' }}>Full-Cycle Management.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { title: "Production", icon: "📸", desc: "Cinematic Reels and high-contrast photography tailored for luxury and tech." },
            { title: "Orchestration", icon: "🗓️", desc: "Strategic account management, caption engineering, and daily posting logic." },
            { title: "Growth Logic", icon: "📈", desc: "Organic community building and platform-specific SEO to drive discovery." }
          ].map((item, i) => (
            <div key={i} style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>{item.icon}</div>
              <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: COLORS.subtext, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM GRID */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '40px', textAlign: 'center' }}>Omnichannel Authority.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
          {["Instagram Reels", "Shorts", "LinkedIn Content", "X (Twitter)", "Pinterest Curation"].map((platform, i) => (
            <div key={i} style={{ padding: '20px', border: `1px solid ${COLORS.border}`, borderRadius: '16px', textAlign: 'center', fontSize: '14px', fontWeight: 600, backgroundColor: COLORS.bg }}>
              {platform}
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE SOCIAL ENGINEERING FRAMEWORK */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '60px', textAlign: 'center' }}>The Narrative Framework.</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Pillar 01: Visual Prestige */}
          <div style={{
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row', 
            gap: isMobile ? '30px' : '60px', 
            backgroundColor: COLORS.bg, 
            borderRadius: isMobile ? '32px' : '48px', 
            padding: isMobile ? '30px' : '60px',
            alignItems: 'center'
          }}>
            <div style={{ 
              flex: 1.2, 
              width: '100%', 
              aspectRatio: '18 / 9', 
              borderRadius: '24px', 
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <img src="/services/pillar1.jpg" alt="Visual Prestige" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent, textTransform: 'uppercase' }}>Pillar 01</span>
              <h3 style={{ fontSize: isMobile ? '32px' : '42px', margin: '15px 0' }}>Visual Prestige.</h3>
              <p style={{ color: COLORS.subtext, fontSize: '17px', lineHeight: 1.6 }}>
                We produce high-contrast cinematic content with consistent color grading across every post. The visual quality is deliberate — it's what makes people stop scrolling.
              </p>
            </div>
          </div>

          {/* Pillar 02: Algorithmic Distribution */}
          <div style={{
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row-reverse', 
            gap: isMobile ? '30px' : '60px', 
            backgroundColor: COLORS.darkBg, 
            color: '#fff',
            borderRadius: isMobile ? '32px' : '48px', 
            padding: isMobile ? '30px' : '60px',
            alignItems: 'center'
          }}>
            <div style={{ 
              flex: 1.2, 
              width: '100%', 
              aspectRatio: '18 / 10', 
              borderRadius: '24px', 
              overflow: 'hidden',
              backgroundColor: '#1a1a1a',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img src="/services/pillar2.jpg" alt="Algorithmic Distribution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent, textTransform: 'uppercase' }}>Pillar 02</span>
              <h3 style={{ fontSize: isMobile ? '32px' : '42px', margin: '15px 0' }}>Distribution Logic.</h3>
              <p style={{ color: '#86868b', fontSize: '17px', lineHeight: 1.6 }}>
                Good content doesn't reach anyone by accident. We optimize posting time, reel hooks, and keyword metadata for each platform — so the algorithm works for you, not against you.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '15px' }}>Want someone to just handle it?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px' }}>We take care of the content, the posting, and the growth. You focus on the product.</p>
        <button onClick={() => navigate('/contact')} style={{ width: isMobile ? '100%' : 'auto', padding: '18px 45px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Talk to Us
        </button>
      </footer>
    </div>
  );
};

export default SocialNarrative;