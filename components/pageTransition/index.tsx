import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@utils/constants.utils";
import { overlayVariants } from "./pageTransition.motion";

const PageTransitionOverlay = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-auto"
      style={{
        backgroundColor: COLORS.secondary,
        zIndex: 9999,
      }}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};

export default PageTransitionOverlay;
