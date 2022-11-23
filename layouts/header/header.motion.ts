import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const headerVariants = (delay: number = 0.3) =>
  <Variants>{
    openTop: {
      y: 0,
      opacity: 1,
      height: 85,
      transition: {
        duration: 0.8,
        ease: MOTION_EASE.default,
        type: "spring",
        delay: 0.2,
      },
    },
    openScroll: {
      y: 0,
      opacity: 1,
      height: 75,
      transition: {
        duration: 0.8,
        ease: MOTION_EASE.default,
        type: "spring",
        delay: 0.02,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      height: 85,
      transition: {
        duration: 1,
        type: "spring",
        delay,
      },
    },
    closed: {
      y: -20,
      opacity: 0,
    },
    exit: {
      y: -20,
    },
  };
