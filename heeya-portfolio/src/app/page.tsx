import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I’m Heeya Amin</h1>
        <p className="text-lg max-w-2xl mx-auto">
          I’m a Data Science graduate student at Indiana University with a deep
          passion for building intelligent, scalable systems. With hands-on
          experience in AI, NLP, full-stack development, and cloud computing, I
          craft solutions that bridge real-world needs and emerging technologies.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/HeeyaAmin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/heeya-amin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Project</h2>
        <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold">
            AI-Powered Blog Generator & Editor
          </h3>
          <p className="text-sm py-2">
            Built an AI-powered blog generation tool using LangChain & OpenAI,
            reducing creation time by 40%. Optimized query processing by 96%
            using vectorized SQL queries and deployed using Flask.
          </p>
          <a
            href="https://github.com/HeeyaAmin/Blogs_langOpenAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Resume Section */}
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a
          href="/Heeya_Amin_DataScience_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section className="max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
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
      </section>
    </main>
  );
}
