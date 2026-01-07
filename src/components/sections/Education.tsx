"use client";

import { Reveal } from "@/components/portfolio";
import { education } from "@/lib/portfolio-data";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-blue-600">
            EDUCATION
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Academic Background
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Strong foundation in computer science and data science
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                {/* top gradient bar */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${edu.accent}`}
                />

                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-white ${edu.iconBg}`}
                  >
                    🎓
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-slate-600">
                      {edu.school}
                    </p>
                    <p className="text-sm text-slate-500">
                      {edu.location} • {edu.date}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    Key Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {course}
                      </span>
                    ))}
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
