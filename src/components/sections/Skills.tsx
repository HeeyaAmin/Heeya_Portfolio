"use client";

import { Reveal } from "@/components/portfolio";
import { skillCards } from "@/lib/portfolio-data";

function iconFor(type: string) {
  // Simple emoji icons to match Base44 vibe without extra deps
  switch (type) {
    case "code":
      return "⌘";
    case "brain":
      return "🧠";
    case "chart":
      return "📊";
    case "db":
      return "🗄️";
    case "cloud":
      return "☁️";
    case "tools":
      return "🧰";
    default:
      return "•";
  }
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-blue-600">
            EXPERTISE
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A comprehensive toolkit for end-to-end data science solutions
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skillCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                    {iconFor(card.icon)}
                  </div>
                  <p className="font-semibold text-slate-900">{card.title}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
