import HeroAction from "@components/hero/heroAction";
import HeroText from "@components/hero/heroText";
import Template from "@layouts/template";
import SEO from "@components/seo";
import dynamic from "next/dynamic";

const Decoration = dynamic(() => import("@components/decoration"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SEO description="Personal portfolio of Muhammad Akbar L — a fullstack JavaScript developer building modern web applications with clean design, smooth interactions, and scalable architecture." />
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
