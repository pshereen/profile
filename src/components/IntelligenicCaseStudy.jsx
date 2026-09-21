export default function IntelligenicCaseStudy({ onBack }) {
  return (
    <section className="min-h-screen bg-[#4338ca] px-6 py-10 md:px-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 text-white font-semibold hover:text-lime-200 transition cursor-pointer"
        >
          ← Back to Projects
        </button>

        <article className="bg-white rounded-2xl p-6 md:p-10 shadow-xl text-gray-800 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#4338ca]">
            Intelligenic AI Agent-to-UI Bridge Case Study
          </h1>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">Problem</h2>
            <p>
              Intelligenic needed an AI assistant that could do more than generate text. It had to understand the
              user&apos;s current product, hierarchy, page, work product, and active document section—then safely
              translate natural-language requests into visible UI actions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">My Role</h2>
            <p>
              I designed and implemented the frontend agent-to-UI integration, including the bridge architecture,
              typed tools, application-context adapters, streamed responses, document-editing workflows, and
              confirmation safeguards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">Architecture</h2>
            <p>The bridge connects four layers:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <strong>React application state</strong> supplies live product, navigation, document, file, and user
                context.
              </li>
              <li>
                <strong>Context and tool adapters</strong> expose narrowly scoped, typed capabilities to the agent.
              </li>
              <li>
                <strong>The AI agent</strong> selects tools and returns structured events through a streaming
                interface.
              </li>
              <li>
                <strong>UI renderers and event buses</strong> turn those events into navigation, interactive cards,
                staged document edits, uploads, integration flows, and application-state updates.
              </li>
            </ol>
            <p>
              Mutating operations use explicit contracts and confirmation hooks. Document edits are staged for review
              instead of being applied silently.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">Challenges</h2>
            <p>
              The main challenge was keeping an asynchronous AI agent synchronized with a stateful application. The
              system had to handle changing page context, streamed events split across network chunks, stale state,
              tool failures, duplicate completion signals, and multi-step workflows such as OAuth connections and
              document generation.
            </p>
            <p>
              It also had to prevent the agent from claiming an action succeeded when the UI or backend had not
              actually changed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">Solution</h2>
            <p>
              I created a typed bridge that separates reasoning from execution. The agent can only act through
              registered tools backed by application adapters. Live UI context is injected into each interaction,
              while event-driven components render progress and results inside the product.
            </p>
            <p>
              I also implemented resilient SSE buffering, structured completion and error handling, staged-edit
              workflows, explicit confirmation gates for destructive or consequential actions, and clear boundaries
              between read-only context tools and mutation tools.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#4338ca]">Outcome</h2>
            <p>
              The result was an AI assistant embedded as a functional product interface rather than a standalone
              chatbot. Users can navigate the application, inspect context, edit documents, upload knowledge,
              generate work products, and complete integration workflows conversationally—with actions reflected
              directly in the UI and protected by review and confirmation controls.
            </p>
            <p>
              The production repository is private; this case study describes the architecture and engineering work
              without exposing proprietary source code.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
