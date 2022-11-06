import { Variant, Variants } from "framer-motion";

export const cursorMotionVariants = (posX: number, posY: number) => {
  let variants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    default: {
      opacity: 1,
      x: posX - 10 + "px",
      y: posY - 10 + "px",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    heading: {
      opacity: 1,
      height: 100,
      width: 100,
      x: posX - 50 + "px",
      y: posY - 50 + "px",
      backgroundColor: "#b6a4fc",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    subheading: {
      opacity: 1,
      height: 50,
      width: 50,
      x: posX - 25 + "px",
      y: posY - 25 + "px",
      backgroundColor: "#b6a4fc",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    logo: {
      opacity: 1,
      height: 60,
      width: 60,
      x: posX - 30 + "px",
      y: posY - 30 + "px",
      mixBlendMode: "difference",
      backgroundColor: "rgb(230, 241, 255)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
      },
    },
    navlink: {
      opacity: 1,
      height: [10, 50],
      width: [10, 50],
      x: posX - 25 + "px",
      y: posY - 25 + "px",
      backgroundColor: "rgb(182 164 252, 0.25)",
      backdropFilter: "blur(2.3px)",
      WebkitBackdropFilter: "blur(2.3px)",
      border: "1px solid #7756fb",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
      },
    },

    heroAction: {
      opacity: 1,
      height: 90,
      width: 90,
      x: posX - 45 + "px",
      y: posY - 45 + "px",
      backgroundColor: "rgb(182 164 252, 0.25)",
      backdropFilter: "blur(2.3px)",
      WebkitBackdropFilter: "blur(2.3px)",
      color: "#6341ea",
      border: "1px solid #7756fb",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return variants;
};

export const cursorSpanMotionVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1 },
  default: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
