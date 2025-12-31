"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowFrame } from "./components";
import { APPDEV_DATA } from "./data";

export function ChapterHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.header
      ref={ref}
      className="mb-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="mb-2 text-sm tracking-[0.3em] text-amber-400/80 uppercase"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        {APPDEV_DATA.subtitle}
      </motion.p>

      <div className="mb-6 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
        <motion.span
          className="text-2xl text-yellow-400"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ★
        </motion.span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
      </div>

      <h2 className="title-text mb-4 text-4xl text-amber-200 md:text-5xl lg:text-6xl">
        {APPDEV_DATA.title}
      </h2>

      <p className="mb-6 text-sm tracking-wider text-amber-300/60 uppercase">
        {APPDEV_DATA.role}
      </p>

      <div className="mx-auto mb-10 flex max-w-5xl items-stretch gap-3 px-20">
        <div className="flex-shrink-0">
          <GlowFrame accent="#FFD700" className="h-full">
            <img
              src={APPDEV_DATA.images.logo}
              alt="AppDev Logo"
              className="h-20 w-20 rounded object-contain md:h-24 md:w-24"
            />
          </GlowFrame>
        </div>
        <div className="flex-1">
          <GlowFrame accent="#FFD700" className="h-full">
            <img
              src={APPDEV_DATA.images.banner}
              alt="Cornell AppDev Banner"
              className="h-20 w-full rounded object-cover md:h-24"
            />
          </GlowFrame>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <p className="mb-8 font-serif text-lg leading-relaxed text-slate-300/90">
            {APPDEV_DATA.description}
          </p>
          <blockquote className="border-l-2 border-amber-400/30 pl-6">
            <span className="text-3xl text-amber-400/20">&ldquo;</span>
            <p className="font-serif text-base text-amber-200/70 italic">
              {APPDEV_DATA.quote}
            </p>
          </blockquote>
        </div>
        <div className="w-full lg:w-1/2">
          <GlowFrame accent="#FFD700">
            <img
              src={APPDEV_DATA.images.team}
              alt="AppDev Team"
              className="w-full rounded object-cover"
            />
          </GlowFrame>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/50" />
        <span className="text-xs text-amber-400/40">✦</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/50" />
      </div>
    </motion.header>
  );
}
