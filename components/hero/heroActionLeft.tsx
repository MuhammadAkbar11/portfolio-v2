import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";

type Props = {
  text?: string;
  href: string;
};

const ActionBox = motion(Link);

function HeroActionLeft({ href }: Props) {
  return (
    <ActionBox
      href={href}
      variants={heroActionBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      className=" overflow-y-hidden  flex items-center  md:justify-start relative col-span-3 lg:col-span-1 justify-start px-6 md:pl-14 sm:py-14 md:py-8"
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
          Javascript FullStack
        </motion.span>
      </div>
    </ActionBox>
  );
}

export default HeroActionLeft;
