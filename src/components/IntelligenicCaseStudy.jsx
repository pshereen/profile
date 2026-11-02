const facts = [
  ['Focus', 'Reusable frontend architecture'],
  ['Stack', 'React · TypeScript · Material UI'],
  ['Verification', 'Vitest · Testing Library'],
];

export default function IntelligenicCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          ← Back to projects
        </button>

        <article className="space-y-8 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Frontend architecture case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">A reusable bridge between AI agents and product UI</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              I designed and implemented a typed CodeNexus package that lets an AI agent discover and activate approved interface elements in a host React application—without giving it arbitrary DOM access.
            </p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-3">
            {facts.map(([term, detail]) => (
              <div key={term}><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">{detail}</dd></div>
            ))}
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">The product need</h2>
            <p>
              The agent could answer questions and work with documents, but it could not complete ordinary interface actions such as opening a tab or navigating to a product area. The solution needed to support many host experiences without coupling the shared package to one application&apos;s routes, components, or visual system.
            </p>
            <p>
              Direct DOM control would have been brittle and unsafe. I chose an explicit registry: host applications decide which elements an agent can see and activate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">My role</h2>
            <p>
              I authored the design specification and implementation plan, defined the public TypeScript contracts, built the React bridge and tools, created reusable Material UI renderers, added package exports and tests, and integrated the system into Intelligenic production workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">System design</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-indigo-100 p-5">
                <h3 className="font-bold text-[var(--color-brand)]">1. Semantic element model</h3>
                <p className="mt-2 text-gray-600">Each registered element has a stable ID, human-readable label, role, group, description, and enabled/visible state.</p>
              </div>
              <div className="rounded-xl border border-indigo-100 p-5">
                <h3 className="font-bold text-[var(--color-brand)]">2. Host-owned adapter</h3>
                <p className="mt-2 text-gray-600">A small adapter lists elements, activates one by ID, and publishes state changes while keeping product-specific logic in the host.</p>
              </div>
              <div className="rounded-xl border border-indigo-100 p-5">
                <h3 className="font-bold text-[var(--color-brand)]">3. Typed agent tools</h3>
                <p className="mt-2 text-gray-600">Separate discovery and mutation tools expose only registered actions and return structured success or failure reasons.</p>
              </div>
              <div className="rounded-xl border border-indigo-100 p-5">
                <h3 className="font-bold text-[var(--color-brand)]">4. Replaceable presentation</h3>
                <p className="mt-2 text-gray-600">Core behavior lives in the React package; default tool-result renderers live in a separate Material UI package.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Design-system thinking</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Clear boundaries:</strong> behavior, presentation, agent guidance, and host integration are separate modules.</li>
              <li><strong>Composable API:</strong> applications implement an adapter and can use the default renderers or provide their own.</li>
              <li><strong>Consistent states:</strong> disabled, hidden, missing, host-error, and activated outcomes have explicit contracts.</li>
              <li><strong>Constrained flexibility:</strong> the shared abstraction serves different products while hosts retain control of available actions.</li>
              <li><strong>Documented adoption:</strong> the package includes a reference integration, public exports, usage guidance, and an agent skill specification.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Testing and iteration</h2>
            <p>
              I added Vitest and Testing Library coverage for initial and changing UI context, subscription cleanup, element prioritization, tool behavior, adapter failures, and Material UI renderer output. A demo adapter served as an executable integration example.
            </p>
            <p>
              Production use in Intelligenic then exposed the harder interaction details: stale actions after navigation, repeated integration prompts, deterministic routing, current-product context, work-product navigation, and safe review flows. I iterated on those behaviors based on real workflows rather than treating the package API as finished after its first release.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Outcome</h2>
            <p>
              The result is a reusable frontend capability that turns conversational intent into visible, bounded product actions. CodeNexus supplies the contracts and integration primitives; host applications choose the actions, presentation, and business behavior. In Intelligenic, the same approach supports navigation, contextual forms, files, work products, document workflows, integration status, and long-running progress updates.
            </p>
          </section>

          <section className="space-y-2 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">What I learned</h2>
            <p>
              Reusable frontend systems need both a narrow contract and room for product-specific expression. AI interfaces make that balance especially important: generated intent should be treated as input to a tested component and state system, not as permission to bypass it.
            </p>
            <p className="text-sm text-gray-500">The production repositories are private; this case study describes my engineering contributions without publishing proprietary source.</p>
          </section>
        </article>
      </div>
    </section>
  );
}
