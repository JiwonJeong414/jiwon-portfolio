"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GlowFrame,
  ProjectTitle,
  TechTags,
  Screenshot,
  ProjectWrapper,
} from "@/components/ui/ProjectComponents";
import { StatCard } from "@/components/ui/StatCard";

const ACCENT = "#22C55E";

const IMAGES = {
  paper: "/portfolio/Lumeo1.png",
  screenshots: [
    "/portfolio/Lumeo2.png",
    "/portfolio/Lumeo3.png",
    "/portfolio/Lumeo4.png",
  ],
  shapefiles: ["/portfolio/Lumeo7.jpg", "/portfolio/Lumeo8.jpg"],
  logoBackground: "/portfolio/Lumeo10.jpg",
  logoOverlay: "/portfolio/Lumeo9.png",
  logo: "/portfolio/Lumeo11.png",
  watches: ["/portfolio/Lumeo14.avif", "/portfolio/Lumeo15.avif"],
};

export function LumeoProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="Lumeo" accent={ACCENT} />

      {/* Main creative canvas */}
      <div className="relative mx-auto min-h-[1200px] max-w-6xl md:min-h-[1000px]">
        {/* ============ HERO ============ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 right-[5%] left-[5%] z-10 md:right-[10%] md:left-[10%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.logoBackground}
                alt="City background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[40%] w-[60%]">
                  <Image
                    src={IMAGES.logoOverlay}
                    alt="UTECH Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ LOGO ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[20px] left-[0] z-20 md:top-[30px] md:left-[2%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative h-20 w-20 md:h-28 md:w-28">
              <Image
                src={IMAGES.logo}
                alt="UTECH logo"
                fill
                className="scale-150 rounded-xl object-contain"
              />
            </div>
          </GlowFrame>
        </motion.div>

        {/* ============ TEXT CARD ============ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[280px] left-[0] z-20 max-w-[400px] md:top-[320px] md:left-[5%] md:max-w-[450px]"
        >
          <div className="rounded-2xl border border-green-500/20 bg-slate-900/90 p-5 shadow-2xl shadow-green-500/10 backdrop-blur-lg md:p-6">
            <p
              className="mb-2 text-xs font-semibold tracking-widest uppercase"
              style={{ color: ACCENT }}
            >
              Health-Aware Navigation
            </p>
            <p className="mb-4 font-serif text-sm leading-relaxed text-slate-300/90 md:text-base">
              A mobile platform for health-aware routing and environmental
              exposure minimization. Routes consider air quality, noise
              pollution, and temperature to protect user health during urban
              navigation.
            </p>
            <TechTags
              tech={["Swift", "SwiftUI", "Python", "FastAPI", "AWS"]}
              accent={ACCENT}
            />
          </div>
        </motion.div>

        {/* ============ APP SCREENSHOTS ============ */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[260px] right-[25%] z-21 w-[90px] md:top-[300px] md:right-[28%] md:w-[110px]"
        >
          <Screenshot
            src={IMAGES.screenshots[0]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-[250px] right-[12%] z-22 w-[95px] md:top-[290px] md:right-[15%] md:w-[115px]"
        >
          <Screenshot
            src={IMAGES.screenshots[1]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-[245px] right-[0] z-23 w-[90px] md:top-[285px] md:right-[2%] md:w-[110px]"
        >
          <Screenshot
            src={IMAGES.screenshots[2]}
            accent={ACCENT}
            width="100%"
            delay={0}
          />
        </motion.div>

        {/* ============ STAT CARDS ============ */}
        <StatCard
          number="50"
          label="Cities Supported"
          accent={ACCENT}
          className="absolute top-[520px] right-[5%] z-30 md:top-[570px] md:right-[70%]"
          delay={0.4}
        />

        <StatCard
          number="5+"
          label="Health Factors"
          accent={ACCENT}
          className="absolute top-[600px] right-[18%] z-30 md:top-[580px] md:right-[85%]"
          delay={0.5}
        />

        {/* ============ SHAPEFILES ============ */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[580px] left-[0] z-15 w-[50%] md:top-[620px] md:left-[3%] md:w-[40%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.shapefiles[0]}
                alt="San Francisco shapefile"
                fill
                className="object-cover"
              />
            </div>
          </GlowFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-center text-xs text-slate-500 italic"
          >
            SF Road Network
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 4 }}
          whileInView={{ opacity: 1, rotate: 2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[640px] left-[25%] z-16 w-[45%] md:top-[680px] md:left-[22%] md:w-[35%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.shapefiles[1]}
                alt="Philadelphia shapefile"
                fill
                className="object-cover"
              />
            </div>
          </GlowFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-center text-xs text-slate-500 italic"
          >
            Philadelphia Road Network
          </motion.p>
        </motion.div>

        {/* ============ PAPER/RESEARCH ============ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[580px] right-[0] z-20 w-[40%] md:top-[600px] md:right-[5%] md:w-[32%]"
        >
          <GlowFrame accent={ACCENT}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src={IMAGES.paper}
                alt="Research paper"
                fill
                className="object-cover object-top"
              />
            </div>
          </GlowFrame>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-center text-xs text-slate-500 italic"
          >
            Published Research Paper
          </motion.p>
        </motion.div>

        {/* ============ WATCHES ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-[950px] left-[30%] z-25 w-[18%] md:top-[520px] md:left-[35%] md:w-[14%]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={IMAGES.watches[0]}
              alt="Apple Watch app"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ filter: `drop-shadow(0 0 20px ${ACCENT}30)` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 6 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-[940px] left-[48%] z-26 w-[18%] md:top-[510px] md:left-[50%] md:w-[14%]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={IMAGES.watches[1]}
              alt="Apple Watch app"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ filter: `drop-shadow(0 0 20px ${ACCENT}30)` }}
            />
          </div>
        </motion.div>

        {/* ============ DECORATIVE ELEMENTS ============ */}
        <div
          className="pointer-events-none absolute top-[100px] left-[30%] z-0 h-[300px] w-[300px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />
        <div
          className="pointer-events-none absolute top-[700px] right-[20%] z-0 h-[250px] w-[250px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          }}
        />

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-[200px] right-[40%] z-5 h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-[500px] left-[50%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[850px] right-[60%] z-5 h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>
    </ProjectWrapper>
  );
}
