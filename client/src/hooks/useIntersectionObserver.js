import { useEffect, useState } from "react";

export const useIntersectionObserver = ({ rootEl, threshold = 1 }) => {
  const [isIntersectingElement, setIsIntersectingElement] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersectingElement(entry.isIntersecting);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });
      
    observer.observe(rootEl.current);

    return () => observer.unobserve(rootEl.current);
  }, []);

  return isIntersectingElement;
};