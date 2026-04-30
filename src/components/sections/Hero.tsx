"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x === cursor.x && y === cursor.y) return;
      setCursor({ x, y });
    };
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [cursor.x, cursor.y]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseLeave={() => setCursor({ x: -1000, y: -1000 })}
    >
      {/* Grain overlay */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.15, mixBlendMode: "overlay" }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Cursor glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: cursor.x !== -1000 ? 1 : 0,
        transition: "opacity 0.6s ease",
        background: `radial-gradient(380px circle at ${cursor.x}px ${cursor.y}px, rgba(227,112,131,0.14), transparent 65%)`,
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs font-mono tracking-[0.3em] uppercase mb-5"
          style={{ color: "var(--accent)" }}>
          Hello, I&apos;m
        </motion.p>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display font-bold leading-none tracking-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(3.5rem, 10vw, 7rem)" }}>
          <span className="block" style={{ color: "var(--text-primary)" }}>Halenur</span>
          <span className="block gradient-text">Gurel.</span>
        </motion.h1>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-4 mb-7">
          <span className="h-px w-10 shrink-0"
            style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))" }} />
          <p className="text-lg sm:text-xl font-medium tracking-wide" style={{ color: "var(--text-secondary)" }}>
            Front-End Developer
          </p>
        </motion.div>

        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="text-base sm:text-lg leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--text-secondary)" }}>
          I bridge the gap between people and technology, bringing a marketing
          and UX background to software that doesn&apos;t just work, but{" "}
          <em className="not-italic font-medium" style={{ color: "var(--text-primary)" }}>resonates.</em>
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap items-center gap-4">
          <a href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--color-rose) 0%, var(--color-blush) 100%)" }}>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, var(--color-blush) 0%, var(--color-rose) 100%)" }} />
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <div className="flex items-center gap-2">
            <a href="https://github.com/halenurgurel" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 16px var(--glow)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/halenurgurel/" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-secondary)"; e.currentTarget.style.borderColor = "var(--accent-secondary)"; e.currentTarget.style.boxShadow = "0 0 16px var(--glow-secondary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
              <LinkedInIcon />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-secondary)" }}>
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
