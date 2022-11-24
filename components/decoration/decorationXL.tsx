import React from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import {
  decorationWrapperVariants,
  decorationXLVariants,
} from "./decoration.motion";

type Props = {
  delay: number;
  className?: string;
  fixed?: boolean;
};

function DecorationXL({ delay = 0.1, className, fixed }: Props) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const wrapperStyleY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  let styles: MotionStyle = {};

  if (!fixed) {
    styles = { y: wrapperStyleY };
  }

  return (
    <motion.div
      variants={decorationWrapperVariants(delay)}
      style={styles}
      initial="closed"
      animate="open"
      className={[
        "absolute -z-1 h-[350px] w-[350px] md:h-[500px] md:w-[500px]",
        className,
      ].join(" ")}
    >
      <motion.div
        variants={decorationXLVariants}
        initial="closed"
        animate="open"
        className="h-full w-full bg-primary/20 transform  blur-[4rem] "
      ></motion.div>
    </motion.div>
  );
}

DecorationXL.defaultProps = {
  className: "right-[5%] top-[10%]",
};

export default DecorationXL;
