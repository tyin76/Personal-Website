import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('home page renders the hero heading and main sections', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Terence');
  expect(screen.getByRole('heading', { name: /^experience$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^skills$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /sixteen months at lumen5/i })).toHaveAttribute('href', '/lumen5');
});

test('lumen5 page renders the case study', () => {
  renderAt('/lumen5');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sixteen months at Lumen5');
  expect(screen.getByRole('heading', { name: /what sixteen months adds up to/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^stickers$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /things i learned/i })).toBeInTheDocument();
});

test('unknown routes show a friendly 404 with a way home', () => {
  renderAt('/nope');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/isn’t here/);
  expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/');
});
