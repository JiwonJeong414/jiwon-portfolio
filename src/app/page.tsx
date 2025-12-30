"use client";

import {
  Scene,
  HangingStars,
  TitleSection,
  ScrollIndicator,
  LoadingScreen,
} from "@/components";
import { Portfolio } from "@/components/ui/Portfolio";

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

      {/* Content Section - Second Viewport */}
      <section className="relative z-20 min-h-screen bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Portfolio />
        </div>
      </section>
    </>
  );
}
