const capabilities = [
  { icon: '◫', title: 'Component systems', description: 'I design typed React APIs, adapter interfaces, and reusable renderers with clear package boundaries. My CodeNexus work separated framework-level bridge logic from Material UI presentation.' },
  { icon: '⌨', title: 'Reliable UI engineering', description: 'I build and test the states around an interaction: enabled, disabled, hidden, loading, success, failure, review, and confirmation. I use Vitest, Testing Library, and Playwright to verify behavior.' },
  { icon: '✦', title: 'AI product interfaces', description: 'I connect AI agents to real products through typed tools, streamed events, contextual UI, staged edits, and safeguards—then evaluate the result in production workflows.' },
];

export default function About({ scrollTo, projectsRef }) {
  return (
    <section id="about" className="bg-lime-50 px-6 py-24 text-gray-800" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">How I work</p>
        <h2 id="about-heading" className="text-center text-4xl font-extrabold text-[var(--color-brand)]">From product need to reusable interface</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          I&apos;m a frontend-focused engineer who enjoys finding the shared pattern inside a product request. I work across React, TypeScript, HTML, CSS, application state, and APIs to create interfaces that are understandable for users and maintainable for teams.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm">
              <div className="text-3xl text-[var(--color-brand)]" aria-hidden="true">{capability.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-[var(--color-brand)]">{capability.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{capability.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[var(--color-brand)] p-7 text-white md:p-9">
          <h3 className="text-2xl font-bold">Selected engineering contributions</h3>
          <ul className="mt-5 grid list-disc gap-3 pl-5 text-indigo-50 md:grid-cols-2 md:gap-x-10">
            <li>Designed a registry-based host-UI bridge for safe agent activation of tabs, links, buttons, menu items, and toggles.</li>
            <li>Published typed React bridge APIs and separate Material UI renderers for reuse by host applications.</li>
            <li>Integrated live application context, navigation, files, work products, and document editing into an AI product interface.</li>
            <li>Added automated coverage for bridge context updates, tool behavior, renderer output, route guards, and production workflows.</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <button type="button" onClick={() => scrollTo(projectsRef)} className="font-semibold text-[var(--color-brand)] underline decoration-2 underline-offset-4 hover:text-indigo-700">See these principles in practice</button>
        </div>
      </div>
    </section>
  );
}
