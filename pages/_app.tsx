import "@styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutProvider } from "@@context/LayoutContext";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { pageVariants } from "@utils/motion/pageTransition.motion";
import dynamic from "next/dynamic";
import { TransitionProvider, useTransition } from "@@context/TransitionContext";

const CustomCursor = dynamic(() => import("@components/customCursor"), {
  ssr: false,
});
const MobileMenu = dynamic(() => import("@components/mobileMenu"), {
  ssr: false,
});
const ExitOverlay = dynamic(
  () => import("@components/pageTransition/ExitOverlay"),
  { ssr: false },
);
const OpenOverlay = dynamic(
  () => import("@components/pageTransition/OpenOverlay"),
  { ssr: false },
);

function AppContent({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const mdscreen = useMediaQuery("(min-width: 768px)");
  const { phase } = useTransition();

  // Hide preloader on first mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("page-preloader");
      if (loader) {
        setTimeout(() => {
          loader.style.display = "none";
        }, 900);
        setTimeout(() => {
          setShowChild(true);
        }, 1000);
      }
    }
  }, []);

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

        {/* Dual Overlay System */}
        <AnimatePresence mode="wait">
          {phase === "exit" && <ExitOverlay key="exit-overlay" />}
          {(phase === "cover" || phase === "waiting" || phase === "reveal") && (
            <OpenOverlay key="open-overlay" />
          )}
        </AnimatePresence>

        {/* Page content fade transition */}
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
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

export default function App(props: AppProps) {
  return (
    <TransitionProvider>
      <AppContent {...props} />
    </TransitionProvider>
  );
}
