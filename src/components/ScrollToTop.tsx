import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force browser window context to snap directly to the top left margin
    window.scrollTo(0, 0);
  }, [pathname]); // Fires seamlessly on every single route change

  return null; // Zero layout overhead
};

export default ScrollToTop;