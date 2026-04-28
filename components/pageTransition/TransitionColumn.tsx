import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@utils/constants.utils";
import { columnVariants } from "./pageTransition.motion";

interface TransitionColumnProps {
  index: number;
  direction: "forward" | "backward";
}

const TransitionColumn = ({ index, direction }: TransitionColumnProps) => {
  return (
    <motion.div
      key={index}
      custom={{ index, direction }}
      variants={columnVariants}
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

export default TransitionColumn;
