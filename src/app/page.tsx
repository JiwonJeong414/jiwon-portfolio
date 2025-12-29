"use client";

import { Scene, HangingStars, TitleSection } from "@/components";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Scene />

      <div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 z-10">
        <HangingStars />
        <TitleSection />
      </div>
    </>
  );
}
