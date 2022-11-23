import Link from "next/link";
import React from "react";

type Props = {};

function FooterEnd({}: Props) {
  return (
    <section className="bg-secondary/90 py-6 border-t border-slate/25  px-6 md:px-20">
      <Link
        href={"/"}
        className=" font-body text-sm text-slate/30 hover:text-slate "
      >
        2022 © Muhammad Akbar L
      </Link>
    </section>
  );
}

export default FooterEnd;
