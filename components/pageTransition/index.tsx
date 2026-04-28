import React from "react";
import { motion } from "framer-motion";
import { columnsContainerVariants } from "./pageTransition.motion";
import TransitionColumn from "./TransitionColumn";

interface PageTransitionOverlayProps {
  direction: "forward" | "backward";
}

const COLUMN_COUNT = 6;

const PageTransitionOverlay = ({ direction }: PageTransitionOverlayProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-transparent "
      style={{ zIndex: 9999 }}
      variants={columnsContainerVariants}
      initial="initial"
      animate="enter"
      exit="exit"
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
        <TransitionColumn key={i} index={i} direction={direction} />
      ))}
    </motion.div>
  );
};

export default PageTransitionOverlay;
