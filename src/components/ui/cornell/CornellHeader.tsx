"use client";

import { motion } from "framer-motion";
import { GlowFrame } from "../components";

const ACCENT = "#B31B1B"; // Cornell red

const DATA = {
  subtitle: "Chapter III",
  title: "Cornell University",
  role: "Student",
  description: ``, // Add description later
  quote: ``, // Add quote later
  images: {
    logo: "/portfolio/cornell-logo.png", // Update path
    banner: "/portfolio/cornell-banner.png", // Update path
    photo: "/portfolio/cornell-photo.png", // Update path
  },
};

export function CornellHeader() {
  return (
    <motion.header
      className="mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title section */}
      <div className="mb-8 text-center">
        <motion.p
          className="mb-2 text-sm tracking-[0.3em] uppercase"
          style={{ color: ACCENT }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {DATA.subtitle}
        </motion.p>

        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-red-400/50" />
          <motion.span
            className="text-2xl text-red-400"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ★
          </motion.span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-red-400/50" />
        </div>

        <motion.h2
          className="title-text mb-4 text-4xl text-red-200 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {DATA.title}
        </motion.h2>

        <motion.p
          className="mb-6 text-sm tracking-wider text-red-300/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {DATA.role}
        </motion.p>
      </div>

      {/* Main content - organic layout */}
      <div className="relative mx-auto min-h-[600px] max-w-6xl md:min-h-[500px]">
        {/* Logo - Floating left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 left-[5%] z-20 md:left-[10%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={DATA.images.logo}
              alt="Cornell Logo"
              className="h-20 w-20 rounded-xl object-contain md:h-24 md:w-24"
            />
          </GlowFrame>
        </motion.div>

        {/* Banner - Offset to right of logo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[10px] right-[5%] left-[25%] z-10 md:right-[10%] md:left-[22%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={DATA.images.banner}
              alt="Cornell Banner"
              className="h-20 w-full rounded-xl object-cover md:h-24"
            />
          </GlowFrame>
        </motion.div>

        {/* Text card - Bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[120px] left-[3%] z-30 max-w-[380px] md:top-[140px] md:left-[8%] md:max-w-[420px]"
        >
          <div className="rounded-2xl border border-red-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-red-500/10 backdrop-blur-lg">
            <p className="mb-6 font-serif text-base leading-relaxed text-slate-300/90 md:text-lg">
              {DATA.description || "Description coming soon..."}
            </p>
            {DATA.quote && (
              <blockquote className="border-l-2 border-red-400/30 pl-4">
                <span className="text-2xl text-red-400/30">&ldquo;</span>
                <p className="font-serif text-sm text-red-200/70 italic md:text-base">
                  {DATA.quote}
                </p>
              </blockquote>
            )}
          </div>
        </motion.div>

        {/* Photo - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[100px] right-[0] z-20 w-[55%] md:top-[120px] md:right-[5%] md:w-[50%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={DATA.images.photo}
              alt="Cornell"
              className="w-full rounded-xl object-cover"
            />
          </GlowFrame>
        </motion.div>

        {/* Decorative elements */}
        <div
          className="pointer-events-none absolute top-[50px] right-[20%] z-0 h-[250px] w-[250px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-[80px] left-[45%] h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[350px] right-[35%] h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>

      {/* Bottom divider */}
      <motion.div
        className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-red-400/30 to-red-400/50" />
        <span className="text-xs text-red-400/40">✦</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-red-400/30 to-red-400/50" />
      </motion.div>
    </motion.header>
  );
}
