import React from "react";
import AboutProfileImg from "./aboutProfileImg";
import AboutProfileText from "./aboutProfileText";

type Props = {};

function AboutContent({}: Props) {
  return (
    <section className=" bg-secondary h-max relative flex flex-col w-full justify-start flex-1 pt-5 md:pt-8 lg:pt-5 pb-14 px-6 md:px-20 lg:px-32 mb-1 mt-8">
      <div className=" flex flex-col items-stretch lg:flex-row mt-10 lg:mt-20  ">
        <AboutProfileImg />
        <AboutProfileText />
      </div>
    </section>
  );
}

export default AboutContent;
