import { Variants } from "framer-motion";

export const workProjectActionVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.6,
    },
  },
  closed: {
    opacity: 0,
  },
  hover: {},
};

export const workProjectActionBoxVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
  hover: {},
};

export const workProjectActionLinkTopVariants = (distance: number = -50) => {
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

export const workProjectActionLinkBottomVariants = (distance: number = 50) => {
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
