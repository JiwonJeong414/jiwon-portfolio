"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
  accent: string;
  className?: string;
  delay?: number;
  size?: "default" | "large";
}

export function StatCard({
  number,
  label,
  accent,
  className = "",
  delay = 0,
  size = "default",
}: StatCardProps) {
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border bg-slate-900/80 shadow-xl backdrop-blur-md ${
        isLarge ? "border-white/10 px-5 py-4" : "px-4 py-3"
      } ${className}`}
      style={isLarge ? undefined : { borderColor: `${accent}33` }}
    >
      <p
        className={`leading-tight font-bold ${isLarge ? "text-3xl" : "text-2xl"}`}
        style={{ color: accent }}
      >
        {number}
      </p>
      <p className={`text-slate-400 ${isLarge ? "text-sm" : "text-xs"}`}>
        {label}
      </p>
    </motion.div>
  );
}
