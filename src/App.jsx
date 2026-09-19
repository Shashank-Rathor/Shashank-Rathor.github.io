import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

/**
 * HashRouter, not BrowserRouter: GitHub Pages serves static files and would
 * 404 on a refresh of /case-study/acquisition. Routes look like
 * /#/case-study/acquisition instead.
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
