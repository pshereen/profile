import womanWorking from '../assets/woman-working.jpg';

export default function Home({ scrollTo, projectsRef }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-brand)] pt-20 text-white md:flex" id="home" aria-labelledby="home-heading">
      <div className="flex min-h-[70vh] w-full flex-col justify-center px-6 py-16 md:w-2/3 md:px-12 lg:px-20">
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-lime-200">Frontend Engineer</p>
        <h1 id="home-heading" className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          I build reusable, accessible interfaces for complex products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-indigo-50 md:text-xl">
          I&apos;m Shereen Punnassery. I turn product and design intent into thoughtful React and TypeScript
          experiences, with a focus on reusable component APIs, reliable interactions, and AI-enabled workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" onClick={() => scrollTo(projectsRef)} className="rounded-lg bg-lime-200 px-5 py-3 font-semibold text-[var(--color-brand)] transition hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore my work
          </button>
          <a href="https://github.com/pshereen" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            View GitHub <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="hidden w-1/3 bg-lime-100 md:block" aria-hidden="true" />
      <img src={womanWorking} alt="Illustration of a woman working at a laptop" className="mx-auto mb-16 h-60 w-60 rounded-2xl border-4 border-white object-cover shadow-xl md:absolute md:left-2/3 md:top-1/2 md:m-0 md:h-72 md:w-72 md:-translate-x-1/2 md:-translate-y-1/2 md:scale-x-[-1]" />
    </section>
  );
}
