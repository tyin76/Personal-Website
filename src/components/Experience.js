import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Experience.css';
import { experience, education } from '../data/experience';
import Reveal from './Reveal';
import { BriefcaseIcon, GraduationCapIcon, ExternalLinkIcon, MapPinIcon, ArrowRightIcon } from './Icons';

function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Where I&rsquo;ve worked</span>
          <h2 id="experience-title" className="section-title">
            Experience
          </h2>
          <p className="section-lede">
            Shipping production software on a team, from the database to the pixels.
          </p>
        </Reveal>

        <div className="experience__grid">
          <div className="experience__timeline">
            {experience.map((job, index) => (
              <Reveal key={job.company} as="article" className="experience__item card" delay={index * 80}>
                <div className="experience__marker" aria-hidden="true">
                  <BriefcaseIcon />
                </div>
                <header className="experience__header">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__company">
                      <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.company}
                        <ExternalLinkIcon />
                      </a>
                      <span className="experience__location">
                        <MapPinIcon />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="experience__period">{job.period}</span>
                </header>
                <p className="experience__summary">{job.summary}</p>
                <ul className="experience__highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className="experience__stack" aria-label="Technologies">
                  {job.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                {job.storyPath && (
                  <Link to={job.storyPath} className="experience__story">
                    <span className="experience__story-text">
                      <span className="experience__story-title">{job.storyTitle}</span>
                      <span className="experience__story-sub">{job.storySub}</span>
                    </span>
                    <span className="experience__story-arrow" aria-hidden="true">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                )}
              </Reveal>
            ))}
          </div>

          <aside className="experience__side">
            {education.map((school, index) => (
              <Reveal key={school.school} className="experience__edu card" delay={120 + index * 80}>
                <div className="experience__marker experience__marker--edu" aria-hidden="true">
                  <GraduationCapIcon />
                </div>
                <span className="eyebrow">Education</span>
                <h3 className="experience__edu-degree">{school.degree}</h3>
                <p className="experience__edu-school">{school.school}</p>
                <p className="experience__location">
                  <MapPinIcon />
                  {school.location}
                </p>
              </Reveal>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Experience;
