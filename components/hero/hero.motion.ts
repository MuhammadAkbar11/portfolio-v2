import { Variants } from "framer-motion";

// export const
export const heroTextVariants = (delay: number) => {
  const variants: Variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + delay,
        delayChildren: 0.3 + delay,
        staggerChildren: 0.1,
      },
    },
  };

  return variants;
};

export const heroTextTitleVariants: Variants = {
  closed: {
    opacity: 0,
    y: 200,
    skewX: -34,
    scaleY: 0.1,
  },
  open: {
    skewX: 0,
    x: 0,
    rotate: 0,
    scaleY: 1,
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      // ease: "easeInOut",
      // duration: 1,
    },
  },
};

export const heroActionVariants: Variants = {
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

export const heroActionBoxVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
  hover: {},
};

export const heroActionLinkTopVariants = (distance: number = -50) => {
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

export const heroActionLinkBottomVariants = (distance: number = 50) => {
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
