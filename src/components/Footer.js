import React from 'react';
import '../styles/Footer.css';
import profile from '../data/profile';
import Reveal from './Reveal';
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from './Icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="container">
          <Reveal className="contact__card card">
            <div className="contact__glow" aria-hidden="true" />
            <span className="eyebrow">Contact</span>
            <h2 id="contact-title" className="contact__title">
              Let&rsquo;s build something <span className="gradient-text">together</span>.
            </h2>
            <p className="contact__lede">
              Whether it&rsquo;s a role, a project or just a question about something I&rsquo;ve made, my inbox is
              open.
            </p>
            <div className="contact__actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                LinkedIn
                <ArrowRightIcon />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container footer__bar">
        <p className="footer__copy">
          &copy; {year} {profile.name}. Built with React.{' '}
          <a href={profile.siteRepo} target="_blank" rel="noopener noreferrer" className="footer__source">
            Source on GitHub
          </a>
          <span aria-hidden="true"> · </span>Updated {profile.updated}.
        </p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
