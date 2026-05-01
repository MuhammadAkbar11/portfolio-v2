import React from "react";
import { motion } from "framer-motion";
import { exitColumnVariants } from "./exitOverlay.motion";
import useMediaQuery from "@hooks/useMediaQuery";

interface ExitColumnProps {
  index: number;
  columnCount: number;
  direction: "forward" | "backward";
  onComplete: (variant: any, index: number) => void;
}

const ExitColumn = ({ index, columnCount, direction, onComplete }: ExitColumnProps) => {
  const lgscreen = useMediaQuery("(min-width: 1024px)");
  let content: React.ReactNode = null;

  if (index == 1) {
    content = `WRITE and BUILD`;
  }

  if (index === 4 && columnCount === 6) {
    content = `THINK and CODE`;
  }

  return (
    <motion.div
      custom={{ index, direction, columnCount }}
      variants={exitColumnVariants}
      initial="hidden"
      animate="covered"
      className="bg-secondary"
      onAnimationComplete={variant => onComplete(variant, index)}
      style={{
        position: "absolute",
        top: 0,
        left: `${(index / columnCount) * 100}%`,
        width: `${100 / columnCount}%`,
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

export default ExitColumn;
