import React from "react";

import DecorationSmall from "./decorationSmall";
import DecorationLarge from "./decorationLarge";
// import clsx from "classnames";

type Props = {
  size?: "sm" | "md" | "lg";
  delay: number;
  className?: string;
};

function Decoration({ delay = 0.1, size, className }: Props) {
  if (size === "sm") {
    return <DecorationSmall delay={delay} className={className} />;
  }

  return <DecorationLarge delay={delay} className={className} />;
}

Decoration.defaultProps = {
  size: "xl",
};

export default Decoration;
