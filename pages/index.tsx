import HeroAction from "@components/hero/heroAction";
import HeroText from "@components/hero/heroText";
import useMediaQuery from "@hooks/useMediaQuery";
import Template from "@layouts/template";
import Head from "next/head";
import Link from "next/link";
import CustomCursor from "../components/customCursor";

export default function Home() {
  const mdscreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>Muhammad Akbar L</title>
        <meta name="description" content="Muhammad Akbar Portfolio" />
      </Head>

      {mdscreen ? <CustomCursor /> : null}
      <Template>
        <section className=" relative overflow-hidden flex flex-col h-full justify-start flex-1 w-full ">
          <div className=" absolute -z-1 h-[200px] w-[200px] md:h-[350px] md:w-[350px] bg-primary/20 transform right-[5%] top-[10%]  rotate-[30deg] blur-[4rem] "></div>
          <HeroText />
          <HeroAction />
        </section>
      </Template>
    </>
  );
}
