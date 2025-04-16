import { useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#F9F9F9] shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <button
  onClick={() => scrollTo(homeRef)}
  className="font-bold text-lg text-[#4338ca] hover:text-indigo-700 transition cursor-pointer"
>
  Şhereen
</button>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollTo(homeRef)} className="text-gray-700 hover:text-[#4338ca] font-medium">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo(aboutRef)} className="text-gray-700 hover:text-[#4338ca] font-medium">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo(projectsRef)} className="text-gray-700 hover:text-indigo-600 font-medium">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo(contactRef)} className="text-gray-700 hover:text-indigo-600 font-medium">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section ref={homeRef}>
          <Home scrollTo={scrollTo} projectsRef={projectsRef} />
        </section>
        <section ref={aboutRef}>
          <About scrollTo={scrollTo} projectsRef={projectsRef}/>
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}
