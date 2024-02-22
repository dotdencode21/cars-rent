import { useEffect, useState } from "react";

const Y_OFFSET = 125;

export const useScroll = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollValue]);

  return { scrollValue, isScrollingStart: scrollValue >= Y_OFFSET };
};

