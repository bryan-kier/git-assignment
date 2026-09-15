import { useEffect, useRef } from 'react';

// Adds an IntersectionObserver-driven scroll-reveal to an element. Returns a
// ref to attach to the element; content stays visible if JS/observer isn't
// available, and is skipped entirely for prefers-reduced-motion.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return undefined;
    }

    document.body.classList.add('js-anim');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
