import {
  createContext,
  useContext,
  ReactNode,
  // useState,
  // useEffect,
} from "react";
import { CursorProvider } from "./CursorContext";

type LayoutContextType = {};

const layoutContextDefaultValues: LayoutContextType = {};

export const LayoutContext = createContext<LayoutContextType>(
  layoutContextDefaultValues
);

export function useLayout() {
  return useContext(LayoutContext);
}

type Props = {
  children: ReactNode;
};

export function LayoutProvider({ children }: Props) {
  const value: LayoutContextType = {};
  return (
    <>
      <LayoutContext.Provider value={value}>
        <CursorProvider>{children}</CursorProvider>
      </LayoutContext.Provider>
    </>
  );
}
