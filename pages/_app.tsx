import "@styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutProvider } from "@@context/LayoutContext";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import CustomCursor from "@components/customCursor";
import MobileMenu from "@components/mobileMenu";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { pageVariants } from "@utils/motion/pageTransition.motion";
import PageTransitionOverlay from "@components/pageTransition";

// Ordered list of known routes for direction detection
const ROUTE_ORDER = ["/", "/about", "/work"];

function getDirection(
  from: string,
  to: string
): "forward" | "backward" {
  const fromIdx = ROUTE_ORDER.indexOf(from);
  const toIdx = ROUTE_ORDER.indexOf(to);
  if (fromIdx === -1 || toIdx === -1) return "forward";
  return toIdx >= fromIdx ? "forward" : "backward";
}

// Total cover duration = columns stagger + single column duration
// 6 columns × 0.07s stagger + 0.75s column = ~1.17s  →  use 1.0s safety margin
const COVER_DELAY_MS = 1000;

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const router = useRouter();
  const currentPath = useRef(router.pathname);

  const mdscreen = useMediaQuery("(min-width: 768px)");

  // Hide preloader on first mount
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

  // Intercept link navigation to control transition timing
  const transitionStartTime = useRef(0);

  useEffect(() => {
    const handleStart = (url: string) => {
      const nextPath = url.split("?")[0];
      if (nextPath !== router.asPath) {
        const dir = getDirection(currentPath.current, nextPath);
        setDirection(dir);
        transitionStartTime.current = Date.now();
        setIsTransitioning(true);
      }
    };

    const handleComplete = (url: string) => {
      currentPath.current = url.split("?")[0];
      const elapsed = Date.now() - transitionStartTime.current;
      const minDuration = 1200; // time it takes for overlay to enter fully
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsTransitioning(false);
      }, remaining);
    };

    const handleError = () => {
      setIsTransitioning(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
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

        {/* Fullscreen column overlay — sits above page content */}
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <PageTransitionOverlay key="transition-overlay" direction={direction} />
          )}
        </AnimatePresence>

        {/* Page content fade transition */}
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
