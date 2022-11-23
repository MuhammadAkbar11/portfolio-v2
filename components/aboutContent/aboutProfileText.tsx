import React from "react";
import { motion } from "framer-motion";

import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { aboutContentTextVariants } from "./aboutContent.motion";

type Props = {};

function AboutProfileText({}: Props) {
  const refGreeting = React.useRef<HTMLParagraphElement | null>(null);
  const refParagraf = React.useRef<HTMLDivElement | null>(null);
  const entryGreeting = useIntersectionObserver(refGreeting, {
    freezeOnceVisible: true,
    rootMargin: "-50px",
  });

  const entryParagraf = useIntersectionObserver(refParagraf, {
    rootMargin: "-20px",
    freezeOnceVisible: true,
  });
  const isVisibleGreeting = !!entryGreeting?.isIntersecting;
  const isVisibleParagraph = !!entryParagraf?.isIntersecting;

  return (
    <div className="order-1 lg:order-2 flex-1 w-full lg:w-[80%] lg:px-5  flex flex-col lg:pt-8  ">
      <div className="md:pb-10 mb-10 flex-1 border-0">
        <motion.p
          ref={refGreeting}
          variants={aboutContentTextVariants(0.3)}
          initial="closed"
          animate={isVisibleGreeting ? "open" : ""}
          className=" text-xl font-body text-light leading-8 mb-3 "
        >
          Hello there!, my name is Muhammad Akbar. L
        </motion.p>
        <div ref={refParagraf}>
          <motion.p
            variants={aboutContentTextVariants(0.7)}
            initial="closed"
            animate={isVisibleParagraph ? "open" : ""}
            className=" text-xl font-body text-light leading-8 mb-5 "
          >
            I’m a fresh graduate Web Developer based in Indonesian, Bekasi.
            Someone who enjoys creating and designing beautiful websites and
            specializes in creating animations, UI effects, and interactive
            layouts
          </motion.p>
          <motion.p
            variants={aboutContentTextVariants(0.8)}
            initial="closed"
            animate={isVisibleParagraph ? "open" : ""}
            className=" text-base font-body text-slate leading-6 mb-6 "
          >
            I've always had an interest for technology and computers, but I
            eventually discovered my passion in web development.
          </motion.p>
          <motion.p
            variants={aboutContentTextVariants(0.95)}
            initial="closed"
            animate={isVisibleParagraph ? "open" : ""}
            className=" text-base font-body text-slate leading-6 "
          >
            My primary focus is Front-End Development using JavaScript
            technologies such as react.js & next.js
          </motion.p>
        </div>
      </div>
      {/* <div className=" hidden lg:flex flex-col justify-center  h-full items-start gap-5 pr-4"></div> */}
    </div>
  );
}

export default AboutProfileText;
