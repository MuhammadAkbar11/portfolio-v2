import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function WorkProjectPreview({}: Props) {
  return (
    <div className="relative my-auto w-full h-full flex flex-col flex-wrap overflow-hidden">
      {/* pt-20 pb-14 px-6 md:px-20  */}
      <Image
        src="/images/project/project01.png"
        alt="project preview"
        fill
        className="object-cover h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default WorkProjectPreview;
