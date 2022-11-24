import React from "react";
import Link from "next/link";
import clsx from "classnames";
import { useCursorContext } from "@@context/CursorContext";
import { motion, useAnimation, Variants } from "framer-motion";
import { headerVariants } from "./header.motion";
import HeaderLinkItem from "./headerLinkItem";
import HeaderSocials from "./headerSocials";
import { NAV_LINKS } from "@utils/constants.utils";
import { useRouter } from "next/router";
import useScrollUp from "@hooks/useScrollUp";

const Header = () => {
  const { isScrolling, isYTop } = useScrollUp();
  const cursorContext = useCursorContext();

  const variants: Variants = headerVariants(0.5);
  const router = useRouter();

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start("open");
    if (isScrolling) {
      if (isYTop) {
        controls.start("openTop");
      } else {
        controls.start("openScroll");
      }
    }

    return () => {
      controls.start("closed");
    };
  }, [variants, isScrolling, isYTop]);
  return (
    <motion.header
      variants={variants}
      initial="closed"
      animate={controls}
      className="fixed w-full flex justify-between flex-row flex-wrap items-center text-primary px-0 md:px-0  top-0 left-0 right-0 box-border border-b-[1px] border-slate/30 bg-secondary/95 z-50 backdrop-blur-sm  "
    >
      {/* Logo */}
      <nav className="px-6 sm:px-8 h-full flex justify-start items-center w-max  text-light">
        <Link
          href="/"
          onMouseEnter={() => cursorContext.cursorEnter("navlink")}
          onMouseLeave={() => cursorContext.cursorLeave("default")}
        >
          <img src="/images/logo.png" className=" h-[50px] my-0" alt="Logo" />
        </Link>
      </nav>
      <nav className=" hidden lg:flex px-6 md:px-20 mx-auto h-full items-center flex-1 md:justify-end text-primary ">
        <ul className="  flex h-full py-2 items-center ">
          {NAV_LINKS.map(nav => {
            return (
              <React.Fragment key={nav.key}>
                <HeaderLinkItem
                  href={nav.url}
                  text={nav.name}
                  active={router.pathname === nav.url}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
      <nav
        className=" hidden ml-auto px-8 h-full lg:flex items-center w-max md:justify-center text-slate "
        onMouseEnter={() => cursorContext.cursorEnter("navlinkIcon")}
        onMouseLeave={() => cursorContext.cursorLeave("default")}
      >
        <HeaderSocials />
      </nav>
      <nav className=" relative px-6 sm:px-8 h-full flex justify-end items-center w-max border-x-[1px] border-light/25 hover:cursor-pointer box-border ">
        <Link
          href="/contact"
          className={clsx(
            "hidden md:flex text-base font-mono py-2 px-5 italic ",
            {
              "text-slate hover:text-light/80": router.pathname !== "/contact",
              "text-primary": router.pathname === "/contact",
            }
          )}
          onMouseEnter={() => cursorContext.cursorEnter("navlink")}
          onMouseLeave={() => cursorContext.cursorLeave("default")}
        >
          {`_GetInTouch`}
        </Link>
        <a
          href="#/"
          className=" text-center md:hidden text-base font-mono text-slate italic hover:text-light"
        >
          _Menu
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
