const facts = [
  ['Scope', '4 connected repositories'],
  ['Frontend', 'React · TypeScript'],
  ['Services', 'Python · REST · LLMs'],
  ['Quality', 'Contract · unit · UI tests'],
];

const systemSteps = [
  ['CodeProcessor', 'Analyzes repository content and supports the selected AI model.'],
  ['WorkProductProcessor', 'Generates recommendations and validates evidence-specific reasoning.'],
  ['CodeNexus', 'Exposes typed tools and contracts to the embedded engineering agent.'],
  ['Intelligenic', 'Serves APIs and presents scores, evidence, reasoning, and guidance.'],
];

export default function ContextMeshCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Back to projects</button>

        <article className="space-y-9 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Cross-repository AI systems case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">Making AI recommendations explainable and grounded</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">
              I owned major parts of Context Mesh&apos;s reporting and reliability layers, carrying changes across React, Python services, PostgreSQL, shared TypeScript contracts, automated testing, and production delivery. The experience brings evidence from Git repositories, Jira, Google Drive, uploaded files, and product context into explainable scores and recommendations.
            </p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([term, detail]) => <div key={term}><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">{detail}</dd></div>)}
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">The product problem</h2>
            <p>Scores and recommendations are only useful when users can understand what influenced them. The system needed to distinguish direct evidence from category-level analysis, avoid implying that unrelated sources contributed, and make the same grounded information available in both the visual report and the embedded AI assistant.</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">System flow</h2>
            <ol className="grid gap-3 md:grid-cols-4">
              {systemSteps.map(([name, description], index) => (
                <li key={name} className="relative rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-500">0{index + 1}</span>
                  <h3 className="mt-2 font-bold text-[var(--color-brand)]">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">What I delivered</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">React reports and Python APIs</h3><p className="mt-2 text-gray-600">Added score reasoning, selected-source retrieval, evidence-aware display states, report guidance, and service-level safeguards in Intelligenic.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Typed agent contracts</h3><p className="mt-2 text-gray-600">Extended CodeNexus types, tools, bridges, exports, skills, and tests so the agent could retrieve the same grounded score details and source analysis.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Reasoning validation</h3><p className="mt-2 text-gray-600">Updated WorkProductProcessor prompts and validators to require succinct, item-specific contribution explanations and reject unsafe or incomplete output.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Model compatibility</h3><p className="mt-2 text-gray-600">Added GPT-6 model routing and tests in the work-product and code-analysis processors while preserving existing usage and response contracts.</p></div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Reliability decisions</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>One meaning across surfaces:</strong> shared labels and typed contracts kept the React report and agent responses aligned.</li>
              <li><strong>Evidence before fluency:</strong> validation rejected reasoning that sounded plausible but contradicted the contribution state.</li>
              <li><strong>Honest scoring:</strong> non-direct evidence no longer inherited a score that implied direct contribution.</li>
              <li><strong>Boundary-level tests:</strong> coverage exercised Python validation, service mapping, TypeScript tools, bridge adapters, and React presentation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Operating long-running work in production</h2>
            <p>Context ingestion and scoring can outlive a browser request and must recover safely from timeouts, restarts, and partial failures. My work included the production controls around those workflows rather than only their final UI.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Durable orchestration</h3><p className="mt-2 text-gray-600">PostgreSQL-backed dispatch, idempotent state transitions, retry and concurrency controls, stale-work protection, and indexes for high-volume preparation and cleanup paths.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Visible operations</h3><p className="mt-2 text-gray-600">Live processing status, structured telemetry, Application Insights dashboards, failure and queue alerts, deployment verification, and operational runbooks.</p></div>
            </div>
            <p className="text-sm text-gray-500">The central tradeoff was accepting more background-processing complexity in exchange for fault tolerance, scalability, and a responsive user experience.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Outcome</h2>
            <p>The resulting experience gives users a traceable path from a score to its source evidence and reasoning, while giving the AI assistant access to the same constrained data. It demonstrates how I work across frontend, backend, shared packages, and model-facing code to make AI behavior understandable rather than merely impressive.</p>
          </section>

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">The production repositories are private. This case study separates my authored contributions from the broader team&apos;s system and does not expose proprietary source or customer data.</p>
            <a href="https://intelligenic.ai" target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold text-[var(--color-brand)] underline decoration-2 underline-offset-4 hover:text-indigo-700">View live product<span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </article>
      </div>
    </section>
  );
}
