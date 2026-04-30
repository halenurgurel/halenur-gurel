"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";

function PhotoBlock() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative">
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, var(--color-rose), var(--color-blush), var(--color-lavender), var(--color-mint), var(--color-mauve))",
            filter: "blur(40px)",
            opacity: 0.35,
            transform: "scale(1.12)",
          }}
        />
        <div className="relative gradient-border p-0.75 rounded-2xl">
          <div className="rounded-2xl overflow-hidden" style={{ width: 360, height: 400 }}>
            <Image
              src="/profile.jpg"
              alt="Halenur Gurel"
              width={360}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BioBlock() {
  return (
    <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
      <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Full-Stack Developer</span>{" "}
      with a background in{" "}
      <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Social Media Marketing</span>{" "}
      and CRM strategy. I build scalable, user-friendly interfaces with strong UI/UX awareness —
      bringing a marketer&apos;s eye for what resonates to every product I ship.
    </p>
  );
}

function ExperienceBlock() {
  return (
    <div>
      <p className="text-xs font-mono tracking-[0.25em] uppercase mb-6" style={{ color: "var(--accent)" }}>
        Experience
      </p>
      <div className="space-y-0">
        {experience.map((entry, i) => (
          <motion.div
            key={entry.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full border-2 shrink-0 mt-1"
                style={{ background: "var(--background)", borderColor: entry.accent }}
              />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ background: "var(--border)" }} />
              )}
            </div>
            <div className={i < experience.length - 1 ? "flex-1 pb-8" : "flex-1"}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {entry.role}
                    {entry.current && (
                      <span
                        className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-mono align-middle"
                        style={{
                          background: `color-mix(in srgb, ${entry.accent} 12%, transparent)`,
                          color: entry.accent,
                          border: `1px solid color-mix(in srgb, ${entry.accent} 25%, transparent)`,
                        }}
                      >
                        Now
                      </span>
                    )}
                  </p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    {entry.company} · {entry.location}
                  </p>
                </div>
                <span className="text-xs font-mono shrink-0" style={{ color: entry.accent }}>
                  {entry.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {entry.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ background: entry.accent }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EducationBlock() {
  return (
    <div className="w-full">
      <p className="text-xs font-mono tracking-[0.25em] uppercase mb-4" style={{ color: "var(--accent)" }}>
        Education
      </p>
      <div className="space-y-3">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-3 p-3.5 rounded-xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: ed.accent }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {ed.degree}
                  </p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    {ed.school}
                  </p>
                  {"detail" in ed && (
                    <p className="text-xs mt-0.5 font-medium" style={{ color: ed.accent }}>
                      {ed.detail}
                    </p>
                  )}
                </div>
                <span className="text-xs font-mono shrink-0 mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  {ed.period}
                </span>
              </div>
              {ed.bullets && (
                <ul className="mt-2 space-y-1">
                  {ed.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ background: ed.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            Get to know me
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Mobile / tablet: photo → bio → experience → education */}
        <div className="flex flex-col gap-10 lg:hidden">
          <PhotoBlock />
          <BioBlock />
          <ExperienceBlock />
          <EducationBlock />
        </div>

        {/* Desktop: left = bio + experience | right = photo + education */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BioBlock />
            <div className="mt-10">
              <ExperienceBlock />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-8"
          >
            <PhotoBlock />
            <EducationBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
