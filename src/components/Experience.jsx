const roles = [
  {
    company: 'Intelligenic Inc.',
    role: 'Full Stack Engineer',
    dates: 'August 2024 – Present',
    summary: 'Frontend-led full-stack delivery for an AI-powered software-development platform.',
    highlights: [
      'Built shared React and TypeScript components, normalized Redux workflows, typed AI bridges, and evidence-grounded score reports.',
      'Delivered Python APIs, subscription and entitlement workflows, OAuth integrations, RBAC, automated tests, and production recovery paths.',
      'Worked across a shared-package monorepo, a VS Code extension, processor services, Docker, Azure, and environment-specific CI/CD.',
    ],
  },
  {
    company: 'One Community Global',
    role: 'Full Stack Engineer',
    dates: 'January 2024 – August 2024',
    summary: 'Reusable frontend systems and inventory operations built with React, TypeScript, Redux, Node.js, and MongoDB.',
    highlights: [
      'Built end-to-end stock tracking workflows that improved inventory operational efficiency by 30%.',
      'Architected shared components and standardized Redux workflows to reduce duplication across teams.',
      'Led structured React reviews and engineering standards associated with 15% fewer bugs and 20% better delivery efficiency.',
    ],
  },
  {
    company: 'KellynKai',
    role: 'Software Engineer',
    dates: 'January 2023 – October 2023',
    summary: 'Responsive learning and administration workflows across Vue.js, Node.js, Express, and MongoDB.',
    highlights: [
      'Built more than 20 responsive learning components and workflows across mobile and desktop.',
      'Contributed to a 45% increase in user engagement through responsive, cross-browser product experiences.',
      'Built an end-to-end student search workflow that reduced administrative lookup time by 60%.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24 text-gray-800" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">Experience</p>
          <h2 id="experience-heading" className="text-4xl font-extrabold text-[var(--color-brand)]">From interface systems to production operations</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Three years of progressively broader ownership across frontend architecture, full-stack workflows, AI products, testing, and delivery.</p>
        </div>

        <div className="mt-12 space-y-6">
          {roles.map((item) => (
            <article key={item.company} className="grid gap-5 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-sm md:grid-cols-[220px_1fr] md:p-8">
              <div>
                <p className="font-bold text-[var(--color-brand)]">{item.company}</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">{item.role}</h3>
                <p className="mt-2 text-sm font-semibold text-gray-500">{item.dates}</p>
              </div>
              <div>
                <p className="font-semibold leading-relaxed text-gray-700">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-indigo-100 p-6 md:flex md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-500">Education</p>
            <h3 className="mt-2 text-xl font-bold text-[var(--color-brand)]">Master of Science in Software Engineering</h3>
            <p className="mt-1 text-gray-600">San Jose State University · January 2021 – May 2023</p>
          </div>
          <a href="https://github.com/pshereen" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-lg bg-[var(--color-brand)] px-5 py-3 font-semibold text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)] md:mt-0">View GitHub<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  );
}
