"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowFrame } from "../ProjectComponents";

const ACCENT = "#B31B1B"; // Cornell red

const DATA = {
  subtitle: "Chapter III",
  title: "Cornell University",
  role: "Student",
  description: `Engaged in a diverse academic curriculum and hands-on laboratory research.`,
  quote: `Dedicated to continuous learning.`,
  images: {
    logo: "/portfolio/Cornell1.png",
    logo2: "/portfolio/Cornell4.png",
    logo3: "/portfolio/Cornell5.png",
    photo: "/portfolio/Cornell3.jpg",
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
      <div className="relative mx-auto min-h-[650px] max-w-6xl md:min-h-[550px]">
        {/* ============ BANNER/PHOTO - Left side ============ */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-0 left-[0] z-10 w-[65%] md:left-[3%] md:w-[55%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={DATA.images.photo}
              alt="Cornell"
              className="w-full rounded-xl object-cover"
            />
          </GlowFrame>
        </motion.div>

        {/* ============ TEXT CARD - Right side ============ */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[20px] right-[0] z-20 w-[55%] md:top-[40px] md:right-[5%] md:w-[45%]"
        >
          <div className="rounded-2xl border border-red-500/20 bg-slate-900/90 p-5 shadow-2xl shadow-red-500/10 backdrop-blur-lg md:p-6">
            <p className="mb-5 font-serif text-base leading-relaxed text-slate-300/90 md:text-lg">
              {DATA.description}
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

        {/* ============ LOGOS - Grouped & overlapping below text ============ */}
        <div className="absolute top-[320px] right-[10%] z-30 md:top-[200px] md:right-[35%]">
          {/* Logo 1 - Back left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-0 left-0 z-10"
          >
            <GlowFrame accent={ACCENT}>
              <div className="relative h-20 w-20 md:h-20 md:w-20">
                <Image
                  src={DATA.images.logo}
                  alt="Cornell Logo"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </GlowFrame>
          </motion.div>

          {/* Logo 2 - Middle, slightly forward */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-[10px] left-[60px] z-20 md:left-[90px]"
          >
            <GlowFrame accent={ACCENT}>
              <div className="relative h-20 w-20 md:h-20 md:w-20">
                <Image
                  src={DATA.images.logo2}
                  alt="Cornell Logo 2"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </GlowFrame>
          </motion.div>

          {/* Logo 3 - Front right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-[0px] left-[120px] z-30 md:left-[180px]"
          >
            <GlowFrame accent={ACCENT}>
              <div className="relative h-20 w-20 md:h-20 md:w-20">
                <Image
                  src={DATA.images.logo3}
                  alt="Cornell Logo 3"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </GlowFrame>
          </motion.div>
        </div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        <div
          className="pointer-events-none absolute top-[50px] left-[30%] z-0 h-[250px] w-[250px] rounded-full opacity-10 blur-[100px]"
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
          className="absolute top-[150px] left-[55%] h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[350px] left-[25%] h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[450px] right-[40%] h-2 w-2 rounded-full"
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
