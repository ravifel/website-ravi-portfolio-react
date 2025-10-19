// ScrollManager: resets scroll position on route changes (except when there's a hash).
// Extra care for iOS Safari (BFCache + collapse animation + scroll restoration quirks).
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function forceScrollTopImmediate() {
  // Immediate jump (works better on iOS Safari than smooth)
  window.scrollTo(0, 0);
  // Redundant fallbacks for WebKit/iOS restoring scroll
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function forceScrollTopHard() {
  // Try multiple frames/ticks to beat layout/animation timing
  forceScrollTopImmediate();
  requestAnimationFrame(() => {
    forceScrollTopImmediate();
    setTimeout(() => {
      forceScrollTopImmediate();
    }, 50);
    setTimeout(() => {
      forceScrollTopImmediate();
    }, 200);
  });
}

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  // Disable native restoration so SPA controls it (helps desktop + Android; iOS sometimes ignores)
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Handle BFCache: when returning to the app, ensure we don't land mid-page
  useEffect(() => {
    const onPageShow = (e) => {
      // When coming back from BFCache and there's no hash, force to top
      if (e.persisted && !window.location.hash) {
        forceScrollTopHard();
      }
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  useEffect(() => {
    // If navigating to an anchor (e.g., /#contact), let the page handle the anchor scroll
    if (hash) return;

    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isCollapsing =
      navbarCollapse?.classList.contains('show') ||
      navbarCollapse?.classList.contains('collapsing');

    const run = () => {
      // Use hard reset (instant) to avoid Safari mail rail quirks
      forceScrollTopHard();
    };

    if (isCollapsing) {
      // Wait for collapse animation to finish before resetting scroll
      const onTransitionEnd = () => {
        navbarCollapse?.removeEventListener('transitionend', onTransitionEnd);
        // Small delay to ensure final height was applied
        setTimeout(run, 10);
      };
      navbarCollapse?.addEventListener('transitionend', onTransitionEnd);

      // Safety timeout in case transitionend doesn't fire on some devices
      const safety = setTimeout(() => {
        navbarCollapse?.removeEventListener('transitionend', onTransitionEnd);
        run();
      }, 450);

      return () => clearTimeout(safety);
    } else {
      // No collapse visible; reset on next frame
      requestAnimationFrame(run);
    }
  }, [pathname, hash]);

  return null;
}
