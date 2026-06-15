import Navbar from "@/components/portfolio/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Contact</h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            I’m always open to conversations around data science, machine
            learning, analytics, research, and full-time opportunities.
          </p>

          <p>
            The best way to reach me is by email, but you can also find me on
            GitHub and LinkedIn.
          </p>
        </div>

        <div className="mt-10 space-y-4 text-lg">
          <a
            href="mailto:heeyamin@iu.edu"
            className="block text-zinc-300 hover:text-violet-400"
          >
            heeyamin@iu.edu
          </a>

          <a
            href="https://github.com/HeeyaAmin"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-300 hover:text-violet-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/heeya-amin/"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-300 hover:text-violet-400"
          >
            LinkedIn
          </a>

          <a
            href="/Heeya_Resume_.pdf"
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-300 hover:text-violet-400"
          >
            Resume
          </a>
        </div>
      </div>
    </main>
  );
}