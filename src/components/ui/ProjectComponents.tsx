"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, ReactNode } from "react";

export function GlowFrame({
  children,
  accent = "#FFD700",
  className = "",
}: {
  children: ReactNode;
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-lg border border-amber-100/20 bg-slate-800/50 p-2 backdrop-blur-sm ${className}`}
      style={{ boxShadow: `0 0 20px ${accent}20, 0 0 40px ${accent}10` }}
    >
      <div className="absolute top-1 left-1 h-3 w-3 border-t border-l border-amber-300/40" />
      <div className="absolute top-1 right-1 h-3 w-3 border-t border-r border-amber-300/40" />
      <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-amber-300/40" />
      <div className="absolute right-1 bottom-1 h-3 w-3 border-r border-b border-amber-300/40" />
      {children}
    </div>
  );
}

export function ProjectTitle({
  name,
  accent,
}: {
  name: string;
  accent: string;
}) {
  return (
    <div className="mb-10 flex items-center justify-center gap-3">
      <span
        className="h-px w-8 md:w-16"
        style={{ background: `linear-gradient(90deg, transparent, ${accent})` }}
      />
      <motion.span
        key="star-left"
        className="text-lg"
        style={{ color: accent }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        ✦
      </motion.span>
      <h3 className="title-text text-2xl md:text-3xl" style={{ color: accent }}>
        {name}
      </h3>
      <motion.span
        className="text-lg"
        style={{ color: accent }}
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        ✦
      </motion.span>
      <span
        className="h-px w-8 md:w-16"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />
    </div>
  );
}

export function TechTags({ tech, accent }: { tech: string[]; accent: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: `${accent}40`,
            color: accent,
            backgroundColor: `${accent}10`,
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function Screenshot({
  src,
  accent,
  width = "80px",
  delay = 0,
}: {
  src: string;
  accent: string;
  width?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      style={{ boxShadow: `0 4px 15px ${accent}20`, width }}
    >
      <Image
        src={src}
        alt="App screenshot"
        width={400}
        height={800}
        className="h-auto w-full object-cover"
      />
    </motion.div>
  );
}

export function ProjectWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative mb-32 last:mb-0 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

// GitHub icon component
function GitHubIcon({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// Apple icon component
function AppleIcon({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// Repo type tag component (Frontend/Backend)
export function RepoTypeTag({
  type,
  accent,
}: {
  type: "frontend" | "backend" | "fullstack" | string;
  accent: string;
}) {
  const typeLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Full Stack",
  };

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase"
      style={{
        borderColor: `${accent}50`,
        color: accent,
        backgroundColor: `${accent}15`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      {typeLabels[type] || type}
    </span>
  );
}

// GitHub link component with optional repo type tag
export function GitHubLink({
  href,
  accent,
  repoType,
  label = "GitHub",
}: {
  href: string;
  accent: string;
  repoType?: "frontend" | "backend" | "fullstack" | string;
  label?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col items-start gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="flex items-center gap-3 rounded-lg border px-4 py-2.5 transition-all duration-300"
        style={{
          borderColor: `${accent}30`,
          backgroundColor: `${accent}08`,
          boxShadow: `0 0 0 0 ${accent}00`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${accent}60`;
          e.currentTarget.style.backgroundColor = `${accent}15`;
          e.currentTarget.style.boxShadow = `0 0 20px ${accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${accent}30`;
          e.currentTarget.style.backgroundColor = `${accent}08`;
          e.currentTarget.style.boxShadow = `0 0 0 0 ${accent}00`;
        }}
      >
        <GitHubIcon
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
          color={accent}
        />
        <span className="text-sm font-medium" style={{ color: `${accent}dd` }}>
          {label}
        </span>
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: `${accent}80` } as React.CSSProperties}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      {repoType && <RepoTypeTag type={repoType} accent={accent} />}
    </motion.a>
  );
}

// App Store link component
export function AppStoreLink({
  href,
  accent,
  label = "App Store",
}: {
  href: string;
  accent: string;
  label?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col items-start gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="flex items-center gap-3 rounded-lg border px-4 py-2.5 transition-all duration-300"
        style={{
          borderColor: `${accent}30`,
          backgroundColor: `${accent}08`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${accent}60`;
          e.currentTarget.style.backgroundColor = `${accent}15`;
          e.currentTarget.style.boxShadow = `0 0 20px ${accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${accent}30`;
          e.currentTarget.style.backgroundColor = `${accent}08`;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <AppleIcon
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          color={accent}
        />
        <span className="text-sm font-medium" style={{ color: `${accent}dd` }}>
          {label}
        </span>
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: `${accent}80` } as React.CSSProperties}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      {/* Empty spacer to match GitHubLink height when it has a tag */}
      <span className="h-[22px]" />
    </motion.a>
  );
}

// Combined links component for convenience
export function ProjectLinks({
  githubHref,
  appStoreHref,
  accent,
  repoType,
}: {
  githubHref?: string;
  appStoreHref?: string;
  accent: string;
  repoType?: "frontend" | "backend" | "fullstack" | string;
}) {
  return (
    <div className="flex flex-wrap items-start gap-4">
      {githubHref && (
        <GitHubLink href={githubHref} accent={accent} repoType={repoType} />
      )}
      {appStoreHref && <AppStoreLink href={appStoreHref} accent={accent} />}
    </div>
  );
}
