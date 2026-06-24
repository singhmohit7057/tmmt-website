import { useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase, supabaseReady } from '../lib/supabase';

type SupabaseChannel = ReturnType<ReturnType<typeof createClient>['channel']>;

export interface RoomState {
  count: number;
  userIds: string[];
}

// Generates a random ID per browser tab, stable for the session
function getSessionId(): string {
  let id = sessionStorage.getItem('tmmt_sid');
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('tmmt_sid', id);
  }
  return id;
}

export function usePresence(room: string): RoomState {
  const [state, setState] = useState<RoomState>({ count: 0, userIds: [] });
  const channelRef = useRef<SupabaseChannel | null>(null);

  useEffect(() => {
    if (!room || !supabaseReady || !supabase) return;

    const sessionId = getSessionId();
    const channelName = `presence:${room}`;

    const channel = supabase.channel(channelName, {
      config: { presence: { key: sessionId } },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const presenceState = channel.presenceState<{ room: string }>();
        const userIds = Object.keys(presenceState);
        setState({ count: userIds.length, userIds });
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ room, joined_at: Date.now() });
        }
      });

    channelRef.current = channel;

    return () => {
      channel.untrack().then(() => supabase!.removeChannel(channel));
    };
  }, [room]);

  return state;
}
