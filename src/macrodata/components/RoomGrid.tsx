import React from 'react';
import { Link } from 'react-router-dom';
import { useAllRooms } from '../hooks/useAllRooms';
import type { RoomInfo } from '../hooks/useAllRooms';

const COLORS = {
  text: '#1d1d1f',
  subtext: '#6e6e73',
  accent: '#0071e3',
  bg: '#f5f5f7',
  white: '#ffffff',
  border: '#d2d2d7',
  green: '#28c840',
  dimmed: '#a1a1a6',
};

const RoomCard: React.FC<{ room: RoomInfo }> = ({ room }) => {
  const isActive = room.count > 0;

  return (
    <Link
      to={room.path}
      style={{ textDecoration: 'none' }}
    >
      <div style={{
        backgroundColor: isActive ? COLORS.white : COLORS.bg,
        border: `1px solid ${isActive ? 'rgba(0,113,227,0.2)' : COLORS.border + '55'}`,
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isActive ? '0 4px 20px rgba(0,113,227,0.08)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Active glow strip */}
        {isActive && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: COLORS.accent,
            borderRadius: '20px 20px 0 0',
          }} />
        )}

        {/* Room label + live dot */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            color: isActive ? COLORS.accent : COLORS.dimmed,
          }}>
            {room.label}
          </span>
          {isActive && (
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: COLORS.green,
              display: 'inline-block',
              animation: 'tmmt-pulse 2s infinite',
            }} />
          )}
        </div>

        {/* Avatar row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', minHeight: '28px' }}>
          {isActive ? (
            <>
              {Array.from({ length: Math.min(room.count, 5) }).map((_, i) => (
                <div key={i} style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: `hsl(${(i * 47 + 200) % 360}, 60%, 65%)`,
                  border: `2px solid ${COLORS.white}`,
                  marginLeft: i > 0 ? '-8px' : '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: '#fff',
                  fontWeight: 700,
                }}>
                  {String.fromCharCode(65 + (i * 7) % 26)}
                </div>
              ))}
              {room.count > 5 && (
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.bg,
                  border: `2px solid ${COLORS.border}`,
                  marginLeft: '-8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: COLORS.subtext,
                  fontWeight: 600,
                }}>
                  +{room.count - 5}
                </div>
              )}
            </>
          ) : (
            <span style={{ fontSize: '13px', color: COLORS.dimmed }}>No one here</span>
          )}
        </div>

        {/* Count */}
        <div style={{
          fontSize: '13px',
          color: isActive ? COLORS.subtext : COLORS.dimmed,
          fontWeight: 500,
        }}>
          {isActive
            ? `${room.count} ${room.count === 1 ? 'visitor' : 'visitors'} live`
            : 'Empty right now'}
        </div>
      </div>
      <style>{`
        @keyframes tmmt-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Link>
  );
};

const RoomGrid: React.FC = () => {
  const rooms = useAllRooms();
  const totalLive = rooms.reduce((sum, r) => sum + r.count, 0);

  return (
    <div>
      {/* Live total */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '32px',
      }}>
        <span style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: totalLive > 0 ? COLORS.green : COLORS.dimmed,
          display: 'inline-block',
          animation: totalLive > 0 ? 'tmmt-pulse 2s infinite' : 'none',
        }} />
        <span style={{ fontSize: '15px', color: COLORS.subtext, fontWeight: 500 }}>
          {totalLive > 0
            ? `${totalLive} ${totalLive === 1 ? 'person' : 'people'} on tmmt.in right now`
            : 'No one online right now'}
        </span>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
      }}>
        {rooms.map(room => (
          <RoomCard key={room.room} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomGrid;
