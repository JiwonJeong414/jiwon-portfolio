"use client";

import { Scene, HangingStars, TitleSection } from "@/components";

export default function Home() {
  return (
    <>
      <Scene />

      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 z-10">
        <HangingStars />
        <TitleSection />
      </div>
    </>
  );
}
