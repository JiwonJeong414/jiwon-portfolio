"use client";

import { HangingStar } from "./HangingStar";
import { HANGING_STARS } from "@/constants";

export function HangingStars() {
  return (
    <div className="absolute top-0 left-0 w-full h-96 overflow-visible">
      {HANGING_STARS.map((star, index) => (
        <HangingStar key={index} config={star} />
      ))}
    </div>
  );
}
