import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Vercel Telemetry Modules
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

// Main Pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Career';

// Service Pages
import WebDesign from './services/WebDesign';
import Automation from './services/Automation';
import SocialMedia from './services/SocialMedia';
import AdsManagement from './services/AdsManagement';
import EcomHelp from './services/EcomHelp';
import Branding from './services/Branding';

// Legal Pages
import CookiePolicy from './legal/CookiePolicy';
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsAndConditions from './legal/TermsAndConditions';

// Founder Page
import MohitSingh from './pages/founder/MohitSingh';
import HarshAggarwal from './pages/founder/HarshAggarwal';

// Sitemap Page
import Sitemap from './pages/system/Sitemap';

// System Pages
import ComingSoon from './pages/system/ComingSoon';
import NotFound from './pages/system/NotFound';

const App: React.FC = () => {
  const location = useLocation();

  // GLOBAL SCROLL RESTORATION MATRIX INJECTION
  useEffect(() => {
    // Instantly force the viewport window back to top-left margins on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]); // Listen precisely to path string variations
  
  // Define which paths should hide the global layout
  const isComingSoonPage = 
    location.pathname === '/community' || 
    location.pathname === '/services/soon';

  const rootStyle: React.CSSProperties = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    margin: 0,
    padding: 0,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    overflowX: 'hidden'
  };

  return (
    <div style={rootStyle}>
      {/* Conditionally render Navbar */}
      {!isComingSoonPage && <Navbar />}
      
      <main style={{ flex: 1, marginTop: isComingSoonPage ? '0' : '48px' }}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />}/>

          {/* Nested Service Routes */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/ads-management" element={<AdsManagement />} />
          <Route path="/services/ecommerce-help" element={<EcomHelp />} />
          <Route path="/services/branding" element={<Branding />} />

          {/* Legal Routes */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Founder Routes */}
          <Route path="/mohit-singh" element={<MohitSingh />} />
          <Route path="/harsh-aggarwal" element={<HarshAggarwal />} />

          {/* Sitemap Route */}
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* System/Coming Soon Routes */}
          <Route 
            path="/services/soon" 
            element={<ComingSoon pageName="New Services" />} 
          />

          <Route 
            path="/community" 
            element={<ComingSoon pageName="TMMT Community" />} 
          />

          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Conditionally render Footer */}
      {!isComingSoonPage && <Footer />}

      {/* Vercel Insights Components */}
      <Analytics />
      <SpeedInsights />
      
    </div>
  );
};

export default App;