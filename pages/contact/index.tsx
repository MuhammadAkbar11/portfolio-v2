import React from "react";
import { useCursorContext } from "@@context/CursorContext";
import Decoration from "@components/decoration";
import HeadingAnimated from "@components/headingAnimated";
import PageSubHeading from "@components/pageSubHeading";
import Footer from "@layouts/footer";
import Template from "@layouts/template";
import Head from "next/head";
import useMediaQuery from "@hooks/useMediaQuery";
import ContactContent from "@components/contactContent";

type Props = {};

function Contact({}: Props) {
  const cursorContext = useCursorContext();
  const mdScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Head>
        <title>Contact || Muhammad Akbar L</title>
        <meta name="description" content="Muhammad Akbar.L Portfolio" />
      </Head>
      <Template>
        <div
          className=" z-[5] bg-secondary/70 relative flex-1 flex flex-col md:flex-row items-stretch w-full flex-wrap  overflow-hidden px-6 md:px-24 "
          onMouseEnter={() => cursorContext.cursorEnter("default")}
        >
          {mdScreen ? (
            <Decoration
              fixed={true}
              size="xl"
              delay={0.9}
              className=" -right-[10%] lg:right-[10%] bottom-[10%]"
            />
          ) : null}
          <section className="flex-1 flex flex-col pt-24 pb-10 z-20">
            <PageSubHeading text="Contact" delay={0.8} />
            <HeadingAnimated
              delay={0.01}
              text="Get In"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] md:text-[5vw] md:leading-[5vw] overflow-hidden md:space-x-4 md:mt-2    "
            />
            <HeadingAnimated
              delay={0.3}
              text="Touch"
              primaryText="Touch"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] md:text-[5vw] md:leading-[5vw] overflow-hidden md:space-x-4 mb-2 "
            />
            <ContactContent />
          </section>
          <section className="flex-1 flex flex-col  h-full pt-28 pb-10 "></section>
        </div>
        <Footer />
      </Template>
    </>
  );
}

export default Contact;
