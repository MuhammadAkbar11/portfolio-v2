import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = React.useState<string>("default");

  const controls = useAnimation();

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const dfvariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    default: {
      x: mousePosition.x - 16 + "px",
      y: mousePosition.y - 16 + "px",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    show: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75 + "px",
      y: mousePosition.y - 75 + "px",
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  // const textEnter = () => setCursorVariant("show");
  // const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <motion.div
        className="cursor"
        variants={dfvariants}
        animate={cursorVariant}
      />
    </div>
  );
}
