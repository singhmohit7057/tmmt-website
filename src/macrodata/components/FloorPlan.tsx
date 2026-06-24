import { Link } from 'react-router-dom';
import { useAllRooms } from '../hooks/useAllRooms';
import type { RoomInfo } from '../hooks/useAllRooms';

// ── palette ─────────────────────────────────────────────────────────
const C = {
  ground:    '#0a0907',
  floor:     '#eae5db',
  floorHall: '#fdfaf4',
  floorLegal:'#e2ddd3',
  wallS:     '#c4bdb0',   // south wall (faces viewer)
  wallE:     '#b0a99c',   // east wall (right side)
  wallSHall: '#d4cdb8',
  wallEHall: '#c0b9a8',
  wallSAct:  '#9bbdd6',
  wallEAct:  '#89adc6',
  accent:    '#0071e3',
  green:     '#34c759',
  label:     '#7a7468',
  labelAct:  '#0071e3',
  meta:      '#3a3530',
};

const WALL = 22;   // wall height in px
const GAP  = 3;    // gap between rooms
const ROW  = 100;  // row height

// ── grid definition ──────────────────────────────────────────────────
// 5 cols × 5 rows
// empty cell (col 3, row 1) left as a dark void
const GRID_AREAS = `
  "mohit    careers   .        contact   harsh"
  "about    hall      hall     hall      services"
  "web      hall      hall     hall      corporate"
  "workflow hall      hall     hall      paid"
  "market   privacy   terms    cookies   social"
`;

interface RoomDef {
  key:    string;
  area:   string;
  label:  string;
  desc:   string;
  isHall?: boolean;
  isLegal?:boolean;
  path:   string;
}

const DEFS: RoomDef[] = [
  { key: 'mohit-singh',          area: 'mohit',     label: 'SUITE A',        desc: 'Mohit Singh',   path: '/mohit-singh' },
  { key: 'careers',              area: 'careers',   label: 'CAREERS',        desc: 'Talent',        path: '/careers' },
  { key: 'contact',              area: 'contact',   label: 'RECEPTION',      desc: 'Contact',       path: '/contact' },
  { key: 'harsh-aggarwal',       area: 'harsh',     label: 'SUITE B',        desc: 'Harsh Aggarwal',path: '/harsh-aggarwal' },
  { key: 'about',                area: 'about',     label: 'VISITOR LOUNGE', desc: 'About',         path: '/about' },
  { key: 'home',                 area: 'hall',      label: 'GRAND HALL',     desc: 'Home',          path: '/', isHall: true },
  { key: 'services',             area: 'services',  label: 'GALLERY',        desc: 'Services',      path: '/services' },
  { key: 'web-design',           area: 'web',       label: 'WORKSHOP I',     desc: 'Web Design',    path: '/services/web-design' },
  { key: 'branding',             area: 'corporate', label: 'SHOWROOM',       desc: 'Branding',      path: '/services/branding' },
  { key: 'automation',           area: 'workflow',  label: 'WORKSHOP II',    desc: 'Automation',    path: '/services/automation' },
  { key: 'ads-management',       area: 'paid',      label: 'WAR ROOM',       desc: 'Paid Ads',      path: '/services/ads-management' },
  { key: 'ecommerce-help',       area: 'market',    label: 'MARKETPLACE',    desc: 'Ecommerce',     path: '/services/ecommerce-help' },
  { key: 'privacy-policy',       area: 'privacy',   label: 'PRIVACY',        desc: '',              path: '/privacy-policy',        isLegal: true },
  { key: 'terms-and-conditions', area: 'terms',     label: 'TERMS',          desc: '',              path: '/terms-and-conditions',  isLegal: true },
  { key: 'cookie-policy',        area: 'cookies',   label: 'COOKIES',        desc: '',              path: '/cookie-policy',         isLegal: true },
  { key: 'social-media',         area: 'social',    label: 'BROADCAST',      desc: 'Social',        path: '/services/social-media' },
];

// ── Room ─────────────────────────────────────────────────────────────
function Room({ def, count }: { def: RoomDef; count: number }) {
  const isActive = count > 0;
  const isHall   = def.isHall ?? false;
  const isLegal  = def.isLegal ?? false;

  const floorBg = isHall ? C.floorHall : isLegal ? C.floorLegal : C.floor;
  const wallS   = isActive ? C.wallSAct : isHall ? C.wallSHall : C.wallS;
  const wallE   = isActive ? C.wallEAct : isHall ? C.wallEHall : C.wallE;

  return (
    // Wrapper: sits inside grid cell, preserves 3D, elevates with translateZ
    <div style={{
      gridArea:        def.area,
      position:        'relative',
      transformStyle:  'preserve-3d',
      transform:       `translateZ(${WALL}px)`,
      cursor:          'pointer',
      height:          '100%',
    }}>
      <Link to={def.path} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>

        {/* ── Top face (floor) ── */}
        <div style={{
          width:           '100%',
          height:          '100%',
          backgroundColor: floorBg,
          boxSizing:       'border-box',
          padding:         isLegal ? '8px 10px' : '12px 14px',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  isHall || isLegal ? 'center' : 'space-between',
          alignItems:      isLegal ? 'center' : 'flex-start',
          position:        'relative',
          overflow:        'hidden',
        }}>

          {/* Active accent line on top */}
          {isActive && !isLegal && (
            <div style={{
              position:        'absolute',
              top: 0, left: 0, right: 0,
              height:          2,
              backgroundColor: C.accent,
            }} />
          )}

          {isHall ? (
            /* Grand Hall — dome + label centered */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                border: `2px solid ${isActive ? '#c9a84c' : '#cfc8b5'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', width: 48, height: 48, borderRadius: '50%',
                  border: `1px dashed ${isActive ? '#c9a84c' : '#cfc8b5'}`,
                }} />
                {isActive && <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.green, display: 'block', animation: 'fp-pulse 2s infinite' }} />}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '2.5px', color: isActive ? '#c9a84c' : '#9c9487' }}>{def.label}</div>
                <div style={{ fontSize: 11, color: C.label, marginTop: 2 }}>{def.desc}</div>
                {isActive && <div style={{ fontSize: 9, color: C.green, fontWeight: 700, marginTop: 5 }}>{count} {count === 1 ? 'visitor' : 'visitors'} live</div>}
              </div>
            </div>
          ) : isLegal ? (
            /* Legal room — just a centered label */
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 8, fontWeight: 800, letterSpacing: '1.6px', color: isActive ? C.accent : '#a09890' }}>{def.label}</div>
              {isActive && <div style={{ fontSize: 8, color: C.green, fontWeight: 700, marginTop: 3 }}>{count} live</div>}
            </div>
          ) : (
            /* Normal room */
            <>
              <div>
                <div style={{ fontSize: 8, fontWeight: 800, letterSpacing: '1.8px', color: isActive ? C.labelAct : C.label, lineHeight: 1, marginBottom: 4 }}>{def.label}</div>
                <div style={{ fontSize: 11, color: C.label }}>{def.desc}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {isActive ? (
                  <>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.green, display: 'inline-block', animation: 'fp-pulse 2s infinite', flexShrink: 0 }} />
                    <span style={{ fontSize: 9, color: C.green, fontWeight: 700 }}>{count} live</span>
                  </>
                ) : (
                  <span style={{ fontSize: 9, color: '#b5afa6' }}>&mdash;</span>
                )}
              </div>
            </>
          )}
        </div>

        {/* ── South wall (bottom face, visible to viewer) ── */}
        <div style={{
          position:        'absolute',
          top:             '100%',
          left:            0,
          right:           0,
          height:          WALL,
          backgroundColor: wallS,
          transform:       `rotateX(-90deg)`,
          transformOrigin: 'top center',
          pointerEvents:   'none',
        }} />

        {/* ── East wall (right face) ── */}
        <div style={{
          position:        'absolute',
          top:             0,
          bottom:          0,
          left:            '100%',
          width:           WALL,
          backgroundColor: wallE,
          transform:       'rotateY(90deg)',
          transformOrigin: 'left center',
          pointerEvents:   'none',
        }} />

      </Link>
    </div>
  );
}

// ── Floor Plan ────────────────────────────────────────────────────────
export default function FloorPlan() {
  const rooms    = useAllRooms();
  const roomMap  = new Map<string, RoomInfo>(rooms.map(r => [r.room, r]));
  const totalLive = rooms.reduce((s, r) => s + r.count, 0);

  return (
    <div>
      <style>{`
        @keyframes fp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.78); }
        }
      `}</style>

      {/* Live indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          backgroundColor: totalLive > 0 ? C.green : '#555',
          display: 'inline-block',
          animation: totalLive > 0 ? 'fp-pulse 2s infinite' : 'none',
        }} />
        <span style={{ fontSize: 14, color: '#6e6e73', fontWeight: 500 }}>
          {totalLive > 0 ? `${totalLive} ${totalLive === 1 ? 'person' : 'people'} on tmmt.in right now` : 'No one online right now'}
        </span>
      </div>

      {/* Blueprint shell */}
      <div style={{
        backgroundColor: C.ground,
        borderRadius:    12,
        padding:         '12px 12px 14px',
        maxWidth:        900,
        boxSizing:       'border-box',
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, padding: '0 2px' }}>
          <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '2px', color: C.meta }}>
            TMMT HEADQUARTERS &middot; LIVE FLOOR PLAN
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 9, color: C.meta, lineHeight: 1 }}>&#8593;</span>
            <span style={{ fontSize: 7, color: C.meta, fontWeight: 700, letterSpacing: 1 }}>N</span>
          </div>
        </div>

        {/* 3D perspective wrapper */}
        <div style={{
          perspective:       '1100px',
          perspectiveOrigin: '50% 40%',
          overflow:          'visible',
        }}>
          <div style={{
            transform:       'rotateX(50deg)',
            transformOrigin: '50% 50%',
            transformStyle:  'preserve-3d',
          }}>
            {/* Grid */}
            <div style={{
              display:             'grid',
              gridTemplateAreas:   GRID_AREAS,
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridTemplateRows:    `repeat(5, ${ROW}px)`,
              gap:                 GAP,
              transformStyle:      'preserve-3d',
            }}>
              {DEFS.map(def => (
                <Room
                  key={def.key}
                  def={def}
                  count={roomMap.get(def.key)?.count ?? 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14, padding: '0 2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.green, display: 'inline-block' }} />
            <span style={{ fontSize: 7, color: C.meta, letterSpacing: '1.2px' }}>OCCUPIED</span>
          </div>
          <span style={{ fontSize: 7, color: C.meta, letterSpacing: '1.2px' }}>&mdash; VACANT</span>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 7, color: C.meta, letterSpacing: '1.2px' }}>CLICK ANY ROOM TO ENTER</span>
        </div>
      </div>
    </div>
  );
}
