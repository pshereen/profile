export default function About({ scrollTo, projectsRef }) {
  return (
    <section id="about" className="min-h-screen bg-lime-50 text-[#4338ca]  px-6 py-20">
      <h2 className="text-4xl font-extrabold text-center mb-6">Get to Know me!</h2>
      <p className="text-gray-600 text-2xl text-center mb-16 max-w-3xl mx-auto">
  I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product.
  Check out some of my work in the{' '}
  <button
    onClick={() => scrollTo(projectsRef)}
    className="text-[#4338ca] font-bold hover:text-indigo-700 transition cursor-pointer"
  >
    Projects
  </button>{' '}
  section.
</p>

      <h3 className="text-4xl font-extrabold text-center mb-6">My expertise</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
  <div className="border border-zinc-700 p-6 rounded-lg hover:shadow-xl transition">
    <div className="text-4xl mb-4">⚛️</div>
    <h3 className="text-2xl font-semibold mb-2">
      <span className="relative inline-block text-[#4338ca]">
        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 z-[-1]" />
        Frontend Development
      </span>
    </h3>
    <p className="mt-4 text-zinc-600 font-mono">
      Skilled in React.js, Vue.js, HTML, CSS, JavaScript, and Tailwind CSS to build fast, responsive, and modern UIs.
    </p>
  </div>

  <div className="border border-zinc-700 p-6 rounded-lg hover:shadow-xl transition">
    <div className="text-4xl mb-4">🛠️</div>
    <h3 className="text-2xl font-semibold mb-2">
      <span className="relative inline-block text-[#4338ca]">
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400 z-[-1]" />
        Full Stack Engineering
      </span>
    </h3>
    <p className="mt-4 text-zinc-600 font-mono">
      Experience building full-stack applications with Node.js, Express, REST APIs, MongoDB, PostgreSQL, and MySQL.
    </p>
  </div>

  <div className="border border-zinc-700 p-6 rounded-lg hover:shadow-xl transition">
    <div className="text-4xl mb-4">🌐</div>
    <h3 className="text-2xl font-semibold mb-2">
      <span className="relative inline-block text-[#4338ca]">
        <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 z-[-1]" />
        API Integration
      </span>{' '}
      & Architecture
    </h3>
    <p className="mt-4 text-zinc-600 font-mono">
      Proficient in designing RESTful APIs and integrating backend services for scalable, maintainable web applications.
    </p>
  </div>
</div>

    </section>
  );
}
