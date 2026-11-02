const areas = [
  {
    title: 'Context-aware workspace',
    description: 'Kept product, feature, work-product, file, route, and editor context synchronized across navigation and AI-assisted actions.',
  },
  {
    title: 'Streamed interaction UI',
    description: 'Turned asynchronous agent and backend events into visible progress, results, recoverable errors, and deterministic completion states.',
  },
  {
    title: 'Document workflows',
    description: 'Supported rich-text and code editing, staged changes, review controls, exports, and persistence across complex work-product flows.',
  },
  {
    title: 'External integrations',
    description: 'Built UI behavior for GitHub, Azure DevOps, Jira, file upload, OAuth-style connections, token refresh, and disconnect flows.',
  },
];

export default function ProductFrontendCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          ← Back to projects
        </button>

        <article className="space-y-8 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Production frontend case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">Building a stateful AI product workspace</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              My frontend work on Intelligenic spans a large React and TypeScript application where users navigate product hierarchies, create and edit structured documents, manage integrations, and work with an embedded AI engineering assistant.
            </p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-3">
            <div><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">Frontend</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">React · TypeScript · Redux</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">Interfaces</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">REST · SSE · event bus</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">Quality</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">Vitest · Testing Library · Playwright</dd></div>
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">The frontend challenge</h2>
            <p>
              This was not a collection of isolated screens. A single request could depend on the active product, hierarchy, feature, route, document section, uploaded files, integration state, subscription access, and a long-running backend operation. The interface had to keep those inputs consistent while still giving users clear feedback and control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Areas I worked across</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {areas.map((area) => (
                <div key={area.title} className="rounded-xl border border-indigo-100 p-5">
                  <h3 className="font-bold text-[var(--color-brand)]">{area.title}</h3>
                  <p className="mt-2 text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Reusable frontend patterns</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Typed tool contracts and adapters separated shared agent behavior from application-specific state.</li>
              <li>Shared cards, progress indicators, navigation actions, editor controls, and result renderers gave recurring workflows consistent behavior.</li>
              <li>Read-only context and mutating actions were kept distinct so consequential operations could require review or confirmation.</li>
              <li>Centralized application state and route-aware context reduced stale data as users moved between products and workspaces.</li>
              <li>Loading, empty, progress, success, failure, and retry states made asynchronous work visible instead of relying on optimistic chat text.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Production problems and iteration</h2>
            <p>
              Real usage exposed edge cases that simple demos miss: events split across streaming chunks, duplicate completion signals, stale actions after route changes, expired integration credentials, large file-processing streams, protected-route redirects, repeated prompts, and multi-step flows that crossed frontend and backend boundaries.
            </p>
            <p>
              I traced these failures across components, state, APIs, and services; tightened event and state contracts; added explicit progress and error handling; and wrote regression coverage for the behaviors most likely to recur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Testing and delivery</h2>
            <p>
              The frontend uses unit and interaction tests with Vitest and Testing Library plus Playwright coverage for end-to-end workflows. My contributions include tests for chat tools, host events, route protection, state transitions, uploads, and integration behavior. The application is built and promoted through environment-specific CI/CD pipelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">What this demonstrates</h2>
            <p>
              This work required more than implementing screens: it involved evolving frontend architecture, integrating multiple services, designing reusable interaction patterns, diagnosing browser-side state failures, and carrying fixes through automated verification and production delivery.
            </p>
          </section>

          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            The production repository is private; this case study summarizes my authored contributions without exposing proprietary source or customer data.
          </p>
        </article>
      </div>
    </section>
  );
}
