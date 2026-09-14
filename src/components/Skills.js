import React from 'react';
import '../styles/Skills.css';
import skills from '../data/skills';
import Reveal from './Reveal';
import TechLogo, { hasTechLogo } from './TechLogo';

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Toolkit</span>
          <h2 id="skills-title" className="section-title">
            Skills
          </h2>
          <p className="section-lede">
            The languages, frameworks and tools I reach for most. Comfortable across the stack and happy to
            pick up whatever the problem needs.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <Reveal key={group.title} as="article" className="skills__group card" delay={index * 90}>
              <span className="skills__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="skills__title">{group.title}</h3>
              <p className="skills__blurb">{group.blurb}</p>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className={`chip skills__chip ${hasTechLogo(item) ? 'skills__chip--logo' : ''}`}>
                    <TechLogo name={item} size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
