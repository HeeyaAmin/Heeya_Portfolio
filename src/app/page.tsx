'use client';
import Link from "next/link";


import React, { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, Sun, Moon } from "lucide-react";
import { motion, MotionProps } from "framer-motion";

const MotionSection: React.FC<React.HTMLAttributes<HTMLElement> & MotionProps> = motion.section;

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
const [formError, setFormError] = useState<string | null>(null);

const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus("submitting");
  setFormError(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/xyzrdyva", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      const data = await res.json().catch(() => null);
      setFormStatus("error");
      setFormError(
        data?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email me at heeyaamin03@gmail.com."
      );
    }
  } catch (err) {
    console.error(err);
    setFormStatus("error");
    setFormError("Network error. Please try again in a bit.");
  }
};


  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const proficiencies = [
    { label: "Programming Languages (Python, Java, C/C++, R, JavaScript/TypeScript)", level: 9 },
    { label: "Machine Learning & AI (scikit-learn, TensorFlow/PyTorch, LangChain)", level: 8 },
    { label: "Backend & APIs (Node/Express, FastAPI, REST)", level: 9 },
    { label: "Frontend (React, Next.js, Tailwind, PWAs)", level: 8 },
    { label: "Databases (MySQL, MongoDB, Firebase, SQL)", level: 9 },
    { label: "Data Engineering (ETL, Pandas, NumPy, batching)", level: 8 },
    { label: "Cloud & DevOps (GCP, AWS, Docker, CI/CD)", level: 8 },
    { label: "Statistics & Mathematics (Regression, Hypothesis Testing)", level: 8 },
    { label: "Big Data (Hadoop, Spark – coursework/project exposure)", level: 7 },
    { label: "Communication & Collaboration (Docs, Reviews, Demos)", level: 10 },
  ];
  const projects = [
    {
      name: "BlogHive",
      description: "📝 A full-stack AI-powered blog generation app using LangChain, GPT, and MySQL.",
      tech: "Python",
      forks: 42,
      stars: 128,
      size: "12.5 MB",
      url: "https://github.com/HeeyaAmin/Blog_Hive"
    },
    {
      name: "Cloud Resource Optimizer",
      description: "☁️ ML-based optimization for VM scheduling on GCP with linear regression.",
      tech: "Python",
      forks: 31,
      stars: 87,
      size: "9.1 MB",
      url: "https://github.com/HeeyaAmin/ECC"
    },
    {
      name: "Skin Lesion Detector",
      description: "🔬 CNN-based lesion detection using TensorFlow & OpenCV for medical imaging.",
      tech: "Python",
      forks: 56,
      stars: 154,
      size: "24.2 MB",
      url: "https://github.com/HeeyaAmin/Skin-Lesion-Detection"
    }
  ];



  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 py-4 flex justify-between items-center px-4">
        <div className="flex space-x-6">
        <Link href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Heeya Amin Signature Logo"
    className="h-10 w-auto"
  />
</Link>

          <a href="#whatido" className="hover:text-blue-500 transition-colors">What I Do</a>
          <a href="#proficiencies" className="hover:text-blue-500 transition-colors">Proficiencies</a>
          <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-blue-500 transition-colors">Achievements</a>
          <a href="#blog" className="hover:text-blue-500 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Hero Section */}
      <MotionSection
  id="hero"
  // Full-bleed grey gradient + subtle bottom fade that blends into next section
  className="relative w-full text-black dark:text-white overflow-hidden
             py-16 md:py-24
             bg-gradient-to-b from-white via-gray-50 to-gray-100
             dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1c1c1c]
             after:content-[''] after:absolute after:inset-x-0 after:bottom-0
             after:h-20 after:bg-gradient-to-b after:from-transparent
             after:to-gray-100 dark:after:to-[#1c1c1c]
             -mb-4 md:-mb-8"
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Optional ultra-subtle noise/mesh overlay for depth (keeps it grey) */}
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
    style={{
      backgroundImage:
        "radial-gradient(60rem 60rem at 20% -10%, rgba(0,0,0,.08), transparent 40%), radial-gradient(40rem 40rem at 110% 10%, rgba(0,0,0,.06), transparent 40%)",
    }}
  />

  {/* Content container */}
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
    {/* Text */}
    <div className="md:w-2/3 space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Heeya Amin
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
        I’m a Data Science graduate student at <strong>Indiana University</strong> with a passion for
        building intelligent, scalable systems. I specialize in <strong>AI, machine learning, full-stack
        development</strong>, and <strong>cloud computing</strong>. My mission is to craft innovative
        solutions that bridge the gap between complex technologies and real-world needs.
      </p>

      {/* Socials */}
      <div className="flex gap-4 pt-2">
        <a
          href="https://github.com/HeeyaAmin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10 hover:scale-110 transition"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/heeya-amin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10 hover:scale-110 transition"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>

      {/* CTAs */}
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 px-5 rounded-md transition"
        >
          Contact Me
        </a>
        <a
          href="https://drive.google.com/file/d/1YX0TVxbmLM7HnSD2Ih8wEN9Qk0uh2KqQ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-md transition"
        >
          View Resume
        </a>
      </div>
    </div>

    {/* Profile Image */}
    <img
      src="/profile.png"
      alt="Heeya Amin"
      className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover shadow-lg
                 ring-2 ring-white/70 dark:ring-black/40"
    />
  </div>
</MotionSection>





      {/* What I Do Section */}
      <MotionSection id="whatido" className="relative py-20 md:py-28">
  {/* Full-bleed background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/whatido.png')" }}
  />
  {/* Strong, adaptive overlay */}
  <div className="absolute inset-0 bg-white/80 dark:bg-black/65" />

  {/* Content container */}
  <div className="relative max-w-6xl mx-auto px-6 md:px-12">
    {/* Glass card for crisp text */}
    <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Text */}
        <div className="md:w-4/5 space-y-6 text-gray-900 dark:text-gray-100">
          <h2 className="text-4xl font-bold">What I Do</h2>

          {/* Subheading (resume-aligned) */}
          <p className="text-base md:text-lg font-medium tracking-wide">
            Data/ML Engineer & Full-Stack Developer — I build ML systems, scalable APIs, and clean UIs that move metrics.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2">
            {[
              "Machine Learning (sklearn, TensorFlow, PyTorch)",
              "Backend & APIs (Node/Express, Python/FastAPI)",
              "Cloud & DevOps (GCP, AWS, CI/CD)",
              "Front-end (React/Next.js, PWAs)",
              "Data Ops (Pandas, SQL, ETL, Viz)"
            ].map((t) => (
              <span
                key={t}
                className="text-xs md:text-sm px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Outcome bullets (from your resume) */}
          <ul className="space-y-2 text-sm md:text-base mt-2">
            <li>⚡ Improved pricing-conversion forecasting accuracy by <strong>27%</strong> on 500K+ interactions.</li>
            <li>⚡ Built ML workload scheduler that cut idle time by <strong>20%</strong> and cloud cost by <strong>18%</strong>.</li>
            <li>⚡ Deployed a customer-support chatbot with <strong>89%</strong> intent recognition; automated <strong>70%</strong> Tier-1 workflows.</li>
            <li>⚡ Processed <strong>1M+</strong> logs for real-time allocation; reduced latency from <strong>2.3s → 1.7s</strong>.</li>
          </ul>

          {/* Icons (kept) */}
          <div className="flex flex-wrap gap-4 justify-start pt-2">
            {[
              "html5","css3","sass","js","react","node","swift",
              "npm","sql","aws","firebase","python","docker",
            ].map((icon) => (
              <img
                key={icon}
                src={`/tech/${icon}.svg`}
                alt={icon}
                className="h-8 w-8 md:h-10 md:w-10 opacity-90"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</MotionSection>





      {/* Proficiencies Section */}
      <MotionSection
  id="proficiencies"
  className="relative w-full overflow-hidden py-20 md:py-28
             bg-gradient-to-b from-gray-100 via-white to-white
             dark:from-[#1c1c1c] dark:via-[#0f0f0f] dark:to-[#0f0f0f]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Container */}
  <div className="relative max-w-6xl mx-auto px-6 md:px-12">
    {/* Glass card for content (matches hero/what-I-do style) */}
    <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
      <h2 className="text-4xl font-bold text-center mb-8">Proficiencies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proficiencies.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.label}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.level}/10
              </span>
            </div>


            {/* Track */}
            <div className="w-full h-3 rounded-full bg-gray-200/80 dark:bg-zinc-700/70 ring-1 ring-black/5 dark:ring-white/10">
              {/* Fill */}
              <div
                className="h-3 rounded-full transition-all duration-700 ease-in-out
                           bg-gradient-to-r from-indigo-500 to-blue-500
                           group-hover:from-indigo-600 group-hover:to-blue-600"
                style={{ width: `${(item.level / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</MotionSection>


      {/* Education Section */}
      <MotionSection
        id="education"
        className="relative w-full overflow-hidden py-20 md:py-28
                 bg-gradient-to-b from-white via-gray-50 to-gray-100
                 dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1c1c1c]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Container */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          {/* Glass card for content */}
          <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Education</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <img src="/edu/iu.jpg" alt="IU Logo" className="w-38 h-38 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">Indiana University, Bloomington</h3>
                  <p className="font-medium">Master of Science in Data Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2024 – 2026</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Focusing on machine learning, database systems, and cloud infrastructure.</p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
                    <li>Worked on BlogHive AI platform project using LangChain + GPT</li>
                    <li>Completed coursework in advanced data mining and algorithms</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-purple-300/30"></div>

              <div className="flex items-start gap-6">
                <img src="/edu/gtu_logo.png" alt="GTU Logo" className="w-38 h-38 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">Gujarat Technological University</h3>
                  <p className="font-medium">Bachelor of Engineering in Computer Engineering</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020 – 2024</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Graduated with first class distinction. Contributed to NLP and chatbot research.</p>
                  <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400">
                    <li>Published 2 papers on Explainable AI and Chatbots</li>
                    <li>Top 10% of the cohort academically</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection
        id="experience"
        className="relative w-full overflow-hidden py-20 md:py-28
                 bg-gradient-to-b from-gray-100 via-white to-white
                 dark:from-[#1c1c1c] dark:via-[#0f0f0f] dark:to-[#0f0f0f]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Container */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          {/* Glass card for content */}
          <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
            <h2 className="text-4xl font-bold tracking-tight mb-10 text-center">Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience Card 1 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                <div className="bg-purple-700 text-white py-4 text-center text-xl font-semibold">Intuz Software Company</div>
                <div className="flex flex-col items-center p-6">
                  <img src="/exp/intuz.png" alt="Intuz Logo" className="w-30 h-30 rounded-full shadow-lg -mt-10 bg-white" />
                  <h3 className="text-xl font-bold mt-4">AI/ML Intern</h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">May 2023 – Jul 2023</p>
                  <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                    Developed machine learning models to analyze large datasets for client automation projects.
                  </p>
                  <ul className="mt-2 list-disc text-sm list-inside text-gray-500 dark:text-gray-400">
                    <li>Built and deployed ML classification pipelines</li>
                    <li>Created Flask APIs for model integration</li>
                  </ul>
                </div>
              </div>

              {/* Experience Card 2 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                <div className="bg-yellow-600 text-white py-4 text-center text-xl font-semibold">Laurentian University</div>
                <div className="flex flex-col items-center p-6">
                  <img src="/exp/laurentian.png" alt="Laurentian Logo" className="w-30 h-30 rounded-full shadow-lg -mt-10 bg-white" />
                  <h3 className="text-xl font-bold mt-4">Summer Research Intern</h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">May 2023 – Jul 2023</p>
                  <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                    Conducted research in biomedical data analysis, leading to optimized techniques in patient outcome prediction.
                  </p>
                  <ul className="mt-2 list-disc text-sm list-inside text-gray-500 dark:text-gray-400">
                    <li>Applied XAI and LIME techniques</li>
                    <li>Used Python, R, and Sci-kit Learn for modeling</li>
                  </ul>
                </div>
              </div>

              {/* Experience Card 3 */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                <div className="bg-blue-500 text-white py-4 text-center text-xl font-semibold">Oasis Infobyte</div>
                <div className="flex flex-col items-center p-6">
                  <img src="/exp/oasis.jpeg" alt="Oasis Logo" className="w-30 h-30 rounded-full shadow-lg -mt-10 bg-white" />
                  <h3 className="text-xl font-bold mt-4">Data Science Intern</h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Feb 2023 – Mar 2023</p>
                  <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                    Built models to identify trends and insights in business KPIs.
                  </p>
                  <ul className="mt-2 list-disc text-sm list-inside text-gray-500 dark:text-gray-400">
                    <li>Created EDA dashboards</li>
                    <li>Automated report generation using Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection
        id="projects"
        className="relative w-full overflow-hidden py-20 md:py-28
                 bg-gradient-to-b from-white via-gray-50 to-gray-100
                 dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1c1c1c]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Container */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          {/* Glass card for content */}
          <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
            <h2 className="text-4xl font-bold tracking-tight mb-10 text-center">Open Source Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{project.tech}</span>
                    <span>🍴 {project.forks}</span>
                    <span>⭐ {project.stars}</span>
                    <span>{project.size}</span>
                  </div>
                </a>
              ))}

              {/* Embedded YouTube Video Card */}
              <div className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">Intelligent Blogging with AI & SQL</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  🎥 Watch the demo showcasing how LangChain, GPT, SQL, and Flask are used to build a powerful AI-driven blog generation platform.
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                    height: 0,
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/dn7ohTjH9ko"
                    title="Intelligent Blogging with AI & SQL"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                      borderRadius: "12px",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>



      {/* Achievements Section */}
      <MotionSection
        id="achievements"
        className="relative w-full overflow-hidden py-20 md:py-28
                 bg-gradient-to-b from-gray-100 via-white to-white
                 dark:from-[#1c1c1c] dark:via-[#0f0f0f] dark:to-[#0f0f0f]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Container */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          {/* Glass card for content */}
          <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Achievements & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* Paper 1 */}
              <div className="space-y-4 text-center">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-3442-9_21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/illustrations/explainable_ai_snapshot.png"
                    alt="Explainable AI Paper"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  📄 <strong>Explainable AI in Healthcare</strong> – Published in <a href="https://link.springer.com/chapter/10.1007/978-981-97-3442-9_21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Springer (2023)</a>
                </p>
              </div>

              {/* Paper 2 */}
              <div className="space-y-4 text-center">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-7862-1_24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/illustrations/chatbot_paper_snapshot.png"
                    alt="AI Chatbot Paper"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  🤖 <strong>AI Chatbot Research</strong> – Published in <a href="https://link.springer.com/chapter/10.1007/978-981-97-7862-1_24" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Springer (2023)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>


      {/* Blog Section */}
      <MotionSection
        id="blog"
        className="relative w-full overflow-hidden py-20 md:py-28
                 bg-gradient-to-b from-white via-gray-50 to-gray-100
                 dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1c1c1c]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Container */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          {/* Glass card for content */}
          <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Visit My Blog</h2>
            <div className="grid md:grid-cols-2 gap-10 items-end">
              {/* Blog 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <a
                  href="https://medium.com/@heeyaamin1/exploring-the-synergy-between-langchain-and-openai-with-python-9b67893df42c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <img
                    src="/illustrations/langchain_openai_blog.png"
                    alt="LangChain & OpenAI Blog"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 hover:underline">
                    Exploring the Synergy between LangChain and OpenAI with Python
                  </h3>
                </a>
              </div>

              {/* Blog 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <a
                  href="https://medium.com/@heeyaamin1/data-science-internship-ed27ba427cc2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <img
                    src="/illustrations/data_science_internship.png"
                    alt="Data Science Internship Blog"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 hover:underline">
                    Reflections from My Data Science Internship
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>



      {/* Contact Section */}
      <MotionSection
  id="contact"
  className="relative w-full overflow-hidden py-20 md:py-28
             bg-gradient-to-b from-gray-100 via-white to-white
             dark:from-[#1c1c1c] dark:via-[#0f0f0f] dark:to-[#0f0f0f]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Container */}
  <div className="relative max-w-xl mx-auto px-6 md:px-12">
    {/* Glass card for content */}
    <div className="rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10 p-6 md:p-10 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight text-center">Reach Out to Me</h2>

      <form onSubmit={handleContactSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full p-2 border rounded text-black"
        ></textarea>

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 px-4 rounded transition"
        >
          {formStatus === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {formStatus === "success" && (
          <p className="text-sm text-green-600 pt-1 text-center">
            ✅ Thanks for reaching out! I’ll get back to you soon.
          </p>
        )}

        {formStatus === "error" && (
          <p className="text-sm text-red-600 pt-1 text-center">
            {formError}
          </p>
        )}
      </form>
    </div>
  </div>
</MotionSection>


      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">©️ {new Date().getFullYear()} Heeya Amin. All rights reserved.</p>
      </footer>
    </main>
  );
}