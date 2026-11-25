const facts = [
  ['Focus', 'Self-service access'],
  ['Backend', 'Python · PostgreSQL'],
  ['Integrations', 'Stripe · Clerk · OAuth'],
  ['Delivery', 'Docker · Azure CI/CD'],
];

export default function SaaSReliabilityCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[var(--color-brand)] px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <button type="button" onClick={onBack} className="mb-6 font-semibold text-white transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Back to projects</button>

        <article className="space-y-9 rounded-2xl bg-white p-6 text-gray-800 shadow-xl md:p-10">
          <header>
            <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-indigo-500">Full-stack reliability case study</p>
            <h1 className="text-3xl font-extrabold text-[var(--color-brand)] md:text-5xl">Reliable onboarding, subscriptions, and product access</h1>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-600">I worked across the customer journey from sign-up and plan selection to webhook processing, entitlement recovery, protected routes, account deletion, analytics attribution, and external project integrations.</p>
          </header>

          <dl className="grid gap-4 rounded-xl bg-indigo-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([term, detail]) => <div key={term}><dt className="text-sm font-semibold uppercase tracking-wide text-gray-500">{term}</dt><dd className="mt-1 font-semibold text-[var(--color-brand)]">{detail}</dd></div>)}
          </dl>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Why this work mattered</h2>
            <p>Payment and identity systems are distributed workflows. A successful checkout does not guarantee that every webhook, database write, browser redirect, or role update succeeds at the same time. The interface needed clear access states, while the backend needed durable recovery rather than assuming the happy path.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Capabilities delivered</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Identity and access</h3><p className="mt-2 text-gray-600">Clerk-based sign-up, user-profile flows, subscription-aware navigation, protected routes, account deletion, and role-based access behavior.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Subscription lifecycle</h3><p className="mt-2 text-gray-600">Stripe checkout and plan mapping, verified webhook handling, subscription synchronization, and environment-specific price configuration.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Durable recovery</h3><p className="mt-2 text-gray-600">A PostgreSQL-backed webhook inbox, background processing, entitlement reconciliation, retry-safe state transitions, and regression coverage for partial failures.</p></div>
              <div className="rounded-xl border border-indigo-100 p-5"><h3 className="font-bold text-[var(--color-brand)]">Connected workflows</h3><p className="mt-2 text-gray-600">Azure DevOps synchronization, OAuth token refresh, integration status and disconnect flows, plus GA4 acquisition and acceptance events.</p></div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Recovery-oriented design</h2>
            <div className="rounded-xl bg-emerald-950 p-5 text-white">
              <ol className="grid gap-3 text-center text-sm font-semibold md:grid-cols-5">
                <li className="rounded-lg bg-white/10 p-3">Verify event</li>
                <li className="rounded-lg bg-white/10 p-3">Persist inbox</li>
                <li className="rounded-lg bg-white/10 p-3">Process safely</li>
                <li className="rounded-lg bg-white/10 p-3">Reconcile access</li>
                <li className="rounded-lg bg-lime-200 p-3 text-emerald-950">Recover user</li>
              </ol>
            </div>
            <p>This design separates receiving an external event from applying its business effects. If a downstream dependency fails, the event remains available for retry and the reconciliation path can restore the user&apos;s entitlement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brand)]">Outcome</h2>
            <p>The work turned onboarding and billing into an observable, recoverable product system rather than a collection of redirects and callbacks. It also demonstrates the backend, database, security, testing, and operational delivery that support the interfaces I build.</p>
          </section>

          <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">The production repository is private; this case study summarizes my authored contributions without exposing credentials, proprietary source, or customer information.</p>
        </article>
      </div>
    </section>
  );
}
