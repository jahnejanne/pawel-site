"use client";

import { useState } from "react";

import AutomationFlowHero from "@/components/AutomationFlowHero";

type Lang = "en" | "pl";

const content = {
  en: {
    eyebrow: "AI Systems • Automation • Software",
    title: "Paweł Giemza",
    subtitle:
      "I build AI systems that replace repetitive work, automate business processes and create software tailored to your company.",
    subline:
      "Describe the manual work in your company — I’ll tell you what can be automated.",
    cta: "Describe your problem",
    pricingCta: "See examples",
    available: "Available now",
    priceLabel: "Starting from",
    price: "50 PLN/h",
    priceHint: "approx. €12/h",
    priceNote: "Fixed-price projects also available.",
    visualTitle: "AI Automation",
    visualSubtitle: "Manual work → automated workflow",
    cardsTitle: "What can I automate?",
    servicesTitle: "Examples",
    contactTitle: "Describe your problem",
    contactText:
      "Send a short message with what you do manually. I’ll tell you whether AI or automation can solve it.",
    cards: [
      [
        "Content workflows",
        "Reels, posts, scripts, captions, thumbnails and repeatable publishing workflows.",
      ],
      [
        "Office automation",
        "Emails, documents, reports, CRM updates, lead handling and repetitive admin work.",
      ],
      [
        "Websites & tools",
        "Landing pages, internal tools, dashboards, MVPs and custom business software.",
      ],
    ],
    services: [
      "Reels / social media automation",
      "AI content workflows",
      "Lead generation automation",
      "Email and document automation",
      "Reports and dashboards",
      "Customer support automation",
      "CRM and sales workflows",
      "Websites and landing pages",
      "Internal business tools",
    ],
    chips: ["Content", "Leads", "Emails", "Reports", "Websites"],
  },
  pl: {
    eyebrow: "Systemy AI • Automatyzacja • Software",
    title: "Paweł Giemza",
    subtitle:
      "Buduję systemy AI, które zastępują powtarzalną pracę, automatyzują procesy firmowe i tworzą software dopasowany do Twojej firmy.",
    subline:
      "Opisz ręczną pracę w swojej firmie — powiem Ci, co da się zautomatyzować.",
    cta: "Opisz problem",
    pricingCta: "Zobacz przykłady",
    available: "Dostępny od zaraz",
    priceLabel: "Od",
    price: "50 PLN/h",
    priceHint: "ok. €12/h",
    priceNote: "Możliwa też wycena fixed price.",
    visualTitle: "Automatyzacja AI",
    visualSubtitle: "Ręczna praca → automatyczny workflow",
    cardsTitle: "Co mogę zautomatyzować?",
    servicesTitle: "Przykłady",
    contactTitle: "Opisz problem",
    contactText:
      "Napisz krótko, co robisz ręcznie. Powiem Ci, czy AI albo automatyzacja mogą to rozwiązać.",
    cards: [
      [
        "Content workflow",
        "Rolki, posty, skrypty, opisy, miniatury i powtarzalne workflow do publikacji.",
      ],
      [
        "Automatyzacja biura",
        "Maile, dokumenty, raporty, CRM, obsługa leadów i powtarzalna praca administracyjna.",
      ],
      [
        "Strony i narzędzia",
        "Landing page, narzędzia wewnętrzne, dashboardy, MVP i custom software.",
      ],
    ],
    services: [
      "Automatyzacja rolek / social media",
      "Workflow AI do contentu",
      "Automatyzacja lead generation",
      "Automatyzacja maili i dokumentów",
      "Raporty i dashboardy",
      "Automatyzacja obsługi klienta",
      "CRM i procesy sprzedażowe",
      "Strony i landing page",
      "Narzędzia wewnętrzne dla firm",
    ],
    chips: ["Content", "Leady", "Maile", "Raporty", "Strony"],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02030a] px-6 py-8 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,0.36),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(14,165,233,0.24),transparent_30%),radial-gradient(circle_at_50%_72%,rgba(79,70,229,0.16),transparent_42%),linear-gradient(180deg,#070817_0%,#02030a_48%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]" />

      <section className="relative mx-auto flex max-w-7xl flex-col">
        <header className="flex items-center justify-between">
          <div className="flex h-10 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-widest text-violet-300 backdrop-blur">
            PG
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl">
            {(["en", "pl"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  lang === item
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <section className="grid min-h-[72vh] items-center gap-12 py-12 lg:grid-cols-[0.92fr_1.08fr]">
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

            <p className="mt-5 max-w-2xl text-lg leading-8 text-violet-200/90">
              {t.subline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:pawelgiemza@gmail.com"
                className="rounded-full bg-white px-7 py-4 text-center font-medium text-black transition hover:bg-zinc-200"
              >
                {t.cta}
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-center font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                {t.pricingCta}
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
            <div className="relative rounded-[1.9rem] border border-white/10 bg-black/30 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    {t.visualTitle}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {t.visualSubtitle}
                  </p>
                </div>

                <div
                  id="pricing"
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-right backdrop-blur"
                >
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

              <div className="relative mx-auto my-8 h-80 max-w-full">
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

            <div className="relative mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-6 text-zinc-400">{t.priceNote}</p>

              <a
                href="mailto:pawelgiemza@gmail.com"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                pawelgiemza@gmail.com
              </a>
            </div>
          </aside>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.cardsTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.cards.map(([title, description]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mt-24 border-t border-white/10 pt-12">
          <h2 className="text-4xl font-semibold tracking-tight">
            {t.servicesTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300 backdrop-blur-xl transition hover:bg-white/[0.07]"
              >
                <span className="mr-3 text-violet-300">✓</span>
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 py-12">
          <h2 className="text-5xl font-semibold tracking-tight">
            {t.contactTitle}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
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
