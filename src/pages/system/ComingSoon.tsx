import React, { useState } from 'react';
import { submitForm } from '../../form/formService';

// Define props to distinguish between different "Coming Soon" instances
interface ComingSoonProps {
  pageName?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ pageName = "TMMT" }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const COLORS = {
    text: '#1d1d1f',
    subtext: '#86868b',
    accent: '#0071e3',
    bg: '#f5f5f7'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Logic uses the 'notify' key from your formService.ts
      const res = await submitForm('notify', {
        email: email,
        // page_source helps you distinguish signups in your Google Sheet
        page_source: pageName,
        subject: `Waitlist Signup: ${pageName}`,
        message: `New subscriber interested in ${pageName}.`,
      });

      if (res.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
    }
  };

  const containerStyle: React.CSSProperties = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(0, 113, 227, 0.05) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(0, 113, 227, 0.03) 0px, transparent 50%)
    `,
    textAlign: 'center',
    padding: '0 24px',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <div style={{
        padding: '60px 40px',
        borderRadius: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        maxWidth: '640px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)'
      }}>
        <img src="/logo.png" alt="TMMT" style={{ height: '48px', marginBottom: '32px' }} />
        
        <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.04em', margin: '0 0 16px' }}>
          {pageName} is almost here.
        </h1>
        
        <p style={{ fontSize: '19px', color: COLORS.subtext, lineHeight: '1.5', marginBottom: '40px' }}>
          We are engineering a space for founders and creators. Join the waitlist to be notified first.
        </p>

        {status === 'success' ? (
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '16px', border: `1px solid ${COLORS.accent}` }}>
            <h3 style={{ color: COLORS.accent, margin: '0 0 5px' }}>You're on the list.</h3>
            <p style={{ color: COLORS.subtext, margin: 0 }}>We'll reach out as soon as the {pageName} hub goes live.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '18px 24px',
                borderRadius: '16px',
                border: '1px solid #d2d2d7',
                fontSize: '17px',
                width: '100%',
                boxSizing: 'border-box',
                marginBottom: '16px',
                outline: 'none',
                backgroundColor: '#fff'
              }}
            />
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              style={{
                padding: '18px 32px',
                borderRadius: '16px',
                backgroundColor: COLORS.accent,
                color: '#fff',
                border: 'none',
                fontSize: '17px',
                fontWeight: 600,
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                width: '100%',
                opacity: status === 'submitting' ? 0.7 : 1,
                transition: 'all 0.2s ease'
              }}
            >
              {status === 'submitting' ? 'Engineering...' : `Join ${pageName} Waitlist`}
            </button>
            {status === 'error' && (
              <p style={{ color: '#ff3b30', fontSize: '13px', marginTop: '10px' }}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
        
        <p style={{ fontSize: '13px', color: COLORS.subtext, marginTop: '20px' }}>
          No spam. Just engineering and {pageName} updates.
        </p>
      </div>

      <div style={{ position: 'absolute', bottom: '85px', fontSize: '13px', color: COLORS.subtext }}>
        © {new Date().getFullYear()} TMMT. Engineered with intent.
      </div>
    </div>
  );
};

export default ComingSoon;