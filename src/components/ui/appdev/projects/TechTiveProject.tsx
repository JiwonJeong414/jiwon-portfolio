"use client";

import {
  GlowFrame,
  ProjectTitle,
  TechTags,
  ProjectWrapper,
} from "../components";

const ACCENT = "#F97316";

const IMAGES = {
  bannerHero: "/portfolio/TechTive1.png",
  bannerWide: "/portfolio/TechTive2.png",
};

export function TechTiveProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle name="TechTive" accent={ACCENT} />

      <div className="mx-auto max-w-5xl">
        {/* Hero Banner */}
        <div className="mb-3">
          <GlowFrame accent={ACCENT}>
            <img
              src={IMAGES.bannerHero}
              alt="TechTive hero"
              className="w-full rounded object-cover"
            />
          </GlowFrame>
        </div>

        {/* Wide Banner */}
        <div className="mb-6">
          <GlowFrame accent={ACCENT}>
            <img
              src={IMAGES.bannerWide}
              alt="TechTive banner"
              className="w-full rounded object-cover"
            />
          </GlowFrame>
        </div>

        {/* Text - centered */}
        <div className="mx-auto max-w-xl text-center">
          <p
            className="mb-3 text-sm font-medium tracking-wider uppercase"
            style={{ color: ACCENT }}
          >
            Your Perspective
          </p>
          <p className="mb-5 font-serif text-base leading-relaxed text-slate-300/90 md:text-lg">
            A mental wellness companion that helps users track their feelings,
            journal their thoughts, and maintain emotional balance.
          </p>
          <TechTags tech={["Swift", "SwiftUI", "Core Data"]} accent={ACCENT} />
        </div>
      </div>
    </ProjectWrapper>
  );
}
