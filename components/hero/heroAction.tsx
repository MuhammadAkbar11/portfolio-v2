import React from "react";
import HeroActionLeft from "./heroActionLeft";
import { motion } from "framer-motion";
import HeroActionRight from "./heroActionRight";
import { heroActionVariants } from "./hero.motion";
import HeroActionCenter from "./heroActionCenter";

type Props = {};

function HeroAction({}: Props) {
  return (
    <motion.div
      variants={heroActionVariants}
      initial="closed"
      animate="open"
      className="flex flex-col min-h-[200px] lg:max-h-[200px] xl:max-h-[280px] mt-auto lg:flex-row text-light border border-slate/25 flex-1 bg-secondary z-[5] "
    >
      <HeroActionLeft href="/contact" />
      <HeroActionCenter href="/about" />
      <HeroActionRight text="My Works" href="/work" />
    </motion.div>
  );
}

export default HeroAction;
