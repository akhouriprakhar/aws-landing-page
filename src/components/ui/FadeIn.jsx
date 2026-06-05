"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  // Directional logic
  const translateClass = isVisible 
    ? "translate-y-0 translate-x-0" 
    : direction === "up" ? "translate-y-12" 
    : direction === "left" ? "-translate-x-12" 
    : "translate-x-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${translateClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}