export const headerNavVariants = (delay: number) => ({
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
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
