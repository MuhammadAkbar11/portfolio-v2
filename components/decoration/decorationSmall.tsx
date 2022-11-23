import React from "react";
import {
  motion,
  MotionStyle,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  decorationSmallVariants,
  decorationWrapperVariants,
} from "./decoration.motion";

type Props = {
  delay: number;
  fixed?: boolean;
  className?: string;
};

function DecorationSmall({ delay = 0.1, className, fixed }: Props) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const controls = useAnimation();
  const wrapperStyleY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  let style: MotionStyle = {};

  if (!fixed) {
    style = { y: wrapperStyleY };
  }

  React.useEffect(() => {
    controls.start("open");
    setTimeout(() => {
      controls.start("open2");
    }, 1000);
  }, [controls]);

  return (
    <motion.div
      variants={decorationWrapperVariants(delay)}
      style={style}
      initial="closed"
      animate={controls}
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
