import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { useAllRooms } from '../hooks/useAllRooms';
import type { RoomInfo } from '../hooks/useAllRooms';

// ─── Grid constants ──────────────────────────────────────────────────
const CS = 2.5;
const CL = 3.5;
const OW = CL + CS * 1.5;   // 7.25
const WT = 0.22;
const WH = 1.0;
const WY = WH / 2;

const col  = (c: 1|2|3|4|5): number => [-OW + CL/2, -CS, 0, CS, OW - CL/2][c-1];
const row  = (r: 1|2|3|4|5): number => [-OW + CL/2, -CS, 0, CS, OW - CL/2][r-1];
const colW = (c: 1|2|3|4|5) => (c === 1 || c === 5) ? CL : CS;
const rowD = (r: 1|2|3|4|5) => (r === 1 || r === 5) ? CL : CS;

// Partition boundaries
const DX = [-3.75, -1.25, 1.25, 3.75];
const DZ = [-3.75, -1.25, 1.25, 3.75];

// ─── Room definitions ────────────────────────────────────────────────
const ROOMS = [
  { key: 'mohit-singh',          c: 1 as const, r: 1 as const, label: 'SUITE A',        sub: 'Mohit Singh',    path: '/mohit-singh' },
  { key: 'careers',              c: 2 as const, r: 1 as const, label: 'CAREERS',         sub: 'Talent',         path: '/careers' },
  { key: 'contact',              c: 4 as const, r: 1 as const, label: 'RECEPTION',       sub: 'Contact',        path: '/contact' },
  { key: 'harsh-aggarwal',       c: 5 as const, r: 1 as const, label: 'SUITE B',         sub: 'Harsh Aggarwal', path: '/harsh-aggarwal' },
  { key: 'about',                c: 1 as const, r: 2 as const, label: 'MARKETPLACE',     sub: 'Ecommerce',      path: '/services/ecommerce-help' },
  { key: 'web-design',           c: 1 as const, r: 3 as const, label: 'WORKSHOP I',      sub: 'Web Design',     path: '/services/web-design' },
  { key: 'automation',           c: 1 as const, r: 4 as const, label: 'WORKSHOP II',     sub: 'Automation',     path: '/services/automation' },
  { key: 'services',             c: 5 as const, r: 2 as const, label: 'BROADCAST',       sub: 'Social',         path: '/services/social-media' },
  { key: 'branding',             c: 5 as const, r: 3 as const, label: 'SHOWROOM',        sub: 'Branding',       path: '/services/branding' },
  { key: 'ads-management',       c: 5 as const, r: 4 as const, label: 'WAR ROOM',        sub: 'Paid Ads',       path: '/services/ads-management' },
  { key: 'ecommerce-help',       c: 1 as const, r: 5 as const, label: 'VISITOR LOUNGE',  sub: 'About',          path: '/about' },
  { key: 'privacy-policy',       c: 2 as const, r: 5 as const, label: 'PRIVACY',         sub: '',               path: '/privacy-policy' },
  { key: 'terms-and-conditions', c: 3 as const, r: 5 as const, label: 'TERMS',           sub: '',               path: '/terms-and-conditions' },
  { key: 'cookie-policy',        c: 4 as const, r: 5 as const, label: 'COOKIES',         sub: '',               path: '/cookie-policy' },
  { key: 'social-media',         c: 5 as const, r: 5 as const, label: 'GALLERY',         sub: 'Services',       path: '/services' },
];

// ─── Palette ─────────────────────────────────────────────────────────
const FLOOR   = '#ebe6dc';
const FLOOR_H = '#fdfaf4';
const FLOOR_L = '#dedad0';
const WALL_C  = '#c4bdb2';
const WALL_I  = '#aaa49a';
const WIN_C   = '#7aadcf';
const DOOR_C  = '#5c4433';
const GROUND  = '#1a1814';
const GREEN   = '#34c759';

// ─── Primitives ──────────────────────────────────────────────────────
function Box({ p, s, c, op = 1 }: {
  p: [number,number,number]; s: [number,number,number]; c: string; op?: number;
}) {
  return (
    <mesh position={p}>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} roughness={0.45} transparent={op < 1} opacity={op} />
    </mesh>
  );
}

function OuterWallSeg({ pos, len, axis, hasDoor = false }: {
  pos: [number,number,number]; len: number; axis: 'x'|'z'; hasDoor?: boolean;
}) {
  const [px, py, pz] = pos;
  const thick = WT;
  const h = WH;
  const openW = hasDoor ? 0.75 : 0.5;
  const sideW = (len - openW) / 2;

  const W = (ext: number, t: number): [number,number,number] =>
    axis === 'x' ? [ext, h, t] : [t, h, ext];
  const P = (off: number): [number,number,number] =>
    axis === 'x' ? [px + off, py, pz] : [px, py, pz + off];

  return (
    <group>
      <Box p={P(-(openW / 2 + sideW / 2))} s={W(sideW, thick)} c={WALL_C} />
      <Box p={P(+(openW / 2 + sideW / 2))} s={W(sideW, thick)} c={WALL_C} />
      {hasDoor ? (
        <Box
          p={[px, WY - h/2 + h * 0.44, pz]}
          s={axis === 'x' ? [openW - 0.04, h * 0.88, thick + 0.02] : [thick + 0.02, h * 0.88, openW - 0.04]}
          c={DOOR_C}
        />
      ) : (
        <>
          <Box p={[px, WY - h/2 + h * 0.18, pz]} s={axis === 'x' ? [openW, h * 0.36, thick] : [thick, h * 0.36, openW]} c={WALL_C} />
          <Box p={[px, WY - h/2 + h * 0.55, pz]} s={axis === 'x' ? [openW - 0.04, h * 0.38, thick + 0.02] : [thick + 0.02, h * 0.38, openW - 0.04]} c={WIN_C} op={0.75} />
          <Box p={[px, WY - h/2 + h * 0.87, pz]} s={axis === 'x' ? [openW, h * 0.26, thick] : [thick, h * 0.26, openW]} c={WALL_C} />
        </>
      )}
    </group>
  );
}

function InnerDoor({ cx, cz, axis, cellW = CS }: {
  cx: number; cz: number; axis: 'x'|'z'; cellW?: number;
}) {
  const h = WH;
  const dw = 0.55;
  const dh = WH * 0.68;
  const side = (cellW - dw) / 2;
  const lintH = h - dh;
  const P = (off: number): [number,number,number] =>
    axis === 'x' ? [cx + off, h / 2, cz] : [cx, h / 2, cz + off];
  const S = (ext: number): [number,number,number] =>
    axis === 'x' ? [ext, h, WT] : [WT, h, ext];
  return (
    <group>
      <Box p={P(-(dw / 2 + side / 2))} s={S(side)} c={WALL_I} />
      <Box p={P(+(dw / 2 + side / 2))} s={S(side)} c={WALL_I} />
      <Box p={[cx, dh + lintH / 2, cz]} s={axis === 'x' ? [dw, lintH, WT] : [WT, lintH, dw]} c={WALL_I} />
      <Box p={[cx, dh / 2, cz]} s={axis === 'x' ? [dw - 0.04, dh, 0.04] : [0.04, dh, dw - 0.04]} c={DOOR_C} op={0.85} />
    </group>
  );
}

function Dot({ ox, oz, i }: { ox: number; oz: number; i: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.position.y = 0.38 + Math.sin(Date.now() * 0.002 + i * 1.4) * 0.07;
  });
  const clr = `hsl(${(i * 67 + 200) % 360},65%,62%)`;
  return (
    <mesh ref={ref} position={[ox + (i % 3 - 1) * 0.22, 0.38, oz + Math.floor(i / 3) * 0.22]}>
      <sphereGeometry args={[0.085, 8, 8]} />
      <meshStandardMaterial color={clr} emissive={clr} emissiveIntensity={0.55} roughness={0.2} />
    </mesh>
  );
}

function RoomTile({ x, z, w, d, floorColor, label, sub, count, isHall, onClick }: {
  x: number; z: number; w: number; d: number;
  floorColor: string; label: string; sub: string;
  count: number; isHall: boolean; onClick: () => void;
}) {
  const [hov, setHov] = useState(false);
  const active = count > 0;
  return (
    <group>
      <mesh
        position={[x, 0.006, z]}
        onPointerOver={e => { e.stopPropagation(); setHov(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHov(false); document.body.style.cursor = 'auto'; }}
        onClick={e => { e.stopPropagation(); onClick(); }}
      >
        <boxGeometry args={[w - 0.1, 0.012, d - 0.1]} />
        <meshStandardMaterial color={hov ? '#ffffff' : floorColor} roughness={0.35} />
      </mesh>
      <Html position={[x, 0.02, isHall ? z + 3.7 : z]} center style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ background: 'transparent', textAlign: 'center', width: isHall ? 120 : 80, transform: 'translateY(-50%)' }}>
          <div style={{ fontSize: isHall ? 9 : 7, fontWeight: 800, letterSpacing: '1.6px', color: active ? (isHall ? '#c9a84c' : '#0071e3') : '#9a9490', fontFamily: 'system-ui', lineHeight: 1.2, textTransform: 'uppercase' }}>
            {label}
          </div>
          {sub && <div style={{ fontSize: 6, color: active ? '#aaa' : '#777', fontFamily: 'system-ui', marginTop: 2 }}>{sub}</div>}
          {active && <div style={{ fontSize: 7, color: GREEN, fontWeight: 700, fontFamily: 'system-ui', marginTop: 3 }}>{count} live</div>}
        </div>
      </Html>
      {count > 0 && Array.from({ length: Math.min(count, 6) }).map((_, i) => (
        <Dot key={i} ox={x} oz={z} i={i} />
      ))}
    </group>
  );
}


function TVScreen() {
  const texture = React.useMemo(() => new THREE.TextureLoader().load('/tmmt-logo.webp'), []);
  return (
    <mesh position={[0, 0.78, 1.73]}>
      <boxGeometry args={[1.48, 0.82, 0.02]} />
      <meshStandardMaterial map={texture} roughness={0.3} />
    </mesh>
  );
}

function GrandHallFurniture() {
  const SOFA    = '#7a6652';
  const CUSHION = '#9a8268';
  const WOOD    = '#c4a97a';
  const DARK    = '#2e2a26';

  return (
    <group>
      {/* ── TV unit (south side) ── */}
      <Box p={[0, 0.18,  1.7]} s={[1.3, 0.36, 0.38]} c={DARK} />
      <Box p={[0, 0.78,  1.76]} s={[1.55, 0.88, 0.07]} c={DARK} />
      <TVScreen />
      <Box p={[0, 0.37,  1.72]} s={[0.12, 0.04, 0.04]} c={DARK} />

      {/* ── Coffee table ── */}
      <Box p={[0, 0.32, 0.2]} s={[0.95, 0.05, 0.45]} c={WOOD} />
      <Box p={[-0.42, 0.16, 0.08]} s={[0.05, 0.32, 0.05]} c={WOOD} />
      <Box p={[ 0.42, 0.16, 0.08]} s={[0.05, 0.32, 0.05]} c={WOOD} />
      <Box p={[-0.42, 0.16, 0.32]} s={[0.05, 0.32, 0.05]} c={WOOD} />
      <Box p={[ 0.42, 0.16, 0.32]} s={[0.05, 0.32, 0.05]} c={WOOD} />

      {/* ── Sofa (facing south toward TV) ── */}
      <Box p={[0, 0.22, -0.75]} s={[1.55, 0.2, 0.6]} c={SOFA} />
      <Box p={[0, 0.52, -1.02]} s={[1.55, 0.48, 0.18]} c={SOFA} />
      <Box p={[-0.72, 0.38, -0.75]} s={[0.14, 0.32, 0.6]} c={SOFA} />
      <Box p={[ 0.72, 0.38, -0.75]} s={[0.14, 0.32, 0.6]} c={SOFA} />
      <Box p={[-0.35, 0.34, -0.72]} s={[0.58, 0.1, 0.52]} c={CUSHION} />
      <Box p={[ 0.35, 0.34, -0.72]} s={[0.58, 0.1, 0.52]} c={CUSHION} />
      <Box p={[-0.35, 0.54, -0.95]} s={[0.58, 0.38, 0.1]} c={CUSHION} />
      <Box p={[ 0.35, 0.54, -0.95]} s={[0.58, 0.38, 0.1]} c={CUSHION} />
    </group>
  );
}

function SceneBg() {
  const { scene } = useThree();
  React.useEffect(() => { scene.background = new THREE.Color(GROUND); }, [scene]);
  return null;
}

// ─── Building ────────────────────────────────────────────────────────
function Building({ roomMap, onNav }: { roomMap: Map<string,RoomInfo>; onNav: (p:string) => void }) {
  const cnt = (key: string) => roomMap.get(key)?.count ?? 0;

  return (
    <group>
      {/* Ground slab */}
      <Box p={[0, -0.07, 0]} s={[OW*2 + 0.3, 0.14, OW*2 + 0.3]} c='#141210' />
      <Box p={[0, 0, 0]} s={[OW*2, 0.012, OW*2]} c='#1a1714' />

      {/* Room floor tiles */}
      {ROOMS.map(rm => {
        const isLegal  = rm.r === 5 && rm.c >= 2 && rm.c <= 4;
        const isFoyer  = rm.r === 1 && (rm.c === 2 || rm.c === 4);
        const isSmallS = rm.r === 5 && rm.c >= 2 && rm.c <= 4;  // only Privacy/Terms/Cookies
        const tileZ = isFoyer ? -6.25 : isSmallS ? 6.25 : row(rm.r);
        const tileD = isFoyer ? 2.0 : isSmallS ? 2.0 : rowD(rm.r);
        return (
          <RoomTile
            key={rm.key}
            x={col(rm.c)} z={tileZ}
            w={colW(rm.c)} d={tileD}
            floorColor={isLegal ? FLOOR_L : FLOOR}
            label={rm.label} sub={rm.sub}
            count={cnt(rm.key)} isHall={false}
            onClick={() => onNav(rm.path)}
          />
        );
      })}

      {/* col3 row1 — lobby corridor connecting to Grand Hall (no room def) */}
      <Box p={[col(3), 0.006, -6.25]} s={[CS - 0.1, 0.012, 2.0 - 0.1]} c={FLOOR_H} />

      {/* Full inner floor — covers from north inner wall to south inner wall seamlessly */}
      <Box p={[0, 0.003, 0]} s={[CS * 3, 0.012, 10.6]} c={FLOOR_H} />
      {/* Grand Hall tile on top (clickable, labelled) */}
      <RoomTile
        x={0} z={0} w={CS * 3} d={CS * 3}
        floorColor={FLOOR_H} label='GRAND HALL' sub='Home'
        count={cnt('home')} isHall={true} onClick={() => onNav('/')}
      />
      <GrandHallFurniture />

      {/* ══ OUTER WALLS ══ */}

      {/* NORTH — entrance door at col3 (between Careers and Reception) */}
      <OuterWallSeg pos={[col(1), WY, -OW]} len={CL} axis='x' />
      <OuterWallSeg pos={[col(2), WY, -OW]} len={CS} axis='x' />
      <OuterWallSeg pos={[col(3), WY, -OW]} len={CS} axis='x' hasDoor />
      <OuterWallSeg pos={[col(4), WY, -OW]} len={CS} axis='x' />
      <OuterWallSeg pos={[col(5), WY, -OW]} len={CL} axis='x' />

      {/* SOUTH — all windows */}
      <OuterWallSeg pos={[col(1), WY, OW]} len={CL} axis='x' />
      <OuterWallSeg pos={[col(2), WY, OW]} len={CS} axis='x' />
      <OuterWallSeg pos={[col(3), WY, OW]} len={CS} axis='x' />
      <OuterWallSeg pos={[col(4), WY, OW]} len={CS} axis='x' />
      <OuterWallSeg pos={[col(5), WY, OW]} len={CL} axis='x' />

      {/* WEST — all windows */}
      <OuterWallSeg pos={[-OW, WY, row(1)]} len={CL} axis='z' />
      <OuterWallSeg pos={[-OW, WY, row(2)]} len={CS} axis='z' />
      <OuterWallSeg pos={[-OW, WY, row(3)]} len={CS} axis='z' />
      <OuterWallSeg pos={[-OW, WY, row(4)]} len={CS} axis='z' />
      <OuterWallSeg pos={[-OW, WY, row(5)]} len={CL} axis='z' />

      {/* EAST — all windows */}
      <OuterWallSeg pos={[OW, WY, row(1)]} len={CL} axis='z' />
      <OuterWallSeg pos={[OW, WY, row(2)]} len={CS} axis='z' />
      <OuterWallSeg pos={[OW, WY, row(3)]} len={CS} axis='z' />
      <OuterWallSeg pos={[OW, WY, row(4)]} len={CS} axis='z' />
      <OuterWallSeg pos={[OW, WY, row(5)]} len={CL} axis='z' />

      {/* Corner pillars */}
      {([-OW, OW] as const).flatMap(x => ([-OW, OW] as const).map(z => (
        <Box key={`cp${x}${z}`} p={[x, WY, z]} s={[WT, WH, WT]} c='#b2aca2' />
      )))}

      {/* Top caps */}
      <Box p={[0,   WH + 0.025, -OW]} s={[OW*2 + WT, 0.05, WT + 0.06]} c={WALL_C} />
      <Box p={[0,   WH + 0.025,  OW]} s={[OW*2 + WT, 0.05, WT + 0.06]} c={WALL_C} />
      <Box p={[-OW, WH + 0.025,  0 ]} s={[WT + 0.06, 0.05, OW*2 + WT]} c={WALL_C} />
      <Box p={[ OW, WH + 0.025,  0 ]} s={[WT + 0.06, 0.05, OW*2 + WT]} c={WALL_C} />
      {/* Cap foyer back wall top edge */}
      <Box p={[0, WH + 0.025, -5.25]} s={[CS, 0.05, WT + 0.06]} c={WALL_C} />

      {/* ══ INNER PARTITIONS ══
          r1↔r2: doors only at col2 (Careers→GH) and col4 (Reception→GH);
                 col1, col3, col5 are plain walls.
          r4↔r5: doors at col2, col3, col4; col1/col5 use east/west wall doors.
          c1↔c2: door at row2,3,4,5 (Marketplace accesses via east wall).
          c4↔c5: door at row2,3,4,5 (Broadcast accesses via west wall).
      ══ */}

      {/* r1↔r2 — Careers and Reception inner doors at z=-5.25 (flush with foyer side wall inner ends) */}
      <Box p={[col(1), WY, DZ[0]]} s={[CL, WH, WT]} c={WALL_I} />   {/* Mohit — stays at DZ[0] */}
      <InnerDoor cx={col(2)} cz={-5.25} axis='x' cellW={CS} />        {/* Careers → GH */}
      {/* col3 open — entrance corridor to Grand Hall */}
      <InnerDoor cx={col(4)} cz={-5.25} axis='x' cellW={CS} />        {/* Reception → GH */}
      <Box p={[col(5), WY, DZ[0]]} s={[CL, WH, WT]} c={WALL_I} />   {/* Harsh — stays at DZ[0] */}

      {/* r2↔r3 and r3↔r4: plain walls col1/col5 (those rooms door via east/west) */}
      <Box p={[col(1), WY, DZ[1]]} s={[CL, WH, WT]} c={WALL_I} />
      <Box p={[col(5), WY, DZ[1]]} s={[CL, WH, WT]} c={WALL_I} />
      <Box p={[col(1), WY, DZ[2]]} s={[CL, WH, WT]} c={WALL_I} />
      <Box p={[col(5), WY, DZ[2]]} s={[CL, WH, WT]} c={WALL_I} />

      {/* r4↔r5 — Privacy/Terms/Cookies back wall at z=5.25; Marketplace/Broadcast stay at DZ[3] */}
      <Box p={[col(1), WY, DZ[3]]} s={[CL, WH, WT]} c={WALL_I} />   {/* Marketplace — plain */}
      <InnerDoor cx={col(2)} cz={5.25} axis='x' cellW={CS} />         {/* Privacy → GH */}
      <InnerDoor cx={col(3)} cz={5.25} axis='x' cellW={CS} />         {/* Terms → GH */}
      <InnerDoor cx={col(4)} cz={5.25} axis='x' cellW={CS} />         {/* Cookies → GH */}
      <Box p={[col(5), WY, DZ[3]]} s={[CL, WH, WT]} c={WALL_I} />   {/* Broadcast — plain */}

      {/* c1↔c2 (DX[0]) — doors at row2,3,4,5; row1 plain */}
      {/* Suite A inner wall — north stub + door at z=-4.4 + south stub (mirror of Suite B) */}
      <Box p={[DX[0], WY, -5.95]} s={[WT, WH, 2.6]} c={WALL_I} />
      <Box p={[DX[0], WY, -3.95]} s={[WT, WH, 0.4]} c={WALL_I} />
      <Box p={[DX[0], 0.84, -4.4]} s={[WT, 0.32, 0.55]} c={WALL_I} />
      <Box p={[DX[0], 0.34, -4.4]} s={[0.04, 0.68, 0.51]} c={DOOR_C} op={0.85} />
      <InnerDoor cx={DX[0]} cz={row(2)} axis='z' cellW={CS} />        {/* About → GH */}
      <InnerDoor cx={DX[0]} cz={row(3)} axis='z' cellW={CS} />        {/* Workshop I → GH */}
      <InnerDoor cx={DX[0]} cz={row(4)} axis='z' cellW={CS} />        {/* Workshop II → GH */}
      {/* Marketplace inner wall — north stub + door at z=4.4 + south stub */}
      <Box p={[DX[0], WY, 5.95]} s={[WT, WH, 2.6]} c={WALL_I} />
      <Box p={[DX[0], WY, 3.95]} s={[WT, WH, 0.4]} c={WALL_I} />
      <Box p={[DX[0], 0.84, 4.4]} s={[WT, 0.32, 0.55]} c={WALL_I} />
      <Box p={[DX[0], 0.34, 4.4]} s={[0.04, 0.68, 0.51]} c={DOOR_C} op={0.85} />

      {/* c4↔c5 (DX[3]) — doors at row2,3,4,5; row1 plain */}
      {/* Suite B inner wall — north stub + door at z=-4.4 + south stub */}
      <Box p={[DX[3], WY, -5.95]} s={[WT, WH, 2.6]} c={WALL_I} />
      <Box p={[DX[3], WY, -3.95]} s={[WT, WH, 0.4]} c={WALL_I} />
      <Box p={[DX[3], 0.84, -4.4]} s={[WT, 0.32, 0.55]} c={WALL_I} />
      <Box p={[DX[3], 0.34, -4.4]} s={[0.04, 0.68, 0.51]} c={DOOR_C} op={0.85} />
      <InnerDoor cx={DX[3]} cz={row(2)} axis='z' cellW={CS} />        {/* Gallery → GH */}
      <InnerDoor cx={DX[3]} cz={row(3)} axis='z' cellW={CS} />        {/* Showroom → GH */}
      <InnerDoor cx={DX[3]} cz={row(4)} axis='z' cellW={CS} />        {/* War Room → GH */}
      {/* Broadcast inner wall — north stub + door at z=4.4 + south stub */}
      <Box p={[DX[3], WY, 5.95]} s={[WT, WH, 2.6]} c={WALL_I} />
      <Box p={[DX[3], WY, 3.95]} s={[WT, WH, 0.4]} c={WALL_I} />
      <Box p={[DX[3], 0.84, 4.4]} s={[WT, 0.32, 0.55]} c={WALL_I} />
      <Box p={[DX[3], 0.34, 4.4]} s={[0.04, 0.68, 0.51]} c={DOOR_C} op={0.85} />

      {/* c2↔c3 and c3↔c4: short foyer stubs flush with north wall; full at row5 */}
      <Box p={[DX[1], WY, -6.25]} s={[WT, WH, 2.0]} c={WALL_I} />
      <Box p={[DX[1], WY, 6.25]} s={[WT, WH, 2.0]} c={WALL_I} />
      <Box p={[DX[2], WY, -6.25]} s={[WT, WH, 2.0]} c={WALL_I} />
      <Box p={[DX[2], WY, 6.25]} s={[WT, WH, 2.0]} c={WALL_I} />

      {/* ── Entrance vestibule + steps — protrude north from col3 ── */}
      {/* Vestibule floor */}
      <Box p={[col(3), 0.006, -OW - 0.65]} s={[CS * 0.7, 0.012, 1.1]} c={FLOOR_H} />
      {/* Vestibule side walls */}
      <Box p={[col(3) - CS*0.35 + WT/2, WY, -OW - 0.65]} s={[WT, WH, 1.1]} c={WALL_C} />
      <Box p={[col(3) + CS*0.35 - WT/2, WY, -OW - 0.65]} s={[WT, WH, 1.1]} c={WALL_C} />
      {/* Steps */}
      <Box p={[col(3), -0.04, -OW - 1.38]} s={[CS * 0.55, 0.08, 0.48]} c='#bab4aa' />
      <Box p={[col(3), -0.08, -OW - 1.76]} s={[CS * 0.42, 0.08, 0.32]} c='#aaa49a' />
    </group>
  );
}

// ─── Export ──────────────────────────────────────────────────────────
export default function Office3D() {
  const rooms     = useAllRooms();
  const roomMap   = new Map<string, RoomInfo>(rooms.map(r => [r.room, r]));
  const totalLive = rooms.reduce((s, r) => s + r.count, 0);
  const navigate  = useNavigate();

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: GROUND }}>
      <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 10, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'system-ui', fontSize: 11, color: '#6e6e73' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', display: 'inline-block', backgroundColor: totalLive > 0 ? GREEN : '#444' }} />
        {totalLive > 0 ? `${totalLive} online` : 'No one online'}
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 14, zIndex: 10, fontFamily: 'system-ui', fontSize: 9, color: '#3a3530', letterSpacing: '0.08em' }}>
        DRAG TO ROTATE &middot; CLICK FLOOR TO ENTER
      </div>
      <Canvas camera={{ position: [0, 18, -26], fov: 42 }} style={{ width: '100%', height: '100%' }} gl={{ antialias: true }}>
        <SceneBg />
        <ambientLight intensity={0.9} />
        <directionalLight position={[8, 16, 10]} intensity={1.0} castShadow />
        <directionalLight position={[-8, 8, -8]} intensity={0.25} />
        <pointLight position={[0, 5, 0]} intensity={0.3} color='#fff8f0' />
        <Building roomMap={roomMap} onNav={navigate} />
        <OrbitControls
          enableZoom={false} enablePan={false}
          minPolarAngle={Math.PI / 10} maxPolarAngle={Math.PI / 2.2}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
