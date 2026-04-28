import "@styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutProvider } from "@@context/LayoutContext";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import CustomCursor from "@components/customCursor";
import MobileMenu from "@components/mobileMenu";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { pageVariants } from "@utils/motion/pageTransition.motion";
import PageTransitionOverlay from "@components/pageTransition";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setIsTransitioning(true);
      }
    };
    const handleComplete = () => setIsTransitioning(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <LayoutProvider>
        {mdscreen ? <CustomCursor /> : null}
        <MobileMenu />
        <AnimatePresence>
          {isTransitioning && <PageTransitionOverlay />}
        </AnimatePresence>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            key={router.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </LayoutProvider>
    </>
  );
}
