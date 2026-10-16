"use client";
import { useEffect, useRef } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-animate]");
    if (targets.length === 0) {
      // The element itself is the target
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            obs.disconnect();
          }
        },
        { threshold: 0.15, ...options }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [options]);

  return ref;
}
