"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

const palette = [
  { r: "227, 112, 131", hex: "var(--color-rose)"  },
  { r: "255, 184, 118", hex: "var(--color-amber)" },
  { r: "180, 216, 212", hex: "var(--color-mint)"        },
  { r: "162, 153, 184", hex: "var(--color-mauve)"       },
  { r: "128, 164, 170", hex: "var(--color-steel)"       },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            What I&apos;ve built
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => {
            const c = palette[i % palette.length];
            return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Decorative banner */}
              <div
                className="h-44 relative flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(${c.r}, 0.22) 0%, rgba(${c.r}, 0.10) 100%)`,
                }}
              >
                {/* Large watermark text */}
                <span
                  className="select-none text-7xl font-bold opacity-[0.12]"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: c.hex,
                  }}
                >
                  {project.title}
                </span>

                {/* Role badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: `rgba(${c.r}, 0.15)`,
                    color: c.hex,
                    border: `1px solid rgba(${c.r}, 0.30)`,
                  }}
                >
                  {project.role}
                </div>

                {/* Period badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-mono"
                  style={{
                    background: "var(--background)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {project.period}
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <div className="mb-3">
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm font-mono mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `rgba(${c.r}, 0.10)`,
                        color: c.hex,
                        border: `1px solid rgba(${c.r}, 0.22)`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        background: "var(--background)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-primary)";
                      }}
                    >
                      <GitHubIcon />
                      View on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                      style={{
                        background: "linear-gradient(135deg, var(--color-rose), var(--color-blush))",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px var(--glow)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-sm font-mono"
          style={{ color: "var(--text-secondary)" }}
        >
          More projects coming soon ✨
        </motion.p>
      </div>
    </section>
  );
}
