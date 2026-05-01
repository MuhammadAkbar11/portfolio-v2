import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@utils/hooks/useMediaQuery";
import { cursorPreviewImageVariants } from "./cursorPreview.motion";

type Props = {
  src: string;
  alt: string;
  isActive: boolean;
};

const LERP_EASING = 0.1;

function CursorImagePreview({ src, alt, isActive }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  const animate = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;

    const imgEl = imageRef.current;
    const halfW = imgEl.offsetWidth / 2;
    const halfH = imgEl.offsetHeight / 2;

    // Lerp current position towards target
    currentRef.current.x = lerp(
      currentRef.current.x,
      targetRef.current.x - halfW,
      LERP_EASING,
    );
    currentRef.current.y = lerp(
      currentRef.current.y,
      targetRef.current.y - halfH,
      LERP_EASING,
    );

    containerRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;

    animFrameRef.current = requestAnimationFrame(animate);
  }, [lerp]);

  useEffect(() => {
    if (!isActive || !isDesktop) {
      // Stop animation loop
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isAnimatingRef.current = false;
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      // Start animation loop if not running
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        // Initialize current position to avoid snap on first enter
        currentRef.current = {
          x: e.clientX - (imageRef.current?.offsetWidth || 0) / 2,
          y: e.clientY - (imageRef.current?.offsetHeight || 0) / 2,
        };
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      isAnimatingRef.current = false;
    };
  }, [isActive, isDesktop, animate]);

  // Don't render on mobile
  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      <AnimatePresence>
        {isActive && (
          <div
            ref={containerRef}
            className="absolute pointer-events-none will-change-transform"
            style={{
              left: 0,
              top: 0,
            }}
          >
            <motion.div
              className="relative w-[340px] h-[220px] sm:w-[400px] sm:h-[260px] overflow-hidden rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-slate/20"
              variants={cursorPreviewImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CursorImagePreview;
