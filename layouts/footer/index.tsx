import { useRouter } from "next/router";
import React from "react";
import FooterContact from "./footerContact";
import FooterEnd from "./footerEnd";

type Props = {};

function Footer({}: Props) {
  const { pathname } = useRouter();

  return (
    <footer>
      {pathname !== "/contact" ? <FooterContact /> : null}
      <FooterEnd />
    </footer>
  );
}

export default Footer;
