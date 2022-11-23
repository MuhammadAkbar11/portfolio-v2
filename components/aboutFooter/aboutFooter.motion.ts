import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const aboutFooterAnchorIVariants: Variants = {
  closed: {
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  hover: {},
};

export const aboutFooterAnchorDotVariants = (delay: number) =>
  <Variants>{
    closed: {
      y: 45,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: MOTION_EASE.default,
        duration: 1,
        delay: delay,
      },
    },
    hover: {
      opacity: 0,
      y: -45,
      transition: {
        ease: MOTION_EASE.default,
        duration: 0.7,
      },
    },
  };

export const aboutFooterArrowVariant: Variants = {
  closed: {
    y: 35,
    opacity: 0,
  },
  open: {
    y: 45,
    opacity: 0,
    rotate: -30,
    transition: {
      ease: MOTION_EASE.default,
      duration: 1,
    },
  },
  hover: {
    opacity: 1,
    rotate: -30,
    y: 0,
    transition: {
      ease: MOTION_EASE.default,
      duration: 0.7,
    },
  },
};

export const aboutFooterHRVariants = (delay: number = 0.5) => {
  const variants: Variants = {
    closed: {
      y: -8,
      scaleX: 0,
      opacity: 0,
      transition: {
        ease: MOTION_EASE.default,
        duration: 1,
        delay: 0.1,
      },
    },
    open: {
      scaleX: 1,
      opacity: 1,

      y: -8,
      transition: {
        ease: MOTION_EASE.default,
        duration: 1,
        delay: delay,
      },
    },
    hover: {
      y: -8,
      scaleX: 0,
      transition: {
        ease: MOTION_EASE.default,
        duration: 0.8,
        // delay: 0.1,
      },
    },
  };

  return variants;
};

export const aboutFooterHR2Variants: Variants = {
  closed: {
    y: -8,
    opacity: 0,
    scaleX: 0,
  },
  open: {
    y: -8,
    opacity: 0,
    scaleX: 0,
    transition: {
      ease: MOTION_EASE.default,
      duration: 0.9,
    },
  },
  hover: {
    y: -8,
    scaleX: 1,
    opacity: 1,
    transition: {
      ease: MOTION_EASE.default,
      duration: 0.9,
    },
  },
};
