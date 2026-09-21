import { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IntelligenicCaseStudy from './components/IntelligenicCaseStudy';

const CASE_STUDY_HASH = '#/case-study/intelligenic-ai-agent-to-ui-bridge';

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isCaseStudyPage, setIsCaseStudyPage] = useState(
    () => window.location.hash === CASE_STUDY_HASH,
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsCaseStudyPage(window.location.hash === CASE_STUDY_HASH);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    if (isCaseStudyPage) {
      goHomeAndScrollTo(ref);
      return;
    }

    scrollTo(ref);
  };

  const openCaseStudy = () => {
    window.location.hash = CASE_STUDY_HASH;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#F9F9F9] shadow-md z-50">
        <nav className="w-full px-2 md:px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => handleNavClick(homeRef)}
            className="font-bold text-lg text-[#4338ca] hover:text-indigo-700 transition cursor-pointer"
          >
            Şhereen
          </button>
          <ul className="flex space-x-6">
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
            <li>
              <button onClick={() => handleNavClick(contactRef)} className="text-gray-700 hover:text-indigo-600 font-medium">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {isCaseStudyPage ? (
        <main className="pt-16">
          <IntelligenicCaseStudy onBack={() => goHomeAndScrollTo(projectsRef)} />
        </main>
      ) : (
        <main>
          <section ref={homeRef}>
            <Home scrollTo={scrollTo} projectsRef={projectsRef} />
          </section>
          <section ref={aboutRef}>
            <About scrollTo={scrollTo} projectsRef={projectsRef} />
          </section>
          <section ref={projectsRef}>
            <Projects onOpenCaseStudy={openCaseStudy} />
          </section>
          <section ref={contactRef}>
            <Contact />
          </section>
        </main>
      )}
    </>
  );
}
