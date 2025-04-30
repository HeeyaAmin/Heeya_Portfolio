'use client';

import React from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion, MotionProps } from "framer-motion";

const MotionSection: React.FC<React.HTMLAttributes<HTMLElement> & MotionProps> = motion.section;



export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 space-y-16">

      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-6 mb-8">
        <a href="#whatido" className="hover:text-blue-500">What I Do</a>
        <a href="#proficiencies" className="hover:text-blue-500">Proficiencies</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#achievements" className="hover:text-blue-500">Achievements</a>
        <a href="#blog" className="hover:text-blue-500">Blog</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>

      {/* Hero Section */}
      <MotionSection className="text-center space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold">Hi, I’m Heeya Amin</h1>
        <p className="text-lg max-w-2xl mx-auto">
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
      <MotionSection id="whatido" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">What I Do</h2>
        <p className="max-w-3xl">
          I transform innovative ideas into real-world applications using artificial intelligence, machine learning, natural language processing, and full-stack development. With hands-on experience in cloud computing, data engineering, and scalable system design, I build intelligent platforms that drive automation and meaningful insights.
        </p>
      </MotionSection>

      {/* Proficiencies Section */}
      <MotionSection id="proficiencies" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Proficiencies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🧠 Problem Solving & Data Structures</li>
          <li>💻 Programming Languages (Python, Java, C++, R, JavaScript)</li>
          <li>🛢️ Database Management (MySQL, MongoDB, Firebase)</li>
          <li>🗣️ Communication and Collaboration</li>
          <li>📈 Statistics and Mathematics</li>
          <li>🤖 Machine Learning and AI (TensorFlow, PyTorch, LangChain)</li>
          <li>📊 Data Visualization (Tableau, Power BI)</li>
          <li>🗂️ Big Data (Hadoop, Spark)</li>
          <li>☁️ Cloud Computing (GCP, Docker)</li>
        </ul>
      </MotionSection>

      {/* Education Section */}
      <MotionSection id="education" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Education</h2>
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
      <MotionSection id="experience" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Intuz Software Company</strong> – AI/ML Intern (2023–2024)</li>
          <li><strong>Laurentian University</strong> – Summer Research Intern (2023)</li>
          <li><strong>Oasis Infobyte</strong> – Data Science Intern (2023)</li>
        </ul>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection id="projects" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-Powered Blog Generator & Editor (LangChain, OpenAI, Flask)</li>
          <li>Cloud Resource Optimization using ML (TensorFlow, GCP)</li>
          <li>Skin Lesion Analysis using CNN (TensorFlow, OpenCV)</li>
        </ul>
      </MotionSection>

      {/* Achievements & Certifications Section */}
      <MotionSection id="achievements" className="space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Achievements & Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Published research on Explainable AI in Healthcare (Springer, 2023)</li>
          <li>Published AI Chatbot research in Springer (2023)</li>
        </ul>
      </MotionSection>

      {/* Blog Link Section */}
      <MotionSection id="blog" className="text-center space-y-2" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold">Visit My Blog</h2>
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
      <MotionSection id="contact" className="max-w-xl mx-auto space-y-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-semibold text-center">Reach Out to Me</h2>
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
