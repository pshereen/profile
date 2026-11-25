const facts = [
  ['Focus', 'Complex product state'],
  ['Frontend', 'React · TypeScript · Redux'],
  ['Interaction', 'REST · SSE · event bus'],
  ['Quality', 'Vitest · RTL · Playwright'],
];

const states = [
  ['Idle', 'A clear generate affordance and enough context to understand the artifact before starting.'],
  ['Generating', 'Live section-level progress, a stable layout, and protection from duplicate actions.'],
  ['Ready', 'Updated content, status, navigation, and editor entry points aligned to the selected hierarchy.'],
  ['Recovery', 'Explicit errors and retry behavior instead of optimistic chat text or a permanently spinning card.'],
];

export default function ProductFrontendCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Back to projects</button>

        <article className="space-y-9 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Stateful product experience case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">Feature Studio: a dependable AI workflow</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">I redesigned and evolved the workspace where users navigate product hierarchies, generate structured work products, review progress, and move between the AI assistant and document editor without losing context.</p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([term, detail]) => <div key={term}><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">{detail}</dd></div>)}
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">The interaction challenge</h2>
            <p>A single user action could depend on the active product, feature, user story, SDLC stage, route, work-product state, editor content, uploaded files, and a long-running backend job. When those inputs drifted apart, users saw stale cards, the wrong hierarchy, repeated prompts, or progress attached to another context.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Workspace architecture</h2>
            <div className="grid gap-3 rounded-xl bg-slate-950 p-4 text-white md:grid-cols-[1fr_2fr_1fr]">
              <div className="rounded-lg bg-slate-800 p-4"><p className="text-xs font-bold uppercase tracking-wide text-lime-200">Hierarchy</p><p className="mt-2 text-sm text-slate-200">Product → Feature → Story selection and filtering</p></div>
              <div className="rounded-lg bg-indigo-700 p-4"><p className="text-xs font-bold uppercase tracking-wide text-lime-200">Work area</p><p className="mt-2 text-sm text-indigo-50">Stages, metrics, artifact cards, progress, and editor navigation</p></div>
              <div className="rounded-lg bg-slate-800 p-4"><p className="text-xs font-bold uppercase tracking-wide text-lime-200">CodeNexus</p><p className="mt-2 text-sm text-slate-200">Context-aware requests and bounded product actions</p></div>
            </div>
            <p>I wrote the redesign specification and implementation plan, mapped prototype tokens to MUI, split the experience into focused components, preserved Redux data flows, and added a local state-machine layer for interaction feedback.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Visible state instead of hidden work</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {states.map(([title, description]) => <div key={title} className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">{title}</h3><p className="mt-2 text-gray-600">{description}</p></div>)}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">What I delivered</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>An expandable product, feature, and user-story tree with selection cascade, sorting, loading states, and work-product filtering.</li>
              <li>Reusable headers, stage tabs, metrics, artifact cards, progress indicators, and responsive layout behavior using MUI and design tokens.</li>
              <li>Real-time generation feedback such as “Generating section 8 of 14,” batch generation, and rebuild states.</li>
              <li>Deterministic agent-assisted navigation between Feature Studio, files, work-product cards, and the editor.</li>
              <li>Persistence safeguards that prevent an empty editor state from replacing meaningful saved content.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Testing and delivery</h2>
            <p>I added unit and interaction coverage around component states, hierarchy behavior, bridge actions, route transitions, and regressions discovered in production. The application moves through environment-specific pipelines, so implementation work included verification and release follow-through rather than stopping at a visual handoff.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Outcome</h2>
            <p>Feature Studio became a clearer progression through complex AI work: users can see where they are, what the system is doing, which context is active, and what they can do next. The work demonstrates frontend architecture, interaction design, application state, agent integration, and production debugging as one discipline.</p>
          </section>

          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">The production repository is private; this case study summarizes my authored contributions without exposing proprietary source or customer data.</p>
        </article>
      </div>
    </section>
  );
}
