"use client";

import {
  Scene,
  HangingStars,
  TitleSection,
  ScrollIndicator,
  LoadingScreen,
} from "@/components";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Scene />

      {/* Hero Section - First Viewport */}
      <div className="h-screen relative">
        <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 z-10">
          <HangingStars />
          <TitleSection />
        </div>
        <ScrollIndicator />
      </div>

      {/* Content Section - Second Viewport (placeholder for your content) */}
      <section className="min-h-screen bg-[#0a0a0f] relative z-20">
        <div className="max-w-4xl mx-auto px-6 py-24">
          {/* Add portfolio content here */}
          <div className="text-slate-400 text-center">
            <p className="text-lg mb-8 opacity-60">Portfolio Content...</p>
          </div>
        </div>
      </section>
    </>
  );
}
