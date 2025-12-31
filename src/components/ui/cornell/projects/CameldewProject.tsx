"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GlowFrame,
  ProjectTitle,
  TechTags,
  Screenshot,
  ProjectWrapper,
} from "../../ProjectComponents";

const ACCENT = "#F97316";

const IMAGES = {
  titleScreen: "/portfolio/Cameldew1.png",
  gameplay: "/portfolio/Cameldew2.png",
  logo: "/portfolio/Cameldew3.png",
  video: "/portfolio/Cameldew4.gif",
};

export function CameldewProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="Cameldew Valley" accent={ACCENT} />

      {/* Mobile: 900px, Desktop: 770px */}
      <div className="relative mx-auto min-h-[900px] max-w-6xl md:min-h-[770px]">
        {/* LOGO - Floating top left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 left-[0] z-20 md:left-[3%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative h-20 w-20 md:h-28 md:w-28">
              <Image
                src={IMAGES.logo}
                alt="Cameldew logo"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* TITLE SCREEN - Large hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-[10px] right-[3%] left-[18%] z-10 md:right-[5%] md:left-[15%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.titleScreen}
                alt="Cameldew Valley title screen"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* TEXT CARD - Below title */}
        {/* Mobile: top-[280px], Desktop: top-[320px] (ratio: 0.875) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[280px] left-[0] z-20 max-w-[380px] md:top-[320px] md:left-[5%] md:max-w-[420px]"
        >
          <div className="rounded-2xl border border-orange-500/20 bg-slate-900/90 p-5 shadow-2xl shadow-orange-500/10 backdrop-blur-lg md:p-6">
            <p
              className="mb-2 text-xs font-semibold tracking-widest uppercase"
              style={{ color: ACCENT }}
            >
              Stardew Valley Inspired
            </p>
            <p className="mb-4 font-serif text-sm leading-relaxed text-slate-300/90 md:text-base">
              A cozy pixel-art farming simulation game built entirely in OCaml.
              Plant crops, harvest produce, sell at the camel merchant, and
              build your dream farm in this charming retro-style adventure.
            </p>
            <TechTags
              tech={["OCaml", "Functional Programming", "Game Dev"]}
              accent={ACCENT}
            />
          </div>
        </motion.div>

        {/* GAMEPLAY SCREENSHOT - Right side */}
        {/* Mobile: top-[300px], Desktop: top-[330px] (ratio: 0.91) */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[300px] right-[0] z-15 w-[55%] md:top-[330px] md:right-[3%] md:w-[50%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.gameplay}
                alt="Cameldew Valley gameplay"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* GIF - Center bottom */}
        {/* Mobile: top-[580px], Desktop: top-[550px] (ratio: 1.05) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[580px] right-[10%] left-[10%] z-20 md:top-[550px] md:right-[15%] md:left-[15%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-800">
              {/* Using img for GIF as Next/Image doesn't handle animated GIFs well */}
              <Image
                src={IMAGES.video}
                alt="Gameplay Demo"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
                unoptimized
              />
            </div>
          </GlowFrame>
          <p className="mt-2 text-center text-xs text-slate-500 italic">
            Gameplay Demo
          </p>
        </motion.div>

        {/* STAT CARDS */}
        {/* Mobile: top-[250px], Desktop: top-[280px] (ratio: 0.89) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[250px] right-[55%] z-30 md:top-[280px] md:right-[58%]"
        >
          <div className="rounded-2xl border border-orange-500/20 bg-slate-900/80 px-4 py-3 backdrop-blur-md">
            <p className="text-2xl font-bold" style={{ color: ACCENT }}>
              5
            </p>
            <p className="text-xs text-slate-400">Crop Types</p>
          </div>
        </motion.div>

        {/* Mobile: top-[520px], Desktop: top-[520px] (same) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[520px] left-[3%] z-30 md:top-[520px] md:left-[7%]"
        >
          <div className="rounded-2xl border border-orange-500/20 bg-slate-900/80 px-4 py-3 backdrop-blur-md">
            <p className="text-2xl font-bold" style={{ color: ACCENT }}>
              100%
            </p>
            <p className="text-xs text-slate-400">Functional</p>
          </div>
        </motion.div>

        {/* DECORATIVE ELEMENTS */}
        <div
          className="pointer-events-none absolute top-[100px] left-[40%] z-0 h-[300px] w-[300px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />
        <div
          className="pointer-events-none absolute top-[500px] right-[30%] z-0 h-[200px] w-[200px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />

        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-[180px] right-[25%] z-5 h-2 w-2"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -6, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
          className="absolute top-[450px] left-[40%] z-5 h-2 w-2"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="absolute top-[350px] right-[60%] z-5 h-2 w-2"
          style={{ backgroundColor: ACCENT }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: 0.6 }}
          className="absolute top-[270px] left-[42%] z-5 hidden md:block"
        >
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: 0.7 }}
          className="absolute top-[540px] right-[12%] z-5 hidden md:block"
        >
          <div className="flex flex-col gap-1">
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
            <div className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
          </div>
        </motion.div>
      </div>
    </ProjectWrapper>
  );
}
