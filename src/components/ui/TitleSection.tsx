"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { titleVariants, scaleInVariants, fadeInVariants } from "@/constants";
import { useLoading, useScroll } from "@/context";

export function TitleSection() {
  const { isLoaded } = useLoading();
  const { scrollProgress } = useScroll();

  // Create motion value from scroll progress
  const scrollMotion = useMotionValue(0);

  useEffect(() => {
    scrollMotion.set(scrollProgress);
  }, [scrollProgress, scrollMotion]);

  // Transform values based on scroll - must be called before any early return
  const opacity = useTransform(scrollMotion, [0, 0.4], [1, 0]);
  const y = useTransform(scrollMotion, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollMotion, [0, 0.5], [1, 0.8]);
  const blur = useTransform(scrollMotion, [0, 0.3], [0, 10]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  // Don't render until 3D scene is loaded
  if (!isLoaded) return null;

  return (
    <motion.div
      className="flex flex-col items-center"
      style={{
        opacity,
        y,
        scale,
        filter: filterBlur,
      }}
    >
      {/* Decorative stars above title */}
      <motion.div
        className="flex gap-4 mb-4"
        variants={scaleInVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-yellow-300 text-lg animate-pulse">✦</span>
        <span className="text-yellow-400 text-2xl animate-pulse delay-100">
          ★
        </span>
        <span className="text-yellow-300 text-lg animate-pulse delay-200">
          ✦
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 className="title-text text-center">
        <motion.span
          className="block text-5xl md:text-7xl lg:text-8xl text-amber-300"
          style={{
            textShadow:
              "0 0 40px rgba(251,191,36,0.6), 0 4px 8px rgba(0,0,0,0.5)",
          }}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Jiwon
        </motion.span>
        <motion.span
          className="block text-6xl md:text-8xl lg:text-9xl text-amber-200 -mt-2"
          style={{
            textShadow:
              "0 0 50px rgba(251,191,36,0.7), 0 4px 8px rgba(0,0,0,0.5)",
          }}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          Jeong
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-8 text-slate-400 text-xs md:text-sm tracking-[0.4em] uppercase"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        custom={1.0}
      >
        Software Engineer
      </motion.p>
    </motion.div>
  );
}
