import { ReactLenis } from '@studio-freight/react-lenis';
import { CopyProvider } from './components/Animation/CopyContext';
import CopyTooltip from './components/Animation/CopyTooltip';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer/Footer';
import RouteScrollTop from './RouteScrollTop';

function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const scrollerRef = useRef(null);

  const handleLoaderExit = () => {
    document.body.classList.add('loaded');
    setHeroVisible(true);
    setHasLoaded(true);
  };

  useEffect(() => {
    document.body.classList.remove('loaded');
    setHeroVisible(false);
    setHasLoaded(false);
  }, []);

  return (
    <ReactLenis root>
      <div className='App'>
        <div
          className='scroll-container'
          ref={scrollerRef}>
          {!hasLoaded && <Loader onExit={handleLoaderExit} />}

          <CopyProvider>
            <BrowserRouter>
              <Header />
              <RouteScrollTop />
              <AnimatedRoutes
                heroVisible={heroVisible}
                setHeroVisible={setHeroVisible}
                scrollerRef={scrollerRef}
              />
              <Footer />
            </BrowserRouter>
            {window.innerWidth > 1100 ? <CopyTooltip /> : null}
          </CopyProvider>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
