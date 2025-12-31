"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context";

export function LoadingScreen() {
  const { isLoaded } = useLoading();

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated star */}
          <motion.div
            className="text-6xl text-yellow-400"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ★
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="mt-6 text-sm tracking-[0.3em] text-amber-200/60 uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
