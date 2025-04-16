import rockPaperImage from '../assets/Rock-paper-scissors.png';
import didYouKnowImage from '../assets/DidYouKnow.jpg';
import reactLogo from '../assets/react.svg';
import typescriptLogo from '../assets/TypeScript.svg';
import tailwindLogo from '../assets/Tailwind CSS.svg';
import githubIcon from '../assets/GitHub.svg';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#4338ca] text-lime-200 p-10 md:p-20">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-row items-center gap-6">
          <img
            src={rockPaperImage}
            alt="Rock Paper Scissors Game"
            className="w-40 h-32 rounded-md object-cover"
          />

          <div className="flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xl font-bold text-[#4338ca]">Rock Paper Scissors</h3>
            <p className="text-gray-700 text-sm">
              A classic Rock Paper Scissors game with delayed reveal animation and score tracking.
              Built using modern frontend tech.
            </p>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://pshereen.github.io/rock-paper-scissors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl cursor-pointer hover:opacity-80"
                  title="Live Site"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/pshereen/rock-paper-scissors"
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

        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-row items-center gap-6">
          <img
            src={didYouKnowImage}
            alt="Quiz App"
            className="w-40 h-32 rounded-md object-cover"
          />

          <div className="flex flex-col justify-between gap-2 flex-1">
            <h3 className="text-xl font-bold text-[#4338ca]">Quiz App</h3>
            <p className="text-gray-700 text-sm">
            A fun and interactive quiz application with live trivia questions from the Open Trivia Database (OpenTDB). Includes dynamic question rendering, score tracking, and a responsive UI.
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
      </div>
    </section>
  );
}
