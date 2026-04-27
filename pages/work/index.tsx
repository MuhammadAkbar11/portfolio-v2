import Head from "next/head";
import Template from "@layouts/template";
import HeadingAnimated from "@components/headingAnimated";
import PageSubHeading from "@components/pageSubHeading";
import Footer from "@layouts/footer";
import { useCursorContext } from "@@context/CursorContext";
import Projects from "@components/projects";

export default function Work() {
  const cursorContext = useCursorContext();

  return (
    <>
      <Head>
        <title>Work || Muhammad Akbar L</title>
        <meta name="description" content="Muhammad Akbar.L Portfolio" />
      </Head>
      <Template contentClass="overflow-hidden">
        <section className=" bg-secondary/95 h-max relative  flex flex-col w-full  justify-start flex-1 flex-wrap pt-28 pb-10 overflow-hidden">
          <div
            className="px-6 md:px-20 md:pb-8 "
            onMouseEnter={() => {
              cursorContext.cursorEnter("default");
            }}
          >
            <PageSubHeading text="Work" delay={0.8} />
            <HeadingAnimated
              delay={0.01}
              text="Things"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden md:space-x-4   "
            />
            <HeadingAnimated
              delay={0.03}
              text="That I've been"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden md:space-x-4 lg:-mt-2 "
            />
            <HeadingAnimated
              delay={0.06}
              text="Building"
              primaryText="Building"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden lg:-mt-2 md:space-x-4 "
            />
          </div>
        </section>
        <section className=" relative overflow-hidden flex flex-col h-full justify-start flex-1 w-full bg-transparent pt-5 md:pt-8 lg:pt-5 pb-14 mb-10 mt-8">
          <Projects />
        </section>
        <Footer />
      </Template>
    </>
  );
}
