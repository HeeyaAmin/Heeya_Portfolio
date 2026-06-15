import Navbar from "@/components/portfolio/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-28 text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">About</h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            I’m Heeya Amin, a Data Science graduate student at Indiana University
            Bloomington.
          </p>
          <p>
            My interests lie in machine learning, analytics, geospatial systems,
            data products, and practical AI tools that turn messy information
            into usable solutions.
          </p>
          <p>
            I enjoy building systems that are both technically strong and
            actually useful in the real world.
          </p>
        </div>
      </div>
    </main>
  );
}