import { Variants } from "framer-motion";

const ease = [0.6, 0.01, -0.05, 0.95];

// Root container — orchestrates panel entry/exit
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease,
      when: "afterChildren", // Wait for panel to finish exiting
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease,
      when: "beforeChildren", // Fade in first, then animate panel
    },
  },
};

// Full-screen panel — slides in/out and orchestrates its own children
export const mobileMenuPanelVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease,
      when: "afterChildren", // Children exit first, then panel slides up
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease,
      when: "beforeChildren", // Panel slides down first, then children appear
    },
  },
};

// Header row (logo + close button)
export const mobileMenuHeaderPanelVariants: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.4,
      ease,
    },
  },
};

// Nav wrapper — orchestrates individual nav items with stagger
export const mobileMenuNav: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse stagger: last item exits first
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease,
      when: "beforeChildren",
      delayChildren: 0.35,
      staggerChildren: 0.08,
    },
  },
};

// Individual nav link item
export const mobileMenuItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.3,
      ease,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

// Social links at the bottom
export const mobileMenuSocialVariants: Variants = {
  closed: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2,
      ease,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
      delay: 0.7,
    },
  },
};
