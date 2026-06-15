import Navbar from "@/components/portfolio/Navbar";
import Link from "next/link";

const experience = [
  {
    role: "Faculty Assistant – Data Science",
    org: "Indiana University Bloomington",
    time: "Jan 2026 — Present",
    description:
      "Building and maintaining Python and SQL pipelines for analytics, reporting, and research support across large-scale data workflows.",
  },
  {
    role: "AI/ML Engineer",
    org: "Intuz Software Company",
    time: "Aug 2023 — Aug 2025",
    description:
      "Worked on machine learning systems, analytics services, experimentation pipelines, and backend applications supporting data-driven product workflows.",
  },
  {
    role: "Machine Learning Research Intern",
    org: "Laurentian University",
    time: "Jul 2023 — Aug 2023",
    description:
      "Conducted model development, evaluation, and research analysis using Python, statistical methods, and interpretable machine learning approaches.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Work</h1>

        <div className="mt-10 space-y-12">
          {experience.map((item) => (
            <article key={`${item.role}-${item.org}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-2xl font-medium tracking-tight text-white">
                  {item.role}
                </h2>
                <span className="text-sm text-zinc-500">{item.time}</span>
              </div>

              <p className="mt-2 text-base text-violet-400">{item.org}</p>

              <p className="mt-4 text-lg leading-8 text-zinc-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}