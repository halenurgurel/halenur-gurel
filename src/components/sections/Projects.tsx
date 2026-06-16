"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

const palette = [
  { r: "227, 112, 131", hex: "var(--color-rose)" },
  { r: "255, 184, 118", hex: "var(--color-amber)" },
  { r: "180, 216, 212", hex: "var(--color-mint)" },
  { r: "162, 153, 184", hex: "var(--color-mauve)" },
  { r: "128, 164, 170", hex: "var(--color-steel)" },
];

function ProjectSlideshow({
  screenshots,
  color,
}: {
  screenshots: string[];
  color: { r: string; hex: string };
}) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const panning = useRef(false);

  const startTimer = useCallback(() => {
    if (!screenshots.length) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((i) => (i + 1) % screenshots.length),
      3500,
    );
  }, [screenshots]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    startTimer();
  }, [startTimer]);

  const goPrev = useCallback(() => {
    setCurrent((i) => (i - 1 + screenshots.length) % screenshots.length);
    startTimer();
  }, [screenshots.length, startTimer]);

  const goNext = useCallback(() => {
    setCurrent((i) => (i + 1) % screenshots.length);
    startTimer();
  }, [screenshots.length, startTimer]);

  const closeLightbox = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, goPrev, goNext]);

  if (!screenshots.length) {
    return (
      <div
        className="flex items-center justify-center aspect-16/10 lg:aspect-auto lg:h-full"
        style={{ background: `rgba(${color.r}, 0.06)` }}
      >
        <span
          className="text-xs font-mono"
          style={{ color: "var(--text-secondary)" }}
        >
          Screenshots coming soon
        </span>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="relative aspect-16/10 lg:aspect-auto lg:h-full overflow-hidden cursor-zoom-in select-none"
        style={{ background: `rgba(${color.r}, 0.06)`, touchAction: "pan-y" }}
        onPanStart={() => { panning.current = true; }}
        onPanEnd={(_, info) => {
          if (info.offset.x < -40) goNext();
          else if (info.offset.x > 40) goPrev();
          setTimeout(() => { panning.current = false; }, 0);
        }}
        onClick={() => { if (!panning.current) setLightbox(true); }}
      >
        {screenshots.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
        {screenshots.length > 1 && (
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background:
                    i === current ? color.hex : `rgba(${color.r}, 0.3)`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {lightbox &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[current]}
                alt={`Screenshot ${current + 1}`}
                width={1280}
                height={900}
                className="object-contain max-h-[90vh] w-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

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
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "var(--text-primary)",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => {
            const c = palette[i % palette.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="grid lg:grid-cols-2 rounded-2xl overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Left: project card */}
                <div className="flex flex-col">
                  {/* Decorative banner */}
                  <div
                    className="h-44 relative flex items-center justify-center overflow-hidden shrink-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(${c.r}, 0.22) 0%, rgba(${c.r}, 0.10) 100%)`,
                    }}
                  >
                    <span
                      className="select-none text-7xl font-bold opacity-[0.12]"
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        color: c.hex,
                      }}
                    >
                      {project.title}
                    </span>

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
                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p
                          className="text-sm font-mono mt-0.5"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>

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

                    <div className="flex gap-3 mt-auto">
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
                            background:
                              "linear-gradient(135deg, var(--color-rose), var(--color-blush))",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 20px var(--glow)";
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
                </div>

                {/* Right: screenshot slideshow */}
                <ProjectSlideshow screenshots={project.screenshots} color={c} />
              </motion.div>
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
          {" "}
        </motion.p>
      </div>
    </section>
  );
}
