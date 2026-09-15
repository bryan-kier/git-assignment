import { useEffect, useRef } from 'react';

// Applies a scroll-linked translateY (via the --ty custom property) to an
// element at the given speed. Disabled for prefers-reduced-motion.
export function useParallax(speed) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let ticking = false;
    const apply = () => {
      el.style.setProperty('--ty', `${window.scrollY * speed}px`);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(apply);
        ticking = true;
      }
    };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
