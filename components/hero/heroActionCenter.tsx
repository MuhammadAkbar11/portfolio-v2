import { useCursorContext } from "@@context/CursorContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
};

function HeroActionCenter({ href }: Props) {
  const cursorContext = useCursorContext();
  const router = useRouter();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={"/about"}
      className="flex-1  border-y-[1px] lg:border-y-0  md:border-x-[1px] border-slate/25 px-6 md:px-8 py-8 sm:py-16 md:py-8  flex items-center lg:justify-center flex-wrap "
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", "About")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <p className=" text-slate font-body text-md sm:text-lg lg:text-sm ">
        Hi There, My name is Muhammad Akbar let-let, I’m a Web Developer from
        Bekasi, Indonesia. A person who enjoys building and designing beautiful
        websites
      </p>
    </a>
  );
}

export default HeroActionCenter;
