import { MOTION_EASE } from "@utils/constants.utils";

export const overlayVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.8,
      ease: MOTION_EASE.default,
    },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: {
      duration: 0.8,
      ease: MOTION_EASE.default,
    },
  },
};
