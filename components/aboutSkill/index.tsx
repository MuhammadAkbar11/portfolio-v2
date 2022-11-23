import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@utils/constants.utils";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import HeadingAnimated from "@components/headingAnimated";
import AboutListSkill from "./aboutListSkill";
import ArrowRight from "@assets/arrow-right2.svg";
import { aboutSkillHeadingArrowVariants } from "./aboutSkill.motion";
import useMediaQuery from "@hooks/useMediaQuery";

type Props = {};

function AboutSkill({}: Props) {
  const refHeading = React.useRef<HTMLDivElement | null>(null);

  const entryHeading = useIntersectionObserver(refHeading, {
    rootMargin: "-50px",
    freezeOnceVisible: true,
  });
  const mdScreen = useMediaQuery("(min-width: 768px)");

  const isVisibleHeading = !!entryHeading?.isIntersecting;

  const arrowPosRotate = mdScreen ? 45 : 90;

  return (
    <section className="w-100 py-20 bg-secondary/90  px-6 md:px-20 ">
      <div className=" h-max w-full flex flex-col ">
        <div
          ref={refHeading}
          className="flex flex-wrap flex-col items-center justify-center md:justify-start md:items-start w-full lg:w-2/4  relative mb-8 md:mb-16 "
        >
          {isVisibleHeading ? (
            <>
              <HeadingAnimated
                delay={0.01}
                text="Technologies I’ve Been"
                className="text-lg  md:text-3xl text-light  uppercase font-heading overflow-hidden"
              />
              <div className="flex ">
                <HeadingAnimated
                  delay={0.04}
                  primaryText="Working"
                  text="Working with"
                  className="text-lg  md:text-3xl text-light  uppercase font-heading overflow-hidden"
                />

                <motion.span
                  variants={aboutSkillHeadingArrowVariants(0.8, arrowPosRotate)}
                  initial="closed"
                  animate="open"
                >
                  <ArrowRight className="w-8 md:w-10 mt-1 text-primary " />
                </motion.span>
              </div>
            </>
          ) : null}
        </div>
        <div className="">
          <AboutListSkill skills={SKILLS} />
        </div>
      </div>
    </section>
  );
}

export default AboutSkill;
