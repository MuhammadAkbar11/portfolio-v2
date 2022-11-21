import React from "react";
import { motion } from "framer-motion";
import { useCursorContext } from "@@context/CursorContext";
import {
  cursorMotionVariants,
  cursorSpanMotionVariants,
} from "./cursor.motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const { cursorVariant, cursorContent } = useCursorContext();

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

  const cMotionVariants = cursorMotionVariants(
    mousePosition.x,
    mousePosition.y
  );

  let cursorWrapperContent = (
    <>
      <motion.div
        className=" h-[18px] w-[18px] cursor hidden md:flex bg-wire-primary "
        variants={cMotionVariants}
        animate={cursorVariant}
      />
    </>
  );

  if (cursorVariant === "heroAction") {
    cursorWrapperContent = (
      <>
        <motion.div
          className="cursor hidden md:flex justify-center items-center sm border-[1px] border-primary overflow-hidden "
          variants={cMotionVariants}
          initial="hidden"
          animate={cursorVariant}
        >
          {cursorContent ? (
            <motion.span
              variants={cursorSpanMotionVariants}
              initial="hidden"
              animate="default"
              className=" text-[13px] font-body "
            >
              {cursorContent}
            </motion.span>
          ) : null}
        </motion.div>{" "}
      </>
    );
  }

  if (cursorVariant === "navlink") {
    cursorWrapperContent = (
      <>
        <motion.div
          className="cursor hidden md:flex justify-center items-center sm border-[1px] border-primary "
          variants={cMotionVariants}
          initial="hidden"
          animate={cursorVariant}
        ></motion.div>
      </>
    );
  }

  return <>{cursorWrapperContent} </>;
}
