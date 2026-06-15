import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const EcomHelp: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#6e6e73',
    accent: '#0071e3',
    bg: '#f5f5f7',
    border: '#d2d2d7',
    darkBg: '#1d1d1f',
    leakageRed: '#ff3b30',
    recoveryGreen: '#28c840'
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
        title="Marketplace Operations & Multi-Channel Ecommerce Setup"
        description="We set up and manage your seller presence on Amazon, Myntra, Flipkart, Ajio, and Meesho — catalog, inventory sync, FBA/FBF, and settlement reconciliation."
        path="/services/ecommerce-help"
        ogImage="/services/marketplace.webp"
      />

      {/* 1. HERO SECTION */}
      <section style={{ ...sectionStyle, paddingTop: isMobile ? '100px' : '140px' }}>
        <span style={{ color: COLORS.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', fontSize: '12px' }}>
          03 / Infrastructure
        </span>
        <h1 style={{ fontSize: isMobile ? '42px' : '72px', fontWeight: 700, margin: '20px 0', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          The Marketplace <br/> Operating System.
        </h1>
        
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1.5 }}>
            <p style={{ fontSize: isMobile ? '18px' : '24px', color: COLORS.subtext, lineHeight: '1.5', maxWidth: '650px', marginBottom: '30px' }}>
              Selling on multiple platforms means more than uploading listings. Inventory needs to stay in sync. Orders need to route correctly. Settlement errors need to get caught before they compound.
            </p>

            {/* Capability Tags - Specialized for Infrastructure */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { label: 'Amazon', icon: '📦' },
                { label: 'Myntra', icon: '🛍️' },
                { label: 'Inventory Sync', icon: '🔄' }
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
          
          {/* SETTLEMENT DASHBOARD MOCKUP - Your existing box */}
          <div style={{ 
            flex: 1, 
            backgroundColor: COLORS.bg, 
            borderRadius: '24px', 
            padding: isMobile ? '20px' : '25px', 
            width: isMobile ? '100%' : '450px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: `1px solid ${COLORS.border}`
          }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: COLORS.subtext, marginBottom: '20px' }}>SETTLEMENT AUDIT v2.4</div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', color: COLORS.subtext }}>Potential Fee Leakage Found</div>
              <div style={{ fontSize: isMobile ? '28px' : '32px', fontWeight: 700, color: COLORS.leakageRed }}>₹45,280.00</div>
            </div>
            <div style={{ height: '4px', width: '100%', background: COLORS.border, borderRadius: '2px', overflow: 'hidden', marginBottom: '15px' }}>
              <div style={{ width: '70%', height: '100%', background: COLORS.recoveryGreen }}></div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: COLORS.recoveryGreen }}>✓ 70% Recoverable via disputes</div>
          </div>
        </div>
      </section>

      {/* NEW: ECOM ONBOARDING SECTION */}
      <section style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: COLORS.accent, fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Zero to One
          </span>
          <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 700, margin: '15px 0' }}>
            New seller setup, done for you.
          </h2>
          <p style={{ color: COLORS.subtext, fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Brand registration, catalog setup, category approval, and account activation — handled before your first order arrives.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', 
          gap: '20px',
          alignItems: 'center'
        }}>
          {[
            { name: 'Amazon', logo: 'A' },
            { name: 'Flipkart', logo: 'F' },
            { name: 'Myntra', logo: 'M' },
            { name: 'Ajio', logo: 'Aj' },
            { name: 'Meesho', logo: 'Me' }
          ].map((brand) => (
            <div key={brand.name} style={{
              padding: '30px 20px',
              backgroundColor: '#fff',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '24px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: COLORS.bg, 
                borderRadius: '50%', 
                margin: '0 auto 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '14px',
                color: COLORS.accent
              }}>
                {brand.logo}
              </div>
              <div style={{ fontWeight: 600, fontSize: '15px' }}>{brand.name}</div>
              <div style={{ fontSize: '11px', color: COLORS.subtext, marginTop: '5px' }}>Onboarding</div>
            </div>
          ))}
        </div>

        {/* ONBOARDING CHECKLIST MOCKUP */}
        <div style={{ 
          marginTop: '60px', 
          backgroundColor: COLORS.darkBg, 
          borderRadius: '32px', 
          padding: isMobile ? '30px' : '50px',
          color: '#fff',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '40px'
        }}>
          <div>
            <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>What we handle:</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '16px', opacity: 0.9 }}>
              <li>✓ Brand Registry & Trademark Authorization</li>
              <li>✓ Category Approval & Ungating</li>
              <li>✓ GTIN/UPC Exemption & Cataloging</li>
              <li>✓ Warehouse (FBA/FBF) Shipment Planning</li>
              <li>✓ A+ Content & Brand Store Setup</li>
            </ul>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ 
              padding: '25px', 
              border: `1px solid ${COLORS.accent}`, 
              borderRadius: '20px', 
              backgroundColor: 'rgba(0,113,227,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: COLORS.accent, marginBottom: '10px' }}>DEPLOYMENT SPEED</div>
              <div style={{ fontSize: '36px', fontWeight: 700 }}>7-10 Days</div>
              <div style={{ fontSize: '14px', opacity: 0.7 }}>From Registration to First Sale</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY: IBTIDA LAUNCH */}
      <section style={sectionStyle}>
        <div style={{
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: isMobile ? '30px' : '60px', 
          backgroundColor: COLORS.bg, 
          borderRadius: isMobile ? '32px' : '48px', 
          padding: isMobile ? '30px' : '60px',
          alignItems: 'center'
        }}>
          {/* FIXED 18:9 ASPECT RATIO IMAGE */}
          <div style={{ 
            flex: 1.2, 
            width: '100%', 
            aspectRatio: '18 / 9', 
            borderRadius: '24px', 
            overflow: 'hidden',
            backgroundColor: '#fff',
            border: `1px solid ${COLORS.border}44`,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/services/ibtida.webp" 
              alt="Ibtida Marketplace Presence" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.accent, textTransform: 'uppercase', letterSpacing: '1px' }}>Scale with Ibtida</span>
            <h3 style={{ fontSize: isMobile ? '32px' : '42px', margin: '15px 0' }}>Live on 4 platforms from day one.</h3>
            <p style={{ color: COLORS.subtext, fontSize: '18px', marginBottom: '25px', lineHeight: 1.6 }}>
              We built the marketplace infrastructure for Ibtida from scratch — catalog, inventory sync, platform onboarding, and settlement reconciliation across Amazon, Flipkart, Myntra, and Ajio.
            </p>
            
            <h4 style={{ fontSize: '12px', fontWeight: 700, marginBottom: '15px', color: COLORS.text }}>LIVE ON PLATFORMS:</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { name: 'Shopify', url: 'https://www.labelmuskaansingh.in' },
                { name: 'Amazon', url: 'https://www.amazon.in/stores/Ibtida/page/387CF532-8348-482E-B4E2-DC9F549038F3' },
                { name: 'Flipkart', url: 'https://www.flipkart.com/store/ibtida' },
                { name: 'Myntra', url: 'https://www.myntra.com/ibtida?rawQuery=ibtida' },
                { name: 'Meesho', url: 'https://www.meesho.com/LabelMuskaanSingh' },
                { name: 'Ajio', url: 'https://www.ajio.com/s/brand-ibtida' }
              ].map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => window.open(platform.url, '_blank')}
                  style={{ 
                    padding: '8px 18px', 
                    borderRadius: '100px', 
                    border: `1px solid ${COLORS.border}`, 
                    backgroundColor: '#fff',
                    color: COLORS.text,
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = COLORS.accent;
                    e.currentTarget.style.color = COLORS.accent;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.color = COLORS.text;
                  }}
                >
                  {platform.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-NODE SYNC LOGIC */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '60px', textAlign: 'center' }}>Multi-Node Sync Logic.</h2>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🛒</div>
            <div style={{ fontWeight: 600 }}>Sales Channels</div>
            <div style={{ fontSize: '12px', color: COLORS.subtext }}>Amazon, Myntra, etc.</div>
          </div>
          <div style={{ fontSize: '24px', transform: isMobile ? 'rotate(90deg)' : 'none', color: COLORS.border }}>↔</div>
          <div style={{ 
            flex: 1.5, 
            padding: '30px', 
            backgroundColor: COLORS.darkBg, 
            color: '#fff', 
            borderRadius: '24px', 
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,113,227,0.2)',
            border: `1px solid ${COLORS.accent}`,
            width: isMobile ? '100%' : 'auto'
          }}>
            <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: '12px', marginBottom: '10px' }}>TMMT ENGINE</div>
            <div style={{ fontSize: '18px', fontWeight: 600 }}>Sub-Second Sync</div>
            <div style={{ fontSize: '12px', opacity: 0.6 }}>Inventory & Order Routing</div>
          </div>
          <div style={{ fontSize: '24px', transform: isMobile ? 'rotate(90deg)' : 'none', color: COLORS.border }}>↔</div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📦</div>
            <div style={{ fontWeight: 600 }}>Warehouses</div>
            <div style={{ fontSize: '12px', color: COLORS.subtext }}>WMS & ERP Systems</div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <footer style={{ padding: isMobile ? '60px 20px' : '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '15px' }}>Does your infrastructure scale?</h2>
        <p style={{ color: COLORS.subtext, marginBottom: '30px', fontSize: '15px' }}>Get a technical audit of your marketplace health and inventory logic.</p>
        <button onClick={() => navigate('/contact')} style={{ width: isMobile ? '100%' : 'auto', padding: '16px 40px', borderRadius: '100px', backgroundColor: COLORS.accent, color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Book Technical Audit
        </button>
      </footer>
    </div>
  );
};

export default EcomHelp;