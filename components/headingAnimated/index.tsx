import { AnimationProps, motion } from "framer-motion";
import clsx from "classnames";
import React from "react";
import {
  headingAnimatedVariants,
  headingChildVariants,
} from "./headingAnimated.motion";

interface Props {
  comp?: React.ComponentType<AnimationProps> | keyof JSX.IntrinsicElements;
  text: string;
  primaryText?: string;
  delay?: number;
  exitDelay?: number;
  className?: string;
}

function HeadingAnimated({
  comp: Component = motion.h1,
  className = "",
  text = "",
  primaryText = "",
  delay = 0.01,
  exitDelay = 0.5,
  ...props
}: Props) {
  const findPrimaryText = (w: string) => text.split(",").find(txt => txt === w);

  const clsName = clsx("flex h-auto relative", className);
  const variants = headingAnimatedVariants(delay, exitDelay);

  const content = text.split(" ").map((word, idx) => {
    const isPrimary = findPrimaryText(word);
    const ky = idx;
    const itemClassName = clsx("mr-2", {
      "text-primary": isPrimary,
    });
    return (
      <motion.span
        className={itemClassName}
        variants={headingChildVariants}
        key={ky}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <Component
      className={clsName}
      variants={variants}
      initial="closed"
      animate="open"
      exit="exit"
      {...props}
    >
      {content}
    </Component>
  );
}

export default HeadingAnimated;
