import { useCursorContext } from "@@context/CursorContext";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

function HeaderLinkItem({ href, text }: Props) {
  const cursorContext = useCursorContext();

  return (
    <li
      className=" font-mono text-slate italic hover:text-light cursor-pointer  "
      onMouseEnter={() => cursorContext.cursorEnter("navlink")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
    >
      <Link href={href} className="py-2 px-6">{`.${text}`}</Link>
    </li>
  );
}

export default HeaderLinkItem;
