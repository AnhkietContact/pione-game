import { useState, useEffect } from "react";

const useInView = (target: string, options: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    const element = document.querySelector(target);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, options]);

  return inView;
};

export default useInView;
