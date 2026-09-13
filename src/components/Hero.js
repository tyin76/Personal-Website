import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import portrait from '../images/web/cropped-portrait.webp';
import profile from '../data/profile';
import Reveal from './Reveal';
import { ArrowRightIcon, ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons';

function Hero() {
  return (
    <section id="about" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          {profile.openToWork && (
            <Reveal as="p" className="hero__status" delay={0}>
              <span className="hero__dot" aria-hidden="true" />
              Open to new opportunities
            </Reveal>
          )}

          <Reveal as="h1" id="hero-title" className="hero__title" delay={80}>
            Hi, I&rsquo;m <span className="gradient-text">{profile.firstName}</span>.
          </Reveal>

          <Reveal as="p" className="hero__intro" delay={160}>
            {profile.intro}
          </Reveal>

          <Reveal className="hero__meta" delay={220}>
            <span className="hero__meta-item">
              <MapPinIcon />
              {profile.location}
            </span>
            <span className="hero__meta-sep" aria-hidden="true">
              ·
            </span>
            <span className="hero__meta-item">{profile.role}</span>
          </Reveal>

          <Reveal className="hero__story" delay={280}>
            <Link to="/lumen5" className="hero__story-link">
              <span className="hero__story-link-text">What I&rsquo;ve built and learned in industry</span>
              <span className="hero__story-link-arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </Reveal>

          <Reveal className="hero__actions" delay={320}>
            <a className="btn btn-primary" href="#projects">
              See my projects
              <ArrowRightIcon />
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <MailIcon />
              Get in touch
            </a>
          </Reveal>

          <Reveal className="hero__socials" delay={380}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
              <span>{profile.email}</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={200}>
          <div className="hero__portrait-frame">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              className="hero__portrait"
              width="420"
              height="440"
              fetchpriority="high"
            />
          </div>
          <div className="hero__badge hero__badge--top card">
            <span className="hero__badge-label">Previously</span>
            <span className="hero__badge-value">Software Engineer Intern @ Lumen5</span>
          </div>
          <div className="hero__badge hero__badge--bottom card">
            <span className="hero__badge-label">Hackathons</span>
            <span className="hero__badge-value">nwHacks 2025 Winner</span>
          </div>
        </Reveal>
      </div>

      <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
        <ArrowDownIcon />
      </a>
    </section>
  );
}

export default Hero;
