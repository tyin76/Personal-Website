import React, { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animates from 0 to `value` the first time the element scrolls into view.
 * Renders the final value immediately when animation is unavailable or unwanted.
 */
function CountUp({ value, prefix = '', suffix = '', duration = 1400, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const canAnimate =
      typeof window.IntersectionObserver !== 'undefined' &&
      typeof window.requestAnimationFrame === 'function' &&
      !prefersReducedMotion();

    if (!canAnimate) {
      setDisplay(value);
      setDone(true);
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          // rAF timestamps can precede the performance.now() taken above, so clamp both ends.
          const progress = Math.min(1, Math.max(0, (now - start) / duration));
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setDone(true);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} data-done={done || undefined}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export default CountUp;
