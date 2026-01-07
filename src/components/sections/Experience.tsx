"use client";

import { Reveal } from "@/components/portfolio";
import { experience } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-blue-600">
            JOURNEY
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Building expertise through diverse roles in data science and analytics
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block" />

          <div className="space-y-10">
            {experience.map((item, idx) => {
              const left = idx % 2 === 0;
              return (
                <Reveal key={`${item.role}-${item.date}`} delay={idx * 0.08}>
                  <div className="relative grid items-start gap-6 md:grid-cols-2">
                    {/* DOT */}
                    <div className="absolute left-1/2 top-7 hidden -translate-x-1/2 md:block">
                      <div className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                    </div>

                    {/* LEFT SLOT */}
                    <div className={left ? "md:pr-10" : "md:order-2 md:pl-10"}>
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            {item.kind}
                          </span>
                          <span className="text-xs text-slate-500">{item.date}</span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold text-slate-900">
                          {item.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                          <span className="font-medium">{item.org}</span>
                          <span className="text-slate-400">•</span>
                          <span>{item.location}</span>
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT SLOT (empty to create alternation) */}
                    <div className={left ? "hidden md:block" : "hidden md:block"} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
