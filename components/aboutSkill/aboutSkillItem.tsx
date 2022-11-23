import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useMediaQuery from "@hooks/useMediaQuery";
import { motion } from "framer-motion";
import React from "react";
import {
  aboutSkillHR2Variants,
  aboutSkillHRVariants,
  aboutSkillItemLIVariants,
  aboutSkillItemMobileVariants,
  aboutSkillItemVariants,
} from "./aboutSkill.motion";

type Props = {
  name: string;
  order: number;
};

function AboutSkillItem({ name, order }: Props) {
  const [transformOriginIn, setTransformOriginIn] =
    React.useState("-100% -100%");
  const [borderDelay, setBorderDelay] = React.useState(0.6);
  const [isHovered, setHovered] = React.useState(false);
  const ref = React.useRef<HTMLLIElement | null>(null);

  const mdScreen = useMediaQuery("(min-width: 768px)");
  const entryHeading = useIntersectionObserver(ref, {
    rootMargin: "-50px",
    freezeOnceVisible: true,
  });

  const isVisible = !!entryHeading?.isIntersecting;
  const calculateDelay = order % 2 !== 0 ? 0.1 : 0.3;
  const delay = mdScreen ? calculateDelay : 0.1;

  React.useEffect(() => {
    if (!isVisible) {
      setTransformOriginIn("-100% -100%");
      setBorderDelay(delay);
    }
  }, [isVisible, delay]);

  return (
    <motion.li
      ref={ref}
      variants={aboutSkillItemLIVariants}
      initial="closed"
      animate={isVisible ? "open" : ""}
      whileHover="hover"
      onMouseEnter={() => {
        setHovered(true);
        setTransformOriginIn("100% 100%");
        setBorderDelay(0.01);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`overflow-hidden text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl group relative flex items-end py-0 md:py-2   `}
    >
      <div
        className={`overflow-hidden opacity-50 pb-2 xl:py-2 pr-2 group-hover:opacity-100 transition-all duration-[0.6s] ${
          mdScreen ? "text-secondary" : "text-slate"
        } group-hover:text-primary`}
      >
        <motion.span
          variants={aboutSkillItemVariants(delay)}
          className={`hidden md:flex font-heading uppercase font-extrabold   ${
            !isHovered ? "text-shadow-slate" : ""
          }`}
        >
          {name}
        </motion.span>
        {/* mobile */}
        <motion.span
          variants={aboutSkillItemMobileVariants(delay)}
          className=" flex md:hidden font-heading uppercase font-extrabold transition-all duration-[0.6s]"
        >
          {name}
        </motion.span>
      </div>
      <motion.hr
        style={{
          transformOrigin: transformOriginIn,
        }}
        variants={aboutSkillHRVariants(borderDelay)}
        className=" absolute h-[1px] left-0 bottom-0 w-full bg-slate/25 border-slate/25 "
      ></motion.hr>
      <motion.hr
        variants={aboutSkillHR2Variants}
        style={{ transformOrigin: "-100% -100%" }}
        className=" absolute h-[1px] left-0 bottom-0 w-full border-primary bg-primary "
      ></motion.hr>
    </motion.li>
  );
}

export default AboutSkillItem;
