import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export function useScrollRestoration() {
  const { pathname, hash } = useLocation();
  const scrollPositions = useRef({});

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    const saved = scrollPositions.current[pathname] ?? 0;
    window.scrollTo({ top: saved, behavior: 'instant' });

    const onScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname, hash]);
}