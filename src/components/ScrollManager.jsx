// ScrollManager: resets scroll position on route changes (except when there's a hash).
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor (e.g., /#contact), let the page handle anchor scroll
    if (hash) return;

    // For all other route changes, jump to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
