import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const aboutContentWrapperVariant: Variants = {
  open: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const aboutContentTextVariants = (delay: number) =>
  <Variants>{
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: MOTION_EASE.default,
        duration: 1.1,
        delay: delay,
      },
    },
    closed: {
      y: 15,
      opacity: 0,
    },
  };

export const aboutContentImgBoxVariants: Variants = {
  open: {
    opacity: 1,
    border: "1px solid rgb(136 146 176 / 0.25)",
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.9,
    },
  },
  closed: {
    border: "1px solid rgba(136 146 176 / 0)",
    opacity: 1,
  },
};

export const aboutContentImgVariants: Variants = {
  open: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
    },
  },
  closed: {
    clipPath: "polygon(0 0, 100% 0, 100% 3%, 0 4%)",
    opacity: 0,
  },
};
