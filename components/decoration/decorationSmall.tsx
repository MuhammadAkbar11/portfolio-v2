import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  decorationSmallVariants,
  decorationWrapperVariants,
} from "./decoration.motion";

type Props = {
  delay: number;
  className?: string;
};

function DecorationSmall({ delay = 0.1, className }: Props) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const wrapperStyleY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <motion.div
      variants={decorationWrapperVariants(delay)}
      style={{ y: wrapperStyleY }}
      initial="closed"
      animate="open"
      className={[
        "absolute -z-1 h-[90px] w-[90px] md:h-[150px] md:w-[150px] ",
        className,
      ].join(" ")}
    >
      <motion.div
        variants={decorationSmallVariants}
        className=" w-full h-full  bg-primary/20 transform -rotate-12 blur-[1rem] "
      ></motion.div>
    </motion.div>
  );
}

DecorationSmall.defaultProps = {
  className: "left-[10%] top-[20%]",
};

export default DecorationSmall;
