import { Variants } from "framer-motion";

export const headingAnimatedVariants = (
  delay: number,
  exitDelay: number = 0.5
) => {
  const variants: Variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + delay,
        delayChildren: 0.2 + delay,
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        delay: exitDelay,
        delayChildren: exitDelay,
        staggerDirection: -1,
        staggerChildren: 0.1,
      },
    },
  };

  return variants;
};

export const headingChildVariants: Variants = {
  closed: {
    opacity: 0,
    y: 120,
    skewX: -34,
    scaleY: 0.1,
  },
  open: {
    skewX: 0,
    x: 0,
    rotate: 0,
    scaleY: 1,
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },

  exit: {
    y: -200,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
