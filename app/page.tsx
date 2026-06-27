export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          AI • Automation • Software
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Paweł Giemza
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-300">
          AI Systems Engineer. Buduję systemy AI, automatyzacje, aplikacje
          webowe i produkcyjne oprogramowanie dla firm.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:pawelgiemza@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-zinc-200"
          >
            Kontakt
          </a>

          <a
            href="https://github.com/jahnejanne"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">AI Systems</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              LLM, agentic workflows, automatyzacja procesów i integracje AI.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Software Architecture</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Backend, frontend, systemy rozproszone, API i skalowalne
              aplikacje.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Automation</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Automatyzuję rzeczy, które są zbyt wolne, drogie albo powtarzalne.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
