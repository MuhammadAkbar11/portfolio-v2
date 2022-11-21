import "@styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutProvider } from "@@context/LayoutContext";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import CustomCursor from "@components/customCursor";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  const mdscreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("page-preloader");

      if (loader) {
        setTimeout(() => {
          loader.style.display = "none";
        }, 1000);
        setTimeout(() => {
          setShowChild(true);
        }, 1100);
      }
    }
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Loading... || Muhammad Akbar L</title>
      </Head>
      <LayoutProvider>
        {mdscreen ? <CustomCursor /> : null}
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
}
