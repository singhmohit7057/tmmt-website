import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function pathToRoom(pathname: string): string {
  if (pathname === '/') return 'home';
  return pathname.replace(/^\//, '').replace(/\//g, '-');
}


export default function PageTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = import.meta.env.VITE_SUPABASE_URL as string;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
    if (!url || !key) return;

    const room = pathToRoom(pathname);
    let sid = sessionStorage.getItem('tmmt_sid');
    if (!sid) {
      sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem('tmmt_sid', sid);
    }

    let channel: any = null;

    import('@supabase/supabase-js').then(({ createClient }) => {
      const sb = createClient(url, key);
      channel = sb.channel(`presence:${room}`, {
        config: { presence: { key: sid as string } },
      });
      channel.subscribe(async (status: string) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ room, joined_at: Date.now() });
        }
      });
    });

    return () => {
      if (!channel) return;
      channel.untrack().catch(() => {}).finally(() => {
        import('@supabase/supabase-js').then(({ createClient }) => {
          createClient(url, key).removeChannel(channel);
        });
      });
    };
  }, [pathname]);

  return null;
}
