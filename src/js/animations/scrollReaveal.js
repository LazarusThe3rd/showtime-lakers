import { gsap, ScrollTrigger } from "../gsap";

export function scrollReveal() {
  gsap.from(".reveal-box", {
    scrollTrigger: {
      trigger: ".reveal-box",
      start: "top 80%",
    },

    opacity: 0,
    y: 100,
    duration: 1.2,
  });
}
