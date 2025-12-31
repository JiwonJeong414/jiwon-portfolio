"use client";

import { HangingStarConfig } from "@/constants/stars";

interface HangingStarProps {
  config: HangingStarConfig;
  index: number;
}

export function HangingStar({ config, index }: HangingStarProps) {
  const {
    position,
    height,
    textColorClass,
    gradientClasses,
    size,
    icon,
    slow,
  } = config;

  return (
    <div
      className={`${
        slow ? "hanging-star-slow" : "hanging-star"
      } absolute top-0 ${position} animate-drop-in opacity-0`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`star-string ${height} w-px bg-gradient-to-b from-transparent ${gradientClasses}`}
      />
      <span className={`${textColorClass} ${size} block`}>{icon}</span>
    </div>
  );
}
