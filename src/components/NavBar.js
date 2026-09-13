import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../images/grey Logo.svg';
import profile from '../data/profile';
import lumen5Mark from '../images/lumen5-mark.png';
import { GitHubIcon, LinkedInIcon, CloseIcon, MenuIcon, ChevronDownIcon, ArrowRightIcon } from './Icons';

const EXPERIENCE_MENU = [
  {
    key: 'overview',
    title: 'Overview',
    sub: 'Role, highlights and education',
    to: { pathname: '/', hash: '#experience' },
  },
  {
    key: 'lumen5',
    title: 'Sixteen months at Lumen5',
    sub: 'Full-stack internship · May 2025 — Sep 2026',
    to: '/lumen5',
    icon: lumen5Mark,
  },
];

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience', menu: EXPERIENCE_MENU },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

const SECTION_IDS = SECTION_LINKS.map((link) => link.id);

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled || typeof window.IntersectionObserver === 'undefined') return undefined;

    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? active : null;
}

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLumen5 = pathname.startsWith('/lumen5');
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS, isHome);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    ...SECTION_LINKS.map((link) => ({
      key: link.id,
      label: link.label,
      to: { pathname: '/', hash: `#${link.id}` },
      isActive: (isHome && active === link.id) || (isLumen5 && link.id === 'experience'),
      menu: link.menu,
    })),
    {
      key: 'contact',
      label: 'Contact',
      to: { pathname, hash: '#contact' },
      isActive: false,
    },
  ];

  return (
    <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={closeMenu} aria-label={`${profile.name} home`}>
          <img src={logo} alt="" className="nav__logo" width="56" height="29" />
          <span className="nav__name">{profile.name}</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <div key={link.key} className={`nav__item ${link.menu ? 'nav__item--has-menu' : ''}`}>
              <Link
                to={link.to}
                className={`nav__link ${link.isActive ? 'is-active' : ''}`}
                aria-current={link.isActive ? 'page' : undefined}
                aria-haspopup={link.menu ? 'true' : undefined}
              >
                {link.label}
                {link.menu && <ChevronDownIcon className="nav__chevron" />}
              </Link>
              {link.menu && (
                <div className="nav__menu" role="menu" aria-label={`${link.label} menu`}>
                  <div className="nav__menu-panel">
                    {link.menu.map((item) => (
                      <Link key={item.key} to={item.to} className="nav__menu-item" role="menuitem">
                        {item.icon ? (
                          <img src={item.icon} alt="" className="nav__menu-icon" width="28" height="27" />
                        ) : (
                          <span className="nav__menu-dot" aria-hidden="true" />
                        )}
                        <span className="nav__menu-text">
                          <span className="nav__menu-title">{item.title}</span>
                          <span className="nav__menu-sub">{item.sub}</span>
                        </span>
                        <ArrowRightIcon className="nav__menu-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__icon" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a
            className="nav__icon"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a className="btn btn-primary btn-sm nav__cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="container nav__mobile-inner" aria-label="Mobile">
          {links.map((link, index) => (
            <React.Fragment key={link.key}>
              <Link
                to={link.to}
                className={`nav__mobile-link ${link.isActive ? 'is-active' : ''}`}
                style={{ '--i': index }}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
              {link.menu &&
                link.menu
                  .filter((item) => item.key !== 'overview')
                  .map((item) => (
                    <Link
                      key={item.key}
                      to={item.to}
                      className="nav__mobile-link nav__mobile-link--sub"
                      style={{ '--i': index + 1 }}
                      onClick={closeMenu}
                      tabIndex={menuOpen ? 0 : -1}
                    >
                      {item.icon && <img src={item.icon} alt="" className="nav__menu-icon" width="22" height="21" />}
                      {item.title}
                    </Link>
                  ))}
            </React.Fragment>
          ))}
          <a
            className="btn btn-primary nav__mobile-cta"
            href={`mailto:${profile.email}`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
