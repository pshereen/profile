const proofPoints = [
  ['3+ years', 'Software development'],
  ['4 repositories', 'Cross-service AI delivery'],
  ['Production', 'React, TypeScript & Python'],
];

export default function Home({ scrollTo, projectsRef, experienceRef }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-brand)] pt-20 text-white md:flex" id="home" aria-labelledby="home-heading">
      <div className="flex min-h-[78vh] w-full flex-col justify-center px-6 py-16 md:w-2/3 md:px-12 lg:px-20">
        <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-lime-200">Frontend Software Engineer · AI Product Systems</p>
        <h1 id="home-heading" className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          I build reliable product experiences—and the systems behind them.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-indigo-50 md:text-xl">
          I&apos;m Shereen Punnassery. I build production React and TypeScript interfaces and the APIs,
          AI integrations, state architecture, and delivery workflows that make complex products dependable.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" onClick={() => scrollTo(projectsRef)} className="rounded-lg bg-lime-200 px-5 py-3 font-semibold text-[var(--color-brand)] transition hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore selected work
          </button>
          <button type="button" onClick={() => scrollTo(experienceRef)} className="rounded-lg border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            View experience
          </button>
          <a href="https://www.linkedin.com/in/shereenp/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            LinkedIn <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {proofPoints.map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <dt className="text-sm text-indigo-100">{label}</dt>
              <dd className="mt-1 font-bold text-lime-200">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hidden w-1/3 items-center justify-center bg-lime-100 p-8 md:flex" aria-hidden="true">
        <div className="w-full max-w-sm rounded-2xl bg-indigo-950 p-5 shadow-2xl">
          <div className="mb-5 flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300" /></div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-200">Product system</p>
          <div className="mt-4 space-y-3 text-sm font-semibold">
            <div className="rounded-lg border border-indigo-700 bg-indigo-900 p-3"><span className="text-indigo-300">01</span><span className="ml-3 text-white">React experience</span></div>
            <div className="ml-5 rounded-lg border border-indigo-700 bg-indigo-900 p-3"><span className="text-indigo-300">02</span><span className="ml-3 text-white">Typed APIs & state</span></div>
            <div className="ml-10 rounded-lg border border-indigo-700 bg-indigo-900 p-3"><span className="text-indigo-300">03</span><span className="ml-3 text-white">Grounded AI services</span></div>
            <div className="ml-14 rounded-lg bg-lime-200 p-3 text-indigo-950"><span>04</span><span className="ml-3">Production delivery</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
