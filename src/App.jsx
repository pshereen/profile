import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import IntelligenicCaseStudy from './components/IntelligenicCaseStudy';
import ProductFrontendCaseStudy from './components/ProductFrontendCaseStudy';
import ContextMeshCaseStudy from './components/ContextMeshCaseStudy';
import SaaSReliabilityCaseStudy from './components/SaaSReliabilityCaseStudy';

const CASE_STUDY_HASHES = {
  bridge: '#/case-study/codenexus-host-ui-bridge',
  product: '#/case-study/feature-studio-ai-workspace',
  'context-mesh': '#/case-study/evidence-grounded-ai-recommendations',
  saas: '#/case-study/saas-onboarding-and-entitlements',
};

const LEGACY_HASHES = {
  '#/case-study/intelligenic-ai-agent-to-ui-bridge': 'bridge',
  '#/case-study/intelligenic-product-frontend': 'product',
};

const getCaseStudy = (hash) => {
  const current = Object.entries(CASE_STUDY_HASHES).find(([, value]) => value === hash);
  return current?.[0] ?? LEGACY_HASHES[hash] ?? null;
};

const caseStudyComponents = {
  bridge: IntelligenicCaseStudy,
  product: ProductFrontendCaseStudy,
  'context-mesh': ContextMeshCaseStudy,
  saas: SaaSReliabilityCaseStudy,
};

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(() => getCaseStudy(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => setActiveCaseStudy(getCaseStudy(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useLayoutEffect(() => {
    if (activeCaseStudy) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activeCaseStudy]);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const goHomeAndScrollTo = (ref) => {
    window.location.hash = '';
    requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(ref)));
  };

  const handleNavClick = (ref) => {
    if (activeCaseStudy) goHomeAndScrollTo(ref);
    else scrollTo(ref);
  };

  const openCaseStudy = (caseStudy) => {
    window.location.hash = CASE_STUDY_HASHES[caseStudy];
  };

  const ActiveCaseStudy = activeCaseStudy ? caseStudyComponents[activeCaseStudy] : null;

  return (
    <>
      <a href="#main-content" className="sr-only z-[100] rounded bg-white p-3 text-[var(--color-brand)] focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
      <header className="fixed left-0 top-0 z-50 w-full bg-[#F9F9F9] shadow-md">
        <nav aria-label="Primary navigation" className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <button type="button" onClick={() => handleNavClick(homeRef)} className="hidden text-lg font-bold text-[#4338ca] transition hover:text-indigo-700 sm:block">Şhereen</button>
          <ul className="flex flex-1 items-center justify-between gap-2 text-sm sm:flex-none sm:justify-start sm:gap-5 sm:text-base">
            <li><button type="button" onClick={() => handleNavClick(homeRef)} className="font-medium text-gray-700 hover:text-[#4338ca]">Home</button></li>
            <li><button type="button" onClick={() => handleNavClick(aboutRef)} className="font-medium text-gray-700 hover:text-[#4338ca]">About</button></li>
            <li><button type="button" onClick={() => handleNavClick(projectsRef)} className="font-medium text-gray-700 hover:text-indigo-600">Work</button></li>
            <li><button type="button" onClick={() => handleNavClick(experienceRef)} className="font-medium text-gray-700 hover:text-indigo-600">Experience</button></li>
            <li><a href="https://github.com/pshereen" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-indigo-600">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
          </ul>
        </nav>
      </header>

      {ActiveCaseStudy ? (
        <main id="main-content" className="pt-16">
          <ActiveCaseStudy onBack={() => goHomeAndScrollTo(projectsRef)} />
        </main>
      ) : (
        <main id="main-content">
          <div ref={homeRef}><Home scrollTo={scrollTo} projectsRef={projectsRef} experienceRef={experienceRef} /></div>
          <div ref={aboutRef}><About scrollTo={scrollTo} projectsRef={projectsRef} /></div>
          <div ref={projectsRef}><Projects onOpenCaseStudy={openCaseStudy} /></div>
          <div ref={experienceRef}><Experience /></div>
          <footer className="bg-lime-100 px-6 py-10 text-center text-sm text-gray-600">
            <p className="font-semibold text-[var(--color-brand)]">Shereen Punnassery · Frontend Software Engineer</p>
            <p className="mt-2">React, TypeScript, Python, and production AI systems.</p>
          </footer>
        </main>
      )}
    </>
  );
}
