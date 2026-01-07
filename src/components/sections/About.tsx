"use client";

import { Reveal } from "@/components/portfolio";
import { profile } from "@/lib/portfolio-data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        {/* LEFT TEXT */}
        <Reveal>
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-600">
              ABOUT
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              {profile.aboutTitle.split(" meaningful ")[0]}{" "}
              <span className="text-blue-600">meaningful</span>{" "}
              {profile.aboutTitle.split(" meaningful ")[1]}
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 whitespace-pre-line">
              {profile.aboutText}
            </div>
          </div>
        </Reveal>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  🎓
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    MS Data Science
                  </p>
                  <p className="text-sm text-slate-600">
                    Indiana University Bloomington • GPA: 3.50/4.00
                  </p>
                  <p className="text-sm text-slate-500">May 2026</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                  🏅
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Key Focus Areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-yellow-300 bg-white px-3 py-1 text-xs text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
