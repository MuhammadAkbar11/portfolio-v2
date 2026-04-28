import { MOTION_EASE } from "@utils/constants.utils";
import type { Variants } from "framer-motion";

export interface ColumnCustom {
  index: number;
  direction: "forward" | "backward";
}

export const exitColumnVariants: Variants = {
  hidden: ({ direction }: ColumnCustom) => ({
    clipPath: direction === "backward" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
  }),
  covered: ({ index, direction }: ColumnCustom) => {
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
};
