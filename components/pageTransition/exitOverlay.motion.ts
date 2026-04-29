import { MOTION_EASE } from "@utils/constants.utils";
import type { Variants } from "framer-motion";

export interface ColumnCustom {
  index: number;
  direction: "forward" | "backward";
}

export const exitColumnVariants: Variants = {
  hidden: ({ direction }: ColumnCustom) => ({
    scaleX: 0,
    transformOrigin: direction === "backward" ? "right" : "left",
  }),
  covered: ({ index, direction }: ColumnCustom) => {
    const delay = direction === "backward" ? (5 - index) * 0.05 : index * 0.05;
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
