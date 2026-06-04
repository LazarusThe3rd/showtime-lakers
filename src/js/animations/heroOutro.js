import { gsap } from "../gsap";
import lenis from "../lenis";

export function heroOutro() {
  const button = document.querySelector(".hero-btn");
  const intro = document.querySelector("#intro");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const tl = gsap.timeline();

    tl.to(".hero-btn", {
      opacity: 0,
      y: -30,
      duration: 0.4,
    });

    tl.to(
      ".nike-logo",
      {
        opacity: 0,
        y: -30,
        duration: 0.4,
      },
      "-=0.3",
    );

    tl.to(
      ".hero-subtitle .char",
      {
        opacity: 0,
        x: 50,
        stagger: 0.02,
        duration: 0.3,
      },
      "-=0.2",
    );

    tl.to(
      ".hero-title .char",
      {
        opacity: 0,
        x: 80,
        stagger: 0.03,
        duration: 0.4,
      },
      "-=0.2",
    );

    tl.to(
      ".hero-logo",
      {
        opacity: 0,
        y: -100,
        duration: 0.5,
      },
      "-=0.3",
    )

      .to(".hero-content", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
      })

      .set(".intro", {
        visibility: "visible",
      })

      .to(
        ".intro",
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<",
      );
  });
}
