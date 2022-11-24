import { motion } from "framer-motion";
import React from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import HeadingAnimated from "@components/headingAnimated";
import {
  footerContactAnchorDotVariants,
  footerContactAnchorIVariants,
  footerContactArrowVariant,
  footerContactHR2Variants,
  footerContactHRVariants,
} from "./footer.motion";
import ArrowRight from "@assets/arrow-right2.svg";
import { useRouter } from "next/router";
import { useCursorContext } from "@@context/CursorContext";
import clsx from "classnames";

type Props = {};

function FooterContact({}: Props) {
  const [transformOriginIn, setTransformOriginIn] =
    React.useState("-100% -100%");
  const [borderDelay, setBorderDelay] = React.useState(0.6);
  const [iconDelay, setIconDelay] = React.useState(0.9);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const cursorContext = useCursorContext();

  const entryHeading = useIntersectionObserver(ref, {
    rootMargin: "-50px",
    freezeOnceVisible: true,
  });

  const isVisible = !!entryHeading?.isIntersecting;

  const classFontSize =
    "text-[6vw] leading-[6vw] md:text-[7vw] md:leading-[7vw] lg:text-[7.5vw] lg:leading-[7.5vw] xl:text-[7vw] xl:leading-[7vw] ";

  return (
    <section className="w-100 relative py-20 min-h-[20vh] lg:min-h-[80vh] overflow-hidden bg-secondary/90  px-6 md:px-20 flex flex-col justify-center ">
      <div className="flex h-full justify-start items-center " ref={ref}>
        <motion.a
          variants={footerContactAnchorIVariants}
          initial="closed"
          animate="open"
          whileHover="hover"
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
                  className={clsx(
                    "font-heading overflow-hidden text-light",
                    classFontSize
                  )}
                  text="Let's Work"
                  primaryText="Work"
                />
              </div>
              <div
                className={clsx(
                  "text-light overflow-hidden flex w-max font-heading relative",
                  classFontSize
                )}
              >
                <HeadingAnimated delay={0.4} text="Together" />
                <div className="relative w-8 sm:w-14 md:w-[90px] lg:w-[100px] ">
                  <motion.span
                    className=" absolute left-0 bottom-0 "
                    variants={footerContactAnchorDotVariants(iconDelay)}
                  >
                    .
                  </motion.span>
                  <motion.span
                    className="absolute left-0 bottom-0 "
                    variants={footerContactArrowVariant}
                  >
                    <ArrowRight className=" w-8  sm:w-14 z-[5] md:w-[90px] lg:w-[100px] mt-1 text-primary " />
                  </motion.span>
                </div>
              </div>
              <div className="pt-5">
                <motion.hr
                  style={{
                    transformOrigin: transformOriginIn,
                  }}
                  variants={footerContactHRVariants(borderDelay)}
                  className=" h-[0.5px] absolute z-10 left-0 bottom-0 w-full bg-wire-primary/25 border-wire-primary/25 mt-2 "
                />
                <motion.hr
                  style={{ transformOrigin: "-100% -100%" }}
                  variants={footerContactHR2Variants}
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

export default FooterContact;
