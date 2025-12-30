"use client";

import {
  Scene,
  HangingStars,
  TitleSection,
  ScrollIndicator,
  LoadingScreen,
} from "@/components";
import { Portfolio } from "@/components/ui/Portfolio";

// Generate random stars
function generateStars(count: number, size: "sm" | "md" | "lg") {
  const stars = [];
  const sizeMap = { sm: 1, md: 2, lg: 3 };

  for (let i = 0; i < count; i++) {
    stars.push({
      id: `${size}-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: sizeMap[size],
      opacity: 0.6 + Math.random() * 0.4,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    });
  }
  return stars;
}

const smallStars = generateStars(150, "sm");
const mediumStars = generateStars(60, "md");
const largeStars = generateStars(25, "lg");

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Scene />

      {/* Hero Section - First Viewport */}
      <div className="relative h-screen">
        <div className="pointer-events-none fixed inset-0 z-10 flex flex-col items-center justify-start pt-12">
          <HangingStars />
          <TitleSection />
        </div>
        <ScrollIndicator />
      </div>

      {/* Content Section - Starry Night Sky */}
      <section className="relative z-20 min-h-screen bg-slate-900">
        {/* Small stars */}
        <div className="pointer-events-none absolute inset-0">
          {smallStars.map((star) => (
            <div
              key={star.id}
              className="absolute animate-pulse rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
              }}
            />
          ))}
        </div>

        {/* Medium stars */}
        <div className="pointer-events-none absolute inset-0">
          {mediumStars.map((star) => (
            <div
              key={star.id}
              className="absolute animate-pulse rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
                boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 8}px rgba(255, 255, 255, 0.4)`,
              }}
            />
          ))}
        </div>

        {/* Large glowing stars */}
        <div className="pointer-events-none absolute inset-0">
          {largeStars.map((star) => (
            <div
              key={star.id}
              className="absolute animate-pulse rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
                boxShadow: `0 0 ${star.size * 6}px rgba(255, 255, 255, 1), 0 0 ${star.size * 12}px rgba(255, 255, 255, 0.6), 0 0 ${star.size * 20}px rgba(255, 255, 255, 0.3)`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 py-24">
          <Portfolio />
        </div>
      </section>
    </>
  );
}
