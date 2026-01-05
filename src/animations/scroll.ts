import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin ONCE
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade + slide up animation
 * Content-agnostic
 */
export function fadeUp(element: HTMLElement) {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%"
      }
    }
  );
}
