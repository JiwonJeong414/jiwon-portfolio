"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import Image from "next/image";

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
        className="text-lg"
        style={{ color: accent }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
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
      className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/60"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      style={{ boxShadow: `0 4px 15px ${accent}20`, width }}
    >
      <Image
        src={src}
        alt="App screenshot"
        width={200}
        height={400}
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
