import React, { createContext, useContext, ReactNode, useState } from "react";

type CursorContextType = {
  cursorVariant: string;
  cursorContent: string | null | ReactNode;
  cursorEnter: (variant: string, content?: string) => void;
  cursorLeave: (variant: string) => void;
  resetCursor: () => void;
};

const cursorContextDefaultValues: CursorContextType = {
  cursorVariant: "visible",
  cursorContent: null,
  cursorEnter: () => null,
  cursorLeave: () => null,
  resetCursor: () => null,
};

export const CursorContext = createContext<CursorContextType>(
  cursorContextDefaultValues
);

export function useCursorContext() {
  return useContext(CursorContext);
}

type Props = {
  children: ReactNode;
};

export function CursorProvider({ children }: Props) {
  const [cursorVariant, setCursorVariant] = useState<string>("visible");
  const [cursorContent, setCursorContent] = useState<string | null>(null);

  const cursorEnter = (variant: string, content?: string) => {
    setCursorVariant(variant);
    setCursorContent(content || null);
  };
  const cursorLeave = (variant: string) => {
    setCursorVariant(variant);
    setCursorContent(null);
  };

  const resetCursor = () => setCursorVariant("visible");

  const value: CursorContextType = {
    cursorVariant,
    cursorContent,
    cursorEnter,
    cursorLeave,
    resetCursor,
  };

  return (
    <>
      <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
    </>
  );
}
