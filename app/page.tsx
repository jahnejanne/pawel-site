"use client";

import { useState } from "react";

import AutomationFlowHero from "@/components/AutomationFlowHero";

type Lang = "en" | "pl";

const content = {
  en: {
    eyebrow: "AI Systems • Automation • Software",
    title: "Paweł Giemza",
    subtitle:
      "I build AI systems, automations and custom software that remove repetitive work from your business.",
    subline:
      "Describe what your company does manually — I’ll tell you what can be automated.",
    primaryCta: "Describe your problem",
    secondaryCta: "See examples",
    available: "Available now",
    priceLabel: "Starting from",
    price: "50 PLN/h",
    priceHint: "limited availability",
    visualTitle: "AI Automation",
    visualSubtitle: "Manual work → automated workflow",
    contactEmail: "pawelgiemza@gmail.com",
    heroTags: ["AI Automation", "Custom Software", "Fast MVPs", "Fixed Price"],
    buildEyebrow: "Services",
    buildTitle: "What I build",
    build: [
      [
        "01",
        "AI Automation",
        "Systems that handle repetitive tasks, decisions, messages and workflows.",
      ],
      [
        "02",
        "Internal Tools",
        "Dashboards, admin panels, CRM tools, portals and business applications.",
      ],
      [
        "03",
        "Web Applications",
        "Landing pages, MVPs, SaaS products and custom software for companies.",
      ],
      [
        "04",
        "AI Agents",
        "Email, document, customer support and workflow agents connected to your tools.",
      ],
      [
        "05",
        "Integrations",
        "CRM, APIs, Google Workspace, Slack, Teams, spreadsheets and databases.",
      ],
      [
        "06",
        "Reports & Analytics",
        "Automated reports, dashboards, data processing and business intelligence.",
      ],
    ],
    useCasesEyebrow: "Business areas",
    useCasesTitle: "Use cases",
    useCases: [
      ["Marketing", "Content workflows, social media, publishing and assets."],
      ["Sales", "Lead generation, CRM updates, outreach and follow-ups."],
      [
        "Operations",
        "Documents, reports, admin work and repeatable processes.",
      ],
      ["Support", "Customer support automation, knowledge search and replies."],
    ],
    examplesEyebrow: "Selected examples",
    examplesTitle: "Examples",
    examples: [
      "AI content workflows",
      "Lead generation automation",
      "Email and document automation",
      "Reports and dashboards",
      "Customer support automation",
      "CRM and sales workflows",
      "Websites and landing pages",
      "Internal business tools",
      "Custom AI systems",
    ],
    processEyebrow: "Process",
    processTitle: "How I work",
    process: [
      ["01", "You describe the problem"],
      ["02", "I identify what can be automated"],
      ["03", "You receive a simple proposal"],
      ["04", "I build, deploy and improve the system"],
    ],
    contactTitle: "Describe your problem",
    contactText:
      "Send a short message with what you do manually. I’ll tell you whether AI, automation or custom software can solve it.",
    note: "Fixed-price projects also available.",
    chips: ["AI", "CRM", "Emails", "Reports", "Web Apps"],
  },

  pl: {
    eyebrow: "Systemy AI • Automatyzacja • Software",
    title: "Paweł Giemza",
    subtitle:
      "Buduję systemy AI, automatyzacje i custom software, które usuwają powtarzalną pracę z firm.",
    subline:
      "Opisz, co Twoja firma robi ręcznie — powiem Ci, co da się zautomatyzować.",
    primaryCta: "Opisz problem",
    secondaryCta: "Zobacz przykłady",
    available: "Dostępny od zaraz",
    priceLabel: "Od",
    price: "50 PLN/h",
    priceHint: "ograniczona dostępność",
    visualTitle: "Automatyzacja AI",
    visualSubtitle: "Ręczna praca → automatyczny workflow",
    contactEmail: "pawelgiemza@gmail.com",
    heroTags: [
      "Automatyzacje AI",
      "Custom Software",
      "Szybkie MVP",
      "Fixed Price",
    ],
    buildEyebrow: "Usługi",
    buildTitle: "Co buduję",
    build: [
      [
        "01",
        "Automatyzacje AI",
        "Systemy, które obsługują powtarzalne zadania, decyzje, wiadomości i workflow.",
      ],
      [
        "02",
        "Narzędzia wewnętrzne",
        "Dashboardy, panele administracyjne, CRM, portale i aplikacje biznesowe.",
      ],
      [
        "03",
        "Aplikacje webowe",
        "Landing page, MVP, SaaS i custom software dla firm.",
      ],
      [
        "04",
        "Agenci AI",
        "Agenci do maili, dokumentów, obsługi klienta i workflow połączeni z narzędziami.",
      ],
      [
        "05",
        "Integracje",
        "CRM, API, Google Workspace, Slack, Teams, arkusze i bazy danych.",
      ],
      [
        "06",
        "Raporty i analityka",
        "Automatyczne raporty, dashboardy, przetwarzanie danych i BI.",
      ],
    ],
    useCasesEyebrow: "Obszary biznesowe",
    useCasesTitle: "Zastosowania",
    useCases: [
      ["Marketing", "Content workflow, social media, publikacje i materiały."],
      ["Sprzedaż", "Lead generation, CRM, outreach i follow-upy."],
      ["Operacje", "Dokumenty, raporty, administracja i powtarzalne procesy."],
      [
        "Support",
        "Automatyzacja obsługi klienta, knowledge search i odpowiedzi.",
      ],
    ],
    examplesEyebrow: "Wybrane przykłady",
    examplesTitle: "Przykłady",
    examples: [
      "Workflow AI do contentu",
      "Automatyzacja lead generation",
      "Automatyzacja maili i dokumentów",
      "Raporty i dashboardy",
      "Automatyzacja obsługi klienta",
      "CRM i procesy sprzedażowe",
      "Strony i landing page",
      "Narzędzia wewnętrzne dla firm",
      "Custom systemy AI",
    ],
    processEyebrow: "Proces",
    processTitle: "Jak pracuję",
    process: [
      ["01", "Opisujesz problem"],
      ["02", "Identyfikuję, co da się zautomatyzować"],
      ["03", "Dostajesz prostą propozycję"],
      ["04", "Buduję, wdrażam i usprawniam system"],
    ],
    contactTitle: "Opisz problem",
    contactText:
      "Napisz krótko, co robisz ręcznie. Powiem Ci, czy AI, automatyzacja albo custom software mogą to rozwiązać.",
    note: "Możliwa też wycena fixed price.",
    chips: ["AI", "CRM", "Maile", "Raporty", "Web Apps"],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030a] px-5 py-5 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.42),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(14,165,233,0.3),transparent_30%),radial-gradient(circle_at_50%_72%,rgba(79,70,229,0.18),transparent_42%),linear-gradient(180deg,#070817_0%,#02030a_48%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[72rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <section className="relative mx-auto flex max-w-7xl flex-col">
        <header className="flex h-11 items-center justify-between">
          <div className="flex h-9 w-13 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-widest text-violet-300 shadow-[0_0_40px_rgba(168,85,247,0.16)] backdrop-blur">
            PG
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            {(["en", "pl"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  lang === item
                    ? "bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.16)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-5.25rem)] items-center gap-7 py-4 lg:grid-cols-[0.9fr_1.1fr] xl:gap-10">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-zinc-400 sm:text-sm">
              {t.eyebrow}
            </p>

            <h1 className="max-w-4xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-[0.95] tracking-tight text-transparent sm:text-6xl xl:text-7xl 2xl:text-8xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl xl:text-2xl xl:leading-10">
              {t.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-violet-200/90 sm:text-lg">
              {t.subline}
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${t.contactEmail}`}
                className="rounded-full bg-white px-7 py-3.5 text-center font-medium text-black shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                {t.primaryCta}
              </a>

              <a
                href="#examples"
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center font-medium text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_40px_120px_rgba(76,29,149,0.36)] backdrop-blur-xl xl:rounded-[2.4rem] xl:p-5">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/30 p-4 xl:rounded-[1.8rem] xl:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    {t.visualTitle}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {t.visualSubtitle}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {t.priceLabel}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-violet-300">
                    {t.available}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{t.price}</p>
                  <p className="mt-1 text-xs text-zinc-500">{t.priceHint}</p>
                </div>
              </div>

              <div className="relative mx-auto my-4 h-56 max-w-full xl:h-64 2xl:h-72">
                <AutomationFlowHero />
              </div>

              <div className="flex flex-wrap gap-2">
                {t.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-zinc-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-3 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-zinc-400">{t.note}</p>

                <a
                  href={`mailto:${t.contactEmail}`}
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  {t.contactEmail}
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="border-t border-white/10 pt-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/70">
            {t.buildEyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.buildTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.build.map(([number, title, description]) => (
              <div
                key={title}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.08]"
              >
                <p className="mb-5 text-sm font-medium text-violet-300/80">
                  {number}
                </p>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 pt-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/70">
            {t.useCasesEyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.useCasesTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.useCases.map(([title, description]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="examples" className="mt-24 border-t border-white/10 pt-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/70">
            {t.examplesEyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.examplesTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.examples.map((example) => (
              <div
                key={example}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/25 hover:bg-white/[0.07]"
              >
                <span className="mr-3 text-violet-300">✓</span>
                {example}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 pt-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/70">
            {t.processEyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.processTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map(([step, label]) => (
              <div
                key={step}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <p className="text-sm font-medium text-violet-300">{step}</p>
                <p className="mt-5 text-lg font-medium leading-7 text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 py-12">
          <h2 className="max-w-3xl text-5xl font-semibold tracking-tight">
            {t.contactTitle}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {t.contactText}
          </p>

          <a
            href={`mailto:${t.contactEmail}`}
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-medium text-black shadow-[0_18px_60px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            {t.contactEmail}
          </a>
        </section>
      </section>
    </main>
  );
}
