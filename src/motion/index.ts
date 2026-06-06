import type { Variants } from "motion";

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
export const scale: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    },
  },
};
