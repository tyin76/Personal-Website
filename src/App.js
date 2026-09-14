import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import Lumen5Page from './pages/Lumen5Page';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <ScrollManager />
      <NavBar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lumen5" element={<Lumen5Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
