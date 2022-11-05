import Link from "next/link";
import React from "react";
import HeroActionLeft from "./heroActionLeft";
import { motion } from "framer-motion";
import HeroActionRight from "./heroActionRight";
import { heroActionVariants } from "./hero.motion";

type Props = {};

function HeroAction({}: Props) {
  return (
    <motion.div
      variants={heroActionVariants}
      initial="closed"
      animate="open"
      className=" grid grid-cols-3 grid-rows-3 lg:grid-rows-1 text-light border border-slate/25 flex-1  bg-secondary z-[5] "
    >
      <HeroActionLeft href="/contact" />
      <Link
        href={"/about"}
        className="col-span-3 lg:col-span-1 border-y-[1px] lg:border-y-0  md:border-x-[1px] border-slate/25 px-6 py-8 md:py-4 md:px-14 lg:px-10 flex items-center lg:justify-center flex-wrap "
      >
        <p className=" text-slate font-body text-md sm:text-lg lg:text-base ">
          Hi There, My name is Muhammad Akbar let-let, I’m a Web Developer from
          Bekasi, Indonesia
        </p>
      </Link>

      <HeroActionRight text="My Works" href="/work" />
    </motion.div>
  );
}

export default HeroAction;
