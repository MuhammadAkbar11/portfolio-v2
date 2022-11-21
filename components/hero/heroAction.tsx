import React from "react";
import { motion } from "framer-motion";
import HeroActionLeft from "./heroActionLeft";
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
      <HeroActionLeft href="/about" name="About" />
      <HeroActionCenter href="/contact" name="Contact" />
      <HeroActionRight name="My Works" href="/work" cursorText="See" />
    </motion.div>
  );
}

export default HeroAction;
