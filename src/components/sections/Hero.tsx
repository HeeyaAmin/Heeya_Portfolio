"use client";

import { Reveal } from "@/components/portfolio";
import { profile } from "@/lib/portfolio-data";

export default function Hero() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-600">
            📍 {profile.location}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-3 text-xl text-slate-600">{profile.role}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              View Work
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400">
              ↓
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
