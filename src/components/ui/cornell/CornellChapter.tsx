"use client";

import { motion } from "framer-motion";
import { CornellHeader } from "./CornellHeader";
import { LumeoProject, CameldewProject } from "./projects";

export function CornellChapter() {
  return (
    <section className="relative py-24">
      <CornellHeader />

      <div className="mx-auto max-w-5xl px-4">
        <motion.p
          className="mb-12 text-center text-sm tracking-[0.2em] text-slate-400 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Projects at Cornell
        </motion.p>

        <LumeoProject />
        <CameldewProject />
      </div>
    </section>
  );
}
