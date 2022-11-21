import React from "react";
import { useCursorContext } from "@@context/CursorContext";
import Link from "next/link";
import clsx from "classnames";

type Props = {
  href: string;
  text: string;
  active?: boolean;
};

function HeaderLinkItem({ href, text, active }: Props) {
  const cursorContext = useCursorContext();

  const classNm = clsx("font-mono  italic  cursor-pointer", {
    "text-slate hover:text-light": !active,
    "text-primary": active,
  });

  return (
    <li
      className={classNm}
      onMouseEnter={() => cursorContext.cursorEnter("navlink")}
      onMouseLeave={() => cursorContext.cursorLeave("default")}
    >
      <Link href={href} className="py-2 px-6">{`_${text}`}</Link>
    </li>
  );
}

export default HeaderLinkItem;
