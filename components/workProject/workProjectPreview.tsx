import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkProjectPreview({}: Props) {
  return (
    <div className="relative my-auto w-full h-full flex flex-col flex-wrap overflow-hidden">
      {/* pt-20 pb-14 px-6 md:px-20  */}
      <motion.img
        // variants={aboutContentImgVariants}
        // initial="closed"
        // animate={isVisible ? "open" : ""}
        src="/images/project/project01.png"
        alt="profile"
        className="object-cover  h-full"
      />
    </div>
  );
}

export default WorkProjectPreview;
