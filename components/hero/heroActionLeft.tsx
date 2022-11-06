import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";
import { useCursorContext } from "@@context/CursorContext";
import { useRouter } from "next/router";

type Props = {
  text?: string;
  href: string;
};

function HeroActionLeft({ href }: Props) {
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
      className="overflow-y-hidden flex-1 flex items-center md:justify-start relative justify-start px-6 sm:pl-8 py-8 sm:py-16 md:py-8 "
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", "Contact")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <div className=" uppercase flex flex-col overflow-y-hidden relative w-full font-heading h-[63px] text-3xl leading-7 sm:text-4xl sm:leading-8 sm:h-[70px] md:h-[65px] lg:text-2xl lg:leading-[25px] lg:h-[50px] xl:text-3xl xl:leading-7 xl:min-h-[60px]  ">
        <motion.span
          variants={heroActionLinkTopVariants(-70)}
          className=" flex absolute   "
        >
          Web <br />
          Developer
        </motion.span>
        <motion.span
          variants={heroActionLinkBottomVariants(70)}
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
