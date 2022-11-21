import { useCursorContext } from "@@context/CursorContext";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { headerVariants } from "./header.motion";
import HeaderLinkItem from "./headerLinkItem";
import HeaderSocials from "./headerSocials";
import { NAV_LINKS } from "@utils/constants.utils";
import { useRouter } from "next/router";

const Header = () => {
  const cursorContext = useCursorContext();
  const variants: Variants = headerVariants(0.5);

  const router = useRouter();

  console.log(router);
  return (
    <motion.header
      variants={variants}
      initial="closed"
      animate="open"
      className="fixed w-full flex justify-between flex-row flex-wrap items-center text-primary px-0 md:px-0 h-[85px] top-0 left-0 right-0 box-border border-b-[1px] border-slate/30 bg-secondary z-50 "
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
          className="hidden md:flex text-base font-mono text-slate italic hover:text-light/80 py-2 px-5 "
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
