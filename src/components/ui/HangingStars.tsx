"use client";

import { HangingStar } from "./HangingStar";
import { HANGING_STARS } from "@/constants";
import { useLoading } from "@/context/LoadingContext";

export function HangingStars() {
  const { isLoaded } = useLoading();

  // Don't render until 3D scene is loaded
  if (!isLoaded) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-96 overflow-visible">
      {HANGING_STARS.map((star, index) => (
        <HangingStar key={index} config={star} />
      ))}
    </div>
  );
}
