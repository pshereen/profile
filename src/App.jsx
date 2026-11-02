import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import IntelligenicCaseStudy from './components/IntelligenicCaseStudy';
import ProductFrontendCaseStudy from './components/ProductFrontendCaseStudy';

const BRIDGE_CASE_STUDY_HASH = '#/case-study/codenexus-host-ui-bridge';
const PRODUCT_CASE_STUDY_HASH = '#/case-study/intelligenic-product-frontend';
const LEGACY_CASE_STUDY_HASH = '#/case-study/intelligenic-ai-agent-to-ui-bridge';

const getCaseStudy = (hash) => {
  if (hash === BRIDGE_CASE_STUDY_HASH || hash === LEGACY_CASE_STUDY_HASH) return 'bridge';
  if (hash === PRODUCT_CASE_STUDY_HASH) return 'product';
  return null;
};

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeCaseStudy, setActiveCaseStudy] = useState(() => getCaseStudy(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setActiveCaseStudy(getCaseStudy(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useLayoutEffect(() => {
    if (activeCaseStudy) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [activeCaseStudy]);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goHomeAndScrollTo = (ref) => {
    window.location.hash = '';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollTo(ref);
      });
    });
  };

  const handleNavClick = (ref) => {
    if (activeCaseStudy) {
      goHomeAndScrollTo(ref);
      return;
    }

    scrollTo(ref);
  };

  const openCaseStudy = (caseStudy) => {
    window.location.hash = caseStudy === 'product' ? PRODUCT_CASE_STUDY_HASH : BRIDGE_CASE_STUDY_HASH;
  };

  return (
    <>
      <a href="#main-content" className="sr-only z-[100] rounded bg-white p-3 text-[var(--color-brand)] focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Skip to content
      </a>
      <header className="fixed top-0 left-0 w-full bg-[#F9F9F9] shadow-md z-50">
        <nav aria-label="Primary navigation" className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <button
            onClick={() => handleNavClick(homeRef)}
            className="hidden text-lg font-bold text-[#4338ca] transition hover:text-indigo-700 sm:block"
          >
            Şhereen
          </button>
          <ul className="flex flex-1 items-center justify-between gap-2 text-sm sm:flex-none sm:justify-start sm:gap-5 sm:text-base">
            <li>
              <button onClick={() => handleNavClick(homeRef)} className="text-gray-700 hover:text-[#4338ca] font-medium">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(aboutRef)} className="text-gray-700 hover:text-[#4338ca] font-medium">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick(projectsRef)} className="text-gray-700 hover:text-indigo-600 font-medium">
                Projects
              </button>
            </li>
            <li><a href="https://github.com/pshereen" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-indigo-600">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
          </ul>
        </nav>
      </header>

      {activeCaseStudy ? (
        <main id="main-content" className="pt-16">
          {activeCaseStudy === 'product' ? (
            <ProductFrontendCaseStudy onBack={() => goHomeAndScrollTo(projectsRef)} />
          ) : (
            <IntelligenicCaseStudy onBack={() => goHomeAndScrollTo(projectsRef)} />
          )}
        </main>
      ) : (
        <main id="main-content">
          <section ref={homeRef}>
            <Home scrollTo={scrollTo} projectsRef={projectsRef} />
          </section>
          <section ref={aboutRef}>
            <About scrollTo={scrollTo} projectsRef={projectsRef} />
          </section>
          <section ref={projectsRef}>
            <Projects onOpenCaseStudy={openCaseStudy} />
          </section>
          <footer className="bg-lime-100 px-6 py-8 text-center text-sm text-gray-600">
            <p>Shereen Punnassery · Frontend Engineer</p>
          </footer>
        </main>
      )}
    </>
  );
}
