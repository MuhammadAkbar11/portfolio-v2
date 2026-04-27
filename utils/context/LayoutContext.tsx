import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";
import { CursorProvider } from "./CursorContext";

type LayoutContextType = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
};

const layoutContextDefaultValues: LayoutContextType = {
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  closeMobileMenu: () => {},
  openMobileMenu: () => {},
};

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);

  const value: LayoutContextType = {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
  };

  return (
    <LayoutContext.Provider value={value}>
      <CursorProvider>{children}</CursorProvider>
    </LayoutContext.Provider>
  );
}
