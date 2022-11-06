import React, { createContext, useContext, ReactNode, useState } from "react";

type CursorContextType = {
  cursorVariant: string;
  cursorContent: string | null | ReactNode;
  cursorEnter: (variant: string, content?: string) => void;
  cursorLeave: (variant: string) => void;
};

const cursorContextDefaultValues: CursorContextType = {
  cursorVariant: "default",
  cursorContent: null,
  cursorEnter: () => null,
  cursorLeave: () => null,
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
  const [cursorVariant, setCursorVariant] = useState<string>("default");
  const [cursorContent, setCursorContent] = useState<string | null>(null);

  const cursorEnter = (variant: string, content?: string) => {
    setCursorVariant(variant);
    setCursorContent(content || null);
  };
  const cursorLeave = (variant: string) => {
    setCursorVariant(variant);
    setCursorContent(null);
  };

  const value: CursorContextType = {
    cursorVariant,
    cursorContent,
    cursorEnter,
    cursorLeave,
  };

  return (
    <>
      <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
    </>
  );
}
