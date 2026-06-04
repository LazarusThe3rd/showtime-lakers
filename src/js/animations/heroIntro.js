import { gsap } from "../gsap";
import SplitType from "split-type";

export function heroIntro() {
  const { chars } = new SplitType(".hero-title", {
    types: "chars",
  });

  const { chars: subtitleChars } = new SplitType(".hero-subtitle", {
    types: "chars",
  });

  gsap.set(".logo-left", { y: -150, opacity: 0 });
  gsap.set(".logo-right", { y: 150, opacity: 0 });
  gsap.set(chars, { x: -50, opacity: 0 });
  gsap.set(subtitleChars, { x: -30, opacity: 0 });
  gsap.set(".nike-logo", { y: 30, opacity: 0 });
  gsap.set(".hero-btn", { y: 30, opacity: 0 });

  const tl = gsap.timeline({ delay: 1 });

  tl.to(".logo-left", {
    y: 0,
    opacity: 1,
    duration: 1,
  });

  tl.to(
    ".logo-right",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    "<",
  );

  tl.to(
    chars,
    {
      x: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.8,
    },
    "-=0.3",
  );

  tl.to(
    subtitleChars,
    {
      x: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4",
  );

  tl.to(
    ".nike-logo",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.2",
  );

  tl.to(
    ".hero-btn",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.2",
  );

  tl.to(".intro-screen", {
    opacity: 0,
    duration: 1.2,
  });

  gsap.set(".nike-logo", {
    y: 30,
    opacity: 0,
  });
}
