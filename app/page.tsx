"use client";

import React from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/madhulika-utla/",
  github: "https://github.com/madhu1-byte",
  email: "mailto:madhu.myskss@gmail.com",
  resumePdf: "/Madhulika_Resume.pdf",
};

const SKILLS = [
  "C#",
  ".NET",
  "Python",
  "SQL",
  "GraphQL",
  "Apollo Studio",
  "Power BI",
  "DAX",
  "Concurrency",
  "Multithreading",
  "Operating Systems",
  "Data Pipelines",
  "Git",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
      : "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-50";
  return (
    <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      {subtitle ? <p className="text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}

export default function Page() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 relative overflow-hidden">
      {/* Subtle blue glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold tracking-tight hover:text-blue-700">
            Madhulika Utla
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-zinc-600 hover:text-blue-700" href="#projects">
              Projects
            </a>
            <a className="text-zinc-600 hover:text-blue-700" href="#resume">
              Resume
            </a>
            <a className="text-zinc-600 hover:text-blue-700" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Compact header */}
        <motion.section
          className="py-10 md:py-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-start">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Hello!
              </h1>

              <p className="max-w-xl text-zinc-600">
                Hi, I’m Madhulika Utla, a Computer Science graduate seeking a job opportunity in software or technology-driven roles. I have experience working with artificial intelligence and applied software systems, and I enjoy building AI-powered solutions that simplify workflows, improve decision-making, and make everyday tasks easier. My background includes working with Python, Java, C#, and modern development tools in practical, problem-driven environments.
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={LINKS.linkedin}>LinkedIn</ButtonLink>
                <ButtonLink href={LINKS.github} variant="secondary">
                  GitHub
                </ButtonLink>
                <a
                  href={LINKS.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border border-zinc-200 bg-white hover:bg-zinc-50"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Profile card */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-zinc-200">
                  <Image
                    src="/Headshot.png"
                    alt="Madhulika Utla headshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="mt-4 text-sm font-semibold text-zinc-900">
                  Madhulika Utla
                </p>
                <p className="mt-1 text-sm text-zinc-600">Software • AI • Data</p>

                {/* Skills pills under name/photo */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {SKILLS.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <SectionTitle
            eyebrow="Work"
            title="Projects"
          />

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <ul className="divide-y divide-zinc-200">
              {projects.map((p) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35 }}
                  className="p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-zinc-900">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">{p.blurb}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-100"
                      >
                        Details
                      </button>

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                      >
                        GitHub →
                      </a>

                      {p.demo ? (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-xl border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          Live Demo →
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="py-12">
          <SectionTitle
            eyebrow="Resume"
            title="Resume"
            subtitle="View inline or open in a new tab."
          />

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between gap-3 p-4 border-b border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900">Madhulika_Resume.pdf</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={LINKS.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  Open in new tab →
                </a>
                <a
                  href={LINKS.resumePdf}
                  download
                  className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  Download ↓
                </a>
              </div>
            </div>

            <div className="h-[75vh] w-full">
              <object
                data={LINKS.resumePdf}
                type="application/pdf"
                className="h-full w-full"
              >
                <div className="p-5 text-sm text-zinc-600">
                  Your browser can’t display PDFs inline.{" "}
                  <a
                    href={LINKS.resumePdf}
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to open the resume.
                  </a>
                </div>
              </object>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <SectionTitle
            eyebrow="Contact"
            title="Contact"
            subtitle="Email or LinkedIn are the fastest ways to reach me."
          />

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-5">
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <a
                href={LINKS.email}
                className="text-base font-medium text-zinc-900 hover:underline"
              >
                madhu.myskss@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Phone</p>
              <a
                href="tel:+14785887289"
                className="text-base font-medium text-zinc-900 hover:underline"
              >
                +1 (478) 588 7289
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <ButtonLink href={LINKS.linkedin}>LinkedIn</ButtonLink>
              <ButtonLink href={LINKS.github} variant="secondary">
                GitHub
              </ButtonLink>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} Madhulika Utla
        </footer>
      </main>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close modal"
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative z-10 w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg"
              initial={{ scale: 0.97, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm text-zinc-600">
  {selectedProject.details}
</p>

                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  GitHub Repo →
                </a>

                {selectedProject.demo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Live Demo →
                  </a>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
