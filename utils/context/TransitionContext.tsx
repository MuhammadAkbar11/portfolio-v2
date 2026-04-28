import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/router";

export type TransitionPhase = "idle" | "exit" | "cover" | "reveal";

interface TransitionContextType {
  isTransitioning: boolean;
  phase: TransitionPhase;
  direction: "forward" | "backward";
  targetRoute: string | null;
  navigateTo: (url: string) => void;
  onExitOverlayComplete: () => void;
  onOpenOverlayComplete: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
);

const ROUTE_ORDER = ["/", "/about", "/work", "/contact"];

function getDirection(from: string, to: string): "forward" | "backward" {
  const fromIdx = ROUTE_ORDER.indexOf(from);
  const toIdx = ROUTE_ORDER.indexOf(to);
  if (fromIdx === -1 || toIdx === -1) return "forward";
  return toIdx >= fromIdx ? "forward" : "backward";
}

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const router = useRouter();

  const navigateTo = useCallback(
    (url: string) => {
      if (isTransitioning) return;
      if (url === router.asPath) return;

      setDirection(getDirection(router.asPath, url));
      setTargetRoute(url);
      setIsTransitioning(true);
      setPhase("exit");
    },
    [isTransitioning, router.asPath],
  );

  const onExitOverlayComplete = useCallback(() => {
    if (phase !== "exit" || !targetRoute) return;
    setPhase("cover");
    router.push(targetRoute);
  }, [phase, targetRoute, router]);

  const onOpenOverlayComplete = useCallback(() => {
    if (phase !== "reveal") return;
    setIsTransitioning(false);
    setPhase("idle");
    setTargetRoute(null);
  }, [phase]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      // Add delay hide open overlay so the visual animation can animate properly
      setTimeout(() => {
        setPhase(prev => {
          if (prev === "cover") {
            return "reveal";
          }
          return prev;
        });
      }, 1000);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        phase,
        direction,
        targetRoute,
        navigateTo,
        onExitOverlayComplete,
        onOpenOverlayComplete,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
