import { MOTION_EASE } from "@utils/constants.utils";

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: MOTION_EASE.default 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.5, 
      delay: 0.7,
      ease: MOTION_EASE.default 
    } 
  }
};
