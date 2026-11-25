const caseStudies = [
  {
    id: 'context-mesh',
    eyebrow: 'Cross-repository AI system',
    title: 'Evidence-grounded AI recommendations',
    description: 'A production workflow spanning React reports, Python APIs, typed agent tools, recommendation validation, and code-analysis model support across four repositories.',
    technologies: ['React', 'TypeScript', 'Python', 'Azure OpenAI'],
    visual: 'mesh',
  },
  {
    id: 'bridge',
    eyebrow: 'Frontend platform',
    title: 'CodeNexus Host-UI Bridge',
    description: 'A reusable bridge that lets AI agents discover and safely activate approved host-application UI through typed tools and replaceable renderers.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Vitest'],
    visual: 'bridge',
  },
  {
    id: 'product',
    eyebrow: 'Stateful product experience',
    title: 'Feature Studio AI workspace',
    description: 'A hierarchical product workspace with normalized state, streamed generation progress, rich document workflows, and deterministic agent-assisted navigation.',
    technologies: ['React', 'Redux Toolkit', 'SSE', 'Playwright'],
    visual: 'studio',
  },
  {
    id: 'saas',
    eyebrow: 'Full-stack reliability',
    title: 'SaaS onboarding and entitlements',
    description: 'Self-service authentication, subscriptions, durable webhook processing, entitlement recovery, RBAC, analytics, and external integrations.',
    technologies: ['Python', 'PostgreSQL', 'Stripe', 'Clerk'],
    visual: 'saas',
  },
];

const supportingWork = [
  {
    title: 'Work-Product Editor and IDE workflows',
    description: 'Correctly scoped artifact loading, rich-text and code editing, modification previews, agent-assisted changes, downloads, file navigation, and safeguards that prevent empty state from overwriting meaningful content.',
    technologies: ['React', 'TypeScript', 'TipTap', 'Monaco'],
  },
  {
    title: 'Jira and Azure DevOps integrations',
    description: 'OAuth-based connections, provider token renewal, ticket export and synchronization, external issue-key handling, integration status, disconnect flows, and recovery from expired credentials.',
    technologies: ['OAuth 2.0', 'REST APIs', 'React', 'Python'],
  },
];

function ProjectVisual({ variant }) {
  if (variant === 'mesh') {
    return (
      <div className="project-visual bg-indigo-950" aria-hidden="true">
        <div className="grid grid-cols-2 gap-3 text-center text-[10px] font-bold uppercase tracking-wide text-white">
          <span className="rounded-lg bg-blue-500/80 px-2 py-3">Intelligenic</span>
          <span className="rounded-lg bg-violet-500/80 px-2 py-3">CodeNexus</span>
          <span className="rounded-lg bg-teal-500/80 px-2 py-3">Work products</span>
          <span className="rounded-lg bg-amber-500/80 px-2 py-3">Code analysis</span>
        </div>
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-indigo-950 bg-lime-200 text-lg text-indigo-950">✦</span>
      </div>
    );
  }

  if (variant === 'bridge') {
    return (
      <div className="project-visual bg-slate-950 text-[10px] font-bold text-slate-100" aria-hidden="true">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-slate-700 px-3 py-3">DOM</span><span>→</span>
          <span className="rounded-md bg-indigo-500 px-3 py-3">Adapter</span><span>→</span>
          <span className="rounded-md bg-lime-300 px-3 py-3 text-indigo-950">Tools</span>
        </div>
        <div className="mt-4 h-2 rounded-full bg-slate-700"><div className="h-2 w-3/4 rounded-full bg-indigo-400" /></div>
      </div>
    );
  }

  if (variant === 'studio') {
    return (
      <div className="project-visual flex gap-3 bg-indigo-50" aria-hidden="true">
        <div className="w-1/3 space-y-2 rounded-lg bg-indigo-950 p-3"><span className="block h-2 rounded bg-lime-200" /><span className="block h-2 w-4/5 rounded bg-indigo-300" /><span className="block h-2 w-3/5 rounded bg-indigo-300" /></div>
        <div className="grid flex-1 grid-cols-2 gap-2"><span className="rounded-lg border border-indigo-200 bg-white" /><span className="rounded-lg border border-indigo-200 bg-white" /><span className="col-span-2 rounded-lg bg-indigo-500" /></div>
      </div>
    );
  }

  return (
    <div className="project-visual bg-emerald-950 text-[10px] font-bold text-white" aria-hidden="true">
      <div className="flex items-center justify-between gap-2"><span className="rounded-full bg-white/15 px-3 py-2">Sign up</span><span>→</span><span className="rounded-full bg-white/15 px-3 py-2">Pay</span><span>→</span><span className="rounded-full bg-lime-200 px-3 py-2 text-emerald-950">Access</span></div>
      <div className="mt-4 rounded-lg border border-emerald-500/50 bg-emerald-900 p-2 text-center text-emerald-100">Recoverable webhook processing</div>
    </div>
  );
}

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="bg-[var(--color-brand)] px-6 py-24 text-lime-200" aria-labelledby="projects-heading">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-lime-200">Selected work</p>
        <h2 id="projects-heading" className="text-4xl font-extrabold text-white">Production systems built around real product needs</h2>
        <p className="mt-5 text-lg leading-relaxed text-indigo-100">Case studies spanning reusable frontend platforms, AI transparency, complex application state, full-stack integrations, testing, and production reliability.</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        {caseStudies.map((study) => (
          <button key={study.id} type="button" onClick={() => onOpenCaseStudy(study.id)} className="group flex h-full flex-col rounded-2xl bg-white p-5 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-lime-200 md:p-6">
            <ProjectVisual variant={study.visual} />
            <div className="mt-6 flex flex-1 flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">{study.eyebrow}</p>
              <h3 className="text-xl font-bold text-[var(--color-brand)]">{study.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{study.description}</p>
              <ul className="mt-1 flex flex-wrap gap-2" aria-label="Technologies used">
                {study.technologies.map((technology) => <li key={technology} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{technology}</li>)}
              </ul>
              <span className="mt-auto pt-3 text-sm font-semibold text-[var(--color-brand)]">Read case study <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span></span>
            </div>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-indigo-400/40 pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-200">Additional production work</p>
          <h3 className="mt-3 text-3xl font-bold text-white">More complex workflows carried through release</h3>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {supportingWork.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-indigo-950/35 p-6 text-white">
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="mt-3 leading-relaxed text-indigo-100">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {item.technologies.map((technology) => <li key={technology} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-lime-100">{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
