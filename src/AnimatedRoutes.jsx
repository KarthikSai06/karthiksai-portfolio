import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainPage from './components/MainPage/MainPage';
import { CaseStudy, MissingPage } from './components/PortfolioSections';
import { projects } from './portfolio';

export default function AnimatedRoutes(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = projects.find(p => pathname === '/projects/' + p.slug);
    document.title = (page ? page.name + ' · ' : '') + 'Kammala Karthik Sai · Software Engineer';
    window.scrollTo(0, 0);
    document.querySelector('.scroll-container')?.scrollTo(0, 0);
  }, [pathname]);
  return <Routes>
    <Route path="/" element={<MainPage {...props}/>}/>
    <Route path="/projects/:slug" element={<CaseStudy/>}/>
    <Route path="*" element={<MissingPage/>}/>
  </Routes>;
}
