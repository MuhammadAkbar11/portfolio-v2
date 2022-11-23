import React from "react";
import FooterContact from "./footerContact";
import FooterEnd from "./footerEnd";

type Props = {};

function Footer({}: Props) {
  return (
    <footer>
      <FooterContact />
      <FooterEnd />
    </footer>
  );
}

export default Footer;
