"use client";

import { motion } from "framer-motion";
import { ChapterHeader } from "./ChapterHeader";
import { UpliftProject, TechTiveProject, MillenniumProject } from "./projects";

export function AppDevChapter() {
  return (
    <section className="relative py-24">
      <ChapterHeader />

      <div className="mx-auto max-w-5xl px-4">
        <motion.p
          className="mb-12 text-center text-sm tracking-[0.2em] text-slate-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Projects I&apos;ve Contributed To
        </motion.p>

        <UpliftProject />
        <MillenniumProject />
        <TechTiveProject />
      </div>
    </section>
  );
}
