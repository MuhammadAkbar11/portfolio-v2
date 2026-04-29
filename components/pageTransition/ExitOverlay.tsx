import React from "react";
import { motion } from "framer-motion";
import { exitColumnVariants } from "./exitOverlay.motion";
import { useTransition } from "@@context/TransitionContext";
import { COLORS } from "@utils/constants.utils";
import ExitColumn from "./ExitColumn";

const COLUMN_COUNT = 6;

const ExitOverlay = () => {
  const { direction, onExitOverlayComplete, phase } = useTransition();

  const handleAnimationComplete = (variant: any, index: number) => {
    const isLast =
      direction === "forward" ? index === COLUMN_COUNT - 1 : index === 0;
    if (isLast && variant === "covered") {
      onExitOverlayComplete();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-transparent"
      style={{ zIndex: 9999 }}
    >
      {/* Static Borders Layer */}
      <div className="absolute bg-transparent inset-0 flex pointer-events-none w-full h-full z-10">
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
        <ExitColumn
          key={i}
          index={i}
          direction={direction}
          onComplete={handleAnimationComplete}
        />
      ))}
    </div>
  );
};

export default ExitOverlay;
