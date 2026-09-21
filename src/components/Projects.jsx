import caseStudyImage from '../assets/woman-working.jpg';
import didYouKnowImage from '../assets/DidYouKnow.jpg';
import ubereats from '../assets/UberEats.png';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/TypeScript.svg';
import tailwindLogo from '../assets/Tailwind CSS.svg';
import mongoDBLogo from '../assets/MongoDB.svg';
import githubIcon from '../assets/GitHub.svg';

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="min-h-screen bg-[#4338ca] text-lime-200 p-10 md:p-20">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Intelligenic AI Agent-to-UI Bridge Case Study */}

        <button
          type="button"
          onClick={onOpenCaseStudy}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-row items-center gap-6 text-left hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
          title="Open case study"
        >
          <img
            src={caseStudyImage}
            alt="Intelligenic AI Agent-to-UI Bridge"
            className="w-40 h-32 rounded-md object-cover"
          />

          <div className="flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xl font-bold text-[#4338ca]">Intelligenic AI Agent-to-UI Bridge</h3>
            <p className="text-gray-700 text-sm">
              Case study on designing a typed frontend bridge that converts natural-language requests into safe,
              visible UI actions with staged document edits and confirmation safeguards.
            </p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-semibold text-[#4338ca]">View Full Case Study</span>

              <div className="flex items-center gap-3" aria-hidden="true">
                <img src={reactLogo} alt="React" className="w-6 h-6" title="React" />
                <img src={typescriptLogo} alt="TypeScript" className="w-6 h-6" title="TypeScript" />
                <img src={tailwindLogo} alt="Tailwind CSS" className="w-6 h-6" title="Tailwind CSS" />
              </div>
            </div>
          </div>
        </button>

        {/* Did You Know Quiz App */}

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-row items-center gap-6">
          <img
            src={didYouKnowImage}
            alt="Quiz App"
            className="w-40 h-32 rounded-md object-cover"
          />

          <div className="flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xl font-bold text-[#4338ca]">Quiz App</h3>
            <p className="text-gray-700 text-sm">
              A fun and interactive quiz application with live trivia questions from the Open Trivia Database
              (OpenTDB). Includes dynamic question rendering, score tracking, and a responsive UI.
            </p>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://pshereen.github.io/quiz-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl cursor-pointer hover:opacity-80"
                  title="Live Site"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/pshereen/quiz-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                    title="View on GitHub"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <img src={reactLogo} alt="React" className="w-6 h-6" title="React" />
                <img src={typescriptLogo} alt="TypeScript" className="w-6 h-6" title="TypeScript" />
                <img src={tailwindLogo} alt="Tailwind CSS" className="w-6 h-6" title="Tailwind CSS" />
              </div>
            </div>
          </div>
        </div>

        {/* Uber Eats Clone */}

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-row items-center gap-6">
          <img
            src={ubereats}
            alt="Uber Eats"
            className="w-40 h-32 rounded-md object-cover"
          />

          <div className="flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xl font-bold text-[#4338ca]">Uber Eats</h3>
            <p className="text-gray-700 text-sm">
              A full-stack Uber Eats clone app hosted on Render, allowing customers to browse restaurants, add
              items to a cart, and place orders. Restaurant owners can manage menus and track orders through a
              dedicated dashboard with real-time updates.
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://pshereen.github.io/uber-eats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl cursor-pointer hover:opacity-80"
                  title="Live Site"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/pshereen/uber-eats"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                    title="View on GitHub"
                  />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <img src={reactLogo} alt="React" className="w-6 h-6" title="React" />
                <img src={typescriptLogo} alt="TypeScript" className="w-6 h-6" title="TypeScript" />
                <img src={tailwindLogo} alt="Tailwind CSS" className="w-6 h-6" title="Tailwind CSS" />
                <img src={mongoDBLogo} alt="MongoDB" className="w-6 h-6" title="MongoDB" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
