"use client";

import { useState } from "react";

import AutomationFlowHero from "@/components/AutomationFlowHero";

type Lang = "en" | "pl";

const content = {
  en: {
    eyebrow: "AI • Automation • Websites",
    title: "Paweł Giemza",
    subtitle:
      "I help companies save time, create faster and automate repetitive work with AI, automation and custom software.",
    subline: "Tell me what you do manually — I’ll help you automate it.",
    cta: "Start a project",
    pricingCta: "See examples",
    available: "Available now",
    price: "50 PLN/h",
    priceHint: "approx. €12/h",
    priceNote: "Fixed-price projects also available.",
    visualTitle: "AI Automation",
    visualSubtitle: "Manual work → automated workflow",
    servicesTitle: "What I can help with",
    contactTitle: "Contact",
    contactText:
      "Send a short message with what you want to automate, improve or build.",
    cards: [
      [
        "AI for content",
        "Reels, posts, scripts, captions, thumbnails and repeatable content workflows.",
      ],
      [
        "Business automation",
        "Emails, forms, reports, CRM updates, lead handling and repetitive office work.",
      ],
      [
        "Websites & tools",
        "Landing pages, internal tools, dashboards, MVPs and custom software.",
      ],
    ],
    services: [
      "Reels / social media automation",
      "AI content workflows",
      "Lead generation automation",
      "Email and document automation",
      "Websites and landing pages",
      "Internal business tools",
    ],
    chips: ["Content", "Leads", "Emails", "Reports", "Websites"],
  },
  pl: {
    eyebrow: "AI • Automatyzacja • Strony",
    title: "Paweł Giemza",
    subtitle:
      "Pomagam firmom oszczędzać czas, szybciej tworzyć i automatyzować powtarzalną pracę dzięki AI, automatyzacji i custom software.",
    subline: "Powiedz, co robisz ręcznie — pomogę Ci to zautomatyzować.",
    cta: "Zacznij projekt",
    pricingCta: "Zobacz przykłady",
    available: "Dostępny od zaraz",
    price: "50 PLN/h",
    priceHint: "ok. €12/h",
    priceNote: "Możliwa też wycena fixed price.",
    visualTitle: "Automatyzacja AI",
    visualSubtitle: "Ręczna praca → automatyczny workflow",
    servicesTitle: "W czym mogę pomóc",
    contactTitle: "Kontakt",
    contactText:
      "Napisz krótko, co chcesz zautomatyzować, poprawić albo zbudować.",
    cards: [
      [
        "AI do contentu",
        "Rolki, posty, skrypty, opisy, miniatury i powtarzalne workflow do publikacji.",
      ],
      [
        "Automatyzacja firmy",
        "Maile, formularze, raporty, CRM, obsługa leadów i powtarzalna praca biurowa.",
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

      <section className="relative mx-auto flex max-w-6xl flex-col">
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

        <section className="grid min-h-[74vh] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
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

          <aside className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
            <div className="relative rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
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
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                    {t.available}
                  </p>
                  <p className="mt-2 text-xl font-semibold">{t.price}</p>
                  <p className="mt-1 text-xs text-zinc-500">{t.priceHint}</p>
                </div>
              </div>

              <div className="relative mx-auto my-6 h-72 max-w-full">
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

        <div className="grid gap-4 sm:grid-cols-3">
          {t.cards.map(([title, description]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:bg-white/[0.07]"
            >
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

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
