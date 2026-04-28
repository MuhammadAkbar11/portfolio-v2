import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import {
  aboutContentImgBoxVariants,
  aboutContentImgVariants,
} from "./aboutContent.motion";
import Image from "next/image";

type Props = {};

function AboutProfileImg({}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin: "-100px",
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className="order-2 flex justify-center lg:order-1 flex-1 w-full z-[5] overflow-hidden "
    >
      <motion.div
        variants={aboutContentImgBoxVariants}
        initial="closed"
        animate={isVisible ? "open" : ""}
        className=" w-full sm:w-[70%] md:w-[50%] lg:w-[80%] flex mx-auto border p-3 md:py-5 md:px-5 h-[500px] "
      >
        <motion.div
          variants={aboutContentImgVariants}
          initial="closed"
          animate={isVisible ? "open" : ""}
          className="relative h-full w-full"
        >
          <Image
            src="/images/profile-2.jpg"
            alt="profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutProfileImg;
