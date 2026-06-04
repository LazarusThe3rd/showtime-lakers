import { gsap } from "../gsap";
import SplitType from "split-type";

export function heroIntro() {
  const { chars } = new SplitType(".hero-title", {
    types: "chars",
  });

  gsap.set(".logo-left", { y: -150, opacity: 0 });
  gsap.set(".logo-right", { y: 150, opacity: 0 });
  gsap.set(chars, { x: -50, opacity: 0 });
  gsap.set([".hero-subtitle", ".hero-btn"], {
    y: 30,
    opacity: 0,
  });

  gsap
    .timeline({ delay: 1 })
    .to([".logo-left", ".logo-right"], {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0,
    })
    .to(
      chars,
      {
        x: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .to(
      [".hero-subtitle", ".hero-btn"],
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.4",
    );
}
