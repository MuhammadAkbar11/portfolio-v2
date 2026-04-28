import React from "react";
import { motion } from "framer-motion";
import { openColumnVariants, openContainerVariants } from "./openOverlay.motion";
import { useTransition } from "@@context/TransitionContext";
import { COLORS } from "@utils/constants.utils";
import OpenColumn from "./OpenColumn";

const COLUMN_COUNT = 6;

const OpenOverlay = () => {
  const { direction, phase, onOpenOverlayComplete } = useTransition();

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-transparent"
      style={{ zIndex: 9999 }}
      variants={openContainerVariants}
      initial="covered"
      animate="covered"
      exit="exit"
      onAnimationComplete={(variant) => {
        if (variant === "exit") {
          onOpenOverlayComplete();
        }
      }}
    >
      {/* Static Borders Layer */}
      <div className="absolute inset-0 flex pointer-events-none w-full h-full z-10">
        {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
          <div
            key={`border-${i}`}
            style={{
              width: `${100 / COLUMN_COUNT}%`,
              height: "100%",
              borderRight: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          />
        ))}
      </div>

      {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
        <OpenColumn
          key={i}
          index={i}
          direction={direction}
          phase={phase}
          onComplete={() => {}}
        />
      ))}
    </motion.div>
  );
};

export default OpenOverlay;
