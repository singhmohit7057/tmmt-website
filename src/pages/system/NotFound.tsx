import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';


const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    backgroundColor: '#fff',
    color: '#1d1d1f'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 28px',
    borderRadius: '980px',
    backgroundColor: '#0071e3',
    color: '#fff',
    border: 'none',
    fontSize: '17px',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'opacity 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <SEO 
        title="404 | Page Not Found"
        description="The page you’re looking for might have been moved, deleted, or perhaps it never existed in this dimension."
        path="/404"
        ogImage="/tmmt-logo.png"
      />

      <h1 style={{ fontSize: '120px', fontWeight: 700, margin: 0, opacity: 0.1 }}>404</h1>
      <h2 style={{ fontSize: '40px', fontWeight: 600, marginTop: '-40px' }}>
        The page you’re looking for can’t be found.
      </h2>
      <p style={{ fontSize: '19px', color: '#86868b', maxWidth: '500px', lineHeight: '1.5' }}>
        It might have been moved, deleted, or perhaps it never existed in this dimension.
      </p>
      <button 
        style={buttonStyle} 
        onClick={() => navigate('/')}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;