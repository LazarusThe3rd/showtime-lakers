import { gsap } from "../gsap";
import lenis from "../lenis";

export function navbar() {
  const button = document.querySelector(".nav-toggle");
  const curtain = document.querySelector(".menu-curtain");

  let isOpen = false;

  lenis.on("scroll", (e) => {
    if (e.direction === 1) {
      gsap.to(".experience-nav", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (e.direction === -1) {
      gsap.to(".experience-nav", {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  button.addEventListener("click", () => {
    if (!isOpen) {
      button.classList.add("active");
      gsap.to(curtain, {
        y: 0,
        duration: 1.2,
        ease: "power4.inOut",
      });

      isOpen = true;
    } else {
      button.classList.remove("active");
      gsap.to(curtain, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });

      isOpen = false;
    }
  });
}
