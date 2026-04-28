import HeroAction from "@components/hero/heroAction";
import HeroText from "@components/hero/heroText";
import Template from "@layouts/template";
import Decoration from "@components/decoration";
import SEO from "@components/seo";

export default function Home() {
  return (
    <>
      <SEO description="Personal portfolio and introduction of Muhammad Akbar L — Frontend Developer specializing in React, Next.js, and modern web technologies." />
      <Template>
        <section className=" relative overflow-hidden flex flex-col h-full justify-start flex-1 w-full ">
          <Decoration
            size="lg"
            delay={0.4}
            className="right-[5%] bottom-[90%]"
          />
          <HeroText />
          <HeroAction />
        </section>
      </Template>
    </>
  );
}
