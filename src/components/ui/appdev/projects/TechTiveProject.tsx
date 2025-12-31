"use client";

import { motion } from "framer-motion";
import {
  GlowFrame,
  ProjectTitle,
  TechTags,
  Screenshot,
  ProjectWrapper,
} from "../components";

const ACCENT = "#F97316";

const IMAGES = {
  bannerHero: "/portfolio/TechTive1.png",
  bannerWide: "/portfolio/TechTive2.png",
  // 3 & 4 are long/tall screenshots, 5 & 6 are standard phone size
  screenshotsLong: ["/portfolio/TechTive3.png", "/portfolio/TechTive4.png"],
  screenshotsStandard: ["/portfolio/TechTive5.png", "/portfolio/TechTive6.png"],
  logo: "/portfolio/TechTive7.png",
};

export function TechTiveProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="TechTive" accent={ACCENT} />

      {/* Main creative canvas */}
      <div className="relative mx-auto min-h-[1100px] max-w-6xl md:min-h-[900px]">
        {/* ============ HERO BANNER - Large, centered at top ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 right-[5%] left-[5%] z-10 md:right-[8%] md:left-[8%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={IMAGES.bannerHero}
              alt="TechTive hero"
              className="w-full rounded-xl object-cover"
            />
          </GlowFrame>
        </motion.div>

        {/* ============ LOGO - Floating top left ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[10px] left-[0] z-20 md:top-[20px] md:left-[1%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={IMAGES.logo}
              alt="TechTive logo"
              className="h-24 w-24 rounded-xl object-contain md:h-32 md:w-32"
            />
          </GlowFrame>
        </motion.div>

        {/* ============ WIDE BANNER - Below hero ============ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[280px] left-[3%] z-20 w-[80%] md:top-[320px] md:left-[5%] md:w-[70%]"
        >
          <GlowFrame accent={ACCENT}>
            <img
              src={IMAGES.bannerWide}
              alt="TechTive banner"
              className="w-full rounded-xl object-cover"
            />
          </GlowFrame>
        </motion.div>

        {/* ============ STANDARD SCREENSHOTS - On the wide banner, fanned ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[260px] right-[2%] z-25 w-[100px] md:top-[340px] md:right-[16%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshotsStandard[0]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[260px] right-[2%] z-25 w-[100px] md:top-[640px] md:right-[3%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshotsStandard[1]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* ============ LONG SCREENSHOTS - Stacked on right side ============ */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[260px] right-[2%] z-25 w-[100px] md:top-[280px] md:right-[3%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshotsLong[0]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[520px] right-[8%] z-26 w-[95px] md:top-[540px] md:right-[16%] md:w-[120px]"
        >
          <Screenshot
            src={IMAGES.screenshotsLong[1]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* ============ TEXT CARD - Bottom left, floating ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[750px] left-[3%] z-30 max-w-[350px] md:top-[700px] md:left-[5%] md:max-w-[400px]"
        >
          <div className="rounded-2xl border border-orange-500/20 bg-slate-900/90 p-5 shadow-2xl shadow-orange-500/10 backdrop-blur-lg">
            <p
              className="mb-2 text-xs font-semibold tracking-widest uppercase"
              style={{ color: ACCENT }}
            >
              Your Perspective
            </p>
            <p className="text-sm leading-relaxed text-slate-300/90">
              A mental wellness companion that helps users track their feelings,
              journal their thoughts, and maintain emotional balance.
            </p>
            <div className="mt-4">
              <TechTags
                tech={["Swift", "SwiftUI", "Core Data"]}
                accent={ACCENT}
              />
            </div>
          </div>
        </motion.div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        {/* Warm glow behind banners */}
        <div
          className="pointer-events-none absolute top-[150px] left-[20%] z-0 h-[300px] w-[300px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />

        {/* Floating accent dots */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-[250px] left-[35%] z-5 h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
          className="absolute top-[650px] left-[50%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute top-[850px] right-[30%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />

        {/* Corner bracket accents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-[270px] left-[2%] z-5 hidden md:block"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M0 20V0H20"
              stroke={ACCENT}
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-[900px] right-[5%] z-5 hidden md:block"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M20 0V20H0"
              stroke={ACCENT}
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
      </div>
    </ProjectWrapper>
  );
}
