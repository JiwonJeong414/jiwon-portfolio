"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { HangingStar } from "./HangingStar";
import { HANGING_STARS } from "@/constants/stars";
import { useLoading } from "@/context/LoadingContext";
import { useScroll } from "@/context/ScrollContext";

export function HangingStars() {
  const { isLoaded } = useLoading();
  const { scrollProgress } = useScroll();

  // Create motion value from scroll progress
  const scrollMotion = useMotionValue(0);

  useEffect(() => {
    scrollMotion.set(scrollProgress);
  }, [scrollProgress, scrollMotion]);

  // Transform values - stars pull up and fade as user scrolls
  const opacity = useTransform(scrollMotion, [0, 0.3], [1, 0]);
  const y = useTransform(scrollMotion, [0, 0.4], [0, -200]);

  if (!isLoaded) return null;

  return (
    <motion.div
      className="absolute top-0 left-0 h-96 w-full overflow-visible"
      style={{ opacity, y }}
    >
      {HANGING_STARS.map((star, index) => (
        <HangingStar key={index} config={star} index={index} />
      ))}
    </motion.div>
  );
}
