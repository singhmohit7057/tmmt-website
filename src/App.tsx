import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Vercel Telemetry Modules
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

// Main Pages
const Homepage = lazy(() => import('./pages/Homepage'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Career'));

// Service Pages
const WebDesign = lazy(() => import('./services/WebDesign'));
const Automation = lazy(() => import('./services/Automation'));
const SocialMedia = lazy(() => import('./services/SocialMedia'));
const AdsManagement = lazy(() => import('./services/AdsManagement'));
const EcomHelp = lazy(() => import('./services/EcomHelp'));
const Branding = lazy(() => import('./services/Branding'));

// Legal Pages
const CookiePolicy = lazy(() => import('./legal/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./legal/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./legal/TermsAndConditions'));

// Founder Pages
const MohitSingh = lazy(() => import('./pages/founder/MohitSingh'));
const HarshAggarwal = lazy(() => import('./pages/founder/HarshAggarwal'));

// System Pages
const Sitemap = lazy(() => import('./pages/system/Sitemap'));
const ComingSoon = lazy(() => import('./pages/system/ComingSoon'));
const NotFound = lazy(() => import('./pages/system/NotFound'));

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

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
      {!isComingSoonPage && <Navbar />}

      <main style={{ flex: 1, marginTop: isComingSoonPage ? '0' : '48px' }}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/ads-management" element={<AdsManagement />} />
            <Route path="/services/ecommerce-help" element={<EcomHelp />} />
            <Route path="/services/branding" element={<Branding />} />

            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="/mohit-singh" element={<MohitSingh />} />
            <Route path="/harsh-aggarwal" element={<HarshAggarwal />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/services/soon" element={<ComingSoon pageName="New Services" />} />
            <Route path="/community" element={<ComingSoon pageName="TMMT Community" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {!isComingSoonPage && <Footer />}

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
