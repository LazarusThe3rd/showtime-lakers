import { gsap } from "../gsap";

export function heroOutro() {
  const button = document.querySelector(".hero-btn");

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
      ".logo-right",
      {
        opacity: 0,
        y: -100,
        duration: 0.5,
      },
      "-=0.3",
    );

    tl.to(
      ".logo-left",
      {
        opacity: 0,
        y: 100,
        duration: 0.5,
      },
      "-=0.3",
    );

    tl.to(".hero-content", {
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
    });
    tl.call(() => {
      console.log("TRANSITION START");
    });

    tl.to(
      ".transition-row.row-1 .block",
      {
        scaleY: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.inOut",
      },
      "-=0.5",
    );

    tl.to(
      ".transition-row.row-2 .block",
      {
        scaleY: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.inOut",
      },
      "<",
    );

    tl.call(() => {
      window.location.href = "/experience.html";
    });
  });
}
