"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 relative"
      style={{ background: "var(--surface)" }}
    >
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
            What I work with
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--text-primary)" }}
          >
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl"
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Category title with accent bar */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-6 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, var(--accent), var(--accent-secondary))",
                  }}
                />
                <h3
                  className="font-semibold text-sm tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                    whileHover={{ scale: 1.07, y: -1 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-colors duration-150"
                    style={{
                      background: group.bg,
                      color: group.accent,
                      border: `1px solid ${group.border}`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
