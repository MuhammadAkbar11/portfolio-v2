import React from "react";
import { motion } from "framer-motion";
import { pageSubHeadVariant } from "./pageSubHeading.motion";
type Props = {
  text: string;
  delay: number;
};

function PageSubHeading({ text, delay }: Props) {
  return (
    <div className=" h-max w-max pr-2 overflow-hidden relative mb-1">
      <motion.p
        variants={pageSubHeadVariant(delay)}
        initial="closed"
        animate="open"
        className=" font-mono text-base  md:text-lg italic text-primary "
      >{`_${text}`}</motion.p>
    </div>
  );
}

export default PageSubHeading;
