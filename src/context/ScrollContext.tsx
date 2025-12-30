"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";

interface ScrollContextType {
  scrollProgress: number; // 0 to 1
  isScrolledPast: boolean; // true when fully scrolled past hero
  shouldUnload3D: boolean; // true when 3D should be completely unloaded
}

const ScrollContext = createContext<ScrollContextType | null>(null);

function getScrollValues() {
  if (typeof window === "undefined") {
    return { progress: 0, isScrolledPast: false, shouldUnload: false };
  }

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
  // Initialize with current scroll position
  const [scrollState, setScrollState] = useState(() => getScrollValues());

  useEffect(() => {
    const handleScroll = () => {
      const values = getScrollValues();
      setScrollState(values);
    };

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
