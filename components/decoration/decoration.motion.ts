import { Variants } from "framer-motion";

export const decorationWrapperVariants = (delay: number = 0.3, y?: any) => {
  return {
    closed: {
      opacity: 0,
      y: 50,
    },
    open: {
      opacity: 1,
      y: y,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
  };
};

export const decorationXLVariants: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 360,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.01,
      duration: 25,
      ease: "linear",
    },
  },
};

export const decorationSmallVariants: Variants = {
  closed: {
    rotate: -20,
    y: 0,
  },
  open: {
    rotate: -20,
    y: [-20, 20],
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
      ease: "easeInOut",
    },
  },
};
