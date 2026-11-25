const facts = [
  ['Focus', 'Reusable frontend architecture'],
  ['Shared packages', 'React · TypeScript · MUI'],
  ['Host integration', 'DOM metadata · MutationObserver'],
  ['Verification', 'Vitest · Testing Library'],
];

const layers = [
  ['Annotated product UI', 'Host components declare stable IDs, labels, roles, and state through semantic data attributes.'],
  ['Intelligenic adapter', 'A MutationObserver discovers eligible elements and keeps visibility and enabled state current.'],
  ['CodeNexus bridge', 'A typed adapter publishes bounded context and exposes separate discovery and activation tools.'],
  ['Replaceable rendering', 'The core React package stays UI-library neutral while a separate package supplies MUI result views.'],
];

export default function IntelligenicCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Back to projects</button>

        <article className="space-y-9 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Frontend platform case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">A safe bridge between AI intent and product UI</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">I designed and implemented the shared CodeNexus contracts and React packages, then built the Intelligenic host adapter that discovers approved interface elements and turns natural-language requests into visible, bounded product actions.</p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([term, detail]) => <div key={term}><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">{detail}</dd></div>)}
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">The product need</h2>
            <p>The embedded agent could answer questions and edit documents, but it could not reliably complete ordinary interface actions such as opening a tab, navigating to a product area, or activating a work-product card. Direct arbitrary DOM control would have been brittle, difficult to test, and unsafe.</p>
            <p>The system needed a narrow public contract that could serve different host applications without coupling the shared package to one product&apos;s routes, components, or design system.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Layered architecture</h2>
            <ol className="space-y-3">
              {layers.map(([title, description], index) => (
                <li key={title} className="grid gap-3 rounded-xl border border-indigo-100 p-5 sm:grid-cols-[42px_1fr]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-brand)] font-bold text-white">{index + 1}</span>
                  <div><h3 className="font-bold text-[var(--color-brand)]">{title}</h3><p className="mt-1 text-gray-600">{description}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">My role</h2>
            <p>I authored the design specification and implementation plan, defined the public TypeScript contracts, built the React bridge and its list/activate tools, created reusable Material UI renderers, published package exports, added an executable demo adapter, and integrated automatic discovery into Intelligenic.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Key engineering decisions</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Discovery and mutation remain separate:</strong> reading available actions does not silently authorize an activation.</li>
              <li><strong>The host owns the boundary:</strong> only annotated, approved elements become visible to the agent.</li>
              <li><strong>Authorization stays server-side:</strong> UI eligibility never replaces tenant-scoped route policies or backend permission checks for protected resources.</li>
              <li><strong>State stays live:</strong> MutationObserver-based discovery updates context as routes and component state change.</li>
              <li><strong>Context stays bounded:</strong> enabled and visible actions are prioritized before a fixed cap is applied.</li>
              <li><strong>Presentation is replaceable:</strong> applications can use the default MUI renderers or supply their own.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Testing and production iteration</h2>
            <p>I added coverage for context updates, subscription cleanup, prioritization, tool behavior, missing elements, host failures, and renderer output. Production use then exposed harder details—stale actions after navigation, repeated prompts, current-product context, work-product navigation, and safe review flows—which I addressed through tighter state and routing contracts.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Outcome</h2>
            <p>The result is a reusable frontend capability that translates conversational intent into product-controlled actions. In Intelligenic, the pattern supports navigation, contextual forms, files, work products, document workflows, integration status, and long-running progress updates.</p>
          </section>

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">The production repositories are private; this case study describes my engineering contributions without publishing proprietary source.</p>
            <a href="https://intelligenic.ai" target="_blank" rel="noopener noreferrer" className="shrink-0 font-semibold text-[var(--color-brand)] underline decoration-2 underline-offset-4 hover:text-indigo-700">View live product<span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </article>
      </div>
    </section>
  );
}
