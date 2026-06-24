import { useLocation } from 'react-router-dom';
import { usePresence } from './usePresence';

// Maps a pathname to a stable room name
function pathToRoom(pathname: string): string {
  if (pathname === '/') return 'home';
  return pathname.replace(/^\//, '').replace(/\//g, '-');
}

// Drop this in any page to auto-join that page's presence room.
// Returns current visitor count for that page.
export function usePageRoom() {
  const { pathname } = useLocation();
  const room = pathToRoom(pathname);
  return usePresence(room);
}
