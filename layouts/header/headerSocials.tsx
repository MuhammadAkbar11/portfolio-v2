import GithubIcon from "@components/icon/github";
import LinkedInIcon from "@components/icon/linkedIn";
import React from "react";
import HeaderLinkItem from "./headerLinkItem";
import HeaderSocialItem from "./headerSocialItem";

type Props = {};

function HeaderSocials({}: Props) {
  return (
    <ul className="flex mx-2 h-full py-2 items-center gap-4">
      <HeaderSocialItem
        href="https://github.com/MuhammadAkbar11"
        icon={<GithubIcon />}
      />
      <HeaderSocialItem
        href="https://www.linkedin.com/in/muhammadakbarletlet/"
        icon={<LinkedInIcon />}
      />
    </ul>
  );
}

export default HeaderSocials;
