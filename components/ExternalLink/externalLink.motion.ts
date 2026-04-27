import { Variants } from "framer-motion";

export const linkBoxVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
  hover: {},
};

export const linkTextTopVariants = (distance: number = -50) => {
  const variants: Variants = {
    closed: {
      y: 0,
      opacity: 1,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    hover: {
      y: distance,
      transition: {
        ease: [0.6, 0.7, 0.8, 0.95],
        duration: 0.5,
      },
    },
  };

  return variants;
};

export const linkTextBottomVariants = (distance: number = 50) => {
  const vrn: Variants = {
    closed: {
      y: distance,
      transition: {
        ease: [0.6, 0.7, 0.8, 0.95],
      },
    },
    open: {
      y: distance,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.7, 0.8, 0.95],
        duration: 0.5,
      },
    },
  };

  return vrn;
};

export const arrowVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
  hover: {
    x: [10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};
