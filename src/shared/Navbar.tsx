import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 22px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    zIndex: 1000,
    boxSizing: 'border-box'
  };

  const linkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    marginLeft: '30px',
    cursor: 'pointer',
    color: isActive ? '#000' : '#515154',
    fontSize: '12px',
    fontWeight: isActive ? 600 : 400,
    textDecoration: 'none',
    letterSpacing: '-0.01em',
    transition: 'color 0.2s ease'
  });

  return (
    <nav style={navStyle}>
      {/* 1. 'to="/"' handles the click redirect to homepage.
          2. 'title' displays the full name when the mouse hovers over the logo.
      */}
      <Link 
        to="/" 
        title="The Mad Mystery Team" 
        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
      >
        <img
          src="/logo.png"
          alt="TMMT Logo"
          width="24"
          height="24"
          style={{ height: '24px', width: 'auto', marginRight: '8px' }}
        />
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f' }}>TMMT</span>
      </Link>
      
      <div style={{ display: 'flex' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;