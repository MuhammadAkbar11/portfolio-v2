import { motion } from "framer-motion";
import React, { ReactEventHandler } from "react";
import ArrowRight from "@assets/arrow-right.svg";
import Link from "next/link";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useRouter } from "next/router";

type Props = {
  text: string;
  href: string;
};

function HeroActionRight({ href, text }: Props) {
  const cursorContext = useCursorContext();
  const router = useRouter();

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
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", "See")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <div className="  overflow-hidden min-h-[32px] relative w-full lg:w-[80%] flex flex-col whitespace-nowrap text-2xl font-heading ">
        <motion.div
          variants={heroActionLinkTopVariants(-33)}
          className="absolute w-full flex justify-between md:justify-start lg:justify-center gap-3 "
        >
          <span>{text}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
        <motion.div
          variants={heroActionLinkBottomVariants(30)}
          className="absolute w-full flex justify-between gap-3 sm:gap-6 lg:gap-3 md:justify-start lg:justify-center "
        >
          <span className="">{text}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default HeroActionRight;
