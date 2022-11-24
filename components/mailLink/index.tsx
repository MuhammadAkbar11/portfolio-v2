import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "@assets/arrow-right.svg";
import { useCursorContext } from "@@context/CursorContext";
import {
  mailLinkArrowVariants,
  mailLinkBorderVariants,
  mailLinkVariants,
} from "./mailLink.motion";

type Props = {
  delay?: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function MailLink({ delay }: Props) {
  const cursorContext = useCursorContext();

  return (
    <motion.a
      href="mailto:muhammadakbarletlet11@gmail.com"
      target={"_blank"}
      variants={mailLinkVariants(delay)}
      initial="closed"
      animate="open"
      whileHover="hover"
      className=" relative group overflow-hidden text-base md:text-2xl flex items-center gap-2 text-primary font-body py-1 w-max "
      onMouseEnter={() => cursorContext.cursorEnter("navlink")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
    >
      <motion.span variants={mailLinkArrowVariants}>
        <ArrowRight className=" w-5 " />
      </motion.span>
      <span>muhammadakbarletlet11@gmail.com</span>
      <motion.hr
        variants={mailLinkBorderVariants}
        className=" absolute w-100 bottom-0 left-0 right-0 border-primary   h-[0.5px] flex "
      />
    </motion.a>
  );
}

export default MailLink;
