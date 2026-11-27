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

export const supportsScene = (() => {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch { return false; }
})();
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
    if (!supportsScene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleLoaderExit();
      return;
    }
    const timeout = setTimeout(handleLoaderExit, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ReactLenis root>
      <div className='App'>
        <div
          className='scroll-container'
          ref={scrollerRef}>
          {supportsScene && !hasLoaded && <Loader onExit={handleLoaderExit} />}

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
