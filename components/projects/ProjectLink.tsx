import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "@assets/arrow-right.svg";
import { useCursorContext } from "@@context/CursorContext";

type Props = {
  href: string;
  label: string;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
>;

const linkArrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const linkBorderVariants = {
  initial: { width: 0, opacity: 0 },
  hover: { width: "100%", opacity: 1 },
};

function ProjectLink({ href, label, ...props }: Props) {
  const cursorContext = useCursorContext();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial="initial"
      whileHover="hover"
      className="relative group overflow-hidden text-md sm:text-md flex items-center gap-2 text-primary italic py-1 w-max"
      onMouseEnter={() => cursorContext.cursorEnter("link")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      {...props}
    >
      <motion.span variants={linkArrowVariants} className="flex items-center">
        <ArrowRight className="w-4 h-4" />
      </motion.span>
      <span>{label}</span>
      <motion.hr
        variants={linkBorderVariants}
        className="absolute bottom-0 left-0 border-primary h-[0.5px]"
      />
    </motion.a>
  );
}

export default ProjectLink;
