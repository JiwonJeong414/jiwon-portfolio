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

const ACCENT = "#3B82F6";

const IMAGES = {
  team: "/portfolio/Millennium1.png",
  bannerHero: "/portfolio/Millennium2.png",
  screenshots: [
    "/portfolio/Millennium3.png",
    "/portfolio/Millennium4.png",
    "/portfolio/Millennium6.png",
  ],
  logo: "/portfolio/Millennium5.png",
};

// Floating stat card component
function StatCard({
  number,
  label,
  className,
  delay = 0,
}: {
  number: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-blue-500/20 bg-slate-900/80 px-4 py-3 backdrop-blur-md ${className}`}
    >
      <p className="text-2xl font-bold" style={{ color: ACCENT }}>
        {number}
      </p>
      <p className="text-xs text-slate-400">{label}</p>
    </motion.div>
  );
}

export function MillenniumProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="Millennium" accent={ACCENT} />

      {/* Main creative canvas */}
      <div className="relative mx-auto min-h-[950px] max-w-6xl md:min-h-[880px]">
        {/* ============ HERO BANNER - Top, spans most width ============ */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 right-[5%] left-[5%] z-10 md:right-[10%] md:left-[10%]"
        >
          <GlowFrame accent={ACCENT}>
            <Image
              src={IMAGES.bannerHero}
              alt="Millennium hero"
              width={1200} // Base aspect ratio width
              height={600} // Base aspect ratio height
              className="h-auto w-full rounded-xl object-cover"
              priority // High priority as it's the hero image
            />
          </GlowFrame>
        </motion.div>

        {/* ============ LOGO - Floating left side ============ */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[200px] left-[0] z-30 md:top-[180px] md:left-[2%]"
        >
          <GlowFrame accent={ACCENT}>
            {/* The wrapper div now carries your exact responsive dimensions */}
            <div className="relative h-24 w-24 md:h-32 md:w-32">
              <Image
                src={IMAGES.logo}
                alt="Millennium logo"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ TEAM PHOTO - Large, offset right ============ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[320px] right-[0] z-20 w-[75%] md:top-[350px] md:right-[5%] md:w-[65%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative w-full">
              <Image
                src={IMAGES.team}
                alt="Millennium team"
                width={800}
                height={500}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ STAT CARDS - Scattered ============ */}
        <StatCard
          number="500+"
          label="Predictions"
          className="absolute top-[180px] right-[2%] z-40 md:top-[160px] md:right-[3%]"
          delay={0.4}
        />

        {/* ============ SCREENSHOTS - Diagonal cascade down the left ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[340px] left-[3%] z-25 w-[80px] md:top-[380px] md:left-[2%] md:w-[120px]"
        >
          <Screenshot
            src={IMAGES.screenshots[0]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[420px] left-[18%] z-26 w-[85px] md:top-[470px] md:left-[18%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshots[1]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-[500px] left-[5%] z-27 w-[80px] md:top-[560px] md:left-[8%] md:w-[140px]"
        >
          <Screenshot
            src={IMAGES.screenshots[2]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* ============ TEXT CARD - Bottom right, floating ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[560px] right-[5%] z-30 max-w-[320px] md:top-[740px] md:right-[8%] md:max-w-[380px]"
        >
          <div className="rounded-2xl border border-blue-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-lg">
            <p
              className="mb-3 text-xs font-semibold tracking-widest uppercase"
              style={{ color: ACCENT }}
            >
              Sports Betting Simulation
            </p>
            <p className="text-sm leading-relaxed text-slate-300/90 md:text-base">
              A gamified sports betting experience for Cornell athletics,
              allowing students to track predictions and compete on
              leaderboards.
            </p>
            <div className="mt-4">
              <TechTags
                tech={["Swift", "SwiftUI", "WebSocket"]}
                accent={ACCENT}
              />
            </div>
          </div>
        </motion.div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        {/* Glowing orb behind hero */}
        <div
          className="pointer-events-none absolute top-[50px] left-1/2 z-0 h-[200px] w-[400px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[450px] right-[35%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-[300px] left-[40%] z-5 h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[650px] right-[50%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />

        {/* Diagonal line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[750px] right-[10%] left-[10%] z-5 h-[1px] origin-left md:top-[700px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${ACCENT}40 50%, transparent 100%)`,
          }}
        />

        {/* Corner accent marks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-[210px] left-[12%] z-5 hidden font-mono text-xs text-blue-500/30 md:block"
        >
          ◆
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute top-[700px] right-[15%] z-5 hidden font-mono text-xs text-blue-500/30 md:block"
        >
          ◆
        </motion.div>
      </div>
    </ProjectWrapper>
  );
}
