"use client";

import { motion } from "framer-motion";
import { HangingStarConfig, starVariants } from "@/constants";

interface HangingStarProps {
  config: HangingStarConfig;
}

export function HangingStar({ config }: HangingStarProps) {
  const {
    position,
    height,
    textColorClass,
    gradientClasses,
    size,
    icon,
    slow,
    delay,
  } = config;

  return (
    <motion.div
      className={`${
        slow ? "hanging-star-slow" : "hanging-star"
      } absolute top-0 ${position}`}
      variants={starVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      <div
        className={`star-string ${height} w-px bg-gradient-to-b from-transparent ${gradientClasses}`}
      />
      <span className={`${textColorClass} ${size} block`}>{icon}</span>
    </motion.div>
  );
}
