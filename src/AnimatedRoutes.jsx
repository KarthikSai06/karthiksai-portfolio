// AnimatedRoutes.jsx
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import Raine from './components/Projects/Raine';
import AlexMonroe from './components/Projects/AlexMonroe';
import Outside from './components/Projects/Outside';
import Fashion from './components/Projects/Fashion';
import PressPlay from './components/Projects/PressPlay';
import MaxMilkin from './components/Projects/MaxMilkin';
import Sent from './components/Sent/Sent';
import Secret from './components/Secret/Secret';
import { AnimatePresence } from 'framer-motion';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import useGATracking from './useGATracking';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const AnimatedRoutes = ({ heroVisible, setHeroVisible }) => {
  const location = useLocation();

  useGATracking();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const onExitComplete = () => {
    const useCustom = window.innerWidth < 1100;
    const scroller = useCustom
      ? document.querySelector('.scroll-container')
      : window;

    gsap.set(scroller, { scrollTo: 0 });
  };

  useEffect(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname]);

  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={onExitComplete}>
      <Routes
        location={location}
        key={location.pathname}>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={
              <MainPage
                heroVisible={heroVisible}
                setHeroVisible={setHeroVisible}
              />
            }
          />
          <Route
            path='raine'
            element={<Raine />}
          />
          <Route
            path='max-milkin'
            element={<MaxMilkin />}
          />
          <Route
            path='fashion-week'
            element={<Fashion />}
          />
          <Route
            path='alex-monroe'
            element={<AlexMonroe />}
          />
          <Route
            path='press-play'
            element={<PressPlay />}
          />
          <Route
            path='outside'
            element={<Outside />}
          />
          <Route
            path='sent'
            element={<Sent />}
          />
          <Route
            path='easter-egg'
            element={<Secret />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
