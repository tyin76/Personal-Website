import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element named by the URL hash after navigation, or to the top when the
 * route changes without a hash. Needed because React Router leaves scrolling to the app.
 * Same-page hash changes scroll smoothly; arriving from another page jumps straight there.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const pageChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return undefined;
    }

    // A timer rather than requestAnimationFrame so the scroll still happens when the page was
    // opened in a background tab, where animation frames are paused.
    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: pageChanged ? 'auto' : 'smooth', block: 'start' });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
