import React from 'react';
import { usePresence } from '../hooks/usePresence';

interface PresenceBadgeProps {
  room: string;
}

const PresenceBadge: React.FC<PresenceBadgeProps> = ({ room }) => {
  const { count } = usePresence(room);

  if (count === 0) return null;

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: '100px',
      backgroundColor: 'rgba(0, 113, 227, 0.08)',
      border: '1px solid rgba(0, 113, 227, 0.15)',
      fontSize: '13px',
      fontWeight: 500,
      color: '#0071e3',
      userSelect: 'none',
    }}>
      <span style={{
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: '#28c840',
        display: 'inline-block',
        animation: 'tmmt-pulse 2s infinite',
      }} />
      {count} {count === 1 ? 'person' : 'people'} here
      <style>{`
        @keyframes tmmt-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default PresenceBadge;
