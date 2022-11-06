import React from "react";

type Props = {
  href: string;
  icon: JSX.Element;
};

function HeaderSocialItem({ href, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className=" h-8 w-8 p-2 flex justify-center items-center text-sm  box-border rounded-full hover:text-lightness-slate   "
    >
      {icon}
    </a>
  );
}

export default HeaderSocialItem;
