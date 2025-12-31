"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  Scene,
  HangingStars,
  TitleSection,
  ScrollIndicator,
  LoadingScreen,
} from "@/components";
import { Portfolio } from "@/components/ui/Portfolio";

interface Star {
  id: string;
  left: string;
  top: string;
  size: number;
  opacity: number;
  animationDelay: string;
  animationDuration: string;
}

// Generate random stars - only call this on the client
function generateStars(count: number, size: "sm" | "md" | "lg"): Star[] {
  const stars: Star[] = [];
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

// Hook to detect if we're on the client (after hydration)
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // Client value
    () => false, // Server value
  );
}

export default function Home() {
  const isClient = useIsClient();

  // Generate stars only on the client
  // useMemo ensures we don't regenerate on every render
  const smallStars = useMemo(
    () => (isClient ? generateStars(150, "sm") : []),
    [isClient],
  );
  const mediumStars = useMemo(
    () => (isClient ? generateStars(60, "md") : []),
    [isClient],
  );
  const largeStars = useMemo(
    () => (isClient ? generateStars(25, "lg") : []),
    [isClient],
  );

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

        {/* Content - WIDENED from max-w-4xl to max-w-6xl */}
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <Portfolio />
        </div>
      </section>
    </>
  );
}
