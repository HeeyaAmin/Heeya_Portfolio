"use client";

import { Reveal } from "@/components/portfolio";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-blue-600">
            PORTFOLIO
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A selection of data science projects showcasing end-to-end problem solving
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div
                className={[
                  "relative overflow-hidden rounded-2xl border p-6 text-left shadow-sm transition",
                  p.tint,
                  "border-slate-200 hover:shadow-md",
                ].join(" ")}
              >
                <div className={`absolute left-0 top-0 h-1 w-full ${p.bar}`} />

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-slate-700">
                    📁
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-slate-200/70 pt-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <a
                      href={p.code}
                      className="inline-flex items-center gap-2 hover:text-slate-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>🐙</span> Code
                    </a>
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-2 hover:text-slate-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>↗</span> Demo
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
