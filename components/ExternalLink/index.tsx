import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import {
  arrowVariants,
  linkBoxVariants,
  linkTextBottomVariants,
  linkTextTopVariants,
} from "./externalLink.motion";
import ArrowRight from "@assets/arrow-right.svg";
import { useCursorContext } from "@@context/CursorContext";

type Props = {
  text: string;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

function ExternalLink({ text, href }: Props) {
  const cursorContext = useCursorContext();

  return (
    <motion.a
      href={href}
      variants={linkBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      target={"_blank"}
      className="w-full lg:w-[80%] overflow-hidden flex flex-col justify-start items-center group text-light-slate/60 uppercase font-black hover:text-light whitespace-nowrap font-heading-2 text-3xl md:text-5xl italic hover:tracking-wider transition-all duration-300 ease-out"
      // onClick={onClickHandler}
      onMouseEnter={() => cursorContext.cursorEnter("link")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
    >
      <div className="overflow-hidden min-h-[35px] md:min-h-[48px] relative w-full flex flex-col items-start ">
        <motion.div
          variants={linkTextTopVariants(-53)}
          className="absolute w-full flex items-center justify-start gap-3 "
        >
          <span>{text}</span>
          <span>{/* <ArrowRight className=" w-10 mt-1" /> */}.</span>
        </motion.div>
        <motion.div
          variants={linkTextBottomVariants(50)}
          className="absolute w-full flex items-center gap-3 sm:gap-6 lg:gap-3 justify-start "
        >
          <span>{text}</span>
          <motion.span variants={arrowVariants} className="">
            <ArrowRight className=" w-12 mt-1" />
          </motion.span>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default ExternalLink;
