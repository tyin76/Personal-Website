import React, { useEffect, useRef } from 'react';

/**
 * Fades and slides its children into view the first time they enter the viewport.
 * Falls back to always-visible when IntersectionObserver is unavailable (tests, old browsers).
 */
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Anything already inside the viewport shows straight away. This keeps the first paint fast and
    // avoids depending on IntersectionObserver, which browsers pause for hidden or background tabs.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyInView || typeof window.IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
