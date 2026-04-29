import React from "react";
import { motion } from "framer-motion";
import { openColumnVariants } from "./openOverlay.motion";
import { COLORS } from "@utils/constants.utils";
import { TransitionPhase } from "@@context/TransitionContext";
import useMediaQuery from "@hooks/useMediaQuery";

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
  const lgscreen = useMediaQuery("(min-width: 1024px)");
  let content: React.ReactNode = null;

  if (index == 1) {
    content = `WRITE and BUILD`;
  }

  if (index === 4) {
    content = `THINK and CODE`;
  }

  return (
    <motion.div
      custom={{ index, direction }}
      variants={openColumnVariants}
      initial="covered"
      animate={phase === "reveal" || phase === "idle" ? "open" : "covered"}
      exit="open"
      className="bg-secondary origin-left"
      onAnimationComplete={variant => onComplete(variant, index)}
      style={{
        position: "absolute",
        top: 0,
        left: `${(index / 6) * 100}%`,
        width: `${100 / 6}%`,
        height: "100%",
        willChange: "transform",
      }}
    >
      {lgscreen ? (
        <div className="flex items-center justify-center h-full w-full">
          <p className="font-light text-white/40 text-sm font-mono uppercase ">
            {content}
          </p>
        </div>
      ) : null}
    </motion.div>
  );
};

export default OpenColumn;
