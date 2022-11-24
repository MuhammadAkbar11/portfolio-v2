import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const socialsVariants = (delay: number = 0.3) =>
  <Variants>{
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
        staggerDirection: 1,
        delay: delay,
      },
    },
    closed: {
      opacity: 0,
    },
    // hover: {},
  };

export const socialsIconVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: MOTION_EASE.default,
    },
  },
  closed: {
    opacity: 0,
    y: 10,
  },
};
