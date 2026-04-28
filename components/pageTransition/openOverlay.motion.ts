import { MOTION_EASE } from "@utils/constants.utils";
import type { Variants } from "framer-motion";
import { ColumnCustom } from "./exitOverlay.motion";

export const openColumnVariants: Variants = {
  covered: () => ({
    clipPath: "inset(0 0% 0 0)",
  }),
  exit: ({ index, direction }: ColumnCustom) => {
    const delay = direction === "backward" ? (5 - index) * 0.08 : index * 0.08;
    console.log(delay, "open motion", direction);
    return {
      clipPath:
        direction === "backward" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      transition: {
        duration: 0.7,
        ease: MOTION_EASE.default,
        delay: 0.8,
      },
    };
  },
};
export const openContainerVariants: Variants = {
  covered: { opacity: 1 },
  exit: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
};
