import { MOTION_EASE } from "@utils/constants.utils";
import { Variants } from "framer-motion";

export const contactTextVariants: Variants = {
  closed: {
    opacity: 0,
    y: 15,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: MOTION_EASE.default,
      delay: 0.7,
    },
  },
};
