import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageTransition = (delay: number = 300) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  return { isTransitioning };
};
