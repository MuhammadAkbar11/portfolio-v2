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
        duration: 0.5,
        when: "beforeChildren",
        // staggerChildren: 0.1,
        ease: MOTION_EASE.default,
      },
    },
  };

export const projectImageBox: Variants = {
  closed: {
    clipPath: "polygon(0 0, 3% 0, 3% 100%, 0 100%)",
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  open: {
    scale: 1,
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.4,
      ease: MOTION_EASE.default,
      when: "beforeChildren",
    },
  },
};

export const projectCardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(100, 255, 218, 0)",
    transition: {
      duration: 0.3,
      ease: MOTION_EASE.default,
    },
  },
  hover: {
    y: -4,
    boxShadow: "0 8px 30px rgba(100, 255, 218, 0.06)",
    transition: {
      duration: 0.3,
      ease: MOTION_EASE.default,
    },
  },
};

export const projectImageVariants: Variants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
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
      delay: 0.3,
    },
  },
};
