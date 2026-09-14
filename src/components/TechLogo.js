import React from 'react';
import techLogos from '../data/techLogos';

/**
 * Renders the brand mark for a skill label, or nothing when we have no logo for it.
 * The brand colour is exposed as a CSS variable so styles can decide when to show it.
 */
function TechLogo({ name, size = 16, className = '' }) {
  const logo = techLogos[name];
  if (!logo) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`tech-logo ${className}`.trim()}
      style={{ '--brand': logo.color }}
      aria-hidden="true"
      focusable="false"
    >
      <path d={logo.path} fill="currentColor" />
    </svg>
  );
}

export function hasTechLogo(name) {
  return Boolean(techLogos[name]);
}

export default TechLogo;
