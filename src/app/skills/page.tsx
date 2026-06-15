import Navbar from "@/components/portfolio/Navbar";
import Link from "next/link";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R", "Java", "C", "TypeScript", "JavaScript"],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "A/B Testing",
      "Forecasting",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
  {
    title: "Databases & Platforms",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Databricks",
      "Hadoop",
      "Spark",
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "GitHub",
      "Flask",
      "FastAPI",
      "Google Earth Engine",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Skills</h1>

        <div className="mt-10 space-y-10">
          {skillGroups.map((group) => (
            <section key={group.title}>
              <h2 className="text-2xl font-medium tracking-tight text-white">
                {group.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}