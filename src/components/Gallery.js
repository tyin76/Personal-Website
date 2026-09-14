import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/Gallery.css';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons';

function Gallery({ project, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const closeButtonRef = useRef(null);
  const total = project.photos.length;

  const goTo = useCallback((next) => setIndex(((next % total) + total) % total), [total]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const opener = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (opener && typeof opener.focus === 'function') opener.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  const touchStartX = useRef(null);
  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 48) {
      if (delta > 0) prev();
      else next();
    }
  };

  return (
    <div
      className="gallery"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} screenshots`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="gallery__panel">
        <header className="gallery__header">
          <div>
            <h3 className="gallery__title">{project.name}</h3>
            <p className="gallery__counter">
              {index + 1} / {total}
            </p>
          </div>
          <button ref={closeButtonRef} type="button" className="gallery__icon-btn" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </header>

        <div className="gallery__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {total > 1 && (
            <button type="button" className="gallery__nav gallery__nav--prev" onClick={prev} aria-label="Previous screenshot">
              <ChevronLeftIcon />
            </button>
          )}
          <img key={index} src={project.photos[index]} alt={`${project.name} screenshot ${index + 1}`} className="gallery__image" />
          {total > 1 && (
            <button type="button" className="gallery__nav gallery__nav--next" onClick={next} aria-label="Next screenshot">
              <ChevronRightIcon />
            </button>
          )}
        </div>

        {total > 1 && (
          <div className="gallery__thumbs" role="tablist" aria-label="Screenshots">
            {project.photos.map((photo, photoIndex) => (
              <button
                key={photo}
                type="button"
                role="tab"
                aria-selected={photoIndex === index}
                aria-label={`Screenshot ${photoIndex + 1}`}
                className={`gallery__thumb ${photoIndex === index ? 'is-active' : ''}`}
                onClick={() => goTo(photoIndex)}
              >
                <img src={photo} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
