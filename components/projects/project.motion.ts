import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const projectCardVariants = (delay: number = 0.2) =>
  <Variants>{
    closed: {
      opacity: 0,
      y: 35,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: MOTION_EASE.default,
        delay,
      },
    },
  };

export const projectImageVariants: Variants = {
  closed: {
    scale: 1.1,
    opacity: 0,
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: MOTION_EASE.default,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: MOTION_EASE.default,
    },
  },
};

export const projectContentVariants: Variants = {
  closed: {
    opacity: 0,
    y: 18,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: MOTION_EASE.default,
      delay: 0.15,
    },
  },
};
