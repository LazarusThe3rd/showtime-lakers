import { gsap } from "../gsap";

export function heroAnimation() {
  gsap.from(".hero h1", {
    opacity: 0,
    y: 100,
    duration: 1.5,
  });
}
