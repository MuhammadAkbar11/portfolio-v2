import { motion } from "framer-motion";
import React from "react";
import ArrowRight from "@assets/arrow-right2.svg";
import {
  workProjectActionLinkBottomVariants,
  workProjectActionLinkTopVariants,
  workProjectActionBoxVariants,
} from "./workProject.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useTransition } from "@@context/TransitionContext";
import useMediaQuery from "@hooks/useMediaQuery";

type Props = {
  cursorText: string;
  name: string;
  href: string;
};

function WorkProjectActionRight({ href, name, cursorText }: Props) {
  const cursorContext = useCursorContext();
  const { navigateTo } = useTransition();

  const mdScreen = useMediaQuery("(min-width: 768px)");

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <motion.a
      href={href}
      variants={workProjectActionBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      className="flex-1 overflow-hidden flex flex-col  justify-center items-center px-6 sm:px-8 py-8 sm:py-16 md:py-8 relative  hover:bg-light-secondary/10 transition-all duration-100 ease-in-out"
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", cursorText)}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <div className="overflow-hidden min-h-[32px] md:min-h-[42px]  relative w-full lg:w-[80%] flex flex-col whitespace-nowrap md:text-4xl md:leading-10  text-2xl lg:text-xl lg:min-h-[32px] font-heading uppercase xl:text-2xl ">
        <motion.div
          variants={workProjectActionLinkTopVariants(mdScreen ? -45 : -33)}
          className="absolute w-full flex justify-between lg:justify-center gap-3 "
        >
          <span>{name}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
        <motion.div
          variants={workProjectActionLinkBottomVariants(mdScreen ? 45 : 33)}
          className="absolute w-full flex justify-between gap-3 sm:gap-6 lg:gap-3 lg:justify-center "
        >
          <span className="">{name}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default WorkProjectActionRight;
