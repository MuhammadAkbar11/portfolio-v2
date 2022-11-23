import { useEffect, useState } from "react";

function useScrollUp() {
  const [lastYPos, setLastYPos] = useState(0);
  const [YTop, setYTop] = useState(false);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  function handleScroll() {
    setIsScroll(true);
    const yPos = window.scrollY;
    const isScrollingUp = yPos < lastYPos;

    const isTop = yPos <= 5;
    setYTop(isTop);
    setShouldShowActions(isScrollingUp);
    setLastYPos(yPos);
  }

  useEffect(() => {
    const hasVScroll = document.body.clientHeight > window.innerHeight;

    if (hasVScroll) {
      window.addEventListener("scroll", handleScroll, false);
    } else {
      setYTop(true);
      setShouldShowActions(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return {
    doActions: shouldShowActions,
    isScrolling: isScroll,
    isYTop: YTop,
    lastYPos,
  };
}

export default useScrollUp;
