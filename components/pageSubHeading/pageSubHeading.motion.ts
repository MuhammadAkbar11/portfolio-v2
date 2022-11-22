import { Variants } from "framer-motion";

export const pageSubHeadVariant = (delay: number = 0.5) =>
  <Variants>{
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,

      rotate: 0,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        delay: delay,
      },
    },
  };
