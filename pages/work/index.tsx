import Template from "@layouts/template";
import HeadingAnimated from "@components/headingAnimated";
import PageSubHeading from "@components/pageSubHeading";
import { useCursorContext } from "@@context/CursorContext";
import Projects from "@components/projects";
import SEO from "@components/seo";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@layouts/footer"));

export default function Work() {
  const cursorContext = useCursorContext();

  return (
    <>
      <SEO
        title="Work"
        description="Explore projects by Muhammad Akbar L — a fullstack JavaScript developer creating modern web applications with a focus on performance, scalability, and smooth user interactions."
      />
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
