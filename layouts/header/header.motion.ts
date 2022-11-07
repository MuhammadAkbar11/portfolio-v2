export const headerVariants = (delay: number = 0.3) => ({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay,
    },
  },
  closed: {
    y: -20,
    opacity: 0,
  },
  exit: {
    y: -20,
  },
});
