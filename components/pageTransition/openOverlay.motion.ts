import type { Variants } from "framer-motion";
import { ColumnCustom } from "./exitOverlay.motion";

export const openColumnVariants: Variants = {
  covered: ({ direction }: ColumnCustom) => ({
    scaleX: 1,
    transformOrigin: direction === "backward" ? "left" : "right",
  }),
  open: ({ index, direction }: ColumnCustom) => {
    const delay = direction === "backward" ? (5 - index) * 0.05 : index * 0.09;
    return {
      scaleX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay + 0.2,
      },
    };
  },
};

export const openContainerVariants: Variants = {
  covered: { opacity: 1 },
  open: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.1,
    },
  },
};
