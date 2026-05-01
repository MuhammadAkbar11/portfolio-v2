import { Variants } from "framer-motion";

export const cursorPreviewOverlayVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.25, ease: "easeOut" },
      scale: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      opacity: { duration: 0.2, ease: "easeIn" },
      scale: { duration: 0.2, ease: "easeIn" },
    },
  },
};

export const cursorPreviewImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.3, ease: "easeOut" },
      scale: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
