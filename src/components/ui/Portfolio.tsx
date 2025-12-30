"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Portfolio story data - each "chapter" of your journey
const portfolioStories = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "Chapter I",
    content: `Once upon a time, in a small room filled with the soft glow of monitors, a young developer discovered the magic of creating worlds from nothing but code. Each line was a brushstroke, each function a spell that brought ideas to life.`,
    quote: `"What makes the desert beautiful is that somewhere it hides a well."`,
    image: "/portfolio/beginning.png",
    imageAlt: "A developer's first steps",
    accent: "#FFD700",
  },
  {
    id: 2,
    title: "The Craft",
    subtitle: "Chapter II",
    content: `Like the little prince tending to his rose, I learned that true craftsmanship requires patience and care. Every pixel matters. Every interaction tells a story. The websites I build are gardens I tend with dedication.`,
    quote: `"It is the time you have wasted for your rose that makes your rose so important."`,
    image: "/portfolio/craft.png",
    imageAlt: "Crafting beautiful interfaces",
    accent: "#E8B4B8",
  },
  {
    id: 3,
    title: "The Journey",
    subtitle: "Chapter III",
    content: `From asteroid to asteroid, project to project, I traveled through technologies and frameworks. React became my compass, TypeScript my map. Each new world taught me something essential about the art of building.`,
    quote: `"One sees clearly only with the heart. What is essential is invisible to the eye."`,
    image: "/portfolio/journey.png",
    imageAlt: "Journey through projects",
    accent: "#87CEEB",
  },
  {
    id: 4,
    title: "The Creations",
    subtitle: "Chapter IV",
    content: `Now I create experiences that feel like stories—interfaces that guide, delight, and inspire. Each project is a new planet to explore, a new rose to nurture, a new friend to make along the way.`,
    quote: `"All grown-ups were once children... but only few of them remember it."`,
    image: "/portfolio/creations.png",
    imageAlt: "Portfolio of creations",
    accent: "#98D8AA",
  },
];

interface StoryCardProps {
  story: (typeof portfolioStories)[0];
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      className="relative mb-32 last:mb-0"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Chapter number decoration */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span
          className="font-serif text-sm tracking-[0.3em] uppercase"
          style={{ color: story.accent }}
        >
          {story.subtitle}
        </span>
      </motion.div>

      <div
        className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image Side */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -40 : 40 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Decorative frame */}
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            {/* Watercolor-style background blob */}
            <div
              className="absolute inset-0 -rotate-3 rounded-[40%_60%_70%_30%/30%_30%_70%_70%] opacity-20 blur-xl"
              style={{ backgroundColor: story.accent }}
            />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-lg border-4 border-amber-100/30 bg-amber-50/10 p-4 shadow-xl backdrop-blur-sm">
              {/* Placeholder illustration - replace with actual images */}
              <div className="flex aspect-[4/5] items-center justify-center rounded bg-gradient-to-br from-amber-50/20 to-amber-100/10">
                <div className="text-center">
                  <motion.div
                    className="mb-4 text-6xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {index === 0 && "🌟"}
                    {index === 1 && "🌹"}
                    {index === 2 && "🚀"}
                    {index === 3 && "✨"}
                  </motion.div>
                  <p className="font-serif text-sm text-amber-200/60 italic">
                    {story.imageAlt}
                  </p>
                </div>
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

        {/* Text Side */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 40 : -40 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={`max-w-lg ${isEven ? "lg:ml-auto" : "lg:mr-auto"}`}>
            {/* Title */}
            <h2 className="title-text mb-6 text-4xl text-amber-200 md:text-5xl">
              {story.title}
            </h2>

            {/* Decorative line */}
            <div
              className="mb-6 h-px w-24"
              style={{
                background: `linear-gradient(90deg, ${story.accent}, transparent)`,
              }}
            />

            {/* Main content */}
            <p className="mb-8 font-serif text-lg leading-relaxed text-slate-300/90">
              {story.content}
            </p>

            {/* Quote */}
            <blockquote className="relative border-l-2 border-amber-400/30 pl-6">
              <span className="absolute -top-2 -left-3 text-4xl text-amber-400/20">
                &quot;
              </span>
              <p className="font-serif text-base text-amber-200/70 italic">
                {story.quote}
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>

      {/* Decorative connector line to next section */}
      {index < portfolioStories.length - 1 && (
        <motion.div
          className="absolute -bottom-16 left-1/2 h-12 w-px -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            background: `linear-gradient(to bottom, ${story.accent}40, transparent)`,
            transformOrigin: "top",
          }}
        />
      )}
    </motion.article>
  );
}

export function Portfolio() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

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
          ref={headerRef}
          className="mb-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative top element */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="text-2xl text-yellow-400">★</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/50" />
          </motion.div>

          <motion.p
            className="mb-4 text-sm tracking-[0.4em] text-amber-300/60 uppercase"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A Portfolio Story
          </motion.p>

          <motion.h1
            className="title-text mb-6 text-5xl text-amber-100 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.5 }}
          >
            My Journey
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl font-serif text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
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
            animate={
              headerInView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/50" />
            <span className="text-xs text-amber-400/40">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/50" />
          </motion.div>
        </motion.header>

        {/* Story Cards */}
        <div className="relative">
          {portfolioStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
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
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-4xl text-yellow-400/30">★</span>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
}
