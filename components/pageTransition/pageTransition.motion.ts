import { COLORS, MOTION_EASE } from "@utils/constants.utils";
import type { Variants } from "framer-motion";

// Container does not stagger anymore, children compute their own delays
export const columnsContainerVariants: Variants = {
  initial: {},
  enter: {},
  exit: {},
};

interface ColumnCustom {
  index: number;
  direction: "forward" | "backward";
}

// Individual column variants
export const columnVariants: Variants = {
  initial: ({ direction }: ColumnCustom) => ({
    clipPath: direction === "backward" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
  }),
  enter: ({ index, direction }: ColumnCustom) => {
    const delay = direction === "backward" ? (5 - index) * 0.07 : index * 0.07;
    return {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.75,
        ease: MOTION_EASE.default,
        delay,
      },
    };
  },
  exit: ({ index, direction }: ColumnCustom) => {
    const exitDelay = direction === "backward" ? (5 - index) * 0.07 : index * 0.07;
    return {
      clipPath: direction === "backward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      transition: {
        duration: 0.75,
        ease: MOTION_EASE.default,
        delay: exitDelay,
      },
    };
  },
};
