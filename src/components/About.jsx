const capabilities = [
  {
    icon: '◫',
    title: 'Frontend architecture',
    description: 'I design typed React APIs, normalized application state, design-token-driven components, and resilient interaction states for complex workflows.',
  },
  {
    icon: '✦',
    title: 'AI product interfaces',
    description: 'I turn model output into grounded, reviewable experiences through typed tools, streamed events, evidence, progress, safeguards, and failure recovery.',
  },
  {
    icon: '⌘',
    title: 'Full-stack delivery',
    description: 'I work across TypeScript, Python services, REST APIs, PostgreSQL, authentication, billing, integrations, and asynchronous processing.',
  },
  {
    icon: '✓',
    title: 'Quality and delivery',
    description: 'I verify behavior with Vitest, Testing Library, Playwright, and backend tests, then carry changes through Docker and environment-specific CI/CD.',
  },
];

const skillGroups = [
  ['Frontend', 'React · TypeScript · Redux Toolkit · Vue · MUI · Tailwind CSS'],
  ['Backend', 'Python · Node.js · Quart/FastAPI · REST · PostgreSQL · MongoDB'],
  ['AI & cloud', 'Azure OpenAI · RAG · pgvector · Azure · streamed workflows'],
  ['Product delivery', 'Vitest · Testing Library · Playwright · Docker · Azure Pipelines'],
];

export default function About({ scrollTo, projectsRef }) {
  return (
    <section id="about" className="bg-lime-50 px-6 py-24 text-gray-800" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">How I work</p>
        <h2 id="about-heading" className="text-center text-4xl font-extrabold text-[var(--color-brand)]">Frontend depth with end-to-end ownership</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          I start with the user&apos;s workflow, find the reusable system underneath it, and follow the implementation across component boundaries, APIs, AI services, data, tests, and production delivery.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm">
              <div className="text-3xl text-[var(--color-brand)]" aria-hidden="true">{capability.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-[var(--color-brand)]">{capability.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{capability.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[var(--color-brand)] p-7 text-white md:p-9">
          <h3 className="text-2xl font-bold">Technical range</h3>
          <dl className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map(([group, skills]) => (
              <div key={group} className="border-l-2 border-lime-200 pl-4">
                <dt className="font-bold text-lime-200">{group}</dt>
                <dd className="mt-1 leading-relaxed text-indigo-50">{skills}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">AI-assisted engineering</p>
          <h3 className="mt-3 text-2xl font-bold text-[var(--color-brand)]">I use AI to accelerate investigation—not outsource judgment</h3>
          <p className="mt-4 max-w-4xl leading-relaxed text-gray-600">I use OpenAI Codex to trace behavior across large repositories, map affected components and APIs, surface edge cases, draft repetitive implementation work, generate test matrices, diagnose failures, and review diffs. For independent questions, I use parallel investigations selectively so frontend behavior, backend contracts, and existing coverage can be evaluated together.</p>
          <ul className="mt-5 grid list-disc gap-3 pl-5 text-gray-600 md:grid-cols-3 md:gap-x-8">
            <li>I define expected behavior and constraints before implementation.</li>
            <li>I review every relevant change and challenge unnecessary abstractions.</li>
            <li>I run tests, type checks, and complete user workflows before shipping.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Accessibility evidence</p>
          <h3 className="mt-3 text-2xl font-bold text-[var(--color-brand)]">Accessible behavior is part of the interface contract</h3>
          <dl className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-indigo-50 p-5"><dt className="font-bold text-[var(--color-brand)]">Keyboard and focus</dt><dd className="mt-2 text-gray-600">The portfolio includes a skip link, visible focus treatment, keyboard-reachable controls, and programmatic focus on each case-study heading after navigation.</dd></div>
            <div className="rounded-xl bg-indigo-50 p-5"><dt className="font-bold text-[var(--color-brand)]">Semantic HTML and ARIA</dt><dd className="mt-2 text-gray-600">Landmarks, ordered workflows, headings, descriptions, named navigation, hidden decorative visuals, live status roles, and explicit accessible names preserve meaning beyond layout.</dd></div>
            <div className="rounded-xl bg-indigo-50 p-5"><dt className="font-bold text-[var(--color-brand)]">Contrast and motion</dt><dd className="mt-2 text-gray-600">Core white-on-indigo and lime-on-indigo combinations measure 7.9:1 and 6.77:1. Meaning is not carried by color alone, and reduced-motion preferences disable smooth scrolling and transitions.</dd></div>
            <div className="rounded-xl bg-indigo-50 p-5"><dt className="font-bold text-[var(--color-brand)]">Behavior-based testing</dt><dd className="mt-2 text-gray-600">Production React suites query controls by role, name, selected or disabled state, and verify keyboard, progress, alert, retry, approval, and recovery behavior.</dd></div>
          </dl>
        </div>
        <div className="mt-10 text-center">
          <button type="button" onClick={() => scrollTo(projectsRef)} className="font-semibold text-[var(--color-brand)] underline decoration-2 underline-offset-4 hover:text-indigo-700">See these capabilities in production work</button>
        </div>
      </div>
    </section>
  );
}
