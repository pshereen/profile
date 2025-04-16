import womanWorking from '../assets/woman-working.jpg';

export default function Home({ scrollTo, projectsRef }) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex" id="home">

      <div className="w-2/3 bg-[#4338ca] text-lime-300 flex flex-col justify-center px-10">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
          Hey, I'm Shereen Punnassery <span className="inline-block">👋</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-md">
        Full-stack developer specializing in dynamic React frontends and RESTful API integration.
        </p>
        <div className="flex justify-center">
        <button
  onClick={() => scrollTo(projectsRef)}
  className="w-fit px-4 py-2 bg-lime-200 text-[#4338ca] font-semibold rounded-xl text-xl hover:bg-gray-100 transition cursor-pointer"
>
  Projects
</button>

          </div>

      </div>

      <div className="w-1/3 bg-lime-200 relative" />

      <div className="absolute left-[66.6667%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={womanWorking}
          alt="Illustration"
          className="w-64 h-64 object-cover rounded-xl shadow-xl border-4 border-white scale-x-[-1]"
          />
      </div>

      <button
  onClick={scrollToAbout}
  className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white cursor-pointer"
  aria-label="Scroll to About section"
>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
