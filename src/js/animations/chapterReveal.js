import { gsap } from "../gsap";

export function chapterReveal() {
  gsap.to(".chapter-one", {
    yPercent: 0,

    scrollTrigger: {
      trigger: ".intro",
      start: "100% top",
      end: "bottom top",
      scrub: true,
    },
  });
}
