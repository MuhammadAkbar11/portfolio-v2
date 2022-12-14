import React from "react";
import DecorationSmall from "./decorationSmall";
import DecorationLarge from "./decorationLarge";
import DecorationXL from "./decorationXL";
// import clsx from "classnames";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  delay: number;
  fixed?: boolean;
  className?: string;
};

function Decoration({ delay = 0.1, size, className, fixed = false }: Props) {
  if (size === "sm") {
    return (
      <DecorationSmall delay={delay} className={className} fixed={fixed} />
    );
  }

  if (size === "xl") {
    return <DecorationXL delay={delay} className={className} fixed={fixed} />;
  }

  return <DecorationLarge delay={delay} className={className} fixed={fixed} />;
}

Decoration.defaultProps = {
  size: "xl",
};

export default Decoration;
