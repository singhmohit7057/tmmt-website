import React, { useState } from 'react';
import SEO from '../components/SEO';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'strategy' | 'creative' | 'engineering'>('all');

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#6e6e73',
    accent: '#0071e3',
    bg: '#f5f5f7',
    border: '#d2d2d7'
  };

  // 10 active positions mapped to your 6 core service pillars
  const positions = [
    // Strategy, Growth & Management Division
    { 
      title: "Growth Strategist", 
      team: "strategy", 
      type: "Full-Time / Remote", 
      servicePillar: "Marketplace Infrastructure",
      scope: "Architecting multi-channel cross-docking operations, logistics routing, and scaling metrics across Shopify, Amazon, and Myntra ecosystems." 
    },
    { 
      title: "Performance Marketing Expert", 
      team: "strategy", 
      type: "Full-Time / Hybrid", 
      servicePillar: "Performance Marketing",
      scope: "Managing data-backed ad funnels with a focus on ROAS. Implementing custom server-side attribution logic and Meta CAPI mechanics." 
    },
    { 
      title: "Client Account Manager", 
      team: "strategy", 
      type: "Full-Time / Hybrid", 
      servicePillar: "Marketplace Operations",
      scope: "Bridging brand partners with internal pipelines, managing catalog compliance, launch timelines, and settlement audit workflows." 
    },
    
    // Creative & Content Division
    { 
      title: "Graphic Designer", 
      team: "creative", 
      type: "Full-Time / Remote", 
      servicePillar: "Brand Architecture",
      scope: "Developing premium visual identity systems, digital typography guidelines, and packaging elements for fashion and D2C brands." 
    },
    { 
      title: "Art Director", 
      team: "creative", 
      type: "Full-Time / Hybrid", 
      servicePillar: "Brand Architecture",
      scope: "Setting the visual DNA, premium aesthetic tone, creative layouts, and editorial vision for retail partner identities." 
    },
    { 
      title: "Motion Graphic Designer", 
      team: "creative", 
      type: "Contract / Remote", 
      servicePillar: "Social Narrative",
      scope: "Creating high-fidelity micro-interactions, dynamic social commerce transitions, and video typography for active user communities." 
    },
    { 
      title: "Conversion Copywriter", 
      team: "creative", 
      type: "Full-Time / Remote", 
      servicePillar: "Performance Marketing",
      scope: "Writing high-converting landing page narratives, ad hook matrices, and premium brand position messaging." 
    },
    { 
      title: "Fashion Photographer", 
      team: "creative", 
      type: "Project-Based / On-Site", 
      servicePillar: "Social Narrative",
      scope: "Capturing high-fidelity studio lookbooks, campaign assets, and editorial catalog photography for organic curation." 
    },
    { 
      title: "Videographer", 
      team: "creative", 
      type: "Project-Based / On-Site", 
      servicePillar: "Social Narrative",
      scope: "Directing, shooting, and cutting short-form cinematic video reels optimized for visual platform storytelling." 
    },
    
    // Engineering Division (Coders)
    { 
      title: "Full-Stack Software Developer", 
      team: "engineering", 
      type: "Full-Time / Remote", 
      servicePillar: "Web Engineering & Automation",
      scope: "Building ultra-fast, 'Retina-ready' custom web applications (sub-400ms target), FastAPI engines, and headless data extraction protocols." 
    }
  ];

  const filteredPositions = positions.filter(p => activeTab === 'all' || p.team === activeTab);

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', color: COLORS.text, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <SEO 
        title="Careers | Join the Infrastructure Ecosystem"
        description="Explore active openings at TMMT. We are seeking talented strategists, creative designers, digital producers, and coders to engineer high-performance systems."
        path="/careers"
      />

      {/* Hero Header Section */}
      <div style={{ padding: '160px 10% 60px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left', boxSizing: 'border-box' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '12px' }}>Careers</span>
        <h1 style={{ fontSize: '56px', fontWeight: 700, margin: '15px 0 25px', letterSpacing: '-0.04em' }}>Join the Studio Core.</h1>
        <p style={{ fontSize: '20px', color: COLORS.subtext, lineHeight: '1.6', maxWidth: '750px', margin: 0 }}>
          We bridge the gap between high-fidelity web engineering, clean operational automation, and premium brand curation.
        </p>
      </div>

      {/* Interactive Matrix Filter Tabs */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10%', display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px', boxSizing: 'border-box' }}>
        {(['all', 'strategy', 'creative', 'engineering'] as const).map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 24px', borderRadius: '24px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
              backgroundColor: activeTab === tab ? COLORS.text : COLORS.bg,
              color: activeTab === tab ? '#fff' : COLORS.text,
              textTransform: 'capitalize', transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {tab === 'all' ? 'All Divisions' : tab}
          </button>
        ))}
      </div>

      {/* Positions Directory List */}
      <div style={{ padding: '0 10% 60px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredPositions.map((role, idx) => (
            <div 
              key={idx} 
              style={{ 
                backgroundColor: COLORS.bg, 
                padding: '32px', 
                borderRadius: '24px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '24px',
                border: `1px solid ${COLORS.border}33`
              }}
            >
              <div style={{ flex: '1', minWidth: '280px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: COLORS.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {role.servicePillar}
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: COLORS.border }}></span>
                  <span style={{ fontSize: '13px', color: COLORS.subtext, fontWeight: 500 }}>
                    {role.type}
                  </span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.02em', color: COLORS.text }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: '15px', color: COLORS.subtext, margin: 0, lineHeight: '1.5' }}>
                  {role.scope}
                </p>
              </div>
              <div>
                <a 
                  href="/contact" 
                  style={{ 
                    padding: '14px 28px', 
                    borderRadius: '12px', 
                    backgroundColor: COLORS.text, 
                    color: '#fff', 
                    textDecoration: 'none', 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    display: 'inline-block',
                    transition: 'opacity 0.2s ease' 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Apply Interface
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Email Submission Node */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 10%', boxSizing: 'border-box' }}>
        <div style={{ backgroundColor: COLORS.bg, padding: '40px', borderRadius: '32px', textAlign: 'center', border: `1px solid ${COLORS.border}33` }}>
          <h4 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            Don't see your specific role?
          </h4>
          <p style={{ color: COLORS.subtext, fontSize: '16px', margin: '0 0 20px', lineHeight: '1.5' }}>
            We are always looking for exceptional talent to join our studio core. If your stack or division isn't listed above, we still want to hear from you.
          </p>
          <div style={{ fontSize: '16px', fontWeight: 500, color: COLORS.text }}>
            Fill out our contact interface above or you can directly send your resume at{' '}
            <a 
              href="mailto:team.tmmt@gmail.in" 
              style={{ 
                color: COLORS.accent, 
                textDecoration: 'none', 
                fontWeight: 600,
                borderBottom: '1px solid transparent',
                transition: 'border-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderBottomColor = COLORS.accent}
              onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
            >
              team.tmmt@gmail.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;