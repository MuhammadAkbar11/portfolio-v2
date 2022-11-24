import React from "react";
import { motion } from "framer-motion";
import clsx from "classnames";
import { socialsIconVariants } from "./socials.motion";
import { useCursorContext } from "@@context/CursorContext";

type Props = {
  href: string;
  className?: string;
  icon: React.ReactNode;
};

function SocialsIcon({ href, className, icon }: Props) {
  const cursorContext = useCursorContext();

  return (
    <motion.a
      href={href}
      variants={socialsIconVariants}
      className={clsx(className)}
      target="_blank"
      onMouseEnter={() => cursorContext.cursorEnter("socialIcon")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
    >
      {icon}
    </motion.a>
  );
}

export default SocialsIcon;
