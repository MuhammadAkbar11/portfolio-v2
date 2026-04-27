import { motion } from "framer-motion";
import React from "react";
import {
  workProjectActionLinkBottomVariants,
  workProjectActionLinkTopVariants,
  workProjectActionBoxVariants,
} from "./workProject.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useRouter } from "next/router";
import useMediaQuery from "@hooks/useMediaQuery";

type Props = {
  name: string;
  href: string;
};

function WorkProjectAction({ href, name }: Props) {
  const cursorContext = useCursorContext();
  const router = useRouter();

  const mdScreen = useMediaQuery("(min-width: 768px)");

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <motion.a
      href={href}
      variants={workProjectActionBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      className="overflow-y-hidden flex-1 flex items-center md:justify-start relative justify-start px-6 sm:pl-8 py-8 sm:py-16 md:py-8  hover:bg-light-secondary/10 transition-all duration-100 ease-in-out "
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", name)}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      {/* <div className=" uppercase flex flex-col overflow-y-hidden relative w-full font-heading h-[63px] text-3xl leading-7 sm:text-4xl sm:leading-8 sm:h-[70px] md:text-5xl md:leading-[50px] md:h-[96px] lg:text-2xl lg:leading-[25px] lg:h-[52px]  xl:text-3xl xl:leading-7 xl:min-h-[60px]  "> */}
      <div className="uppercase flex lg:hidden flex-col overflow-y-hidden relative w-full font-heading h-[90%] text-3xl leading-7 ">
        <span>
          Website <br />
          E-commerce
        </span>
      </div>
      <div className="uppercase hidden lg:flex flex-col overflow-y-hidden relative w-full font-heading lg:h-[125px] lg:text-[55px] lg:leading-[50px] ">
        <motion.span
          variants={workProjectActionLinkTopVariants(-125)}
          className=" flex absolute   "
        >
          Website <br />
          E-commerce
        </motion.span>
        <motion.span
          variants={workProjectActionLinkBottomVariants(130)}
          className="flex absolute   "
        >
          Show <br />
          Project
        </motion.span>
      </div>
    </motion.a>
  );
}

export default WorkProjectAction;
