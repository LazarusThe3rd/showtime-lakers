import { gsap } from "../gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function heroAnimation() {
  gsap.from(".hero h1", {
    opacity: 0,
    y: 100,
    duration: 1.5,
  });

  gsap.from(".reveal-section h2", {
    opacity: 0,
    y: 100,

    scrollTrigger: {
      trigger: ".reveal-section",
      start: "top 80%",
    },
  });
}
