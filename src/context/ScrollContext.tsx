"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ScrollContextType {
  scrollProgress: number; // 0 to 1
  isScrolledPast: boolean; // true when fully scrolled past hero
  shouldUnload3D: boolean; // true when 3D should be completely unloaded
}

const ScrollContext = createContext<ScrollContextType | null>(null);

// Default values used for both SSR and initial client render
const DEFAULT_SCROLL_STATE = {
  progress: 0,
  isScrolledPast: false,
  shouldUnload: false,
};

function getScrollValues() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const progress = Math.min(scrollY / windowHeight, 1);

  return {
    progress,
    isScrolledPast: progress > 0.8,
    shouldUnload: progress >= 0.95,
  };
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  // Always initialize with default values to match SSR
  const [scrollState, setScrollState] = useState(DEFAULT_SCROLL_STATE);

  useEffect(() => {
    // Sync with actual scroll position after hydration
    const handleScroll = () => {
      const values = getScrollValues();
      setScrollState(values);
    };

    // Get initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contextValue: ScrollContextType = {
    scrollProgress: scrollState.progress,
    isScrolledPast: scrollState.isScrolledPast,
    shouldUnload3D: scrollState.shouldUnload,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
}
