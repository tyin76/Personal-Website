import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import { ArrowRightIcon } from '../components/Icons';

function NotFoundPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Page not found — Terence Yin';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="container">
        <div className="not-found__card card">
          <span className="eyebrow">404</span>
          <h1 id="not-found-title" className="not-found__title">
            That page isn&rsquo;t here.
          </h1>
          <p className="not-found__text">
            It may have moved or never existed. Everything on this site is reachable from the home page.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="btn btn-primary">
              Back to home
              <ArrowRightIcon />
            </Link>
            <Link to="/lumen5" className="btn btn-ghost">
              Read about my industry experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
