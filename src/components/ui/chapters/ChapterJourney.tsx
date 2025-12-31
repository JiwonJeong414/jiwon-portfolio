"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#87CEEB";

const DATA = {
  subtitle: "Chapter III",
  title: "The Journey",
  content: `From asteroid to asteroid, project to project, I traveled through technologies and frameworks. React became my compass, TypeScript my map. Each new world taught me something essential about the art of building.`,
  quote: `"One sees clearly only with the heart. What is essential is invisible to the eye."`,
  image: "/portfolio/beginning.jpeg",
  imageAlt: "Journey through projects",
};

export function ChapterJourney() {
  return (
    <motion.article
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Chapter label */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span
          className="font-serif text-sm tracking-[0.3em] uppercase"
          style={{ color: ACCENT }}
        >
          {DATA.subtitle}
        </span>
        <motion.div
          className="mx-auto mt-2 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-lg" style={{ color: ACCENT }}>
            ✦
          </span>
        </motion.div>
      </motion.div>

      {/* Main content - organic layout (reversed - image on right) */}
      <div className="relative min-h-[500px] md:min-h-[450px]">
        {/* Text card - Left side, floating */}
        <motion.div
          className="absolute top-[20px] left-0 z-20 w-[75%] md:top-[40px] md:left-[5%] md:w-[55%]"
          initial={{ opacity: 0, x: -40, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: -0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="rounded-2xl border border-sky-400/20 bg-slate-900/90 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-lg md:p-8">
            {/* Title */}
            <h2 className="title-text mb-4 text-3xl text-sky-200 md:text-4xl lg:text-5xl">
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
            <blockquote className="relative border-l-2 border-sky-400/30 pl-4">
              <span className="absolute -top-2 -left-2 text-3xl text-sky-400/20">
                &quot;
              </span>
              <p className="font-serif text-sm text-sky-200/70 italic md:text-base">
                {DATA.quote}
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Image - Right side with tilt */}
        <motion.div
          className="absolute top-0 right-0 z-10 w-[70%] md:w-[45%]"
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative">
            {/* Watercolor-style background blob */}
            <div
              className="absolute inset-0 rotate-3 rounded-[40%_60%_70%_30%/30%_30%_70%_70%] opacity-20 blur-xl"
              style={{ backgroundColor: ACCENT }}
            />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-xl border border-sky-400/20 bg-slate-900/50 p-3 shadow-xl backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={DATA.image}
                  alt={DATA.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-sky-300/40" />
              <div className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-sky-300/40" />
              <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-sky-300/40" />
              <div className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-sky-300/40" />
            </div>

            {/* Decorative stars */}
            <motion.span
              className="absolute -top-4 -left-4 text-2xl text-sky-400"
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute -right-6 -bottom-2 text-lg text-sky-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ★
            </motion.span>
          </div>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[60%] right-[50%] h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-[30%] left-[10%] h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>

      {/* Connector line to next section */}
      <motion.div
        className="mx-auto mt-16 h-12 w-px"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          background: `linear-gradient(to bottom, ${ACCENT}40, transparent)`,
          transformOrigin: "top",
        }}
      />
    </motion.article>
  );
}
