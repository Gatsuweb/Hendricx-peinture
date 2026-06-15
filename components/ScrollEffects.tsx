"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealSelector = ".reveal, .maskReveal";
    const observer = new IntersectionObserver(
      (entries, entryObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            entryObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    let frame = 0;
    const timeouts: number[] = [];

    const revealVisibleElements = () => {
      document.querySelectorAll(revealSelector).forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;

        if (isInView) {
          element.classList.add("isVisible");
          observer.unobserve(element);
          return;
        }

        if (!element.classList.contains("isVisible")) {
          observer.observe(element);
        }
      });
    };

    const scheduleRevealCheck = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(revealVisibleElements);
    };

    scheduleRevealCheck();
    timeouts.push(window.setTimeout(scheduleRevealCheck, 120));
    timeouts.push(window.setTimeout(scheduleRevealCheck, 500));

    const mutationObserver = new MutationObserver(scheduleRevealCheck);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const hero = document.querySelector<HTMLElement>("[data-hero]");

    const moveOnScroll = () => {
      const scrollY = window.scrollY;
      scheduleRevealCheck();

      if (scrollY < window.innerHeight) {
        document.querySelectorAll<HTMLElement>("[data-parallax-speed]").forEach((image) => {
          const speed = Number(image.dataset.parallaxSpeed ?? 0);
          image.style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    const moveOnMouse = (event: MouseEvent) => {
      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;
      document.querySelectorAll<HTMLElement>("[data-parallax-speed]").forEach((image) => {
        const speed = Number(image.dataset.parallaxSpeed ?? 0);
        image.style.transform = `translate(${mouseX * 20}px, ${
          mouseY * 20 + window.scrollY * speed
        }px)`;
      });
    };

    const resetMouse = () => {
      document.querySelectorAll<HTMLElement>("[data-parallax-speed]").forEach((image) => {
        const speed = Number(image.dataset.parallaxSpeed ?? 0);
        image.style.transform = `translate(0px, ${window.scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", moveOnScroll, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    window.addEventListener("load", scheduleRevealCheck);
    hero?.addEventListener("mousemove", moveOnMouse);
    hero?.addEventListener("mouseleave", resetMouse);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      mutationObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("scroll", moveOnScroll);
      window.removeEventListener("resize", scheduleRevealCheck);
      window.removeEventListener("load", scheduleRevealCheck);
      hero?.removeEventListener("mousemove", moveOnMouse);
      hero?.removeEventListener("mouseleave", resetMouse);
    };
  }, [pathname]);

  return null;
}
