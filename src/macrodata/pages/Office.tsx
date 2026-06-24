import React from 'react';
import Office3D from '../components/Office3D';

const Office: React.FC = () => {
  return (
    <>
      <style>{`
        .office-page {
          width: 100%;
          height: calc(100vh - 48px);
          background: #ffffff;
          font-family: system-ui, -apple-system, sans-serif;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-sizing: border-box;
        }
        .office-text {
          width: 28%;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0 0 5%;
          flex-shrink: 0;
        }
        .office-canvas-wrap {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 4% 24px 2%;
        }
        .office-canvas-inner {
          width: 100%;
          height: 100%;
          max-width: calc((100vh - 96px) * 4 / 3);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 40px rgba(0,0,0,0.12);
        }
        @media (max-width: 640px) {
          .office-page {
            flex-direction: column;
            height: calc(100vh - 48px);
            overflow: hidden;
          }
          .office-text {
            width: 100%;
            min-width: 0;
            padding: 20px 20px 14px;
            justify-content: flex-start;
            flex-shrink: 0;
          }
          .office-canvas-wrap {
            flex: 1;
            min-height: 0;
            padding: 0;
            align-items: stretch;
          }
          .office-canvas-inner {
            width: 100%;
            height: 100%;
            max-width: 100%;
            aspect-ratio: unset;
            border-radius: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="office-page">
        {/* Left / Top — text */}
        <div className="office-text">
          <span style={{
            color: '#0071e3',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontSize: '11px',
          }}>
            Live Activity
          </span>
          <h1 style={{
            fontSize: 'clamp(28px, 3vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            margin: '10px 0 12px',
            lineHeight: 1.06,
            color: '#1d1d1f',
          }}>
            The Office.
          </h1>
          <p style={{
            fontSize: 14,
            color: '#6e6e73',
            lineHeight: 1.6,
            maxWidth: 280,
            margin: 0,
          }}>
            A live 3D floor plan of TMMT HQ. Each room is a page — click to enter.
          </p>
        </div>

        {/* Right / Bottom — 3D canvas */}
        <div className="office-canvas-wrap">
          <div className="office-canvas-inner">
            <Office3D />
          </div>
        </div>
      </div>
    </>
  );
};

export default Office;
