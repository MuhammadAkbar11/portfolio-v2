import { Variants } from "framer-motion";

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.95],
      // when: "afterChildren",
      // staggerChildren: 0.05,
      // staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
      // when: "beforeChildren",
      // staggerChildren: 0.1,
      // delayChildren: 0.4, // Wait for panel slide down
    },
  },
};

export const mobileMenuPanelVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, -0.05, 0.95],
      when: "afterChildren",
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const mobileMenuHeaderPanelVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const mobileMenuNav: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.95],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
      when: "beforeChildren",
      staggerChildren: 0.1,
      // delayChildren: 0.1, // Wait for panel slide down
    },
  },
};

export const mobileMenuItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const mobileMenuSocialVariants: Variants = {
  closed: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.8, // Show after nav links stagger
    },
  },
};
