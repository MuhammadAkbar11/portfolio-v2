import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full flex justify-between flex-row flex-wrap items-center text-primary md:px-0 h-[85px] top-0 left-0 right-0 box-border border-b-[1px] border-slate/30 bg-secondary z-50 ">
      {/* Logo */}
      <nav className="px-6 md:px-14 h-full flex justify-start items-center w-max  text-primary  ">
        <Link href="/">
          <img src="/images/logo.png" className=" h-[50px] my-0" alt="Logo" />
        </Link>
      </nav>
      <nav className=" hidden px-6 mx-auto md:px-4 h-full md:flex items-center w-[50%] md:w-[45%] md:justify-center text-primary ">
        <ul className="  flex h-full items-center gap-10 ">
          <li className=" font-mono text-slate italic hover:text-light ">
            <Link href={"/"}>{`.About`}</Link>
          </li>
          <li className=" font-mono text-slate italic hover:text-light ">
            <Link href={"/"}>{`.Work `}</Link>
          </li>
        </ul>
      </nav>
      <nav className=" relative px-6 sm:px-8 md:px-14 h-full flex justify-end items-center w-max border-x-[1px] border-light/25 hover:cursor-pointer ">
        <Link
          href="/contact"
          className="hidden md:flex text-base font-mono text-slate italic hover:text-primary"
        >
          {`.GetInTouch`}
        </Link>
        <a
          href="#/"
          className=" text-center md:hidden text-base font-mono text-slate italic hover:text-primary"
        >
          .Menu
        </a>
      </nav>
    </header>
  );
};

export default Header;
