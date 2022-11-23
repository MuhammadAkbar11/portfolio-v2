import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const aboutSkillHeadingArrowVariants = (
  delay: number,
  finalRotate: number = 45
) =>
  <Variants>{
    closed: {
      opacity: 0,
      x: 30,
      y: 5,
    },
    open: {
      rotate: [0, 0, 0, finalRotate],
      x: 0,
      y: 5,
      opacity: 1,
      transition: {
        ease: MOTION_EASE.default,
        duration: 1,
        delay: delay,
      },
    },
  };

export const aboutSkillItemLIVariants: Variants = {
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

export const aboutSkillItemVariants = (delay: number = 0.1) =>
  <Variants>{
    closed: {
      opacity: 0,
      y: 30,
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
  };

export const aboutSkillItemMobileVariants = (delay: number = 0.1) =>
  <Variants>{
    closed: {
      opacity: 0,
      y: 30,
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
  };

export const aboutSkillHRVariants = (delay: number = 0.1) => {
  const variants: Variants = {
    closed: {
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

      transition: {
        ease: MOTION_EASE.default,
        duration: 1,
        delay: delay,
      },
    },
    hover: {
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

export const aboutSkillHR2Variants: Variants = {
  closed: {
    opacity: 0,
    scaleX: 0,
  },
  open: {
    opacity: 0,
    scaleX: 0,
    transition: {
      ease: MOTION_EASE.default,
      duration: 0.9,
    },
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      ease: MOTION_EASE.default,
      duration: 0.9,
    },
  },
};
