import { gsap } from "../gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function videoShrink() {
  gsap.to(".video-wrapper", {
    scale: 0.55,

    scrollTrigger: {
      trigger: ".intro",
      start: "20% top",
      end: "55% top",
      scrub: true,
    },
  });
}
