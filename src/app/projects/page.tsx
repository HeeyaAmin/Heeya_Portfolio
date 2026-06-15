import Navbar from "@/components/portfolio/Navbar";
import Link from "next/link";

const projects = [
  {
    title: "FADS GEE Dashboard",
    description:
      "Built an interactive platform for visualizing floating solar infrastructure and environmental tradeoffs using Google Earth Engine, satellite imagery, and linked waterbody datasets.",
    link: "https://github.com/HeeyaAmin/fads-gee-dashboard",
  },
  {
    title: "ML-Based Cloud Resource Optimization",
    description:
      "Designed a machine learning workflow for workload prediction and cloud resource scheduling, focusing on cost, utilization, and operational efficiency.",
    link: "https://github.com/HeeyaAmin/ECC",
  },
  {
    title: "Customer Support Chatbot",
    description:
      "Developed an AI-powered support chatbot for e-commerce workflows with intent detection, automated responses, and backend service integration.",
    link: "https://github.com/HeeyaAmin/customer-support-chatbot",
  },
  {
    title: "BlogHive",
    description:
      "Created an AI-assisted blog generation and editing platform using Flask, databases, and LLM workflows for dynamic content creation.",
    link: "https://github.com/HeeyaAmin/Blog_Hive",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Projects</h1>

        <div className="mt-10 space-y-10">
          {projects.map((project) => (
            <article key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <h2 className="text-2xl font-medium tracking-tight text-white hover:text-violet-400">
                  {project.title}
                </h2>
                <p className="mt-3 text-lg leading-8 text-zinc-300">
                  {project.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}