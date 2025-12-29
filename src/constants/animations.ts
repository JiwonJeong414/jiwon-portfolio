import { Variants } from "framer-motion";

export const starVariants: Variants = {
  hidden: { y: -200, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay,
      ease: "easeOut" as const,
    },
  }),
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay,
    },
  }),
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 1.0,
    },
  },
};
