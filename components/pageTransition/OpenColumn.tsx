import React from "react";
import { motion } from "framer-motion";
import { openColumnVariants } from "./openOverlay.motion";
import { COLORS } from "@utils/constants.utils";
import { TransitionPhase } from "@@context/TransitionContext";

interface OpenColumnProps {
  index: number;
  direction: "forward" | "backward";
  phase: TransitionPhase;
  onComplete: (variant: any, index: number) => void;
}

const OpenColumn = ({
  index,
  direction,
  phase,
  onComplete,
}: OpenColumnProps) => {
  return (
    <motion.div
      custom={{ index, direction }}
      variants={openColumnVariants}
      // initial="covered"
      // animate="covered"
      // exit="exit"
      onAnimationComplete={variant => onComplete(variant, index)}
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

export default OpenColumn;
