"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading, useScroll } from "@/context";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const { isLoaded } = useLoading();
  const { scrollProgress } = useScroll();
  const [showIndicator, setShowIndicator] = useState(false);

  // Show indicator after all animations complete (roughly 2.5s after load)
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowIndicator(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  // Hide when user starts scrolling
  const isVisible = showIndicator && scrollProgress < 0.1;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Text */}
          <motion.span
            className="text-xs font-bold tracking-[0.25em] text-white uppercase"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.span>

          {/* Animated arrow container */}
          <div className="relative flex h-10 w-6 flex-col items-center overflow-hidden">
            {/* Animated chevrons */}
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                className="text-white/30"
              >
                <path
                  d="M1 1L8 7L15 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                className="text-white/30 opacity-60"
              >
                <path
                  d="M1 1L8 7L15 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Subtle line */}
          <motion.div
            className="h-8 w-px bg-gradient-to-b from-slate-600/50 to-transparent"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
