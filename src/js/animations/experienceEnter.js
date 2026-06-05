import { gsap } from "../gsap";

export function experienceEnter() {
  gsap.set(".block", {
    scaleY: 1,
  });

  gsap.to(".block", {
    scaleY: 0,
    duration: 1,
    stagger: 0.08,
    ease: "power3.inOut",
  });
}
