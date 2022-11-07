import HeroAction from "@components/hero/heroAction";
import HeroText from "@components/hero/heroText";
import Template from "@layouts/template";
import Head from "next/head";
import Decoration from "@components/decoration";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Akbar L</title>
        <meta name="description" content="Muhammad Akbar Portfolio" />
      </Head>

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
