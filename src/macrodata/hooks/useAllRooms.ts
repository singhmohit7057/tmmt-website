import { useEffect, useState } from 'react';
import { supabase, supabaseReady } from '../lib/supabase';

export interface RoomInfo {
  room: string;
  label: string;
  path: string;
  count: number;
}

// All trackable rooms — mirrors the site's main routes
export const ROOMS: Omit<RoomInfo, 'count'>[] = [
  { room: 'home',                label: 'Home',               path: '/' },
  { room: 'about',               label: 'About',              path: '/about' },
  { room: 'services',            label: 'Services',           path: '/services' },
  { room: 'contact',             label: 'Contact',            path: '/contact' },
  { room: 'careers',             label: 'Careers',            path: '/careers' },
  { room: 'web-design',          label: 'Web Design',         path: '/services/web-design' },
  { room: 'automation',          label: 'Automation',         path: '/services/automation' },
  { room: 'ecommerce-help',      label: 'Ecommerce Help',     path: '/services/ecommerce-help' },
  { room: 'branding',            label: 'Branding',           path: '/services/branding' },
  { room: 'social-media',        label: 'Social Media',       path: '/services/social-media' },
  { room: 'ads-management',      label: 'Ads Management',     path: '/services/ads-management' },
  { room: 'mohit-singh',           label: 'Mohit Singh',        path: '/mohit-singh' },
  { room: 'harsh-aggarwal',        label: 'Harsh Aggarwal',     path: '/harsh-aggarwal' },
  { room: 'privacy-policy',        label: 'Privacy Policy',     path: '/privacy-policy' },
  { room: 'terms-and-conditions',  label: 'Terms & Conditions', path: '/terms-and-conditions' },
  { room: 'cookie-policy',         label: 'Cookie Policy',      path: '/cookie-policy' },
];

export function useAllRooms(): RoomInfo[] {
  const [rooms, setRooms] = useState<RoomInfo[]>(
    ROOMS.map(r => ({ ...r, count: 0 }))
  );

  useEffect(() => {
    if (!supabaseReady || !supabase) return;

    const channels: ReturnType<typeof supabase.channel>[] = [];

    ROOMS.forEach(({ room }) => {
      const ch = supabase!.channel(`presence:${room}`);

      ch.on('presence', { event: 'sync' }, () => {
        const count = Object.keys(ch.presenceState()).length;
        setRooms(prev =>
          prev.map(r => r.room === room ? { ...r, count } : r)
        );
      }).subscribe();

      channels.push(ch);
    });

    return () => {
      channels.forEach(ch => supabase!.removeChannel(ch));
    };
  }, []);

  return rooms;
}
