import React from "react";
import {
  motion,
  MotionStyle,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  decorationWrapperVariants,
  decorationXLVariants,
} from "./decoration.motion";

type Props = {
  delay: number;
  className?: string;
  fixed?: boolean;
};

function DecorationLarge({ delay = 0.1, className, fixed }: Props) {
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
        "absolute -z-1 h-[200px] w-[200px] md:h-[350px] md:w-[350px]",
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

DecorationLarge.defaultProps = {
  className: "right-[5%] top-[10%]",
};

export default DecorationLarge;
