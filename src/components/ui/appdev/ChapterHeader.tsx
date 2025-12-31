"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowFrame } from "../ProjectComponents";

const ACCENT = "#FFD700";

const APPDEV_DATA = {
  title: "Cornell AppDev",
  subtitle: "Chapter II",
  role: "iOS Developer",
  description:
    "A project team at Cornell University dedicated to building apps that serve the Cornell community and beyond. As an iOS developer, I collaborate with talented designers and engineers to create impactful mobile experiences.",
  quote:
    "It is the time you have wasted for your rose that makes your rose so important.",
  images: {
    team: "/portfolio/AppDev1.jpeg",
    logo: "/portfolio/AppDev2.png",
    banner: "/portfolio/AppDev3.png",
  },
};

export function ChapterHeader() {
  return (
    <motion.header
      className="mb-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ============ TITLE SECTION - Centered at top ============ */}
      <div className="mb-8 text-center">
        <motion.p
          className="mb-2 text-sm tracking-[0.3em] text-amber-400/80 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {APPDEV_DATA.subtitle}
        </motion.p>

        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
          <motion.span
            className="text-2xl text-yellow-400"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ★
          </motion.span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        <motion.h2
          className="title-text mb-4 text-4xl text-amber-200 md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {APPDEV_DATA.title}
        </motion.h2>

        <motion.p
          className="mb-6 text-sm tracking-wider text-amber-300/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {APPDEV_DATA.role}
        </motion.p>
      </div>

      {/* ============ MAIN CONTENT - Organic layout ============ */}
      {/* Mobile: 600px, Desktop: 500px */}
      <div className="relative mx-auto min-h-[600px] max-w-6xl md:min-h-[500px]">
        {/* ============ LOGO - Floating left ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 left-[5%] z-20 md:left-[10%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative h-20 w-20 md:h-24 md:w-24">
              <Image
                src={APPDEV_DATA.images.logo}
                alt="AppDev Logo"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ BANNER - Offset to right of logo ============ */}
        {/* Mobile: top-[10px], Desktop: top-[10px] */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[10px] right-[5%] left-[25%] z-10 md:right-[10%] md:left-[22%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative h-20 w-full md:h-30">
              <Image
                src={APPDEV_DATA.images.banner}
                alt="Cornell AppDev Banner"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ TEXT CARD - Bottom left, floating ============ */}
        {/* Mobile: top-[120px], Desktop: top-[150px] (ratio: 0.8) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[120px] left-[3%] z-30 max-w-[380px] md:top-[150px] md:left-[8%] md:max-w-[420px]"
        >
          <div className="rounded-2xl border border-amber-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-amber-500/10 backdrop-blur-lg">
            <p className="mb-6 font-serif text-base leading-relaxed text-slate-300/90 md:text-lg">
              {APPDEV_DATA.description}
            </p>
            <blockquote className="border-l-2 border-amber-400/30 pl-4">
              <span className="text-2xl text-amber-400/30">&ldquo;</span>
              <p className="font-serif text-sm text-amber-200/70 italic md:text-base">
                {APPDEV_DATA.quote}
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* ============ TEAM PHOTO - Right side, large ============ */}
        {/* Mobile: top-[100px], Desktop: top-[130px] (ratio: 0.77) */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[100px] right-[0] z-20 w-[55%] md:top-[130px] md:right-[5%] md:w-[50%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={APPDEV_DATA.images.team}
                alt="AppDev Team"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        {/* Golden glow */}
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
          className="absolute top-[80px] left-[45%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[350px] right-[35%] z-5 h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[200px] left-[2%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>

      {/* ============ BOTTOM DIVIDER ============ */}
      <motion.div
        className="mx-auto mt-35 flex max-w-xs items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/50" />
        <span className="text-xs text-amber-400/40">✦</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/50" />
      </motion.div>
    </motion.header>
  );
}
