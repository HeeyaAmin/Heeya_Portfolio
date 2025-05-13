'use client';

import React from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion, MotionProps } from "framer-motion";

const MotionSection: React.FC<React.HTMLAttributes<HTMLElement> & MotionProps> = motion.section;

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 space-y-20">

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 py-4 flex justify-center space-x-6">
        <a href="#whatido" className="hover:text-blue-500 transition-colors">What I Do</a>
        <a href="#proficiencies" className="hover:text-blue-500 transition-colors">Proficiencies</a>
        <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
        <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#achievements" className="hover:text-blue-500 transition-colors">Achievements</a>
        <a href="#blog" className="hover:text-blue-500 transition-colors">Blog</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </nav>

      {/* Hero Section */}
      <MotionSection className="text-center space-y-4 max-w-3xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <img src="/profile.png" alt="Heeya Amin" className="w-32 h-40 rounded-full mx-auto shadow-md" />
        
        <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Heeya Amin</h1>
        <p className="text-lg leading-relaxed">
          I’m a Data Science graduate student at Indiana University with a deep passion for building intelligent, scalable systems. I specialize in AI, machine learning, full-stack development, and cloud computing. My mission is to craft innovative solutions that bridge the gap between complex technologies and real-world needs.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/HeeyaAmin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/heeya-amin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </MotionSection>

      {/* What I Do Section */}
      <MotionSection id="whatido" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">What I Do</h2>
        <p className="text-base leading-relaxed">
          I transform innovative ideas into real-world applications using artificial intelligence, machine learning, natural language processing, and full-stack development. With hands-on experience in cloud computing, data engineering, and scalable system design, I build intelligent platforms that drive automation and meaningful insights.
        </p>
      </MotionSection>

      <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded"></div>

      {/* Proficiencies Section */}
      <MotionSection id="proficiencies" className="max-w-4xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Proficiencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["🧠 Problem Solving & Data Structures", "💻 Programming Languages (Python, Java, C++, R, JavaScript)", "🛢️ Database Management (MySQL, MongoDB, Firebase)", "🗣️ Communication and Collaboration", "📈 Statistics and Mathematics", "🤖 Machine Learning and AI (TensorFlow, PyTorch, LangChain)", "📊 Data Visualization (Tableau, Power BI)", "🗂️ Big Data (Hadoop, Spark)", "☁️ Cloud Computing (GCP, Docker)"].map((item, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded"></div>

      {/* Education Section */}
      <MotionSection id="education" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <div>
          <p className="font-bold">Indiana University, Bloomington, IN</p>
          <p>Masters in Data Science (2024–2026) | GPA: 3.5/4.0</p>
        </div>
        <div>
          <p className="font-bold">Gujarat Technological University, Gujarat, India</p>
          <p>Bachelors in Computer Engineering (2020–2024) | GPA: 8.5/10</p>
        </div>
      </MotionSection>

      {/* Experience Section */}
      <MotionSection id="experience" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Intuz Software Company</strong> – AI/ML Intern (2023–2024)</li>
          <li><strong>Laurentian University</strong> – Summer Research Intern (2023)</li>
          <li><strong>Oasis Infobyte</strong> – Data Science Intern (2023)</li>
        </ul>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection id="projects" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-Powered Blog Generator & Editor (LangChain, OpenAI, Flask)</li>
          <li>Cloud Resource Optimization using ML (TensorFlow, GCP)</li>
          <li>Skin Lesion Analysis using CNN (TensorFlow, OpenCV)</li>
        </ul>
      </MotionSection>

      {/* Achievements & Certifications Section */}
      <MotionSection id="achievements" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Achievements & Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Published research on Explainable AI in Healthcare (Springer, 2023)</li>
          <li>Published AI Chatbot research in Springer (2023)</li>
        </ul>
      </MotionSection>

      {/* Blog Link Section */}
      <MotionSection id="blog" className="text-center space-y-2" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight">Visit My Blog</h2>
        <a
          href="https://medium.com/@heeyaamin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded"
        >
          Read My Blog
        </a>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection id="contact" className="max-w-xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
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

    </main>
  );
}
