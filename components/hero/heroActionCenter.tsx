import { useCursorContext } from "@@context/CursorContext";
import { useTransition } from "@@context/TransitionContext";
import React from "react";

type Props = {
  href: string;
  name: string;
};

function HeroActionCenter({ href, name }: Props) {
  const cursorContext = useCursorContext();
  const { navigateTo } = useTransition();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <a
      href={href}
      className="flex-1 group border-y-[1px] lg:border-y-0  md:border-x-[1px] border-slate/25 px-6 md:px-8 py-8 sm:py-16 md:py-8  flex items-center lg:justify-center flex-wrap hover:bg-light-secondary/10 transition-all duration-100 ease-in-out "
      onMouseEnter={() => cursorContext.cursorEnter("heroAction", name)}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
      onClick={onClickHandler}
    >
      <p className=" transition-all duration-200 ease-in-out  group-hover:-translate-y-1 text-slate font-body text-md sm:text-lg lg:text-sm ">
        Hi There, My name is Muhammad Akbar let-let, I’m a fresh graduate Web
        developer from Bekasi, Indonesia. A person with a passion for creating
        and designing stunning websites
      </p>
    </a>
  );
}

export default HeroActionCenter;
