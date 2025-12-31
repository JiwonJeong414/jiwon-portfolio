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

const ACCENT = "#FACC15";

const IMAGES = {
  logo: "/portfolio/Uplift1.png",
  teamPhoto: "/portfolio/Uplift8.JPG",
  bannerWide: "/portfolio/Uplift2.png",
  bannerHero: "/portfolio/Uplift3.png",
  screenshots: [
    "/portfolio/Uplift4.png",
    "/portfolio/Uplift5.png",
    "/portfolio/Uplift6.png",
    "/portfolio/Uplift7.png",
  ],
};

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
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-md ${className}`}
    >
      <p className="text-3xl font-bold" style={{ color: ACCENT }}>
        {number}
      </p>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

export function UpliftProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="Uplift" accent={ACCENT} />

      {/* Main creative canvas - relative container for absolute positioning */}
      {/* Mobile: 1200px, Desktop: 850px */}
      <div className="relative mx-auto min-h-[1200px] max-w-6xl md:min-h-[850px]">
        {/* ============ HERO BANNER - Large, offset to right ============ */}
        {/* Mobile: top-0, Desktop: top-0 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 right-0 z-10 w-[85%] md:w-[70%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-video w-full">
              <Image
                src={IMAGES.bannerHero}
                alt="Uplift hero"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ LOGO - Floating top left, overlapping ============ */}
        {/* Mobile: top-[20px], Desktop: top-[40px] (ratio: 0.5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[20px] left-0 z-20 md:top-[40px]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative h-24 w-24 md:h-32 md:w-32">
              <Image
                src={IMAGES.logo}
                alt="Uplift logo"
                fill
                className="rounded-xl object-contain"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ TAGLINE CARD - Floating, angled ============ */}
        {/* Mobile: top-[140px], Desktop: top-[200px] (ratio: 0.7) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[140px] left-[10px] z-30 max-w-[280px] md:top-[200px] md:left-[20px] md:max-w-[320px]"
        >
          <div className="rounded-2xl border border-yellow-500/20 bg-slate-900/90 p-5 shadow-2xl shadow-yellow-500/10 backdrop-blur-lg">
            <p
              className="mb-2 text-xs font-semibold tracking-widest uppercase"
              style={{ color: ACCENT }}
            >
              Illuminate New Health Horizons
            </p>
            <p className="text-sm leading-relaxed text-slate-300/90">
              A fitness app helping Cornell students find gym availability,
              class schedules, and facility information in real-time.
            </p>
            <div className="mt-4">
              <TechTags tech={["Swift", "UIKit", "REST API"]} accent={ACCENT} />
            </div>
          </div>
        </motion.div>

        {/* ============ STAT CARDS - Scattered around ============ */}
        {/* Mobile: top-[60px], Desktop: top-[20px] (mobile scaled up from hero) */}
        <StatCard
          number="5+"
          label="Campus Gyms"
          className="absolute top-[60px] right-[5%] z-30 md:top-[20px] md:right-[5%]"
          delay={0.4}
        />
        {/* Mobile: top-[350px], Desktop: top-[280px] (ratio: 1.25) */}
        <StatCard
          number="1000+"
          label="Active Users"
          className="absolute top-[350px] right-[0] z-30 md:top-[280px] md:right-[2%]"
          delay={0.5}
        />

        {/* ============ SCREENSHOTS - Fanned out arrangement ============ */}
        {/* Screenshot 1 - leftmost, tilted left */}
        {/* Mobile: top-[560px], Desktop: top-[400px] (ratio: 1.4) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -15 }}
          whileInView={{ opacity: 1, y: 0, rotate: -12 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[560px] left-[2%] z-20 w-[90px] md:top-[400px] md:left-[2%] md:w-[120px]"
        >
          <Screenshot
            src={IMAGES.screenshots[0]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* Screenshot 2 */}
        {/* Mobile: top-[546px], Desktop: top-[390px] (ratio: 1.4) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[546px] left-[12%] z-21 w-[95px] md:top-[390px] md:left-[11%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshots[1]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* Screenshot 3 */}
        {/* Mobile: top-[539px], Desktop: top-[385px] (ratio: 1.4) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[539px] left-[23%] z-22 w-[95px] md:top-[385px] md:left-[21%] md:w-[130px]"
        >
          <Screenshot
            src={IMAGES.screenshots[2]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* Screenshot 4 */}
        {/* Mobile: top-[581px], Desktop: top-[415px] (ratio: 1.4) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 12 }}
          whileInView={{ opacity: 1, y: 0, rotate: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[581px] left-[34%] z-23 w-[90px] md:top-[415px] md:left-[31%] md:w-[120px]"
        >
          <Screenshot
            src={IMAGES.screenshots[3]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* ============ WIDE BANNER ============ */}
        {/* Mobile: top-[800px], Desktop: top-[475px] (ratio: 1.68) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute top-[800px] right-[0] z-10 w-[55%] md:top-[475px] md:right-[0] md:w-[50%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-video w-full">
              <Image
                src={IMAGES.bannerWide}
                alt="Uplift banner"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ TEAM PHOTO ============ */}
        {/* Mobile: top-[960px], Desktop: top-[600px] (ratio: 1.6) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[960px] left-[0] z-10 w-[50%] md:top-[600px] md:left-[0] md:w-[45%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={IMAGES.teamPhoto}
                alt="Uplift team"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </GlowFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-xs text-slate-500 italic"
          >
            The team behind Uplift
          </motion.p>
        </motion.div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-[300px] right-[25%] z-5 h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[600px] right-[40%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[150px] right-[60%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />

        {/* Grid lines for that tech feel */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(${ACCENT} 1px, transparent 1px),
                linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
    </ProjectWrapper>
  );
}
