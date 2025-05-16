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

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const proficiencies = [
    { label: "🧠 Problem Solving & Data Structures", level: 8 },
    { label: "💻 Programming Languages (Python, Java, C++, R, JavaScript)", level: 9 },
    { label: "🛢️ Database Management (MySQL, MongoDB, Firebase)", level: 9 },
    { label: "🗣️ Communication and Collaboration", level: 10 },
    { label: "📈 Statistics and Mathematics", level: 8 },
    { label: "🤖 Machine Learning and AI (TensorFlow, PyTorch, LangChain)", level: 8 },
    { label: "📊 Data Visualization (Tableau, Power BI)", level: 9 },
    { label: "🗂️ Big Data (Hadoop, Spark)", level: 9 },
    { label: "☁️ Cloud Computing (GCP, Docker)", level: 8 },
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
  className="w-full bg-gradient-to-t from-white via-[#e3f2fd] to-[#fef9f9] dark:from-[#111] dark:via-[#2e2e2e] dark:to-[#1f1f1f] text-black dark:text-white px-4 sm:px-8 py-20"

  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto text-left">
    {/* Text Section */}
    <div className="md:w-2/3 space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Heeya Amin</h1>
      <p className="text-lg leading-relaxed">
        I’m a Data Science graduate student at Indiana University with a deep passion for building intelligent, scalable systems.
        I specialize in AI, machine learning, full-stack development, and cloud computing. My mission is to craft innovative
        solutions that bridge the gap between complex technologies and real-world needs.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/HeeyaAmin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-transform hover:scale-110"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/heeya-amin/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-transform hover:scale-110"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
        >
          Contact Me
        </a>
        <a
          href="/Heeya_Amin_Resume.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>

    {/* Image Section */}
    <img
      src="/profile.png"
      alt="Heeya Amin"
      className="w-40 h-52 md:w-56 md:h-72 rounded-full shadow-lg object-cover"
    />
  </div>
</MotionSection>



      {/* What I Do Section */}
      <MotionSection
  id="whatido"
  className="max-w-6xl mx-auto space-y-8 pt-24 md:pt-32"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col md:flex-row items-stretch gap-8">
    {/* Image Section */}
    <div className="md:w-1/2 h-full flex items-center justify-center">
      <img
        src="/whatido.png"
        alt="Ghibli AI Illustration"
        className="h-full w-auto max-h-[500px] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
      <h2 className="text-4xl font-bold">What I Do</h2>
      <p className="uppercase tracking-wider text-sm text-gray-500 dark:text-gray-300 font-semibold">
        Crazy Full Stack Developer Who Wants To Explore Every Tech Stack
      </p>
      <div className="flex flex-wrap gap-4 justify-start">
        {[
          "html5",
          "css3",
          "sass",
          "js",
          "react",
          "node",
          "swift",
          "npm",
          "sql",
          "aws",
          "firebase",
          "python",
          "docker",
        ].map((icon) => (
          <img
            key={icon}
            src={`/tech/${icon}.svg`}
            alt={icon}
            className="h-10 w-10"
          />
        ))}
      </div>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-4">
        <li>
          ⚡ Develop highly interactive Front end / User Interfaces for your web
          and mobile applications
        </li>
        <li>
          ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
        </li>
        <li>
          ⚡ Integration of third party services such as Firebase/ AWS / Digital
          Ocean
        </li>
      </ul>
    </div>
  </div>
</MotionSection>


      {/* Proficiencies Section */}
      <MotionSection id="proficiencies" className="max-w-5xl mx-auto space-y-8 pt-24 md:pt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-center">Proficiencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proficiencies.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${(item.level / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* Education Section */}
      <MotionSection id="education" className="max-w-5xl mx-auto space-y-12 pt-24 md:pt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold tracking-tight mb-4">Education</h2>

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

        <div className="border-t border-purple-300"></div>

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
      </MotionSection>

      {/* Experience Section */}
      <MotionSection id="experience" className="max-w-6xl mx-auto space-y-12 pt-24 md:pt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
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
      </MotionSection>

      {/* Projects Section */}

      <MotionSection id="projects" className="max-w-6xl mx-auto space-y-12 pt-24 md:pt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
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
</MotionSection>



      {/* Achievements Section */}
      <MotionSection
  id="achievements"
  className="max-w-6xl mx-auto pt-24 md:pt-32"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
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
</MotionSection>


      {/* Blog Section */}
      <MotionSection
  id="blog"
  className="max-w-6xl mx-auto pt-24 md:pt-32"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
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

</MotionSection>



      {/* Contact Section */}
      <MotionSection id="contact" className="max-w-xl mx-auto space-y-4 pt-24 md:pt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight text-center">Reach Out to Me</h2>
        <form
          action="https://formspree.io/f/xoqgrldz"
          method="POST"
          className="space-y-4"
        >
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </MotionSection>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Heeya Amin. All rights reserved.</p>
      </footer>
    </main>
  );
}
