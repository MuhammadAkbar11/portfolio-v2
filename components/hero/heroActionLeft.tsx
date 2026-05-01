import { motion } from "framer-motion";
import React from "react";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useTransition } from "@@context/TransitionContext";
import useMediaQuery from "@hooks/useMediaQuery";

type Props = {
  name: string;
  href: string;
};

function HeroActionLeft({ href, name }: Props) {
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
      variants={heroActionBoxVariants}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="closed"
      animate="open"
      className="overflow-y-hidden flex-1 flex items-center md:justify-start relative justify-start px-6 sm:pl-8 py-8 sm:py-16 md:py-8 hover:bg-light-secondary/10 transition-all duration-300 ease-out"
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", name)}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <div className=" uppercase flex flex-col overflow-y-hidden relative w-full font-heading h-[63px] text-3xl leading-7 sm:text-4xl sm:leading-8 sm:h-[70px] md:text-5xl md:leading-[50px] md:h-[96px] lg:text-2xl lg:leading-[25px] lg:h-[52px]  xl:text-3xl xl:leading-7 xl:min-h-[60px]  ">
        <motion.span
          variants={heroActionLinkTopVariants(mdScreen ? -105 : -70)}
          className=" flex absolute   "
        >
          Web <br />
          Developer
        </motion.span>
        <motion.span
          variants={heroActionLinkBottomVariants(mdScreen ? 120 : 70)}
          className="flex absolute   "
        >
          Javascript <br />
          FullStack
        </motion.span>
      </div>
    </motion.a>
  );
}

export default HeroActionLeft;
