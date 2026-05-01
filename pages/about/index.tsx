import Template from "@layouts/template";
import HeadingAnimated from "@components/headingAnimated";
import PageSubHeading from "@components/pageSubHeading";
import AboutContent from "@components/aboutContent";
import AboutSkill from "@components/aboutSkill";
import { useCursorContext } from "@@context/CursorContext";
import useMediaQuery from "@hooks/useMediaQuery";
import SEO from "@components/seo";
import dynamic from "next/dynamic";

const Decoration = dynamic(() => import("@components/decoration"), {
  ssr: false,
});
const Footer = dynamic(() => import("@layouts/footer"));

export default function About() {
  const cursorContext = useCursorContext();
  const mdScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Muhammad Akbar L — a fullstack JavaScript developer focused on building modern, scalable web applications with clean design and user-centered experiences."
      />
      <Template>
        <section className=" z-[5] bg-secondary/95 h-max relative  flex flex-col w-full  justify-start flex-1 flex-wrap pt-28 pb-10 overflow-hidden">
          {mdScreen ? <Decoration size="lg" delay={0.1} /> : null}
          <Decoration
            size="sm"
            delay={0.2}
            className=" right-[10%] md:left-[10%] top-[20%]"
          />
          <div
            className="px-6 md:px-20 md:pb-8 "
            onMouseEnter={() => {
              cursorContext.cursorEnter("default");
            }}
          >
            <PageSubHeading text="About" delay={0.8} />
            <HeadingAnimated
              delay={0.01}
              text="How do"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden md:space-x-4   "
            />
            <HeadingAnimated
              delay={0.03}
              text="I Say About"
              primaryText="About"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden md:space-x-4 lg:-mt-2 "
            />
            <HeadingAnimated
              delay={0.06}
              text="My Self?"
              className="text-light flex uppercase font-heading text-[7vw] leading-[7vw] overflow-hidden lg:-mt-2 md:space-x-4 "
            />
          </div>
        </section>
        <AboutContent />
        <AboutSkill />
        <Footer />
      </Template>
    </>
  );
}
