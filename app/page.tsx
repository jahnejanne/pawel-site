"use client";

import { useState } from "react";

type Lang = "en" | "pl";

const content = {
  en: {
    eyebrow: "AI • Automation • Software",
    title: "Paweł Giemza",
    subtitle:
      "I build AI systems, automations, web applications and production-grade software for companies.",
    cta: "Start a project",
    pricingCta: "View pricing",
    available: "Available now",
    price: "50 PLN/h",
    priceHint: "approx. €12/h",
    priceNote: "Fixed-price projects also available.",
    summary:
      "AI systems, automation, MVPs, internal tools and production software.",
    servicesTitle: "Services",
    contactTitle: "Contact",
    contactText:
      "Send a short message with the problem, context, goal and expected outcome.",
    cards: [
      [
        "AI Systems",
        "LLM apps, agentic workflows, AI integrations, internal tools and prototypes.",
      ],
      [
        "Software",
        "Web apps, backend, frontend, APIs, distributed systems and scalable products.",
      ],
      [
        "Automation",
        "Processes that are slow, expensive, manual or repetitive.",
      ],
    ],
    services: [
      "AI automations",
      "Internal tools",
      "Web applications",
      "Backend systems",
      "AI integrations",
      "MVPs and prototypes",
    ],
  },
  pl: {
    eyebrow: "AI • Automatyzacja • Software",
    title: "Paweł Giemza",
    subtitle:
      "Buduję systemy AI, automatyzacje, aplikacje webowe i produkcyjne oprogramowanie dla firm.",
    cta: "Zacznij projekt",
    pricingCta: "Zobacz cennik",
    available: "Dostępny od zaraz",
    price: "50 PLN/h",
    priceHint: "ok. €12/h",
    priceNote: "Możliwa też wycena fixed price.",
    summary:
      "Systemy AI, automatyzacje, MVP, narzędzia wewnętrzne i produkcyjne oprogramowanie.",
    servicesTitle: "Usługi",
    contactTitle: "Kontakt",
    contactText:
      "Napisz krótko, jaki problem chcesz rozwiązać — najlepiej z kontekstem, celem i oczekiwanym efektem.",
    cards: [
      [
        "Systemy AI",
        "LLM, agentic workflows, integracje AI, narzędzia wewnętrzne i prototypy.",
      ],
      [
        "Software",
        "Aplikacje webowe, backend, frontend, API, systemy rozproszone i skalowalne produkty.",
      ],
      [
        "Automatyzacja",
        "Procesy, które są zbyt wolne, drogie, ręczne albo powtarzalne.",
      ],
    ],
    services: [
      "Automatyzacje AI",
      "Narzędzia wewnętrzne",
      "Aplikacje webowe",
      "Systemy backendowe",
      "Integracje AI",
      "MVP i prototypy",
    ],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030a] px-6 py-8 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.34),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(37,99,235,0.24),transparent_30%),linear-gradient(180deg,#060818_0%,#02030a_48%,#000_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <section className="relative mx-auto flex max-w-6xl flex-col">
        <header className="flex items-center justify-between">
          <div className="flex h-10 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-widest text-violet-300 shadow-2xl shadow-violet-950/40 backdrop-blur">
            PG
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {(["en", "pl"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  lang === item
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <section className="grid min-h-[76vh] items-center gap-12 py-20 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-zinc-400">
              {t.eyebrow}
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold tracking-tight sm:text-8xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300 sm:text-2xl sm:leading-10">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:pawelgiemza@gmail.com"
                className="rounded-full bg-white px-7 py-4 text-center font-medium text-black transition hover:bg-zinc-200"
              >
                {t.cta}
              </a>

              <a
                href="#pricing"
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-center font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                {t.pricingCta}
              </a>
            </div>
          </div>

          <aside
            id="pricing"
            className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-violet-950/30 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
              {t.available}
            </p>

            <p className="mt-8 text-5xl font-semibold tracking-tight">
              {t.price}
            </p>

            <p className="mt-2 text-sm text-zinc-500">{t.priceHint}</p>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {t.priceNote}
            </p>

            <div className="mt-8 h-px bg-white/10" />

            <p className="mt-8 text-sm leading-6 text-zinc-400">{t.summary}</p>

            <a
              href="mailto:pawelgiemza@gmail.com"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              pawelgiemza@gmail.com
            </a>
          </aside>
        </section>

        <div className="grid gap-4 sm:grid-cols-3">
          {t.cards.map(([title, description]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-white/[0.07]"
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-24 border-t border-white/10 pt-12">
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.servicesTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300 backdrop-blur-xl transition hover:bg-white/[0.07]"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 py-12">
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.contactTitle}
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
            {t.contactText}
          </p>

          <a
            href="mailto:pawelgiemza@gmail.com"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-200"
          >
            pawelgiemza@gmail.com
          </a>
        </section>
      </section>
    </main>
  );
}
