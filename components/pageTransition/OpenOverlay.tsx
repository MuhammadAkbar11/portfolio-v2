import React from "react";
import { motion } from "framer-motion";
import {
  openColumnVariants,
  openContainerVariants,
} from "./openOverlay.motion";
import { useTransition } from "@@context/TransitionContext";
import { COLORS } from "@utils/constants.utils";
import OpenColumn from "./OpenColumn";
import useMediaQuery from "@hooks/useMediaQuery";

const COLUMN_COUNT_DESKTOP = 6;
const COLUMN_COUNT_MOBILE = 3;
const MOBILE_BREAKPOINT = "(max-width: 767px)";

const OpenOverlay = () => {
  const { direction, phase, onOpenOverlayComplete } = useTransition();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const columnCount = isMobile ? COLUMN_COUNT_MOBILE : COLUMN_COUNT_DESKTOP;

  const handleAnimationComplete = (variant: any, index: number) => {
    const isLast =
      direction === "forward" ? index === columnCount - 1 : index === 0;
    if (isLast && variant === "open") {
      onOpenOverlayComplete();
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-transparent"
      style={{ zIndex: 9990 }}
      variants={openContainerVariants}
      initial="covered"
      animate="open"
      exit="exit"
    >
      {/* Static Borders Layer */}
      <div className="absolute bg-transparent inset-0 flex pointer-events-none w-full h-full z-10">
        {Array.from({ length: columnCount }).map((_, i) => (
          <div
            key={`border-${i}`}
            className="bg-transparent"
            style={{
              width: `${100 / columnCount}%`,
              height: "100%",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          />
        ))}
      </div>

      {Array.from({ length: columnCount }).map((_, i) => (
        <OpenColumn
          key={i}
          index={i}
          columnCount={columnCount}
          direction={direction}
          phase={phase}
          onComplete={handleAnimationComplete}
        />
      ))}
    </motion.div>
  );
};

export default OpenOverlay;
