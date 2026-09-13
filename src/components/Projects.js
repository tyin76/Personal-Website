import React, { useState } from 'react';
import '../styles/Projects.css';
import projects from '../data/projects';
import profile from '../data/profile';
import Reveal from './Reveal';
import Gallery from './Gallery';
import { GitHubIcon, ExternalLinkIcon, ImagesIcon, TrophyIcon, ArrowRightIcon } from './Icons';

function ProjectCard({ project, index, onOpenGallery }) {
  const { name, award, year, tagline, description, stack, links, photos, featured, coverPosition } = project;

  return (
    <Reveal
      as="article"
      className={`project card ${featured ? 'project--featured' : ''}`}
      delay={(index % 2) * 80}
    >
      <button
        type="button"
        className="project__cover"
        onClick={() => onOpenGallery(project, 0)}
        aria-label={`Open ${name} screenshots`}
      >
        <img
          src={photos[0]}
          alt=""
          loading={featured ? 'eager' : 'lazy'}
          style={coverPosition ? { objectPosition: coverPosition } : undefined}
        />
        <span className="project__cover-hint">
          <ImagesIcon />
          {photos.length} screenshots
        </span>
      </button>

      <div className="project__body">
        <div className="project__top">
          <h3 className="project__name">
            {name}
            {year && <span className="project__year">{year}</span>}
          </h3>
          {award && (
            <span className="project__award">
              <TrophyIcon />
              {award}
            </span>
          )}
        </div>
        <p className="project__tagline">{tagline}</p>
        <p className="project__description">{description}</p>

        <ul className="project__stack" aria-label="Tech stack">
          {stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project__links">
          {links.site && (
            <a className="btn btn-primary btn-sm" href={links.site} target="_blank" rel="noopener noreferrer">
              Live site
              <ExternalLinkIcon />
            </a>
          )}
          <a className="btn btn-ghost btn-sm" href={links.repo} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            Source
          </a>
          {links.devpost && (
            <a className="btn btn-ghost btn-sm" href={links.devpost} target="_blank" rel="noopener noreferrer">
              Devpost
              <ExternalLinkIcon />
            </a>
          )}
          <button type="button" className="project__gallery-btn" onClick={() => onOpenGallery(project, 0)}>
            View screenshots
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  const [gallery, setGallery] = useState(null);

  const openGallery = (project, index) => setGallery({ project, index });
  const closeGallery = () => setGallery(null);

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 id="projects-title" className="section-title">
            Projects
          </h2>
          <p className="section-lede">
            Things I&rsquo;ve built for hackathons, coursework and fun. Click any cover to browse the
            screenshots.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpenGallery={openGallery} />
          ))}
        </div>

        <Reveal className="projects__more">
          <p>More on GitHub, including course projects and experiments.</p>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            github.com/tyin76
          </a>
        </Reveal>
      </div>

      {gallery && <Gallery project={gallery.project} initialIndex={gallery.index} onClose={closeGallery} />}
    </section>
  );
}

export default Projects;
