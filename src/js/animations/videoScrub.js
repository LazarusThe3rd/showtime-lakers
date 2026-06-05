import { gsap } from "../gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

console.log("videoScrub running");

export function videoScrub() {
  const video = document.querySelector("#mamba-video");

  ScrollTrigger.create({
    trigger: ".intro",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: true,

    onUpdate: (self) => {
      video.currentTime = self.progress * video.duration;
    },
  });
}
