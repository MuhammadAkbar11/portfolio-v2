import { motion } from "framer-motion";
import React from "react";
import ArrowRight from "@assets/arrow-right2.svg";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useRouter } from "next/router";
import useMediaQuery from "@hooks/useMediaQuery";

type Props = {
  cursorText: string;
  name: string;
  href: string;
};

function HeroActionRight({ href, name, cursorText }: Props) {
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
      variants={heroActionBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      className="flex-1 overflow-hidden flex flex-col  justify-center items-center px-6 sm:px-8 py-8 sm:py-16 md:py-8 relative"
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", cursorText)}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <div className="overflow-hidden min-h-[32px] md:min-h-[42px]  relative w-full lg:w-[80%] flex flex-col whitespace-nowrap md:text-4xl md:leading-10  text-2xl lg:text-xl lg:min-h-[32px] font-heading uppercase xl:text-2xl ">
        <motion.div
          variants={heroActionLinkTopVariants(mdScreen ? -45 : -33)}
          className="absolute w-full flex justify-between lg:justify-center gap-3 "
        >
          <span>{name}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
        <motion.div
          variants={heroActionLinkBottomVariants(mdScreen ? 45 : 33)}
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

export default HeroActionRight;
