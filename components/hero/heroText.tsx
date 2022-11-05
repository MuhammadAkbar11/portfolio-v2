// import HeadingAnimated from "@components/headingAnimated";

import HeadingAnimated from "@components/headingAnimated";
import { motion } from "framer-motion";
import React from "react";
import { heroTextTitleVariants, heroTextVariants } from "./hero.motion";

type Props = {};

function HeroText({}: Props) {
  const variants = heroTextVariants(0.1);
  const variants2 = heroTextVariants(0.3);
  const titleVariants = heroTextTitleVariants;
  return (
    <div className="relative flex flex-wrap pt-20 pb-14 px-6 md:px-14 border-r-[1px] border-slate/25 z-[5]">
      <motion.h1
        variants={variants}
        initial="closed"
        animate="open"
        className="text-light flex flex-col uppercase font-heading text-[8vw] leading-[7.7vw] overflow-hidden "
      >
        <motion.span variants={titleVariants}>
          Muha<span className=" text-primary ">mm</span>ad
        </motion.span>
      </motion.h1>
      <motion.h1
        variants={variants2}
        initial="closed"
        animate="open"
        className="text-light flex flex-col uppercase font-heading text-[8vw] leading-[7.7vw] overflow-hidden mb-3"
      >
        <motion.span
          variants={titleVariants}
          className=" text-light/80 scale-95"
        >
          Akbar<span className=" text-primary ">.</span> L
        </motion.span>
      </motion.h1>
      <HeadingAnimated
        text="I build things for the web."
        delay={0.1}
        className="text-slate/70  font-heading text-[4vw] leading-[4vw] md:text-[2vw] md:leading-[3vw] uppercase overflow-hidden flex flex-wrap  "
      />
    </div>
  );
}

export default HeroText;
