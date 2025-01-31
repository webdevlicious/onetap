import { useState, useEffect } from 'react';

export const useElementVisibility = (options = { threshold: 0.3 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      options
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => observer.disconnect();
  }, [elementRef, options]);

  return [setElementRef, isVisible];
};