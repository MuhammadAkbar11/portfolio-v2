import { AnimationProps, motion } from "framer-motion";
import clsx from "classnames";
import React, { HtmlHTMLAttributes } from "react";
import {
  headingAnimatedVariants,
  headingChildVariants,
} from "./headingAnimated.motion";

type OwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  text: string;
  primaryText?: string;
  delay?: number;
  exitDelay?: number;
  className?: string;
};

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps>;

const __DEFAULT_ELEMENT = motion.h1;

function HeadingAnimated<
  E extends React.ElementType = typeof __DEFAULT_ELEMENT
>({
  as,
  className = "",
  text = "",
  primaryText = "",
  delay = 0.01,
  exitDelay = 0.5,
  ...props
}: Props<E>) {
  const Component = as || __DEFAULT_ELEMENT;
  const findPrimaryText = (w: string) =>
    primaryText.split(",").find(txt => txt === w);

  const clsName = clsx("flex h-auto relative", className);
  const variants = headingAnimatedVariants(delay, exitDelay);

  const content = text.split(" ").map((word, idx) => {
    const isPrimary = findPrimaryText(word.trim());
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
