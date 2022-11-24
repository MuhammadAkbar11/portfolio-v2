import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const mailLinkVariants = (delay: number = 0.3) =>
  <Variants>{
    closed: {
      y: 15,
      opacity: 0,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: MOTION_EASE.default,
        delay: delay,
      },
    },
    hover: {},
  };

export const mailLinkArrowVariants: Variants = {
  closed: {
    rotate: -45,
    opacity: 0,
    y: 15,
  },
  open: {
    opacity: 1,
    rotate: -45,
    y: 0,
    transition: {
      duration: 1,
      ease: MOTION_EASE.default,
      delay: 0.1,
    },
  },
  hover: {
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
};

export const mailLinkBorderVariants: Variants = {
  closed: {
    opacity: 0,
    scaleX: 0,
  },
  open: {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "-100% -100%",
  },
  hover: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: MOTION_EASE.default,
    },
  },
};
