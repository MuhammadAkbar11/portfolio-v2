import { motion } from "framer-motion";
import React from "react";
import ArrowRight from "@assets/arrow-right.svg";
import Link from "next/link";
import {
  heroActionLinkBottomVariants,
  heroActionLinkTopVariants,
  heroActionBoxVariants,
} from "./hero.motion";

type Props = {
  text: string;
  href: string;
};

const ActionBox = motion(Link);

function HeroActionRight({ href, text }: Props) {
  return (
    <ActionBox
      href={href}
      variants={heroActionBoxVariants}
      whileHover="hover"
      initial="closed"
      animate="open"
      className=" overflow-hidden col-span-3 lg:col-span-1 flex flex-col  justify-center items-center px-6 md:pl-14 lg:pl-6 relative"
    >
      <div className="  overflow-hidden min-h-[32px] relative w-full lg:w-[80%] flex flex-col whitespace-nowrap text-2xl font-heading ">
        <motion.div
          variants={heroActionLinkTopVariants(-33)}
          className="absolute w-full flex justify-between lg:justify-center gap-3 "
        >
          <span>{text}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
        <motion.div
          variants={heroActionLinkBottomVariants(30)}
          className="absolute w-full flex justify-between gap-3 lg:justify-center "
        >
          <span className="">{text}</span>
          <span>
            <ArrowRight className=" w-10 mt-1" />
          </span>
        </motion.div>
      </div>
    </ActionBox>
  );
}

export default HeroActionRight;
