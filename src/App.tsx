import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Added useLocation
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

// Main Pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Service Pages
import WebDesign from './services/WebDesign';
import Automation from './services/Automation';
import SocialMedia from './services/SocialMedia';
import AdsManagement from './services/AdsManagement';
import EcomHelp from './services/EcomHelp';
import Branding from './services/Branding';

// System Pages
import ComingSoon from './pages/system/ComingSoon';
import NotFound from './pages/system/NotFound';

const App: React.FC = () => {
  const location = useLocation();
  
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

          {/* Nested Service Routes */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/social" element={<SocialMedia />} />
          <Route path="/services/ads" element={<AdsManagement />} />
          <Route path="/services/ecom" element={<EcomHelp />} />
          <Route path="/services/branding" element={<Branding />} />

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
    </div>
  );
};

export default App;