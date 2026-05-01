import { MOTION_EASE } from "@utils/constants.utils";
import type { Variants } from "framer-motion";

export interface ColumnCustom {
  index: number;
  direction: "forward" | "backward";
  columnCount: number;
}

export const exitColumnVariants: Variants = {
  hidden: ({ direction }: ColumnCustom) => ({
    scaleX: 0,
    transformOrigin: direction === "backward" ? "right" : "left",
  }),
  covered: ({ index, direction, columnCount }: ColumnCustom) => {
    const maxIndex = columnCount - 1;
    const delay = direction === "backward" ? (maxIndex - index) * 0.05 : index * 0.05;
    return {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
        delay,
      },
    };
  },
};
