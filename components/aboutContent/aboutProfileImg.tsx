import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import {
  aboutContentImgBoxVariants,
  aboutContentImgVariants,
} from "./aboutContent.motion";

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
        <motion.img
          variants={aboutContentImgVariants}
          initial="closed"
          animate={isVisible ? "open" : ""}
          src="/images/profile.jpeg"
          alt="profile"
          className=" object-cover h-full w-full   "
        />
      </motion.div>
    </div>
  );
}

export default AboutProfileImg;
