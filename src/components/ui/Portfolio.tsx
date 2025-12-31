"use client";

import { motion } from "framer-motion";
import { IntroductionChapter } from "./chapters/IntroductionChapter";
import { AppDevChapter } from "./appdev/AppDevChapter";
import { CornellChapter } from "./cornell/CornellChapter";

export function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-[#0f1729] to-slate-900">
      {/* Subtle paper texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] text-4xl text-yellow-400/20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          ★
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] text-2xl text-amber-300/15"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute top-[60%] left-[5%] text-3xl text-yellow-500/10"
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          ★
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        {/* Header Section */}
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative top element */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="text-2xl text-yellow-400">★</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/50" />
          </motion.div>

          <motion.p
            className="mb-4 text-sm tracking-[0.4em] text-amber-300/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A Portfolio Story
          </motion.p>

          <motion.h1
            className="title-text mb-6 text-5xl text-amber-100 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            My Journey
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl font-serif text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Every great story begins with a single step. This is mine—a tale of
            code, creativity, and the endless pursuit of building something
            beautiful.
          </motion.p>

          {/* Decorative book opening divider */}
          <motion.div
            className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-2"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/50" />
            <span className="text-xs text-amber-400/40">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/50" />
          </motion.div>
        </motion.header>

        {/* Story Chapters */}
        <div className="relative space-y-32">
          <IntroductionChapter />
          <AppDevChapter />
          <CornellChapter />
        </div>

        {/* Footer / Contact Section */}
        <motion.footer
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/30" />
            <span className="text-lg text-yellow-400/60">★</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/30" />
          </div>

          <p className="mb-8 font-serif text-xl text-amber-200/70 italic">
            &quot;And now here is my secret, a very simple secret...&quot;
          </p>

          <h3 className="title-text mb-4 text-3xl text-amber-200">
            Let&apos;s Create Together
          </h3>

          <p className="mx-auto mb-8 max-w-md text-slate-400">
            Every great journey is better with a companion. Ready to build
            something magical?
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              className="group relative overflow-hidden rounded-full border-2 border-amber-400/50 bg-transparent px-8 py-3 font-medium text-amber-200 transition-all hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              className="group rounded-full bg-amber-400 px-8 py-3 font-medium text-slate-900 transition-all hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Say Hello ✦
            </motion.button>
          </div>

          {/* Final decorative element */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-4xl text-yellow-400/30">★</span>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
}
