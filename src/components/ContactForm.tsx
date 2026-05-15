import React, { useState } from 'react';
import { submitForm } from '../form/formService';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await submitForm('contact', {
        ...formData,
        subject: `New Inquiry from ${formData.name}`,
      });
      if (res.success) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f5f5f7', borderRadius: '24px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 600 }}>Message Sent.</h3>
        <p style={{ color: '#86868b', marginTop: '10px' }}>We'll get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ marginTop: '20px', color: '#0071e3', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label style={labelStyle}>Full Name</label>
        <input 
          type="text" 
          required 
          style={inputStyle} 
          placeholder="Rahul Singh"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div>
        <label style={labelStyle}>Email Address</label>
        <input 
          type="email" 
          required 
          style={inputStyle} 
          placeholder="rahul@example.com"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div>
        <label style={labelStyle}>How can we help?</label>
        <textarea 
          required 
          rows={5} 
          style={{ ...inputStyle, resize: 'none' }} 
          placeholder="Tell us about your project..."
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      
      {status === 'error' && <p style={{ color: '#ff3b30', fontSize: '14px' }}>Something went wrong. Please try again.</p>}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        style={{
          padding: '16px 32px',
          borderRadius: '980px',
          backgroundColor: '#0071e3',
          color: '#fff',
          border: 'none',
          fontSize: '17px',
          fontWeight: 600,
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? 0.7 : 1
        }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// Styles
const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#1d1d1f' };
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #d2d2d7',
  fontSize: '16px',
  boxSizing: 'border-box',
  outline: 'none',
  backgroundColor: '#fff'
};

export default ContactForm;