export default function EvidenceComparison({
  id,
  title,
  description,
  beforeTitle,
  beforeSummary,
  beforeItems,
  afterTitle,
  afterSummary,
  afterItems,
}) {
  return (
    <figure className="space-y-4" aria-labelledby={id}>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-600">Sanitized before-and-after view</p>
        <h2 id={id} className="mt-2 text-2xl font-bold text-[var(--color-brand)]">{title}</h2>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="grid gap-px bg-slate-700 md:grid-cols-2">
          <section className="bg-slate-900 p-5 text-slate-100" aria-label={`Before: ${beforeTitle}`}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-300">Before</p>
            <h3 className="mt-3 text-lg font-bold text-white">{beforeTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{beforeSummary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {beforeItems.map((item) => <li key={item} className="rounded-lg bg-white/5 px-3 py-2">{item}</li>)}
            </ul>
          </section>
          <section className="bg-indigo-950 p-5 text-indigo-50" aria-label={`After: ${afterTitle}`}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-200">After</p>
            <h3 className="mt-3 text-lg font-bold text-white">{afterTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-indigo-100">{afterSummary}</p>
            <ul className="mt-4 space-y-2 text-sm text-indigo-50">
              {afterItems.map((item) => <li key={item} className="rounded-lg border border-indigo-700 bg-indigo-900/70 px-3 py-2">{item}</li>)}
            </ul>
          </section>
        </div>
      </div>

      <figcaption className="text-sm text-gray-500">
        Sanitized reconstruction based on the shipped workflow—not a production screenshot. Customer data, proprietary copy, and internal identifiers are intentionally omitted.
      </figcaption>
    </figure>
  );
}
