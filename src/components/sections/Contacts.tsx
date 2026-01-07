"use client";

import { Reveal } from "@/components/portfolio";
import { profile } from "@/lib/portfolio-data";

function ContactCard({
  label,
  value,
  href,
  icon,
  iconBg = "bg-white",
  iconText = "text-slate-900",
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  iconBg?: string;
  iconText?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={[
        "group flex items-center gap-5 rounded-2xl border border-white/15",
        "bg-white/8 backdrop-blur-md px-6 py-5",
        "shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
        "transition hover:bg-white/12 hover:border-white/25",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-12 w-12 items-center justify-center rounded-2xl",
          iconBg,
          iconText,
          "shadow-sm",
        ].join(" ")}
      >
        {icon}
      </div>

      <div className="text-left">
        <p className="text-xs font-semibold tracking-widest text-white/55">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-white">{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-32"
      style={{
        background:
          // close to your screenshot: blue top glow + purple bottom-right glow
          "radial-gradient(900px 420px at 50% 22%, rgba(59,130,246,0.32), transparent 65%), radial-gradient(700px 420px at 72% 88%, rgba(168,85,247,0.28), transparent 60%), linear-gradient(180deg, #071122 0%, #050814 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <div className="text-xs font-semibold tracking-[0.28em] text-blue-300">
            CONTACT
          </div>

          <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-7 text-white/55">
            MS Data Science graduate actively seeking AI/ML Engineering and Data
            Science opportunities. Let&apos;s connect and explore how I can
            contribute to your team!
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <ContactCard
              label="Email"
              value={profile.links.email}
              href={`mailto:${profile.links.email}`}
              icon={
                // simple inline icon (no dependency)
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-90"
                >
                  <path
                    d="M4 6h16v12H4V6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconBg="bg-white"
              iconText="text-red-500"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ContactCard
              label="LinkedIn"
              value="linkedin.com/in/heeya-amin"
              href={profile.links.linkedin}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-90"
                >
                  <path
                    d="M6.5 9.5V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 18v-4.2c0-1.6.9-2.6 2.3-2.6 1.3 0 2.2.9 2.2 2.6V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 13.5V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              iconBg="bg-white"
              iconText="text-blue-600"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <ContactCard
              label="GitHub"
              value="github.com/HeeyaAmin"
              href={profile.links.github}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-90"
                >
                  <path
                    d="M9 19c-4 1.5-4-2.5-5-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 19v-3.5c0-1 .1-1.5-.5-2.2 2-.2 4-.9 4-4.2 0-.9-.3-1.7-.9-2.4.1-.3.4-1.2-.1-2.4 0 0-.7-.2-2.5.9-.7-.2-1.5-.3-2.3-.3s-1.6.1-2.3.3C8.3 6.3 7.6 6.1 7.6 6.1c-.5 1.2-.2 2.1-.1 2.4-.6.7-.9 1.5-.9 2.4 0 3.3 2 4 4 4.2-.4.5-.5 1-.5 1.8V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconBg="bg-white"
              iconText="text-slate-900"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <ContactCard
              label="Resume"
              value="Download PDF"
              href={profile.links.resume}
              icon={
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-90"
                >
                  <path
                    d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3v4h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 12h7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.5 15h7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              iconBg="bg-white"
              iconText="text-emerald-600"
            />
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <div className="mt-14 flex justify-center">
            <div className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm text-white/65 backdrop-blur-md">
              📍 Open to relocation • Available immediately
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
