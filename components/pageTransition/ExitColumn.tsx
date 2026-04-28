import React from "react";
import { motion } from "framer-motion";
import { exitColumnVariants } from "./exitOverlay.motion";
import { COLORS } from "@utils/constants.utils";

interface ExitColumnProps {
  index: number;
  direction: "forward" | "backward";
  onComplete: (variant: any, index: number) => void;
}

const ExitColumn = ({ index, direction, onComplete }: ExitColumnProps) => {
  return (
    <motion.div
      custom={{ index, direction }}
      variants={exitColumnVariants}
      initial="hidden"
      animate="covered"
      onAnimationComplete={(variant) => onComplete(variant, index)}
      style={{
        position: "absolute",
        top: 0,
        left: `${(index / 6) * 100}%`,
        width: `${100 / 6}%`,
        height: "100%",
        backgroundColor: COLORS.secondary,
        willChange: "clip-path",
      }}
    />
  );
};

export default ExitColumn;
