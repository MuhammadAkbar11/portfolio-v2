import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import HeadingAnimated from "@components/headingAnimated";
import {
  aboutFooterAnchorDotVariants,
  aboutFooterAnchorIVariants,
  aboutFooterArrowVariant,
  aboutFooterHR2Variants,
  aboutFooterHRVariants,
} from "./aboutFooter.motion";
import ArrowRight from "@assets/arrow-right2.svg";
import { useRouter } from "next/router";
import { useCursorContext } from "@@context/CursorContext";

type Props = {};

function AboutFooter({}: Props) {
  const [transformOriginIn, setTransformOriginIn] =
    React.useState("-100% -100%");
  const [borderDelay, setBorderDelay] = React.useState(0.6);
  const [iconDelay, setIconDelay] = React.useState(0.9);

  const ref = React.useRef<HTMLAnchorElement | null>(null);
  const router = useRouter();

  const cursorContext = useCursorContext();

  const entryHeading = useIntersectionObserver(ref, {
    rootMargin: "-50px",
    freezeOnceVisible: true,
  });

  const isVisible = !!entryHeading?.isIntersecting;

  return (
    <section className="w-100 py-20 min-h-[20vh] lg:min-h-[60vh] overflow-hidden bg-secondary/90  px-6 md:px-20 flex flex-col justify-center ">
      <div className="flex h-full justify-start items-center ">
        <motion.a
          variants={aboutFooterAnchorIVariants}
          initial="closed"
          animate="open"
          whileHover="hover"
          ref={ref}
          href={"/contact"}
          className="uppercase flex flex-col w-max no-underline relative overflow-hidden "
          onMouseEnter={() => {
            setTransformOriginIn("100% 100%");
            setBorderDelay(0.1);
            setIconDelay(0.1);
            cursorContext.cursorEnter("link");
          }}
          onMouseLeave={() => {
            cursorContext.cursorLeave("default");
          }}
          onClick={e => {
            e.preventDefault();
            router.push("/contact");
          }}
        >
          {isVisible ? (
            <>
              <div className="flex ">
                <HeadingAnimated
                  className="font-heading overflow-hidden text-[6vw] leading-[6vw] md:text-[5vw] md:leading-[5vw] lg:text-[4.6vw] lg:leading-[4.6vw] text-light"
                  text="Let's Work"
                  primaryText="Work"
                />
              </div>
              <div className=" text-light overflow-hidden flex w-max font-heading text-[6vw]  leading-[6vw] md:text-[5vw] md:leading-[5vw] lg:text-[4.6vw] lg:leading-[4.6vw] relative">
                <HeadingAnimated className=" " delay={0.4} text="Together" />
                <div className="relative w-20 ">
                  <motion.span
                    className=" absolute left-0 bottom-0 "
                    variants={aboutFooterAnchorDotVariants(iconDelay)}
                  >
                    .
                  </motion.span>
                  <motion.span
                    className="absolute left-0 bottom-0 "
                    variants={aboutFooterArrowVariant}
                  >
                    <ArrowRight className=" w-8  sm:w-14 z-[5] lg:w-[70px] mt-1 text-primary " />
                  </motion.span>
                </div>
              </div>
              <div className="pt-5">
                <motion.hr
                  style={{
                    transformOrigin: transformOriginIn,
                  }}
                  variants={aboutFooterHRVariants(borderDelay)}
                  className=" h-[0.5px] absolute z-10 left-0 bottom-0 w-full bg-wire-primary/25 border-wire-primary/25 mt-2 "
                />
                <motion.hr
                  style={{ transformOrigin: "-100% -100%" }}
                  variants={aboutFooterHR2Variants}
                  className=" h-[0.5px] absolute z-10 left-0 bottom-0 w-full bg-slate border-slate mt-2 "
                />
              </div>
            </>
          ) : null}
        </motion.a>
      </div>
    </section>
  );
}

export default AboutFooter;
