"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#FFD700";

const DATA = {
  subtitle: "Chapter I",
  title: "Introduction",
  content:
    "Hello! I'm Jiwon, a Cornell student who spends most days (and too many nights) building apps for my campus and helping other developers grow. I care most about building thoughtful, practical software that makes a real difference.",
  quote: "What makes the desert beautiful is that somewhere it hides a well.",
  image: "/portfolio/Beginning.jpeg",
  imageAlt: "A developer's first steps",
};

export function IntroductionChapter() {
  return (
    <motion.article className="relative">
      {/* Chapter label */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span
          className="font-serif text-sm tracking-[0.3em] uppercase"
          style={{ color: ACCENT }}
        >
          {DATA.subtitle}
        </span>
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
      </motion.div>

      {/* Main content */}
      <div className="relative min-h-[500px] md:min-h-[300px]">
        {/* Image */}
        <motion.div
          className="absolute top-0 left-0 z-10 w-[70%] md:w-[45%]"
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            {/* Watercolor-style background blob */}
            <div
              className="absolute inset-0 -rotate-3 rounded-[40%_60%_70%_30%/30%_30%_70%_70%] opacity-20 blur-xl"
              style={{ backgroundColor: ACCENT }}
            />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-xl border border-amber-400/20 bg-slate-900/50 p-3 shadow-xl backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={DATA.image}
                  alt={DATA.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-amber-300/40" />
              <div className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-amber-300/40" />
              <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-amber-300/40" />
              <div className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-amber-300/40" />
            </div>

            {/* Decorative stars */}
            <motion.span
              className="absolute -top-4 -right-4 text-2xl text-yellow-400"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute -bottom-2 -left-6 text-lg text-amber-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ★
            </motion.span>
          </div>
        </motion.div>

        {/* Text card */}
        <motion.div
          className="absolute top-[20px] right-0 z-20 w-[75%] md:top-[40px] md:right-[5%] md:w-[55%]"
          initial={{ opacity: 0, x: 40, rotate: 1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-amber-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-amber-500/10 backdrop-blur-lg md:p-8">
            {/* Title */}
            <h2 className="title-text mb-4 text-3xl text-amber-200 md:text-4xl lg:text-5xl">
              {DATA.title}
            </h2>

            {/* Decorative line */}
            <div
              className="mb-4 h-px w-20"
              style={{
                background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
              }}
            />

            {/* Main content */}
            <p className="mb-6 font-serif text-base leading-relaxed text-slate-300/90 md:text-lg">
              {DATA.content}
            </p>

            {/* Quote */}
            <blockquote className="relative border-l-2 border-amber-400/30 pl-4">
              <span className="absolute -top-2 -left-2 text-3xl text-amber-400/20">
                &quot;
              </span>
              <p className="font-serif text-sm text-amber-200/70 italic md:text-base">
                {DATA.quote}
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>

      {/* Connector line to next section */}
      <motion.div
        className="mx-auto mt-12 h-12 w-px"
        initial={{ scaleY: 0, y: 80 }} // Starts 40px lower
        whileInView={{ scaleY: 1, y: 100 }} // Ends 60px lower
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          background: `linear-gradient(to bottom, ${ACCENT}40, transparent)`,
          transformOrigin: "top",
        }}
      />
    </motion.article>
  );
}
