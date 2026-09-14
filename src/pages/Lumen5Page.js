import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Lumen5.css';
import lumen5Logo from '../images/lumen5-logo.png';
import lumen5Mark from '../images/lumen5-mark.png';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import { ArrowRightIcon, ChevronLeftIcon, ExternalLinkIcon, MapPinIcon } from '../components/Icons';
import {
  meta,
  stats,
  flagships,
  alsoShipped,
  techStack,
  timeline,
  launches,
  lessons,
} from '../data/lumen5';

function SectionHead({ kicker, title, lede }) {
  return (
    <Reveal className="section-head l5-section-head">
      <span className="l5-snap" aria-hidden="true">
        <i />
      </span>
      <span className="eyebrow">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}

const TOC = [
  { id: 'l5-numbers', label: 'By the numbers' },
  { id: 'l5-flagships', label: 'Work I’m proudest of' },
  { id: 'l5-shipped', label: 'What went out the door' },
  { id: 'l5-stack', label: 'Tech stack' },
  { id: 'l5-timeline', label: 'Timeline' },
  { id: 'l5-lessons', label: 'Things I learned' },
];

const shipped = [
  ...launches.map((launch) => ({ ...launch, pill: launch.tag })),
  ...alsoShipped.map((item) => ({ ...item, pill: item.tag })),
];

function Lumen5Page() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${meta.headline} — Terence Yin`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <article className="l5">
      {/* ---------- Hero ---------- */}
      <header className="l5-hero section" aria-labelledby="l5-title">
        <div className="container">
          <Reveal className="l5-hero__top">
            <Link to="/#experience" className="l5-back">
              <ChevronLeftIcon />
              Back to home
            </Link>
            <a href={meta.companyUrl} target="_blank" rel="noopener noreferrer" className="l5-hero__logo" aria-label="Lumen5 website">
              <img src={lumen5Logo} alt="Lumen5" width="120" height="32" />
            </a>
          </Reveal>

          <div className="l5-hero__grid">
            <div className="l5-hero__copy">
              <Reveal as="p" className="eyebrow" delay={60}>
                {meta.start} — {meta.end}
              </Reveal>
              <Reveal as="h1" id="l5-title" className="l5-hero__title" delay={120}>
                Sixteen months at <span className="gradient-text">Lumen5</span>
              </Reveal>
              <Reveal as="p" className="l5-hero__dates" delay={180}>
                <b>{meta.firstCommit}</b> first commit
                <span aria-hidden="true"> → </span>
                <b>{meta.lastDay}</b> last day
              </Reveal>
              <Reveal as="p" className="l5-hero__blurb" delay={240}>
                {meta.blurb}
              </Reveal>
              <Reveal className="l5-hero__meta" delay={300}>
                <span>{meta.role}</span>
                <span aria-hidden="true">·</span>
                <span>{meta.team}</span>
                <span aria-hidden="true">·</span>
                <span className="l5-hero__meta-item">
                  <MapPinIcon />
                  {meta.location}
                </span>
              </Reveal>
              <Reveal as="ul" className="l5-tags" delay={360} aria-label="Core technologies">
                {meta.tags.map((tag, index) => (
                  <li key={tag} className={`l5-tag l5-tag--${(index % 5) + 1}`}>
                    {tag}
                  </li>
                ))}
              </Reveal>
            </div>

            <Reveal className="l5-hero__aside" delay={240}>
              <nav className="l5-hero__mark card" aria-label="On this page">
                <div className="l5-toc__head">
                  <img src={lumen5Mark} alt="" width="72" height="70" />
                  <span className="eyebrow">On this page</span>
                </div>
                <ol className="l5-toc">
                  {TOC.map((item, index) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="l5-toc__link">
                        <span className="l5-toc__num">{String(index + 1).padStart(2, '0')}</span>
                        <span className="l5-toc__label">{item.label}</span>
                        <ArrowRightIcon />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ---------- Numbers ---------- */}
      <section id="l5-numbers" className="section l5-section" aria-labelledby="l5-numbers-title">
        <div className="container">
          <SectionHead
            kicker="By the numbers"
            title={<span id="l5-numbers-title">What sixteen months adds up to</span>}
            lede="Counted from the git history, GitHub and the issue tracker on my last day."
          />
          <ul className="l5-stats">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} as="li" className={`l5-stat card l5-bar--${stat.color}`} delay={index * 60}>
                <CountUp className="l5-stat__n" value={stat.value} prefix={stat.prefix} />
                <span className="l5-stat__k">{stat.label}</span>
                <span className="l5-stat__sub">{stat.sub}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Flagships ---------- */}
      <section id="l5-flagships" className="section l5-section" aria-labelledby="l5-flagships-title">
        <div className="container">
          <SectionHead
            kicker="The big ones"
            title={<span id="l5-flagships-title">Work I’m proudest of</span>}
            lede="Five projects I owned end to end. Usage figures come from product analytics, all-time through 11 September 2026."
          />
          <ul className="l5-features">
            {flagships.map((feature, index) => (
              <Reveal key={feature.id} as="li" className={`l5-feature card l5-accent--${feature.color}`} delay={(index % 2) * 80}>
                <div className="l5-feature__body">
                  <h3 className="l5-feature__title">{feature.title}</h3>
                  <p className="l5-feature__text">{feature.body}</p>
                  {feature.stack && (
                    <ul className="l5-feature__stack" aria-label="Built with">
                      {feature.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="l5-scoreboard">
                  {feature.scores.map((score) => (
                    <div key={score.label} className="l5-score">
                      <CountUp className="l5-score__n" value={score.value} />
                      <span className="l5-score__k">{score.label}</span>
                    </div>
                  ))}
                  <p className="l5-scoreboard__note">{feature.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Shipped ---------- */}
      <section id="l5-shipped" className="section l5-section" aria-labelledby="l5-shipped-title">
        <div className="container">
          <SectionHead
            kicker="Shipped"
            title={<span id="l5-shipped-title">What went out the door</span>}
            lede="Seven features that reached every Lumen5 user, alongside the reliability, cost and tooling work that made them possible."
          />
          <ul className="l5-shipped">
            {shipped.map((item, index) => (
              <Reveal key={item.name} as="li" className={`l5-launch card l5-bar--${item.color}`} delay={(index % 4) * 60}>
                <span className="l5-launch__pill">{item.pill}</span>
                <h3 className="l5-launch__name">{item.name}</h3>
                <p className="l5-launch__blurb">{item.blurb}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Tech stack ---------- */}
      <section id="l5-stack" className="section l5-section" aria-labelledby="l5-stack-title">
        <div className="container">
          <SectionHead
            kicker="Tech stack"
            title={<span id="l5-stack-title">What I built it with</span>}
            lede="Full stack in the literal sense: every layer below has my commits in it."
          />
          <ol className="l5-stack">
            {techStack.map((layer, index) => (
              <Reveal key={layer.layer} as="li" className={`l5-layer card l5-bar--${layer.color}`} delay={index * 70}>
                <div className="l5-layer__head">
                  <span className="l5-layer__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="l5-layer__name">{layer.layer}</h3>
                  <p className="l5-layer__blurb">{layer.blurb}</p>
                </div>
                <ul className="l5-layer__chips">
                  {layer.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section id="l5-timeline" className="section l5-section" aria-labelledby="l5-arc-title">
        <div className="container l5-arc">
          <SectionHead
            kicker="Timeline"
            title={<span id="l5-arc-title">Sixteen months, milestone by milestone</span>}
            lede="The initiatives I’m proudest of, in the order they landed."
          />
          <ol className="l5-timeline">
            {timeline.map((entry, index) => (
              <Reveal key={entry.title} as="li" className={`l5-tl l5-dot--${entry.color}`} delay={Math.min(index, 4) * 50}>
                <time className="l5-tl__when">{entry.when}</time>
                <h3 className="l5-tl__title">{entry.title}</h3>
                <p className="l5-tl__body">{entry.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Lessons ---------- */}
      <section id="l5-lessons" className="section l5-section" aria-labelledby="l5-lessons-title">
        <div className="container">
          <SectionHead
            kicker="Reflection"
            title={<span id="l5-lessons-title">Things I learned</span>}
            lede="Ten lessons I’m taking with me, each earned on a specific piece of work."
          />
          <ol className="l5-lessons">
            {lessons.map((lesson, index) => (
              <Reveal key={lesson.title} as="li" className="l5-lesson card" delay={(index % 2) * 90}>
                <span className="l5-lesson__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="l5-lesson__title">{lesson.title}</h3>
                <p className="l5-lesson__body">{lesson.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="section l5-closing" aria-label="Closing">
        <div className="container">
          <Reveal className="l5-closing__inner">
            <div className="l5-closing__actions">
              <Link to="/#projects" className="btn btn-primary">
                See my projects
                <ArrowRightIcon />
              </Link>
              <a href={meta.companyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Visit Lumen5
                <ExternalLinkIcon />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

export default Lumen5Page;
