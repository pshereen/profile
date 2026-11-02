import caseStudyImage from '../assets/woman-working.jpg';

const caseStudies = [
  {
    id: 'bridge',
    title: 'CodeNexus Host-UI Bridge',
    description: 'A reusable TypeScript and React bridge that lets AI agents discover and safely activate host-application UI, with Material UI renderers, automated tests, and a production Intelligenic integration.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Vitest'],
    imageAlt: 'Illustration for the CodeNexus host-UI bridge case study',
  },
  {
    id: 'product',
    title: 'Intelligenic Product Frontend',
    description: 'A complex React and TypeScript workspace combining streamed AI interactions, document editors, application context, integrations, role-aware routes, and resilient async workflows.',
    technologies: ['React', 'TypeScript', 'Redux', 'Playwright'],
    imageAlt: 'Illustration for the Intelligenic product frontend case study',
  },
];

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="min-h-screen bg-[var(--color-brand)] px-6 py-24 text-lime-200" aria-labelledby="projects-heading">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-lime-200">Selected work</p>
        <h2 id="projects-heading" className="text-4xl font-extrabold text-white">Frontend systems built around real product needs</h2>
        <p className="mt-5 text-lg leading-relaxed text-indigo-100">Production work spanning reusable packages, complex application state, API integration, streamed experiences, automated testing, and reliable interaction design.</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        {caseStudies.map((study) => (
          <button
            key={study.id}
            type="button"
            onClick={() => onOpenCaseStudy(study.id)}
            className="flex flex-col items-stretch gap-6 rounded-2xl bg-white p-5 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-lime-200 sm:flex-row sm:items-center md:p-6"
          >
            <img src={caseStudyImage} alt={study.imageAlt} className="h-44 w-full rounded-lg object-cover sm:h-32 sm:w-40" />
            <div className="flex flex-1 flex-col gap-3">
              <h3 className="text-xl font-bold text-[var(--color-brand)]">{study.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{study.description}</p>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {study.technologies.map((technology) => (
                  <li key={technology} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{technology}</li>
                ))}
              </ul>
              <span className="mt-1 text-sm font-semibold text-[var(--color-brand)]">Read case study →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
