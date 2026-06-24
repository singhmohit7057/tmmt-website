import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase, supabaseReady } from '../lib/supabase';

function pathToRoom(pathname: string): string {
  if (pathname === '/') return 'home';
  return pathname.replace(/^\//, '').replace(/\//g, '-');
}

function getSessionId(): string {
  let sid = sessionStorage.getItem('tmmt_sid');
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('tmmt_sid', sid);
  }
  return sid;
}

export default function PageTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!supabaseReady || !supabase) return;

    const room = pathToRoom(pathname);
    const sid = getSessionId();

    const channel = supabase.channel(`presence:${room}`, {
      config: { presence: { key: sid } },
    });

    channel.subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({ room, joined_at: Date.now() });
      }
    });

    return () => {
      channel.untrack().finally(() => supabase!.removeChannel(channel));
    };
  }, [pathname]);

  return null;
}
