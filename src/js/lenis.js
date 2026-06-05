import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
  //raf = Request Animation Frame
}

requestAnimationFrame(raf);

export default lenis;
